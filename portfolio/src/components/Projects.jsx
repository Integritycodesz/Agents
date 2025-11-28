import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
    {
        title: 'TABU-AI',
        category: 'AI Application',
        image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1000&auto=format&fit=crop', // Placeholder
        description: 'An advanced AI-powered application for natural language processing and text generation.',
        tech: ['React', 'Python', 'OpenAI API'],
        links: { demo: '#', github: '#' }
    },
    {
        title: 'Pro Tournament',
        category: 'Gaming Platform',
        image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=1000&auto=format&fit=crop', // Gaming related placeholder
        description: 'A comprehensive platform for organizing and managing gaming tournaments with real-time brackets and player stats.',
        tech: ['React', 'Tailwind CSS', 'Node.js'],
        links: { demo: '#', github: '#' }
    },
    {
        title: 'Medichat',
        category: 'Healthcare AI',
        image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=1000&auto=format&fit=crop', // Medical placeholder
        description: 'An AI-powered chatbot designed to assist with medical queries and provide preliminary health guidance.',
        tech: ['Python', 'NLP', 'Flask'],
        links: { demo: '#', github: '#' }
    }
];

const Projects = () => {
    return (
        <section id="projects" className="py-20 bg-dark-100/50">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold font-heading text-white mb-4">Featured Projects</h2>
                    <div className="w-20 h-1 bg-accent rounded-full mb-8" />
                    <p className="text-slate-400 text-lg max-w-3xl">
                        Here are some of the projects I've worked on. Each one presented unique challenges and learning opportunities.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group relative bg-dark border border-white/5 rounded-2xl overflow-hidden hover:border-accent/30 transition-all hover:-translate-y-2 hover:shadow-2xl hover:shadow-accent/10"
                        >
                            {/* Image Overlay */}
                            <div className="relative h-48 overflow-hidden">
                                <div className="absolute inset-0 bg-dark/20 group-hover:bg-transparent transition-colors z-10" />
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                                />
                            </div>

                            <div className="p-6">
                                <div className="flex justify-between items-start mb-4">
                                    <div>
                                        <span className="text-accent text-xs font-medium uppercase tracking-wider">{project.category}</span>
                                        <h3 className="text-xl font-bold text-white mt-1">{project.title}</h3>
                                    </div>
                                    <div className="flex gap-3">
                                        <a href={project.links.github} className="text-slate-400 hover:text-white transition-colors">
                                            <Github size={20} />
                                        </a>
                                        <a href={project.links.demo} className="text-slate-400 hover:text-white transition-colors">
                                            <ExternalLink size={20} />
                                        </a>
                                    </div>
                                </div>

                                <p className="text-slate-400 text-sm mb-6 line-clamp-3">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-2">
                                    {project.tech.map((t) => (
                                        <span key={t} className="px-3 py-1 bg-white/5 text-slate-300 text-xs rounded-full border border-white/5">
                                            {t}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
