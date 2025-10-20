import React, { useState } from 'react';
import { ExternalLink, Github, FileText, ArrowRight } from 'lucide-react';
import { projects } from '../data/mock';
import { Button } from './ui/button';

const Projects = () => {
  const [filter, setFilter] = useState('all');
  const categories = ['all', ...new Set(projects.map(p => p.category))];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <section id="projects" className="py-24 bg-gradient-to-b from-[#1A1A1A] to-[#0F0F0F] relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-20 right-20 w-96 h-96 bg-[#00D4FF]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-[#39FF14]/5 rounded-full blur-3xl"></div>

      <div className="container relative z-10 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12 space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#39FF14]/10 border border-[#39FF14]/30 backdrop-blur-sm">
              <span className="text-sm text-[#39FF14] font-medium">Portfolio</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00D4FF] to-[#39FF14]">Projects</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Real-world applications delivering measurable business impact
            </p>
          </div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-6 py-2 rounded-xl font-medium transition-all duration-300 ${
                  filter === category
                    ? 'bg-[#00D4FF] text-black border-2 border-[#00D4FF]'
                    : 'bg-[#1F1F23]/50 text-gray-400 border-2 border-white/10 hover:border-[#00D4FF]/50 hover:text-white'
                }`}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {filteredProjects.map((project, index) => (
              <div
                key={project.id}
                className="group relative bg-[#1F1F23]/50 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:border-[#00D4FF]/50 transition-all duration-500 hover:transform hover:-translate-y-1"
              >
                {/* Featured Badge */}
                {project.featured && (
                  <div className="absolute top-4 right-4 z-10 px-3 py-1 bg-[#39FF14]/20 backdrop-blur-sm border border-[#39FF14]/50 rounded-full text-xs text-[#39FF14] font-semibold">
                    Featured
                  </div>
                )}

                {/* Image */}
                <div className="relative h-64 overflow-hidden bg-[#0F0F0F]">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1F1F23] via-transparent to-transparent opacity-60"></div>
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4 px-3 py-1 bg-[#00D4FF]/20 backdrop-blur-sm border border-[#00D4FF]/50 rounded-full text-xs text-[#00D4FF] font-semibold">
                    {project.category}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-4">
                  <h3 className="text-2xl font-bold text-white group-hover:text-[#00D4FF] transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Metrics */}
                  <div className="grid grid-cols-3 gap-4 pt-4">
                    {Object.entries(project.metrics).map(([key, value]) => (
                      <div key={key} className="text-center">
                        <p className="text-lg font-bold text-white">{value}</p>
                        <p className="text-xs text-gray-500 capitalize">{key}</p>
                      </div>
                    ))}
                  </div>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 pt-4 border-t border-white/10">
                    {project.technologies.slice(0, 4).map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-[#00D4FF]/10 text-[#00D4FF] text-xs rounded-full border border-[#00D4FF]/30"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="px-3 py-1 bg-white/5 text-gray-400 text-xs rounded-full">
                        +{project.technologies.length - 4} more
                      </span>
                    )}
                  </div>

                  {/* Links */}
                  <div className="flex gap-3 pt-4">
                    {project.liveLink && (
                      <Button
                        className="flex-1 bg-[#00D4FF]/10 hover:bg-[#00D4FF]/20 text-[#00D4FF] border border-[#00D4FF]/30 hover:border-[#00D4FF] rounded-xl transition-all duration-300"
                        onClick={() => alert('Demo link would open here')}
                      >
                        <ExternalLink className="mr-2 w-4 h-4" />
                        Live Demo
                      </Button>
                    )}
                    {project.github && (
                      <Button
                        className="flex-1 bg-transparent hover:bg-white/5 text-gray-400 hover:text-white border border-white/20 hover:border-white/40 rounded-xl transition-all duration-300"
                        onClick={() => alert('GitHub link would open here')}
                      >
                        <Github className="mr-2 w-4 h-4" />
                        Code
                      </Button>
                    )}
                    {project.caseStudy && (
                      <Button
                        className="flex-1 bg-transparent hover:bg-white/5 text-gray-400 hover:text-white border border-white/20 hover:border-white/40 rounded-xl transition-all duration-300"
                        onClick={() => alert('Case study would open here')}
                      >
                        <FileText className="mr-2 w-4 h-4" />
                        Case Study
                      </Button>
                    )}
                  </div>
                </div>

                {/* Glow Effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#00D4FF]/0 to-[#00D4FF]/0 group-hover:from-[#00D4FF]/5 group-hover:to-transparent transition-all duration-500 pointer-events-none"></div>
              </div>
            ))}
          </div>

          {/* View More */}
          <div className="text-center mt-12">
            <Button
              className="bg-transparent hover:bg-[#39FF14]/10 text-[#39FF14] border-2 border-[#39FF14]/30 hover:border-[#39FF14] font-semibold px-8 py-6 text-base rounded-xl transition-all duration-300 hover:scale-105"
              onClick={() => alert('More projects would be shown')}
            >
              View All Projects
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
