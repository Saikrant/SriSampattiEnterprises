import React from 'react'

const OptimizedImage = ({
    src,
    alt,
    width,
    height,
    eager = false,
    className = ''
}) => {
    // Generate WebP version hint (actual conversion done at build/CDN)
    const isUnsplash = typeof src === 'string' && src.includes('unsplash.com')
    const webpSrc = isUnsplash
        ? `${src}&fm=webp&q=80`
        : src
    const jpgSrc = isUnsplash
        ? `${src}&q=75`
        : src

    if (!src || src === 'PLACEHOLDER_PROJECT_IMAGE'
        || src === 'PLACEHOLDER_BLOG_IMAGE'
        || src === 'PLACEHOLDER_GALLERY_IMAGE') {
        return (
            <div className={`img-placeholder ${className}`}
                style={{ width: width || '100%', height: height || '100%', background: '#1c1f26', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <span style={{ color: '#8a8f9e' }}>Photo Coming Soon</span>
            </div>
        )
    }

    return (
        <picture>
            <source srcSet={webpSrc} type="image/webp" />
            <source srcSet={jpgSrc} type="image/jpeg" />
            <img
                src={jpgSrc}
                alt={alt}
                width={width}
                height={height}
                loading={eager ? 'eager' : 'lazy'}
                decoding={eager ? 'sync' : 'async'}
                className={className}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
        </picture>
    )
}

export default OptimizedImage
