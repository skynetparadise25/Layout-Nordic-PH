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
      features: ["Traffic flow analysis", "Commercial zoning", "Adaptive reuse plans"]
    },
    {
      icon: PencilRuler,
      title: "Photorealistic 3D Rendering",
      description: "High-fidelity visualizations that allow you to see the finished project before a single block is laid.",
      features: ["Material accuracy", "Lighting simulation", "Panoramic views"]
    },
    {
      icon: Ruler,
      title: "Technical Layout Design",
      description: "Precise blueprints and technical drawings for contractors, ensuring flawless execution of design concepts.",
      features: ["Furniture schedules", "Lighting plans", "Construction detailing"]
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="min-h-[90vh] flex items-center relative overflow-hidden bg-white">
        <div className="container-custom relative z-10">
          <div className="max-w-3xl">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-nordic-gray font-medium tracking-[0.3em] uppercase text-xs mb-6 block">Premium Architecture Solutions</span>
              <h1 className="text-5xl md:text-7xl font-display font-bold mb-8 leading-[0.95] tracking-tighter">
                Maximize Space. <br />
                <span className="text-nordic-accent">Minimize Waste.</span>
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
              
              <div className="mt-16 pt-8 border-t border-nordic-gray-light grid grid-cols-2 lg:grid-cols-4 gap-8">
                <div>
                  <p className="text-3xl font-display font-bold">120+</p>
                  <p className="text-sm text-nordic-gray uppercase tracking-widest mt-1">Completed Projects</p>
                </div>
                <div>
                  <p className="text-3xl font-display font-bold">15%</p>
                  <p className="text-sm text-nordic-gray uppercase tracking-widest mt-1">Avg. Space Saved</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
        
        {/* Abstract Nordic Shape */}
        <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-nordic-gray-light -z-0 hidden lg:block">
           <div className="h-full w-full flex items-center justify-center opacity-10 grayscale">
              <Building2 size={400} />
           </div>
        </div>
      </section>

      {/* Problem - Solution Section */}
      <section className="section-padding bg-nordic-black text-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <span className="text-nordic-accent font-medium tracking-[0.2em] uppercase text-xs mb-4 block">The Problem</span>
              <h2 className="text-3xl md:text-5xl font-display font-bold mb-8 leading-tight">
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
                      <CheckCircle2 size={14} />
                    </div>
                    <span className="text-white font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/5] bg-nordic-accent/10 border border-white/10 flex items-center justify-center p-12">
                 <div className="text-center">
                    <Maximize size={80} className="mx-auto mb-6 text-nordic-accent opacity-50" />
                    <p className="text-xl font-display italic">"Efficiency is not about making things smaller, it's about making them better positioned."</p>
                 </div>
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white text-nordic-black p-8 max-w-xs shadow-2xl">
                 <p className="text-sm font-bold uppercase tracking-widest mb-2">Nordic Philosophy</p>
                 <p className="text-xs leading-relaxed text-nordic-gray-dark">We apply Scandinavian functional minimalism to Philippine spatial dynamics.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding">
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
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="group cursor-pointer">
              <div className="aspect-video bg-nordic-accent/20 mb-6 overflow-hidden relative">
                 <div className="absolute inset-0 flex items-center justify-center text-nordic-gray text-xs tracking-widest uppercase font-bold opacity-30">Luxury Boutique Hotel Visualization</div>
              </div>
              <h3 className="text-2xl font-display font-bold mb-2">Azure Resort & Spa</h3>
              <p className="text-nordic-gray">Bacolod City, PH • Space Planning + 3D Render</p>
            </div>
            <div className="group cursor-pointer">
              <div className="aspect-video bg-nordic-accent/20 mb-6 overflow-hidden relative">
                 <div className="absolute inset-0 flex items-center justify-center text-nordic-gray text-xs tracking-widest uppercase font-bold opacity-30">Minimalist Office HQ Planning</div>
              </div>
              <h3 className="text-2xl font-display font-bold mb-2">GrowthHub Co-working</h3>
              <p className="text-nordic-gray">Makati, PH • Interior Efficiency Layout</p>
            </div>
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
