import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Calendar, Clock, Tag } from 'lucide-react';

const blogPosts = [
    {
        id: 1,
        title: 'The Future of AI in Healthcare',
        date: 'Nov 15, 2025',
        readTime: '5 min read',
        excerpt: 'Exploring how artificial intelligence is transforming patient care, diagnosis, and treatment planning.',
        tags: ['AI', 'Healthcare', 'Tech'],
        link: '#'
    },
    {
        id: 2,
        title: 'Building Scalable Web Apps with React',
        date: 'Oct 28, 2025',
        readTime: '8 min read',
        excerpt: 'Best practices for structuring large-scale React applications for performance and maintainability.',
        tags: ['React', 'Web Dev', 'Performance'],
        link: '#'
    },
    {
        id: 3,
        title: 'Minimalism in UI Design',
        date: 'Oct 10, 2025',
        readTime: '4 min read',
        excerpt: 'Why less is often more when it comes to user interface design and user experience.',
        tags: ['Design', 'UI/UX', 'Minimalism'],
        link: '#'
    }
];

const Blog = () => {
    return (
        <section id="blog" className="py-20 bg-dark-100/50">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold font-heading text-white mb-4">Latest Articles</h2>
                    <div className="w-20 h-1 bg-accent rounded-full mb-8" />
                    <p className="text-slate-400 text-lg max-w-3xl">
                        Thoughts on technology, design, and the future of the web.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {blogPosts.map((post, index) => (
                        <motion.article
                            key={post.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group bg-dark border border-white/5 rounded-2xl p-6 hover:border-accent/30 transition-all hover:-translate-y-2 hover:shadow-lg hover:shadow-accent/5 flex flex-col h-full"
                        >
                            <div className="flex items-center gap-4 text-xs text-slate-500 mb-4">
                                <div className="flex items-center gap-1">
                                    <Calendar size={14} />
                                    <span>{post.date}</span>
                                </div>
                                <div className="flex items-center gap-1">
                                    <Clock size={14} />
                                    <span>{post.readTime}</span>
                                </div>
                            </div>

                            <h3 className="text-xl font-bold text-white mb-3 group-hover:text-accent transition-colors">
                                {post.title}
                            </h3>

                            <p className="text-slate-400 text-sm mb-6 flex-grow">
                                {post.excerpt}
                            </p>

                            <div className="flex items-center justify-between mt-auto">
                                <div className="flex gap-2">
                                    {post.tags.map(tag => (
                                        <span key={tag} className="text-xs px-2 py-1 bg-white/5 rounded-full text-slate-400 border border-white/5">
                                            #{tag}
                                        </span>
                                    ))}
                                </div>
                                <a href={post.link} className="text-accent hover:text-white transition-colors">
                                    <ArrowRight size={20} />
                                </a>
                            </div>
                        </motion.article>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Blog;
