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

const Home = () => {
    return (
        <>
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
