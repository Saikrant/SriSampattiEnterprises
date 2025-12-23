import React from 'react';

const Process = () => {
    const steps = [
        {
            number: 1,
            title: "Consultation",
            description: "Free home consultation to understand your needs."
        },
        {
            number: 2,
            title: "Measurement",
            description: "Precise measurements by our expert team."
        },
        {
            number: 3,
            title: "Manufacturing",
            description: "Profiles are manufactured using advanced machinery and strict quality standards."
        },
        {
            number: 4,
            title: "Installation",
            description: "Professional installation and finishing."
        }
    ];

    return (
        <section id="process" className="process">
            <div className="container">
                <div className="section-header">
                    <span className="section-badge">Seamless Experience</span>
                    <h2>Our Installation Process</h2>
                    <p>Simple, efficient, and hassle-free from start to finish</p>
                </div>
                <div className="process-steps">
                    {steps.map((step, index) => (
                        <div key={index} className="step-item">
                            <div className="step-number">{step.number}</div>
                            <h3>{step.title}</h3>
                            <p>{step.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Process;
