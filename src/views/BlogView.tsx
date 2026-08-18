import React, { useState } from 'react';
import { useData } from '../context/DataContext';
import { BlogPost } from '../types';
import { BookOpen, Clock, User, ArrowLeft, ArrowRight, Sparkles, Tag } from 'lucide-react';

interface BlogViewProps {
  initialSlug?: string;
  onOpenEnquiryModal: (payload?: any) => void;
}

export const BlogView: React.FC<BlogViewProps> = ({ initialSlug, onOpenEnquiryModal }) => {
  const { blogPosts } = useData();
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(
    initialSlug ? blogPosts.find(p => p.slug === initialSlug) || null : null
  );

  if (selectedPost) {
    return (
      <div className="max-w-4xl mx-auto px-4 sm:px-8 py-8 space-y-8">
        <button
          onClick={() => setSelectedPost(null)}
          className="inline-flex items-center gap-1.5 text-xs text-[#8b9e90] hover:text-[#c49a45] transition-colors font-medium"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to All Articles & Guides</span>
        </button>

        <div className="space-y-4">
          <div className="flex items-center gap-2 text-xs text-[#c49a45] font-bold uppercase tracking-wider">
            <span>{selectedPost.category}</span>
            <span>·</span>
            <span className="text-[#8b9e90]">{selectedPost.readingTime}</span>
          </div>

          <h1 className="font-serif-luxury text-3xl sm:text-5xl font-bold text-[#f4f2eb] leading-tight">
            {selectedPost.title}
          </h1>

          <div className="flex items-center gap-3 pt-2 text-xs text-[#a3b2a7]">
            <img
              src={selectedPost.author.avatar}
              alt={selectedPost.author.name}
              className="w-10 h-10 rounded-full object-cover border border-[#c49a45]"
            />
            <div>
              <span className="font-bold text-[#f4f2eb] block">{selectedPost.author.name}</span>
              <span className="text-[#8b9e90]">{selectedPost.author.role} · Published {selectedPost.publishedDate}</span>
            </div>
          </div>
        </div>

        <div className="rounded-3xl overflow-hidden aspect-[16/9] border border-[#233327] shadow-2xl bg-[#0c120e]">
          <img
            src={selectedPost.featuredImage}
            alt={selectedPost.title}
            className="w-full h-full object-cover"
          />
        </div>

        <article className="prose prose-invert max-w-none text-[#c4d4c8] text-base leading-relaxed space-y-6">
          <p className="text-lg font-medium text-[#f4f2eb] border-l-2 border-[#c49a45] pl-4 italic">
            {selectedPost.excerpt}
          </p>

          <div className="whitespace-pre-line leading-loose text-sm sm:text-base">
            {selectedPost.content}
          </div>
        </article>

        {/* Action Banner */}
        <div className="p-8 rounded-3xl bg-[#141e17] border border-[#233327] text-center space-y-4 shadow-xl">
          <Sparkles className="w-8 h-8 text-[#c49a45] mx-auto" />
          <h3 className="font-serif-luxury text-2xl font-bold text-[#f4f2eb]">
            Ready to experience this safari in person?
          </h3>
          <p className="text-xs text-[#a3b2a7] max-w-md mx-auto">
            Our safari naturalists are ready to customize this exact itinerary for your preferred dates.
          </p>
          <div className="pt-2">
            <button
              onClick={() => onOpenEnquiryModal({ initialType: `Safari inspired by ${selectedPost.title}` })}
              className="px-6 py-3 rounded-xl bg-[#c49a45] text-black font-bold text-xs uppercase tracking-wider"
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
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#c49a45]">
          <BookOpen className="w-4 h-4" />
          <span>Travel Journal & Field Guides</span>
        </div>
        <h1 className="font-serif-luxury text-3xl sm:text-5xl font-bold text-[#f4f2eb]">
          East Africa Inspiration & Expert Advice
        </h1>
        <p className="text-sm text-[#a3b2a7]">
          Discover migration tracking tips, park comparisons, packing advice, and seasonal safari insights written by our lead naturalists.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {blogPosts.map(post => (
          <div
            key={post.id}
            onClick={() => setSelectedPost(post)}
            className="group cursor-pointer rounded-2xl bg-[#141e17] border border-[#233327] overflow-hidden hover:border-[#c49a45]/60 transition-all flex flex-col justify-between"
          >
            <div>
              <div className="aspect-[16/10] overflow-hidden bg-[#0c120e]">
                <img
                  src={post.featuredImage}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="p-6 space-y-2">
                <div className="flex items-center gap-2 text-xs text-[#c49a45] font-semibold">
                  <span>{post.category}</span>
                  <span>·</span>
                  <span className="text-[#8b9e90]">{post.readingTime}</span>
                </div>
                <h3 className="font-serif-luxury text-lg font-bold text-[#f4f2eb] group-hover:text-[#c49a45] transition-colors line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-xs text-[#a3b2a7] line-clamp-3 leading-relaxed">
                  {post.excerpt}
                </p>
              </div>
            </div>

            <div className="p-6 pt-0 flex items-center justify-between text-xs text-[#8b9e90] border-t border-[#1e2c22] mt-4">
              <span>{post.author.name}</span>
              <span className="text-[#c49a45] font-semibold flex items-center gap-1 group-hover:underline">
                Read Guide <ArrowRight className="w-3 h-3" />
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
