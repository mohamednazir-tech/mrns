import React, { useState, useEffect, Suspense, lazy } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CommandPalette from './components/CommandPalette';
import HomePage from './pages/HomePage';
import { ArrowUp, Sparkles, Loader2 } from 'lucide-react';

// Code-split pages for instant initial load and optimal performance
const AboutPage = lazy(() => import('./pages/AboutPage'));
const ServicesPage = lazy(() => import('./pages/ServicesPage'));
const ProductsPage = lazy(() => import('./pages/ProductsPage'));
const TestimonialsPage = lazy(() => import('./pages/TestimonialsPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));
const CrusherErpPage = lazy(() => import('./pages/CrusherErpPage'));
const ProjectsPage = lazy(() => import('./pages/ProjectsPage'));

// Elegant branded loading fallback
const PageLoader = () => (
  <div className="min-h-[70vh] flex flex-col items-center justify-center space-y-4">
    <div className="relative flex items-center justify-center">
      <div className="w-12 h-12 rounded-full border-2 border-slate-200 border-t-brand-purple animate-spin" />
      <span className="absolute w-2 h-2 rounded-full bg-brand-cyan animate-ping" />
    </div>
    <div className="text-xs font-mono text-slate-500 uppercase tracking-widest animate-pulse">
      Loading MRNS Solutions...
    </div>
  </div>
);

export function App() {
  const [currentPage, setCurrentPage] = useState<string>('home');
  const [isCommandOpen, setIsCommandOpen] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);

  // Sync with browser URL hash for clean bookmarking and navigation
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '').toLowerCase();
      if (['home', 'about', 'services', 'products', 'projects', 'testimonials', 'contact', 'crusher-erp'].includes(hash)) {
        setCurrentPage(hash);
      }
    };

    if (window.location.hash) {
      handleHashChange();
    }

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Back to top scroll listener
  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Keyboard shortcut for Command Palette (Ctrl+K or Cmd+K)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setIsCommandOpen(prev => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleNavigate = (page: string) => {
    setCurrentPage(page);
    window.location.hash = page === 'home' ? '' : page;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 selection:bg-brand-cyan/20 selection:text-brand-purple">
      {/* Top Navigation */}
      <Navbar 
        currentPage={currentPage} 
        onNavigate={handleNavigate} 
        onOpenSearch={() => setIsCommandOpen(true)} 
      />

      {/* Main Page Content with Suspense Code-Splitting */}
      <main className="flex-1 w-full">
        <Suspense fallback={<PageLoader />}>
          {currentPage === 'home' && <HomePage onNavigate={handleNavigate} />}
          {currentPage === 'about' && <AboutPage onNavigate={handleNavigate} />}
          {currentPage === 'services' && <ServicesPage onNavigate={handleNavigate} />}
          {currentPage === 'products' && <ProductsPage onNavigate={handleNavigate} />}
          {currentPage === 'projects' && <ProjectsPage onNavigate={handleNavigate} />}
          {currentPage === 'testimonials' && <TestimonialsPage onNavigate={handleNavigate} />}
          {currentPage === 'contact' && <ContactPage onNavigate={handleNavigate} />}
          {currentPage === 'crusher-erp' && <CrusherErpPage onNavigate={handleNavigate} />}
        </Suspense>
      </main>

      {/* Footer */}
      <Footer onNavigate={handleNavigate} />

      {/* Global Interactive Command Palette (Ctrl+K) */}
      <CommandPalette 
        isOpen={isCommandOpen} 
        onClose={() => setIsCommandOpen(false)} 
        onNavigate={handleNavigate} 
      />

      {/* Floating Action Controls */}
      <div className="fixed bottom-6 right-6 z-30 flex flex-col gap-2.5 items-end">
        {showBackToTop && (
          <button
            onClick={scrollToTop}
            aria-label="Scroll to top"
            className="p-3 rounded-full bg-white/90 backdrop-blur-md border border-slate-200/90 text-slate-700 shadow-lg hover:shadow-xl hover:bg-white hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        )}

        {currentPage !== 'contact' && (
          <button
            onClick={() => handleNavigate('contact')}
            className="group flex items-center gap-2 px-4 py-2.5 rounded-full bg-slate-950 text-white border border-slate-800 shadow-xl hover:shadow-2xl hover:scale-105 active:scale-95 transition-all text-xs font-bold"
          >
            <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="hidden sm:inline">Start Your Project</span>
            <span className="sm:hidden">Contact</span>
            <Sparkles className="w-3.5 h-3.5 text-brand-cyan group-hover:rotate-12 transition-transform" />
          </button>
        )}
      </div>
    </div>
  );
}

export default App;
