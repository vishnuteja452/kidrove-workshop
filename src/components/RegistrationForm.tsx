import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { motion } from 'framer-motion';
import { CheckCircle2, Loader2 } from 'lucide-react';

const schema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters' }),
  email: z.string().email({ message: 'Please enter a valid email address' }),
  phone: z.string().min(10, { message: 'Phone number must be at least 10 digits' }),
});

type FormData = z.infer<typeof schema>;

const RegistrationForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    try {
      const response = await fetch('/api/enquiry', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setIsSuccess(true);
        reset();
      } else {
        console.error('Submission failed');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-brand-yellow rounded-[40px] p-8 md:p-12 lg:p-16 relative overflow-hidden shadow-2xl border-4 border-brand-navy">
      {/* Decorative */}
      <div className="absolute top-[-50px] right-[-50px] w-48 h-48 bg-white/30 rounded-full blur-2xl pointer-events-none"></div>
      
      <div className="max-w-xl mx-auto relative z-10">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-black text-brand-navy mb-4">Join the Adventure!</h2>
          <p className="text-xl text-brand-navy/80 font-medium">Secure your child's spot in our upcoming summer workshop.</p>
        </div>

        {isSuccess ? (
          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-white rounded-3xl p-8 text-center border-4 border-brand-green shadow-[8px_8px_0px_0px_#06D6A0]"
          >
            <div className="w-20 h-20 bg-brand-green rounded-full flex items-center justify-center mx-auto mb-6 text-white">
              <CheckCircle2 size={48} strokeWidth={3} />
            </div>
            <h3 className="text-3xl font-black text-brand-navy mb-2">Woohoo!</h3>
            <p className="text-lg text-slate-600 mb-6">We've received your registration. Keep an eye on your email for the next steps!</p>
            <button 
              onClick={() => setIsSuccess(false)}
              className="text-brand-orange font-bold hover:underline"
            >
              Register another child
            </button>
          </motion.div>
        ) : (
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-brand-navy font-bold text-lg mb-2">Parent / Guardian Name</label>
              <input
                id="name"
                {...register('name')}
                className={`w-full px-6 py-4 rounded-2xl border-2 outline-none transition-colors text-lg font-medium shadow-sm focus:shadow-[4px_4px_0px_0px_rgba(7,59,76,1)] ${errors.name ? 'border-red-500 bg-red-50' : 'border-brand-navy bg-white focus:border-brand-pink'}`}
                placeholder="e.g. Jane Doe"
              />
              {errors.name && <p className="text-red-600 font-bold mt-2 text-sm">{errors.name.message}</p>}
            </div>

            <div>
              <label htmlFor="email" className="block text-brand-navy font-bold text-lg mb-2">Email Address</label>
              <input
                id="email"
                type="email"
                {...register('email')}
                className={`w-full px-6 py-4 rounded-2xl border-2 outline-none transition-colors text-lg font-medium shadow-sm focus:shadow-[4px_4px_0px_0px_rgba(7,59,76,1)] ${errors.email ? 'border-red-500 bg-red-50' : 'border-brand-navy bg-white focus:border-brand-pink'}`}
                placeholder="jane@example.com"
              />
              {errors.email && <p className="text-red-600 font-bold mt-2 text-sm">{errors.email.message}</p>}
            </div>

            <div>
              <label htmlFor="phone" className="block text-brand-navy font-bold text-lg mb-2">Phone Number</label>
              <input
                id="phone"
                type="tel"
                {...register('phone')}
                className={`w-full px-6 py-4 rounded-2xl border-2 outline-none transition-colors text-lg font-medium shadow-sm focus:shadow-[4px_4px_0px_0px_rgba(7,59,76,1)] ${errors.phone ? 'border-red-500 bg-red-50' : 'border-brand-navy bg-white focus:border-brand-pink'}`}
                placeholder="+91 98765 43210"
              />
              {errors.phone && <p className="text-red-600 font-bold mt-2 text-sm">{errors.phone.message}</p>}
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-brand-orange text-white text-xl font-black py-5 rounded-2xl border-4 border-brand-navy shadow-[6px_6px_0px_0px_rgba(7,59,76,1)] hover:shadow-[2px_2px_0px_0px_rgba(7,59,76,1)] hover:translate-y-1 hover:translate-x-1 transition-all flex justify-center items-center gap-3 disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="animate-spin" size={28} />
                  Sending...
                </>
              ) : (
                'Submit Registration'
              )}
            </motion.button>
          </form>
        )}
      </div>
    </div>
  );
};

export default RegistrationForm;
