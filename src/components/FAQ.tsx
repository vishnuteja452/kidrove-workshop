import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: "Do kids need any prior coding experience?",
    answer: "Not at all! Our workshop is designed for complete beginners. We start with the absolute basics and guide them step-by-step in a fun, intuitive way."
  },
  {
    question: "What equipment is required for the online workshop?",
    answer: "A laptop or desktop computer with a stable internet connection, a webcam, and a microphone. We provide a digital simulator for robotics, so no physical hardware is needed to start!"
  },
  {
    question: "How interactive are the online sessions?",
    answer: "Extremely! We keep class sizes small (max 10 students). There are live Q&A sessions, collaborative group challenges, and interactive quizzes to ensure every child is engaged."
  }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="pt-12 scroll-mt-24">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-black text-brand-navy mb-4 inline-block relative">
          Got Questions?
          <div className="absolute -bottom-2 left-0 w-full h-3 bg-brand-pink -z-10 rounded-full"></div>
        </h2>
      </div>

      <div className="max-w-3xl mx-auto space-y-4">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;
          return (
            <div 
              key={index} 
              className={`border-2 border-brand-navy rounded-2xl overflow-hidden transition-all duration-300 ${isOpen ? 'bg-white shadow-[4px_4px_0px_0px_rgba(7,59,76,1)]' : 'bg-white/50 hover:bg-white'}`}
            >
              <button
                className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
                onClick={() => setOpenIndex(isOpen ? null : index)}
              >
                <span className="text-xl font-bold text-brand-navy pr-8">{faq.question}</span>
                <ChevronDown 
                  className={`flex-shrink-0 text-brand-orange transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} 
                  size={24} strokeWidth={3} 
                />
              </button>
              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 pb-5 text-slate-600 font-medium text-lg leading-relaxed border-t-2 border-slate-100 mt-2 pt-4">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default FAQ;
