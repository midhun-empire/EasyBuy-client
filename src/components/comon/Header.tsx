import React, { useState, useEffect } from 'react';
import type { NavLink } from '../../types';
import { NAV_LINKS } from '../../data/homeData';

// ── Logo ──────────────────────────────────────────────
const Logo: React.FC = () => (
  <a href="/" className="flex items-center gap-2.5 shrink-0 group" aria-label="EasyBuy home">
    <div className="w-9 h-9 rounded-xl bg-[var(--primary-background)] flex items-center justify-center shadow-[var(--shadow-brand)] group-hover:scale-105 transition-transform duration-200">
      <span className="text-white font-black font-[Geist] text-base leading-none">E</span>
    </div>
    <span className="font-[Geist] font-black text-[1.25rem] tracking-tight text-[var(--primary-background)]">
      EasyBuy
    </span>
  </a>
);

// ── Desktop Nav ───────────────────────────────────────
const DesktopNav: React.FC<{ links: NavLink[] }> = ({ links }) => (
  <nav aria-label="Main navigation" className="hidden lg:flex items-center gap-0.5">
    {links.map((link) => (
      <a
        key={link.href}
        href={link.href}
        aria-current={link.active ? 'page' : undefined}
        className={[
          'relative px-4 py-2 rounded-xl text-[0.875rem] font-medium transition-all duration-200',
          link.active
            ? 'text-[var(--primary-background)] font-semibold bg-[var(--primary-glow)]'
            : 'text-[var(--text-muted)] hover:text-[var(--text-primary)] hover:bg-[var(--neutral-bg-1)]',
        ].join(' ')}
      >
        {link.label}
        {link.active && (
          <span className="absolute bottom-0.5 left-1/2 -translate-x-1/2 w-4 h-0.5 bg-[var(--primary-background)] rounded-full" />
        )}
      </a>
    ))}
  </nav>
);

// ── Auth Buttons ──────────────────────────────────────
const AuthButtons: React.FC<{ className?: string }> = ({ className = '' }) => (
  <div className={`flex items-center gap-2 ${className}`}>
    <a
      href="/login"
      className="px-4 py-2 text-[0.875rem] font-semibold text-[var(--primary-background)] rounded-xl hover:bg-[var(--primary-glow)] transition-all duration-200"
    >
      Login
    </a>
    <a
      href="/signup"
      className="px-5 py-2 text-[0.875rem] font-bold text-white bg-[var(--primary-background)] rounded-xl shadow-[var(--shadow-brand)] hover:brightness-110 active:scale-95 transition-all duration-200"
    >
      Sign Up
    </a>
  </div>
);

// ── Mobile Menu ───────────────────────────────────────
const MobileMenu: React.FC<{ links: NavLink[]; onClose: () => void }> = ({ links, onClose }) => (
  <nav
    id="mobile-menu"
    aria-label="Mobile navigation"
    className="lg:hidden flex flex-col gap-1 pb-6 pt-3 border-t border-[var(--border-light)]"
  >
    {links.map((link) => (
      <a
        key={link.href}
        href={link.href}
        onClick={onClose}
        className={[
          'py-2.5 px-4 rounded-xl text-[0.9375rem] transition-colors duration-150',
          link.active
            ? 'font-bold text-[var(--primary-background)] bg-[var(--primary-glow)]'
            : 'font-normal text-[var(--text-secondary)] hover:bg-[var(--neutral-bg-1)] hover:text-[var(--text-primary)]',
        ].join(' ')}
      >
        {link.label}
      </a>
    ))}
    <div className="flex flex-col gap-2 mt-3 pt-3 border-t border-[var(--border-light)]">
      <AuthButtons className="!flex-col !items-stretch" />
    </div>
  </nav>
);

// ── Main Header ───────────────────────────────────────
const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled]  = useState(false);

  useEffect(() => {
    const handle = () => setScrolled(window.scrollY > 12);
    window.addEventListener('scroll', handle, { passive: true });
    return () => window.removeEventListener('scroll', handle);
  }, []);

  return (
    <header
      role="banner"
      className={[
        'w-full sticky top-0 z-50 transition-all duration-300 glass',
        scrolled
          ? 'bg-white/90 shadow-[0_1px_16px_rgba(0,0,0,0.08)] border-b border-[var(--border-light)]'
          : 'bg-[var(--header-background)] border-b border-[var(--border-light)]/60',
      ].join(' ')}
    >
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10">
        <div className="flex items-center justify-between h-16">
          {/* Left */}
          <div className="flex items-center gap-8">
            <Logo />
            <DesktopNav links={NAV_LINKS} />
          </div>

          {/* Right */}
          <div className="flex items-center gap-2">
            <AuthButtons className="hidden lg:flex" />
            <button
              className="lg:hidden p-2 rounded-xl text-[var(--text-secondary)] hover:bg-[var(--neutral-bg-1)] transition-colors duration-150"
              onClick={() => setMenuOpen((v) => !v)}
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.75} viewBox="0 0 24 24" aria-hidden="true">
                {menuOpen
                  ? <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  : <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />}
              </svg>
            </button>
          </div>
        </div>

        {menuOpen && <MobileMenu links={NAV_LINKS} onClose={() => setMenuOpen(false)} />}
      </div>
    </header>
  );
};

export default Header;