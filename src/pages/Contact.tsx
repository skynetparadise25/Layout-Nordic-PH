import { useState } from 'react';
import { motion } from 'motion/react';
import { Send, CheckCircle2, Phone, Mail, MapPin } from 'lucide-react';
import { SectionTitle } from '../components/Shared';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    projectType: 'commercial',
    budget: '100k-500k',
    timeline: 'immediate',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate submission
    setTimeout(() => {
      setSubmitted(true);
    }, 1000);
  };

  if (submitted) {
    return (
      <div className="min-h-screen pt-40 pb-20 container-custom flex flex-col items-center justify-center text-center">
        <div className="w-20 h-20 bg-nordic-black text-white rounded-full flex items-center justify-center mb-8">
          <CheckCircle2 size={40} />
        </div>
        <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">Strategy Session Requested</h1>
        <p className="text-nordic-gray text-xl max-w-lg mx-auto mb-10">
          Thank you, {formData.name}. Our lead planner will review your project details and contact you within 24 hours to confirm your consultation.
        </p>
        <button 
          onClick={() => window.location.href = '/'}
          className="nordic-button-primary"
        >
          Return Home
        </button>
      </div>
    );
  }

  return (
    <div className="pt-40 pb-32">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
          <div>
            <SectionTitle 
              title="Let's Optimize Your Space." 
              subtitle="Get Started" 
            />
            <p className="text-xl text-nordic-gray-dark mb-12 leading-relaxed">
              We don't take every project. We focus on clients who value space efficiency, precision planning, and premium design ROI.
            </p>
            
            <div className="grid grid-cols-1 gap-10">
              <div className="flex gap-6 items-start">
                <div className="w-12 h-12 bg-nordic-gray-light flex items-center justify-center shrink-0">
                  <Phone size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Call Our Office</h4>
                  <p className="text-nordic-gray">+63 917 123 4567</p>
                  <p className="text-xs text-nordic-accent mt-1 uppercase tracking-widest font-bold">Mon-Fri 9am-6pm</p>
                </div>
              </div>
              
              <div className="flex gap-6 items-start">
                <div className="w-12 h-12 bg-nordic-gray-light flex items-center justify-center shrink-0">
                  <Mail size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Direct Email</h4>
                  <p className="text-nordic-gray">projects@layoutnordic.ph</p>
                  <p className="text-xs text-nordic-accent mt-1 uppercase tracking-widest font-bold">24hr Response Time</p>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="w-12 h-12 bg-nordic-gray-light flex items-center justify-center shrink-0">
                  <MapPin size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Main Studio</h4>
                  <p className="text-nordic-gray">Level 12, Enterprise Tower, Makati City</p>
                  <p className="text-xs text-nordic-accent mt-1 uppercase tracking-widest font-bold">By Appointment Only</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-nordic-gray-light p-8 md:p-12">
            <h3 className="text-2xl font-display font-bold mb-8">Consultation Request</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-nordic-gray mb-2">Name</label>
                  <input 
                    required
                    type="text" 
                    className="w-full bg-white border border-transparent p-4 focus:border-nordic-black outline-none transition-all"
                    placeholder="Juan Dela Cruz"
                    value={formData.name}
                    onChange={e => setFormData({...formData, name: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-nordic-gray mb-2">Work Email</label>
                  <input 
                    required
                    type="email" 
                    className="w-full bg-white border border-transparent p-4 focus:border-nordic-black outline-none transition-all"
                    placeholder="juan@company.com"
                    value={formData.email}
                    onChange={e => setFormData({...formData, email: e.target.value})}
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-nordic-gray mb-2">Company / Project Name</label>
                <input 
                  type="text" 
                  className="w-full bg-white border border-transparent p-4 focus:border-nordic-black outline-none transition-all"
                  placeholder="The Grand Boutique Hotel"
                  value={formData.company}
                  onChange={e => setFormData({...formData, company: e.target.value})}
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-nordic-gray mb-2">Project Type</label>
                  <select 
                    className="w-full bg-white border border-transparent p-4 focus:border-nordic-black outline-none transition-all appearance-none"
                    value={formData.projectType}
                    onChange={e => setFormData({...formData, projectType: e.target.value})}
                  >
                    <option value="commercial">Commercial Space</option>
                    <option value="residential">Luxury Residential</option>
                    <option value="hospitality">Resort / Hotel</option>
                    <option value="development">Real Estate Development</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-nordic-gray mb-2">Timeline</label>
                  <select 
                    className="w-full bg-white border border-transparent p-4 focus:border-nordic-black outline-none transition-all appearance-none"
                    value={formData.timeline}
                    onChange={e => setFormData({...formData, timeline: e.target.value})}
                  >
                    <option value="immediate">Immediate (1-3 months)</option>
                    <option value="planning">Planning Phase</option>
                    <option value="future">Long-term (6+ months)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-nordic-gray mb-2">Project Details & Pain Points</label>
                <textarea 
                  rows={4}
                  className="w-full bg-white border border-transparent p-4 focus:border-nordic-black outline-none transition-all"
                  placeholder="Tell us about the space and what problems you're trying to solve..."
                  value={formData.message}
                  onChange={e => setFormData({...formData, message: e.target.value})}
                />
              </div>

              <button type="submit" className="nordic-button-primary w-full group">
                Submit Request <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
              
              <p className="text-[10px] text-center text-nordic-gray uppercase tracking-widest">
                By submitting, you agree to our privacy policy and terms of service.
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
