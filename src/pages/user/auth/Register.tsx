import React, { useState } from 'react';
import Layout from '../../../components/comon/Layout';

// ─── Types ────────────────────────────────────────────
interface RegisterForm {
  name           : string;
  email          : string;
  phone          : string;
  password       : string;
  confirmPassword: string;
  agreeTerms     : boolean;
}

interface FormErrors {
  name?           : string;
  email?          : string;
  phone?          : string;
  password?       : string;
  confirmPassword?: string;
  agreeTerms?     : string;
}

// ─── Password strength ────────────────────────────────
interface StrengthResult {
  score  : 0 | 1 | 2 | 3 | 4;
  label  : string;
  color  : string;
  bars   : number;
}

const getPasswordStrength = (pwd: string): StrengthResult => {
  if (!pwd)               return { score: 0, label: '',        color: 'bg-[var(--border-light)]', bars: 0 };
  let score = 0;
  if (pwd.length >= 8)                    score++;
  if (/[A-Z]/.test(pwd))                 score++;
  if (/[0-9]/.test(pwd))                 score++;
  if (/[^A-Za-z0-9]/.test(pwd))          score++;

  const map: Record<number, StrengthResult> = {
    1: { score: 1, label: 'Weak',      color: 'bg-red-400',    bars: 1 },
    2: { score: 2, label: 'Fair',      color: 'bg-amber-400',  bars: 2 },
    3: { score: 3, label: 'Good',      color: 'bg-yellow-400', bars: 3 },
    4: { score: 4, label: 'Strong',    color: 'bg-green-500',  bars: 4 },
  };
  return map[score] ?? { score: 0, label: '', color: 'bg-[var(--border-light)]', bars: 0 };
};

// ─── Step indicator ───────────────────────────────────
const StepIndicator: React.FC<{ current: number; total: number }> = ({ current, total }) => (
  <div className="flex items-center gap-2 mb-6">
    {Array.from({ length: total }).map((_, i) => (
      <React.Fragment key={i}>
        <div className={[
          'flex items-center justify-center rounded-full text-[0.6875rem] font-black font-[Geist] transition-all duration-300',
          i < current
            ? 'w-6 h-6 bg-[var(--primary-background)] text-white shadow-[var(--shadow-brand)]'
            : i === current
            ? 'w-7 h-7 border-2 border-[var(--primary-background)] text-[var(--primary-background)]'
            : 'w-6 h-6 bg-[var(--neutral-bg-1)] text-[var(--text-muted)]',
        ].join(' ')}>
          {i < current ? (
            <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth={3} viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/>
            </svg>
          ) : (
            i + 1
          )}
        </div>
        {i < total - 1 && (
          <div className={`flex-1 h-0.5 rounded-full transition-all duration-300 ${i < current ? 'bg-[var(--primary-background)]' : 'bg-[var(--border-light)]'}`} />
        )}
      </React.Fragment>
    ))}
  </div>
);

// ─── Shared InputField (same as Login) ───────────────
interface InputFieldProps {
  id          : string;
  label       : string;
  type        : string;
  value       : string;
  onChange    : (v: string) => void;
  error?      : string;
  placeholder?: string;
  autoComplete?: string;
  hint?       : string;
  rightSlot?  : React.ReactNode;
}

