import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import SEO from '../components/SEO/SEO';

const NotFoundPage = () => {
    const navigate = useNavigate();

    useEffect(() => {
        document.title = 'Page Not Found | Sri Sampatti Enterprises';
    }, []);

    return (
        <>
            <SEO
                title="Page Not Found"
                description="The page you're looking for doesn't exist or has been moved."
                canonicalUrl="/404"
            />
            <div style={{
                minHeight: '100vh',
                background: '#111318',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'column',
                gap: '16px',
                padding: '24px',
                textAlign: 'center'
            }}>
                <motion.h1
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    style={{
                        color: '#c84b1a',
                        fontFamily: 'Space Grotesk, sans-serif',
                        fontSize: '120px',
                        margin: 0,
                        lineHeight: 1
                    }}
                >
                    404
                </motion.h1>
                <motion.h2
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    style={{
                        color: '#f0ece4',
                        fontFamily: 'Space Grotesk, sans-serif',
                        fontSize: '32px',
                        margin: 0
                    }}
                >
                    Page Not Found
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    style={{
                        color: '#8a8f9e',
                        fontSize: '18px',
                        maxWidth: '500px',
                        margin: '0 0 24px 0'
                    }}
                >
                    The page you're looking for doesn't exist or has been moved.
                </motion.p>
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    style={{
                        display: 'flex',
                        gap: '16px',
                        flexWrap: 'wrap',
                        justifyContent: 'center'
                    }}
                >
                    <button
                        onClick={() => navigate('/')}
                        style={{
                            background: '#c84b1a',
                            color: '#fff',
                            border: 'none',
                            padding: '12px 24px',
                            borderRadius: '8px',
                            fontSize: '16px',
                            cursor: 'pointer',
                            fontWeight: 600,
                            fontFamily: 'Inter, sans-serif'
                        }}
                    >
                        Go Home
                    </button>
                    <button
                        onClick={() => navigate('/#products')}
                        style={{
                            background: 'transparent',
                            color: '#f0ece4',
                            border: '1px solid #c84b1a',
                            padding: '12px 24px',
                            borderRadius: '8px',
                            fontSize: '16px',
                            cursor: 'pointer',
                            fontWeight: 600,
                            fontFamily: 'Inter, sans-serif'
                        }}
                    >
                        View Products
                    </button>
                </motion.div>
            </div>
        </>
    );
};

export default NotFoundPage;
