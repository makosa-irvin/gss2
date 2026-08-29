import React, { useState } from 'react';
import { BlogPost } from '../../types';
import { Field, TextInput, TextArea, ToggleField, ChipListEditor, SectionCard, FormActionBar, FormGrid } from '../shared/AdminForm';
import { ArrowLeft } from 'lucide-react';

type BlogDraft = Omit<BlogPost, 'id'>;

const slugify = (value: string) => value.toLowerCase().trim().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');

function draftFromPost(post?: BlogPost | null): BlogDraft {
  if (post) {
    const { id, ...rest } = post;
    return rest;
  }
  return {
    title: '', slug: '', excerpt: '', content: '', featuredImage: '',
    author: { name: '', role: 'Travel Specialist', avatar: '' },
    publishedDate: new Date().toISOString().slice(0, 10), category: 'Safari Travel', readingTime: '5 min read',
    relatedDestinations: [], relatedTours: [], tags: [], published: false
  };
}

interface AdminBlogFormProps {
  post?: BlogPost | null;
  defaultAuthorName?: string;
  onSave: (draft: BlogDraft) => Promise<void>;
  onCancel: () => void;
}

export const AdminBlogForm: React.FC<AdminBlogFormProps> = ({ post, defaultAuthorName, onSave, onCancel }) => {
  const [draft, setDraft] = useState<BlogDraft>(() => {
    const base = draftFromPost(post);
    if (!post && defaultAuthorName) base.author.name = defaultAuthorName;
    return base;
  });
  const [slugTouched, setSlugTouched] = useState(!!post);
  const [isSaving, setIsSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const set = <K extends keyof BlogDraft>(key: K, value: BlogDraft[K]) => setDraft((d) => ({ ...d, [key]: value }));

  const handleTitleChange = (title: string) => {
    set('title', title);
    if (!slugTouched) set('slug', slugify(title));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    if (!draft.title.trim() || !draft.slug.trim()) {
      setError('Title and slug are required.');
      return;
    }
    setIsSaving(true);
    try {
      await onSave(draft);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to save article.');
      setIsSaving(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="flex items-center gap-3">
        <button type="button" onClick={onCancel} aria-label="Back to blog" className="min-h-9 min-w-9 flex items-center justify-center rounded-lg hover:bg-[#f4f1e8] text-[#161f19]">
          <ArrowLeft className="w-4 h-4" />
        </button>
        <h1 className="font-serif-luxury text-2xl font-bold text-[#161f19]">{post ? 'Edit article' : 'New article'}</h1>
      </div>

      <SectionCard title="Article">
        <FormGrid>
          <Field label="Title" required>
            <TextInput value={draft.title} onChange={handleTitleChange} required />
          </Field>
          <Field label="URL slug" required>
            <TextInput value={draft.slug} onChange={(v) => { setSlugTouched(true); set('slug', slugify(v)); }} required />
          </Field>
          <Field label="Category">
            <TextInput value={draft.category} onChange={(v) => set('category', v)} placeholder="Safari Travel" />
          </Field>
          <Field label="Reading time">
            <TextInput value={draft.readingTime} onChange={(v) => set('readingTime', v)} placeholder="5 min read" />
          </Field>
          <Field label="Published date">
            <TextInput value={draft.publishedDate.slice(0, 10)} onChange={(v) => set('publishedDate', v)} type="date" />
          </Field>
          <Field label="Featured image URL">
            <TextInput value={draft.featuredImage} onChange={(v) => set('featuredImage', v)} type="url" />
          </Field>
        </FormGrid>
        <Field label="Excerpt" hint="Shown on blog cards and search previews">
          <TextArea value={draft.excerpt} onChange={(v) => set('excerpt', v)} rows={2} />
        </Field>
        <Field label="Full article content">
          <TextArea value={draft.content} onChange={(v) => set('content', v)} rows={10} />
        </Field>
        <ToggleField label="Published" description="Visible to website visitors" checked={!!draft.published} onChange={(v) => set('published', v)} />
      </SectionCard>

      <SectionCard title="Author">
        <FormGrid cols={3}>
          <Field label="Name">
            <TextInput value={draft.author.name} onChange={(v) => set('author', { ...draft.author, name: v })} />
          </Field>
          <Field label="Role">
            <TextInput value={draft.author.role} onChange={(v) => set('author', { ...draft.author, role: v })} />
          </Field>
          <Field label="Avatar image URL">
            <TextInput value={draft.author.avatar} onChange={(v) => set('author', { ...draft.author, avatar: v })} type="url" />
          </Field>
        </FormGrid>
      </SectionCard>

      <SectionCard title="Related content & tags">
        <Field label="Tags">
          <ChipListEditor items={draft.tags} onChange={(v) => set('tags', v)} placeholder="e.g. migration, family-travel" />
        </Field>
        <Field label="Related destination names">
          <ChipListEditor items={draft.relatedDestinations} onChange={(v) => set('relatedDestinations', v)} placeholder="e.g. Maasai Mara National Reserve" />
        </Field>
        <Field label="Related tour titles">
          <ChipListEditor items={draft.relatedTours} onChange={(v) => set('relatedTours', v)} placeholder="e.g. 3-Day Masai Mara Luxury Safari" />
        </Field>
      </SectionCard>

      <FormActionBar onCancel={onCancel} isSaving={isSaving} error={error} saveLabel={post ? 'Save changes' : 'Publish draft'} />
    </form>
  );
};
