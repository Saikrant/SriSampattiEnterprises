import Navbar from '../components/Navbar/Navbar';
import Hero from '../components/Hero/Hero';
import Products from '../components/Products/Products';
import Features from '../components/Features/Features';
import ColorProfiles from '../components/ColorProfiles/ColorProfiles';
import Process from '../components/Process/Process';
import Testimonials from '../components/Testimonials/Testimonials';
import Contact from '../components/Contact/Contact';
import Footer from '../components/Footer/Footer';
import SectionReveal from '../components/SectionReveal/SectionReveal';
import QualityPartners from '../components/QualityPartners/QualityPartners';
import ProjectsPreview from '../components/ProjectsPreview/ProjectsPreview';
import BlogPreview from '../components/BlogPreview/BlogPreview';
import SEO from '../components/SEO/SEO';
import { localBusinessSchema, faqSchema } from '../data/schemas';
const Home = () => {
    return (
        <>
            <SEO
                title="Premium uPVC Windows & Doors in Hyderabad | Sri Sampatti Enterprises"
                description="Sri Sampatti Enterprises — Hyderabad's trusted uPVC windows and doors manufacturer since 1998. Powered by Sudhakar Profiles with German technology. Serving Telangana, Andhra Pradesh & Karnataka. Free site visit. Call +91 95151 04922."
                keywords="uPVC windows Hyderabad, uPVC doors Hyderabad, Sudhakar profile dealers Hyderabad, best uPVC windows Telangana, uPVC manufacturer Hyderabad, premium windows doors Hyderabad, uPVC sliding windows Hyderabad, uPVC casement windows Hyderabad"
                canonicalUrl="/"
                schema={[localBusinessSchema, faqSchema]}
            />
            <Navbar />
            <Hero />
            <Products />
            <SectionReveal direction="right">
                <Features />
            </SectionReveal>
            <QualityPartners />
            <SectionReveal direction="left">
                <ColorProfiles />
            </SectionReveal>
            <SectionReveal direction="right">
                <Process />
            </SectionReveal>
            <Testimonials />
            <ProjectsPreview />
            <BlogPreview />
            <SectionReveal direction="left">
                <Contact />
            </SectionReveal>
            <Footer />
        </>
    );
};

export default Home;
