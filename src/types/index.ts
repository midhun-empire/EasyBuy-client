// ─── Navigation ───────────────────────────────────────
export interface NavLink {
  label: string;
  href: string;
  active?: boolean;
}

// ─── Footer ───────────────────────────────────────────
export interface FooterLink   { text: string; href: string; }
export interface FooterColumn { heading: string; links: FooterLink[]; }

// ─── Hero ─────────────────────────────────────────────
export interface PopularSearch { text: string; href: string; }

// ─── How It Works ─────────────────────────────────────
export interface Step { icon: string; title: string; description: string; }

// ─── Trending Categories ──────────────────────────────
export interface Category { name: string; href: string; emoji: string; }

// ─── Price Match ──────────────────────────────────────
export interface Vendor {
  id: string; name: string; rating: string; deliveryTime: string;
  price: string; savings?: string; isBest?: boolean;
}
export interface PriceFeature { icon: string; title: string; description: string; }

// ─── Flash Deals ──────────────────────────────────────
export interface Deal {
  image: string; discount: string; vendor: string;
  name: string; price: string; originalPrice: string; deliveryTime: string;
}

// ─── Shops Near You ───────────────────────────────────
export interface Shop {
  image: string; name: string; category: string;
  rating: string; reviews: string; minOrder: string; deliveryTime: string;
}

// ─── Multi Vendor Cart ────────────────────────────────
export interface CartFeature { text: string; }
export interface ShopCard    { emoji: string; label: string; name: string; items: number; total: string; }

// ─── App Promo ────────────────────────────────────────
export interface AppStore { name: string; subtitle: string; href: string; icon: string; }

// ─── Countdown ────────────────────────────────────────
export interface TimeLeft { hours: number; minutes: number; seconds: number; }