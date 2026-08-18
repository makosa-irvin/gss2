import React from 'react';
import { useData } from '../../context/DataContext';
import {
  Compass,
  MapPin,
  Phone,
  Mail,
  Clock,
  ShieldCheck,
  Award,
  Instagram,
  Facebook,
  Youtube,
  Linkedin,
  ArrowUpRight
} from 'lucide-react';

interface FooterProps {
  onNavigate: (view: string, payload?: any) => void;
  onOpenEnquiryModal: (payload?: any) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenEnquiryModal }) => {
  const { settings, destinations } = useData();

  return (
    <footer id="main-footer" className="bg-[#080d09] border-t border-[#1b2920] text-[#a3b2a7] pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-12">
        {/* Top Brand Banner */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pb-12 border-b border-[#1b2920]">
          <div className="lg:col-span-5 space-y-4">
            <div
              onClick={() => onNavigate('home')}
              className="flex items-center gap-3 cursor-pointer select-none"
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#c49a45] to-[#8c6c2b] p-0.5 shadow-md flex items-center justify-center">
                <div className="w-full h-full bg-[#080d09] rounded-[10px] flex items-center justify-center">
                  <Compass className="w-5 h-5 text-[#c49a45]" />
                </div>
              </div>
              <div>
                <span className="font-display-accent text-xl font-bold tracking-wider text-[#f4f2eb] block">
                  GOOD SECRETS SAFARIS
                </span>
                <span className="text-[10px] font-extrabold uppercase tracking-[0.25em] text-[#c49a45] block">
                  KENYA · TANZANIA · ZANZIBAR
                </span>
              </div>
            </div>

            <p className="text-sm text-[#8b9e90] leading-relaxed max-w-md">
              {settings.description || "Crafting personalized African safaris, Great Migration expeditions, Kilimanjaro views, and Indian Ocean luxury escapes designed around your personal story."}
            </p>

            <div className="flex items-center gap-3 pt-2">
              {settings.social.instagram && (
                <a
                  href={settings.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-[#141e17] text-[#c4d4c8] hover:text-[#c49a45] hover:bg-[#1b2920] transition-colors border border-[#233327]"
                  aria-label="Instagram"
                >
                  <Instagram className="w-4 h-4" />
                </a>
              )}
              {settings.social.facebook && (
                <a
                  href={settings.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-[#141e17] text-[#c4d4c8] hover:text-[#c49a45] hover:bg-[#1b2920] transition-colors border border-[#233327]"
                  aria-label="Facebook"
                >
                  <Facebook className="w-4 h-4" />
                </a>
              )}
              {settings.social.youtube && (
                <a
                  href={settings.social.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-[#141e17] text-[#c4d4c8] hover:text-[#c49a45] hover:bg-[#1b2920] transition-colors border border-[#233327]"
                  aria-label="YouTube"
                >
                  <Youtube className="w-4 h-4" />
                </a>
              )}
              {settings.social.linkedin && (
                <a
                  href={settings.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-[#141e17] text-[#c4d4c8] hover:text-[#c49a45] hover:bg-[#1b2920] transition-colors border border-[#233327]"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
              )}
            </div>
          </div>

          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8">
            {/* Column 1: Safaris & Styles */}
            <div className="space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#f4f2eb]">
                Safari Styles
              </h4>
              <ul className="space-y-2 text-xs">
                {['Big 5', 'Great Migration', 'Family', 'Honeymoon', 'Senior Friendly', 'Luxury', 'Budget', 'Safari & Beach'].map(style => (
                  <li key={style}>
                    <button
                      onClick={() => onNavigate('tours', { travelStyle: style })}
                      className="hover:text-[#c49a45] transition-colors text-left"
                    >
                      {style} Safaris
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 2: Destinations */}
            <div className="space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#f4f2eb]">
                Destinations
              </h4>
              <ul className="space-y-2 text-xs">
                {destinations.slice(0, 7).map(d => (
                  <li key={d.id}>
                    <button
                      onClick={() => onNavigate('destinations', { destinationId: d.id })}
                      className="hover:text-[#c49a45] transition-colors text-left"
                    >
                      {d.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Quick Links & Contact */}
            <div className="space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#f4f2eb]">
                Company & Contact
              </h4>
              <ul className="space-y-2 text-xs">
                <li>
                  <button onClick={() => onNavigate('about')} className="hover:text-[#c49a45] transition-colors">
                    About Our Story
                  </button>
                </li>
                <li>
                  <button onClick={() => onNavigate('hotels')} className="text-[#86efac] hover:underline transition-colors">
                    Kenyan Resident Offers
                  </button>
                </li>
                <li>
                  <button onClick={() => onNavigate('builder')} className="text-[#c49a45] hover:underline transition-colors">
                    Custom Safari Builder ✨
                  </button>
                </li>
                <li>
                  <button onClick={() => onNavigate('blog')} className="hover:text-[#c49a45] transition-colors">
                    Travel Guides & Blog
                  </button>
                </li>
                <li>
                  <button onClick={() => onNavigate('contact')} className="hover:text-[#c49a45] transition-colors">
                    Contact & Quote Request
                  </button>
                </li>
                <li>
                  <button onClick={() => onNavigate('admin')} className="text-[#c49a45] hover:underline font-bold transition-colors">
                    Admin CMS Login
                  </button>
                </li>
              </ul>

              <div className="pt-2 text-xs space-y-1.5 text-[#8b9e90]">
                <div className="flex items-center gap-1.5">
                  <Mail className="w-3.5 h-3.5 text-[#c49a45]" />
                  <span>{settings.contact.email}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Phone className="w-3.5 h-3.5 text-[#c49a45]" />
                  <span>{settings.contact.phone}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-[#c49a45]" />
                  <span>{settings.contact.address}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Trust and Copyright Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#6e8073]">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-[#c49a45]" />
            <span>Licensed & Certified East Africa Safari Operator · Full AMREF Flying Doctors Medical Evacuation Cover</span>
          </div>

          <div>
            © {new Date().getFullYear()} Good Secrets Safaris. All rights reserved. Your Africa. Your Story. Your Safari.
          </div>
        </div>
      </div>
    </footer>
  );
};
