import { Helmet } from 'react-helmet-async'

const SEO = ({
    title,
    description,
    keywords,
    canonicalUrl,
    ogImage = '/og-image.jpg',
    ogType = 'website',
    schema = null
}) => {
    const baseUrl = import.meta.env.VITE_SITE_URL || 'https://www.srisampatti.com'
    const fullTitle = title
        ? `${title} | Sri Sampatti Enterprises`
        : 'Sri Sampatti Enterprises | Premium uPVC Windows & Doors Hyderabad'

    return (
        <Helmet>
            {/* Primary Meta Tags */}
            <title>{fullTitle}</title>
            <meta name="title" content={fullTitle} />
            <meta name="description" content={description} />
            <meta name="keywords" content={keywords} />
            <meta name="author" content="Sri Sampatti Enterprises" />
            <meta name="robots" content="index, follow" />
            <meta name="language" content="English" />
            <meta name="geo.region" content="IN-TG" />
            <meta name="geo.placename" content="Hyderabad" />
            <meta name="geo.position" content="17.3850;78.4867" />
            <meta name="ICBM" content="17.3850, 78.4867" />
            <link rel="canonical" href={`${baseUrl}${canonicalUrl}`} />

            {/* Open Graph / Facebook */}
            <meta property="og:type" content={ogType} />
            <meta property="og:url" content={`${baseUrl}${canonicalUrl}`} />
            <meta property="og:title" content={fullTitle} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={`${baseUrl}${ogImage}`} />
            <meta property="og:image:width" content="1200" />
            <meta property="og:image:height" content="630" />
            <meta property="og:site_name" content="Sri Sampatti Enterprises" />
            <meta property="og:locale" content="en_IN" />

            {/* Twitter Card */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={fullTitle} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={`${baseUrl}${ogImage}`} />

            {/* JSON-LD Schema */}
            {Array.isArray(schema)
                ? schema.map((s, i) => (
                    <script key={i} type="application/ld+json">
                        {JSON.stringify(s)}
                    </script>
                ))
                : schema && (
                    <script type="application/ld+json">
                        {JSON.stringify(schema)}
                    </script>
                )
            }
        </Helmet>
    )
}

export default SEO
