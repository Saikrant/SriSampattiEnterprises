import React, { useState } from 'react';
import PhoneInput, { isValidPhoneNumber } from 'react-phone-number-input';
import 'react-phone-number-input/style.css';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        location: '',
        requirement: ''
    });

    const [errors, setErrors] = useState({});

    const getCurrentLocation = async () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                async (position) => {
                    const { latitude, longitude } = position.coords;
                    try {
                        const response = await fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`);
                        const data = await response.json();
                        const address = data.display_name || `Lat: ${latitude.toFixed(6)}, Lng: ${longitude.toFixed(6)}`;
                        setFormData({
                            ...formData,
                            location: address
                        });
                        setErrors({ ...errors, location: '' });
                    } catch (error) {
                        console.error('Error fetching address:', error);
                        setFormData({
                            ...formData,
                            location: `Lat: ${latitude.toFixed(6)}, Lng: ${longitude.toFixed(6)}`
                        });
                        setErrors({ ...errors, location: 'Unable to fetch address. Using coordinates.' });
                    }
                },
                (error) => {
                    console.error('Error getting location:', error);
                    setErrors({ ...errors, location: 'Unable to get current location. Please enter manually.' });
                }
            );
        } else {
            setErrors({ ...errors, location: 'Geolocation is not supported by this browser.' });
        }
    };

    const validate = () => {
        let tempErrors = {};
        if (!formData.name.trim()) {
            tempErrors.name = "Name is required";
        } else if (!/^[a-zA-Z\s]+$/.test(formData.name.trim())) {
            tempErrors.name = "Name should contain only letters and spaces";
        }
        if (!formData.phone.trim()) {
            tempErrors.phone = "Phone is required";
        } else if (!isValidPhoneNumber(formData.phone)) {
            tempErrors.phone = "Enter a valid phone number";
        }
        if (!formData.location.trim()) {
            tempErrors.location = "Location is required";
        }
        if (!formData.requirement.trim()) {
            tempErrors.requirement = "Requirement is required";
        }
        setErrors(tempErrors);
        return Object.keys(tempErrors).length === 0;
    };

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData({
            ...formData,
            [id]: value
        });
        // Clear error for the field being changed
        setErrors({
            ...errors,
            [id]: ''
        });
    };

    const handlePhoneChange = (value) => {
        setFormData({
            ...formData,
            phone: value || ''
        });
        // Clear error for phone
        setErrors({
            ...errors,
            phone: ''
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!validate()) {
            return;
        }
        // Handle form submission logic here
        console.log('Form submitted:', formData);
        alert('Thank you for your message! We will get back to you soon.');
        setFormData({ name: '', phone: '', location: '', requirement: '' });
        setErrors({});
    };

    return (
        <>
            {/* CTA Banner */}
            <section className="cta-banner">
                <div className="container cta-container">
                    <h2>Ready to Transform Your Home?</h2>
                    <p>Get a free, no-obligation quote today and discover how much you could save.</p>
                    <div className="cta-btns">
                        <a href="#contact" className="btn btn-white">Request Free Quote</a>
                        <a href="tel:+911234567890" className="btn btn-outline-white">Call Us Now</a>
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section id="contact" className="contact">
                <div className="container contact-container">
                    <div className="contact-info">
                        <h2>Get In Touch</h2>
                        <p>Have questions? We're here to help. Contact us for expert advice.</p>

                        <div className="contact-item">
                            <div className="contact-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                                </svg>
                            </div>
                            <div className="contact-text">
                                <h4>Phone</h4>
                                <p>+91 95151 04922 / +91 94833 33456</p>
                            </div>
                        </div>

                        <div className="contact-item">
                            <div className="contact-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                                    <polyline points="22,6 12,13 2,6"></polyline>
                                </svg>
                            </div>
                            <div className="contact-text">
                                <h4>Email</h4>
                                <p>info@srisampatti.com</p>
                            </div>
                        </div>

                        <div className="contact-item">
                            <div className="contact-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                                    <circle cx="12" cy="10" r="3"></circle>
                                </svg>
                            </div>
                            <div className="contact-text">
                                <h4>Factory Address</h4>
                                <p>Sy No. 382 (P) Pleasant Hills, Himayatsagar Road (Near to Outer Ring Road, Exit No. 17), Rajendranagar, Hyderabad 500030, Telangana</p>
                            </div>
                        </div>

                        <div className="contact-item">
                            <div className="contact-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <circle cx="12" cy="12" r="10"></circle>
                                    <polyline points="12 6 12 12 16 14"></polyline>
                                </svg>
                            </div>
                            <div className="contact-text">
                                <h4>Business Hours</h4>
                                <p>Mon - Sat: 9:00 AM - 7:00 PM</p>
                            </div>
                        </div>
                    </div>

                    <div className="contact-form-wrapper">
                        <form className="contact-form" onSubmit={handleSubmit}>
                            <div className="form-group">
                                <div className="form-floating">
                                    <input
                                        type="text"
                                        id="name"
                                        placeholder="Full Name"
                                        required
                                        value={formData.name}
                                        onChange={handleChange}
                                    />
                                    <label htmlFor="name">Full Name</label>
                                </div>
                                {errors.name && <span className="error">{errors.name}</span>}
                            </div>
                            <div className="form-group">
                                <div className={`form-floating phone-floating ${formData.phone ? 'has-value' : ''}`}>
                                    <PhoneInput
                                        international
                                        defaultCountry="IN"
                                        value={formData.phone}
                                        onChange={handlePhoneChange}
                                        placeholder="Enter phone number"
                                        required
                                    />
                                    <label htmlFor="phone">Phone Number</label>
                                </div>
                                {errors.phone && <span className="error">{errors.phone}</span>}
                            </div>
                            <div className="form-group">
                                <div className="form-floating">
                                    <input
                                        type="text"
                                        id="location"
                                        placeholder="Location"
                                        required
                                        value={formData.location}
                                        onChange={handleChange}
                                    />
                                    <label htmlFor="location">Location</label>
                                </div>
                                {/* <button type="button" className="btn btn-outline" onClick={getCurrentLocation} style={{ marginTop: '0.5rem', fontSize: '0.875rem' }}>Use Current Location</button> */}
                                {errors.location && <span className="error">{errors.location}</span>}
                            </div>
                            <div className="form-group">
                                <div className="form-floating">
                                    <textarea
                                        id="requirement"
                                        rows="4"
                                        placeholder="Tell us about your requirements..."
                                        required
                                        value={formData.requirement}
                                        onChange={handleChange}
                                    ></textarea>
                                    <label htmlFor="requirement">Tell us about your requirements...</label>
                                </div>
                                {errors.requirement && <span className="error">{errors.requirement}</span>}
                            </div>
                            <button type="submit" className="btn btn-primary btn-full">Send Message</button>
                        </form>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Contact;
