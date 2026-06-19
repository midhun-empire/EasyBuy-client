import React from 'react';
import type { FooterColumn } from '../../types';
import { FOOTER_COLUMNS } from '../../data/homeData';

// ── Footer Column ─────────────────────────────────────
const FooterCol: React.FC<{ column: FooterColumn }> = ({ column }) => (
  <div className="flex flex-col gap-4">
    <h3 className="text-[0.75rem] font-bold text-[var(--text-primary)] font-[Geist] uppercase tracking-[0.08em]">
      {column.heading}
    </h3>
    <ul className="flex flex-col gap-2.5" role="list">
      {column.links.map((link) => (
        <li key={link.href}>
          <a
            href={link.href}
            className="text-[0.875rem] text-[var(--text-muted)] hover:text-[var(--text-brand)] transition-colors duration-150 font-[Inter]"
          >
            {link.text}
          </a>
        </li>
      ))}
    </ul>
  </div>
);

// ── Brand Block ───────────────────────────────────────
const BrandBlock: React.FC = () => (
  <div className="flex flex-col gap-5 col-span-2 lg:col-span-1">
    <a href="/" aria-label="EasyBuy home" className="flex items-center gap-2.5 w-fit group">
      <div className="w-9 h-9 rounded-xl bg-[var(--primary-background)] flex items-center justify-center shadow-[var(--shadow-brand)] group-hover:scale-105 transition-transform duration-200">
        <span className="text-white font-black font-[Geist] text-base">E</span>
      </div>
      <span className="text-[1.125rem] font-black tracking-tight text-[var(--primary-background)] font-[Geist]">
        EasyBuy
      </span>
    </a>

    <p className="text-[0.875rem] text-[var(--text-muted)] font-[Inter] leading-relaxed max-w-[220px]">
      The world's first multi-vendor hyperlocal price comparison and delivery platform.
    </p>

    <div className="flex gap-2.5">
      {[
        { label: 'Website',   icon: '🌐' },
        { label: 'Share',     icon: '📤' },
        { label: 'Email',     icon: '✉️' },
      ].map(({ label, icon }) => (
        <a
          key={label}
          href="#"
          aria-label={label}
          className="w-9 h-9 rounded-xl bg-[var(--secondary-subtle)] border border-[var(--border-light)] flex items-center justify-center text-[0.875rem] hover:bg-[var(--primary-glow)] hover:border-[var(--primary-background)]/30 transition-all duration-150"
        >
          {icon}
        </a>
      ))}
    </div>
  </div>
);

// ── Bottom Bar ────────────────────────────────────────
const BottomBar: React.FC = () => (
  <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-8 border-t border-[var(--border-light)]">
    <p className="text-[0.8125rem] text-[var(--text-muted)] font-[Inter] text-center sm:text-left">
      © 2024 EasyBuy Technologies. Hyperlocal. Hyper-fast.
    </p>
    <div className="flex items-center gap-4 text-[1.125rem] opacity-40" aria-label="Accepted payment methods">
      {['💳', '💰', '👛'].map((icon) => (
        <span key={icon}>{icon}</span>
      ))}
    </div>
  </div>
);

// ── Main Footer ───────────────────────────────────────
const Footer: React.FC = () => (
  <footer role="contentinfo" className="w-full bg-[var(--footer-background)] border-t border-[var(--footer-border)]">
    <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 py-12 lg:py-16">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10 mb-12">
        <BrandBlock />
        {FOOTER_COLUMNS.map((col) => (
          <FooterCol key={col.heading} column={col} />
        ))}
      </div>
      <BottomBar />
    </div>
  </footer>
);

export default Footer;