import type {
  NavLink, FooterColumn, PopularSearch, Step, Category,
  Vendor, PriceFeature, Deal, Shop, CartFeature, ShopCard, AppStore,
} from '../types';

export const NAV_LINKS: NavLink[] = [
  { label: 'Home',       href: '/',           active: true },
  { label: 'Categories', href: '/categories'              },
  { label: 'Stores',     href: '/stores'                  },
  { label: 'Explore',    href: '/explore'                 },
];

export const FOOTER_COLUMNS: FooterColumn[] = [
  { heading: 'Company', links: [
    { text: 'About Us', href: '/about'   },
    { text: 'Careers',  href: '/careers' },
    { text: 'Press',    href: '/press'   },
    { text: 'Partners', href: '/partners'},
  ]},
  { heading: 'Support', links: [
    { text: 'Help Center',    href: '/help'           },
    { text: 'Delivery Areas', href: '/delivery-areas' },
    { text: 'Track Order',    href: '/track-order'    },
    { text: 'Refund Policy',  href: '/refund-policy'  },
  ]},
  { heading: 'Legal', links: [
    { text: 'Terms of Service', href: '/terms'      },
    { text: 'Privacy Policy',   href: '/privacy'    },
    { text: 'Cookie Settings',  href: '/cookies'    },
    { text: 'Anti-Fraud',       href: '/anti-fraud' },
  ]},
  { heading: 'Download', links: [
    { text: 'Download iOS',          href: '/download/ios'     },
    { text: 'Download Android',      href: '/download/android' },
    { text: 'Price Match Guarantee', href: '/price-match'      },
  ]},
];

export const POPULAR_SEARCHES: PopularSearch[] = [
  { text: 'Fresh Milk',    href: '/search?q=fresh-milk'    },
  { text: 'Cooking Oil',   href: '/search?q=cooking-oil'   },
  { text: 'Organic Bread', href: '/search?q=organic-bread' },
];

export const HOW_IT_WORKS_STEPS: Step[] = [
  { icon: '⇄',  title: 'Compare',       description: 'Browse live prices across hundreds of local shops for every item on your list.' },
  { icon: '✓',  title: 'Choose',         description: 'Pick the best deals from different vendors and add them to a single cart.' },
  { icon: '🛒', title: 'One Order',      description: 'Check out once. We handle all multi-shop coordination seamlessly for you.' },
  { icon: '⚡', title: 'Fast Delivery',  description: 'Our concierge fleet picks up everything and delivers in under 60 minutes.' },
];

export const TRENDING_CATEGORIES: Category[] = [
  { name: 'Groceries',     href: '/categories/groceries',     emoji: '🛒' },
  { name: 'Personal Care', href: '/categories/personal-care', emoji: '🧴' },
  { name: 'Baby Care',     href: '/categories/baby-care',     emoji: '🍼' },
  { name: 'Pet Supplies',  href: '/categories/pet-supplies',  emoji: '🐾' },
  { name: 'Meat & Seafood',href: '/categories/meat-seafood',  emoji: '🐟' },
  { name: 'Bakery',        href: '/categories/bakery',        emoji: '🥖' },
];

export const VENDORS: Vendor[] = [
  { id: 'M1', name: 'MegaMart Store',    rating: '4.6', deliveryTime: '25–35 min', price: '$16.50' },
  { id: 'FS', name: 'FreshStop Local',   rating: '4.9', deliveryTime: '20–30 min', price: '$14.20', savings: 'Save $4.79', isBest: true },
  { id: 'GH', name: 'Green Hub Organic', rating: '4.7', deliveryTime: '30–40 min', price: '$17.90' },
];

export const PRICE_FEATURES: PriceFeature[] = [
  { icon: '💰', title: 'Real-time Comparison',   description: 'Live price updates every 5 minutes from all partner stores.' },
  { icon: '📊', title: 'Smart Price Insights',   description: 'Weekly saving trends and personalised deal recommendations.' },
];

