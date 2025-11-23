import { motion } from 'framer-motion';

const Projects = () => {
  const projects = [
    {
      name: 'Smart Dashboard App',
      description: 'An intuitive business dashboard that consolidates real-time data for smarter decisions.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
    },
    {
      name: 'E-Commerce Platform',
      description: 'A scalable online store with a sleek interface and seamless shopping experience.',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop',
    },
    {
      name: 'AI-Powered Analytics Tool',
      description: 'Harnessing AI to provide actionable insights for modern businesses.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
    },
    {
      name: 'Enterprise Management System',
      description: 'A comprehensive solution for managing business operations efficiently.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
    },
    {
      name: 'Mobile Banking App',
      description: 'Secure and user-friendly mobile banking solution with advanced features.',
      image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&h=600&fit=crop',
    },
    {
      name: 'Cloud Infrastructure Platform',
      description: 'Scalable cloud solutions designed for modern enterprise needs.',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=600&fit=crop',
    },
  ];

  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-deep-black mb-4">
            Latest Projects
          </h2>
          <p className="text-xl text-deep-black/70 max-w-2xl mx-auto">
            A selection of our most recent work showcasing innovation, quality, and professionalism.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="bg-white border border-deep-black/10 rounded-lg overflow-hidden hover:border-electric-blue/50 transition-all duration-300 hover:shadow-xl"
            >
              <div className="h-48 bg-deep-black/5 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-deep-black mb-2">
                  {project.name}
                </h3>
                <p className="text-deep-black/70 mb-4 leading-relaxed">
                  {project.description}
                </p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="text-electric-blue font-semibold hover:text-electric-blue/80 transition-colors duration-300"
                >
                  View Project →
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

