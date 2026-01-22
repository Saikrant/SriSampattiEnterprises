import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductDetails from "./pages/ProductDetails";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Products from "./components/Products";
import ColorProfiles from "./components/ColorProfiles";
import WhyUs from "./components/WhyUs";
import CompanyHistory from "./components/CompanyHistory";
import Process from "./components/Process";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Chatbot from "./components/Chatbot";
import Footer from "./components/Footer";

/* keep all your existing imports */

function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route
          path="/"
          element={
            <main>
              <Hero />
              <Features />
              <Products />
              <ColorProfiles />
              <WhyUs />
              <CompanyHistory />
              <Process />
              <Testimonials />
              <Contact />
              <Chatbot />
            </main>
          }
        />

        <Route path="/products/:slug" element={<ProductDetails />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
