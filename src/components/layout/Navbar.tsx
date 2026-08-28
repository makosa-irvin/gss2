import React, { useState, useEffect } from 'react';
import { useData } from '../../context/DataContext';
import {
  Compass,
  ChevronDown,
  Phone,
  Menu,
  X,
  Sparkles,
  Check
} from 'lucide-react';

interface NavbarProps {
  onNavigate: (view: string, payload?: any) => void;
  onOpenEnquiryModal: (payload?: any) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onNavigate, onOpenEnquiryModal }) => {
  const { settings, activeCurrency, setActiveCurrency, isKenyanResidentMode, setIsKenyanResidentMode } = useData();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleDropdown = (name: string) => {
    setActiveDropdown(current => current === name ? null : name);
  };

  const dropdownButtonClass = "min-h-11 px-3.5 py-2 text-sm font-semibold text-[#1a241e] hover:text-[#765217] transition-colors flex items-center gap-1 rounded-lg";
  const dropdownItemClass = "w-full text-left px-3 py-2.5 rounded-xl text-sm font-medium text-[#303d34] hover:bg-[#f6f4ee] hover:text-[#765217] transition-colors block";

  return (
    <header className="sticky top-0 z-40 w-full transition-all duration-300">
      {/* TOP ANNOUNCEMENT & UTILITIES BAR - collapses on scroll on small screens
          only, since the combined sticky header + page sub-nav was eating close
          to a fifth of a phone's viewport height once scrolled. Stays visible
          at rest, and always visible at sm+ where vertical space is less tight. */}
      <div
        className={`bg-[#f5f3ec] border-b border-[#e6e2d6] px-4 sm:px-8 text-xs text-[#526156] overflow-hidden transition-[max-height,opacity,padding] duration-200 ${
          isScrolled ? 'max-h-0 opacity-0 py-0 sm:max-h-20 sm:opacity-100 sm:py-1.5' : 'max-h-20 opacity-100 py-1.5'
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <span className="hidden sm:inline-flex items-center gap-1.5 text-[#243329] font-medium">
              <span className="w-2 h-2 rounded-full bg-[#128c7e]" aria-hidden="true"></span>
              24/7 East Africa Safari Concierge
            </span>
            <span className="hidden md:inline text-[#b6aea2]" aria-hidden="true">|</span>
            <a
              href={`tel:${settings.contact.phone}`}
              className="hidden md:flex items-center gap-1 min-h-8 text-[#435247] hover:text-[#765217] font-semibold transition-colors"
            >
              <Phone className="w-3 h-3 text-[#765217]" />
              <span>{settings.contact.phone}</span>
            </a>
          </div>

          <div className="flex items-center gap-2 sm:gap-3">
            <button
              type="button"
              aria-pressed={isKenyanResidentMode}
              onClick={() => setIsKenyanResidentMode(!isKenyanResidentMode)}
              className={`min-h-8 px-2.5 py-1 rounded-full text-[11px] font-semibold border transition-all flex items-center gap-1 ${
                isKenyanResidentMode
                  ? 'bg-[#1b4332] text-white border-[#1b4332] shadow-sm'
                  : 'bg-white text-[#3f4e44] border-[#cfc8bb] hover:border-[#9f9687]'
              }`}
            >
              <span className="hidden sm:inline">Kenyan Resident Rates</span>
              <span className="sm:hidden">Resident Rates</span>
              {isKenyanResidentMode && <Check className="w-3 h-3" />}
            </button>

            <div className="flex items-center rounded-lg bg-white border border-[#cfc8bb] p-0.5 text-[11px] font-bold shadow-xs" aria-label="Currency selector">
              <button
                type="button"
                aria-pressed={activeCurrency === 'USD'}
                onClick={() => setActiveCurrency('USD')}
                className={`min-h-7 px-2 py-0.5 rounded-md transition-colors ${
                  activeCurrency === 'USD' ? 'bg-[#8a611d] text-white' : 'text-[#46564b] hover:text-black'
                }`}
              >
                USD
              </button>
              <button
                type="button"
                aria-pressed={activeCurrency === 'KES'}
                onClick={() => setActiveCurrency('KES')}
                className={`min-h-7 px-2 py-0.5 rounded-md transition-colors ${
                  activeCurrency === 'KES' ? 'bg-[#8a611d] text-white' : 'text-[#46564b] hover:text-black'
                }`}
              >
                KES
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* MAIN NAVIGATION BAR */}
      <nav
        aria-label="Main navigation"
        className={`w-full transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-xl border-b border-[#e8e4da] shadow-md py-2.5'
            : 'bg-white/95 backdrop-blur-md border-b border-[#ece8de] py-3.5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-8 flex items-center justify-between gap-4">
          <button
            type="button"
            onClick={() => onNavigate('home')}
            aria-label="Good Secrets Safaris home"
            className="flex items-center gap-3 select-none group rounded-xl text-left shrink-0"
          >
            <span className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#b3822a] to-[#765217] p-0.5 shadow-md flex items-center justify-center">
              <span className="w-full h-full bg-[#161f19] rounded-[10px] flex items-center justify-center group-hover:bg-[#1b4332] transition-colors">
                <Compass className="w-5 h-5 text-[#f4f2eb]" />
              </span>
            </span>
            <span>
              <span className="font-display-accent text-lg sm:text-xl font-bold tracking-wider text-[#161f19] block leading-none">GOOD SECRETS</span>
              <span className="text-[10px] font-extrabold uppercase tracking-[0.22em] text-[#765217] block mt-0.5">SAFARIS · EAST AFRICA</span>
            </span>
          </button>

          <div className="hidden lg:flex items-center gap-0.5">
            <div className="relative" onMouseEnter={() => setActiveDropdown('explore')} onMouseLeave={() => setActiveDropdown(null)}>
              <button type="button" onClick={() => toggleDropdown('explore')} aria-expanded={activeDropdown === 'explore'} className={dropdownButtonClass}>
                <span>Destinations</span><ChevronDown className="w-3.5 h-3.5 opacity-60" />
              </button>
              {activeDropdown === 'explore' && (
                <div className="absolute top-full left-0 w-64 rounded-2xl bg-white border border-[#ded8cb] shadow-2xl p-2.5 z-50">
                  {[
                    { label: 'Kenya Safaris & Coast', value: 'Kenya' },
                    { label: 'Tanzania Wilderness', value: 'Tanzania' },
                    { label: 'Zanzibar Spice Archipelago', value: 'Zanzibar' },
                    { label: 'Kenya + Tanzania Combined', value: 'Kenya + Tanzania' },
                    { label: 'Safari & Beach Combo', value: 'Safari + Beach' }
                  ].map(item => (
                    <button key={item.value} onClick={() => { onNavigate('tours', { country: item.value }); setActiveDropdown(null); }} className={dropdownItemClass}>
                      {item.label}
                    </button>
                  ))}
                  <div className="pt-1.5 mt-1.5 border-t border-[#eeebe2]">
                    <button onClick={() => { onNavigate('destinations'); setActiveDropdown(null); }} className="w-full text-left px-3 py-2.5 text-sm font-bold text-[#765217] hover:bg-[#f6f4ee] rounded-xl block">View All Destinations →</button>
                  </div>
                </div>
              )}
            </div>

            <div className="relative" onMouseEnter={() => setActiveDropdown('safaris')} onMouseLeave={() => setActiveDropdown(null)}>
              <button type="button" onClick={() => toggleDropdown('safaris')} aria-expanded={activeDropdown === 'safaris'} className={dropdownButtonClass}>
                <span>Safaris</span><ChevronDown className="w-3.5 h-3.5 opacity-60" />
              </button>
              {activeDropdown === 'safaris' && (
                <div className="absolute top-full left-0 w-72 rounded-2xl bg-white border border-[#ded8cb] shadow-2xl p-2.5 z-50 grid grid-cols-1 gap-0.5">
                  <button onClick={() => { onNavigate('tours'); setActiveDropdown(null); }} className="w-full text-left px-3 py-2.5 rounded-xl text-sm font-bold text-[#765217] bg-[#fbf9f4] hover:bg-[#f3efe6]">All Safaris & Packages</button>
                  {['Big 5','Great Migration','Family','Honeymoon','Senior Friendly','Luxury','Midrange','Budget','Fly-In','Safari & Beach'].map(style => (
                    <button key={style} onClick={() => { onNavigate('tours', { travelStyle: style }); setActiveDropdown(null); }} className={dropdownItemClass}>{style} Safaris</button>
                  ))}
                </div>
              )}
            </div>

            <div className="relative" onMouseEnter={() => setActiveDropdown('holidays')} onMouseLeave={() => setActiveDropdown(null)}>
              <button type="button" onClick={() => toggleDropdown('holidays')} aria-expanded={activeDropdown === 'holidays'} className={dropdownButtonClass}>
                <span>Beach & Stays</span><ChevronDown className="w-3.5 h-3.5 opacity-60" />
              </button>
              {activeDropdown === 'holidays' && (
                <div className="absolute top-full left-0 w-64 rounded-2xl bg-white border border-[#ded8cb] shadow-2xl p-2.5 z-50">
                  <button onClick={() => { onNavigate('hotels', { residentOnly: true }); setIsKenyanResidentMode(true); setActiveDropdown(null); }} className="w-full text-left px-3 py-2.5 rounded-xl text-sm font-bold text-[#1b4332] bg-[#eef7f2] hover:bg-[#e1f1e8] mb-1">Kenyan Resident Beach Deals</button>
                  <button onClick={() => { onNavigate('hotels'); setActiveDropdown(null); }} className={dropdownItemClass}>All Beach Resorts & Spas</button>
                  <button onClick={() => { onNavigate('tours', { travelStyle: 'Safari & Beach' }); setActiveDropdown(null); }} className={dropdownItemClass}>Bush & Beach Combos</button>
                </div>
              )}
            </div>

            <div className="relative" onMouseEnter={() => setActiveDropdown('discover')} onMouseLeave={() => setActiveDropdown(null)}>
              <button type="button" onClick={() => toggleDropdown('discover')} aria-expanded={activeDropdown === 'discover'} className={dropdownButtonClass}>
                <span>Travel Guide</span><ChevronDown className="w-3.5 h-3.5 opacity-60" />
              </button>
              {activeDropdown === 'discover' && (
                <div className="absolute top-full right-0 w-60 rounded-2xl bg-white border border-[#ded8cb] shadow-2xl p-2.5 z-50">
                  <button onClick={() => { onNavigate('builder'); setActiveDropdown(null); }} className="w-full text-left px-3 py-2.5 rounded-xl text-sm font-bold text-[#765217] bg-[#fbf9f4] hover:bg-[#f3efe6] mb-1">Custom Safari Builder</button>
                  <button onClick={() => { onNavigate('blog'); setActiveDropdown(null); }} className={dropdownItemClass}>Travel Magazine & Tips</button>
                  <button onClick={() => { onNavigate('about'); setActiveDropdown(null); }} className={dropdownItemClass}>About Good Secrets</button>
                  <button onClick={() => { onNavigate('contact'); setActiveDropdown(null); }} className={dropdownItemClass}>Contact Us</button>
                </div>
              )}
            </div>
          </div>

          <div className="hidden lg:flex items-center gap-3">
            <button
              onClick={() => onOpenEnquiryModal()}
              className="inline-flex items-center gap-1.5 min-h-11 px-5 py-2.5 rounded-xl bg-[#8a611d] hover:bg-[#704d15] text-white font-extrabold text-xs uppercase tracking-wider transition-all shadow-md active:scale-[0.98]"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Request a Quote</span>
            </button>
          </div>

          <div className="flex items-center gap-2 lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-expanded={mobileMenuOpen}
              aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              className="min-w-11 min-h-11 flex items-center justify-center rounded-xl bg-[#f4f2ec] text-[#1a241e] border border-[#d8d2c5]"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-b border-[#e6e2d6] px-4 py-5 space-y-4 max-h-[85vh] overflow-y-auto shadow-2xl">
            <div className="space-y-1">
              {[
                ['Home', 'home'],
                ['Safaris & Tours', 'tours'],
                ['Destinations', 'destinations'],
                ['Beach Resorts & Stays', 'hotels'],
                ['Custom Safari Builder', 'builder'],
                ['Travel Guides & Magazine', 'blog'],
                ['About Good Secrets Safaris', 'about'],
                ['Contact Us', 'contact']
              ].map(([label, view]) => (
                <button key={view} onClick={() => { onNavigate(view); setMobileMenuOpen(false); }} className="w-full min-h-11 text-left py-2.5 px-4 rounded-xl font-bold text-sm text-[#26352b] hover:bg-[#f6f4ee]">
                  {label}
                </button>
              ))}
            </div>

            <div className="pt-4 border-t border-[#ece7dc] space-y-2">
              <button onClick={() => { onOpenEnquiryModal(); setMobileMenuOpen(false); }} className="w-full min-h-12 py-3 rounded-xl bg-[#8a611d] hover:bg-[#704d15] text-white font-extrabold text-sm uppercase tracking-wider text-center shadow-sm">
                Request a Safari Quote
              </button>
              <p className="text-center text-xs text-[#536158]">Tell us your dates and travel style. No payment required.</p>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
