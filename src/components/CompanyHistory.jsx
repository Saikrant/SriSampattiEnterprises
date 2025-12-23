import React from 'react';

const CompanyHistory = () => {
    return (
        <section id="company-history" className="company-history">
            <div className="container">
                <div className="section-header">
                    <span className="section-badge">Our Legacy</span>
                    <h2>Why Sudhakar Profiles?</h2>
                    <p>Building quality with innovation and German technology</p>
                </div>

                <div className="history-content">
                    <div className="history-highlights">
                        <div className="highlight-card">
                            <div className="highlight-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <circle cx="12" cy="12" r="10"></circle>
                                    <line x1="2" y1="12" x2="22" y2="12"></line>
                                    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                                </svg>
                            </div>
                            <h3>European Technology</h3>
                            <p>
                                German-engineered uPVC profiles designed to perform reliably under high UV exposure and extreme Indian weather conditions.
                            </p>
                        </div>

                        <div className="highlight-card">
                            <div className="highlight-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                                </svg>
                            </div>
                            <h3>Certified Quality</h3>
                            <p>
                                Products are RoHS compliant and CIPET tested, ensuring safety, durability, and adherence to international quality standards.
                            </p>
                        </div>

                        <div className="highlight-card">
                            <div className="highlight-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M3 21h18" />
                                    <path d="M5 21V7l8-4 8 4v14" />
                                    <path d="M17 21v-8.5a2.5 2.5 0 0 0-5 0V21" />
                                    <path d="M7 10h4" />
                                    <path d="M7 14h4" />
                                    <path d="M17 14h2" />
                                    <path d="M17 10h2" />
                                </svg>
                            </div>
                            <h3>Manufacturing Excellence</h3>
                            <p>
                                Modern extrusion facilities equipped with advanced machinery to ensure consistent quality and precision manufacturing.
                            </p>
                        </div>

                        <div className="highlight-card">
                            <div className="highlight-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                                    <path d="m9 12 2 2 4-4"></path>
                                </svg>
                            </div>
                            <h3>Sustainability First</h3>
                            <p>
                                Manufactured using lead-free, recyclable materials with a strong focus on environmental responsibility.
                            </p>
                        </div>
                    </div>

                    <div className="certifications">
                        <h3>Our Certifications</h3>
                        <div className="cert-list">
                            <div className="cert-badge">
                                <span className="cert-name">RoHS Compliant</span>
                                <span className="cert-desc">
                                    Ensures products are free from restricted hazardous substances for enhanced safety.
                                </span>
                            </div>
                            <div className="cert-badge">
                                <span className="cert-name">CIPET Tested</span>
                                <span className="cert-desc">
                                    Tested for physical and chemical properties to meet industry quality benchmarks.
                                </span>
                            </div>
                            <div className="cert-badge">
                                <span className="cert-name">Lead-Free</span>
                                <span className="cert-desc">
                                    Manufactured without lead, making products safe for users and the environment.
                                </span>
                            </div>
                        </div>
                    </div>

                    <div className="locations">
                        <h3>Our Facilities</h3>
                        <div className="location-grid">
                            <div className="location-card">
                                <h4>Extrusion Unit – Suryapet</h4>
                                <p>
                                    Advanced production facility supporting high-volume manufacturing with strict quality control standards.
                                </p>
                                <p>
                                    Sy. No. 74/P, 75/P, 77/P & 85/P, Balaram Thanda, Near Industrial Estate, Suryapet, Telangana – 508213
                                </p>
                            </div>
                            <div className="location-card">
                                <h4>Extrusion Unit – Tirupati</h4>
                                <p>
                                    Strategically located unit ensuring efficient production and supply across southern regions.
                                </p>
                                <p>
                                    Survey No. 522/1, 522/2A & 1005/2, Yeguvarajupalem(V), Tirupati Dist., A.P. – 524410
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CompanyHistory;
