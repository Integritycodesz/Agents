import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ArrowRight } from 'lucide-react';
import MagneticButton from './MagneticButton';

const Hero = () => {
    return (
        <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse" />
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
            </div>

            <div className="container mx-auto px-6 z-10">
                <div className="max-w-3xl mx-auto text-center">
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-accent font-medium mb-4 tracking-wide uppercase text-sm"
                    >
                        Hello, I'm
                    </motion.p>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="text-5xl md:text-7xl font-bold font-heading text-white mb-6 leading-tight"
                    >
                        Abhishek<span className="text-accent">.</span>
                        <br />
                        <span className="text-slate-400 text-3xl md:text-5xl font-normal">Full Stack Developer</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="text-slate-400 text-lg md:text-xl mb-10 max-w-2xl mx-auto leading-relaxed"
                    >
                        I build accessible, pixel-perfect, and performant web experiences.
                        Passionate about creating modern digital solutions.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="flex flex-col md:flex-row items-center justify-center gap-4"
                    >
                        <MagneticButton>
                            <a
                                href="#projects"
                                className="px-8 py-3 bg-accent text-white rounded-full font-medium hover:bg-accent-hover transition-all flex items-center gap-2 group"
                            >
                                View Projects
                                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                            </a>
                        </MagneticButton>
                        <MagneticButton>
                            <a
                                href="#contact"
                                className="px-8 py-3 border border-white/10 text-white rounded-full font-medium hover:bg-white/5 transition-all block"
                            >
                                Contact Me
                            </a>
                        </MagneticButton>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                        className="mt-16 flex items-center justify-center gap-6"
                    >
                        <a href="https://github.com/Integritycodesz" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors p-2 hover:bg-white/5 rounded-full">
                            <Github size={24} />
                        </a>
                        <a href="https://www.linkedin.com/in/abhishek-yadav-7582a3320/" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors p-2 hover:bg-white/5 rounded-full">
                            <Linkedin size={24} />
                        </a>
                        <a href="mailto:abhishekyadavapus@gmail.com" className="text-slate-400 hover:text-white transition-colors p-2 hover:bg-white/5 rounded-full">
                            <Mail size={24} />
                        </a>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
