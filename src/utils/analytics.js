// Track page views on route change
export const trackPageView = (url, title) => {
    if (typeof window !== 'undefined' && typeof window.gtag !== 'undefined') {
        window.gtag('event', 'page_view', {
            page_location: url,
            page_title: title
        })
    }
}

// Track CTA clicks
export const trackEvent = (eventName, params = {}) => {
    if (typeof window !== 'undefined' && typeof window.gtag !== 'undefined') {
        window.gtag('event', eventName, params)
    }
}

// Predefined events
export const trackQuoteRequest = () =>
    trackEvent('generate_lead', {
        event_category: 'CTA',
        event_label: 'Quote Form Submitted'
    })

export const trackWhatsAppClick = () =>
    trackEvent('contact', {
        event_category: 'WhatsApp',
        event_label: 'WhatsApp Button Clicked'
    })

export const trackProductView = (productName) =>
    trackEvent('view_item', {
        event_category: 'Product',
        event_label: productName
    })

export const trackBrochureDownload = () =>
    trackEvent('file_download', {
        event_category: 'Brochure',
        event_label: 'Brochure Download Requested'
    })
