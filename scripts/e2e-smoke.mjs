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
      if (!response || !response.ok()) {
        failures.push(`${project.name} ${route}: HTTP ${response?.status() ?? 'no response'}`);
        continue;
      }

      const bodyText = (await page.locator('body').innerText()).trim();
      if (bodyText.length < 100) failures.push(`${project.name} ${route}: page rendered too little substantive content`);

      const h1Count = await page.locator('h1').count();
      if (h1Count !== 1) failures.push(`${project.name} ${route}: expected exactly one h1, found ${h1Count}`);

      const horizontalOverflow = await page.evaluate(() => document.documentElement.scrollWidth > document.documentElement.clientWidth + 2);
      if (horizontalOverflow) failures.push(`${project.name} ${route}: page has horizontal viewport overflow`);
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
