import React, { useState } from 'react';
import Layout from '../../../components/comon/Layout';

// ─── Types ────────────────────────────────────────────
interface LoginForm {
  email   : string;
  password: string;
  remember: boolean;
}

interface FormErrors {
  email?   : string;
  password?: string;
}

// ─── Shared decorative side panel ────────────────────
const AuthSidePanel: React.FC = () => (
  <div
    className="hidden lg:flex flex-col justify-between h-full min-h-[600px] rounded-3xl p-10 relative overflow-hidden"
    style={{
      background: 'linear-gradient(145deg, #004b1e 0%, #006e2f 55%, #15803d 100%)',
    }}
  >
    {/* Dot grid overlay */}
    <div
      className="absolute inset-0 opacity-[0.07] pointer-events-none"
      style={{
        backgroundImage  : 'radial-gradient(rgba(255,255,255,0.8) 1px, transparent 1px)',
        backgroundSize   : '22px 22px',
      }}
    />
    {/* Decorative blobs */}
    <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-y-1/3 translate-x-1/3 pointer-events-none" />
    <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full blur-2xl translate-y-1/4 -translate-x-1/4 pointer-events-none" />

    {/* Logo */}
    <div className="relative flex items-center gap-2.5">
      <div className="w-9 h-9 rounded-xl bg-white/15 border border-white/20 flex items-center justify-center">
        <span className="text-white font-black font-[Geist] text-base leading-none">E</span>
      </div>
      <span className="font-[Geist] font-black text-[1.25rem] tracking-tight text-white">
        EasyBuy
      </span>
    </div>

    {/* Middle: feature list */}
    <div className="relative flex flex-col gap-5">
      <h2 className="font-[Geist] font-black text-[1.75rem] leading-tight text-white tracking-tight">
        The smartest way<br />to shop locally.
      </h2>
      <p className="text-white/65 text-[0.9375rem] font-[Inter] leading-relaxed max-w-[280px]">
        Compare prices from 500+ local vendors and get everything delivered in under 60 minutes.
      </p>

      <ul className="flex flex-col gap-3 mt-2">
        {[
          { icon: '⚡', text: 'Delivery in under 60 minutes'     },
          { icon: '💰', text: 'Save up to 30% on every order'    },
          { icon: '🛒', text: 'Single checkout for multiple shops'},
          { icon: '📍', text: 'Hyperlocal vendors near you'       },
        ].map(({ icon, text }) => (
          <li key={text} className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-xl bg-white/10 border border-white/15 flex items-center justify-center text-sm shrink-0">
              {icon}
            </div>
            <span className="text-white/80 text-[0.875rem] font-[Inter] font-medium">{text}</span>
          </li>
        ))}
      </ul>
    </div>

    {/* Bottom: social proof */}
    <div className="relative flex items-center gap-3 pt-6 border-t border-white/15">
      <div className="flex -space-x-2.5">
        {[
          'https://lh3.googleusercontent.com/aida-public/AB6AXuCuUK_4iwSojoPRAp-WJjQZOtQWVjg6WHSTGIAfYsAd1X0Jln8vKxlp7lLF-2oxJl4iQ-idaAV78qgYnWyqpnby0-Kp6pnNNcfyGKOGNrCNp0nGLT8kV4QilS7I7pVOJ4EpvWHHEoyfOzQSi_pqojJTxUhCHyR71yZAPhE1FJ0GBYRLZffBvV0n3fnqCz_d5X4U3XYI7S30B5jpTCkS8LEkptoA5bruD5n2MnWYAGtgamhtAf4YjQr78G6MbX49lOPAZ0I3TQOtMpE',
          'https://lh3.googleusercontent.com/aida-public/AB6AXuBQqtRtD4S9jxvSA7C3tJuteyJJGVr2qkxeW1k_3igv-iJN8pBYgJUBQcAph-xO6NZpHFsfuU7TCH5egaSm5Uu_DFSF9V-_MHPZ9w4kkk9La046sgdV3MPlvkWbrUQNAUbYFXVnuryEWZf7F-_8enkgqTwIRWCRHpn2sCXgQZ1ecghUK3O7okQos2EzO2IBlyH4DQjd29pRIrIx1q9DWvn230k4O6EQmmqpexIJ8VPee2IKJB_PhwKK-l2zS1FqVRlxY8gwSQXkJS0',
          'https://lh3.googleusercontent.com/aida-public/AB6AXuBoEsnTSZP5B2LXz3jCdZmYTi-sgVPBVNsMzlMYjptb8l6d4WQVwGhGAGeTzPTSltDGDiuf0ZDI6Y8nC6MpeTidUT-nTA-xkY6nIfLhooDrvhDpEYwKgskjJjXPcXwJKS4F5mmqZ7A1977TEVY_qgETUiuyUcB9Q5kxwJFv3osa8zIlaMHkB0mJOlW6z7yEyyjREzp3eanJJhvjaZ-OuTms4xjILT5wBJ30vqq1yq7OYo7j9JvbbSQwjnkNfvLDHu1oC3ubvRlt8lo',
        ].map((src, i) => (
          <img
            key={i}
            src={src}
            alt={`Shopper ${i + 1}`}
            className="w-9 h-9 rounded-full border-2 border-[#006e2f] object-cover"
          />
        ))}
      </div>
      <p className="text-white/50 text-[0.8125rem] font-[Inter]">
        50,000+ shoppers this month
      </p>
    </div>
  </div>
);

