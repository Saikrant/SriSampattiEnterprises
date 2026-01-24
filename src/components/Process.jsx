import React from 'react';

const Process = () => {
    const [isVisible, setIsVisible] = React.useState(false);
    const sectionRef = React.useRef(null);

    React.useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.2 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) observer.unobserve(sectionRef.current);
        };
    }, []);

    const steps = [
        {
            number: 1,
            title: "Consultation",
            description: "Free home consultation to understand your specific needs and design preferences.",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                </svg>
            )
        },
        {
            number: 2,
            title: "Measurement",
            description: "Precise laser measurements taken by our expert technical team for a perfect fit.",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 6H3"></path>
                    <path d="M10 12H3"></path>
                    <path d="M10 18H3"></path>
                    <circle cx="17.5" cy="15" r="3.5"></circle>
                    <path d="M17.5 12v3l2.5 1.5"></path>
                </svg>
            )
        },
        {
            number: 3,
            title: "Manufacturing",
            description: "Profiles are crafted in our facility using German technology and strict quality checks.",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3 21h18" />
                    <path d="M5 21V7l8-4 8 4v14" />
                    <path d="M17 21v-8.5a2.5 2.5 0 0 0-5 0V21" />
                    <path d="M7 10h4" />
                    <path d="M7 14h4" />
                    <path d="M17 14h2" />
                    <path d="M17 10h2" />
                </svg>
            )
        },
        {
            number: 4,
            title: "Installation",
            description: "Professional installation ensuring seamless finish, followed by a final quality inspection.",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                </svg>
            )
        }
    ];

    return (
        <section id="process" className="process" ref={sectionRef}>
            <div className="container">
                <div className={`section-header ${isVisible ? 'animate-fade-up' : 'opacity-0'}`}>
                    <span className="section-badge">Seamless Experience</span>
                    <h2>Our Installation Process</h2>
                    <p>Simple, efficient, and hassle-free from start to finish</p>
                </div>

                <div className="process-timeline">
                    {/* Connecting Line Background */}
                    <div className={`timeline-line ${isVisible ? 'expand' : ''}`}></div>

                    <div className="steps-container">
                        {steps.map((step, index) => (
                            <div
                                key={index}
                                className={`timeline-step ${isVisible ? 'animate-step' : 'opacity-0'}`}
                                style={{ animationDelay: `${index * 0.2 + 0.5}s` }}
                            >
                                <div className="step-marker">
                                    <div className="step-icon">
                                        {step.icon}
                                    </div>
                                    <div className="step-number-badge">{step.number}</div>
                                </div>
                                <div className="step-content">
                                    <h3>{step.title}</h3>
                                    <p>{step.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Process;
