import { useState, lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route, Navigate, useNavigate, useLocation } from 'react-router-dom';
import { DataProvider, useData } from './context/DataContext';
import { ShortlistProvider } from './context/ShortlistContext';
import { Tour, Hotel, Destination } from './types';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { FloatingWhatsApp } from './components/common/FloatingWhatsApp';
import { EnquiryModal } from './components/common/EnquiryModal';
import { PageMeta } from './components/common/PageMeta';
import { AnalyticsTracker } from './components/common/AnalyticsTracker';
import { AnalyticsConsentBanner } from './components/common/AnalyticsConsentBanner';
import { HomePage } from './views/HomePage';
import { SafariBuilderWizard } from './components/builder/SafariBuilderWizard';

const DestinationsView = lazy(() => import('./views/DestinationsView').then(m => ({ default: m.DestinationsView })));
const AboutView = lazy(() => import('./views/AboutView').then(m => ({ default: m.AboutView })));
const ContactView = lazy(() => import('./views/ContactView').then(m => ({ default: m.ContactView })));
const ReviewsView = lazy(() => import('./views/ReviewsView').then(m => ({ default: m.ReviewsView })));
const ShortlistView = lazy(() => import('./views/ShortlistView').then(m => ({ default: m.ShortlistView })));
const PlanningWithUsView = lazy(() => import('./views/PlanningWithUsView').then(m => ({ default: m.PlanningWithUsView })));
const SafariGuidesView = lazy(() => import('./views/SafariGuidesView').then(m => ({ default: m.SafariGuidesView })));
const DirectBookingArticleView = lazy(() => import('./views/DirectBookingArticleView').then(m => ({ default: m.DirectBookingArticleView })));
const LegalView = lazy(() => import('./views/LegalView').then(m => ({ default: m.LegalView })));
const AdminDashboardView = lazy(() => import('./views/AdminDashboardView').then(m => ({ default: m.AdminDashboardView })));
const TourDetailRoute = lazy(() => import('./routes/TourDetailRoute').then(m => ({ default: m.TourDetailRoute })));
const HotelDetailRoute = lazy(() => import('./routes/HotelDetailRoute').then(m => ({ default: m.HotelDetailRoute })));
const DestinationDetailRoute = lazy(() => import('./routes/DestinationDetailRoute').then(m => ({ default: m.DestinationDetailRoute })));
const ToursExplorerRoute = lazy(() => import('./routes/ToursExplorerRoute').then(m => ({ default: m.ToursExplorerRoute })));
const HotelsExplorerRoute = lazy(() => import('./routes/HotelsExplorerRoute').then(m => ({ default: m.HotelsExplorerRoute })));
const BlogRoute = lazy(() => import('./routes/BlogRoute').then(m => ({ default: m.BlogRoute })));
const AdminRoute = lazy(() => import('./routes/AdminRoute').then(m => ({ default: m.AdminRoute })));
const NotFoundView = lazy(() => import('./routes/NotFoundView').then(m => ({ default: m.NotFoundView })));

const RouteFallback = () => <div className="min-h-[50vh] flex items-center justify-center"><p className="text-sm text-on-shell-subtle">Loading…</p></div>;

