import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

const outcomes = [
  "Build and program your very first smart robot from scratch.",
  "Understand the basics of Artificial Intelligence in a fun, visual way.",
  "Learn block-based coding to control robotic movements and sensors.",
  "Develop problem-solving skills through exciting daily challenges.",
  "Earn a 'Junior Innovator' certificate upon successful completion!"
];

const LearningOutcomes = () => {
  return (
    <section id="outcomes" className="pt-12 scroll-mt-24">
      <div className="bg-brand-navy text-white rounded-[40px] p-8 md:p-12 lg:p-16 relative overflow-hidden shadow-2xl">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-brand-pink rounded-full mix-blend-screen filter blur-[80px] opacity-50"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-blue rounded-full mix-blend-screen filter blur-[80px] opacity-50"></div>

        <div className="relative z-10 flex flex-col lg:flex-row gap-12 items-center">
          <div className="flex-1">
            <h2 className="text-4xl font-black mb-8">What You'll Learn</h2>
            <ul className="space-y-6">
              {outcomes.map((outcome, index) => (
                <motion.li 
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-4 text-xl font-medium"
                >
                  <div className="bg-brand-yellow rounded-full p-1 mt-1 flex-shrink-0 border-2 border-transparent">
                    <CheckCircle2 className="text-brand-navy" size={24} />
                  </div>
                  <span className="leading-relaxed">{outcome}</span>
                </motion.li>
              ))}
            </ul>
          </div>
          <div className="flex-1 relative w-full">
             <div className="absolute inset-0 bg-brand-orange rounded-[40px] transform -rotate-3 scale-105 border-4 border-brand-yellow hidden lg:block"></div>
             <img 
               src="https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
               alt="Kids collaborating" 
               className="relative z-10 w-full h-[350px] object-cover rounded-[40px] border-4 border-white hidden lg:block"
             />
          </div>
        </div>
      </div>
    </section>
  );
};

export default LearningOutcomes;
