import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useData } from '../context/DataContext';
import { BlogPost } from '../types';
import { BookOpen, ArrowLeft, ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react';
import { PageMeta } from '../components/common/PageMeta';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

interface BlogViewProps {
  initialSlug?: string;
  onOpenEnquiryModal: (payload?: any) => void;
}

export const BlogView: React.FC<BlogViewProps> = ({ initialSlug, onOpenEnquiryModal }) => {
  const { blogPosts } = useData();
  const navigate = useNavigate();
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(initialSlug ? blogPosts.find(p => p.slug === initialSlug) || null : null);

  const openPost = (post: BlogPost) => {
    setSelectedPost(post);
    navigate(`/blog/${post.slug}`);
  };

  if (selectedPost) {
    return (
      <div className="max-w-4xl mx-auto px-4 sm:px-8 py-8 space-y-8">
        <PageMeta title={selectedPost.title} description={selectedPost.excerpt} image={selectedPost.featuredImage} canonicalPath={`/blog/${selectedPost.slug}`} type="article" structuredData={{ '@context': 'https://schema.org', '@type': 'BlogPosting', headline: selectedPost.title, description: selectedPost.excerpt, image: selectedPost.featuredImage, datePublished: selectedPost.publishedDate, author: { '@type': 'Person', name: selectedPost.author.name } }} />

        <button type="button" onClick={() => { setSelectedPost(null); navigate('/blog'); }} className="min-h-11 inline-flex items-center gap-2 text-sm text-[#c7d2cb] hover:text-[#e6bc65] transition-colors font-semibold"><ArrowLeft className="w-4 h-4" /><span>Back to travel guides</span></button>

        <header className="space-y-4">
          <div className="flex flex-wrap items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#e6bc65]"><span>{selectedPost.category}</span><span aria-hidden="true">·</span><span className="text-[#c7d2cb]">{selectedPost.readingTime}</span></div>
          <h1 className="font-serif-luxury text-3xl sm:text-5xl font-bold text-white leading-tight">{selectedPost.title}</h1>
          <div className="flex items-center gap-3 pt-1 text-sm text-[#c7d2cb]"><img src={selectedPost.author.avatar} alt="" className="w-11 h-11 rounded-full object-cover border border-[#e6bc65]" /><div><span className="font-bold text-white block">{selectedPost.author.name}</span><span>{selectedPost.author.role} · Published {selectedPost.publishedDate}</span></div></div>
        </header>

        <div className="rounded-3xl overflow-hidden aspect-[16/9] border border-white/15 shadow-lg bg-[#faf8f2]"><img src={selectedPost.featuredImage} alt={selectedPost.title} className="w-full h-full object-cover" /></div>

        <article className="rounded-3xl bg-white border border-[#ded8cb] p-6 sm:p-9 shadow-sm prose prose-neutral max-w-none text-[#303e35] text-base leading-relaxed">
          <p className="text-lg font-medium text-[#303e35] border-l-4 border-[#8a611d] pl-4 italic">{selectedPost.excerpt}</p>
          <ReactMarkdown remarkPlugins={[remarkGfm]}>{selectedPost.content}</ReactMarkdown>
        </article>

        <section className="p-7 sm:p-9 rounded-3xl bg-gradient-to-br from-[#142019] to-[#0c120e] border border-white/10 text-center space-y-4 shadow-lg">
          <Sparkles className="w-8 h-8 text-[#e6bc65] mx-auto" aria-hidden="true" />
          <h2 className="font-serif-luxury text-2xl sm:text-3xl font-bold text-white">Turn the research into a trip that fits you.</h2>
          <p className="text-sm text-[#c7d2cb] max-w-lg mx-auto leading-relaxed">Use this guide as a starting point. We can help adapt the route, dates, pace and accommodation to your priorities.</p>
          <div className="flex flex-wrap justify-center gap-4 text-xs text-[#e8eee9]"><span className="inline-flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-[#e6bc65]" />No payment to enquire</span><span className="inline-flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-[#e6bc65]" />Tailor-made recommendations</span></div>
          <button type="button" onClick={() => onOpenEnquiryModal({ initialType: `Safari inspired by ${selectedPost.title}` })} className="min-h-12 px-7 rounded-xl bg-[#8a611d] hover:bg-[#704d15] text-white font-bold text-sm shadow-md">Ask us to plan around this guide</button>
        </section>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-8 py-10 space-y-9">
      <PageMeta title="Travel Guides & Blog" description="Safari planning guides, wildlife migration timing, and travel tips for Kenya, Tanzania, and Zanzibar." canonicalPath="/blog" />
      <section className="rounded-3xl border border-white/10 bg-gradient-to-br from-[#142019] to-[#0c120e] p-7 sm:p-10 text-center shadow-xl">
        <div className="max-w-3xl mx-auto space-y-4"><div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#e6bc65]"><BookOpen className="w-4 h-4" /><span>Safari planning guides</span></div><h1 className="font-serif-luxury text-3xl sm:text-5xl font-bold text-white">Plan with more confidence before you enquire.</h1><p className="text-base text-[#c7d2cb] leading-relaxed">Explore destination comparisons, seasonal considerations and practical safari planning advice for Kenya, Tanzania and the coast.</p></div>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
        {blogPosts.map(post => (
          <article key={post.id} className="group rounded-2xl bg-white border border-[#ded8cb] overflow-hidden hover:border-[#8a611d] hover:shadow-md transition-all flex flex-col">
            <button type="button" onClick={() => openPost(post)} aria-label={`Read ${post.title}`} className="text-left flex flex-col flex-1 focus-visible:outline-offset-[-3px]">
              <div className="aspect-[16/10] overflow-hidden bg-[#faf8f2]"><img src={post.featuredImage} alt={post.title} className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500" /></div>
              <div className="p-6 space-y-3 flex-1"><div className="flex items-center gap-2 text-xs font-bold text-[#76541a]"><span>{post.category}</span><span aria-hidden="true">·</span><span className="text-[#66766b]">{post.readingTime}</span></div><h2 className="font-serif-luxury text-xl font-bold text-[#161f19] group-hover:text-[#704d15] transition-colors line-clamp-2">{post.title}</h2><p className="text-sm text-[#46544b] line-clamp-3 leading-relaxed">{post.excerpt}</p></div>
              <div className="px-6 pb-6 pt-4 flex items-center justify-between text-sm text-[#66766b] border-t border-[#eeebe2]"><span>{post.author.name}</span><span className="text-[#76541a] font-bold flex items-center gap-1">Read guide <ArrowRight className="w-4 h-4" /></span></div>
            </button>
          </article>
        ))}
      </div>
    </div>
  );
};
