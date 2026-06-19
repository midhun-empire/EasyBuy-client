import React, { useState, useEffect, useCallback } from 'react';
import { Helmet } from 'react-helmet';
import Layout from '../../components/comon/Layout';
import type { Deal, Shop, Vendor, ShopCard, TimeLeft } from '../../types';
import {
  POPULAR_SEARCHES,
  HOW_IT_WORKS_STEPS,
  TRENDING_CATEGORIES,
  VENDORS,
  PRICE_FEATURES,
  FLASH_DEALS,
  SHOPS,
  CART_FEATURES,
  SHOP_CARDS,
  APP_STORES,
} from '../../data/homeData';

// ════════════════════════════════════════════════════════
//  SECTION 1 — HERO
// ════════════════════════════════════════════════════════
const HeroSection: React.FC = () => {
  const [query, setQuery] = useState<string>('');

  return (
    <section className="w-full bg-[var(--neutral-bg-1)] overflow-hidden">
      {/* Background image + gradient */}
      <div
        className="w-full relative bg-cover bg-center bg-no-repeat min-h-[480px] md:min-h-[540px] flex items-center"
        style={{
          backgroundImage:
            "url('https://lh3.googleusercontent.com/aida-public/AB6AXuA3Ox5Kjj6NivPAL-roNkPgNH3SrlNL4knyBuVFAh26M9lRjz_ymlYyUremOaJiwGqTmSoXwxiG8eEB55JgtXSPFpXesJS-63HYOCd84Dfd66ibpUlhILESjI462nVxuFmL7HZ10m6pwOXqHVjufiZGfEU43JhisaL9TlLu_NLUHORhuwmOZVDBW1gKr0Tna-e2EODHNkc2CPlpPYXE3hzNOOKDJE-0YBophiHEjHwXf-cGfqEX6OWVWGPIQAkteHeAr2ug8hTKu-o')",
        }}
      >
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/60 to-white/0 pointer-events-none" />

        <div className="relative w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 py-16 lg:py-20">
          <div className="w-full max-w-[540px]">
            {/* Headline */}
            <h1 className="font-[Geist] font-bold text-[28px] sm:text-[36px] lg:text-[48px] leading-tight text-[var(--text-primary)]">
              Compare Prices.<br />
              Order from Shops.<br />
              <span className="text-[var(--primary-background)]">One Fast Delivery.</span>
            </h1>

            {/* Sub-copy */}
            <p className="text-base sm:text-lg text-[var(--text-muted)] font-[Inter] leading-relaxed mt-4 max-w-md">
              The smartest way to shop locally. We aggregate prices from your favourite local
              merchants so you always get the best deal.
            </p>

            {/* Search bar */}
            <div className="w-full mt-8 bg-white border border-[var(--border-regular)] rounded-[42px] p-1">
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 sm:gap-0">
                <label htmlFor="hero-search" className="sr-only">Search for groceries, shops, or products</label>
                <div className="flex items-center flex-1 px-4 py-2.5 gap-3">
                  <span className="text-[var(--primary-background)] text-lg" aria-hidden="true">🔍</span>
                  <input
                    id="hero-search"
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Search for groceries, shops, or products..."
                    className="flex-1 bg-transparent border-none outline-none text-sm font-[Inter] text-[var(--text-primary)] placeholder:text-[var(--text-muted-light)]"
                  />
                </div>
                <button
                  type="button"
                  className="bg-[var(--primary-background)] text-white text-sm font-semibold font-[Geist] px-6 py-3 rounded-[28px] hover:opacity-90 active:scale-95 transition-all duration-200 whitespace-nowrap mx-1 mb-1 sm:mb-0 sm:mx-0"
                  onClick={() => console.log('Search:', query)}
                >
                  Search Deals
                </button>
              </div>
            </div>

            {/* Popular searches */}
            <div className="flex flex-wrap items-center gap-2 mt-4">
              <span className="text-sm text-[var(--text-muted)] font-[Inter]">Popular:</span>
              {POPULAR_SEARCHES.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="px-3 py-1.5 bg-[var(--button-secondary-bg)] text-[var(--button-secondary-text)] text-sm font-semibold rounded-2xl hover:opacity-80 transition-all duration-200"
                >
                  {item.text}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// ════════════════════════════════════════════════════════
//  SECTION 2 — HOW IT WORKS
// ════════════════════════════════════════════════════════
const HowItWorksSection: React.FC = () => (
  <section className="w-full bg-[var(--secondary-muted)] py-16 lg:py-20">
    <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
      {/* Heading */}
      <div className="text-center mb-10">
        <h2 className="font-[Geist] font-semibold text-2xl sm:text-3xl text-[var(--text-primary)]">
          How EasyBuy Works
        </h2>
        <p className="text-base text-[var(--text-muted)] font-[Inter] mt-2">
          Three simple steps to smarter hyperlocal shopping.
        </p>
      </div>

      {/* Steps grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5" role="list">
        {HOW_IT_WORKS_STEPS.map((step, i) => (
          <article
            key={i}
            role="listitem"
            className="flex flex-col items-center gap-3 bg-white border border-[var(--border-light)] rounded-[32px] p-8 hover:shadow-lg transition-shadow duration-300"
          >
            <div
              className="w-16 h-16 bg-[var(--button-secondary-bg)] rounded-[32px] flex items-center justify-center text-3xl"
              aria-hidden="true"
            >
              {step.icon}
            </div>
            <h3 className="font-[Geist] text-lg font-semibold text-[var(--text-primary)] text-center">
              {step.title}
            </h3>
            <p className="text-base text-[var(--text-muted)] font-[Inter] text-center leading-relaxed">
              {step.description}
            </p>
          </article>
        ))}
      </div>
    </div>
  </section>
);

// ════════════════════════════════════════════════════════
//  SECTION 3 — TRENDING CATEGORIES
// ════════════════════════════════════════════════════════
const TrendingCategoriesSection: React.FC = () => (
  <section className="w-full bg-white py-10 lg:py-12">
    <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
        <h2 className="font-[Geist] font-semibold text-2xl sm:text-3xl text-[var(--text-primary)]">
          Trending Categories
        </h2>
        <a
          href="/categories"
          className="flex items-center gap-1.5 text-sm font-semibold text-[var(--button-secondary-text)] font-[Geist] hover:opacity-80 transition-opacity duration-200"
        >
          View All Categories <span aria-hidden="true">→</span>
        </a>
      </div>

      {/* Categories */}
      <div
        className="flex gap-6 sm:gap-10 lg:justify-between overflow-x-auto pb-2 no-scrollbar"
        role="list"
      >
        {TRENDING_CATEGORIES.map((cat) => (
          <a
            key={cat.href}
            href={cat.href}
            role="listitem"
            className="flex flex-col items-center gap-2 min-w-[88px] sm:min-w-[96px] group"
          >
            <div className="w-20 h-20 sm:w-24 sm:h-24 bg-[var(--secondary-subtle)] border border-[var(--border-medium)] rounded-[32px] flex items-center justify-center text-3xl group-hover:bg-[var(--button-secondary-bg)] group-hover:border-[var(--primary-background)] transition-all duration-300">
              <span aria-hidden="true">{cat.emoji}</span>
            </div>
            <span className="text-sm font-semibold text-[var(--text-primary)] font-[Geist] text-center group-hover:text-[var(--primary-background)] transition-colors duration-200">
              {cat.name}
            </span>
          </a>
        ))}
      </div>
    </div>
  </section>
);

// ════════════════════════════════════════════════════════
//  SECTION 4 — PRICE MATCH FEATURE
// ════════════════════════════════════════════════════════

interface VendorRowProps {
  vendor: Vendor;
}

const VendorRow: React.FC<VendorRowProps> = ({ vendor }) => (
  <div
    className={[
      'relative flex items-center justify-between p-5 lg:p-6 rounded-[32px]',
      vendor.isBest
        ? 'bg-[var(--button-secondary-bg)] border-2 border-[var(--primary-background)]'
        : 'bg-[var(--neutral-bg-1)] border border-[var(--border-strong)]',
    ].join(' ')}
    aria-label={`${vendor.name}: ${vendor.price}${vendor.savings ? `, ${vendor.savings}` : ''}`}
  >
    {/* Best deal badge */}
    {vendor.isBest && (
      <div className="absolute -top-3 right-5">
        <span className="bg-[var(--primary-background)] text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full">
          Best Deal
        </span>
      </div>
    )}

    {/* Vendor info */}
    <div className="flex items-center gap-3">
      <div
        className={[
          'w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm',
          vendor.isBest ? 'bg-white text-[var(--primary-background)]' : 'bg-[var(--neutral-bg-2)] text-[var(--text-muted)]',
        ].join(' ')}
        aria-hidden="true"
      >
        {vendor.id}
      </div>
      <span
        className={`text-base font-semibold font-[Inter] ${
          vendor.isBest ? 'text-[var(--primary-dark)]' : 'text-[var(--text-primary)]'
        }`}
      >
        {vendor.name}
      </span>
    </div>

    {/* Price */}
    <div className="text-right">
      <p
        className={`text-xl font-semibold font-[Geist] ${
          vendor.isBest ? 'text-[var(--primary-background)]' : 'text-[var(--text-primary)]'
        }`}
      >
        {vendor.price}
      </p>
      {vendor.savings && (
        <p className="text-[10px] font-bold text-[var(--primary-background)] font-[Inter]">
          {vendor.savings}
        </p>
      )}
    </div>
  </div>
);

const PriceMatchSection: React.FC = () => (
  <section className="w-full bg-white py-16 lg:py-20">
    <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
      <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">

        {/* Left */}
        <div className="w-full lg:w-[46%] flex flex-col gap-8">
          <div className="flex flex-col gap-5">
            <div className="inline-flex items-center gap-2 bg-[var(--button-secondary-bg)] px-4 py-1.5 rounded-2xl w-fit">
              <span className="text-sm" aria-hidden="true">✅</span>
              <span className="text-base font-semibold text-[var(--button-secondary-text)] font-[Inter]">
                Price Match Feature
              </span>
            </div>

            <h2 className="font-[Geist] font-bold text-[28px] sm:text-[36px] lg:text-[40px] leading-tight text-[var(--text-primary)]">
              Never Overpay Again.
            </h2>

            <p className="text-base sm:text-lg text-[var(--text-muted)] font-[Inter] leading-relaxed">
              We scan prices from over 500 local vendors in real-time. Choose the merchant with
              the best deal and save up to 30% on your weekly shopping.
            </p>
          </div>

          {/* Features */}
          <div className="flex flex-col gap-4">
            {PRICE_FEATURES.map((feat, i) => (
              <div
                key={i}
                className="flex items-center gap-4 p-4 border border-[var(--border-regular)] rounded-[32px] hover:border-[var(--border-brand)] transition-colors duration-200"
              >
                <div className="w-12 h-12 bg-[var(--icon-button-bg-light)] rounded-[24px] flex items-center justify-center text-2xl shrink-0" aria-hidden="true">
                  {feat.icon}
                </div>
                <div>
                  <h3 className="text-base font-bold text-[var(--text-primary)] font-[Geist]">
                    {feat.title}
                  </h3>
                  <p className="text-sm text-[var(--text-muted)] font-[Inter] mt-0.5">
                    {feat.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: comparison card */}
        <div className="w-full lg:w-[46%] bg-[var(--secondary-subtle)] border border-[var(--border-medium)] rounded-[32px] p-6 sm:p-8 shadow-xl">
          {/* Product header */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 bg-white rounded-[32px] shadow-sm overflow-hidden shrink-0">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuD6RQxGUAhHQU9JkhkmbwuYBa6Ecm8arflZr-zidNIw6Gl4aGCQvQcMQIh3_A6HqM6hlF43X7iYcxfuPGRTHSbMYaymxZBHQ5xnYSox1jXHB2lj6hgr81aVvr3J7tOwtArgJEMA9YOQap8144ZgRFVCFdAAZ2w1kT242vIS5UjitGLZ2YEmKHkLodO_eggNEXDw9Y_9YuR7U80C6QplBbpLJxkdwHuAoaQKkd6Lyegl1DuDHoPFsw_OiXe4YM1vacrSYVEds4S9NQk"
                  alt="Organic Olive Oil"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h3 className="font-[Geist] text-lg font-semibold text-[var(--text-primary)]">
                  Organic Olive Oil
                </h3>
                <p className="text-sm text-[var(--text-muted)] font-[Inter]">1 Litre Bottle</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-sm text-[var(--text-muted)] font-[Inter]">Average Price</p>
              <p className="text-xl font-bold text-[var(--text-muted)] font-[Inter] line-through">
                $18.99
              </p>
            </div>
          </div>

          {/* Vendor rows */}
          <div className="flex flex-col gap-2" role="list" aria-label="Price comparison">
            {VENDORS.map((v) => (
              <VendorRow key={v.id} vendor={v} />
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

// ════════════════════════════════════════════════════════
//  SECTION 5 — FLASH DEALS
// ════════════════════════════════════════════════════════

interface DealCardProps {
  deal: Deal;
}

const DealCard: React.FC<DealCardProps> = ({ deal }) => {
  const [added, setAdded] = useState(false);

  const handleAdd = useCallback(() => {
    setAdded(true);
    setTimeout(() => setAdded(false), 1200);
  }, []);

  return (
    <article className="flex flex-col min-w-[216px] bg-white border border-[var(--border-medium)] rounded-[32px] overflow-hidden hover:shadow-lg transition-shadow duration-300 shrink-0">
      {/* Image */}
      <div className="relative w-full h-48 overflow-hidden">
        <img
          src={deal.image}
          alt={deal.name}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
        />
        <span className="absolute top-2 right-2 bg-[var(--status-error)] text-white text-[10px] font-bold px-2 py-1 rounded-lg">
          {deal.discount}
        </span>
      </div>

      {/* Info */}
      <div className="flex flex-col p-4 flex-1">
        <span className="text-[10px] font-bold uppercase tracking-widest text-[var(--text-muted)] font-[Inter]">
          {deal.vendor}
        </span>
        <h3 className="text-base font-semibold text-[var(--text-primary)] font-[Inter] mt-1 truncate">
          {deal.name}
        </h3>
        <p className="text-xs text-[var(--text-muted)] font-[Inter] mt-0.5">⏱ {deal.deliveryTime}</p>

        {/* Price + CTA */}
        <div className="flex items-center justify-between mt-3">
          <div className="flex items-baseline gap-2">
            <span className="text-xl font-semibold text-[var(--text-primary)] font-[Geist]">
              {deal.price}
            </span>
            <span className="text-sm text-[var(--text-muted)] font-[Inter] line-through">
              {deal.originalPrice}
            </span>
          </div>
          <button
            onClick={handleAdd}
            aria-label={`Add ${deal.name} to cart`}
            className={[
              'w-10 h-10 rounded-full flex items-center justify-center text-xl transition-all duration-200 active:scale-90',
              added
                ? 'bg-[var(--primary-background)] text-white'
                : 'bg-[var(--button-secondary-bg)] text-[var(--primary-background)] hover:bg-[var(--primary-background)] hover:text-white',
            ].join(' ')}
          >
            {added ? '✓' : '+'}
          </button>
        </div>
      </div>
    </article>
  );
};

const FlashDealsSection: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({ hours: 4, minutes: 22, seconds: 58 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        let { hours, minutes, seconds } = prev;
        if (seconds > 0) return { hours, minutes, seconds: seconds - 1 };
        if (minutes > 0) return { hours, minutes: minutes - 1, seconds: 59 };
        if (hours   > 0) return { hours: hours - 1, minutes: 59, seconds: 59 };
        return prev;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const pad = (n: number): string => String(n).padStart(2, '0');

  return (
    <section className="w-full bg-[var(--secondary-muted)] py-10 lg:py-12">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">

        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 mb-8">
          <div>
            <h2 className="font-[Geist] font-semibold text-2xl sm:text-3xl text-[var(--text-primary)]">
              Flash Deals
            </h2>
            <p className="text-base text-[var(--text-muted)] font-[Inter] mt-1">
              Limited time offers from local vendors.
            </p>
          </div>

          {/* Countdown */}
          <div className="flex items-center gap-2" role="timer" aria-label="Time remaining for flash deals">
            <span className="text-sm font-bold uppercase text-[var(--status-error)] font-[Inter]">
              Ending In:
            </span>
            <div className="flex items-center gap-1">
              {[pad(timeLeft.hours), pad(timeLeft.minutes), pad(timeLeft.seconds)].map((unit, i) => (
                <React.Fragment key={i}>
                  <div className="bg-[var(--status-error)] text-white font-bold text-base px-2 py-1.5 rounded min-w-[32px] text-center tabular-nums">
                    {unit}
                  </div>
                  {i < 2 && (
                    <span className="text-[var(--status-error)] font-bold" aria-hidden="true">:</span>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>

        {/* Scrollable deal cards */}
        <div
          className="flex gap-5 overflow-x-auto pb-4 no-scrollbar"
          role="list"
          aria-label="Flash deals"
        >
          {FLASH_DEALS.map((deal, i) => (
            <DealCard key={i} deal={deal} />
          ))}
        </div>
      </div>
    </section>
  );
};

// ════════════════════════════════════════════════════════
//  SECTION 6 — SHOPS NEAR YOU
// ════════════════════════════════════════════════════════

interface ShopCardProps {
  shop: Shop;
}

const ShopCard: React.FC<ShopCardProps> = ({ shop }) => (
  <article className="flex flex-col gap-5 bg-white border border-[var(--border-light)] rounded-[32px] overflow-hidden hover:shadow-lg transition-shadow duration-300 cursor-pointer">
    {/* Cover image */}
    <div className="relative h-36 overflow-hidden">
      <img
        src={shop.image}
        alt={shop.name}
        className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
      <span className="absolute bottom-3 left-3 bg-white/90 text-[var(--primary-background)] text-xs font-bold px-2.5 py-1 rounded-full">
        {shop.deliveryTime}
      </span>
    </div>

    {/* Info */}
    <div className="px-5 pb-5">
      <div className="flex items-start justify-between mb-1">
        <div>
          <h3 className="font-[Geist] text-base font-bold text-[var(--text-primary)] hover:text-[var(--primary-background)] transition-colors">
            {shop.name}
          </h3>
          <p className="text-xs text-[var(--text-muted)] font-[Inter] mt-0.5">{shop.category}</p>
        </div>
        <div className="flex items-center gap-1 bg-[var(--button-secondary-bg)] px-2 py-1 rounded-lg">
          <span aria-hidden="true">⭐</span>
          <span className="text-sm font-bold text-[var(--text-primary)] font-[Inter]">
            {shop.rating}
          </span>
        </div>
      </div>

      <div className="flex items-center justify-between mt-3 pt-3 border-t border-[var(--border-regular)]">
        <span className="text-sm text-[var(--text-muted)] font-[Inter]">
          Min. order: <span className="font-semibold text-[var(--text-primary)]">{shop.minOrder}</span>
        </span>
        <span className="text-xs text-[var(--text-muted)] font-[Inter]">{shop.reviews}</span>
      </div>
    </div>
  </article>
);

const ShopsNearYouSection: React.FC = () => (
  <section className="w-full bg-[var(--secondary-muted)] py-12 lg:py-16">
    <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">

      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
        <div>
          <h2 className="font-[Geist] font-semibold text-2xl sm:text-3xl text-[var(--text-primary)]">
            Shops Near You
          </h2>
          <p className="text-base text-[var(--text-muted)] font-[Inter] mt-1">
            Top-rated local merchants in{' '}
            <span className="font-semibold text-[var(--text-primary)]">Downtown, New York</span>
          </p>
        </div>

        <div className="flex gap-2" aria-label="Shop navigation">
          {(['‹', '›'] as const).map((arrow, i) => (
            <button
              key={i}
              aria-label={i === 0 ? 'Previous shops' : 'Next shops'}
              className="w-10 h-10 border border-[var(--border-strong)] rounded-full flex items-center justify-center text-lg text-[var(--text-primary)] hover:bg-white hover:shadow-md transition-all duration-200"
            >
              {arrow}
            </button>
          ))}
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5" role="list">
        {SHOPS.map((shop, i) => (
          <div key={i} role="listitem">
            <ShopCard shop={shop} />
          </div>
        ))}
      </div>
    </div>
  </section>
);

// ════════════════════════════════════════════════════════
//  SECTION 7 — MULTI-VENDOR CART
// ════════════════════════════════════════════════════════

const ShopMiniCard: React.FC<{ card: ShopCard }> = ({ card }) => (
  <div className="flex flex-col items-start bg-white/20 backdrop-blur-md border border-white/30 rounded-[32px] p-5 hover:bg-white/30 transition-all duration-300 cursor-pointer">
    <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-2xl shadow-sm mb-3" aria-hidden="true">
      {card.emoji}
    </div>
    <p className="text-[10px] font-black uppercase text-white/60 font-[Inter] mb-1">{card.label}</p>
    <h4 className="font-bold text-white text-sm font-[Inter]">{card.name}</h4>
    <p className="text-white/60 text-xs mt-1 font-[Inter]">{card.items} items · {card.total}</p>
  </div>
);

const MultiVendorCartSection: React.FC = () => (
  <section className="w-full bg-[var(--secondary-muted)] py-12 lg:py-16">
    <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
      <div
        className="bg-[var(--primary-background)] rounded-[32px] p-8 sm:p-12 lg:p-16 relative overflow-hidden"
        style={{
          backgroundImage: 'radial-gradient(rgba(255,255,255,0.1) 1px, transparent 1px)',
          backgroundSize: '24px 24px',
        }}
      >
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center relative z-10">

          {/* Left */}
          <div className="w-full lg:w-[52%] text-white">
            <h2 className="font-[Geist] font-bold text-[28px] sm:text-[36px] lg:text-[40px] leading-tight mb-4">
              One Cart.<br />Infinite Shops.
            </h2>
            <p className="text-base sm:text-lg text-white/80 font-[Inter] leading-relaxed mb-8">
              Add milk from the dairy, bread from the artisan bakery, and detergents from the
              wholesaler. We bundle everything into a single delivery, charging you just one flat
              delivery fee.
            </p>

            <ul className="flex flex-col gap-4 mb-10" aria-label="Key benefits">
              {CART_FEATURES.map((f, i) => (
                <li key={i} className="flex items-center gap-3">
                  <div className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center text-white text-sm shrink-0" aria-hidden="true">
                    ✓
                  </div>
                  <span className="text-base font-semibold text-white/90 font-[Inter]">{f.text}</span>
                </li>
              ))}
            </ul>

            <button className="bg-white text-[var(--primary-background)] font-bold font-[Inter] px-8 py-4 rounded-[28px] hover:shadow-xl active:scale-95 transition-all duration-200">
              Build Your Bundle →
            </button>
          </div>

          {/* Right: shop cards grid */}
          <div className="w-full lg:w-[44%] grid grid-cols-2 gap-4">
            {SHOP_CARDS.map((card, i) => (
              <ShopMiniCard key={i} card={card} />
            ))}

            {/* Total row */}
            <div className="col-span-2 bg-white rounded-[24px] p-4 flex items-center justify-between shadow-xl">
              <div>
                <p className="text-xs text-[var(--text-muted)] font-semibold font-[Inter]">
                  Total (4 shops)
                </p>
                <p className="text-2xl font-black text-[var(--text-primary)] font-[Geist]">$59.60</p>
                <p className="text-xs text-[var(--primary-background)] font-semibold font-[Inter]">
                  + $2.99 flat delivery fee
                </p>
              </div>
              <div className="bg-[var(--button-secondary-bg)] text-[var(--primary-background)] px-4 py-3 rounded-xl text-right">
                <p className="text-xs text-[var(--text-muted)] font-[Inter]">Arrives in</p>
                <p className="text-xl font-black font-[Geist]">45 min</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

// ════════════════════════════════════════════════════════
//  SECTION 8 — MOBILE APP PROMO
// ════════════════════════════════════════════════════════
const MobileAppPromoSection: React.FC = () => (
  <section className="w-full bg-[var(--neutral-bg-3)] rounded-[32px] mx-0 mb-16 overflow-hidden">
    <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 py-16 lg:py-20">
      <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">

        {/* Left */}
        <div className="w-full lg:w-[50%] flex flex-col items-start">
          <h2 className="font-[Geist] font-bold text-[28px] sm:text-[36px] lg:text-[42px] leading-tight text-[var(--text-light)] mb-4">
            Concierge in your pocket.
          </h2>
          <p className="text-base sm:text-lg text-[var(--text-light)] font-[Inter] leading-relaxed opacity-80 mb-10 max-w-md">
            Get exclusive app-only deals, real-time order tracking, and priority concierge
            support. Your local marketplace is just a tap away.
          </p>

          {/* App store buttons */}
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mb-10">
            {APP_STORES.map((store) => (
              <a
                key={store.name}
                href={store.href}
                className="flex items-center gap-4 bg-white text-black px-6 py-3 rounded-xl hover:scale-105 transition-transform duration-200 shadow-xl w-full sm:w-auto"
                aria-label={`${store.subtitle} ${store.name}`}
              >
                <span className="text-3xl" aria-hidden="true">{store.icon}</span>
                <div className="text-left">
                  <p className="text-[10px] uppercase text-gray-500 font-[Inter] leading-none mb-0.5">
                    {store.subtitle}
                  </p>
                  <p className="font-black text-base leading-none font-[Inter]">{store.name}</p>
                </div>
              </a>
            ))}
          </div>

          {/* Social proof */}
          <div className="flex items-center gap-4">
            <div className="flex -space-x-2" aria-hidden="true">
              {[
                'https://lh3.googleusercontent.com/aida-public/AB6AXuCuUK_4iwSojoPRAp-WJjQZOtQWVjg6WHSTGIAfYsAd1X0Jln8vKxlp7lLF-2oxJl4iQ-idaAV78qgYnWyqpnby0-Kp6pnNNcfyGKOGNrCNp0nGLT8kV4QilS7I7pVOJ4EpvWHHEoyfOzQSi_pqojJTxUhCHyR71yZAPhE1FJ0GBYRLZffBvV0n3fnqCz_d5X4U3XYI7S30B5jpTCkS8LEkptoA5bruD5n2MnWYAGtgamhtAf4YjQr78G6MbX49lOPAZ0I3TQOtMpE',
                'https://lh3.googleusercontent.com/aida-public/AB6AXuBQqtRtD4S9jxvSA7C3tJuteyJJGVr2qkxeW1k_3igv-iJN8pBYgJUBQcAph-xO6NZpHFsfuU7TCH5egaSm5Uu_DFSF9V-_MHPZ9w4kkk9La046sgdV3MPlvkWbrUQNAUbYFXVnuryEWZf7F-_8enkgqTwIRWCRHpn2sCXgQZ1ecghUK3O7okQos2EzO2IBlyH4DQjd29pRIrIx1q9DWvn230k4O6EQmmqpexIJ8VPee2IKJB_PhwKK-l2zS1FqVRlxY8gwSQXkJS0',
                'https://lh3.googleusercontent.com/aida-public/AB6AXuBoEsnTSZP5B2LXz3jCdZmYTi-sgVPBVNsMzlMYjptb8l6d4WQVwGhGAGeTzPTSltDGDiuf0ZDI6Y8nC6MpeTidUT-nTA-xkY6nIfLhooDrvhDpEYwKgskjJjXPcXwJKS4F5mmqZ7A1977TEVY_qgETUiuyUcB9Q5kxwJFv3osa8zIlaMHkB0mJOlW6z7yEyyjREzp3eanJJhvjaZ-OuTms4xjILT5wBJ30vqq1yq7OYo7j9JvbbSQwjnkNfvLDHu1oC3ubvRlt8lo',
              ].map((src, i) => (
                <img
                  key={i}
                  src={src}
                  alt={`Happy shopper ${i + 1}`}
                  className="w-10 h-10 rounded-full border-2 border-[var(--neutral-bg-3)] object-cover"
                />
              ))}
            </div>
            <p className="text-sm text-[var(--text-light)] font-[Inter] opacity-70">
              Joined by 50,000+ local shoppers this month.
            </p>
          </div>
        </div>

        {/* Right: phone mockup */}
        <div className="w-full lg:w-[42%] flex justify-center lg:justify-end">
          <div className="relative w-60">
            {/* Phone frame */}
            <div className="w-60 h-[480px] bg-gray-900 rounded-[3rem] border-8 border-gray-800 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-7 bg-gray-900 flex items-center justify-center z-10">
                <div className="w-24 h-5 bg-gray-800 rounded-full" />
              </div>
              {/* App screen content */}
              <div className="absolute inset-0 top-7 bg-[var(--secondary-muted)] overflow-hidden">
                <div className="p-4">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <p className="text-xs text-[var(--text-muted)]">Good morning!</p>
                      <p className="font-bold text-sm text-[var(--text-primary)]">What do you need?</p>
                    </div>
                    <div className="w-8 h-8 bg-[var(--primary-background)] rounded-full flex items-center justify-center text-white text-xs">
                      🛒
                    </div>
                  </div>
                  <div className="bg-[var(--neutral-bg-1)] rounded-xl px-3 py-2.5 flex items-center gap-2 mb-4">
                    <span className="text-[var(--text-muted)] text-sm">🔍</span>
                    <div className="h-2 bg-[var(--text-muted)]/20 rounded flex-1" />
                  </div>
                  <div className="bg-[var(--button-secondary-bg)] rounded-xl p-3 mb-4">
                    <div className="h-2 bg-[var(--primary-background)]/30 rounded w-2/3 mb-1.5" />
                    <div className="h-2 bg-[var(--primary-background)]/20 rounded w-1/2" />
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    {[0, 1].map((i) => (
                      <div key={i} className="bg-white rounded-xl p-2 border border-[var(--border-regular)]">
                        <div className="h-14 bg-[var(--secondary-subtle)] rounded-lg mb-2" />
                        <div className="h-1.5 bg-[var(--text-primary)]/10 rounded mb-1 w-3/4" />
                        <div className="h-2 bg-[var(--primary-background)]/30 rounded w-1/2" />
                      </div>
                    ))}
                  </div>
                </div>
                {/* Bottom nav */}
                <div className="absolute bottom-0 left-0 right-0 bg-white border-t border-[var(--border-regular)] py-2 flex justify-around px-4">
                  {(['🏠', '🔍', '🛒', '👤'] as const).map((icon, i) => (
                    <div key={i} className="flex flex-col items-center gap-0.5">
                      <span className="text-lg">{icon}</span>
                      {i === 0 && <div className="w-1 h-1 bg-[var(--primary-background)] rounded-full" />}
                    </div>
                  ))}
                </div>
              </div>
            </div>
            {/* Glow */}
            <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-44 h-12 bg-[var(--primary-background)]/30 blur-2xl rounded-full" aria-hidden="true" />
          </div>
        </div>

      </div>
    </div>
  </section>
);

// ════════════════════════════════════════════════════════
//  HOME PAGE — Composes all sections
// ════════════════════════════════════════════════════════
const Home: React.FC = () => (
  <>
    <Helmet>
      <title>
        EasyBuy – Compare Local Shop Prices &amp; Get One Fast Delivery from Multiple Vendors
      </title>
      <meta
        name="description"
        content="Shop smarter with EasyBuy! Compare prices across 500+ local shops, order from multiple vendors, and get one consolidated delivery in under 60 minutes. Save up to 30% with real-time price matching."
      />
      <meta
        property="og:title"
        content="EasyBuy – Compare Local Shop Prices & Get One Fast Delivery"
      />
      <meta
        property="og:description"
        content="Shop smarter with EasyBuy! Compare prices across 500+ local shops and save up to 30%."
      />
    </Helmet>

    <Layout>
      <HeroSection />
      <HowItWorksSection />
      <TrendingCategoriesSection />
      <PriceMatchSection />
      <FlashDealsSection />
      <ShopsNearYouSection />
      <MultiVendorCartSection />
      <MobileAppPromoSection />
    </Layout>
  </>
);

export default Home;