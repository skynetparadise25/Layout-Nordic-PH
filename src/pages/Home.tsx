import { useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowRight, Maximize, Ruler, PencilRuler, Building2, Map, CheckCircle2, ChevronRight } from 'lucide-react';
import { SectionTitle, ServiceCard, TestimonialCard } from '../components/Shared';

export default function Home() {
  const navigate = useNavigate();
  
  const services = [
    {
      icon: Maximize,
      title: "Space Efficiency Planning",
      description: "We rethink your floor plan to maximize every square meter, ensuring zero wasted space and optimized user flow.",
      features: ["Traffic flow analysis", "Commercial zoning", "Adaptive reuse plans"],
      image: "https://images.unsplash.com/photo-1503387762-592dea58ef23?auto=format&fit=crop&q=80&w=800&h=800"
    },
    {
      icon: PencilRuler,
      title: "Photorealistic 3D Rendering",
      description: "High-fidelity visualizations that allow you to see the finished project before a single block is laid.",
      features: ["Material accuracy", "Lighting simulation", "Panoramic views"],
      image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=800&h=800"
    },
    {
      icon: Ruler,
      title: "Technical Layout Design",
      description: "Precise blueprints and technical drawings for contractors, ensuring flawless execution of design concepts.",
      features: ["Furniture schedules", "Lighting plans", "Construction detailing"],
      image: "https://images.unsplash.com/photo-1541888946425-d81bb19480c5?auto=format&fit=crop&q=80&w=800&h=800"
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="min-h-[90vh] flex items-center relative overflow-hidden bg-nordic-white">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80&w=1920&h=1080" 
            alt="Minimalist Architecture" 
            className="w-full h-full object-cover opacity-20 grayscale transition-all duration-700 hover:opacity-30"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="container-custom relative z-10">
          <div className="max-w-3xl">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <span className="text-nordic-gray font-medium tracking-[0.3em] uppercase text-xs mb-6 block">Premium Architecture Solutions</span>
              <h1 className="text-6xl md:text-8xl font-display font-bold mb-8 leading-[0.9] tracking-tighter text-balance">
                Maximize Space. <br />
                <span className="text-nordic-accent italic font-light">Minimize Waste.</span>
              </h1>
              <p className="text-xl text-nordic-gray-dark mb-10 leading-relaxed max-w-xl">
                We bridge the gap between architectural vision and operational efficiency. Premium layout planning and visualization for the modern Philippine landscape.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={() => navigate('/portfolio')}
                  className="nordic-button-primary py-5 px-10 text-lg group"
                >
                  View Case Studies
                  <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                </button>
                <button 
                  onClick={() => navigate('/contact')}
                  className="nordic-button-secondary py-5 px-10 text-lg"
                >
                  Request a Quote
                </button>
              </div>
              
              <div className="mt-16 pt-8 border-t border-nordic-black/10 grid grid-cols-2 lg:grid-cols-4 gap-8">
                <div>
                  <p className="text-3xl font-display font-bold">120+</p>
                  <p className="text-[10px] text-nordic-gray uppercase tracking-widest font-bold mt-1">Completed Projects</p>
                </div>
                <div>
                  <p className="text-3xl font-display font-bold">15%</p>
                  <p className="text-[10px] text-nordic-gray uppercase tracking-widest font-bold mt-1">Avg. Space Saved</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Problem - Solution Section */}
      <section className="section-padding bg-nordic-black text-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-nordic-accent font-medium tracking-[0.2em] uppercase text-xs mb-4 block">The Problem</span>
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-8 leading-tight">
                Bad Layouts Cost More Than Bad Decorations.
              </h2>
              <p className="text-nordic-accent text-lg mb-10 leading-relaxed">
                Construction mistakes are expensive. Inefficient space planning leads to higher operational costs, uncomfortable guest experiences, and wasted revenue-generating area.
              </p>
              <div className="space-y-6">
                {[
                  "Eliminate structural revision costs",
                  "Optimize commercial rental yields",
                  "Speed up contractor communication",
                  "Visualize accurately before spending"
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 items-center">
                    <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center text-white">
                      <CheckCircle2 size={12} />
                    </div>
                    <span className="text-white font-medium text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="aspect-[4/5] bg-nordic-accent/10 border border-white/10 overflow-hidden">
                 <img 
                   src="https://images.unsplash.com/photo-1503387762-592dea58ef23?auto=format&fit=crop&q=80&w=800&h=1000" 
                   alt="Architectural Blueprint" 
                   className="w-full h-full object-cover grayscale hover:scale-105 transition-transform duration-700"
                   referrerPolicy="no-referrer"
                 />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white text-nordic-black p-8 max-w-xs shadow-2xl">
                 <p className="text-xs font-bold uppercase tracking-widest mb-2">Nordic Philosophy</p>
                 <p className="text-[11px] leading-relaxed text-nordic-gray-dark">We apply Scandinavian functional minimalism to Philippine spatial dynamics, ensuring every square meter generates ROI.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding" id="services">
        <div className="container-custom">
          <SectionTitle 
            title="Design That Drives Business" 
            subtitle="Our Services" 
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((s, i) => (
              <ServiceCard 
                key={i}
                icon={s.icon}
                title={s.title}
                description={s.description}
                features={s.features}
                imageUrl={s.image}
                onClick={() => navigate('/services')}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Featured Portfolio (Teaser) */}
      <section className="section-padding bg-nordic-gray-light">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <SectionTitle 
              title="Recent Success Stories" 
              subtitle="Portfolio" 
              centered={false}
            />
            <button 
              onClick={() => navigate('/portfolio')}
              className="text-nordic-black font-bold flex items-center gap-2 hover:translate-x-2 transition-transform mb-4"
            >
              View Full Portfolio <ArrowRight size={20} />
            </button>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div 
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
              className="group cursor-pointer"
              onClick={() => navigate('/portfolio')}
            >
              <div className="aspect-video bg-nordic-accent/20 mb-6 overflow-hidden relative">
                 <img 
                   src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&q=80&w=1280&h=720" 
                   alt="Azure Resort & Spa" 
                   className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                   referrerPolicy="no-referrer"
                 />
                 <div className="absolute inset-0 bg-nordic-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="text-white font-bold tracking-widest uppercase text-xs border border-white/40 px-6 py-3 backdrop-blur-sm">View Project</span>
                 </div>
              </div>
              <h3 className="text-2xl font-display font-bold mb-2">Azure Resort & Spa</h3>
              <p className="text-nordic-gray text-sm">Bacolod City, PH • Space Planning + 3D Render</p>
            </motion.div>
            <motion.div 
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
              className="group cursor-pointer"
              onClick={() => navigate('/portfolio')}
            >
              <div className="aspect-video bg-nordic-accent/20 mb-6 overflow-hidden relative">
                 <img 
                   src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1280&h=720" 
                   alt="GrowthHub Co-working" 
                   className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                   referrerPolicy="no-referrer"
                 />
                 <div className="absolute inset-0 bg-nordic-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="text-white font-bold tracking-widest uppercase text-xs border border-white/40 px-6 py-3 backdrop-blur-sm">View Project</span>
                 </div>
              </div>
              <h3 className="text-2xl font-display font-bold mb-2">GrowthHub Co-working</h3>
              <p className="text-nordic-gray text-sm">Makati, PH • Interior Efficiency Layout</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="section-padding">
        <div className="container-custom">
          <SectionTitle 
            title="Trusted by Developers" 
            subtitle="Testimonials" 
            centered 
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <TestimonialCard 
              quote="Layout Nordic fundamentally changed how we approached our resort project. They found an extra 20sqm of guest space just by rearranging the lobby flow."
              author="Roberto Santos"
              role="Owner"
              company="Coastal Palms Resort"
            />
            <TestimonialCard 
              quote="The 3D renders were so precise that our contractors had zero questions. It literally saved us weeks of back-and-forth on-site."
              author="Elena Cruz"
              role="Principal Architect"
              company="Cruz & Associates"
            />
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="section-padding pb-0">
        <div className="container-custom">
          <div className="bg-nordic-black text-white p-12 md:p-24 relative overflow-hidden">
            <div className="relative z-10 text-center max-w-3xl mx-auto">
              <h2 className="text-4xl md:text-6xl font-display font-bold mb-8">Ready to Build With Precision?</h2>
              <p className="text-xl text-nordic-accent mb-12">
                Stop guessing. Start visualizing. Let's create a space that works for you, not against you.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button onClick={() => navigate('/contact')} className="nordic-button-primary bg-white text-nordic-black py-5 px-10 text-lg">
                  Book Initial Strategy Session
                </button>
              </div>
            </div>
            <div className="absolute top-0 right-0 p-10 opacity-10">
               <Map size={300} />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
