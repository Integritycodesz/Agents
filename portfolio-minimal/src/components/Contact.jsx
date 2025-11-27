import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, Send, Loader2, CheckCircle, AlertCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const formRef = useRef();
    const [formState, setFormState] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [status, setStatus] = useState('idle'); // idle, sending, success, error
    const [errorMessage, setErrorMessage] = useState('');

    const handleChange = (e) => {
        setFormState({
            ...formState,
            [e.target.id]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Simple validation
        if (!formState.name || !formState.email || !formState.message) {
            setStatus('error');
            setErrorMessage('Please fill in all required fields.');
            return;
        }

        setStatus('sending');
        setErrorMessage('');

        try {
            // REPLACE THESE WITH YOUR ACTUAL EMAILJS CREDENTIALS
            // You can get these from https://dashboard.emailjs.com/admin
            const SERVICE_ID = 'YOUR_SERVICE_ID';
            const TEMPLATE_ID = 'YOUR_TEMPLATE_ID';
            const PUBLIC_KEY = 'YOUR_PUBLIC_KEY';

            await emailjs.send(
                SERVICE_ID,
                TEMPLATE_ID,
                {
                    from_name: formState.name,
                    from_email: formState.email,
                    subject: formState.subject,
                    message: formState.message,
                    to_name: 'Abhishek',
                },
                PUBLIC_KEY
            );

            setStatus('success');
            setFormState({ name: '', email: '', subject: '', message: '' });

            // Reset success message after 5 seconds
            setTimeout(() => {
                setStatus('idle');
            }, 5000);

        } catch (error) {
            console.error('EmailJS Error:', error);
            setStatus('error');
            setErrorMessage('Failed to send message. Please try again later.');
        }
    };

    return (
        <section id="contact" className="py-20 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-1/2 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl -z-10" />

            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="mb-16 text-center"
                >
                    <h2 className="text-3xl md:text-4xl font-bold font-heading text-white mb-4">Get In Touch</h2>
                    <div className="w-20 h-1 bg-accent rounded-full mx-auto mb-8" />
                    <p className="text-slate-400 text-lg max-w-2xl mx-auto">
                        Have a project in mind or just want to say hi? I'd love to hear from you.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="space-y-8"
                    >
                        <div className="flex items-start gap-4">
                            <div className="w-12 h-12 bg-white/5 rounded-lg flex items-center justify-center shrink-0">
                                <Mail className="text-accent" size={24} />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-white mb-1">Email</h3>
                                <p className="text-slate-400">abhishekyadavapus@gmail.com</p>
                                <p className="text-slate-500 text-sm mt-1">Send me a message anytime!</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="w-12 h-12 bg-white/5 rounded-lg flex items-center justify-center shrink-0">
                                <MapPin className="text-accent" size={24} />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-white mb-1">Location</h3>
                                <p className="text-slate-400">Lucknow, India</p>
                                <p className="text-slate-500 text-sm mt-1">Open to remote work worldwide.</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="w-12 h-12 bg-white/5 rounded-lg flex items-center justify-center shrink-0">
                                <Phone className="text-accent" size={24} />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-white mb-1">Phone</h3>
                                <p className="text-slate-400">+91 89310 97990</p>
                                <p className="text-slate-500 text-sm mt-1">Mon-Fri from 9am to 6pm.</p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="bg-white/5 border border-white/10 p-8 rounded-2xl relative"
                    >
                        <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label htmlFor="name" className="text-sm font-medium text-slate-300">Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        value={formState.name}
                                        onChange={handleChange}
                                        className="w-full bg-dark border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-accent transition-colors"
                                        placeholder="John Doe"
                                        disabled={status === 'sending'}
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="email" className="text-sm font-medium text-slate-300">Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        value={formState.email}
                                        onChange={handleChange}
                                        className="w-full bg-dark border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-accent transition-colors"
                                        placeholder="john@example.com"
                                        disabled={status === 'sending'}
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="subject" className="text-sm font-medium text-slate-300">Subject</label>
                                <input
                                    type="text"
                                    id="subject"
                                    value={formState.subject}
                                    onChange={handleChange}
                                    className="w-full bg-dark border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-accent transition-colors"
                                    placeholder="Project Inquiry"
                                    disabled={status === 'sending'}
                                />
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="message" className="text-sm font-medium text-slate-300">Message</label>
                                <textarea
                                    id="message"
                                    rows="4"
                                    value={formState.message}
                                    onChange={handleChange}
                                    className="w-full bg-dark border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-accent transition-colors resize-none"
                                    placeholder="Tell me about your project..."
                                    disabled={status === 'sending'}
                                ></textarea>
                            </div>

                            {status === 'error' && (
                                <div className="flex items-center gap-2 text-red-400 text-sm bg-red-500/10 p-3 rounded-lg">
                                    <AlertCircle size={16} />
                                    {errorMessage}
                                </div>
                            )}

                            {status === 'success' && (
                                <div className="flex items-center gap-2 text-green-400 text-sm bg-green-500/10 p-3 rounded-lg">
                                    <CheckCircle size={16} />
                                    Message sent successfully!
                                </div>
                            )}

                            <button
                                type="submit"
                                disabled={status === 'sending'}
                                className="w-full bg-accent text-white font-medium py-3 rounded-lg hover:bg-accent-hover transition-colors flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {status === 'sending' ? (
                                    <>
                                        <Loader2 size={18} className="animate-spin" />
                                        Sending...
                                    </>
                                ) : (
                                    <>
                                        Send Message
                                        <Send size={18} />
                                    </>
                                )}
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
