import React, { useState } from 'react';
import { useData } from '../context/DataContext';
import { Tour, Hotel, Enquiry, CompanySettings } from '../types';
import {
  LayoutDashboard,
  Compass,
  Palmtree,
  Inbox,
  Settings,
  Plus,
  Trash2,
  Edit2,
  Check,
  X,
  Save,
  RotateCcw,
  Eye,
  DollarSign,
  Phone,
  Mail,
  Calendar,
  Sparkles,
  Search
} from 'lucide-react';

interface AdminDashboardViewProps {
  onNavigateHome: () => void;
  onPreviewTour: (tour: Tour) => void;
}

export const AdminDashboardView: React.FC<AdminDashboardViewProps> = ({
  onNavigateHome,
  onPreviewTour
}) => {
  const {
    tours,
    addTour,
    updateTour,
    deleteTour,
    hotels,
    addHotel,
    updateHotel,
    deleteHotel,
    enquiries,
    updateEnquiryStatus,
    settings,
    updateSettings,
    resetToInitialData,
    formatPrice
  } = useData();

  const [activeTab, setActiveTab] = useState<'overview' | 'enquiries' | 'tours' | 'hotels' | 'settings'>('overview');

  // Local settings edit state
  const [tempSettings, setTempSettings] = useState<CompanySettings>(settings);
  const [settingsSaved, setSettingsSaved] = useState(false);

  // New Tour modal state
  const [isAddingTour, setIsAddingTour] = useState(false);
  const [newTourTitle, setNewTourTitle] = useState('');
  const [newTourCountry, setNewTourCountry] = useState('Kenya');
  const [newTourDuration, setNewTourDuration] = useState(3);
  const [newTourPrice, setNewTourPrice] = useState(1200);
  const [newTourResidentPrice, setNewTourResidentPrice] = useState(75000);
  const [newTourDesc, setNewTourDesc] = useState('');
  const [newTourImage, setNewTourImage] = useState('https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=1200&q=80');

  // Filter inquiries
  const [enquiryFilter, setEnquiryFilter] = useState('all');

  const handleSaveSettings = (e: React.FormEvent) => {
    e.preventDefault();
    updateSettings(tempSettings);
    setSettingsSaved(true);
    setTimeout(() => setSettingsSaved(false), 3000);
  };

  const handleCreateTour = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTourTitle) return;

    addTour({
      title: newTourTitle,
      slug: newTourTitle.toLowerCase().replace(/[^a-z0-9]+/g, '-'),
      country: newTourCountry as any,
      destinations: [newTourCountry],
      durationDays: Number(newTourDuration),
      durationLabel: `${newTourDuration} Days / ${newTourDuration - 1} Nights`,
      priceFrom: Number(newTourPrice),
      soloPrice: Math.round(newTourPrice * 1.35),
      sharingPrice: Number(newTourPrice),
      residentPriceKES: Number(newTourResidentPrice),
      shortDescription: newTourDesc || 'Custom luxury safari experience.',
      fullDescription: newTourDesc || 'Detailed luxury safari itinerary with private 4x4 Land Cruiser and professional naturalist driver-guide.',
      featured: true,
      popular: true,
      comfortLevel: 'Luxury',
      travelStyles: ['Big 5', 'Luxury'],
      travelerTypes: ['Couples', 'Families', 'Small Groups'],
      wildlifeHighlights: ['Lion', 'Elephant', 'Giraffe'],
      included: ['Private 4x4 Land Cruiser', 'Park entrance fees', 'Full board lodging', 'AMREF cover'],
      excluded: ['International flights', 'Tips and gratuities', 'Travel visa'],
      images: [newTourImage],
      itinerary: [
        {
          day: 1,
          title: 'Arrival & Scenic Drive into the Wilderness',
          subtitle: 'Welcome to Africa',
          description: 'Depart Nairobi / Arusha in a private 4x4 Land Cruiser heading into the game reserve with afternoon game drive.',
          meals: 'Lunch & Dinner',
          accommodation: 'Luxury Tented Camp',
          transport: 'Custom 4x4 Land Cruiser',
          activities: ['Scenic valley descent', 'Sunset predator tracking']
        }
      ],
      seasonalPricing: [
        {
          id: 'peak',
          name: 'Peak Season (July – Oct)',
          months: 'Jul, Aug, Sep, Oct',
          soloPrice: Math.round(newTourPrice * 1.5),
          sharingPrice: Math.round(newTourPrice * 1.2),
          residentPriceKES: Math.round(newTourResidentPrice * 1.25),
          notes: 'Great Migration crossings'
        }
      ]
    });

    setIsAddingTour(false);
    setNewTourTitle('');
    setNewTourDesc('');
  };

  const filteredEnquiries = enquiries.filter(e => {
    if (enquiryFilter === 'all') return true;
    return e.status === enquiryFilter;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-8 py-8 space-y-8">
      {/* Top Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-[#e8e4da]">
        <div>
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#9e7120]">
            <Sparkles className="w-4 h-4 text-[#9e7120]" />
            <span>Live Content Management & Booking Engine</span>
          </div>
          <h1 className="font-serif-luxury text-3xl font-bold text-[#161f19] mt-1">
            Good Secrets Safaris Admin CMS
          </h1>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={onNavigateHome}
            className="px-4 py-2 rounded-xl bg-white hover:bg-[#faf8f2] text-[#161f19] text-xs font-semibold border border-[#ded8cb] shadow-xs"
          >
            ← View Live Website
          </button>

          <button
            onClick={() => {
              if (window.confirm('Reset all tours, hotels, and settings back to original defaults?')) {
                resetToInitialData();
              }
            }}
            className="px-3 py-2 rounded-xl bg-rose-50 hover:bg-rose-100 text-rose-700 text-xs font-semibold flex items-center gap-1.5 border border-rose-200"
            title="Reset dataset"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Reset Defaults</span>
          </button>
        </div>
      </div>

      {/* Nav Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 border-b border-[#e8e4da]">
        {[
          { id: 'overview', label: 'Overview', icon: LayoutDashboard },
          { id: 'enquiries', label: `Client Enquiries (${enquiries.length})`, icon: Inbox },
          { id: 'tours', label: `Tours & Safaris (${tours.length})`, icon: Compass },
          { id: 'hotels', label: `Resorts & Lodges (${hotels.length})`, icon: Palmtree },
          { id: 'settings', label: 'Company Settings & WhatsApp', icon: Settings }
        ].map(tab => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`shrink-0 flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold transition-all ${
                isActive
                  ? 'bg-[#b3822a] text-white shadow-md'
                  : 'bg-white text-[#5d6e62] border border-[#e8e4da] hover:text-[#161f19]'
              }`}
            >
              <Icon className="w-4 h-4" />
              <span>{tab.label}</span>
            </button>
          );
        })}
      </div>

      {/* 1. OVERVIEW TAB */}
      {activeTab === 'overview' && (
        <div className="space-y-8">
          {/* Key Metric Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="p-6 rounded-2xl bg-white border border-[#e8e4da] space-y-1 shadow-xs">
              <span className="text-xs text-[#707f74] uppercase tracking-wider block">Total Active Safaris</span>
              <span className="text-3xl font-extrabold font-serif-luxury text-[#161f19]">{tours.length}</span>
              <span className="text-[11px] text-[#9e7120] block font-medium">Kenya, Tanzania, Zanzibar</span>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-[#e8e4da] space-y-1 shadow-xs">
              <span className="text-xs text-[#707f74] uppercase tracking-wider block">Beach Resorts & Lodges</span>
              <span className="text-3xl font-extrabold font-serif-luxury text-[#1b4332]">{hotels.length}</span>
              <span className="text-[11px] text-[#1b4332] block font-medium">With Kenyan Resident Rates</span>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-[#e8e4da] space-y-1 shadow-xs">
              <span className="text-xs text-[#707f74] uppercase tracking-wider block">Total Client Enquiries</span>
              <span className="text-3xl font-extrabold font-serif-luxury text-[#161f19]">{enquiries.length}</span>
              <span className="text-[11px] text-[#707f74] block">
                {enquiries.filter(e => e.status === 'new').length} Pending Action
              </span>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-[#e8e4da] space-y-1 shadow-xs">
              <span className="text-xs text-[#707f74] uppercase tracking-wider block">WhatsApp Concierge</span>
              <span className="text-lg font-bold text-[#128c7e] truncate block">{settings.contact.whatsapp}</span>
              <span className="text-[11px] text-[#707f74] block">Active Click-to-Chat</span>
            </div>
          </div>

          {/* Recent Inquiries Quick Table */}
          <div className="p-6 rounded-2xl bg-white border border-[#e8e4da] space-y-4 shadow-xs">
            <div className="flex items-center justify-between">
              <h3 className="font-serif-luxury text-xl font-bold text-[#161f19]">
                Recent Booking Enquiries
              </h3>
              <button
                onClick={() => setActiveTab('enquiries')}
                className="text-xs text-[#9e7120] font-bold hover:underline"
              >
                View All Enquiries →
              </button>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead>
                  <tr className="border-b border-[#e8e4da] text-[#707f74]">
                    <th className="py-2.5 px-3">Traveler</th>
                    <th className="py-2.5 px-3">Tour / Request</th>
                    <th className="py-2.5 px-3">Travel Dates</th>
                    <th className="py-2.5 px-3">Guests</th>
                    <th className="py-2.5 px-3">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#eeebe2]">
                  {enquiries.slice(0, 5).map(enq => (
                    <tr key={enq.id} className="hover:bg-[#faf8f2]">
                      <td className="py-3 px-3">
                        <div className="font-bold text-[#161f19]">{enq.fullName}</div>
                        <div className="text-[#707f74]">{enq.email}</div>
                      </td>
                      <td className="py-3 px-3 text-[#303e35]">
                        {enq.tourTitle || enq.preferredDestination || enq.safariType}
                      </td>
                      <td className="py-3 px-3 text-[#707f74]">{enq.travelDates}</td>
                      <td className="py-3 px-3 text-[#707f74]">
                        {enq.numberOfTravelers.adults} Adults {enq.numberOfTravelers.children > 0 ? `, ${enq.numberOfTravelers.children} Kids` : ''}
                      </td>
                      <td className="py-3 px-3">
                        <span className={`px-2 py-0.5 rounded-full font-bold uppercase text-[10px] ${
                          enq.status === 'new' ? 'bg-amber-100 text-amber-800' : 'bg-emerald-100 text-emerald-800'
                        }`}>
                          {enq.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {/* 2. ENQUIRIES TAB */}
      {activeTab === 'enquiries' && (
        <div className="space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              {['all', 'new', 'contacted', 'quoted', 'booked'].map(status => (
                <button
                  key={status}
                  onClick={() => setEnquiryFilter(status)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-all ${
                    enquiryFilter === status
                      ? 'bg-[#b3822a] text-white shadow-sm'
                      : 'bg-white text-[#5d6e62] border border-[#e8e4da] hover:text-[#161f19]'
                  }`}
                >
                  {status}
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            {filteredEnquiries.map(enq => (
              <div
                key={enq.id}
                className="p-6 rounded-2xl bg-white border border-[#e8e4da] space-y-4 shadow-xs"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-[#eeebe2]">
                  <div>
                    <span className="text-xs font-bold text-[#9e7120] uppercase tracking-wider">
                      Enquiry ID: {enq.id} · {new Date(enq.createdAt).toLocaleDateString()}
                    </span>
                    <h3 className="font-serif-luxury text-xl font-bold text-[#161f19] mt-0.5">
                      {enq.fullName} ({enq.country})
                    </h3>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="text-xs text-[#707f74]">Status:</span>
                    <select
                      value={enq.status}
                      onChange={(e) => updateEnquiryStatus(enq.id, e.target.value as any)}
                      className="px-3 py-1.5 rounded-lg bg-[#faf8f2] border border-[#ded8cb] text-xs font-bold text-[#161f19]"
                    >
                      <option value="new">New / Unread</option>
                      <option value="contacted">Contacted</option>
                      <option value="quoted">Proposal Quoted</option>
                      <option value="booked">Booked & Confirmed</option>
                      <option value="closed">Closed</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs text-[#4d5c52]">
                  <div>
                    <span className="text-[#707f74] block font-medium">Email:</span>
                    <a href={`mailto:${enq.email}`} className="font-semibold text-[#161f19] hover:underline">{enq.email}</a>
                  </div>
                  <div>
                    <span className="text-[#707f74] block font-medium">Phone / WhatsApp:</span>
                    <a href={`tel:${enq.phone}`} className="font-semibold text-[#161f19] hover:underline">{enq.phone}</a>
                  </div>
                  <div>
                    <span className="text-[#707f74] block font-medium">Travel Dates & Duration:</span>
                    <span className="font-semibold text-[#161f19]">{enq.travelDates} ({enq.durationDays} Days)</span>
                  </div>
                  <div>
                    <span className="text-[#707f74] block font-medium">Target Budget:</span>
                    <span className="font-semibold text-[#9e7120]">{enq.budget}</span>
                  </div>
                </div>

                {enq.specialRequests && (
                  <div className="p-3.5 rounded-xl bg-[#faf8f2] border border-[#e8e4da] text-xs text-[#5d6e62]">
                    <strong className="text-[#161f19] block mb-1">Notes & Special Requests:</strong>
                    {enq.specialRequests}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* 3. TOURS TAB */}
      {activeTab === 'tours' && (
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="font-serif-luxury text-xl font-bold text-[#161f19]">
              Manage Safaris & Packages ({tours.length})
            </h3>
            <button
              onClick={() => setIsAddingTour(!isAddingTour)}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#b3822a] hover:bg-[#9e7120] text-white font-bold text-xs shadow-sm"
            >
              <Plus className="w-4 h-4" />
              <span>Add New Safari Tour</span>
            </button>
          </div>

          {/* Quick Add Tour Form */}
          {isAddingTour && (
            <form onSubmit={handleCreateTour} className="p-6 rounded-2xl bg-white border border-[#b3822a] space-y-4 shadow-md">
              <h4 className="font-serif-luxury text-lg font-bold text-[#161f19]">Create New Safari Tour</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <div>
                  <label className="text-xs text-[#5d6e62] block mb-1">Tour Title *</label>
                  <input
                    type="text"
                    required
                    value={newTourTitle}
                    onChange={(e) => setNewTourTitle(e.target.value)}
                    placeholder="e.g. 5-Day Masai Mara & Lake Nakuru"
                    className="w-full px-3 py-2 rounded-xl bg-[#faf8f2] border border-[#ded8cb] text-xs text-[#161f19]"
                  />
                </div>

                <div>
                  <label className="text-xs text-[#5d6e62] block mb-1">Country</label>
                  <select
                    value={newTourCountry}
                    onChange={(e) => setNewTourCountry(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl bg-[#faf8f2] border border-[#ded8cb] text-xs text-[#161f19]"
                  >
                    <option value="Kenya">Kenya</option>
                    <option value="Tanzania">Tanzania</option>
                    <option value="Zanzibar">Zanzibar</option>
                    <option value="Kenya + Tanzania">Kenya + Tanzania Combined</option>
                  </select>
                </div>

                <div>
                  <label className="text-xs text-[#5d6e62] block mb-1">Duration (Days)</label>
                  <input
                    type="number"
                    min={1}
                    value={newTourDuration}
                    onChange={(e) => setNewTourDuration(Number(e.target.value))}
                    className="w-full px-3 py-2 rounded-xl bg-[#faf8f2] border border-[#ded8cb] text-xs text-[#161f19]"
                  />
                </div>

                <div>
                  <label className="text-xs text-[#5d6e62] block mb-1">Price From (USD $)</label>
                  <input
                    type="number"
                    value={newTourPrice}
                    onChange={(e) => setNewTourPrice(Number(e.target.value))}
                    className="w-full px-3 py-2 rounded-xl bg-[#faf8f2] border border-[#ded8cb] text-xs text-[#161f19]"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs text-[#5d6e62] block mb-1">Short Description</label>
                <textarea
                  rows={2}
                  value={newTourDesc}
                  onChange={(e) => setNewTourDesc(e.target.value)}
                  placeholder="Summary for cards and listings..."
                  className="w-full px-3 py-2 rounded-xl bg-[#faf8f2] border border-[#ded8cb] text-xs text-[#161f19]"
                />
              </div>

              <div className="flex justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setIsAddingTour(false)}
                  className="px-4 py-2 rounded-xl bg-[#faf8f2] text-[#5d6e62] text-xs border border-[#ded8cb]"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-6 py-2 rounded-xl bg-[#b3822a] text-white font-bold text-xs"
                >
                  Save Safari
                </button>
              </div>
            </form>
          )}

          {/* Tour List */}
          <div className="space-y-3">
            {tours.map(tour => (
              <div
                key={tour.id}
                className="p-4 rounded-2xl bg-white border border-[#e8e4da] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-xs"
              >
                <div className="flex items-center gap-3">
                  <img
                    src={tour.images[0]}
                    alt={tour.title}
                    className="w-16 h-16 rounded-xl object-cover"
                  />
                  <div>
                    <h4 className="font-serif-luxury font-bold text-sm text-[#161f19]">{tour.title}</h4>
                    <span className="text-xs text-[#9e7120] block font-medium">{tour.durationLabel} · {tour.country}</span>
                    <span className="text-xs text-[#707f74]">From {formatPrice(tour.priceFrom)} (KES {tour.residentPriceKES?.toLocaleString()})</span>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => onPreviewTour(tour)}
                    className="p-2 rounded-lg bg-[#faf8f2] hover:bg-[#eeebe2] text-[#161f19] border border-[#ded8cb]"
                    title="Preview tour page"
                  >
                    <Eye className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => {
                      if (window.confirm(`Delete tour "${tour.title}"?`)) {
                        deleteTour(tour.id);
                      }
                    }}
                    className="p-2 rounded-lg bg-rose-50 hover:bg-rose-100 text-rose-700 border border-rose-200"
                    title="Delete tour"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* 4. HOTELS TAB */}
      {activeTab === 'hotels' && (
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="font-serif-luxury text-xl font-bold text-[#161f19]">
              Manage Beach Resorts & Safari Lodges ({hotels.length})
            </h3>
          </div>

          <div className="space-y-3">
            {hotels.map(hotel => (
              <div
                key={hotel.id}
                className="p-4 rounded-2xl bg-white border border-[#e8e4da] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-xs"
              >
                <div className="flex items-center gap-3">
                  <img
                    src={hotel.images[0]}
                    alt={hotel.name}
                    className="w-16 h-16 rounded-xl object-cover"
                  />
                  <div>
                    <h4 className="font-serif-luxury font-bold text-sm text-[#161f19]">{hotel.name}</h4>
                    {/* Hotel type has no `residentPriceKES`/`mealPlan` fields — using `priceFromKES`, guarded against a missing price. */}
                    <span className="text-xs text-[#1b4332] font-semibold block">Resident: KSH {(hotel.priceFromKES ?? 0).toLocaleString()} / night</span>
                    <span className="text-xs text-[#707f74]">{hotel.location}, {hotel.country}</span>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => {
                      if (window.confirm(`Delete hotel "${hotel.name}"?`)) {
                        deleteHotel(hotel.id);
                      }
                    }}
                    className="p-2 rounded-lg bg-rose-50 text-rose-700 border border-rose-200"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* 5. SETTINGS & WHATSAPP TAB */}
      {activeTab === 'settings' && (
        <form onSubmit={handleSaveSettings} className="p-8 rounded-3xl bg-white border border-[#e8e4da] space-y-6 max-w-3xl shadow-sm">
          <div className="space-y-1">
            <h3 className="font-serif-luxury text-2xl font-bold text-[#161f19]">
              Company & Concierge Settings
            </h3>
            <p className="text-xs text-[#707f74]">
              Updates take effect across all web pages and WhatsApp quick-booking links immediately.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="text-xs font-semibold text-[#161f19] block mb-1">Company Name</label>
              <input
                type="text"
                value={tempSettings.companyName}
                onChange={(e) => setTempSettings({ ...tempSettings, companyName: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl bg-[#faf8f2] border border-[#ded8cb] text-sm text-[#161f19]"
              />
            </div>

            <div>
              <label className="text-xs font-semibold text-[#161f19] block mb-1">Brand Tagline</label>
              <input
                type="text"
                value={tempSettings.tagline}
                onChange={(e) => setTempSettings({ ...tempSettings, tagline: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl bg-[#faf8f2] border border-[#ded8cb] text-sm text-[#161f19]"
              />
            </div>

            <div>
              <label className="text-xs font-semibold text-[#128c7e] block mb-1">WhatsApp Phone Number *</label>
              <input
                type="text"
                value={tempSettings.contact.whatsapp}
                onChange={(e) => setTempSettings({
                  ...tempSettings,
                  contact: { ...tempSettings.contact, whatsapp: e.target.value }
                })}
                placeholder="+254712345678"
                className="w-full px-3.5 py-2.5 rounded-xl bg-[#faf8f2] border border-[#c3e2cf] text-sm text-[#1b4332] font-mono font-bold"
              />
            </div>

            <div>
              <label className="text-xs font-semibold text-[#161f19] block mb-1">General Telephone</label>
              <input
                type="text"
                value={tempSettings.contact.phone}
                onChange={(e) => setTempSettings({
                  ...tempSettings,
                  contact: { ...tempSettings.contact, phone: e.target.value }
                })}
                className="w-full px-3.5 py-2.5 rounded-xl bg-[#faf8f2] border border-[#ded8cb] text-sm text-[#161f19]"
              />
            </div>

            <div>
              <label className="text-xs font-semibold text-[#161f19] block mb-1">Email Address</label>
              <input
                type="email"
                value={tempSettings.contact.email}
                onChange={(e) => setTempSettings({
                  ...tempSettings,
                  contact: { ...tempSettings.contact, email: e.target.value }
                })}
                className="w-full px-3.5 py-2.5 rounded-xl bg-[#faf8f2] border border-[#ded8cb] text-sm text-[#161f19]"
              />
            </div>

            <div>
              <label className="text-xs font-semibold text-[#161f19] block mb-1">USD to KES Currency Rate</label>
              <input
                type="number"
                value={tempSettings.currencyConversionRate}
                onChange={(e) => setTempSettings({
                  ...tempSettings,
                  currencyConversionRate: Number(e.target.value)
                })}
                className="w-full px-3.5 py-2.5 rounded-xl bg-[#faf8f2] border border-[#ded8cb] text-sm text-[#161f19]"
              />
            </div>
          </div>

          <div>
            <label className="text-xs font-semibold text-[#161f19] block mb-1">Office Address</label>
            <input
              type="text"
              value={tempSettings.contact.address}
              onChange={(e) => setTempSettings({
                ...tempSettings,
                contact: { ...tempSettings.contact, address: e.target.value }
              })}
              className="w-full px-3.5 py-2.5 rounded-xl bg-[#faf8f2] border border-[#ded8cb] text-sm text-[#161f19]"
            />
          </div>

          <div className="pt-2 flex items-center justify-between">
            {settingsSaved ? (
              <span className="text-xs text-[#1b4332] font-bold flex items-center gap-1">
                <Check className="w-4 h-4 text-[#128c7e]" /> Settings Saved Successfully
              </span>
            ) : <span />}

            <button
              type="submit"
              className="px-8 py-3 rounded-xl bg-[#b3822a] hover:bg-[#9e7120] text-white font-extrabold text-xs uppercase tracking-wider flex items-center gap-2 shadow-md transition-all active:scale-95"
            >
              <Save className="w-4 h-4" />
              <span>Save Settings</span>
            </button>
          </div>
        </form>
      )}
    </div>
  );
};
