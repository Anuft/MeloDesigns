import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { CustomiseModal } from './components/CustomiseModal';
import { ProductModal } from './components/ProductModal';
import { ProductItem } from './types';

// Distinct Pages
import { HomePage } from './pages/HomePage';
import { CollectionsPage } from './pages/CollectionsPage';
import { CustomisePage } from './pages/CustomisePage';
import { AboutPage } from './pages/AboutPage';
import { GalleryPage } from './pages/GalleryPage';
import { ContactPage } from './pages/ContactPage';
import { ArchivePage } from './components/ArchivePage';

export function App() {
  const [currentPage, setCurrentPage] = useState<string>('home');
  const [isCustomiseModalOpen, setIsCustomiseModalOpen] = useState<boolean>(false);
  const [selectedProduct, setSelectedProduct] = useState<ProductItem | null>(null);

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '').toLowerCase();
      const validPages = ['home', 'collections', 'customise', 'archive', 'about', 'gallery', 'contact'];
      if (validPages.includes(hash)) {
        setCurrentPage(hash);
      } else {
        setCurrentPage('home');
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigateTo = (pageId: string) => {
    setCurrentPage(pageId);
    window.location.hash = `#${pageId}`;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'collections':
        return (
          <CollectionsPage
            onOpenCustomise={() => navigateTo('customise')}
            onOpenArchive={() => navigateTo('archive')}
          />
        );
      case 'customise':
        return <CustomisePage />;
      case 'archive':
        return <ArchivePage onBackToHome={() => navigateTo('home')} />;
      case 'about':
        return (
          <AboutPage
            onNavigateToCustomise={() => navigateTo('customise')}
            onNavigateToContact={() => navigateTo('contact')}
          />
        );
      case 'gallery':
        return <GalleryPage />;
      case 'contact':
        return <ContactPage />;
      case 'home':
      default:
        return (
          <HomePage
            onNavigate={navigateTo}
            onOpenCustomiseModal={() => setIsCustomiseModalOpen(true)}
            onSelectProduct={(p) => setSelectedProduct(p)}
          />
        );
    }
  };

  return (
    <div className="min-h-screen bg-ivory text-darkbrown font-sans flex flex-col selection:bg-beige selection:text-darkbrown">
      {/* Sticky Navigation Bar */}
      <Navbar
        currentPage={currentPage}
        onNavigate={navigateTo}
      />

      {/* Main Page View */}
      <main className="flex-grow">
        {renderCurrentPage()}
      </main>

      {/* Footer (displayed on all standard pages) */}
      {currentPage !== 'archive' && (
        <Footer onNavigate={navigateTo} />
      )}

      {/* Persistent Floating WhatsApp Concierge */}
      <FloatingWhatsApp />

      {/* Interactive Customisation Studio Modal */}
      <CustomiseModal
        isOpen={isCustomiseModalOpen}
        onClose={() => setIsCustomiseModalOpen(false)}
      />

      {/* Quick View Product Modal */}
      <ProductModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />
    </div>
  );
}

export default App;