export const FLASH_DEALS: Deal[] = [
  {
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDr0JZAJj-nn5R_SmOTR2b10X6LqJEWkrhAcFJDUc-qVzbiJgTtGF4S7hATddg5lQYBNGfbnz453jAoVchw4tZ03fQAXXMQMNqiQSsrALkijwyAxxo211H4pASREqlt0L09j5dYQlyNT5FT94svgqhD2V6BSjH7zd1YAzZFNzA5XOk-MENmHLVkKYlHDfMowFR9PBOIgg6tkNDZTwO5DXdOI51jQHmc8FdIFb8h9bkhG6zY9Iu2XV6d0IHPa_hurmHxNridzK5Sk7s',
    discount: '-40%', vendor: 'MEGAMART',      name: 'Fresh Roma Tomatoes',   price: '$2.50',  originalPrice: '$4.20',  deliveryTime: '25–35 min',
  },
  {
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBEWGoQ0ZPW7cd7oQsDT3YMT7i21Z4STT6nUQl2kSvRb8oy3JYYi7zzXCSkFtlHeLby5hGeNLIoo1QR2CY3bgmgX71fNQiKNuyLiUFuzwXtx9Kp76Na5Z1PoD2gB4K1Y3ztU4ttOR9t8qHUS70NC386tHLDtttj06D0fYaswDL3KmwvP3CK7z2zECaeqcoVwjJ9d7rmkX3hg3myOlPBDZVDWsKPyMelg2165WtnFeBY7u3UiL7YOGWWrHqrZl6wYalVDxWNOJ29G8s',
    discount: '-25%', vendor: 'BAKEHOUSE 9',   name: 'Artisanal Sourdough',   price: '$5.10',  originalPrice: '$6.80',  deliveryTime: '20–30 min',
  },
  {
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC3cj-0O8uga8CtnbuKHq8DRySGx3lITOYgfTtgl55AOUn5dv7OwRiN_g5e92ihuiX10eAS-9ScEWf-XRTpVw1yUgB0B6muKDbmqncf9oCia6cCkZj-CovTfB3v1TxUfrWpkFuI7YHPXYInAGIxmDtgD7FrZRCaMcqYT_R0PRPZKd52V-vE63-mDnqb5aBvAqqv3iQHroRS6ag_NMDERbPULVQM6UsEMFLy_EJ__b5MjDAGHilBxFFK4NWQ1eUL-JwhPV1FY-einLk',
    discount: '-15%', vendor: 'FRUIT GARDEN',  name: 'Premium Banana Bundle', price: '$1.99',  originalPrice: '$2.40',  deliveryTime: '30–40 min',
  },
  {
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB95u4bYjICOqnEmc-VmTyTRdZfjCyqt4jCaW9snFDGZROA4xJrk4UbqHLOyjJl3I2PTSxPU4p6H9D-E2FFyDhQqDj2zJmlBJ1KMWoRMJGOuuP524zqvF4VMcjlLML8c5axCggiQPKwbSIxL0WWIsrvfb_toVnZw71eGeyH-sniqdZs2XrOl6c6FarYrvI3d3efG-6J4FYMoKhKTLSGskeVVkiKalktucOoMFPMgcAgfnVBtrMGq5_UHwtssV5wLXJ2B010aRFth4g',
    discount: '-30%', vendor: 'THE BERRY CO.', name: 'Blueberries (250g)',    price: '$3.90',  originalPrice: '$5.50',  deliveryTime: '15–25 min',
  },
  {
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDvj6vjqX4-YpfJ_eQmzFQGGTjrLT7EfnTQ3ZdOGHgKR9rDhRMgsrq98FF4wlhh7Si1n3EkHj92x3rkblGv5NddCXyyle7ScXNYksf_beskkDMBVaYmIeaATkEFpuTt3cFijZr9L1g3rmedb7rZ-nm1nFPvHObDy82Nc2Keb4SgbZtxLArwvOc8W8Y0CCcugqQeNh1PqT3Unca0q82sYDAQPvCH5PD233bhHqjHd5IoE6KEs804n_OjQMiRLhymAER7QCp32TjRCZ8',
    discount: '-20%', vendor: 'OCEAN FRESH',   name: 'Fresh Salmon Fillet',  price: '$12.40', originalPrice: '$15.50', deliveryTime: '35–45 min',
  },
];

