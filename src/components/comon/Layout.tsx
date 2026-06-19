import React from 'react';
import Header from './Header';
import Footer from './Footer';

interface LayoutProps {
  children: React.ReactNode;
  /** Extra Tailwind classes for the <main> element */
  className?: string;
}

const Layout: React.FC<LayoutProps> = ({ children, className = '' }) => (
  <div className="flex flex-col min-h-screen bg-[var(--secondary-muted)]">
    <Header />
    <main role="main" className={`flex-1 w-full ${className}`}>
      {children}
    </main>
    <Footer />
  </div>
);

export default Layout;