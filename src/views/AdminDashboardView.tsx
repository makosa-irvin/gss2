import React, { useState } from 'react';
import { useData } from '../context/DataContext';
import { Tour } from '../types';
import { AdminLayout, AdminSection } from '../admin/AdminLayout';
import { AdminOverview } from '../admin/sections/AdminOverview';
import { AdminEnquiries } from '../admin/sections/AdminEnquiries';
import { AdminTours } from '../admin/sections/AdminTours';
import { AdminHotels } from '../admin/sections/AdminHotels';
import { AdminDestinations } from '../admin/sections/AdminDestinations';
import { AdminBlog } from '../admin/sections/AdminBlog';
import { AdminTestimonials } from '../admin/sections/AdminTestimonials';
import { AdminSettings } from '../admin/sections/AdminSettings';
import { X } from 'lucide-react';

interface AdminDashboardViewProps {
  onNavigateHome: () => void;
  onPreviewTour: (tour: Tour) => void;
}

export const AdminDashboardView: React.FC<AdminDashboardViewProps> = ({ onNavigateHome, onPreviewTour }) => {
  const {
    tours, addTour, updateTour, deleteTour,
    hotels, addHotel, updateHotel, deleteHotel,
    destinations, addDestination, updateDestination, deleteDestination,
    blogPosts, addBlogPost, updateBlogPost, deleteBlogPost,
    testimonials, addTestimonial, updateTestimonial, deleteTestimonial,
    enquiries, updateEnquiryStatus, deleteEnquiry,
    settings, updateSettings,
    formatPrice, currentAdmin, logout
  } = useData();

  const [activeSection, setActiveSection] = useState<AdminSection>('overview');
  const [actionError, setActionError] = useState<string | null>(null);

  const counts = {
    enquiries: enquiries.length,
    newEnquiries: enquiries.filter((e) => e.status === 'New').length,
    tours: tours.length,
    hotels: hotels.length,
    destinations: destinations.length,
    blog: blogPosts.length,
    testimonials: testimonials.length
  };

  const renderSection = () => {
    switch (activeSection) {
      case 'overview':
        return (
          <AdminOverview
            tours={tours}
            hotels={hotels}
            enquiries={enquiries}
            whatsapp={settings.contact.whatsapp}
            onGoToEnquiries={() => setActiveSection('enquiries')}
            onGoToTours={() => setActiveSection('tours')}
          />
        );
      case 'enquiries':
        return (
          <AdminEnquiries
            enquiries={enquiries}
            onUpdateStatus={updateEnquiryStatus}
            onDelete={deleteEnquiry}
            onError={setActionError}
          />
        );
      case 'tours':
        return (
          <AdminTours
            tours={tours}
            formatPrice={formatPrice}
            onCreate={addTour}
            onUpdate={updateTour}
            onDelete={deleteTour}
            onPreview={onPreviewTour}
            onError={setActionError}
          />
        );
      case 'hotels':
        return (
          <AdminHotels
            hotels={hotels}
            onCreate={addHotel}
            onUpdate={updateHotel}
            onDelete={deleteHotel}
            onError={setActionError}
          />
        );
      case 'destinations':
        return (
          <AdminDestinations
            destinations={destinations}
            onCreate={addDestination}
            onUpdate={updateDestination}
            onDelete={deleteDestination}
            onError={setActionError}
          />
        );
      case 'blog':
        return (
          <AdminBlog
            posts={blogPosts}
            defaultAuthorName={currentAdmin?.name}
            onCreate={addBlogPost}
            onUpdate={updateBlogPost}
            onDelete={deleteBlogPost}
            onError={setActionError}
          />
        );
      case 'testimonials':
        return (
          <AdminTestimonials
            testimonials={testimonials}
            onCreate={addTestimonial}
            onUpdate={updateTestimonial}
            onDelete={deleteTestimonial}
            onError={setActionError}
          />
        );
      case 'settings':
        return <AdminSettings settings={settings} onSave={updateSettings} onError={setActionError} />;
      default:
        return null;
    }
  };

  return (
    <AdminLayout
      active={activeSection}
      onNavigate={(section) => { setActionError(null); setActiveSection(section); }}
      onNavigateHome={onNavigateHome}
      adminName={currentAdmin?.name}
      adminEmail={currentAdmin?.email}
      onLogout={() => logout()}
      counts={counts}
    >
      {actionError && (
        <div className="mb-6 flex items-center justify-between gap-3 p-4 rounded-xl bg-rose-50 border border-rose-200 text-sm text-rose-800">
          <span>{actionError}</span>
          <button onClick={() => setActionError(null)} aria-label="Dismiss error" className="text-rose-600 hover:text-rose-800 font-bold">
            <X className="w-4 h-4" />
          </button>
        </div>
      )}
      {renderSection()}
    </AdminLayout>
  );
};
