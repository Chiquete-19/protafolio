import { motion } from "framer-motion"
import projects from "../../data/projects"

const container = {
    hidden: {},
    show: {
        transition: { staggerChildren: 0.2 }
    }
}

const card = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0 }
}

export default function Projects() {
    return (
        <section id="Projects" className="relative py-28 text-white px-6 overflow-hidden">
            {/* Background glow */}
            <div className="absolute w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[140px] -top-40 -right-40"></div>

            <div className="relative max-w-6xl mx-auto">
                <h2 className="text-4xl font-bold text-center mb-20 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                    Proyectos Destacados
                </h2>

                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="grid md:grid-cols-2 gap-12"
                >
                    {projects.map((project) => (
                        <motion.div
                            key={project.id}
                            variants={card}
                            whileHover={{ y: -8 }}
                            className="group relative rounded-2xl overflow-hidden bg-slate-900 border border-slate-800 shadow-xl"
                        >

                            {/* Contenido */}
                            <div className="p-8">
                                <h3 className="text-2xl font-semibold mb-4 group-hover:text-blue-400 transition">
                                    {project.title}
                                </h3>

                                <p className="text-slate-400 mb-6 leading-relaxed">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-2 mb-6">
                                    {project.technologies.map((tech, index) => (
                                        <span
                                            key={index}
                                            className="px-3 py-1 text-xs bg-slate-800 border border-slate-700 rounded-full text-slate-300"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                <div className="flex gap-6">
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        className="text-blue-400 hover:text-blue-500 transition"
                                    >
                                        GitHub →
                                    </a>

                                    <a
                                        href={project.demo}
                                        target="_blank"
                                        className="text-purple-400 hover:text-purple-500 transition"
                                    >
                                        Demo →
                                    </a>
                                </div>
                            </div>

                            {/* Glow Hover */}
                            <div className="absolute inset-0 rounded-2xl border border-transparent group-hover:border-blue-500/40 transition duration-500 pointer-events-none"></div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}