import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-deep-black mb-6">
            About PrimexTech
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <p className="text-lg text-deep-black/80 leading-relaxed">
              PrimexTech is a forward-thinking technology agency dedicated to delivering innovative solutions with a focus on quality, precision, and user experience.
            </p>
            <p className="text-lg text-deep-black/80 leading-relaxed">
              Our mission is to empower businesses with technology that drives growth and efficiency.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-deep-black/5 rounded-lg p-8 h-64 flex items-center justify-center"
          >
            <div className="text-center">
              <div className="w-24 h-24 mx-auto mb-4 bg-electric-blue/10 rounded-lg flex items-center justify-center">
                <svg className="w-12 h-12 text-electric-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <p className="text-deep-black/60 text-sm">Innovation & Excellence</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;

