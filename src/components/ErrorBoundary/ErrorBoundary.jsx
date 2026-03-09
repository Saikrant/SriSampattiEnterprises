import React from 'react';

class ErrorBoundary extends React.Component {
    state = { hasError: false, error: null }

    static getDerivedStateFromError(error) {
        return { hasError: true, error }
    }

    render() {
        if (this.state.hasError) {
            return (
                <div style={{
                    minHeight: '100vh', background: '#111318',
                    display: 'flex', alignItems: 'center',
                    justifyContent: 'center', flexDirection: 'column',
                    gap: 24, padding: 24, textAlign: 'center'
                }}>
                    <h2 style={{ color: '#f0ece4', fontFamily: 'Space Grotesk' }}>
                        Something went wrong
                    </h2>
                    <p style={{ color: '#8a8f9e' }}>
                        Please refresh the page or contact us at +91 95151 04922
                    </p>
                    <button
                        onClick={() => window.location.reload()}
                        style={{
                            background: '#c84b1a', color: 'white',
                            border: 'none', padding: '12px 24px',
                            borderRadius: 8, cursor: 'pointer', fontSize: 15
                        }}>
                        Refresh Page
                    </button>
                </div>
            )
        }
        return this.props.children
    }
}

export default ErrorBoundary;
