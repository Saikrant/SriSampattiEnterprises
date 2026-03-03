import { useState, useCallback } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Loader from './components/Loader/Loader';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import WhatsAppButton from './components/WhatsAppButton/WhatsAppButton';
import BottomTabBar from './components/BottomTabBar/BottomTabBar';
import Home from './pages/Home';
import ProductDetail from './pages/ProductDetail';
import AboutPage from './pages/AboutPage';
import ProjectsPage from './pages/ProjectsPage';
import GalleryPage from './pages/GalleryPage';
import BlogListPage from './pages/BlogListPage';
import BlogPostPage from './pages/BlogPostPage';
import ServiceAreasPage from './pages/ServiceAreasPage';
import CareersPage from './pages/CareersPage';
import PartnerPage from './pages/PartnerPage';

function App() {
  const [loading, setLoading] = useState(true);
  const handleComplete = useCallback(() => setLoading(false), []);

  return (
    <BrowserRouter>
      <AnimatePresence>
        {loading && <Loader key="loader" onComplete={handleComplete} />}
      </AnimatePresence>
      {!loading && (
        <>
          <ScrollToTop />
          <WhatsAppButton />
          <BottomTabBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products/:slug" element={<ProductDetail />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/blog" element={<BlogListPage />} />
            <Route path="/blog/:slug" element={<BlogPostPage />} />
            <Route path="/service-areas" element={<ServiceAreasPage />} />
            <Route path="/careers" element={<CareersPage />} />
            <Route path="/partner-with-us" element={<PartnerPage />} />
          </Routes>
        </>
      )}
    </BrowserRouter>
  );
}

export default App;