const InputField: React.FC<InputFieldProps> = ({
  id, label, type, value, onChange, error, placeholder, autoComplete, hint, rightSlot,
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
        aria-describedby={error ? `${id}-error` : hint ? `${id}-hint` : undefined}
        aria-invalid={error ? 'true' : 'false'}
        className={[
          'w-full px-4 py-3 rounded-xl border text-[0.9375rem] font-[Inter] text-[var(--text-primary)]',
          'bg-[var(--secondary-muted)] placeholder:text-[var(--text-muted-light)]',
          'outline-none transition-all duration-150',
          'focus:bg-white focus:ring-2 focus:ring-[var(--primary-background)]/20 focus:border-[var(--primary-background)]',
          rightSlot ? 'pr-12' : '',
          error
            ? 'border-[var(--status-error)] bg-red-50/40 focus:ring-red-200 focus:border-[var(--status-error)]'
            : 'border-[var(--border-medium)] hover:border-[var(--border-strong)]',
        ].join(' ')}
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
    {hint && !error && (
      <p id={`${id}-hint`} className="text-[0.75rem] text-[var(--text-muted)] font-[Inter]">{hint}</p>
    )}
  </div>
);

// ─── Password strength bar ────────────────────────────
const PasswordStrengthBar: React.FC<{ password: string }> = ({ password }) => {
  const strength = getPasswordStrength(password);
  if (!password) return null;
  return (
    <div className="flex flex-col gap-1.5 mt-1">
      <div className="flex gap-1" aria-label={`Password strength: ${strength.label}`}>
        {Array.from({ length: 4 }).map((_, i) => (
          <div
            key={i}
            className={`h-1 flex-1 rounded-full transition-all duration-300 ${i < strength.bars ? strength.color : 'bg-[var(--border-light)]'}`}
          />
        ))}
      </div>
      {strength.label && (
        <p className={`text-[0.75rem] font-semibold font-[Inter] ${
          strength.score <= 1 ? 'text-red-500' :
          strength.score === 2 ? 'text-amber-500' :
          strength.score === 3 ? 'text-yellow-600' : 'text-green-600'
        }`}>
          {strength.label} password
        </p>
      )}
    </div>
  );
};

// ─── Google Button (reused) ───────────────────────────
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

// ─── Or divider ───────────────────────────────────────
const OrDivider: React.FC = () => (
  <div className="flex items-center gap-3 my-1">
    <div className="flex-1 h-px bg-[var(--border-light)]" />
    <span className="text-[0.75rem] text-[var(--text-muted)] font-[Inter] font-medium">OR</span>
    <div className="flex-1 h-px bg-[var(--border-light)]" />
  </div>
);

// ─── Right panel (benefits) ───────────────────────────
const RegisterSidePanel: React.FC = () => (
  <div
    className="hidden lg:flex flex-col justify-between h-full min-h-[600px] rounded-3xl p-10 relative overflow-hidden"
    style={{ background: 'linear-gradient(145deg, #004b1e 0%, #006e2f 55%, #15803d 100%)' }}
  >
    <div className="absolute inset-0 opacity-[0.07] pointer-events-none" style={{ backgroundImage: 'radial-gradient(rgba(255,255,255,0.8) 1px, transparent 1px)', backgroundSize: '22px 22px' }} />
    <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-y-1/3 translate-x-1/3 pointer-events-none" />

    {/* Logo */}
    <div className="relative flex items-center gap-2.5">
      <div className="w-9 h-9 rounded-xl bg-white/15 border border-white/20 flex items-center justify-center">
        <span className="text-white font-black font-[Geist] text-base">E</span>
      </div>
      <span className="font-[Geist] font-black text-[1.25rem] tracking-tight text-white">EasyBuy</span>
    </div>

    {/* What you get */}
    <div className="relative flex flex-col gap-5">
      <h2 className="font-[Geist] font-black text-[1.75rem] leading-tight text-white tracking-tight">
        Join 50,000+<br />smart shoppers.
      </h2>
      <p className="text-white/65 text-[0.9375rem] font-[Inter] leading-relaxed max-w-[280px]">
        Create your free account and start saving on your weekly groceries today.
      </p>

      {/* Benefit cards */}
      <div className="flex flex-col gap-3 mt-2">
        {[
          { icon: '🎁', title: '$5 off your first order',         sub: 'Use code WELCOME5 at checkout'   },
          { icon: '⚡', title: 'Free delivery this week',          sub: 'On all orders above $20'         },
          { icon: '🔔', title: 'Flash deal alerts',                sub: 'Be first for time-limited offers'},
          { icon: '📊', title: 'Price history & insights',        sub: 'Track your spending trends'       },
        ].map(({ icon, title, sub }) => (
          <div key={title} className="flex items-center gap-3 bg-white/10 border border-white/15 rounded-2xl p-3.5">
            <div className="w-9 h-9 rounded-xl bg-white/10 flex items-center justify-center text-lg shrink-0">
              {icon}
            </div>
            <div>
              <p className="text-white text-[0.875rem] font-bold font-[Geist] leading-tight">{title}</p>
              <p className="text-white/55 text-[0.75rem] font-[Inter] mt-0.5">{sub}</p>
            </div>
          </div>
        ))}
      </div>
    </div>

    {/* Trust footer */}
    <div className="relative flex items-center gap-2 pt-6 border-t border-white/15">
      <svg className="w-4 h-4 text-white/40" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
        <path fillRule="evenodd" d="M10 1a4.5 4.5 0 00-4.5 4.5V9H5a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2v-6a2 2 0 00-2-2h-.5V5.5A4.5 4.5 0 0010 1zm3 8V5.5a3 3 0 10-6 0V9h6z" clipRule="evenodd"/>
      </svg>
      <p className="text-white/45 text-[0.75rem] font-[Inter]">
        SSL encrypted · Your data is always safe
      </p>
    </div>
  </div>
);

// ─── Main Register Page ───────────────────────────────
const Register: React.FC = () => {
  const [form, setForm]       = useState<RegisterForm>({
    name: '', email: '', phone: '', password: '', confirmPassword: '', agreeTerms: false,
  });
  const [errors, setErrors]   = useState<FormErrors>({});
  const [showPwd, setShowPwd] = useState(false);
  const [showCPwd, setShowCPwd] = useState(false);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const set = <K extends keyof RegisterForm>(key: K, val: RegisterForm[K]) =>
    setForm((p) => ({ ...p, [key]: val }));

  const clearErr = (key: keyof FormErrors) =>
    setErrors((p) => ({ ...p, [key]: undefined }));

  const validate = (): boolean => {
    const e: FormErrors = {};

    if (!form.name.trim())
      e.name = 'Full name is required';
    else if (form.name.trim().length < 2)
      e.name = 'Name must be at least 2 characters';

    if (!form.email.trim())
      e.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      e.email = 'Enter a valid email address';

    if (!form.phone.trim())
      e.phone = 'Phone number is required';
    else if (!/^\+?[1-9]\d{7,14}$/.test(form.phone.replace(/\s/g, '')))
      e.phone = 'Enter a valid phone number';

    if (!form.password)
      e.password = 'Password is required';
    else if (form.password.length < 8)
      e.password = 'Password must be at least 8 characters';
    else if (!/[A-Z]/.test(form.password))
      e.password = 'Must contain at least one uppercase letter';
    else if (!/[0-9]/.test(form.password))
      e.password = 'Must contain at least one number';

    if (!form.confirmPassword)
      e.confirmPassword = 'Please confirm your password';
    else if (form.password !== form.confirmPassword)
      e.confirmPassword = 'Passwords do not match';

    if (!form.agreeTerms)
      e.agreeTerms = 'You must accept the terms to continue';

    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1600));
    setLoading(false);
    setSuccess(true);
    console.log('Register payload:', { ...form, password: '[REDACTED]' });
  };

  // Eye-toggle button factory
  const eyeToggle = (show: boolean, toggle: () => void, id: string) => (
    <button
      type="button"
      onClick={toggle}
      className="text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors p-0.5"
      aria-label={show ? `Hide ${id}` : `Show ${id}`}
    >
      {show ? (
        <svg className="w-4.5 h-4.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88"/>
        </svg>
      ) : (
        <svg className="w-4.5 h-4.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"/><path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
        </svg>
      )}
    </button>
  );

  return (
    <Layout>
      <div className="w-full min-h-[calc(100vh-64px)] bg-[var(--secondary-muted)] flex items-center justify-center py-12 px-4">
        <div className="w-full max-w-[1040px] mx-auto">

          {/* Card */}
          <div className="bg-white rounded-3xl shadow-[0_24px_64px_rgba(0,0,0,0.08)] border border-[var(--border-light)] overflow-hidden grid grid-cols-1 lg:grid-cols-2">

            {/* ── Left: form ── */}
            <div className="p-8 sm:p-10 lg:p-12 flex flex-col justify-center">

              {/* Mobile logo */}
              <div className="flex items-center gap-2.5 mb-7 lg:hidden">
                <div className="w-8 h-8 rounded-xl bg-[var(--primary-background)] flex items-center justify-center shadow-[var(--shadow-brand)]">
                  <span className="text-white font-black font-[Geist] text-sm">E</span>
                </div>
                <span className="font-[Geist] font-black text-lg text-[var(--primary-background)]">EasyBuy</span>
              </div>

              {/* Heading */}
              <div className="mb-7">
                <h1 className="font-[Geist] font-black text-[1.875rem] sm:text-[2.125rem] text-[var(--text-primary)] tracking-tight leading-tight mb-2">
                  Create your account 🛍️
                </h1>
                <p className="text-[var(--text-muted)] text-[0.9375rem] font-[Inter]">
                  Join 50,000+ smart shoppers. Free forever.
                </p>
              </div>

              {/* Success */}
              {success ? (
                <div className="flex flex-col items-center gap-5 py-8 text-center">
                  <div className="w-20 h-20 rounded-full bg-[var(--button-secondary-bg)] border-2 border-[var(--primary-background)]/30 flex items-center justify-center text-4xl shadow-[var(--shadow-brand)]">
                    🎉
                  </div>
                  <div>
                    <p className="font-[Geist] font-black text-[1.25rem] text-[var(--text-primary)] mb-1">
                      Welcome to EasyBuy!
                    </p>
                    <p className="text-[var(--text-muted)] text-[0.875rem] font-[Inter] max-w-[280px] mx-auto leading-relaxed">
                      Your account has been created. Check your email to verify and get your{' '}
                      <span className="font-bold text-[var(--primary-background)]">$5 welcome credit</span>.
                    </p>
                  </div>
                  <a
                    href="/login"
                    className="px-8 py-3 bg-[var(--primary-background)] text-white font-bold font-[Geist] rounded-xl shadow-[var(--shadow-brand)] hover:brightness-110 transition-all duration-200"
                  >
                    Sign in now
                  </a>
                </div>
              ) : (
                <>
                  {/* Google SSO */}
                  <GoogleButton label="Sign up with Google" />
                  <OrDivider />

                  {/* Form */}
                  <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-4">

                    {/* Row: Name */}
                    <InputField
                      id="name"
                      label="Full name"
                      type="text"
                      value={form.name}
                      onChange={(v) => { set('name', v); clearErr('name'); }}
                      error={errors.name}
                      placeholder="Jane Smith"
                      autoComplete="name"
                    />

                    {/* Row: Email */}
                    <InputField
                      id="email"
                      label="Email address"
                      type="email"
                      value={form.email}
                      onChange={(v) => { set('email', v); clearErr('email'); }}
                      error={errors.email}
                      placeholder="you@example.com"
                      autoComplete="email"
                    />

                    {/* Row: Phone */}
                    <InputField
                      id="phone"
                      label="Phone number"
                      type="tel"
                      value={form.phone}
                      onChange={(v) => { set('phone', v); clearErr('phone'); }}
                      error={errors.phone}
                      placeholder="+1 555 000 0000"
                      autoComplete="tel"
                      hint="We'll send order updates via SMS."
                    />

                    {/* Row: Password */}
                    <div>
                      <InputField
                        id="password"
                        label="Password"
                        type={showPwd ? 'text' : 'password'}
                        value={form.password}
                        onChange={(v) => { set('password', v); clearErr('password'); }}
                        error={errors.password}
                        placeholder="Min. 8 characters"
                        autoComplete="new-password"
                        rightSlot={eyeToggle(showPwd, () => setShowPwd((v) => !v), 'password')}
                      />
                      <PasswordStrengthBar password={form.password} />
                    </div>

                    {/* Row: Confirm password */}
                    <InputField
                      id="confirm-password"
                      label="Confirm password"
                      type={showCPwd ? 'text' : 'password'}
                      value={form.confirmPassword}
                      onChange={(v) => { set('confirmPassword', v); clearErr('confirmPassword'); }}
                      error={errors.confirmPassword}
                      placeholder="Re-enter your password"
                      autoComplete="new-password"
                      rightSlot={eyeToggle(showCPwd, () => setShowCPwd((v) => !v), 'confirm password')}
                    />

                    {/* Terms checkbox */}
                    <div className="flex flex-col gap-1">
                      <label className="flex items-start gap-3 cursor-pointer group">
                        <div className="relative mt-0.5 shrink-0">
                          <input
                            type="checkbox"
                            checked={form.agreeTerms}
                            onChange={(e) => { set('agreeTerms', e.target.checked); clearErr('agreeTerms'); }}
                            className="sr-only peer"
                            aria-describedby={errors.agreeTerms ? 'terms-error' : undefined}
                          />
                          <div className="w-5 h-5 rounded-md border-2 border-[var(--border-medium)] bg-[var(--secondary-muted)] peer-checked:bg-[var(--primary-background)] peer-checked:border-[var(--primary-background)] transition-all duration-150 flex items-center justify-center">
                            {form.agreeTerms && (
                              <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" strokeWidth={3} viewBox="0 0 24 24" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/>
                              </svg>
                            )}
                          </div>
                        </div>
                        <span className="text-[0.875rem] text-[var(--text-secondary)] font-[Inter] leading-relaxed select-none">
                          I agree to the{' '}
                          <a href="/terms" className="text-[var(--primary-background)] font-semibold hover:underline underline-offset-1">
                            Terms of Service
                          </a>{' '}
                          and{' '}
                          <a href="/privacy" className="text-[var(--primary-background)] font-semibold hover:underline underline-offset-1">
                            Privacy Policy
                          </a>
                        </span>
                      </label>
                      {errors.agreeTerms && (
                        <p id="terms-error" role="alert" className="text-[0.8125rem] text-[var(--status-error)] font-[Inter] flex items-center gap-1 ml-8">
                          <svg className="w-3.5 h-3.5 shrink-0" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd"/>
                          </svg>
                          {errors.agreeTerms}
                        </p>
                      )}
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
                          Creating your account…
                        </>
                      ) : 'Create free account'}
                    </button>
                  </form>

                  {/* Login link */}
                  <p className="text-center text-[0.875rem] text-[var(--text-muted)] font-[Inter] mt-5">
                    Already have an account?{' '}
                    <a href="/login" className="font-bold text-[var(--primary-background)] hover:underline underline-offset-2">
                      Sign in
                    </a>
                  </p>
                </>
              )}
            </div>

            {/* ── Right panel ── */}
            <div className="hidden lg:block p-5">
              <RegisterSidePanel />
            </div>

          </div>

          {/* Footer trust row */}
          <div className="flex flex-wrap justify-center items-center gap-x-6 gap-y-2 mt-6">
            {[
              { icon: '🔒', text: 'SSL encrypted' },
              { icon: '🚫', text: 'No spam, ever' },
              { icon: '✓',  text: 'Free to join'  },
            ].map(({ icon, text }) => (
              <span key={text} className="flex items-center gap-1.5 text-[0.8125rem] text-[var(--text-muted)] font-[Inter]">
                <span aria-hidden="true">{icon}</span> {text}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Register;