export const SHOPS: Shop[] = [
  {
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCJOYFAVDI4Nub3MlvmZbSCk5p0SUstIQYLR_E8WWS03c2CnvsMFDFYy7EvCjSDG-vcfsswNtmkhI-dPqv-04w0kgLpy0x7xOGqVIW6ZrbXqoNuOzEcQ33kqaz30WiosqMJGQ03pMlJXQbmwN16kmpTPLtfAkFHi9xhcd1cCPbQMeJZY2rPGd7cOlqGspy-tly6YqzDK7wfo9cDQOowYoPdJYQgb8fQmo1Y_t-ooh7rn2s-N8LSWb_evzx4PHTDM3QGuEvgJ655MN8',
    name: 'The Green Pantry', category: 'Organic · Groceries · Dairy',
    rating: '4.8', reviews: '1.2k+ reviews', minOrder: '$15.00', deliveryTime: '25–35 MINS',
  },
  {
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBYiEbV2cyD6X3XWjoRtyuWXnAujLLUaJLPHF-YiR_PenHupYEbu4NlGt2vEviv7KomHv4g-N4xHyefq-lWOT-N9YMOAuypvmPvKyXIHgdhHPDozNGGsipHYE-v5vUVvBgxJ3MLLQR7FA7EwdQCawt8Env37-1MlzanICzZTGaCQuVVX9Q71haXx0cB27P8ANxCCyjj9gePGvjnI7wYrX-cDnKn7GkcU8gk5ktB1Lt-mAMVSJD4bb7LH6sy1yiaixzp67xLjag_SN0',
    name: 'Artisan Market', category: 'Bakery · Deli · Cheese',
    rating: '4.9', reviews: '850+ reviews', minOrder: '$20.00', deliveryTime: '30–45 MINS',
  },
  {
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD6c-eDhU4ieeTs1LPcpT545yKDJ675rx0dWR8IRto6aljbzFWo9o_TABya_-pFoMimr5MgpPcV7Z4CuhCqj2IxgW9wvjlwlDA7kaDS30M1CpEifEB80OwiHpbNlpBXgH1SQk9ntx28by2bnXm23n3CxCdL1DfK9apRd0u3unPCToGqEWfjjONyDbjoy1AXnVp8sIOHT9FAXJJ01qOJcvj2VFzRjaGxLOTqTUNccypHUXt7bWsQzmAFodVtnghMWL5nvEMCfbRSHO8',
    name: 'Daily Fresh Mart', category: 'Fruits · Vegetables · Staples',
    rating: '4.7', reviews: '2.4k+ reviews', minOrder: '$10.00', deliveryTime: '15–25 MINS',
  },
];

export const CART_FEATURES: CartFeature[] = [
  { text: 'Flat-fee delivery for multiple shops' },
  { text: 'Single checkout experience'           },
  { text: 'Coordinated concierge fulfilment'     },
];

export const SHOP_CARDS: ShopCard[] = [
  { emoji: '🥐', label: 'SHOP A', name: 'Fresh Pastries',  items: 3, total: '$12.40' },
  { emoji: '🧴', label: 'SHOP B', name: 'Personal Care',   items: 2, total: '$8.90'  },
  { emoji: '☕', label: 'SHOP C', name: 'Organic Coffee',  items: 1, total: '$16.00' },
  { emoji: '🛒', label: 'SHOP D', name: 'Fresh Produce',   items: 5, total: '$22.30' },
];

export const APP_STORES: AppStore[] = [
  { name: 'App Store',   subtitle: 'Download on the', href: '#', icon: '🍎' },
  { name: 'Google Play', subtitle: 'Get it on',       href: '#', icon: '▶️' },
];