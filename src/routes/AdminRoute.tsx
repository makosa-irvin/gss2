import { useState, type FormEvent } from 'react';
import { AlertTriangle, Lock } from 'lucide-react';
import { PageMeta } from '../components/common/PageMeta';

const SESSION_KEY = 'gss_admin_session_v1';

/**
 * !! THIS IS NOT REAL SECURITY - READ BEFORE RELYING ON IT !!
 *
 * This checks a password against import.meta.env.VITE_ADMIN_PASSWORD,
 * which Vite inlines directly into the shipped JavaScript bundle. Anyone
 * can open browser devtools, view the bundle, and read the password in
 * plain text - this only stops someone from stumbling onto /admin by
 * accident or guessing a URL, not a person who actually wants in.
 *
 * If VITE_ADMIN_PASSWORD is unset (the default, since it's gitignored via
 * .env.local), this gate blocks access entirely rather than falling back
 * to an "open" or hardcoded default - so an unconfigured deployment fails
 * closed, not open.
 *
 * Before this site goes live, the admin dashboard needs real server-side
 * authentication (a login endpoint that verifies credentials against a
 * database and issues a session/JWT the browser can't forge) rather than
 * a password baked into client code. Tracked as a known gap in the
 * README - do not treat this component as sufficient protection for
 * production data.
 */
export const AdminRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isUnlocked, setIsUnlocked] = useState<boolean>(
    () => sessionStorage.getItem(SESSION_KEY) === 'true'
  );
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const configuredPassword = import.meta.env.VITE_ADMIN_PASSWORD as string | undefined;

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!configuredPassword) {
      setError('Admin access is not configured for this deployment.');
      return;
    }
    if (password === configuredPassword) {
      sessionStorage.setItem(SESSION_KEY, 'true');
      setIsUnlocked(true);
      setError('');
    } else {
      setError('Incorrect password.');
    }
  };

  if (isUnlocked) return <>{children}</>;

  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4 py-16">
      <PageMeta title="Admin Login" noIndex />
      <div className="w-full max-w-sm space-y-6 p-8 rounded-2xl bg-white border border-[#e8e4da] shadow-md">
        <div className="flex flex-col items-center text-center gap-2">
          <div className="w-12 h-12 rounded-full bg-[#faf8f2] border border-[#ded8cb] flex items-center justify-center">
            <Lock className="w-5 h-5 text-[#9e7120]" />
          </div>
          <h1 className="font-serif-luxury text-xl font-bold text-[#161f19]">Admin Access</h1>
          <p className="text-xs text-[#707f74]">Staff only. Enter the admin password to continue.</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-3">
          <input
            type="password"
            autoFocus
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            className="w-full px-3.5 py-2.5 rounded-xl bg-[#faf8f2] border border-[#ded8cb] text-sm text-[#161f19]"
          />
          {error && <p className="text-xs text-rose-700">{error}</p>}
          <button
            type="submit"
            className="w-full py-2.5 rounded-xl bg-[#b3822a] hover:bg-[#9e7120] text-white font-bold text-xs uppercase tracking-wider transition-colors"
          >
            Unlock
          </button>
        </form>

        <div className="flex items-start gap-2 p-3 rounded-xl bg-amber-50 border border-amber-200 text-[11px] text-amber-900 leading-relaxed">
          <AlertTriangle className="w-3.5 h-3.5 shrink-0 mt-0.5" />
          <span>
            This is a temporary gate, not production-grade security - the password lives in
            client-side code and can be read by anyone who inspects the site. Replace with real
            server-side authentication before handling live customer data.
          </span>
        </div>
      </div>
    </div>
  );
};
