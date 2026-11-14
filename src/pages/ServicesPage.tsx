import React, { useState } from 'react';
import { 
  Layers, Globe, Cpu, Zap, Database, ShieldCheck, 
  ArrowRight, CheckCircle2, Terminal, Code2, Server, 
  Smartphone, Filter, Sparkles, ChevronRight 
} from 'lucide-react';
import { AmbientWaveCanvas } from '../components/AmbientWaveCanvas';

interface ServicesPageProps {
  onNavigate: (page: string) => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({ onNavigate }) => {
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'web' | 'mobile' | 'software'>('all');

  const services = [
    {
      id: 'website-development',
      category: 'web',
      icon: Globe,
      title: 'Website Development',
      tagline: 'Modern, responsive and professional websites built for online growth.',
      description: 'We create modern, responsive and professional websites that help businesses establish their online presence, showcase their services and connect with customers.',
      deliverables: [
        'Business Websites with clear presentation of services and products',
        'Corporate Websites tailored for professional branding and credibility',
        'Portfolio Websites for individuals, creators and agencies',
        'High-converting Landing Pages for marketing and campaigns',
        'E-commerce Websites with catalog management and payment integration'
      ],
      techStack: ['React', 'TypeScript', 'Tailwind CSS', 'Vite', 'Next.js', 'Responsive Design'],
      metrics: { item1: 'Mobile Ready', item2: 'SEO Friendly', item3: 'Fast Loading' },
      featured: true
    },
    {
      id: 'web-application-development',
      category: 'web',
      icon: Layers,
      title: 'Web Application Development',
      tagline: 'Interactive web applications designed to simplify business operations.',
      description: 'We develop interactive and scalable web applications designed to simplify business operations, improve productivity and deliver smooth user experiences.',
      deliverables: [
        'Custom Web Applications tailored to specific business workflows',
        'Interactive Admin Dashboards with data visualization and controls',
        'Business Management Systems that centralize records and operations',
        'ERP Applications designed for day-to-day business oversight',
        'Customer Portals with secure account access and service tracking'
      ],
      techStack: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'Tailwind CSS', 'REST APIs'],
      metrics: { item1: 'Interactive', item2: 'Scalable', item3: 'User-Friendly' },
      featured: true
    },
    {
      id: 'mobile-app-development',
      category: 'mobile',
      icon: Smartphone,
      title: 'Mobile App Development',
      tagline: 'Modern mobile applications for Android and iOS devices.',
      description: 'We build modern mobile applications that help businesses connect with their customers and provide convenient digital experiences across mobile devices.',
      deliverables: [
        'Android App Development built with modern, maintainable code',
        'iOS App Development with smooth performance and native feel',
        'Cross-Platform Applications using React Native and Expo',
        'Business Mobile Applications for on-the-go management and staff',
        'App API Integration connecting mobile interfaces with backend databases'
      ],
      techStack: ['React Native', 'Expo', 'TypeScript', 'Mobile UI/UX', 'REST APIs', 'App Store'],
      metrics: { item1: 'Android & iOS', item2: 'Cross-Platform', item3: 'Native Feel' },
      featured: true
    },
    {
      id: 'custom-software-development',
      category: 'software',
      icon: Cpu,
      title: 'Custom Software Development',
      tagline: 'Tailored software built around your specific business requirements.',
      description: 'We create customized software solutions based on your specific business requirements, helping you manage processes, organize information and solve everyday operational challenges.',
      deliverables: [
        'Custom Business Software built around real-world company workflows',
        'ERP Solutions that unite inventory, billing and production data',
        'Inventory Management systems for accurate stock tracking',
        'Billing & Management Systems with automated invoice generation',
        'Workflow Automation that reduces repetitive manual tasks'
      ],
      techStack: ['TypeScript', 'Node.js', 'Electron', 'PostgreSQL', 'SQLite', 'Zustand'],
      metrics: { item1: 'Tailor-Made', item2: 'Process Driven', item3: 'Reliable' },
      featured: false
    },
    {
      id: 'ui-ux-design',
      category: 'web',
      icon: Sparkles,
      title: 'UI/UX Design',
      tagline: 'Clean, modern and user-friendly digital product interfaces.',
      description: 'We design clean, modern and user-friendly interfaces that make digital products easy to understand, navigate and use.',
      deliverables: [
        'Website UI Design focused on modern aesthetic and brand consistency',
        'Mobile App UI Design tailored for touch gestures and small screens',
        'Dashboard Design with clear data hierarchy and readable metrics',
        'Wireframing & Prototyping to validate ideas before coding',
        'User Experience Design focused on ease of use and reduced friction'
      ],
      techStack: ['Figma', 'UI/UX Design', 'Wireframing', 'Design Systems', 'Responsive UI'],
      metrics: { item1: 'User Centric', item2: 'Modern Look', item3: 'Intuitive' },
      featured: false
    },
    {
      id: 'api-backend-development',
      category: 'software',
      icon: Database,
      title: 'API & Backend Development',
      tagline: 'Reliable backend systems and integrations that power your applications.',
      description: 'We develop reliable backend systems and API integrations that connect applications, manage data and support essential business functionality.',
      deliverables: [
        'REST API Development for fast and structured client-server communication',
        'Database Design & Modeling optimized for data integrity and speed',
        'Backend Development with clean business logic and error handling',
        'Third-Party Integrations connecting payments, notifications and SMS',
        'Authentication & Authorization with secure token-based user sessions'
      ],
      techStack: ['Node.js', 'Express', 'PostgreSQL', 'REST APIs', 'JWT Auth', 'Database Design'],
      metrics: { item1: 'Secure APIs', item2: 'Structured Data', item3: 'Integrated' },
      featured: false
    }
  ];

