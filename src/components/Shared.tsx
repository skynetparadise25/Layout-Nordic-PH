import { useNavigate } from 'react-router-dom';
import { Layout, Maximize, Ruler, CheckCircle2, ChevronRight, ArrowRight, Star, Quote, Building2, Hotel, Map, PencilRuler } from 'lucide-react';
import { motion } from 'motion/react';

export const Header = () => {
  const navigate = useNavigate();
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-nordic-gray-light">
      <div className="container-custom py-5 flex justify-between items-center">
        <div className="flex items-center gap-2 cursor-pointer" onClick={() => navigate('/')}>
          <div className="w-10 h-10 bg-nordic-black flex items-center justify-center text-white">
            <span className="font-display font-bold text-xl">LN</span>
          </div>
          <div className="hidden sm:block">
            <span className="font-display font-bold tracking-tighter text-lg leading-none block">LAYOUT NORDIC</span>
            <span className="text-[10px] tracking-[0.2em] font-medium text-nordic-gray uppercase">Philippines</span>
          </div>
        </div>
        
        <nav className="hidden md:flex items-center gap-10 font-medium text-sm text-nordic-gray-dark">
          <button onClick={() => navigate('/')} className="hover:text-nordic-black transition-colors">Home</button>
          <button onClick={() => navigate('/services')} className="hover:text-nordic-black transition-colors">Services</button>
          <button onClick={() => navigate('/portfolio')} className="hover:text-nordic-black transition-colors">Portfolio</button>
          <button onClick={() => navigate('/about')} className="hover:text-nordic-black transition-colors">About</button>
        </nav>

        <button onClick={() => navigate('/contact')} className="nordic-button-primary py-2.5 px-6 text-sm">
          Book Consultation
        </button>
      </div>
    </header>
  );
};

export const Footer = () => {
  const navigate = useNavigate();
  return (
    <footer className="bg-nordic-black text-white pt-24 pb-12">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-12 h-12 bg-white flex items-center justify-center text-nordic-black">
                <span className="font-display font-bold text-2xl">LN</span>
              </div>
              <div>
                <span className="font-display font-bold tracking-tighter text-2xl leading-none block">LAYOUT NORDIC</span>
                <span className="text-xs tracking-[0.3em] font-medium text-nordic-accent uppercase">Philippines</span>
              </div>
            </div>
            <p className="text-nordic-accent max-w-md mb-8 leading-relaxed">
              Premium space efficiency and architectural visualization solutions for developers and business owners seeking to maximize ROI and minimize construction errors.
            </p>
          </div>
          
          <div>
            <h4 className="font-display font-bold text-lg mb-6 tracking-tight">Navigation</h4>
            <ul className="space-y-4 text-nordic-accent">
              <li><button onClick={() => navigate('/')} className="hover:text-white transition-colors">Home</button></li>
              <li><button onClick={() => navigate('/services')} className="hover:text-white transition-colors">Services</button></li>
              <li><button onClick={() => navigate('/portfolio')} className="hover:text-white transition-colors">Portfolio</button></li>
              <li><button onClick={() => navigate('/about')} className="hover:text-white transition-colors">About</button></li>
              <li><button onClick={() => navigate('/contact')} className="hover:text-white transition-colors">Contact</button></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-display font-bold text-lg mb-6 tracking-tight">Contact</h4>
            <ul className="space-y-4 text-nordic-accent">
              <li>Manila, Philippines</li>
              <li>hello@layoutnordic.ph</li>
              <li>+63 917 123 4567</li>
              <li className="pt-4 flex gap-4">
                <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 cursor-pointer">In</div>
                <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 cursor-pointer">Ig</div>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-nordic-gray">
          <p>© 2024 Layout Nordic Inc. PH. All rights reserved.</p>
          <div className="flex gap-8">
            <span className="hover:text-white cursor-pointer transition-colors">Privacy Policy</span>
            <span className="hover:text-white cursor-pointer transition-colors">Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export const SectionTitle = ({ title, subtitle, centered = false }: { title: string, subtitle: string, centered?: boolean }) => (
  <div className={`mb-16 ${centered ? 'text-center' : ''}`}>
    <span className="text-nordic-gray font-medium tracking-[0.2em] uppercase text-xs mb-4 block">{subtitle}</span>
    <h2 className="text-3xl md:text-5xl font-display font-bold">{title}</h2>
  </div>
);

export const ServiceCard = ({ icon: Icon, title, description, features, onClick }: { icon: any, title: string, description: string, features: string[], onClick: () => void }) => (
  <div className="nordic-card group cursor-pointer flex flex-col h-full" onClick={onClick}>
    <div className="mb-8 w-14 h-14 bg-nordic-gray-light flex items-center justify-center group-hover:bg-nordic-black group-hover:text-white transition-colors">
      <Icon size={24} />
    </div>
    <h3 className="text-2xl font-display font-bold mb-4">{title}</h3>
    <p className="text-nordic-gray mb-8 leading-relaxed flex-grow">{description}</p>
    <ul className="space-y-3 mb-10">
      {features.map((f, i) => (
        <li key={i} className="flex items-start gap-3 text-sm font-medium">
          <CheckCircle2 size={16} className="text-nordic-black shrink-0 mt-0.5" />
          <span>{f}</span>
        </li>
      ))}
    </ul>
    <div className="inline-flex items-center gap-2 font-bold text-sm group-hover:translate-x-2 transition-transform">
      Learn More <ArrowRight size={16} />
    </div>
  </div>
);

export const TestimonialCard = ({ quote, author, role, company }: { quote: string, author: string, role: string, company: string }) => (
  <div className="p-10 bg-nordic-gray-light border border-transparent">
    <div className="mb-6 flex gap-1">
      {[1,2,3,4,5].map(i => <Star key={i} size={16} fill="currentColor" className="text-nordic-black" />)}
    </div>
    <p className="text-xl italic font-display leading-relaxed mb-8">"{quote}"</p>
    <div>
      <p className="font-bold text-nordic-black">{author}</p>
      <p className="text-sm text-nordic-gray">{role}, {company}</p>
    </div>
  </div>
);
