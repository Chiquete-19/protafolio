// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion"

const volverInicio = () => {
    window.location.href = "index.html"; // Recarga la página en la raíz
};

export default function About() {
    return (
        <section className="relative w-screen min-h-screen h-auto lg:h-screen text-white overflow-y-auto lg:overflow-hidden flex items-center justify-center py-8 lg:py-0">
            {/* Background glow effect */}
            <div className={`absolute w-[700px] h-[1000px] bg-blue-600/20 rounded-full blur-3xl -top-32 -right-32 -center opacity-40`}></div>

            <div className="relative w-full h-full lg:h-full px-6 flex items-center justify-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="group relative rounded-3xl overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 border border-slate-700/50 shadow-2xl hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-300 w-[95%] h-auto lg:h-[95%]"
                >
                    {/* Efecto gradiente en hover */}
                    <div className={`absolute inset-0 bg-gradient-to-br from-blue-600 to-cyan-600 opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none`}></div>

                    {/* Grid layout: Contenido izquierda, Imagen derecha */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center h-auto lg:h-full">
                        {/* Sección Izquierda: Título y Contenido */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            viewport={{ once: true }}
                            className="p-8 lg:p-16 flex flex-col justify-center h-auto lg:h-full order-last lg:order-first"
                        >
                            {/* Título */}
                            <div className="mb-6">
                                <h2 className={`text-5xl lg:text-6xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent`}>
                                    Acerca de mi
                                </h2>
                            </div>

                            {/* Divisor visual */}
                            <div className={`w-16 h-1 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full mb-8`}></div>

                            {/* Contenido */}
                            <div className="space-y-4">
                                <p className="text-slate-300 text-lg leading-relaxed">
                                    Desarrollador backend con conocimientos en Spring Boot y APIs REST, enfocado en la implementación de lógica de negocio, autenticación con JWT y manejo de bases de datos relacionales.

                                    He participado en el desarrollo y mejora de aplicaciones, colaborando en nuevas funcionalidades y solución de errores. Cuento además con nociones de frontend en React, lo que me permite entender el flujo completo de una aplicación.

                                    Me distingo por mi capacidad de aprendizaje, pensamiento analítico y enfoque en la resolución de problemas.                                </p>
                            </div>

                            {/* Botones opcionales */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.4 }}
                                viewport={{ once: true }}
                                className="flex gap-4 mt-8 justify-center"
                            >
                                <button onClick={volverInicio} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full center">Regresar</button>
                            
                            </motion.div>
                        </motion.div>

                        {/* Sección Derecha: Imagen */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            viewport={{ once: true }}
                            className="relative h-64 lg:h-full overflow-hidden order-first lg:order-last"
                        >
                            {/* Efecto glow alrededor de la imagen */}
                            <div className={`absolute inset-0 bg-gradient-to-br from-blue-600 to-cyan-600 opacity-20 blur-2xl group-hover:opacity-30 transition-opacity`}></div>

                            <motion.img
                                whileHover={{ scale: 1.05 }}
                                transition={{ duration: 0.3 }}
                                src={"../Mia.png"}
                                alt="Imagen mia"
                                className="relative w-4/5 lg:w-full h-auto lg:h-full lg:object-cover mx-auto"
                            />

                            {/* Overlay gradiente sutil */}
                            <div className={`absolute inset-0 bg-gradient-to-br from-blue-600 to-cyan-600 opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none`}></div>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}