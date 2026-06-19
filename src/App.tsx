import Hero from './components/Hero';
import WorkshopDetails from './components/WorkshopDetails';
import LearningOutcomes from './components/LearningOutcomes';
import FAQ from './components/FAQ';
import RegistrationForm from './components/RegistrationForm';

function App() {
  return (
    <div className="min-h-screen relative overflow-hidden bg-slate-50">
      {/* Decorative background blobs */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full bg-brand-yellow/30 mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
        <div className="absolute top-[20%] right-[-10%] w-[400px] h-[400px] rounded-full bg-brand-pink/30 mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-[-20%] left-[20%] w-[600px] h-[600px] rounded-full bg-brand-orange/20 mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      <header className="bg-brand-orange text-white py-4 px-6 md:px-12 flex justify-between items-center sticky top-0 z-50 shadow-md">
        <div className="text-3xl font-black tracking-tight drop-shadow-sm flex items-center gap-2">
           <span className="text-white">Kid</span><span className="text-brand-yellow">rove</span>
        </div>
        <nav className="hidden md:flex gap-6 font-bold text-lg">
          <a href="#details" className="hover:text-brand-yellow transition-colors">Details</a>
          <a href="#outcomes" className="hover:text-brand-yellow transition-colors">What You'll Learn</a>
          <a href="#faq" className="hover:text-brand-yellow transition-colors">FAQ</a>
        </nav>
        <a href="#register" className="bg-white text-brand-orange px-6 py-2 rounded-full font-bold shadow-sm hover:shadow-md hover:scale-105 transition-all">
          Enroll Now
        </a>
      </header>

      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex flex-col gap-24">
        <Hero />
        <WorkshopDetails />
        <LearningOutcomes />
        <FAQ />
        <section id="register" className="scroll-mt-24">
          <RegistrationForm />
        </section>
      </main>

      <footer className="bg-brand-navy text-white py-12 text-center mt-24">
        <div className="text-2xl font-black mb-4">Kidrove</div>
        <p className="opacity-70 mb-8">Inspiring the next generation of creators.</p>
        <p className="opacity-50 text-sm">© 2026 Kidrove. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
