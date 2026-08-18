import React, { useState, useEffect } from 'react';
import { useData } from '../../context/DataContext';
import {
  Compass,
  MapPin,
  ChevronDown,
  Phone,
  MessageCircle,
  Shield,
  Menu,
  X,
  Sparkles,
  Calendar,
  Layers,
  HeartHandshake,
  Check
} from 'lucide-react';

interface NavbarProps {
  currentView: string;
  onNavigate: (view: string, payload?: any) => void;
  onOpenEnquiryModal: (payload?: any) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentView, onNavigate, onOpenEnquiryModal }) => {
  const { settings, activeCurrency, setActiveCurrency, isKenyanResidentMode, setIsKenyanResidentMode, getWhatsAppUrl } = useData();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="sticky top-0 z-40 w-full transition-all duration-300">
      {/* TOP ANNOUNCEMENT & UTILITIES BAR */}
      <div className="bg-[#080d09] border-b border-[#1b2920] px-4 sm:px-8 py-1.5 text-xs text-[#a3b2a7]">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <span className="hidden sm:inline-flex items-center gap-1.5 text-[#d8d2c2]">
              <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse"></span>
              24/7 East Africa Safari Concierge
            </span>
            <span className="hidden md:inline text-[#3e5645]">|</span>
            <a
              href={`tel:${settings.contact.phone}`}
              className="hidden md:flex items-center gap-1 text-[#c4d4c8] hover:text-[#c49a45] transition-colors"
            >
              <Phone className="w-3 h-3 text-[#c49a45]" />
              <span>{settings.contact.phone}</span>
            </a>
          </div>

          <div className="flex items-center gap-3">
            {/* Kenyan Resident Mode Switch */}
            <button
              onClick={() => setIsKenyanResidentMode(!isKenyanResidentMode)}
              className={`px-2.5 py-0.5 rounded-full text-[11px] font-semibold border transition-all flex items-center gap-1 ${
                isKenyanResidentMode
                  ? 'bg-[#1b4332] text-[#86efac] border-[#2d6a4f]'
                  : 'bg-[#141e17] text-[#a3b2a7] border-[#233327] hover:border-[#384e3e]'
              }`}
            >
              <span>Kenyan Resident Rates</span>
              {isKenyanResidentMode && <Check className="w-3 h-3" />}
            </button>

            {/* Currency Selector */}
            <div className="flex items-center rounded-lg bg-[#141e17] border border-[#233327] p-0.5 text-[11px] font-bold">
              <button
                onClick={() => setActiveCurrency('USD')}
                className={`px-2 py-0.5 rounded-md transition-colors ${
                  activeCurrency === 'USD' ? 'bg-[#c49a45] text-black' : 'text-[#a3b2a7] hover:text-white'
                }`}
              >
                USD ($)
              </button>
              <button
                onClick={() => setActiveCurrency('KES')}
                className={`px-2 py-0.5 rounded-md transition-colors ${
                  activeCurrency === 'KES' ? 'bg-[#c49a45] text-black' : 'text-[#a3b2a7] hover:text-white'
                }`}
              >
                KES (Sh)
              </button>
            </div>

            {/* Admin Live Dashboard Switch */}
            <button
              onClick={() => onNavigate('admin')}
              className={`px-2.5 py-0.5 rounded-lg text-[11px] font-bold border transition-colors ${
                currentView.startsWith('admin')
                  ? 'bg-[#c49a45] text-black border-[#c49a45]'
                  : 'bg-[#1a251c] text-[#c49a45] border-[#c49a45]/40 hover:bg-[#c49a45] hover:text-black'
              }`}
            >
              Admin CMS
            </button>
          </div>
        </div>
      </div>

      {/* MAIN NAVIGATION BAR */}
      <nav
        className={`w-full transition-all duration-300 ${
          isScrolled
            ? 'bg-[#0c120e]/95 backdrop-blur-xl border-b border-[#233327] shadow-xl py-3'
            : 'bg-[#0c120e]/80 backdrop-blur-md border-b border-[#1b2920]/80 py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-8 flex items-center justify-between">
          {/* Logo & Brand Identity */}
          <div
            onClick={() => onNavigate('home')}
            className="flex items-center gap-3 cursor-pointer select-none group"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#c49a45] to-[#8c6c2b] p-0.5 shadow-md flex items-center justify-center">
              <div className="w-full h-full bg-[#0c120e] rounded-[10px] flex items-center justify-center group-hover:bg-[#141e17] transition-colors">
                <Compass className="w-5 h-5 text-[#c49a45]" />
              </div>
            </div>
            <div>
              <span className="font-display-accent text-lg sm:text-xl font-bold tracking-wider text-[#f4f2eb] block leading-none">
                GOOD SECRETS
              </span>
              <span className="text-[10px] font-extrabold uppercase tracking-[0.25em] text-[#c49a45] block mt-0.5">
                SAFARIS · EAST AFRICA
              </span>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-1">
            {/* EXPLORE DROPDOWN */}
            <div
              className="relative"
              onMouseEnter={() => setActiveDropdown('explore')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button
                onClick={() => onNavigate('destinations')}
                className="px-3.5 py-2 text-sm font-semibold text-[#f4f2eb] hover:text-[#c49a45] transition-colors flex items-center gap-1"
              >
                <span>Explore</span>
                <ChevronDown className="w-3.5 h-3.5 opacity-70" />
              </button>

              {activeDropdown === 'explore' && (
                <div className="absolute top-full left-0 w-64 rounded-2xl bg-[#141e17] border border-[#233327] shadow-2xl p-2.5 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                  {[
                    { label: 'Kenya Safaris & Coast', value: 'Kenya' },
                    { label: 'Tanzania Wilderness', value: 'Tanzania' },
                    { label: 'Zanzibar Spice Archipelago', value: 'Zanzibar' },
                    { label: 'Kenya + Tanzania Combined', value: 'Kenya + Tanzania' },
                    { label: 'Safari & Beach Combo', value: 'Safari + Beach' }
                  ].map(item => (
                    <button
                      key={item.value}
                      onClick={() => {
                        onNavigate('tours', { country: item.value });
                        setActiveDropdown(null);
                      }}
                      className="w-full text-left px-3 py-2 rounded-xl text-xs font-semibold text-[#e0ded6] hover:bg-[#1b2920] hover:text-[#c49a45] transition-colors block"
                    >
                      {item.label}
                    </button>
                  ))}
                  <div className="pt-1.5 mt-1.5 border-t border-[#233327]">
                    <button
                      onClick={() => {
                        onNavigate('destinations');
                        setActiveDropdown(null);
                      }}
                      className="w-full text-left px-3 py-1.5 text-xs font-bold text-[#c49a45] hover:underline block"
                    >
                      View All Destinations →
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* SAFARIS DROPDOWN */}
            <div
              className="relative"
              onMouseEnter={() => setActiveDropdown('safaris')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button
                onClick={() => onNavigate('tours')}
                className="px-3.5 py-2 text-sm font-semibold text-[#f4f2eb] hover:text-[#c49a45] transition-colors flex items-center gap-1"
              >
                <span>Safaris</span>
                <ChevronDown className="w-3.5 h-3.5 opacity-70" />
              </button>

              {activeDropdown === 'safaris' && (
                <div className="absolute top-full left-0 w-72 rounded-2xl bg-[#141e17] border border-[#233327] shadow-2xl p-2.5 z-50 animate-in fade-in slide-in-from-top-2 duration-150 grid grid-cols-1 gap-0.5">
                  <button
                    onClick={() => {
                      onNavigate('tours');
                      setActiveDropdown(null);
                    }}
                    className="w-full text-left px-3 py-2 rounded-xl text-xs font-bold text-[#c49a45] hover:bg-[#1b2920] transition-colors"
                  >
                    All Safaris & Packages
                  </button>
                  {[
                    'Big 5',
                    'Great Migration',
                    'Family',
                    'Honeymoon',
                    'Senior Friendly',
                    'Luxury',
                    'Midrange',
                    'Budget',
                    'Fly-In',
                    'Safari & Beach'
                  ].map(style => (
                    <button
                      key={style}
                      onClick={() => {
                        onNavigate('tours', { travelStyle: style });
                        setActiveDropdown(null);
                      }}
                      className="w-full text-left px-3 py-1.5 rounded-xl text-xs font-medium text-[#e0ded6] hover:bg-[#1b2920] hover:text-[#c49a45] transition-colors"
                    >
                      {style} Safaris
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* HOLIDAYS DROPDOWN */}
            <div
              className="relative"
              onMouseEnter={() => setActiveDropdown('holidays')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button
                onClick={() => onNavigate('hotels')}
                className="px-3.5 py-2 text-sm font-semibold text-[#f4f2eb] hover:text-[#c49a45] transition-colors flex items-center gap-1"
              >
                <span>Holidays</span>
                <ChevronDown className="w-3.5 h-3.5 opacity-70" />
              </button>

              {activeDropdown === 'holidays' && (
                <div className="absolute top-full left-0 w-64 rounded-2xl bg-[#141e17] border border-[#233327] shadow-2xl p-2.5 z-50">
                  <button
                    onClick={() => {
                      onNavigate('hotels', { residentOnly: true });
                      setIsKenyanResidentMode(true);
                      setActiveDropdown(null);
                    }}
                    className="w-full text-left px-3 py-2 rounded-xl text-xs font-semibold text-[#86efac] bg-[#1b4332]/40 hover:bg-[#1b4332] transition-colors block mb-1"
                  >
                    Kenyan Resident Beach Deals
                  </button>
                  <button
                    onClick={() => {
                      onNavigate('hotels');
                      setActiveDropdown(null);
                    }}
                    className="w-full text-left px-3 py-2 rounded-xl text-xs font-medium text-[#e0ded6] hover:bg-[#1b2920] hover:text-[#c49a45] transition-colors block"
                  >
                    All Beach Resorts & Spas
                  </button>
                  <button
                    onClick={() => {
                      onNavigate('tours', { travelStyle: 'Safari & Beach' });
                      setActiveDropdown(null);
                    }}
                    className="w-full text-left px-3 py-2 rounded-xl text-xs font-medium text-[#e0ded6] hover:bg-[#1b2920] hover:text-[#c49a45] transition-colors block"
                  >
                    Bush & Beach Combos
                  </button>
                </div>
              )}
            </div>

            {/* DISCOVER DROPDOWN */}
            <div
              className="relative"
              onMouseEnter={() => setActiveDropdown('discover')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button
                className="px-3.5 py-2 text-sm font-semibold text-[#f4f2eb] hover:text-[#c49a45] transition-colors flex items-center gap-1"
              >
                <span>Discover</span>
                <ChevronDown className="w-3.5 h-3.5 opacity-70" />
              </button>

              {activeDropdown === 'discover' && (
                <div className="absolute top-full left-0 w-56 rounded-2xl bg-[#141e17] border border-[#233327] shadow-2xl p-2.5 z-50">
                  <button
                    onClick={() => {
                      onNavigate('builder');
                      setActiveDropdown(null);
                    }}
                    className="w-full text-left px-3 py-2 rounded-xl text-xs font-bold text-[#c49a45] bg-[#1b2920] hover:bg-[#233327] transition-colors block mb-1"
                  >
                    Custom Safari Builder ✨
                  </button>
                  <button
                    onClick={() => {
                      onNavigate('destinations');
                      setActiveDropdown(null);
                    }}
                    className="w-full text-left px-3 py-2 rounded-xl text-xs font-medium text-[#e0ded6] hover:bg-[#1b2920] hover:text-[#c49a45] transition-colors block"
                  >
                    Destinations Guide
                  </button>
                  <button
                    onClick={() => {
                      onNavigate('blog');
                      setActiveDropdown(null);
                    }}
                    className="w-full text-left px-3 py-2 rounded-xl text-xs font-medium text-[#e0ded6] hover:bg-[#1b2920] hover:text-[#c49a45] transition-colors block"
                  >
                    Travel Magazine & Tips
                  </button>
                  <button
                    onClick={() => {
                      onNavigate('about');
                      setActiveDropdown(null);
                    }}
                    className="w-full text-left px-3 py-2 rounded-xl text-xs font-medium text-[#e0ded6] hover:bg-[#1b2920] hover:text-[#c49a45] transition-colors block"
                  >
                    About Good Secrets
                  </button>
                  <button
                    onClick={() => {
                      onNavigate('contact');
                      setActiveDropdown(null);
                    }}
                    className="w-full text-left px-3 py-2 rounded-xl text-xs font-medium text-[#e0ded6] hover:bg-[#1b2920] hover:text-[#c49a45] transition-colors block"
                  >
                    Contact Us
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Right Action CTAs */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#14261b] hover:bg-[#1e3827] text-[#4ade80] border border-[#2d5238] text-xs font-bold transition-all"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp Us</span>
            </a>

            <button
              onClick={() => onOpenEnquiryModal()}
              className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-xl bg-[#c49a45] hover:bg-[#d6b772] text-[#0c120e] font-extrabold text-xs uppercase tracking-wider transition-all shadow-md active:scale-95"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Plan My Safari</span>
            </button>
          </div>

          {/* Mobile menu toggle */}
          <div className="flex items-center gap-2 lg:hidden">
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-xl bg-[#1b2920] text-[#4ade80] border border-[#2a3d31]"
            >
              <MessageCircle className="w-5 h-5" />
            </a>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl bg-[#141e17] text-[#f4f2eb] border border-[#233327]"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* MOBILE SLIDE-OUT MENU */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#0c120e] border-b border-[#233327] px-4 py-6 space-y-4 max-h-[85vh] overflow-y-auto">
            <div className="space-y-1">
              <button
                onClick={() => { onNavigate('home'); setMobileMenuOpen(false); }}
                className="w-full text-left py-2.5 px-4 rounded-xl font-bold text-sm text-[#f4f2eb] bg-[#141e17]"
              >
                Home
              </button>
              <button
                onClick={() => { onNavigate('tours'); setMobileMenuOpen(false); }}
                className="w-full text-left py-2.5 px-4 rounded-xl font-bold text-sm text-[#f4f2eb] hover:bg-[#141e17]"
              >
                All Safaris & Tours
              </button>
              <button
                onClick={() => { onNavigate('destinations'); setMobileMenuOpen(false); }}
                className="w-full text-left py-2.5 px-4 rounded-xl font-bold text-sm text-[#f4f2eb] hover:bg-[#141e17]"
              >
                Destinations
              </button>
              <button
                onClick={() => { onNavigate('hotels'); setMobileMenuOpen(false); }}
                className="w-full text-left py-2.5 px-4 rounded-xl font-bold text-sm text-[#86efac] hover:bg-[#141e17]"
              >
                Kenyan Resident Holidays & Beach Resorts
              </button>
              <button
                onClick={() => { onNavigate('builder'); setMobileMenuOpen(false); }}
                className="w-full text-left py-2.5 px-4 rounded-xl font-bold text-sm text-[#c49a45] bg-[#1b2920]"
              >
                Custom Safari Builder ✨
              </button>
              <button
                onClick={() => { onNavigate('blog'); setMobileMenuOpen(false); }}
                className="w-full text-left py-2.5 px-4 rounded-xl font-bold text-sm text-[#f4f2eb] hover:bg-[#141e17]"
              >
                Travel Guides & Magazine
              </button>
              <button
                onClick={() => { onNavigate('about'); setMobileMenuOpen(false); }}
                className="w-full text-left py-2.5 px-4 rounded-xl font-bold text-sm text-[#f4f2eb] hover:bg-[#141e17]"
              >
                About Good Secrets Safaris
              </button>
              <button
                onClick={() => { onNavigate('contact'); setMobileMenuOpen(false); }}
                className="w-full text-left py-2.5 px-4 rounded-xl font-bold text-sm text-[#f4f2eb] hover:bg-[#141e17]"
              >
                Contact & Custom Quote
              </button>
              <button
                onClick={() => { onNavigate('admin'); setMobileMenuOpen(false); }}
                className="w-full text-left py-2.5 px-4 rounded-xl font-bold text-sm text-[#c49a45] border border-[#c49a45]/30 mt-2"
              >
                Admin CMS Dashboard
              </button>
            </div>

            <div className="pt-4 border-t border-[#233327] space-y-3">
              <button
                onClick={() => { onOpenEnquiryModal(); setMobileMenuOpen(false); }}
                className="w-full py-3 rounded-xl bg-[#c49a45] text-black font-extrabold text-sm uppercase tracking-wider text-center"
              >
                Plan My Safari
              </button>

              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 rounded-xl bg-[#25D366] text-black font-bold text-sm flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
