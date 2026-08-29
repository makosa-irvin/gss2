import { chromium, devices } from 'playwright';

const baseUrl = process.env.E2E_BASE_URL || 'http://127.0.0.1:4173';
const routes = ['/', '/tours'];
const projects = [
  { name: 'desktop', viewport: { width: 1440, height: 900 } },
  { name: 'mobile', ...devices['iPhone 13'] },
];

const settingsFixture = {
  companyName: 'Good Secrets Safaris',
  tagline: 'Your Africa. Your Story. Your Safari.',
  description: 'Safari planning fixture for browser smoke testing.',
  logoUrl: '',
  contact: {
    email: 'test@example.com',
    phone: '+254700000000',
    whatsapp: '+254700000000',
    address: 'Nairobi, Kenya',
    businessHours: 'Daily',
  },
  social: { instagram: '', facebook: '', tiktok: '', youtube: '', linkedin: '' },
  currency: { primary: 'USD', exchangeRateUsdToKes: 130 },
  booking: {
    defaultEnquiryMessage: 'Test enquiry',
    bookingEmail: 'test@example.com',
    whatsappNumber: '+254700000000',
    whatsappDefaultMessage: 'Test safari enquiry',
  },
  seo: {
    defaultTitle: 'Good Secrets Safaris',
    defaultDescription: 'Safari planning test fixture.',
    defaultOgImage: '',
  },
};

const catalogFixtures = {
  '/api/tours': [],
  '/api/hotels': [],
  '/api/destinations': [],
  '/api/blog': [],
  '/api/testimonials': [],
  '/api/settings': settingsFixture,
};

const browser = await chromium.launch();
const failures = [];

try {
  for (const project of projects) {
    const context = await browser.newContext(project);
    const page = await context.newPage();

    await page.route('**/api/**', async (route) => {
      const requestUrl = new URL(route.request().url());
      const fixture = catalogFixtures[requestUrl.pathname];

      if (requestUrl.pathname === '/api/auth/me') {
        await route.fulfill({ status: 401, contentType: 'application/json', body: JSON.stringify({ error: 'Not authenticated.' }) });
        return;
      }

      if (fixture !== undefined) {
        await route.fulfill({ status: 200, contentType: 'application/json', body: JSON.stringify(fixture) });
        return;
      }

      await route.fulfill({ status: 404, contentType: 'application/json', body: JSON.stringify({ error: 'No browser-smoke fixture for this endpoint.' }) });
    });

    page.on('pageerror', (error) => failures.push(`${project.name}: page error: ${error.message}`));

    for (const route of routes) {
      const response = await page.goto(`${baseUrl}${route}`, { waitUntil: 'networkidle', timeout: 30_000 });
      const prefix = `${project.name} ${route}`;

      if (!response || !response.ok()) {
        failures.push(`${prefix}: HTTP ${response?.status() ?? 'no response'}`);
        continue;
      }

      const bodyText = (await page.locator('body').innerText()).trim();
      if (bodyText.length < 100) failures.push(`${prefix}: page rendered too little substantive content`);

      const h1Count = await page.locator('h1').count();
      if (h1Count !== 1) failures.push(`${prefix}: expected exactly one h1, found ${h1Count}`);

      const horizontalOverflow = await page.evaluate(() => document.documentElement.scrollWidth > document.documentElement.clientWidth + 2);
      if (horizontalOverflow) failures.push(`${prefix}: page has horizontal viewport overflow`);

      // Lightweight accessibility regressions that do not depend on an
      // external scanning service. Full WCAG audits still require axe/manual
      // review, but these catch common mistakes on every PR.
      const imagesMissingAlt = await page.locator('img:not([alt])').count();
      if (imagesMissingAlt > 0) failures.push(`${prefix}: ${imagesMissingAlt} image(s) are missing an alt attribute`);

      const unnamedButtons = await page.locator('button').evaluateAll((buttons) =>
        buttons.filter((button) => {
          const text = button.textContent?.trim();
          return !text && !button.getAttribute('aria-label') && !button.getAttribute('aria-labelledby') && !button.getAttribute('title');
        }).length
      );
      if (unnamedButtons > 0) failures.push(`${prefix}: ${unnamedButtons} button(s) have no accessible name`);

      const unnamedControls = await page.locator('input:not([type="hidden"]), select, textarea').evaluateAll((controls) =>
        controls.filter((control) => {
          const id = control.getAttribute('id');
          const hasLabel = id ? Boolean(document.querySelector(`label[for="${CSS.escape(id)}"]`)) : false;
          const wrappedByLabel = Boolean(control.closest('label'));
          return !hasLabel && !wrappedByLabel && !control.getAttribute('aria-label') && !control.getAttribute('aria-labelledby');
        }).length
      );
      if (unnamedControls > 0) failures.push(`${prefix}: ${unnamedControls} form control(s) have no associated accessible label`);

      // Public acquisition pages should never silently lose their basic SEO
      // metadata during a refactor.
      const title = (await page.title()).trim();
      if (title.length < 10) failures.push(`${prefix}: document title is missing or too short`);

      const description = await page.locator('meta[name="description"]').getAttribute('content');
      if (!description?.trim()) failures.push(`${prefix}: meta description is missing`);

      const canonical = await page.locator('link[rel="canonical"]').getAttribute('href');
      if (!canonical?.trim()) failures.push(`${prefix}: canonical URL is missing`);

      const language = await page.locator('html').getAttribute('lang');
      if (!language?.trim()) failures.push(`${prefix}: html lang attribute is missing`);
    }

    await context.close();
  }
} finally {
  await browser.close();
}

if (failures.length) {
  console.error('\nBrowser smoke checks failed:\n');
  for (const failure of failures) console.error(` - ${failure}`);
  process.exit(1);
}

console.log(`Browser smoke checks passed for ${routes.length} routes across ${projects.length} viewport profiles.`);
