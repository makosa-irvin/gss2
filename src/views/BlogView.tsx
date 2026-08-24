import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useData } from '../context/DataContext';
import { BlogPost } from '../types';
import { BookOpen, Clock, User, ArrowLeft, ArrowRight, Sparkles, Tag } from 'lucide-react';
import { PageMeta } from '../components/common/PageMeta';

interface BlogViewProps {
  initialSlug?: string;
  onOpenEnquiryModal: (payload?: any) => void;
}

export const BlogView: React.FC<BlogViewProps> = ({ initialSlug, onOpenEnquiryModal }) => {
  const { blogPosts } = useData();
  const navigate = useNavigate();
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(
    initialSlug ? blogPosts.find(p => p.slug === initialSlug) || null : null
  );

  if (selectedPost) {
    return (
      <div className="max-w-4xl mx-auto px-4 sm:px-8 py-8 space-y-8">
        <PageMeta
          title={selectedPost.title}
          description={selectedPost.excerpt}
          image={selectedPost.featuredImage}
        />
        <button
          onClick={() => {
            // Clear local state and sync the URL back to /blog - without
            // this, the browser bar would still show /blog/:slug while the
            // list is displayed, so a refresh would show the article again.
            setSelectedPost(null);
            navigate('/blog');
          }}
          className="inline-flex items-center gap-1.5 text-xs text-[#707f74] hover:text-[#9e7120] transition-colors font-semibold"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to All Articles & Guides</span>
        </button>

        <div className="space-y-4">
          <div className="flex items-center gap-2 text-xs text-[#9e7120] font-bold uppercase tracking-wider">
            <span>{selectedPost.category}</span>
            <span>·</span>
            <span className="text-[#707f74]">{selectedPost.readingTime}</span>
          </div>

          <h1 className="font-serif-luxury text-3xl sm:text-5xl font-bold text-[#161f19] leading-tight">
            {selectedPost.title}
          </h1>

          <div className="flex items-center gap-3 pt-2 text-xs text-[#5d6e62]">
            <img
              src={selectedPost.author.avatar}
              alt={selectedPost.author.name}
              className="w-10 h-10 rounded-full object-cover border border-[#b3822a]"
            />
            <div>
              <span className="font-bold text-[#161f19] block">{selectedPost.author.name}</span>
              <span className="text-[#707f74]">{selectedPost.author.role} · Published {selectedPost.publishedDate}</span>
            </div>
          </div>
        </div>

        <div className="rounded-3xl overflow-hidden aspect-[16/9] border border-[#e8e4da] shadow-lg bg-[#faf8f2]">
          <img
            src={selectedPost.featuredImage}
            alt={selectedPost.title}
            className="w-full h-full object-cover"
          />
        </div>

        <article className="prose prose-neutral max-w-none text-[#303e35] text-base leading-relaxed space-y-6">
          <p className="text-lg font-medium text-[#161f19] border-l-2 border-[#b3822a] pl-4 italic">
            {selectedPost.excerpt}
          </p>

          <div className="whitespace-pre-line leading-loose text-sm sm:text-base text-[#4d5c52]">
            {selectedPost.content}
          </div>
        </article>

        {/* Action Banner */}
        <div className="p-8 rounded-3xl bg-white border border-[#e8e4da] text-center space-y-4 shadow-sm">
          <Sparkles className="w-8 h-8 text-[#9e7120] mx-auto" />
          <h3 className="font-serif-luxury text-2xl font-bold text-[#161f19]">
            Ready to experience this safari in person?
          </h3>
          <p className="text-xs text-[#5d6e62] max-w-md mx-auto">
            Our safari naturalists are ready to customize this exact itinerary for your preferred dates.
          </p>
          <div className="pt-2">
            <button
              onClick={() => onOpenEnquiryModal({ initialType: `Safari inspired by ${selectedPost.title}` })}
              className="px-6 py-3 rounded-xl bg-[#b3822a] hover:bg-[#9e7120] text-white font-bold text-xs uppercase tracking-wider shadow-md"
            >
              Plan This Safari Journey
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-8 py-10 space-y-10">
      <PageMeta title="Travel Guides & Blog" description="Safari planning guides, wildlife migration timing, and travel tips for Kenya, Tanzania, and Zanzibar." />
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#9e7120]">
          <BookOpen className="w-4 h-4" />
          <span>Travel Journal & Field Guides</span>
        </div>
        <h1 className="font-serif-luxury text-3xl sm:text-5xl font-bold text-[#161f19]">
          East Africa Inspiration & Expert Advice
        </h1>
        <p className="text-sm text-[#5d6e62]">
          Discover migration tracking tips, park comparisons, packing advice, and seasonal safari insights written by our lead naturalists.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {blogPosts.map(post => (
          <div
            key={post.id}
            onClick={() => {
              setSelectedPost(post);
              navigate(`/blog/${post.slug}`);
            }}
            className="group cursor-pointer rounded-2xl bg-white border border-[#e8e4da] overflow-hidden hover:border-[#b3822a] transition-all flex flex-col justify-between shadow-xs"
          >
            <div>
              <div className="aspect-[16/10] overflow-hidden bg-[#faf8f2]">
                <img
                  src={post.featuredImage}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="p-6 space-y-2">
                <div className="flex items-center gap-2 text-xs text-[#9e7120] font-bold">
                  <span>{post.category}</span>
                  <span>·</span>
                  <span className="text-[#707f74]">{post.readingTime}</span>
                </div>
                <h3 className="font-serif-luxury text-lg font-bold text-[#161f19] group-hover:text-[#9e7120] transition-colors line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-xs text-[#5d6e62] line-clamp-3 leading-relaxed">
                  {post.excerpt}
                </p>
              </div>
            </div>

            <div className="p-6 pt-0 flex items-center justify-between text-xs text-[#707f74] border-t border-[#eeebe2] mt-4">
              <span>{post.author.name}</span>
              <span className="text-[#9e7120] font-bold flex items-center gap-1 group-hover:underline">
                Read Guide <ArrowRight className="w-3 h-3" />
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
