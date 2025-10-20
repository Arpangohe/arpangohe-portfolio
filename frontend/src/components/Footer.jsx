import React from 'react';
import { Linkedin, Github, Instagram, Youtube, Mail, MapPin, Phone, Heart } from 'lucide-react';
import { personalInfo } from '../data/mock';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    services: [
      { label: 'AI & Automation', href: '#services' },
      { label: 'Full-Stack Development', href: '#services' },
      { label: 'Digital Marketing', href: '#services' },
      { label: 'Consulting', href: '#contact' }
    ],
    company: [
      { label: 'About Me', href: '#about' },
      { label: 'Projects', href: '#projects' },
      { label: 'Testimonials', href: '#testimonials' },
      { label: 'Contact', href: '#contact' }
    ],
    resources: [
      { label: 'Download Resume (AI)', href: '#' },
      { label: 'Download Resume (Dev)', href: '#' },
      { label: 'Book Consultation', href: `mailto:${personalInfo.email}` },
      { label: 'LinkedIn Profile', href: personalInfo.linkedin }
    ]
  };

  const socialLinks = [
    { icon: Linkedin, href: personalInfo.linkedin, label: 'LinkedIn', color: '#00D4FF' },
    { icon: Github, href: personalInfo.github, label: 'GitHub', color: '#39FF14' },
    { icon: Instagram, href: personalInfo.instagram, label: 'Instagram', color: '#00D4FF' },
    { icon: Youtube, href: personalInfo.youtube, label: 'YouTube', color: '#39FF14' }
  ];

  return (
    <footer className="bg-[#0F0F0F] border-t border-white/10 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(rgba(0, 212, 255, 0.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(0, 212, 255, 0.1) 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      <div className="container relative z-10 px-6">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid md:grid-cols-12 gap-12 max-w-6xl mx-auto">
            {/* Brand Section */}
            <div className="md:col-span-5 space-y-6">
              <div>
                <h3 className="text-3xl font-bold mb-2">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00D4FF] to-[#39FF14]">
                    {personalInfo.name}
                  </span>
                </h3>
                <p className="text-gray-400 text-sm mb-4">
                  AI Strategist • Full-Stack Developer • EdTech Entrepreneur
                </p>
                <p className="text-gray-500 leading-relaxed">
                  {personalInfo.bio}
                </p>
              </div>

              {/* Contact Info */}
              <div className="space-y-3">
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="flex items-center gap-3 text-gray-400 hover:text-[#00D4FF] transition-colors group"
                >
                  <div className="w-8 h-8 rounded-lg bg-[#00D4FF]/10 border border-[#00D4FF]/30 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Mail className="w-4 h-4" />
                  </div>
                  <span className="text-sm">{personalInfo.email}</span>
                </a>
                <a
                  href={`tel:${personalInfo.phone}`}
                  className="flex items-center gap-3 text-gray-400 hover:text-[#39FF14] transition-colors group"
                >
                  <div className="w-8 h-8 rounded-lg bg-[#39FF14]/10 border border-[#39FF14]/30 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Phone className="w-4 h-4" />
                  </div>
                  <span className="text-sm">{personalInfo.phone}</span>
                </a>
                <div className="flex items-center gap-3 text-gray-400">
                  <div className="w-8 h-8 rounded-lg bg-[#00D4FF]/10 border border-[#00D4FF]/30 flex items-center justify-center">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <span className="text-sm">{personalInfo.location}</span>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex gap-3">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-lg bg-[#1F1F23] border border-white/10 hover:border-[#00D4FF]/50 flex items-center justify-center transition-all duration-300 hover:scale-110 hover:-translate-y-1 group"
                      aria-label={social.label}
                    >
                      <Icon className="w-5 h-5 text-gray-400 group-hover:text-[#00D4FF] transition-colors" />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Links Sections */}
            <div className="md:col-span-7 grid grid-cols-3 gap-8">
              {/* Services */}
              <div>
                <h4 className="text-white font-semibold mb-4">Services</h4>
                <ul className="space-y-3">
                  {footerLinks.services.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="text-gray-400 hover:text-[#00D4FF] transition-colors text-sm"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Company */}
              <div>
                <h4 className="text-white font-semibold mb-4">Company</h4>
                <ul className="space-y-3">
                  {footerLinks.company.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="text-gray-400 hover:text-[#39FF14] transition-colors text-sm"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Resources */}
              <div>
                <h4 className="text-white font-semibold mb-4">Resources</h4>
                <ul className="space-y-3">
                  {footerLinks.resources.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="text-gray-400 hover:text-[#00D4FF] transition-colors text-sm"
                        target={link.href.startsWith('http') ? '_blank' : undefined}
                        rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 py-8">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © {currentYear} {personalInfo.name}. All rights reserved.
            </p>
            <p className="text-gray-500 text-sm flex items-center gap-2">
              Built with <Heart className="w-4 h-4 text-[#39FF14] fill-[#39FF14]" /> using React & Next.js
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
