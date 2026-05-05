import { SectionTitle } from '../components/Shared';
import { ShieldCheck, Award, Zap, Globe } from 'lucide-react';
import { motion } from 'motion/react';

export default function About() {
  return (
    <div className="pt-40">
      <section className="container-custom mb-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div>
            <SectionTitle title="Nordic Philosophy. Philippine Reality." subtitle="Our Story" />
            <p className="text-2xl text-nordic-gray-dark leading-relaxed mb-8">
              Layout Nordic Inc. PH was born from a frustration with wasted space in urban developments.
            </p>
            <p className="text-lg text-nordic-gray leading-relaxed mb-10">
               We believe that good architecture is invisible—it just works. Our team of space planners and visualization experts take the minimalist, functional DNA of Scandinavian design and adapt it to the specific lifestyle and environmental needs of the Philippines.
            </p>
            
            <div className="grid grid-cols-2 gap-10">
               <div>
                  <h4 className="text-4xl font-display font-bold mb-2">07+</h4>
                  <p className="text-xs uppercase tracking-widest font-bold text-nordic-accent">Years of Excellence</p>
               </div>
               <div>
                  <h4 className="text-4xl font-display font-bold mb-2">200k+</h4>
                  <p className="text-xs uppercase tracking-widest font-bold text-nordic-accent">Sqm Optimized</p>
               </div>
            </div>
          </div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="aspect-square bg-nordic-gray-light relative overflow-hidden group"
          >
             <img 
               src="https://images.unsplash.com/photo-1600880212319-7524ebdeea44?auto=format&fit=crop&q=80&w=800&h=800" 
               alt="Layout Nordic Studio" 
               className="w-full h-full object-cover grayscale brightness-90 group-hover:grayscale-0 transition-all duration-700"
               referrerPolicy="no-referrer"
             />
             <div className="absolute inset-0 border-[24px] border-white/50 m-4 pointer-events-none"></div>
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-nordic-gray-light">
        <div className="container-custom">
           <SectionTitle title="Why Choose Us?" subtitle="Our Edge" centered />
           
           <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto">
              <div className="text-center">
                 <div className="w-16 h-16 bg-white mx-auto mb-6 flex items-center justify-center rounded-full shadow-sm">
                    <ShieldCheck size={28} />
                 </div>
                 <h3 className="text-xl font-display font-bold mb-4">Integrity in Data</h3>
                 <p className="text-nordic-gray leading-relaxed">We don't 'guess' layouts. We use spatial data and ergonomics to prove why a design works before it's built.</p>
              </div>
              
              <div className="text-center">
                 <div className="w-16 h-16 bg-white mx-auto mb-6 flex items-center justify-center rounded-full shadow-sm">
                    <Award size={28} />
                 </div>
                 <h3 className="text-xl font-display font-bold mb-4">Global Standards</h3>
                 <p className="text-nordic-gray leading-relaxed">Our visualization workflow rivals international studios, giving your projects a competitive edge in global marketing.</p>
              </div>
              
              <div className="text-center">
                 <div className="w-16 h-16 bg-white mx-auto mb-6 flex items-center justify-center rounded-full shadow-sm">
                    <Zap size={28} />
                 </div>
                 <h3 className="text-xl font-display font-bold mb-4">Cost Prevention</h3>
                 <p className="text-nordic-gray leading-relaxed">By catching flow errors in the 2D planning stage, we typically save our clients 5-10% in construction rework costs.</p>
              </div>
           </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
           <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl font-display font-bold mb-12">Meet the Principals</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                 <div>
                    <div className="aspect-[4/5] bg-nordic-gray-light mb-6"></div>
                    <h4 className="text-2xl font-display font-bold">Erik Nilsen</h4>
                    <p className="text-nordic-accent uppercase tracking-widest text-xs font-black mb-4">Creative Director</p>
                    <p className="text-nordic-gray text-sm leading-relaxed text-balance">Specialist in Scandi-Functionalism with over 15 years experience in Oslo and Singapore.</p>
                 </div>
                 <div>
                    <div className="aspect-[4/5] bg-nordic-gray-light mb-6"></div>
                    <h4 className="text-2xl font-display font-bold">Maria Katigbak</h4>
                    <p className="text-nordic-accent uppercase tracking-widest text-xs font-black mb-4">Head of Operations</p>
                    <p className="text-nordic-gray text-sm leading-relaxed text-balance">Leading the Philippine spatial dynamics research and logistics for large-scale resort developments.</p>
                 </div>
              </div>
           </div>
        </div>
      </section>
    </div>
  );
}
