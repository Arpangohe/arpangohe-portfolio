import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';
import { testimonials } from '../data/mock';

const Testimonials = () => {
  const [current, setCurrent] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const next = () => {
    setIsAutoPlaying(false);
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setIsAutoPlaying(false);
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-24 bg-[#1A1A1A] relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#39FF14]/5 rounded-full blur-3xl -translate-y-1/2"></div>
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-[#00D4FF]/5 rounded-full blur-3xl -translate-y-1/2"></div>

      <div className="container relative z-10 px-6">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#00D4FF]/10 border border-[#00D4FF]/30 backdrop-blur-sm">
              <span className="text-sm text-[#00D4FF] font-medium">Client Testimonials</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              What <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00D4FF] to-[#39FF14]">Clients Say</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Don't just take my word for it - hear from satisfied clients
            </p>
          </div>

          {/* Testimonial Carousel */}
          <div className="relative">
            {/* Main Card */}
            <div className="bg-[#1F1F23]/50 backdrop-blur-sm border border-white/10 rounded-3xl p-12 md:p-16 hover:border-[#00D4FF]/50 transition-all duration-500">
              {/* Quote Icon */}
              <div className="absolute top-8 right-8 opacity-10">
                <Quote className="w-24 h-24 text-[#00D4FF]" />
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-6">
                {[...Array(testimonials[current].rating)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 fill-[#39FF14] text-[#39FF14]" />
                ))}
              </div>

              {/* Content */}
              <p className="text-2xl md:text-3xl text-gray-300 leading-relaxed mb-8 relative z-10">
                "{testimonials[current].content}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <img
                  src={testimonials[current].image}
                  alt={testimonials[current].name}
                  className="w-16 h-16 rounded-full border-2 border-[#00D4FF]/30"
                />
                <div>
                  <p className="text-xl font-bold text-white">{testimonials[current].name}</p>
                  <p className="text-[#00D4FF]">{testimonials[current].role}</p>
                  <p className="text-sm text-gray-500">{testimonials[current].company}</p>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-center gap-4 mt-8">
              <button
                onClick={prev}
                className="w-12 h-12 rounded-full bg-[#1F1F23]/50 backdrop-blur-sm border border-white/10 hover:border-[#00D4FF]/50 flex items-center justify-center transition-all duration-300 hover:scale-110"
              >
                <ChevronLeft className="w-6 h-6 text-gray-400 hover:text-[#00D4FF]" />
              </button>

              {/* Dots */}
              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setIsAutoPlaying(false);
                      setCurrent(index);
                    }}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      index === current
                        ? 'w-8 bg-[#00D4FF]'
                        : 'w-2 bg-gray-600 hover:bg-gray-400'
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={next}
                className="w-12 h-12 rounded-full bg-[#1F1F23]/50 backdrop-blur-sm border border-white/10 hover:border-[#00D4FF]/50 flex items-center justify-center transition-all duration-300 hover:scale-110"
              >
                <ChevronRight className="w-6 h-6 text-gray-400 hover:text-[#00D4FF]" />
              </button>
            </div>
          </div>

          {/* Trust Indicators */}
          <div className="grid md:grid-cols-4 gap-6 mt-16">
            {[
              { label: '100%', desc: 'Client Satisfaction' },
              { label: '50+', desc: 'Happy Clients' },
              { label: '5.0', desc: 'Average Rating' },
              { label: '100%', desc: 'Retention Rate' }
            ].map((stat, idx) => (
              <div key={idx} className="text-center">
                <p className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#00D4FF] to-[#39FF14] mb-2">
                  {stat.label}
                </p>
                <p className="text-sm text-gray-400">{stat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
