// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion"

const container = {
    hidden: {},
    show: {
        transition: {
            staggerChildren: 0.2
        }
    }
}

const item = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0 }
}

export default function Hero() {
    return (
        <section className="relative min-h-screen flex items-center justify-center text-white overflow-hidden px-6">
            {/* Glow Background */}
            <div className="absolute w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[120px] -top-20 -left-20"></div>
            <div className="absolute w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[120px] bottom-0 right-0"></div>

            <motion.div
                variants={container}
                initial="hidden"
                animate="show"
                className="relative text-center max-w-3xl"
            >
                <motion.h1
                    variants={item}
                    className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 bg-clip-text text-transparent animate-gradient"
                >
                    Fernando Chiquete Velazquez
                </motion.h1>

                <motion.h2
                    variants={item}
                    className="mt-6 text-xl md:text-2xl text-slate-400"
                >
                    Full Stack Developer
                </motion.h2>

                <motion.p
                    variants={item}
                    className="mt-6 text-slate-500 leading-relaxed"
                >
                    Desarrollo soluciones escalables con enfoque en backend seguro,
                    arquitectura limpia y experiencias modernas en frontend.
                </motion.p>

                <motion.div
                    variants={item}
                    className="mt-10 flex justify-center gap-6"
                >
                     <a className="px-6 py-3 bg-blue-600 rounded-xl hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-blue-500/50 hover:-translate-y-1"
                      href="about">
                     Acerca de mi
                     </a>


                    <button className="px-6 py-3 border border-slate-600 rounded-xl hover:border-blue-500 hover:text-blue-500 transition-all duration-300 hover:-translate-y-1">
                        Contacto
                    </button>
                </motion.div>
            </motion.div>
        </section>
    )
}