import { useState, type FormEvent } from 'react';
import { Lock } from 'lucide-react';
import { useData } from '../context/DataContext';
import { ApiError } from '../services/api';
import { PageMeta } from '../components/common/PageMeta';

/**
 * Gates the admin dashboard behind a real login backed by the API
 * (POST /api/auth/login, see server/src/routes/auth.ts): bcrypt-checked
 * credentials, a JWT held in an httpOnly cookie the frontend can't read
 * or forge. This replaces the earlier client-side-only password gate,
 * which checked a password baked into the shipped JavaScript bundle and
 * was explicitly documented as not real security.
 *
 * `authLoading` covers the brief window on page load while DataContext
 * asks the backend "is there already a valid session cookie?" (see
 * DataContext's /api/auth/me check) - without it, a page refresh would
 * flash the login form for a moment even for an already-logged-in admin.
 */
export const AdminRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { currentAdmin, authLoading, login } = useData();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError('');
    setIsSubmitting(true);
    try {
      await login(email, password);
    } catch (err) {
      setError(err instanceof ApiError ? err.message : 'Could not sign in. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (authLoading) {
    return (
      <div className="min-h-[70vh] flex items-center justify-center px-4 py-16">
        <PageMeta title="Admin Login" noIndex />
        <p className="text-sm text-[#707f74]">Checking session...</p>
      </div>
    );
  }

  if (currentAdmin) return <>{children}</>;

  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4 py-16">
      <PageMeta title="Admin Login" noIndex />
      <div className="w-full max-w-sm space-y-6 p-8 rounded-2xl bg-white border border-[#e8e4da] shadow-md">
        <div className="flex flex-col items-center text-center gap-2">
          <div className="w-12 h-12 rounded-full bg-[#faf8f2] border border-[#ded8cb] flex items-center justify-center">
            <Lock className="w-5 h-5 text-[#9e7120]" />
          </div>
          <h1 className="font-serif-luxury text-xl font-bold text-[#161f19]">Admin Access</h1>
          <p className="text-xs text-[#707f74]">Staff only. Sign in to continue.</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-3">
          <input
            type="email"
            autoFocus
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            autoComplete="username"
            className="w-full px-3.5 py-2.5 rounded-xl bg-[#faf8f2] border border-[#ded8cb] text-sm text-[#161f19]"
          />
          <input
            type="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            autoComplete="current-password"
            className="w-full px-3.5 py-2.5 rounded-xl bg-[#faf8f2] border border-[#ded8cb] text-sm text-[#161f19]"
          />
          {error && <p className="text-xs text-rose-700">{error}</p>}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-2.5 rounded-xl bg-[#b3822a] hover:bg-[#9e7120] disabled:opacity-60 text-white font-bold text-xs uppercase tracking-wider transition-colors"
          >
            {isSubmitting ? 'Signing in...' : 'Sign In'}
          </button>
        </form>
      </div>
    </div>
  );
};
