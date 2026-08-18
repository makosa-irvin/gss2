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
      <div className="bg-[#f5f3ec] border-b border-[#e6e2d6] px-4 sm:px-8 py-1.5 text-xs text-[#526156]">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <span className="hidden sm:inline-flex items-center gap-1.5 text-[#243329] font-medium">
              <span className="w-2 h-2 rounded-full bg-[#128c7e] animate-pulse"></span>
              24/7 East Africa Safari Concierge
            </span>
            <span className="hidden md:inline text-[#d0cac0]">|</span>
            <a
              href={`tel:${settings.contact.phone}`}
              className="hidden md:flex items-center gap-1 text-[#435247] hover:text-[#9e7120] font-semibold transition-colors"
            >
              <Phone className="w-3 h-3 text-[#9e7120]" />
              <span>{settings.contact.phone}</span>
            </a>
          </div>

          <div className="flex items-center gap-3">
            {/* Kenyan Resident Mode Switch */}
            <button
              onClick={() => setIsKenyanResidentMode(!isKenyanResidentMode)}
              className={`px-2.5 py-0.5 rounded-full text-[11px] font-semibold border transition-all flex items-center gap-1 ${
                isKenyanResidentMode
                  ? 'bg-[#1b4332] text-white border-[#1b4332] shadow-sm'
                  : 'bg-white text-[#4a584e] border-[#dcd7cb] hover:border-[#b4ad9f]'
              }`}
            >
              <span>Kenyan Resident Rates</span>
              {isKenyanResidentMode && <Check className="w-3 h-3" />}
            </button>

            {/* Currency Selector */}
            <div className="flex items-center rounded-lg bg-white border border-[#dcd7cb] p-0.5 text-[11px] font-bold shadow-xs">
              <button
                onClick={() => setActiveCurrency('USD')}
                className={`px-2 py-0.5 rounded-md transition-colors ${
                  activeCurrency === 'USD' ? 'bg-[#b3822a] text-white' : 'text-[#5a6b5f] hover:text-black'
                }`}
              >
                USD ($)
              </button>
              <button
                onClick={() => setActiveCurrency('KES')}
                className={`px-2 py-0.5 rounded-md transition-colors ${
                  activeCurrency === 'KES' ? 'bg-[#b3822a] text-white' : 'text-[#5a6b5f] hover:text-black'
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
                  ? 'bg-[#161f19] text-white border-[#161f19]'
                  : 'bg-white text-[#8c6214] border-[#dcd7cb] hover:bg-[#161f19] hover:text-white'
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
            ? 'bg-white/95 backdrop-blur-xl border-b border-[#e8e4da] shadow-md py-3'
            : 'bg-white/90 backdrop-blur-md border-b border-[#ece8de] py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-8 flex items-center justify-between">
          {/* Logo & Brand Identity */}
          <div
            onClick={() => onNavigate('home')}
            className="flex items-center gap-3 cursor-pointer select-none group"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#b3822a] to-[#8c6214] p-0.5 shadow-md flex items-center justify-center">
              <div className="w-full h-full bg-[#161f19] rounded-[10px] flex items-center justify-center group-hover:bg-[#1b4332] transition-colors">
                <Compass className="w-5 h-5 text-[#f4f2eb]" />
              </div>
            </div>
            <div>
              <span className="font-display-accent text-lg sm:text-xl font-bold tracking-wider text-[#161f19] block leading-none">
                GOOD SECRETS
              </span>
              <span className="text-[10px] font-extrabold uppercase tracking-[0.25em] text-[#9e7120] block mt-0.5">
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
                className="px-3.5 py-2 text-sm font-semibold text-[#1a241e] hover:text-[#9e7120] transition-colors flex items-center gap-1"
              >
                <span>Explore</span>
                <ChevronDown className="w-3.5 h-3.5 opacity-60" />
              </button>

              {activeDropdown === 'explore' && (
                <div className="absolute top-full left-0 w-64 rounded-2xl bg-white border border-[#e5e1d6] shadow-2xl p-2.5 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
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
                      className="w-full text-left px-3 py-2 rounded-xl text-xs font-semibold text-[#303d34] hover:bg-[#f6f4ee] hover:text-[#9e7120] transition-colors block"
                    >
                      {item.label}
                    </button>
                  ))}
                  <div className="pt-1.5 mt-1.5 border-t border-[#eeebe2]">
                    <button
                      onClick={() => {
                        onNavigate('destinations');
                        setActiveDropdown(null);
                      }}
                      className="w-full text-left px-3 py-1.5 text-xs font-bold text-[#9e7120] hover:underline block"
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
                className="px-3.5 py-2 text-sm font-semibold text-[#1a241e] hover:text-[#9e7120] transition-colors flex items-center gap-1"
              >
                <span>Safaris</span>
                <ChevronDown className="w-3.5 h-3.5 opacity-60" />
              </button>

              {activeDropdown === 'safaris' && (
                <div className="absolute top-full left-0 w-72 rounded-2xl bg-white border border-[#e5e1d6] shadow-2xl p-2.5 z-50 animate-in fade-in slide-in-from-top-2 duration-150 grid grid-cols-1 gap-0.5">
                  <button
                    onClick={() => {
                      onNavigate('tours');
                      setActiveDropdown(null);
                    }}
                    className="w-full text-left px-3 py-2 rounded-xl text-xs font-bold text-[#9e7120] bg-[#fbf9f4] hover:bg-[#f3efe6] transition-colors"
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
                      className="w-full text-left px-3 py-1.5 rounded-xl text-xs font-medium text-[#303d34] hover:bg-[#f6f4ee] hover:text-[#9e7120] transition-colors"
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
                className="px-3.5 py-2 text-sm font-semibold text-[#1a241e] hover:text-[#9e7120] transition-colors flex items-center gap-1"
              >
                <span>Holidays</span>
                <ChevronDown className="w-3.5 h-3.5 opacity-60" />
              </button>

              {activeDropdown === 'holidays' && (
                <div className="absolute top-full left-0 w-64 rounded-2xl bg-white border border-[#e5e1d6] shadow-2xl p-2.5 z-50">
                  <button
                    onClick={() => {
                      onNavigate('hotels', { residentOnly: true });
                      setIsKenyanResidentMode(true);
                      setActiveDropdown(null);
                    }}
                    className="w-full text-left px-3 py-2 rounded-xl text-xs font-bold text-[#1b4332] bg-[#eef7f2] hover:bg-[#e1f1e8] transition-colors block mb-1"
                  >
                    Kenyan Resident Beach Deals 🏖️
                  </button>
                  <button
                    onClick={() => {
                      onNavigate('hotels');
                      setActiveDropdown(null);
                    }}
                    className="w-full text-left px-3 py-2 rounded-xl text-xs font-medium text-[#303d34] hover:bg-[#f6f4ee] hover:text-[#9e7120] transition-colors block"
                  >
                    All Beach Resorts & Spas
                  </button>
                  <button
                    onClick={() => {
                      onNavigate('tours', { travelStyle: 'Safari & Beach' });
                      setActiveDropdown(null);
                    }}
                    className="w-full text-left px-3 py-2 rounded-xl text-xs font-medium text-[#303d34] hover:bg-[#f6f4ee] hover:text-[#9e7120] transition-colors block"
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
                className="px-3.5 py-2 text-sm font-semibold text-[#1a241e] hover:text-[#9e7120] transition-colors flex items-center gap-1"
              >
                <span>Discover</span>
                <ChevronDown className="w-3.5 h-3.5 opacity-60" />
              </button>

              {activeDropdown === 'discover' && (
                <div className="absolute top-full left-0 w-56 rounded-2xl bg-white border border-[#e5e1d6] shadow-2xl p-2.5 z-50">
                  <button
                    onClick={() => {
                      onNavigate('builder');
                      setActiveDropdown(null);
                    }}
                    className="w-full text-left px-3 py-2 rounded-xl text-xs font-bold text-[#9e7120] bg-[#fbf9f4] hover:bg-[#f3efe6] transition-colors block mb-1"
                  >
                    Custom Safari Builder ✨
                  </button>
                  <button
                    onClick={() => {
                      onNavigate('destinations');
                      setActiveDropdown(null);
                    }}
                    className="w-full text-left px-3 py-2 rounded-xl text-xs font-medium text-[#303d34] hover:bg-[#f6f4ee] hover:text-[#9e7120] transition-colors block"
                  >
                    Destinations Guide
                  </button>
                  <button
                    onClick={() => {
                      onNavigate('blog');
                      setActiveDropdown(null);
                    }}
                    className="w-full text-left px-3 py-2 rounded-xl text-xs font-medium text-[#303d34] hover:bg-[#f6f4ee] hover:text-[#9e7120] transition-colors block"
                  >
                    Travel Magazine & Tips
                  </button>
                  <button
                    onClick={() => {
                      onNavigate('about');
                      setActiveDropdown(null);
                    }}
                    className="w-full text-left px-3 py-2 rounded-xl text-xs font-medium text-[#303d34] hover:bg-[#f6f4ee] hover:text-[#9e7120] transition-colors block"
                  >
                    About Good Secrets
                  </button>
                  <button
                    onClick={() => {
                      onNavigate('contact');
                      setActiveDropdown(null);
                    }}
                    className="w-full text-left px-3 py-2 rounded-xl text-xs font-medium text-[#303d34] hover:bg-[#f6f4ee] hover:text-[#9e7120] transition-colors block"
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
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#eef7f2] hover:bg-[#def0e6] text-[#1b4332] border border-[#c3e2cf] text-xs font-bold transition-all shadow-xs"
            >
              <MessageCircle className="w-4 h-4 text-[#128c7e]" />
              <span>WhatsApp Us</span>
            </a>

            <button
              onClick={() => onOpenEnquiryModal()}
              className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-xl bg-[#b3822a] hover:bg-[#9e7120] text-white font-extrabold text-xs uppercase tracking-wider transition-all shadow-md active:scale-95"
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
              className="p-2 rounded-xl bg-[#eef7f2] text-[#1b4332] border border-[#c3e2cf]"
            >
              <MessageCircle className="w-5 h-5 text-[#128c7e]" />
            </a>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl bg-[#f4f2ec] text-[#1a241e] border border-[#e0dcce]"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* MOBILE SLIDE-OUT MENU */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-b border-[#e6e2d6] px-4 py-6 space-y-4 max-h-[85vh] overflow-y-auto shadow-2xl">
            <div className="space-y-1">
              <button
                onClick={() => { onNavigate('home'); setMobileMenuOpen(false); }}
                className="w-full text-left py-2.5 px-4 rounded-xl font-bold text-sm text-[#161f19] bg-[#f5f3eb]"
              >
                Home
              </button>
              <button
                onClick={() => { onNavigate('tours'); setMobileMenuOpen(false); }}
                className="w-full text-left py-2.5 px-4 rounded-xl font-bold text-sm text-[#2d3b31] hover:bg-[#f6f4ee]"
              >
                All Safaris & Tours
              </button>
              <button
                onClick={() => { onNavigate('destinations'); setMobileMenuOpen(false); }}
                className="w-full text-left py-2.5 px-4 rounded-xl font-bold text-sm text-[#2d3b31] hover:bg-[#f6f4ee]"
              >
                Destinations
              </button>
              <button
                onClick={() => { onNavigate('hotels'); setMobileMenuOpen(false); }}
                className="w-full text-left py-2.5 px-4 rounded-xl font-bold text-sm text-[#1b4332] bg-[#eef7f2]"
              >
                Kenyan Resident Holidays & Beach Resorts 🏖️
              </button>
              <button
                onClick={() => { onNavigate('builder'); setMobileMenuOpen(false); }}
                className="w-full text-left py-2.5 px-4 rounded-xl font-bold text-sm text-[#9e7120] bg-[#fbf9f4]"
              >
                Custom Safari Builder ✨
              </button>
              <button
                onClick={() => { onNavigate('blog'); setMobileMenuOpen(false); }}
                className="w-full text-left py-2.5 px-4 rounded-xl font-bold text-sm text-[#2d3b31] hover:bg-[#f6f4ee]"
              >
                Travel Guides & Magazine
              </button>
              <button
                onClick={() => { onNavigate('about'); setMobileMenuOpen(false); }}
                className="w-full text-left py-2.5 px-4 rounded-xl font-bold text-sm text-[#2d3b31] hover:bg-[#f6f4ee]"
              >
                About Good Secrets Safaris
              </button>
              <button
                onClick={() => { onNavigate('contact'); setMobileMenuOpen(false); }}
                className="w-full text-left py-2.5 px-4 rounded-xl font-bold text-sm text-[#2d3b31] hover:bg-[#f6f4ee]"
              >
                Contact & Custom Quote
              </button>
              <button
                onClick={() => { onNavigate('admin'); setMobileMenuOpen(false); }}
                className="w-full text-left py-2.5 px-4 rounded-xl font-bold text-sm text-[#9e7120] border border-[#e5dfd0] mt-2"
              >
                Admin CMS Dashboard
              </button>
            </div>

            <div className="pt-4 border-t border-[#ece7dc] space-y-3">
              <button
                onClick={() => { onOpenEnquiryModal(); setMobileMenuOpen(false); }}
                className="w-full py-3 rounded-xl bg-[#b3822a] text-white font-extrabold text-sm uppercase tracking-wider text-center shadow-sm"
              >
                Plan My Safari
              </button>

              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 rounded-xl bg-[#25D366] text-black font-bold text-sm flex items-center justify-center gap-2 shadow-sm"
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
