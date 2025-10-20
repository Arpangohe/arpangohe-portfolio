import React, { useState, useEffect } from 'react';
import { Bot, Code2, TrendingUp, Download, Calendar, ArrowRight, Sparkles } from 'lucide-react';
import { Button } from './ui/button';
import { personalInfo, metrics } from '../data/mock';

const Hero = () => {
  const [taglineIndex, setTaglineIndex] = useState(0);
  const [typedText, setTypedText] = useState('');
  const currentTagline = personalInfo.taglines[taglineIndex];

  useEffect(() => {
    let index = 0;
    setTypedText('');
    const timer = setInterval(() => {
      if (index <= currentTagline.length) {
        setTypedText(currentTagline.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
        // Wait 3 seconds then switch to next tagline
        setTimeout(() => {
          setTaglineIndex((prev) => (prev + 1) % personalInfo.taglines.length);
        }, 3000);
      }
    }, 50);
    return () => clearInterval(timer);
  }, [taglineIndex, currentTagline]);

  const handleDownloadResume = (type) => {
    const resumeUrls = {
      'AI Automation': '/resumes/Arpan_Gohe_AI_Automation_Resume.pdf',
      'Full-Stack Developer': '/resumes/Arpan_Gohe_Full_Stack_Developer_Resume.pdf',
      'Marketing Expert': '/resumes/Arpan_Gohe_Marketing_Expert_Resume.pdf'
    };
    
    // Create mailto link as fallback since PDFs don't exist yet
    const subject = `Resume Request - ${type}`;
    const body = `Hi Arpan,%0D%0A%0D%0AI would like to download your ${type} resume.%0D%0A%0D%0AThank you!`;
    window.location.href = `mailto:${personalInfo.email}?subject=${subject}&body=${body}`;
  };

  const handleBookConsultation = () => {
    window.location.href = `mailto:${personalInfo.email}?subject=Free 15-Min Consultation Request&body=Hi Arpan,%0D%0A%0D%0AI'm interested in booking a consultation to discuss...`;
  };

  const handleHireMe = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-[#0F0F0F] via-[#1A1A1A] to-[#1A1A1A]">
      {/* Animated Background Grid */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(rgba(0, 212, 255, 0.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(0, 212, 255, 0.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-[#00D4FF] rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`
            }}
          />
        ))}
      </div>

      <div className="container relative z-10 px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#00D4FF]/10 border border-[#00D4FF]/30 backdrop-blur-sm">
                <Sparkles className="w-4 h-4 text-[#00D4FF]" />
                <span className="text-sm text-[#00D4FF] font-medium">Available for Projects</span>
              </div>

              <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                <span className="text-white">Hi, I'm </span>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00D4FF] to-[#39FF14]">
                  {personalInfo.name}
                </span>
              </h1>

              <div className="space-y-2">
                <p className="text-xl md:text-2xl text-gray-300 font-medium">
                  {personalInfo.title.split(' • ').map((title, index) => (
                    <span key={index}>
                      {title}
                      {index < personalInfo.title.split(' • ').length - 1 && (
                        <span className="text-[#00D4FF] mx-2">•</span>
                      )}
                    </span>
                  ))}
                </p>
              </div>

              {/* Rotating Typing Effect */}
              <div className="h-8">
                <p className="text-lg text-[#39FF14] font-mono">
                  {typedText}
                  <span className="animate-pulse">|</span>
                </p>
              </div>

              {/* Impact Metrics - Updated */}
              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="bg-[#1F1F23]/50 backdrop-blur-sm border border-white/10 rounded-xl p-4 hover:border-[#00D4FF]/50 transition-all duration-300">
                  <p className="text-3xl font-bold text-white">{metrics.studentsTrained}+</p>
                  <p className="text-sm text-gray-400">Students Trained</p>
                </div>
                <div className="bg-[#1F1F23]/50 backdrop-blur-sm border border-white/10 rounded-xl p-4 hover:border-[#39FF14]/50 transition-all duration-300">
                  <p className="text-3xl font-bold text-white">{metrics.aiAutomations}+</p>
                  <p className="text-sm text-gray-400">AI Automations</p>
                </div>
                <div className="bg-[#1F1F23]/50 backdrop-blur-sm border border-white/10 rounded-xl p-4 hover:border-[#00D4FF]/50 transition-all duration-300">
                  <p className="text-3xl font-bold text-white">{metrics.applicationsBuilt}+</p>
                  <p className="text-sm text-gray-400">Web Apps Built</p>
                </div>
                <div className="bg-[#1F1F23]/50 backdrop-blur-sm border border-white/10 rounded-xl p-4 hover:border-[#39FF14]/50 transition-all duration-300">
                  <p className="text-3xl font-bold text-white">{metrics.trafficGrowth}%</p>
                  <p className="text-sm text-gray-400">Traffic Growth</p>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4 pt-4">
                <Button
                  onClick={handleHireMe}
                  className="bg-[#00D4FF] hover:bg-[#00B8E6] text-black font-semibold px-8 py-6 text-base rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(0,212,255,0.5)]"
                >
                  Hire Me for Your Project
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button
                  onClick={handleBookConsultation}
                  variant="outline"
                  className="border-2 border-white/20 bg-transparent hover:bg-white/5 text-white font-semibold px-8 py-6 text-base rounded-xl transition-all duration-300 hover:border-[#39FF14] hover:text-[#39FF14]"
                >
                  <Calendar className="mr-2 w-5 h-5" />
                  Book Consultation
                </Button>
              </div>

              {/* Resume Download - Updated */}
              <div className="flex flex-wrap gap-3 pt-2">
                <button
                  onClick={() => handleDownloadResume('AI Automation')}
                  className="text-sm text-gray-400 hover:text-[#00D4FF] transition-colors flex items-center gap-2"
                >
                  <Download className="w-4 h-4" />
                  AI Automation Resume
                </button>
                <span className="text-gray-600">|</span>
                <button
                  onClick={() => handleDownloadResume('Full-Stack Developer')}
                  className="text-sm text-gray-400 hover:text-[#39FF14] transition-colors flex items-center gap-2"
                >
                  <Download className="w-4 h-4" />
                  Full-Stack Resume
                </button>
                <span className="text-gray-600">|</span>
                <button
                  onClick={() => handleDownloadResume('Marketing Expert')}
                  className="text-sm text-gray-400 hover:text-[#00D4FF] transition-colors flex items-center gap-2"
                >
                  <Download className="w-4 h-4" />
                  Marketing Resume
                </button>
              </div>
            </div>

            {/* Right - Avatar/Visual */}
            <div className="relative">
              <div className="relative w-full aspect-square max-w-lg mx-auto">
                {/* Glowing Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#00D4FF]/20 via-transparent to-[#39FF14]/20 rounded-full blur-3xl animate-pulse"></div>
                
                {/* Avatar Container */}
                <div className="relative w-full h-full rounded-3xl border-2 border-[#00D4FF]/30 bg-gradient-to-br from-[#1F1F23] to-[#2A2A2E] overflow-hidden backdrop-blur-sm">
                  {/* Geometric Pattern Overlay */}
                  <div className="absolute inset-0 opacity-20">
                    {[...Array(8)].map((_, i) => (
                      <div
                        key={i}
                        className="absolute border border-[#00D4FF]/30"
                        style={{
                          width: `${30 + i * 10}%`,
                          height: `${30 + i * 10}%`,
                          left: '50%',
                          top: '50%',
                          transform: 'translate(-50%, -50%) rotate(45deg)',
                          borderRadius: '20%'
                        }}
                      />
                    ))}
                  </div>
                  
                  {/* Placeholder Avatar */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center space-y-4">
                      <div className="w-48 h-48 mx-auto rounded-full bg-gradient-to-br from-[#00D4FF] to-[#39FF14] flex items-center justify-center">
                        <span className="text-8xl font-bold text-black">AG</span>
                      </div>
                      <div className="space-y-2">
                        <div className="flex justify-center gap-4">
                          <Bot className="w-8 h-8 text-[#00D4FF]" />
                          <Code2 className="w-8 h-8 text-[#39FF14]" />
                          <TrendingUp className="w-8 h-8 text-[#00D4FF]" />
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Floating Icons */}
                  <div className="absolute top-8 right-8 w-12 h-12 rounded-lg bg-[#00D4FF]/10 backdrop-blur-sm border border-[#00D4FF]/30 flex items-center justify-center animate-bounce" style={{ animationDuration: '3s' }}>
                    <Bot className="w-6 h-6 text-[#00D4FF]" />
                  </div>
                  <div className="absolute bottom-8 left-8 w-12 h-12 rounded-lg bg-[#39FF14]/10 backdrop-blur-sm border border-[#39FF14]/30 flex items-center justify-center animate-bounce" style={{ animationDuration: '2.5s', animationDelay: '0.5s' }}>
                    <Code2 className="w-6 h-6 text-[#39FF14]" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