  const filteredServices = services.filter(service => {
    if (selectedCategory === 'all') return true;
    return service.category === selectedCategory;
  });

  return (
    <div className="space-y-24 sm:space-y-32 pb-20">
      {/* 3D HERO HEADER */}
      <section className="relative min-h-[75vh] flex items-center justify-center pt-28 pb-16 overflow-hidden">
        {/* 3D Canvas Background */}
        <div className="absolute inset-0 z-0 opacity-80 pointer-events-auto">
          <AmbientWaveCanvas intensity={0.95} interactive={true} />
        </div>

        {/* Ambient Top Glow */}
        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[650px] h-[320px] bg-gradient-to-r from-brand-cyan/15 via-brand-purple/15 to-brand-magenta/15 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-slate-200/90 shadow-sm text-xs font-mono font-bold text-brand-blue uppercase tracking-wider">
            MRNS Solutions • Services
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-slate-950 tracking-tight max-w-4xl mx-auto leading-tight">
            Software & Web Development <br />
            <span className="text-gradient">Built For Your Business Needs</span>.
          </h1>

          <p className="text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
            We create modern websites, interactive web applications, mobile apps and custom software designed to help businesses grow, simplify operations and succeed in the digital world.
          </p>

          {/* Category Filters with glassmorphism */}
          <div className="flex items-center justify-center gap-2 pt-4 flex-wrap">
            {[
              { id: 'all' as const, label: 'All Services (6)' },
              { id: 'web' as const, label: 'Websites & Web Apps' },
              { id: 'mobile' as const, label: 'Mobile Apps' },
              { id: 'software' as const, label: 'Software & Backend' },
            ].map(cat => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 rounded-full text-xs font-semibold backdrop-blur-md transition-all ${
                  selectedCategory === cat.id
                    ? 'bg-slate-900 text-white shadow-md'
                    : 'bg-white/80 text-slate-700 hover:text-slate-900 border border-slate-200/80 hover:bg-white shadow-xs'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* DETAILED SERVICES LIST */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="space-y-8">
          {filteredServices.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={service.id}
                className={`rounded-3xl bg-white border transition-all duration-300 p-8 sm:p-12 shadow-sm hover:shadow-premium ${
                  service.featured ? 'border-brand-purple/30 ring-1 ring-brand-purple/10' : 'border-slate-200/90'
                }`}
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                  {/* Left Column: Icon + Core Description */}
                  <div className="lg:col-span-7 space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-brand-cyan to-brand-purple text-white flex items-center justify-center shadow-md">
                        <Icon className="w-6 h-6" />
                      </div>
                      <div>
                        {service.featured && (
                          <span className="text-[10px] font-mono font-bold tracking-wider uppercase text-brand-purple bg-brand-purple/10 px-2 py-0.5 rounded-full mr-2">
                            Core Service
                          </span>
                        )}
                        <span className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                          Service 0{index + 1}
                        </span>
                      </div>
                    </div>

                    <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950 tracking-tight">
                      {service.title}
                    </h2>

                    <p className="text-sm font-semibold text-brand-purple">
                      {service.tagline}
                    </p>

                    <p className="text-sm text-slate-600 leading-relaxed">
                      {service.description}
                    </p>

                    {/* Key Offerings / Deliverables */}
                    <div className="pt-2 space-y-2.5">
                      <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400">
                        Key Offerings & Capabilities
                      </h4>
                      <div className="space-y-2">
                        {service.deliverables.map((item, i) => (
                          <div key={i} className="flex items-start gap-2.5 text-xs text-slate-700">
                            <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Tech Stack Pills */}
                    <div className="pt-3 flex flex-wrap gap-1.5 items-center">
                      <span className="text-xs font-mono text-slate-400 mr-1">Technologies:</span>
                      {service.techStack.map((tech, i) => (
                        <span key={i} className="px-2.5 py-1 rounded-lg bg-slate-100 text-slate-700 text-xs font-mono font-medium border border-slate-200/60">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Right Column: Service Highlights Box */}
                  <div className="lg:col-span-5 rounded-2xl bg-slate-950 p-6 text-white border border-slate-800 shadow-xl space-y-5">
                    <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                      <span className="font-mono text-xs text-slate-300">SERVICE OVERVIEW</span>
                      <span className="text-xs font-mono text-emerald-400 font-bold">CUSTOM SOLUTION</span>
                    </div>

                    <div className="grid grid-cols-3 gap-3 text-center">
                      <div className="p-3 rounded-xl bg-slate-900 border border-slate-800">
                        <div className="text-[10px] text-slate-400 font-mono">DESIGN</div>
                        <div className="text-sm font-bold text-brand-cyan mt-1">{service.metrics.item1}</div>
                      </div>

                      <div className="p-3 rounded-xl bg-slate-900 border border-slate-800">
                        <div className="text-[10px] text-slate-400 font-mono">DEVELOPMENT</div>
                        <div className="text-sm font-bold text-emerald-400 mt-1">{service.metrics.item2}</div>
                      </div>

                      <div className="p-3 rounded-xl bg-slate-900 border border-slate-800">
                        <div className="text-[10px] text-slate-400 font-mono">EXPERIENCE</div>
                        <div className="text-sm font-bold text-brand-magenta mt-1">{service.metrics.item3}</div>
                      </div>
                    </div>

                    <div className="pt-2">
                      <button
                        onClick={() => onNavigate('contact')}
                        className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-brand-cyan to-brand-purple hover:opacity-95 text-white font-bold text-xs tracking-wide flex items-center justify-center gap-2 transition-all shadow-md"
                      >
                        <span>Discuss Project For This Service</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-slate-900 p-8 sm:p-12 text-white border border-slate-800 flex flex-col md:flex-row items-center justify-between gap-8 shadow-xl">
          <div className="space-y-2 max-w-xl text-center md:text-left">
            <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
              Have a Project in Mind?
            </h3>
            <p className="text-sm text-slate-400">
              Whether you need a website, mobile application or custom software, let's discuss your idea and turn it into a working digital solution.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0">
            <button
              onClick={() => onNavigate('contact')}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-xs tracking-wide border border-white/20 transition-all"
            >
              <span>Contact Us</span>
            </button>
            <button
              onClick={() => onNavigate('contact')}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-gradient-to-r from-brand-cyan via-brand-purple to-brand-magenta text-white font-bold text-xs tracking-wide shadow-glow-brand hover:scale-105 transition-all"
            >
              <span>Start a Project</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
