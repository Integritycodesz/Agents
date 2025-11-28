import React from 'react';
import { motion } from 'framer-motion';
import { Code, Database, Layout, Server, Smartphone, Terminal } from 'lucide-react';

const skills = [
    { name: 'Frontend Development', icon: Layout, desc: 'React, Tailwind, Framer Motion' },
    { name: 'Backend Development', icon: Server, desc: 'Node.js, Express, Python' },
    { name: 'Database Management', icon: Database, desc: 'PostgreSQL, MongoDB, Redis' },
    { name: 'Mobile App Dev', icon: Smartphone, desc: 'React Native, Flutter' },
    { name: 'System Architecture', icon: Terminal, desc: 'Docker, AWS, CI/CD' },
    { name: 'Clean Code', icon: Code, desc: 'TypeScript, Testing, Linting' },
];

const About = () => {
    return (
        <section id="about" className="py-20 relative">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold font-heading text-white mb-4">About Me</h2>
                    <div className="w-20 h-1 bg-accent rounded-full mb-8" />
                    <p className="text-slate-400 text-lg max-w-3xl leading-relaxed">
                        I'm a passionate developer with a knack for building scalable and user-friendly applications.
                        With a strong foundation in both frontend and backend technologies, I enjoy solving complex problems
                        and turning ideas into reality. I believe in writing clean, maintainable code and staying up-to-date
                        with the latest industry trends.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {skills.map((skill, index) => (
                        <motion.div
                            key={skill.name}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-white/5 border border-white/10 p-6 rounded-2xl hover:bg-white/10 transition-colors group"
                        >
                            <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                                <skill.icon className="text-accent" size={24} />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2">{skill.name}</h3>
                            <p className="text-slate-400 text-sm">{skill.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default About;
