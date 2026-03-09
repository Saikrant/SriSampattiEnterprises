// --- LOCAL BUSINESS SCHEMA (Homepage) ---
export const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://www.srisampatti.com/#business",
    "name": "Sri Sampatti Enterprises",
    "alternateName": "Sri Sampatti uPVC Windows Hyderabad",
    "description": "Premium uPVC windows and doors manufacturer in Hyderabad since 1998. Authorized Sudhakar Profiles fabricator with German technology. Serving Telangana, Andhra Pradesh and Karnataka.",
    "url": "https://www.srisampatti.com",
    "telephone": ["+91-95151-04922", "+91-94833-33456"],
    "email": "info@srisampatti.com",
    "foundingDate": "1998",
    "logo": "https://www.srisampatti.com/logo.png",
    "image": "https://www.srisampatti.com/og-image.jpg",
    "priceRange": "₹₹₹",
    "currenciesAccepted": "INR",
    "paymentAccepted": "Cash, Bank Transfer, UPI, Cheque",
    "address": {
        "@type": "PostalAddress",
        "streetAddress": "Sy No. 382 (P) Pleasant Hills, Himayatsagar Road, Near ORR Exit No. 17",
        "addressLocality": "Rajendranagar",
        "addressRegion": "Telangana",
        "postalCode": "500030",
        "addressCountry": "IN"
    },
    "geo": {
        "@type": "GeoCoordinates",
        "latitude": "17.3344",
        "longitude": "78.3921"
    },
    "openingHoursSpecification": [
        {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            "opens": "09:00",
            "closes": "18:00"
        }
    ],
    "areaServed": [
        { "@type": "State", "name": "Telangana" },
        { "@type": "State", "name": "Andhra Pradesh" },
        { "@type": "State", "name": "Karnataka" }
    ],
    "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "uPVC Windows & Doors",
        "itemListElement": [
            { "@type": "Offer", "itemOffered": { "@type": "Product", "name": "uPVC Sliding Systems" } },
            { "@type": "Offer", "itemOffered": { "@type": "Product", "name": "uPVC Casement Windows" } },
            { "@type": "Offer", "itemOffered": { "@type": "Product", "name": "uPVC Fixed Windows" } },
            { "@type": "Offer", "itemOffered": { "@type": "Product", "name": "uPVC Tilt & Turn Windows" } },
            { "@type": "Offer", "itemOffered": { "@type": "Product", "name": "uPVC French Doors" } },
            { "@type": "Offer", "itemOffered": { "@type": "Product", "name": "uPVC Lift & Slide Doors" } }
        ]
    },
    "sameAs": [
        "https://www.facebook.com/srisampatti",
        "https://www.instagram.com/srisampatti",
        "https://www.linkedin.com/company/srisampatti"
    ]
};

// --- PRODUCT SCHEMA (each product detail page) ---
export const getProductSchema = (product) => ({
    "@context": "https://schema.org",
    "@type": "Product",
    "name": product.name,
    "description": product.shortDesc,
    "image": product.image,
    "brand": {
        "@type": "Brand",
        "name": "Sri Sampatti Enterprises"
    },
    "manufacturer": {
        "@type": "Organization",
        "name": "Sri Sampatti Enterprises",
        "url": "https://www.srisampatti.com"
    },
    "material": "uPVC — Sudhakar Profiles",
    "offers": {
        "@type": "Offer",
        "priceCurrency": "INR",
        "price": "0",
        "priceSpecification": {
            "@type": "PriceSpecification",
            "description": "Price on request — free site visit and quotation"
        },
        "availability": "https://schema.org/InStock",
        "seller": {
            "@type": "LocalBusiness",
            "name": "Sri Sampatti Enterprises",
            "telephone": "+91-95151-04922"
        }
    },
    "additionalProperty": (product.highlights || []).map(h => ({
        "@type": "PropertyValue",
        "name": "Feature",
        "value": h
    }))
});

// --- BREADCRUMB SCHEMA (product + blog pages) ---
export const getBreadcrumbSchema = (items) => ({
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "name": item.name,
        "item": `https://www.srisampatti.com${item.url}`
    }))
});

// --- ARTICLE SCHEMA (blog post pages) ---
export const getArticleSchema = (post) => ({
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": post.title,
    "description": post.excerpt,
    "image": `https://www.srisampatti.com${post.coverImage}`,
    "datePublished": post.publishedDate,
    "dateModified": post.publishedDate,
    "author": {
        "@type": "Organization",
        "name": "Sri Sampatti Enterprises",
        "url": "https://www.srisampatti.com"
    },
    "publisher": {
        "@type": "Organization",
        "name": "Sri Sampatti Enterprises",
        "logo": {
            "@type": "ImageObject",
            "url": "https://www.srisampatti.com/logo.png"
        }
    },
    "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": `https://www.srisampatti.com/blog/${post.slug}`
    }
});

// --- FAQ SCHEMA (Homepage) ---
export const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
        {
            "@type": "Question",
            "name": "What is the price of uPVC windows in Hyderabad?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "uPVC window prices in Hyderabad depend on size, type, and configuration. Sri Sampatti Enterprises offers free site visits and custom quotations. Contact us at +91 95151 04922 for a free quote."
            }
        },
        {
            "@type": "Question",
            "name": "Are you an authorized Sudhakar Profiles dealer in Hyderabad?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, Sri Sampatti Enterprises is an authorized fabricator and dealer of Sudhakar Profiles in Hyderabad, one of India's leading uPVC profile manufacturers using German technology."
            }
        },
        {
            "@type": "Question",
            "name": "Do you provide uPVC window installation in Vijayawada and Bangalore?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, we serve customers across Telangana, Andhra Pradesh (including Vijayawada and Visakhapatnam), and Karnataka (including Bangalore). Free site visits are available."
            }
        },
        {
            "@type": "Question",
            "name": "How long does uPVC window installation take?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "A standard residential installation typically takes 1-3 days depending on the number of windows and doors. Our expert team ensures minimal disruption and a clean, professional finish."
            }
        },
        {
            "@type": "Question",
            "name": "What is the warranty on your uPVC windows and doors?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Sri Sampatti Enterprises provides warranty on all uPVC windows and doors. Sudhakar Profiles come with manufacturer warranty. Contact us for specific warranty details on your product."
            }
        }
    ]
};
