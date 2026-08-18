import React, { useState, useEffect } from 'react';
import { DataProvider, useData } from './context/DataContext';
import { Tour, Destination, Hotel } from './types';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { FloatingWhatsApp } from './components/common/FloatingWhatsApp';
import { EnquiryModal } from './components/common/EnquiryModal';

import { HomePage } from './views/HomePage';
import { ToursExplorerView } from './views/ToursExplorerView';
import { TourDetailView } from './views/TourDetailView';
import { DestinationsView } from './views/DestinationsView';
import { DestinationDetailView } from './views/DestinationDetailView';
import { HotelsExplorerView } from './views/HotelsExplorerView';
import { HotelDetailView } from './views/HotelDetailView';
import { SafariBuilderWizard } from './components/builder/SafariBuilderWizard';
import { BlogView } from './views/BlogView';
import { AboutView } from './views/AboutView';
import { ContactView } from './views/ContactView';
import { AdminDashboardView } from './views/AdminDashboardView';

const MainAppContent: React.FC = () => {
  const { tours, destinations, hotels } = useData();

  // Navigation State
  const [currentView, setCurrentView] = useState<string>('home');
  const [viewPayload, setViewPayload] = useState<any>(null);

  // Selected Entities for detail views
  const [selectedTour, setSelectedTour] = useState<Tour | null>(null);
  const [selectedDestination, setSelectedDestination] = useState<Destination | null>(null);
  const [selectedHotel, setSelectedHotel] = useState<Hotel | null>(null);

  // Global Enquiry Modal state
  const [isEnquiryModalOpen, setIsEnquiryModalOpen] = useState(false);
  const [enquiryModalData, setEnquiryModalData] = useState<{
    selectedTour?: Tour | null;
    selectedHotel?: Hotel | null;
    initialType?: string;
  }>({});

  // Scroll to top on navigation
  const navigate = (view: string, payload?: any) => {
    setCurrentView(view);
    setViewPayload(payload || null);

    if (view === 'tour-detail' && payload?.tour) {
      setSelectedTour(payload.tour);
    } else if (view === 'destination-detail' && payload?.destination) {
      setSelectedDestination(payload.destination);
    } else if (view === 'destinations' && payload?.destinationId) {
      const found = destinations.find(d => d.id === payload.destinationId);
      if (found) {
        setSelectedDestination(found);
        setCurrentView('destination-detail');
      }
    } else if (view === 'hotel-detail' && payload?.hotel) {
      setSelectedHotel(payload.hotel);
    }

    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const openEnquiryModal = (data?: {
    selectedTour?: Tour | null;
    selectedHotel?: Hotel | null;
    initialType?: string;
  }) => {
    setEnquiryModalData(data || {});
    setIsEnquiryModalOpen(true);
  };

  const handleSelectTour = (tour: Tour) => {
    setSelectedTour(tour);
    navigate('tour-detail', { tour });
  };

  const handleSelectDestination = (destination: Destination) => {
    setSelectedDestination(destination);
    navigate('destination-detail', { destination });
  };

  const handleSelectHotel = (hotel: Hotel) => {
    setSelectedHotel(hotel);
    navigate('hotel-detail', { hotel });
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#0c120e] text-[#f4f2eb] selection:bg-[#c49a45] selection:text-black">
      {/* Global Header */}
      <Navbar
        currentView={currentView}
        onNavigate={navigate}
        onOpenEnquiryModal={openEnquiryModal}
      />

      {/* Dynamic Main Body Content */}
      <main className="flex-1">
        {currentView === 'home' && (
          <HomePage
            onNavigate={navigate}
            onSelectTour={handleSelectTour}
            onSelectDestination={handleSelectDestination}
            onSelectHotel={handleSelectHotel}
            onOpenEnquiryModal={openEnquiryModal}
          />
        )}

        {currentView === 'tours' && (
          <ToursExplorerView
            initialFilters={viewPayload}
            onSelectTour={handleSelectTour}
            onOpenEnquiryModal={openEnquiryModal}
          />
        )}

        {currentView === 'tour-detail' && selectedTour && (
          <TourDetailView
            tour={selectedTour}
            onBack={() => navigate('tours')}
            onOpenEnquiryModal={openEnquiryModal}
          />
        )}

        {currentView === 'destinations' && (
          <DestinationsView
            onSelectDestination={handleSelectDestination}
          />
        )}

        {currentView === 'destination-detail' && selectedDestination && (
          <DestinationDetailView
            destination={selectedDestination}
            onBack={() => navigate('destinations')}
            onSelectTour={handleSelectTour}
            onSelectHotel={handleSelectHotel}
            onOpenEnquiryModal={openEnquiryModal}
          />
        )}

        {currentView === 'hotels' && (
          <HotelsExplorerView
            onSelectHotel={handleSelectHotel}
            onOpenEnquiryModal={openEnquiryModal}
            initialResidentOnly={viewPayload?.residentOnly}
          />
        )}

        {currentView === 'hotel-detail' && selectedHotel && (
          <HotelDetailView
            hotel={selectedHotel}
            onBack={() => navigate('hotels')}
            onOpenEnquiryModal={openEnquiryModal}
          />
        )}

        {currentView === 'builder' && (
          <div className="max-w-7xl mx-auto px-4 sm:px-8 py-10 space-y-8">
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
              onSelectTour={handleSelectTour}
              onCompleteEnquiry={openEnquiryModal}
            />
          </div>
        )}

        {currentView === 'blog' && (
          <BlogView
            initialSlug={viewPayload?.postSlug}
            onOpenEnquiryModal={openEnquiryModal}
          />
        )}

        {currentView === 'about' && (
          <AboutView
            onOpenEnquiryModal={openEnquiryModal}
          />
        )}

        {currentView === 'contact' && (
          <ContactView />
        )}

        {currentView === 'admin' && (
          <AdminDashboardView
            onNavigateHome={() => navigate('home')}
            onPreviewTour={(tour) => {
              setSelectedTour(tour);
              navigate('tour-detail', { tour });
            }}
          />
        )}
      </main>

      {/* Global Footer */}
      <Footer
        onNavigate={navigate}
        onOpenEnquiryModal={openEnquiryModal}
      />

      {/* Persistent Floating WhatsApp Concierge */}
      <FloatingWhatsApp
        currentTourTitle={currentView === 'tour-detail' ? selectedTour?.title : undefined}
      />

      {/* Global Booking & Enquiry Modal */}
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
    <DataProvider>
      <MainAppContent />
    </DataProvider>
  );
}
