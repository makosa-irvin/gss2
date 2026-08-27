import { useState, lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import { DataProvider, useData } from './context/DataContext';
import { Tour, Hotel, Destination } from './types';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { FloatingWhatsApp } from './components/common/FloatingWhatsApp';
import { EnquiryModal } from './components/common/EnquiryModal';
import { PageMeta } from './components/common/PageMeta';

// HomePage is the entry point for the large majority of visits, so it
// (and its own imports, e.g. SafariBuilderWizard - see below) stays in
// the main bundle: lazy-loading it would just add a waterfall for the
// route almost everyone lands on. Every other route is genuinely
// optional per-visit, so it's lazy-loaded below - this is what was
// driving the "58% of the JS bundle is unused on this page" Lighthouse
// finding: the homepage was shipping and parsing code for the admin
// dashboard, every detail page template, and the blog, none of which a
// homepage visitor necessarily ever uses.
import { HomePage } from './views/HomePage';
import { SafariBuilderWizard } from './components/builder/SafariBuilderWizard';

const DestinationsView = lazy(() => import('./views/DestinationsView').then(m => ({ default: m.DestinationsView })));
const AboutView = lazy(() => import('./views/AboutView').then(m => ({ default: m.AboutView })));
const ContactView = lazy(() => import('./views/ContactView').then(m => ({ default: m.ContactView })));
// The admin dashboard is by far the heaviest view (CMS forms/tables for
// every content type) and is only ever loaded by one person - the site
// owner - so it's the single biggest win to keep out of the shared
// bundle entirely.
const AdminDashboardView = lazy(() => import('./views/AdminDashboardView').then(m => ({ default: m.AdminDashboardView })));

const TourDetailRoute = lazy(() => import('./routes/TourDetailRoute').then(m => ({ default: m.TourDetailRoute })));
const HotelDetailRoute = lazy(() => import('./routes/HotelDetailRoute').then(m => ({ default: m.HotelDetailRoute })));
const DestinationDetailRoute = lazy(() => import('./routes/DestinationDetailRoute').then(m => ({ default: m.DestinationDetailRoute })));
const ToursExplorerRoute = lazy(() => import('./routes/ToursExplorerRoute').then(m => ({ default: m.ToursExplorerRoute })));
const HotelsExplorerRoute = lazy(() => import('./routes/HotelsExplorerRoute').then(m => ({ default: m.HotelsExplorerRoute })));
const BlogRoute = lazy(() => import('./routes/BlogRoute').then(m => ({ default: m.BlogRoute })));
const AdminRoute = lazy(() => import('./routes/AdminRoute').then(m => ({ default: m.AdminRoute })));
const NotFoundView = lazy(() => import('./routes/NotFoundView').then(m => ({ default: m.NotFoundView })));

// Minimal, layout-stable fallback shown only while a lazy route chunk is
// downloading (typically well under a second on a warm connection) -
// deliberately not a full-page spinner, since the Navbar/Footer around
// it are already visible and interactive.
const RouteFallback = () => (
  <div className="min-h-[50vh] flex items-center justify-center">
    <p className="text-sm text-[#a3b2a7]">Loading…</p>
  </div>
);

/**
 * Translates the app's old string-based `onNavigate(view, payload)` calls
 * (still used throughout Navbar, Footer, and HomePage) into real URLs.
 * Keeping this adapter in one place means none of those ~40 existing call
 * sites needed to change - only what "navigate" actually does underneath
 * changed, from setting local state to pushing a real browser URL.
 */
function useLegacyNavigate() {
  const navigate = useNavigate();
  const { destinations } = useData();

  return (view: string, payload?: any) => {
    window.scrollTo({ top: 0, behavior: 'smooth' });

    switch (view) {
      case 'home':
        return navigate('/');
      case 'tours': {
        const params = new URLSearchParams();
        if (payload) {
          for (const key of ['destination', 'duration', 'travelStyle', 'travelerType', 'country']) {
            if (payload[key]) params.set(key, payload[key]);
          }
        }
        const qs = params.toString();
        return navigate(qs ? `/safaris?${qs}` : '/safaris');
      }
      case 'destinations': {
        if (payload?.destinationId) {
          const dest = destinations.find(d => d.id === payload.destinationId);
          if (dest) return navigate(`/destinations/${dest.slug}`);
        }
        return navigate('/destinations');
      }
      case 'hotels': {
        return navigate(payload?.residentOnly ? '/hotels?resident=true' : '/hotels');
      }
      case 'builder':
        return navigate('/safari-builder');
      case 'blog':
        return navigate(payload?.postSlug ? `/blog/${payload.postSlug}` : '/blog');
      case 'about':
        return navigate('/about');
      case 'contact':
        return navigate('/contact');
      case 'admin':
        return navigate('/admin');
      default:
        return navigate('/');
    }
  };
}

const BuilderPage: React.FC<{ onOpenEnquiryModal: (payload?: any) => void }> = ({ onOpenEnquiryModal }) => {
  const navigate = useNavigate();
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-8 py-10 space-y-8">
      <PageMeta
        title="Custom Safari Builder"
        description="Answer a few quick questions to get a tailor-made Kenya, Tanzania, or Zanzibar safari itinerary and pricing estimate."
        canonicalPath="/safari-builder"
      />
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <span className="text-xs font-bold uppercase tracking-widest text-[#c49a45]">
          Tailor-Made Journey Engine
        </span>
        <h1 className="font-serif-luxury text-3xl sm:text-5xl font-bold text-[#f4f2eb]">
          Custom Safari Builder
        </h1>
        <p className="text-sm text-[#a3b2a7]">
          Answer 6 quick questions to discover your ideal route, pricing estimate, and receive a bespoke itinerary proposal from our lead safari naturalists.
        </p>
      </div>

      <SafariBuilderWizard
        onSelectTour={(tour: Tour) => navigate(`/safaris/${tour.slug}`)}
        onCompleteEnquiry={onOpenEnquiryModal}
      />
    </div>
  );
};