function useLegacyNavigate() {
  const navigate = useNavigate(); const { destinations } = useData();
  return (view: string, payload?: any) => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    switch (view) {
      case 'home': return navigate('/');
      case 'tours': { const params = new URLSearchParams(); if (payload) for (const key of ['destination','duration','travelStyle','travelerType','country']) if (payload[key]) params.set(key,payload[key]); const qs=params.toString(); return navigate(qs?`/safaris?${qs}`:'/safaris'); }
      case 'destinations': { if (payload?.destinationId) { const dest=destinations.find(d=>d.id===payload.destinationId); if(dest) return navigate(`/destinations/${dest.slug}`); } return navigate('/destinations'); }
      case 'hotels': return navigate(payload?.residentOnly?'/hotels?resident=true':'/hotels');
      case 'builder': return navigate('/safari-builder');
      case 'blog': return navigate(payload?.postSlug?`/blog/${payload.postSlug}`:'/blog');
      case 'guides': return navigate(payload?.slug?`/guides/${payload.slug}`:'/guides');
      case 'reviews': return navigate('/reviews');
      case 'shortlist': return navigate('/shortlist');
      case 'plan-with-us': return navigate('/plan-with-us');
      case 'book-direct': return navigate('/guides/booking-safari-direct-local-operator');
      case 'about': return navigate('/about');
      case 'contact': return navigate('/contact');
      case 'admin': return navigate('/admin');
      default: return navigate('/');
    }
  };
}

const BuilderPage: React.FC<{ onOpenEnquiryModal: (payload?: any) => void }> = ({ onOpenEnquiryModal }) => { const navigate=useNavigate(); return <div className="max-w-7xl mx-auto px-4 sm:px-8 py-10 space-y-8"><PageMeta title="Custom Safari Builder" description="Answer a few quick questions to get a tailor-made Kenya, Tanzania, or Zanzibar safari itinerary and pricing estimate." canonicalPath="/safari-builder"/><div className="text-center max-w-3xl mx-auto space-y-3"><span className="text-xs font-bold uppercase tracking-widest text-brand">Tailor-Made Journey Engine</span><h1 className="font-serif-luxury text-3xl sm:text-5xl font-bold text-on-shell">Custom Safari Builder</h1><p className="text-sm text-on-shell-subtle">Answer 6 quick questions to narrow down a route and receive a bespoke itinerary proposal from the safari team.</p></div><SafariBuilderWizard onSelectTour={(tour:Tour)=>navigate(`/safaris/${tour.slug}`)} onCompleteEnquiry={onOpenEnquiryModal}/></div>; };

interface EnquiryModalData { selectedTour?: Tour | null; selectedHotel?: Hotel | null; initialType?: string; initialDestination?: string; initialSpecialRequests?: string; contextItems?: string[]; }

