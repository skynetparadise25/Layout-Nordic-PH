import { CheckCircle2, ArrowRight, Maximize, Ruler, PencilRuler, Eye, Briefcase, Zap } from 'lucide-react';
import { SectionTitle } from '../components/Shared';
import { useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';

export default function Services() {
  const navigate = useNavigate();
  
  const detailedServices = [
    {
      id: "spatial",
      icon: Maximize,
      title: "Spatial Efficiency Audit & Planning",
      outcome: "Maximize your square meter yield and traffic flow.",
      description: "We analyze your existing or planned space to identify 'dead zones' that aren't generating value. Using heatmap-inspired flow analysis, we re-layout the area to increase capacity without sacrificing comfort.",
      process: ["Site analysis & measurement", "Traffic flow mapping", "Zoning optimization", "Final layout blueprint"],
      deliverables: ["Optimized Floor Plans", "Traffic Flow Diagrams", "Spatial Zoning Report"]
    },
    {
       id: "viz",
       icon: Eye,
       title: "High-Fidelity Architectural Visualization",
       outcome: "Zero surprises. Total clarity before construction.",
       description: "Our 3D rendering service uses high-end global illumination and texture mapping to provide photorealistic images. This is essential for pre-selling developments, attracting investors, or finalizing interior finishes.",
       process: ["3D Modeling", "Texture & Lighting placement", "Post-processing", "Client review session"],
       deliverables: ["4K Static Renders", "360° VR Panoramas", "Cinematic Walkthrough (Optional)"]
    },
    {
       id: "tech",
       icon: Ruler,
       title: "Technical Design & Documentation",
       outcome: "Clear instructions for zero contractor errors.",
       description: "Beautiful designs are useless if contractors can't build them. We provide high-precision technical sets that specify every measurement, material, and electrical point required for execution.",
       process: ["Detailed Drafting", "Material Specifications", "Lighting & Electrical Plans", "Consultant coordination"],
       deliverables: ["Technical CAD Sets", "Full Finishes Schedule", "Installation Detail Drawings"]
    }
  ];

  return (
    <div className="pt-40">
      <section className="container-custom mb-32">
        <div className="max-w-4xl">
           <SectionTitle title="Strategic Design Solutions" subtitle="What We Do" />
           <p className="text-2xl text-nordic-gray-dark leading-relaxed">
             We don't just 'design' rooms. We engineer functional environments that solve operational bottlenecks and maximize aesthetic impact.
           </p>
        </div>
      </section>

      <div className="space-y-40 mb-32">
        {detailedServices.map((s, i) => (
          <section key={s.id} className="container-custom">
            <div className={`grid grid-cols-1 lg:grid-cols-2 gap-20 items-center ${i % 1 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
              <div>
                <div className="w-16 h-16 bg-nordic-gray-light flex items-center justify-center mb-8">
                  <s.icon size={32} />
                </div>
                <h2 className="text-4xl font-display font-bold mb-4">{s.title}</h2>
                <p className="text-xl font-medium text-nordic-black mb-6">{s.outcome}</p>
                <p className="text-nordic-gray text-lg mb-10 leading-relaxed">{s.description}</p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                   <div>
                      <h4 className="font-bold border-b border-nordic-black/10 pb-2 mb-4 flex items-center gap-2">
                        <Zap size={16} /> The Process
                      </h4>
                      <ul className="space-y-3">
                        {s.process.map((step, idx) => (
                          <li key={idx} className="flex gap-3 text-sm">
                            <span className="text-nordic-accent font-bold">0{idx+1}</span>
                            <span>{step}</span>
                          </li>
                        ))}
                      </ul>
                   </div>
                   <div>
                      <h4 className="font-bold border-b border-nordic-black/10 pb-2 mb-4 flex items-center gap-2">
                        <Briefcase size={16} /> Deliverables
                      </h4>
                      <ul className="space-y-3">
                        {s.deliverables.map((d, idx) => (
                          <li key={idx} className="flex gap-2 items-center text-sm">
                            <CheckCircle2 size={14} />
                            <span>{d}</span>
                          </li>
                        ))}
                      </ul>
                   </div>
                </div>

                <button 
                  onClick={() => navigate('/contact')}
                  className="nordic-button-secondary mt-12 w-full md:w-auto"
                >
                  Discuss this service
                </button>
              </div>
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="aspect-square bg-nordic-gray-light relative overflow-hidden group"
              >
                 <img 
                   src={
                     s.id === 'spatial' ? "https://images.unsplash.com/photo-1503387762-592dea58ef23?auto=format&fit=crop&q=80&w=800&h=800" :
                     s.id === 'viz' ? "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=800&h=800" :
                     "https://images.unsplash.com/photo-1541888946425-d81bb19480c5?auto=format&fit=crop&q=80&w=800&h=800"
                   }
                   alt={s.title}
                   className="w-full h-full object-cover grayscale brightness-90 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                   referrerPolicy="no-referrer"
                 />
                 <div className="absolute inset-0 bg-nordic-black/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </motion.div>
            </div>
          </section>
        ))}
      </div>

      <section className="section-padding bg-nordic-black text-white">
        <div className="container-custom text-center">
           <h2 className="text-4xl font-display font-bold mb-8">Not sure which one you need?</h2>
           <p className="text-nordic-accent text-lg max-w-2xl mx-auto mb-10">
             Schedule a quick 15-minute introductory call. We'll listen to your project needs and recommend the most cost-effective path forward.
           </p>
           <button onClick={() => navigate('/contact')} className="nordic-button-primary bg-white text-nordic-black">
             Book Strategy Session
           </button>
        </div>
      </section>
    </div>
  );
}
