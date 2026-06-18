import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="flex flex-col lg:flex-row items-center justify-between gap-12 mt-8 lg:mt-16">
      <div className="flex-1 text-center lg:text-left z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-block bg-brand-yellow text-brand-navy font-bold px-4 py-1.5 rounded-full mb-6 border-2 border-brand-navy shadow-[4px_4px_0px_0px_rgba(7,59,76,1)] transform -rotate-2">
            🚀 Summer 2026 Special
          </div>
          <h1 className="text-5xl lg:text-7xl font-black text-brand-navy leading-tight mb-6">
            AI & Robotics <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange to-brand-pink">
              Summer Workshop
            </span>
          </h1>
          <p className="text-xl text-slate-600 mb-10 max-w-xl mx-auto lg:mx-0 font-medium leading-relaxed">
            Unleash your child's inner inventor! Join our 4-week interactive online adventure where kids build robots and explore the magic of AI.
          </p>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block"
          >
            <a href="#register" className="bg-brand-orange text-white text-xl font-black px-10 py-5 rounded-2xl border-4 border-brand-navy shadow-[6px_6px_0px_0px_rgba(7,59,76,1)] hover:shadow-[2px_2px_0px_0px_rgba(7,59,76,1)] hover:translate-y-1 hover:translate-x-1 transition-all inline-flex items-center gap-3">
              Enroll Now for ₹2,999
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </motion.div>
        </motion.div>
      </div>
      
      <div className="flex-1 relative w-full max-w-lg mx-auto lg:max-w-none">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative"
        >
          {/* Fun decorative background shape behind image */}
          <div className="absolute inset-0 bg-brand-pink rounded-[100px] transform rotate-6 scale-105 border-4 border-brand-navy"></div>
          
          <img 
            src="https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
            alt="Kids learning robotics" 
            className="relative z-10 w-full h-[400px] object-cover rounded-[80px] border-4 border-brand-navy shadow-[8px_8px_0px_0px_rgba(7,59,76,1)]"
          />

          {/* Floating elements */}
          <motion.div 
            animate={{ y: [-10, 10, -10], rotate: [0, 5, -5, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-8 -right-8 bg-brand-yellow w-24 h-24 rounded-full border-4 border-brand-navy z-20 flex items-center justify-center text-4xl shadow-[4px_4px_0px_0px_rgba(7,59,76,1)]"
          >
            🤖
          </motion.div>
          <motion.div 
            animate={{ y: [10, -10, 10], rotate: [0, -10, 10, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -bottom-6 -left-6 bg-brand-green w-20 h-20 rounded-2xl border-4 border-brand-navy z-20 flex items-center justify-center text-3xl shadow-[4px_4px_0px_0px_rgba(7,59,76,1)] transform -rotate-12"
          >
            💡
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
