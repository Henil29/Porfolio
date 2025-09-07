import React, { useState } from 'react';
import { Mail, Phone, MapPin, Linkedin } from 'lucide-react';
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const contactInfo = [
        {
            icon: Mail,
            label: "Email",
            value: "henil247138@gmail.com",
            href: "mailto:henil247138@gmail.com"
        },
        {
            icon: Phone,
            label: "Phone",
            value: "+91 81550 33777",
            href: "tel:+918155033777"
        },
        {
            icon: MapPin,
            label: "Location",
            value: "Ahmedabad, India",
            href: "https://maps.app.goo.gl/GfTugXTe1hQCN78v7"
        },
        {
            icon: Linkedin,
            label: "LinkedIn",
            value: "linkedin.com/in/henilpatel06",
            href: "https://www.linkedin.com/in/henilpatel06/",
        }
    ];

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Show loading toast
        const loadingToast = toast.loading('Sending message...');
        setIsSubmitting(true);
        try {
            const response = await fetch("http://localhost:5000/api/send", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (response.ok) {
                // Dismiss loading toast and show success
                toast.dismiss(loadingToast);
                toast.success('Message sent successfully!', {
                    duration: 4000,
                    position: 'top-center',
                });
                setIsSubmitting(false);
                // Reset form
                setFormData({ name: "", email: "", message: "" });
            } else {
                // Dismiss loading toast and show error
                toast.dismiss(loadingToast);
                toast.error(data.error || 'Failed to send message', {
                    duration: 4000,
                    position: 'top-center',
                });
                console.error("Error:", data.error);
            }
        } catch (error) {
            // Dismiss loading toast and show error
            toast.dismiss(loadingToast);
            toast.error('Network error. Please try again.', {
                duration: 4000,
                position: 'top-center',
            });
            console.error("Error sending mail:", error);
        }
    };

    gsap.registerPlugin(ScrollTrigger);

    useGSAP(() => {
        // Animate main heading
        gsap.fromTo(".contact-title",
            {
                y: 50,
                opacity: 0
            },
            {
                y: 0,
                opacity: 1,
                duration: 1,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: ".contact-section",
                    start: "top 85%",
                    toggleActions: "play none none reverse"
                }
            }
        );

        // Animate section headings
        gsap.fromTo(".section-heading",
            {
                y: 30,
                opacity: 0
            },
            {
                y: 0,
                opacity: 1,
                duration: 0.8,
                ease: "power2.out",
                stagger: 0.2,
                scrollTrigger: {
                    trigger: ".contact-content",
                    start: "top 80%",
                    toggleActions: "play none none reverse"
                }
            }
        );

        // Animate contact info items
        gsap.fromTo(".contact-item",
            {
                x: -50,
                opacity: 0
            },
            {
                x: 0,
                opacity: 1,
                duration: 0.6,
                ease: "power2.out",
                stagger: 0.1,
                scrollTrigger: {
                    trigger: ".contact-info",
                    start: "top 80%",
                    toggleActions: "play none none reverse"
                }
            }
        );

        // Animate form elements
        gsap.fromTo(".form-element",
            {
                y: 30,
                opacity: 0
            },
            {
                y: 0,
                opacity: 1,
                duration: 0.6,
                ease: "power2.out",
                stagger: 0.1,
                scrollTrigger: {
                    trigger: ".contact-form",
                    start: "top 80%",
                    toggleActions: "play none none reverse"
                }
            }
        );

        // Animate submit button
        gsap.fromTo(".submit-button",
            {
                scale: 0.8,
                opacity: 0
            },
            {
                scale: 1,
                opacity: 1,
                duration: 0.6,
                ease: "back.out(1.7)",
                delay: 0.5,
                scrollTrigger: {
                    trigger: ".contact-form",
                    start: "top 70%",
                    toggleActions: "play none none reverse"
                }
            }
        );

        // Add hover animations for contact items
        gsap.utils.toArray(".contact-item").forEach((item) => {
            const icon = item.querySelector(".contact-icon");

            item.addEventListener("mouseenter", () => {
                gsap.to(icon, {
                    scale: 1.1,
                    backgroundColor: "#374151",
                    duration: 0.3,
                    ease: "power2.out"
                });
                gsap.to(item, {
                    x: 10,
                    duration: 0.3,
                    ease: "power2.out"
                });
            });

            item.addEventListener("mouseleave", () => {
                gsap.to(icon, {
                    scale: 1,
                    backgroundColor: "#1F2937",
                    duration: 0.3,
                    ease: "power2.out"
                });
                gsap.to(item, {
                    x: 0,
                    duration: 0.3,
                    ease: "power2.out"
                });
            });
        });

        // Form input focus animations
        gsap.utils.toArray(".form-input").forEach((input) => {
            input.addEventListener("focus", () => {
                gsap.to(input, {
                    scale: 1.02,
                    borderColor: "#3B82F6",
                    duration: 0.3,
                    ease: "power2.out"
                });
            });

            input.addEventListener("blur", () => {
                gsap.to(input, {
                    scale: 1,
                    borderColor: "#374151",
                    duration: 0.3,
                    ease: "power2.out"
                });
            });
        });

    }, []);

    return (
        <div className="contact-section w-full px-4 sm:px-6 lg:px-8 py-16 bg-black text-white" id='contact'>
            {/* Toast Container */}
            <Toaster
                toastOptions={{
                    // Default options for all toasts
                    duration: 4000,
                    style: {
                        background: '#1F2937',
                        color: '#F9FAFB',
                        border: '1px solid #374151',
                    },
                    // Success toast styling
                    success: {
                        iconTheme: {
                            primary: '#10B981',
                            secondary: '#F9FAFB',
                        },
                    },
                    // Error toast styling
                    error: {
                        iconTheme: {
                            primary: '#EF4444',
                            secondary: '#F9FAFB',
                        },
                    },
                    // Loading toast styling
                    loading: {
                        iconTheme: {
                            primary: '#3B82F6',
                            secondary: '#F9FAFB',
                        },
                    },
                }}
            />

            <div className="max-w-6xl mx-auto">
                {/* Main Heading */}
                <h1 className="contact-title text-4xl font-bold text-center mb-16">
                    Contact Me
                </h1>

                {/* Contact Content */}
                <div className="contact-content grid grid-cols-1 lg:grid-cols-2 gap-16">
                    {/* Get In Touch Section */}
                    <div className="contact-info">
                        <h2 className="section-heading text-2xl font-semibold mb-8">
                            Get In Touch
                        </h2>

                        <div className="space-y-6">
                            {contactInfo.map((item, index) => {
                                const IconComponent = item.icon;
                                return (
                                    <div key={index} className="contact-item flex items-center gap-4 cursor-pointer">
                                        <div className="contact-icon w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center">
                                            <IconComponent className="w-5 h-5 text-gray-300" />
                                        </div>
                                        <div className="contact-details">
                                            <div className="text-sm text-gray-400 mb-1">
                                                {item.label}
                                            </div>
                                            <a
                                                href={item.href}
                                                className="text-white hover:text-blue-400 transition-colors duration-200"
                                                target={item.label === "LinkedIn" ? "_blank" : "Location" ? "_blank" : undefined}
                                                rel={item.label === "LinkedIn" ? "noopener noreferrer" : "Location" ? "noopener noreferrer" : undefined}
                                            >
                                                {item.value}
                                            </a>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    {/* Send Message Section */}
                    <div className="contact-form">
                        <h2 className="section-heading text-2xl font-semibold mb-8">
                            Send Me a Message
                        </h2>

                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <div className="form-element">
                                    <label className="block text-sm font-medium text-gray-300 mb-2">
                                        Name
                                    </label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleInputChange}
                                        placeholder="Your name"
                                        className="form-input w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200"
                                        required
                                    />
                                </div>

                                <div className="form-element">
                                    <label className="block text-sm font-medium text-gray-300 mb-2">
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        placeholder="Your email"
                                        className="form-input w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200"
                                        required
                                    />
                                </div>
                            </div>

                            <div className="form-element">
                                <label className="block text-sm font-medium text-gray-300 mb-2">
                                    Message
                                </label>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleInputChange}
                                    placeholder="Your message"
                                    rows={6}
                                    className="form-input w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-vertical transition-all duration-200"
                                    required
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className={`submit-button w-full font-semibold py-3 px-6 rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 flex items-center justify-center gap-2 ${isSubmitting
                                        ? 'bg-gray-400 text-gray-600 cursor-not-allowed'
                                        : 'bg-white text-black hover:bg-gray-100'
                                    }`}
                            >
                                {isSubmitting && (
                                    <div className="animate-spin rounded-full h-4 w-4 border-2 border-gray-600 border-t-transparent"></div>
                                )}
                                {isSubmitting ? 'Sending...' : 'Submit Message'}
                            </button>
                        </form>
                    </div>
                </div>

                {/* Footer */}
                <div className="text-center border-gray-800 footer">
                    <p className="text-gray-400 text-sm">
                        © 2025 Haque. All rights reserved.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Contact;