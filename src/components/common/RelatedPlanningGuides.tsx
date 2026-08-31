import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen } from 'lucide-react';
import type { GuideRecommendation } from '../../lib/guideRecommendations';

interface RelatedPlanningGuidesProps {
  guides: GuideRecommendation[];
  eyebrow?: string;
  title?: string;
}

export const RelatedPlanningGuides: React.FC<RelatedPlanningGuidesProps> = ({
  guides,
  eyebrow = 'Plan with more context',
  title = 'Useful guides before you decide',
}) => {
  if (!guides.length) return null;

  return (
    <section aria-labelledby="related-planning-guides-heading" className="space-y-5">
      <div>
        <span className="text-xs font-bold uppercase tracking-widest text-brand-soft">{eyebrow}</span>
        <h2 id="related-planning-guides-heading" className="font-serif-luxury text-2xl sm:text-3xl font-bold text-white mt-1">{title}</h2>
        <p className="text-sm text-on-shell-muted mt-2 max-w-3xl">Use these planning guides to answer the questions that usually matter before choosing dates, route shape or safari style.</p>
      </div>
      <div className="grid md:grid-cols-3 gap-4">
        {guides.map(item => (
          <Link key={item.slug} to={`/guides/${item.slug}`} className="group rounded-2xl border border-white/10 bg-white/5 p-5 hover:border-brand-strong hover:bg-white/[0.07] transition-colors">
            <BookOpen className="w-5 h-5 text-brand-soft" aria-hidden="true" />
            <h3 className="font-serif-luxury text-xl font-bold text-white mt-3">{item.title}</h3>
            <p className="text-sm text-on-shell-muted mt-2 leading-relaxed">{item.reason}</p>
            <span className="mt-4 inline-flex items-center gap-1 text-sm font-bold text-brand-soft group-hover:text-white">Read planning guide <ArrowRight className="w-4 h-4" /></span>
          </Link>
        ))}
      </div>
    </section>
  );
};
