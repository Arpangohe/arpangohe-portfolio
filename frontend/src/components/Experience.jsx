import React from 'react';
import { Briefcase, GraduationCap, Award, Calendar } from 'lucide-react';
import { experience, education, certifications } from '../data/mock';

const Experience = () => {
  return (
    <section id="about" className="py-24 bg-[#0F0F0F] relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-20 left-20 w-96 h-96 bg-[#00D4FF]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-[#39FF14]/5 rounded-full blur-3xl"></div>

      <div className="container relative z-10 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#00D4FF]/10 border border-[#00D4FF]/30 backdrop-blur-sm">
              <span className="text-sm text-[#00D4FF] font-medium">Professional Journey</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              Experience & <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00D4FF] to-[#39FF14]">Education</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              A proven track record of delivering excellence across AI, development, and marketing
            </p>
          </div>

          {/* Experience Timeline */}
          <div className="mb-20">
            <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#00D4FF]/10 border border-[#00D4FF]/30 flex items-center justify-center">
                <Briefcase className="w-5 h-5 text-[#00D4FF]" />
              </div>
              Work Experience
            </h3>
            <div className="space-y-6">
              {experience.map((exp, index) => (
                <div
                  key={exp.id}
                  className="group relative bg-[#1F1F23]/50 backdrop-blur-sm border border-white/10 rounded-2xl p-6 md:p-8 hover:border-[#00D4FF]/50 transition-all duration-500"
                >
                  {/* Current Badge */}
                  {exp.current && (
                    <div className="absolute top-6 right-6 px-3 py-1 bg-[#39FF14]/20 backdrop-blur-sm border border-[#39FF14]/50 rounded-full text-xs text-[#39FF14] font-semibold">
                      Current
                    </div>
                  )}

                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                    <div className="flex-1">
                      <h4 className="text-xl font-bold text-white mb-2 group-hover:text-[#00D4FF] transition-colors">
                        {exp.role}
                      </h4>
                      <p className="text-[#00D4FF] font-semibold mb-1">{exp.company}</p>
                    </div>
                    <div className="flex items-center gap-2 text-gray-400 text-sm mt-2 md:mt-0">
                      <Calendar className="w-4 h-4" />
                      <span>{exp.period}</span>
                    </div>
                  </div>

                  <p className="text-gray-400 mb-4">{exp.description}</p>

                  {/* Achievements */}
                  <ul className="grid md:grid-cols-2 gap-3">
                    {exp.achievements.map((achievement, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-gray-300">
                        <span className="text-[#39FF14] mt-1">▸</span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Bottom Line */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#00D4FF] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-b-2xl"></div>
                </div>
              ))}
            </div>
          </div>

          {/* Education & Certifications Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Education */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#39FF14]/10 border border-[#39FF14]/30 flex items-center justify-center">
                  <GraduationCap className="w-5 h-5 text-[#39FF14]" />
                </div>
                Education
              </h3>
              <div className="space-y-4">
                {education.map((edu) => (
                  <div
                    key={edu.id}
                    className="bg-[#1F1F23]/50 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:border-[#39FF14]/50 transition-all duration-300"
                  >
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h4 className="text-lg font-bold text-white">{edu.degree}</h4>
                        <p className="text-[#39FF14] text-sm font-semibold">{edu.major}</p>
                      </div>
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        edu.status === 'Ongoing' 
                          ? 'bg-[#00D4FF]/20 text-[#00D4FF] border border-[#00D4FF]/30' 
                          : 'bg-white/10 text-gray-400 border border-white/20'
                      }`}>
                        {edu.status}
                      </span>
                    </div>
                    <p className="text-gray-400 text-sm mb-1">{edu.institution}</p>
                    <div className="flex items-center gap-2 text-gray-500 text-xs">
                      <Calendar className="w-3 h-3" />
                      <span>{edu.period}</span>
                      <span>•</span>
                      <span>{edu.location}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#00D4FF]/10 border border-[#00D4FF]/30 flex items-center justify-center">
                  <Award className="w-5 h-5 text-[#00D4FF]" />
                </div>
                Certifications & Recognition
              </h3>
              <div className="space-y-3">
                {certifications.map((cert) => (
                  <div
                    key={cert.id}
                    className="bg-[#1F1F23]/50 backdrop-blur-sm border border-white/10 rounded-xl p-4 hover:border-[#00D4FF]/50 transition-all duration-300 group"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex-1">
                        <h4 className="text-white font-semibold text-sm mb-1 group-hover:text-[#00D4FF] transition-colors">
                          {cert.name}
                        </h4>
                        <p className="text-gray-400 text-xs">{cert.issuer}</p>
                        {cert.role && <p className="text-[#39FF14] text-xs mt-1">{cert.role}</p>}
                      </div>
                      <span className="text-gray-500 text-xs font-semibold">{cert.year}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
