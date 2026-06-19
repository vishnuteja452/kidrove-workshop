import { Calendar, Clock, MonitorPlay, Users, Banknote } from 'lucide-react';
import { motion } from 'framer-motion';

const details = [
  { icon: Users, label: 'Age Group', value: '8–14 Years', color: 'bg-brand-orange' },
  { icon: Clock, label: 'Duration', value: '4 Weeks', color: 'bg-brand-pink' },
  { icon: MonitorPlay, label: 'Mode', value: 'Online Interactive', color: 'bg-brand-blue' },
  { icon: Banknote, label: 'Fee', value: '₹2,999', color: 'bg-brand-green' },
  { icon: Calendar, label: 'Start Date', value: '15 July 2026', color: 'bg-brand-yellow', textColor: 'text-brand-navy' },
];

const WorkshopDetails = () => {
  return (
    <section id="details" className="pt-12 scroll-mt-24">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-black text-brand-navy mb-4 inline-block relative">
          Workshop Details
          <div className="absolute -bottom-2 left-0 w-full h-3 bg-brand-yellow -z-10 rounded-full"></div>
        </h2>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {details.map((detail, index) => {
          const Icon = detail.icon;
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="glass-card rounded-3xl p-6 flex flex-col items-center text-center border-2 border-brand-navy shadow-[4px_4px_0px_0px_rgba(7,59,76,1)] hover:shadow-[6px_6px_0px_0px_rgba(7,59,76,1)] transition-all"
            >
              <div className={`w-16 h-16 rounded-2xl ${detail.color} ${detail.textColor || 'text-white'} flex items-center justify-center mb-4 border-2 border-brand-navy transform rotate-3`}>
                <Icon size={32} strokeWidth={2.5} />
              </div>
              <p className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-1">{detail.label}</p>
              <p className="text-xl font-black text-brand-navy">{detail.value}</p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default WorkshopDetails;
