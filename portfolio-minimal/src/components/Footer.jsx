import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="py-8 bg-dark border-t border-white/5">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center"
            >
                <div className="mb-4 md:mb-0">
                    <p className="text-slate-500 text-sm">
                        © {new Date().getFullYear()} Abhishek. All rights reserved.
                    </p>
                </div>

                <div className="flex gap-6">
                    <a href="https://github.com/Integritycodesz" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-white transition-colors">
                        <Github size={20} />
                    </a>
                    <a href="https://www.linkedin.com/in/abhishek-yadav-7582a3320/" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-white transition-colors">
                        <Linkedin size={20} />
                    </a>
                    <a href="mailto:abhishekyadavapus@gmail.com" className="text-slate-500 hover:text-white transition-colors">
                        <Mail size={20} />
                    </a>
                </div>
            </motion.div>
        </footer>
    );
};

export default Footer;
