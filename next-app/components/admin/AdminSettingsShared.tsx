export const inputClass = 'w-full min-h-11 rounded-xl border border-[#d7d1c4] bg-[#faf8f2] px-3.5 py-2.5 text-sm text-[#161f19] outline-none focus:border-[#8a611d] focus:ring-2 focus:ring-[#8a611d]/20';

export function Field({ label, hint, children }: { label: string; hint?: string; children: React.ReactNode }) {
  return <label className="block"><span className="text-sm font-bold text-[#303e35]">{label}</span>{hint ? <span className="mt-0.5 block text-xs text-[#707f74]">{hint}</span> : null}<div className="mt-1.5">{children}</div></label>;
}

export function SectionCard({ title, description, children }: { title: string; description?: string; children: React.ReactNode }) {
  return <section className="rounded-2xl border border-[#e8e4da] bg-white p-5 sm:p-6 shadow-sm"><h2 className="font-serif-luxury text-xl font-bold text-[#161f19]">{title}</h2>{description ? <p className="mt-1 text-xs text-[#707f74]">{description}</p> : null}<div className="mt-5 space-y-4">{children}</div></section>;
}
