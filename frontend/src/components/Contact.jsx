import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Loader2, CheckCircle2 } from 'lucide-react';
import { personalInfo } from '../data/mock';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    serviceType: '',
    budget: '',
    startDate: '',
    description: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        serviceType: '',
        budget: '',
        startDate: '',
        description: ''
      });
    }, 3000);
  };

  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-[#0F0F0F] to-[#1A1A1A] relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgba(57, 255, 20, 0.3) 1px, transparent 0)`,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      <div className="container relative z-10 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#39FF14]/10 border border-[#39FF14]/30 backdrop-blur-sm">
              <span className="text-sm text-[#39FF14] font-medium">Get In Touch</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              Let's <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00D4FF] to-[#39FF14]">Work Together</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Have a project in mind? Let's discuss how I can help bring your ideas to life
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-8">
            {/* Contact Info */}
            <div className="md:col-span-2 space-y-6">
              <div className="bg-[#1F1F23]/50 backdrop-blur-sm border border-white/10 rounded-2xl p-8 space-y-6">
                <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
                
                <div className="space-y-4">
                  <a
                    href={`mailto:${personalInfo.email}`}
                    className="flex items-start gap-4 p-4 rounded-xl hover:bg-[#00D4FF]/10 transition-all duration-300 group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-[#00D4FF]/10 border border-[#00D4FF]/30 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                      <Mail className="w-6 h-6 text-[#00D4FF]" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-400 mb-1">Email</p>
                      <p className="text-white font-medium">{personalInfo.email}</p>
                    </div>
                  </a>

                  <a
                    href={`tel:${personalInfo.phone}`}
                    className="flex items-start gap-4 p-4 rounded-xl hover:bg-[#39FF14]/10 transition-all duration-300 group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-[#39FF14]/10 border border-[#39FF14]/30 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                      <Phone className="w-6 h-6 text-[#39FF14]" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-400 mb-1">Phone</p>
                      <p className="text-white font-medium">{personalInfo.phone}</p>
                    </div>
                  </a>

                  <div className="flex items-start gap-4 p-4 rounded-xl">
                    <div className="w-12 h-12 rounded-xl bg-[#00D4FF]/10 border border-[#00D4FF]/30 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-[#00D4FF]" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-400 mb-1">Location</p>
                      <p className="text-white font-medium">{personalInfo.location}</p>
                      <p className="text-sm text-gray-500 mt-1">Open to remote/relocation</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Stats */}
              <div className="bg-gradient-to-br from-[#00D4FF]/10 to-[#39FF14]/10 backdrop-blur-sm border border-[#00D4FF]/30 rounded-2xl p-6">
                <p className="text-white font-semibold mb-4">Response Time</p>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400 text-sm">Email</span>
                    <span className="text-[#39FF14] font-semibold">&lt; 24 hours</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400 text-sm">Phone/WhatsApp</span>
                    <span className="text-[#39FF14] font-semibold">&lt; 2 hours</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400 text-sm">Consultation</span>
                    <span className="text-[#39FF14] font-semibold">Same day</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="md:col-span-3">
              <div className="bg-[#1F1F23]/50 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
                {isSubmitted ? (
                  <div className="text-center py-12">
                    <div className="w-20 h-20 bg-[#39FF14]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                      <CheckCircle2 className="w-12 h-12 text-[#39FF14]" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4">Message Sent Successfully!</h3>
                    <p className="text-gray-400">Thank you for reaching out. I'll get back to you within 24 hours.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-300">Full Name *</label>
                        <Input
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="John Doe"
                          required
                          className="bg-[#0F0F0F] border-white/20 focus:border-[#00D4FF] text-white rounded-xl"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-300">Email *</label>
                        <Input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="john@example.com"
                          required
                          className="bg-[#0F0F0F] border-white/20 focus:border-[#00D4FF] text-white rounded-xl"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-300">Phone Number</label>
                      <Input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+91-XXXXX-XXXXX"
                        className="bg-[#0F0F0F] border-white/20 focus:border-[#00D4FF] text-white rounded-xl"
                      />
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-300">Service Type *</label>
                        <Select
                          value={formData.serviceType}
                          onValueChange={(value) => setFormData(prev => ({ ...prev, serviceType: value }))}
                          required
                        >
                          <SelectTrigger className="bg-[#0F0F0F] border-white/20 focus:border-[#00D4FF] text-white rounded-xl">
                            <SelectValue placeholder="Select service" />
                          </SelectTrigger>
                          <SelectContent className="bg-[#1F1F23] border-white/20 text-white">
                            <SelectItem value="ai">AI & Automation Solutions</SelectItem>
                            <SelectItem value="fullstack">Full-Stack Development</SelectItem>
                            <SelectItem value="marketing">Digital Marketing & Growth</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-300">Project Budget *</label>
                        <Select
                          value={formData.budget}
                          onValueChange={(value) => setFormData(prev => ({ ...prev, budget: value }))}
                          required
                        >
                          <SelectTrigger className="bg-[#0F0F0F] border-white/20 focus:border-[#00D4FF] text-white rounded-xl">
                            <SelectValue placeholder="Select budget" />
                          </SelectTrigger>
                          <SelectContent className="bg-[#1F1F23] border-white/20 text-white">
                            <SelectItem value="500-2k">$500 - $2,000</SelectItem>
                            <SelectItem value="2k-5k">$2,000 - $5,000</SelectItem>
                            <SelectItem value="5k-10k">$5,000 - $10,000</SelectItem>
                            <SelectItem value="10k+">$10,000+</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-300">Preferred Start Date</label>
                      <Input
                        type="date"
                        name="startDate"
                        value={formData.startDate}
                        onChange={handleChange}
                        className="bg-[#0F0F0F] border-white/20 focus:border-[#00D4FF] text-white rounded-xl"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-300">Project Description *</label>
                      <Textarea
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                        placeholder="Tell me about your project..."
                        required
                        rows={5}
                        className="bg-[#0F0F0F] border-white/20 focus:border-[#00D4FF] text-white rounded-xl resize-none"
                      />
                    </div>

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-gradient-to-r from-[#00D4FF] to-[#39FF14] hover:from-[#00B8E6] hover:to-[#32DD12] text-black font-semibold py-6 text-base rounded-xl transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_40px_rgba(0,212,255,0.6)] disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="mr-2 w-5 h-5 animate-spin" />
                          Sending Message...
                        </>
                      ) : (
                        <>
                          Let's Build Something Amazing
                          <Send className="ml-2 w-5 h-5" />
                        </>
                      )}
                    </Button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
