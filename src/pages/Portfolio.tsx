import { ArrowRight, Filter, ExternalLink } from 'lucide-react';
import { SectionTitle } from '../components/Shared';
import { motion } from 'motion/react';

export default function Portfolio() {
  const projects = [
    {
      title: "The Nordic Loft",
      location: "Tagaytay, PH",
      tags: ["Residential", "3D Visualization"],
      problem: "Client had a fixed 45sqm studio space but wanted a multi-functional layout including a workspace and guest area.",
      approach: "Used 'Transformer' furniture layouts and vertical space optimization to create distinct zones without walls.",
      result: "Functional living space with 20% more perceived area than traditional layouts."
    },
    {
      title: "Origin Brews Coffee",
      location: "Quezon City, PH",
      tags: ["Commercial", "Space Planning"],
      problem: "Inefficient kitchen flow was causing long wait times and server collisions during peak hours.",
      approach: "Redesigned the bar and back-of-house flow using industrial ergonomics principles.",
      result: "Order fulfillment time reduced by 25% and staff turnover decreased due to better work environment."
    },
    {
       title: "Villa Solimar",
       location: "Siargao, PH",
       tags: ["Hospitality", "Full Strategy"],
       problem: "High construction cost estimates due to complex structural requirements in a coastal zone.",
       approach: "Simplified the layout to align with local building methods while maintaining a luxury Scandinavian-Tropical aesthetic.",
       result: "Construction costs reduced by 15% through precision planning and material selection."
    },
    {
       title: "Lumina Office Park",
       location: "Cebu City, PH",
       tags: ["Corporate", "Technical Design"],
       problem: "A developer needed high-end 3D assets to pre-sell office spaces before groundbreaking.",
       approach: "Created hyper-realistic rendering packages focused on light quality and productivity-focused spatial design.",
       result: "70% of units reserved within first 3 months of visualization release."
    }
  ];

  return (
    <div className="pt-40 pb-32">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
           <div className="max-w-2xl">
              <SectionTitle title="Real Problems. Solved." subtitle="Our Work" />
              <p className="text-xl text-nordic-gray">
                Expert spatial engineering across residential, commercial, and hospitality sectors. No fluff—just functional designs that drive results.
              </p>
           </div>
           {/* Filter (Visual only for now) */}
           <div className="flex gap-4 border-b border-nordic-black/10 pb-2 overflow-x-auto w-full md:w-auto">
              <button className="text-nordic-black font-bold whitespace-nowrap">All Projects</button>
              <button className="text-nordic-gray hover:text-nordic-black transition-colors whitespace-nowrap">Commercial</button>
              <button className="text-nordic-gray hover:text-nordic-black transition-colors whitespace-nowrap">Hospitality</button>
              <button className="text-nordic-gray hover:text-nordic-black transition-colors whitespace-nowrap">Residential</button>
           </div>
        </div>

        <div className="grid grid-cols-1 gap-32">
          {projects.map((p, i) => (
            <div key={i} className="group">
               <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                  <div className="lg:col-span-7">
                     <motion.div 
                        whileHover={{ scale: 1.02 }}
                        transition={{ duration: 0.5 }}
                        className="aspect-[16/10] bg-nordic-gray-light relative overflow-hidden group"
                     >
                        <img 
                          src={
                            i === 0 ? "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80&w=1280&h=800" :
                            i === 1 ? "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1280&h=800" :
                            i === 2 ? "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&q=80&w=1280&h=800" :
                            "https://images.unsplash.com/photo-1541888946425-d81bb19480c5?auto=format&fit=crop&q=80&w=1280&h=800"
                          }
                          alt={p.title}
                          className="w-full h-full object-cover grayscale brightness-90 group-hover:grayscale-0 transition-all duration-700"
                          referrerPolicy="no-referrer"
                        />
                        <div className="absolute top-4 left-4 flex gap-2">
                           {p.tags.map(tag => (
                              <span key={tag} className="bg-white px-3 py-1 text-[10px] uppercase font-bold tracking-widest border border-nordic-black/5 shadow-sm">{tag}</span>
                           ))}
                        </div>
                     </motion.div>
                  </div>
                  <div className="lg:col-span-5 pt-4">
                     <p className="text-xs font-bold tracking-[0.3em] uppercase text-nordic-accent mb-4">{p.location}</p>
                     <h3 className="text-4xl font-display font-bold mb-8 group-hover:text-nordic-accent transition-colors">{p.title}</h3>
                     
                     <div className="space-y-8">
                        <div>
                           <h4 className="text-xs uppercase font-black tracking-widest text-nordic-black mb-3">The Problem</h4>
                           <p className="text-nordic-gray leading-relaxed">{p.problem}</p>
                        </div>
                        <div>
                           <h4 className="text-xs uppercase font-black tracking-widest text-nordic-black mb-3">Our Approach</h4>
                           <p className="text-nordic-gray leading-relaxed">{p.approach}</p>
                        </div>
                        <div className="bg-nordic-black text-white p-6 inline-block w-full">
                           <h4 className="text-[10px] uppercase font-black tracking-[0.3em] text-nordic-accent mb-2">The Result</h4>
                           <p className="text-lg font-display">{p.result}</p>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
          ))}
        </div>

        <div className="mt-32 text-center">
           <p className="text-nordic-gray mb-8">Interested in a deep dive into our methodology?</p>
           <button className="nordic-button-secondary">Request Full Case Studies</button>
        </div>
      </div>
    </div>
  );
}
