import React from 'react';
import { Brain, Code2, TrendingUp, ArrowRight, Check } from 'lucide-react';
import { services } from '../data/mock';
import { Button } from './ui/button';

const iconMap = {
  Brain: Brain,
  Code2: Code2,
  TrendingUp: TrendingUp
};

const Services = () => {
  const handleGetStarted = (serviceTitle) => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="services" className="py-24 bg-[#1A1A1A] relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgba(0, 212, 255, 0.3) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      <div className="container relative z-10 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#00D4FF]/10 border border-[#00D4FF]/30 backdrop-blur-sm">
              <span className="text-sm text-[#00D4FF] font-medium">What I Offer</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              Service <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00D4FF] to-[#39FF14]">Offerings</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Transform your business with cutting-edge technology solutions tailored to your needs
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-3 gap-6">
            {services.map((service, index) => {
              const Icon = iconMap[service.icon];
              return (
                <div
                  key={service.id}
                  className="group relative bg-[#1F1F23]/50 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-[#00D4FF]/50 transition-all duration-500 hover:transform hover:-translate-y-2"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {/* Top Accent Line */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#00D4FF] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-t-2xl"></div>

                  {/* Icon */}
                  <div className="mb-6">
                    <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-[#00D4FF]/20 to-[#39FF14]/20 border border-[#00D4FF]/30 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-8 h-8" style={{ color: service.accentColor }} />
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-[#00D4FF] transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-gray-400 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-3 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-gray-300">
                        <Check className="w-5 h-5 text-[#39FF14] flex-shrink-0 mt-0.5" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Price & CTA */}
                  <div className="pt-6 border-t border-white/10 flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-500">Starting at</p>
                      <p className="text-2xl font-bold text-white">{service.price}</p>
                    </div>
                    <Button
                      onClick={() => handleGetStarted(service.title)}
                      className="bg-transparent hover:bg-[#00D4FF]/10 text-[#00D4FF] border border-[#00D4FF]/30 hover:border-[#00D4FF] rounded-xl transition-all duration-300 group-hover:scale-105"
                    >
                      Get Started
                      <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>

                  {/* Glow Effect */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#00D4FF]/0 via-[#00D4FF]/0 to-[#00D4FF]/0 group-hover:from-[#00D4FF]/5 group-hover:to-[#39FF14]/5 transition-all duration-500 pointer-events-none"></div>
                </div>
              );
            })}
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-16">
            <p className="text-gray-400 mb-4">Need a custom solution?</p>
            <Button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-gradient-to-r from-[#00D4FF] to-[#39FF14] hover:from-[#00B8E6] hover:to-[#32DD12] text-black font-semibold px-8 py-6 text-base rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(0,212,255,0.6)]"
            >
              Let's Discuss Your Project
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
