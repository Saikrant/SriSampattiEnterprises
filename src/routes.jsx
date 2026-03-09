import { lazy } from 'react';

const Home = lazy(() => import('./pages/Home'));
const ProductDetail = lazy(() => import('./pages/ProductDetail'));
const AboutPage = lazy(() => import('./pages/AboutPage'));
const ProjectsPage = lazy(() => import('./pages/ProjectsPage'));
const GalleryPage = lazy(() => import('./pages/GalleryPage'));
const BlogListPage = lazy(() => import('./pages/BlogListPage'));
const BlogPostPage = lazy(() => import('./pages/BlogPostPage'));
const ServiceAreasPage = lazy(() => import('./pages/ServiceAreasPage'));
const CareersPage = lazy(() => import('./pages/CareersPage'));
const PartnerPage = lazy(() => import('./pages/PartnerPage'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'));

const routes = [
    { path: '/', index: true, element: <Home /> },
    { path: '/about', element: <AboutPage /> },
    { path: '/projects', element: <ProjectsPage /> },
    { path: '/gallery', element: <GalleryPage /> },
    { path: '/blog', element: <BlogListPage /> },
    { path: '/service-areas', element: <ServiceAreasPage /> },
    { path: '/careers', element: <CareersPage /> },
    { path: '/partner-with-us', element: <PartnerPage /> },
    { path: '/products/:slug', element: <ProductDetail /> },
    { path: '/blog/:slug', element: <BlogPostPage /> },
    { path: '*', element: <NotFoundPage /> }
];

export default routes;
