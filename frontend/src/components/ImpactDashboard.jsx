import React, { useState, useEffect, useRef } from 'react';
import { Users, DollarSign, Code, Target, TrendingUp, Award } from 'lucide-react';
import { metrics } from '../data/mock';

const CountUp = ({ end, duration = 2000, suffix = '' }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let startTime;
    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }, [isVisible, end, duration]);

  return <span ref={ref}>{count}{suffix}</span>;
};

const ImpactDashboard = () => {
  const stats = [
    {
      icon: Users,
      value: metrics.studentsTrained,
      suffix: '+',
      label: 'Students Trained',
      description: 'Through TechRooot workshops',
      color: '#00D4FF'
    },
    {
      icon: DollarSign,
      value: metrics.revenue,
      suffix: '+',
      label: 'Revenue Generated',
      description: 'From AI & automation projects',
      color: '#39FF14'
    },
    {
      icon: Code,
      value: metrics.applicationsBuilt,
      suffix: '+',
      label: 'Applications Built',
      description: 'Full-stack web solutions',
      color: '#00D4FF'
    },
    {
      icon: TrendingUp,
      value: metrics.trafficIncrease,
      suffix: '%',
      label: 'Traffic Increased',
      description: 'For client websites',
      color: '#39FF14'
    },
    {
      icon: Target,
      value: metrics.aiAccuracy,
      suffix: '%',
      label: 'AI Accuracy Rate',
      description: 'In training & annotation',
      color: '#00D4FF'
    },
    {
      icon: Award,
      value: metrics.clientSatisfaction,
      suffix: '%',
      label: 'Client Satisfaction',
      description: 'With 100% retention rate',
      color: '#39FF14'
    }
  ];

  return (
    <section className="py-24 bg-[#0F0F0F] relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(rgba(57, 255, 20, 0.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(57, 255, 20, 0.1) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}></div>
      </div>

      <div className="container relative z-10 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#39FF14]/10 border border-[#39FF14]/30 backdrop-blur-sm">
              <span className="text-sm text-[#39FF14] font-medium">Impact Metrics</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              Professional <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00D4FF] to-[#39FF14]">Impact</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Delivering measurable results that drive business growth
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid md:grid-cols-3 gap-6">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div
                  key={index}
                  className="group relative bg-[#1F1F23]/50 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-[#00D4FF]/50 transition-all duration-500 hover:transform hover:-translate-y-2"
                >
                  {/* Top Glow */}
                  <div
                    className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-1 rounded-full blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{ backgroundColor: stat.color }}
                  ></div>

                  {/* Icon */}
                  <div className="mb-6">
                    <div
                      className="w-14 h-14 rounded-xl flex items-center justify-center border group-hover:scale-110 transition-transform duration-300"
                      style={{
                        backgroundColor: `${stat.color}15`,
                        borderColor: `${stat.color}40`
                      }}
                    >
                      <Icon className="w-7 h-7" style={{ color: stat.color }} />
                    </div>
                  </div>

                  {/* Value */}
                  <div className="mb-3">
                    <h3 className="text-5xl font-bold text-white">
                      <CountUp end={stat.value} suffix={stat.suffix} />
                    </h3>
                  </div>

                  {/* Label & Description */}
                  <div className="space-y-2">
                    <p className="text-xl font-semibold" style={{ color: stat.color }}>
                      {stat.label}
                    </p>
                    <p className="text-sm text-gray-400">
                      {stat.description}
                    </p>
                  </div>

                  {/* Bottom Line */}
                  <div
                    className="absolute bottom-0 left-0 right-0 h-1 rounded-b-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{
                      background: `linear-gradient(90deg, transparent, ${stat.color}, transparent)`
                    }}
                  ></div>
                </div>
              );
            })}
          </div>

          {/* Bottom CTA */}
          <div className="mt-16 text-center">
            <div className="inline-block bg-[#1F1F23]/50 backdrop-blur-sm border border-[#00D4FF]/30 rounded-2xl p-8">
              <p className="text-2xl font-bold text-white mb-2">
                Ready to achieve similar results?
              </p>
              <p className="text-gray-400 mb-6">
                Let's discuss how I can help transform your business
              </p>
              <button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-gradient-to-r from-[#00D4FF] to-[#39FF14] hover:from-[#00B8E6] hover:to-[#32DD12] text-black font-semibold px-8 py-4 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(0,212,255,0.6)]"
              >
                Start Your Project Today
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImpactDashboard;