// ─── Input Field ──────────────────────────────────────
interface InputFieldProps {
  id        : string;
  label     : string;
  type      : string;
  value     : string;
  onChange  : (v: string) => void;
  error?    : string;
  placeholder?: string;
  autoComplete?: string;
  rightSlot?: React.ReactNode;
}

const InputField: React.FC<InputFieldProps> = ({
  id, label, type, value, onChange, error, placeholder, autoComplete, rightSlot,
}) => (
  <div className="flex flex-col gap-1.5">
    <label htmlFor={id} className="text-[0.875rem] font-semibold text-[var(--text-primary)] font-[Geist]">
      {label}
    </label>
    <div className="relative">
      <input
        id={id}
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        autoComplete={autoComplete}
        className={[
          'w-full px-4 py-3 rounded-xl border text-[0.9375rem] font-[Inter] text-[var(--text-primary)]',
          'bg-[var(--secondary-muted)] placeholder:text-[var(--text-muted-light)]',
          'outline-none transition-all duration-150',
          'focus:bg-white focus:ring-2 focus:ring-[var(--primary-background)]/20 focus:border-[var(--primary-background)]',
          rightSlot ? 'pr-12' : '',
          error
            ? 'border-[var(--status-error)] bg-red-50/50 focus:ring-red-200 focus:border-[var(--status-error)]'
            : 'border-[var(--border-medium)] hover:border-[var(--border-strong)]',
        ].join(' ')}
        aria-describedby={error ? `${id}-error` : undefined}
        aria-invalid={error ? 'true' : 'false'}
      />
      {rightSlot && (
        <div className="absolute right-3 top-1/2 -translate-y-1/2">{rightSlot}</div>
      )}
    </div>
    {error && (
      <p id={`${id}-error`} role="alert" className="text-[0.8125rem] text-[var(--status-error)] font-[Inter] flex items-center gap-1">
        <svg className="w-3.5 h-3.5 shrink-0" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd"/>
        </svg>
        {error}
      </p>
    )}
  </div>
);

// ─── Divider ──────────────────────────────────────────
const OrDivider: React.FC = () => (
  <div className="flex items-center gap-3 my-1">
    <div className="flex-1 h-px bg-[var(--border-light)]" />
    <span className="text-[0.75rem] text-[var(--text-muted)] font-[Inter] font-medium">OR</span>
    <div className="flex-1 h-px bg-[var(--border-light)]" />
  </div>
);

