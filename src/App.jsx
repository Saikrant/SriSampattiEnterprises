import { useState, useCallback, Suspense, useEffect } from 'react';
import { useLocation, Outlet } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { HelmetProvider } from 'react-helmet-async';
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';
import Loader from './components/Loader/Loader';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import WhatsAppButton from './components/WhatsAppButton/WhatsAppButton';
import BottomTabBar from './components/BottomTabBar/BottomTabBar';
import { trackPageView } from './utils/analytics';

const RouteTracker = () => {
  const location = useLocation();
  useEffect(() => {
    trackPageView(location.pathname, document.title);
  }, [location]);
  return null;
}

function App() {
  const [loading, setLoading] = useState(true);
  const handleComplete = useCallback(() => setLoading(false), []);

  return (
    <ErrorBoundary>
      <HelmetProvider>
        <AnimatePresence>
          {loading && <Loader key="loader" onComplete={handleComplete} />}
        </AnimatePresence>
        {!loading && (
          <>
            <ScrollToTop />
            <RouteTracker />
            <WhatsAppButton />
            <BottomTabBar />
            <Suspense fallback={
              <div style={{
                height: '100vh',
                background: '#111318',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <div style={{
                  width: 40, height: 40,
                  border: '3px solid rgba(200,75,26,0.2)',
                  borderTop: '3px solid #c84b1a',
                  borderRadius: '50%',
                  animation: 'spin 0.8s linear infinite'
                }} />
              </div>
            }>
              <Outlet />
            </Suspense>
          </>
        )}
      </HelmetProvider>
    </ErrorBoundary>
  );
}

export default App;