const MainAppContent: React.FC = () => {
  const legacyNavigate = useLegacyNavigate();
  const navigate = useNavigate();
  const location = useLocation();
  const { tours, isLoading, loadError } = useData();

  // Global Enquiry Modal state - genuinely global (can be triggered from
  // almost any page), so it stays lifted here rather than per-route.
  const [isEnquiryModalOpen, setIsEnquiryModalOpen] = useState(false);
  const [enquiryModalData, setEnquiryModalData] = useState<{
    selectedTour?: Tour | null;
    selectedHotel?: Hotel | null;
    initialType?: string;
  }>({});

  const openEnquiryModal = (data?: {
    selectedTour?: Tour | null;
    selectedHotel?: Hotel | null;
    initialType?: string;
  }) => {
    setEnquiryModalData(data || {});
    setIsEnquiryModalOpen(true);
  };

  const handleSelectTour = (tour: Tour) => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    navigate(`/safaris/${tour.slug}`);
  };

  const handleSelectDestination = (destination: Destination) => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    navigate(`/destinations/${destination.slug}`);
  };

  const handleSelectHotel = (hotel: Hotel) => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    navigate(`/hotels/${hotel.slug}`);
  };

  // FloatingWhatsApp wants the tour's title (for a friendlier prefilled
  // WhatsApp message), but the URL only has the slug - look the real tour
  // up from context rather than guessing a title from the slug string.
  const currentTourTitleForWhatsApp = location.pathname.startsWith('/safaris/')
    ? tours.find(t => t.slug === location.pathname.split('/')[2])?.title
    : undefined;

  // Every view in this app assumes tours/hotels/destinations/etc. from
  // useData() are already-populated arrays, same as when this data came
  // from localStorage synchronously - so gate the whole app behind the
  // initial API fetch here rather than adding a loading check to every
  // individual view.
  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#0c120e] text-[#f4f2eb]">
        <p className="text-sm text-[#a3b2a7]">Loading Good Secrets Safaris...</p>
      </div>
    );
  }

  if (loadError) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-4 bg-[#0c120e] text-[#f4f2eb] px-4 text-center">
        <p className="text-sm text-[#f4f2eb]">{loadError}</p>
        <button
          onClick={() => window.location.reload()}
          className="px-5 py-2.5 rounded-xl bg-[#b3822a] hover:bg-[#9e7120] text-white font-bold text-xs uppercase tracking-wider"
        >
          Retry
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-[#0c120e] text-[#f4f2eb] selection:bg-[#c49a45] selection:text-black">
      <Navbar onNavigate={legacyNavigate} onOpenEnquiryModal={openEnquiryModal} />

      <main className="flex-1">
        <Suspense fallback={<RouteFallback />}>
        <Routes>
          <Route
            path="/"
            element={
              <HomePage
                onNavigate={legacyNavigate}
                onSelectTour={handleSelectTour}
                onSelectDestination={handleSelectDestination}
                onSelectHotel={handleSelectHotel}
                onOpenEnquiryModal={openEnquiryModal}
              />
            }
          />

          <Route path="/safaris" element={<ToursExplorerRoute onOpenEnquiryModal={openEnquiryModal} />} />
          <Route path="/safaris/:slug" element={<TourDetailRoute onOpenEnquiryModal={openEnquiryModal} />} />

          <Route
            path="/destinations"
            element={<DestinationsView onSelectDestination={handleSelectDestination} />}
          />
          <Route path="/destinations/:slug" element={<DestinationDetailRoute onOpenEnquiryModal={openEnquiryModal} />} />

          <Route path="/hotels" element={<HotelsExplorerRoute onOpenEnquiryModal={openEnquiryModal} />} />
          <Route path="/hotels/:slug" element={<HotelDetailRoute onOpenEnquiryModal={openEnquiryModal} />} />

          <Route path="/safari-builder" element={<BuilderPage onOpenEnquiryModal={openEnquiryModal} />} />

          <Route path="/blog" element={<BlogRoute onOpenEnquiryModal={openEnquiryModal} />} />
          <Route path="/blog/:slug" element={<BlogRoute onOpenEnquiryModal={openEnquiryModal} />} />

          <Route path="/about" element={<AboutView onOpenEnquiryModal={openEnquiryModal} />} />
          <Route path="/contact" element={<ContactView />} />

          <Route
            path="/admin"
            element={
              <AdminRoute>
                <AdminDashboardView
                  onNavigateHome={() => navigate('/')}
                  onPreviewTour={(tour) => navigate(`/safaris/${tour.slug}`)}
                />
              </AdminRoute>
            }
          />

          <Route path="*" element={<NotFoundView />} />
        </Routes>
        </Suspense>
      </main>

      <Footer onNavigate={legacyNavigate} onOpenEnquiryModal={openEnquiryModal} />

      <FloatingWhatsApp currentTourTitle={currentTourTitleForWhatsApp} />

      <EnquiryModal
        isOpen={isEnquiryModalOpen}
        onClose={() => setIsEnquiryModalOpen(false)}
        selectedTour={enquiryModalData.selectedTour}
        selectedHotel={enquiryModalData.selectedHotel}
        initialType={enquiryModalData.initialType}
      />
    </div>
  );
};

export default function App() {
  return (
    <BrowserRouter>
      <DataProvider>
        <MainAppContent />
      </DataProvider>
    </BrowserRouter>
  );
}