// ─── Google Button ────────────────────────────────────
const GoogleButton: React.FC<{ label: string }> = ({ label }) => (
  <button
    type="button"
    className="w-full flex items-center justify-center gap-3 px-5 py-3 bg-white border border-[var(--border-medium)] rounded-xl text-[0.9375rem] font-semibold text-[var(--text-primary)] font-[Inter] hover:bg-[var(--secondary-muted)] hover:border-[var(--border-strong)] active:scale-[0.98] transition-all duration-150 shadow-[var(--shadow-xs)]"
  >
    <svg className="w-5 h-5" viewBox="0 0 24 24" aria-hidden="true">
      <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
      <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
      <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
      <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
    </svg>
    {label}
  </button>
);

// ─── Main Login Page ──────────────────────────────────
const Login: React.FC = () => {
  const [form, setForm]       = useState<LoginForm>({ email: '', password: '', remember: false });
  const [errors, setErrors]   = useState<FormErrors>({});
  const [showPwd, setShowPwd] = useState(false);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const set = <K extends keyof LoginForm>(key: K, val: LoginForm[K]) =>
    setForm((p) => ({ ...p, [key]: val }));

  const validate = (): boolean => {
    const e: FormErrors = {};
    if (!form.email.trim())                              e.email    = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Enter a valid email address';
    if (!form.password)                                  e.password = 'Password is required';
    else if (form.password.length < 6)                   e.password = 'Password must be at least 6 characters';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setLoading(true);
    // Simulate API call
    await new Promise((r) => setTimeout(r, 1400));
    setLoading(false);
    setSuccess(true);
    console.log('Login payload:', form);
  };

  return (
    <Layout>
      {/* Page bg */}
      <div className="w-full min-h-[calc(100vh-64px)] bg-[var(--secondary-muted)] flex items-center justify-center py-12 px-4">
        <div className="w-full max-w-[1000px] mx-auto">

          {/* Card shell */}
          <div className="bg-white rounded-3xl shadow-[0_24px_64px_rgba(0,0,0,0.08)] border border-[var(--border-light)] overflow-hidden grid grid-cols-1 lg:grid-cols-2">

            {/* ── Left panel ── */}
            <div className="p-8 sm:p-10 lg:p-12 flex flex-col justify-center">

              {/* Mobile logo */}
              <div className="flex items-center gap-2.5 mb-8 lg:hidden">
                <div className="w-8 h-8 rounded-xl bg-[var(--primary-background)] flex items-center justify-center shadow-[var(--shadow-brand)]">
                  <span className="text-white font-black font-[Geist] text-sm">E</span>
                </div>
                <span className="font-[Geist] font-black text-lg text-[var(--primary-background)]">EasyBuy</span>
              </div>

              {/* Heading */}
              <div className="mb-8">
                <h1 className="font-[Geist] font-black text-[1.875rem] sm:text-[2.25rem] text-[var(--text-primary)] tracking-tight leading-tight mb-2">
                  Welcome back 👋
                </h1>
                <p className="text-[var(--text-muted)] text-[0.9375rem] font-[Inter]">
                  Sign in to your account to continue shopping.
                </p>
              </div>

              {/* Success state */}
              {success ? (
                <div className="flex flex-col items-center gap-4 py-8 text-center">
                  <div className="w-16 h-16 rounded-full bg-[var(--button-secondary-bg)] border-2 border-[var(--primary-background)]/30 flex items-center justify-center text-3xl">
                    ✅
                  </div>
                  <div>
                    <p className="font-[Geist] font-bold text-[1.125rem] text-[var(--text-primary)]">Login successful!</p>
                    <p className="text-[var(--text-muted)] text-[0.875rem] font-[Inter] mt-1">Redirecting you to your dashboard…</p>
                  </div>
                </div>
              ) : (
                <>
                  {/* Google SSO */}
                  <GoogleButton label="Continue with Google" />

                  <OrDivider />

                  {/* Form */}
                  <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
                    <InputField
                      id="email"
                      label="Email address"
                      type="email"
                      value={form.email}
                      onChange={(v) => { set('email', v); setErrors((p) => ({ ...p, email: undefined })); }}
                      error={errors.email}
                      placeholder="you@example.com"
                      autoComplete="email"
                    />

                    <InputField
                      id="password"
                      label="Password"
                      type={showPwd ? 'text' : 'password'}
                      value={form.password}
                      onChange={(v) => { set('password', v); setErrors((p) => ({ ...p, password: undefined })); }}
                      error={errors.password}
                      placeholder="Enter your password"
                      autoComplete="current-password"
                      rightSlot={
                        <button
                          type="button"
                          onClick={() => setShowPwd((v) => !v)}
                          className="text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors p-0.5"
                          aria-label={showPwd ? 'Hide password' : 'Show password'}
                        >
                          {showPwd ? (
                            <svg className="w-4.5 h-4.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88"/>
                            </svg>
                          ) : (
                            <svg className="w-4.5 h-4.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"/><path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
                            </svg>
                          )}
                        </button>
                      }
                    />

                    {/* Remember + Forgot */}
                    <div className="flex items-center justify-between">
                      <label className="flex items-center gap-2.5 cursor-pointer group">
                        <div className="relative">
                          <input
                            type="checkbox"
                            checked={form.remember}
                            onChange={(e) => set('remember', e.target.checked)}
                            className="sr-only peer"
                          />
                          <div className="w-4.5 h-4.5 rounded-md border-2 border-[var(--border-medium)] bg-[var(--secondary-muted)] peer-checked:bg-[var(--primary-background)] peer-checked:border-[var(--primary-background)] transition-all duration-150 flex items-center justify-center">
                            {form.remember && (
                              <svg className="w-2.5 h-2.5 text-white" fill="none" stroke="currentColor" strokeWidth={3} viewBox="0 0 24 24" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/>
                              </svg>
                            )}
                          </div>
                        </div>
                        <span className="text-[0.875rem] text-[var(--text-secondary)] font-[Inter] select-none">
                          Remember me
                        </span>
                      </label>

                      <a
                        href="/forgot-password"
                        className="text-[0.875rem] font-semibold text-[var(--primary-background)] font-[Inter] hover:underline underline-offset-2"
                      >
                        Forgot password?
                      </a>
                    </div>

                    {/* Submit */}
                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full py-3.5 bg-[var(--primary-background)] text-white font-black font-[Geist] text-[0.9375rem] rounded-xl shadow-[var(--shadow-brand)] hover:brightness-110 active:scale-[0.98] disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:brightness-100 transition-all duration-200 flex items-center justify-center gap-2.5 mt-1"
                    >
                      {loading ? (
                        <>
                          <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24" aria-hidden="true">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/>
                          </svg>
                          Signing in…
                        </>
                      ) : 'Sign in to EasyBuy'}
                    </button>
                  </form>

                  {/* Register link */}
                  <p className="text-center text-[0.875rem] text-[var(--text-muted)] font-[Inter] mt-6">
                    Don't have an account?{' '}
                    <a href="/register" className="font-bold text-[var(--primary-background)] hover:underline underline-offset-2">
                      Create one free
                    </a>
                  </p>
                </>
              )}
            </div>

            {/* ── Right panel ── */}
            <div className="hidden lg:block p-5">
              <AuthSidePanel />
            </div>

          </div>

          {/* Footer note */}
          <p className="text-center text-[0.8125rem] text-[var(--text-muted)] font-[Inter] mt-6">
            By continuing, you agree to our{' '}
            <a href="/terms" className="text-[var(--primary-background)] hover:underline underline-offset-1 font-medium">Terms</a>
            {' '}and{' '}
            <a href="/privacy" className="text-[var(--primary-background)] hover:underline underline-offset-1 font-medium">Privacy Policy</a>.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Login;