const MainAppContent: React.FC = () => {
  const legacyNavigate=useLegacyNavigate(); const navigate=useNavigate(); const location=useLocation(); const { tours,isLoading,loadError }=useData();
  const [isEnquiryModalOpen,setIsEnquiryModalOpen]=useState(false); const [enquiryModalData,setEnquiryModalData]=useState<EnquiryModalData>({});
  const openEnquiryModal=(data?:EnquiryModalData)=>{setEnquiryModalData(data||{});setIsEnquiryModalOpen(true);};
  const handleSelectTour=(tour:Tour)=>{window.scrollTo({top:0,behavior:'smooth'});navigate(`/safaris/${tour.slug}`);}; const handleSelectDestination=(destination:Destination)=>{window.scrollTo({top:0,behavior:'smooth'});navigate(`/destinations/${destination.slug}`);}; const handleSelectHotel=(hotel:Hotel)=>{window.scrollTo({top:0,behavior:'smooth'});navigate(`/hotels/${hotel.slug}`);};
  const currentTourTitleForWhatsApp=location.pathname.startsWith('/safaris/')?tours.find(t=>t.slug===location.pathname.split('/')[2])?.title:undefined;
  if(isLoading) return <div className="min-h-screen flex items-center justify-center bg-shell text-on-shell"><p className="text-sm text-on-shell-subtle">Loading Good Secrets Safaris...</p></div>;
  if(loadError) return <div className="min-h-screen flex flex-col items-center justify-center gap-4 bg-shell text-on-shell px-4 text-center"><p className="text-sm text-on-shell">{loadError}</p><button onClick={()=>window.location.reload()} className="px-5 py-2.5 rounded-xl bg-brand hover:bg-brand-strong text-white font-bold text-xs uppercase tracking-wider">Retry</button></div>;

  return <div className="min-h-screen flex flex-col bg-shell text-on-shell selection:bg-brand selection:text-black"><AnalyticsTracker/><Navbar onNavigate={legacyNavigate} onOpenEnquiryModal={openEnquiryModal}/><main className="flex-1"><Suspense fallback={<RouteFallback/>}><Routes>
    <Route path="/" element={<HomePage onNavigate={legacyNavigate} onSelectTour={handleSelectTour} onSelectDestination={handleSelectDestination} onSelectHotel={handleSelectHotel} onOpenEnquiryModal={openEnquiryModal}/>}/>
    <Route path="/safaris" element={<ToursExplorerRoute onOpenEnquiryModal={openEnquiryModal}/>}/><Route path="/safaris/:slug" element={<TourDetailRoute onOpenEnquiryModal={openEnquiryModal}/>}/>
    <Route path="/destinations" element={<DestinationsView onSelectDestination={handleSelectDestination}/>}/><Route path="/destinations/:slug" element={<DestinationDetailRoute onOpenEnquiryModal={openEnquiryModal}/>}/>
    <Route path="/hotels" element={<HotelsExplorerRoute onOpenEnquiryModal={openEnquiryModal}/>}/><Route path="/hotels/:slug" element={<HotelDetailRoute onOpenEnquiryModal={openEnquiryModal}/>}/>
    <Route path="/safari-builder" element={<BuilderPage onOpenEnquiryModal={openEnquiryModal}/>}/>
    <Route path="/blog" element={<BlogRoute onOpenEnquiryModal={openEnquiryModal}/>}/><Route path="/blog/:slug" element={<BlogRoute onOpenEnquiryModal={openEnquiryModal}/>}/>
    <Route path="/guides" element={<SafariGuidesView/>}/><Route path="/guides/booking-safari-direct-local-operator" element={<DirectBookingArticleView onOpenEnquiryModal={openEnquiryModal}/>}/><Route path="/guides/:slug" element={<SafariGuidesView/>}/>
    <Route path="/reviews" element={<ReviewsView/>}/><Route path="/shortlist" element={<ShortlistView onOpenEnquiryModal={openEnquiryModal}/>}/>
    <Route path="/plan-with-us" element={<PlanningWithUsView onOpenEnquiryModal={openEnquiryModal}/>}/><Route path="/book-direct" element={<Navigate to="/guides/booking-safari-direct-local-operator" replace/>}/>
    <Route path="/about" element={<AboutView onOpenEnquiryModal={openEnquiryModal}/>}/><Route path="/contact" element={<ContactView/>}/>
    <Route path="/privacy" element={<LegalView/>}/><Route path="/terms" element={<LegalView/>}/><Route path="/booking-conditions" element={<LegalView/>}/>
    <Route path="/admin" element={<AdminRoute><AdminDashboardView onNavigateHome={()=>navigate('/')} onPreviewTour={(tour)=>navigate(`/safaris/${tour.slug}`)}/></AdminRoute>}/><Route path="*" element={<NotFoundView/>}/>
  </Routes></Suspense></main><Footer onNavigate={legacyNavigate} onOpenEnquiryModal={openEnquiryModal}/><FloatingWhatsApp currentTourTitle={currentTourTitleForWhatsApp}/><EnquiryModal isOpen={isEnquiryModalOpen} onClose={()=>setIsEnquiryModalOpen(false)} selectedTour={enquiryModalData.selectedTour} selectedHotel={enquiryModalData.selectedHotel} initialType={enquiryModalData.initialType} initialDestination={enquiryModalData.initialDestination} initialSpecialRequests={enquiryModalData.initialSpecialRequests} contextItems={enquiryModalData.contextItems}/><AnalyticsConsentBanner/></div>;
};

export default function App(){return <BrowserRouter><DataProvider><ShortlistProvider><MainAppContent/></ShortlistProvider></DataProvider></BrowserRouter>;}
