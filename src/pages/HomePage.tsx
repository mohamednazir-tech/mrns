import React, { useState } from 'react';
import { AmbientWaveCanvas } from '../components/AmbientWaveCanvas';
import { 
  ArrowRight, ShieldCheck, Cpu, Zap, Activity, Layers, 
  Server, Globe, Database, CheckCircle2, ChevronRight, Terminal, 
  Sparkles, Lock, BarChart3, Users, Package, MessageSquareQuote 
} from 'lucide-react';

interface HomePageProps {
  onNavigate: (page: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  const [activeSolutionTab, setActiveSolutionTab] = useState<'software' | 'platforms' | 'apis' | 'scale'>('software');

  const solutionTabs = [
    {
      id: 'software' as const,
      name: 'Custom Software',
      icon: Layers,
      title: 'Custom Software Development',
      desc: 'Building tailored applications based on business requirements and real-world problems.',
      features: [
        'Designed specifically around your daily business workflows',
        'Modular architecture that easily expands as your business grows',
        'Clean, maintainable codebases built with modern web technologies',
        'Dedicated development support and continuous improvements'
      ],
      metrics: {
        item1Label: 'DEVELOPMENT APPROACH',
        item1Value: 'Tailored',
        item1Desc: 'Built around your specific business processes'
      ,
        item2Label: 'APPLICATION STRUCTURE',
        item2Value: 'Modular',
        item2Desc: 'Clean architecture ready for future enhancements'
      ,
        item3Label: 'QUALITY STANDARD',
        item3Value: 'Tested',
        item3Desc: 'Checked for reliability and smooth daily usage'
      },
      tag: 'Tailored Solutions'
    },
    {
      id: 'platforms' as const,
      name: 'Web Development',
      icon: Globe,
      title: 'Web Development',
      desc: 'Creating responsive, modern and user-friendly websites using current web technologies.',
      features: [
        'Mobile-first responsive design that looks great on all screens',
        'Modern layouts, typography and clean visual hierarchy',
        'Fast page loading and search engine friendly structure',
        'Clear call-to-actions that help connect with your visitors'
      ],
      metrics: {
        item1Label: 'RESPONSIVENESS',
        item1Value: 'Multi-Device',
        item1Desc: 'Fluid display across mobile, tablet, and desktop'
      ,
        item2Label: 'USER INTERACTION',
        item2Value: 'Intuitive',
        item2Desc: 'Easy navigation and clear information structure'
      ,
        item3Label: 'TECHNOLOGY STACK',
        item3Value: 'Modern Web',
        item3Desc: 'Built using React, TypeScript, and modern CSS'
      },
      tag: 'Modern Web'
    },
    {
      id: 'apis' as const,
      name: 'Frontend & Backend',
      icon: Cpu,
      title: 'Frontend & Backend Development',
      desc: 'Developing complete web applications with well-structured frontend interfaces and backend functionality.',
      features: [
        'Interactive, responsive user interfaces designed for usability',
        'Structured backend logic, API integrations and database handling',
        'Secure user authentication and data management workflows',
        'Smooth performance for everyday business activities'
      ],
      metrics: {
        item1Label: 'FRONTEND DESIGN',
        item1Value: 'Interactive',
        item1Desc: 'Clean interfaces built for pleasant user experiences'
      ,
        item2Label: 'BACKEND SERVICES',
        item2Value: 'Reliable',
        item2Desc: 'Structured data flow, APIs, and secure storage'
      ,
        item3Label: 'INTEGRATION',
        item3Value: 'Full-Stack',
        item3Desc: 'Seamless connection between interface and backend'
      },
      tag: 'Full-Stack'
    },
    {
      id: 'scale' as const,
      name: 'Business Automation',
      icon: Zap,
      title: 'Business Automation',
      desc: 'Helping businesses reduce repetitive tasks and improve their workflows through software.',
      features: [
        'Digitization of manual paperwork and repetitive spreadsheets',
        'Centralized tracking for records, inventory and daily activities',
        'Streamlined reporting and day-to-day business oversight',
        'User-friendly interfaces designed for team members to adopt quickly'
      ],
      metrics: {
        item1Label: 'WORKFLOW FOCUS',
        item1Value: 'Simplified',
        item1Desc: 'Automate repetitive tasks to save time and effort'
      ,
        item2Label: 'OPERATIONS',
        item2Value: 'Centralized',
        item2Desc: 'Keep records, inventory, and transactions organized'
      ,
        item3Label: 'USABILITY',
        item3Value: 'Practical',
        item3Desc: 'Intuitive tools designed for everyday business use'
      },
      tag: 'Operations'
    }
  ];

  const currentTab = solutionTabs.find(t => t.id === activeSolutionTab) || solutionTabs[0];

  return (
    <div className="space-y-24 sm:space-y-32 pb-16">
      {/* HERO SECTION WITH 3D AMBIENT WAVE MESH */}
      <section className="relative min-h-[90vh] flex items-center justify-center pt-24 pb-16 overflow-hidden">
        {/* 3D Canvas Background */}
        <div className="absolute inset-0 z-0 opacity-90 pointer-events-auto">
          <AmbientWaveCanvas intensity={1.15} interactive={true} showControls={true} />
        </div>

        {/* Ambient Top Glow */}
        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-gradient-to-r from-brand-cyan/15 via-brand-purple/15 to-brand-magenta/15 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="max-w-4xl mx-auto space-y-6">
            {/* Status Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-slate-200/90 shadow-sm text-xs font-semibold text-slate-700 animate-fadeIn">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="font-mono text-[11px] text-slate-500 uppercase tracking-wider">Software & Web Development</span>
              <span className="text-slate-300">|</span>
              <span className="text-brand-purple font-medium">Modern Digital Solutions</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-slate-950 tracking-tight leading-[1.08]">
              Turning Ideas Into <br className="hidden sm:inline" />
              <span className="text-gradient">Digital Experiences</span>.
            </h1>

            {/* Subtitle */}
            <p className="text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto font-normal leading-relaxed">
              At MRNS Solutions, we build modern websites, web applications and custom software that help businesses grow, simplify their operations and bring ideas to life.
            </p>

            {/* CTA Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <button
                onClick={() => onNavigate('services')}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-2xl bg-gradient-to-r from-brand-cyan via-brand-purple to-brand-magenta text-white font-bold text-base shadow-glow-brand hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
              >
                <span>Explore Our Services</span>
                <ArrowRight className="w-5 h-5" />
              </button>

              <button
                onClick={() => onNavigate('products')}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-2xl bg-white/90 hover:bg-white text-slate-800 font-bold text-base border border-slate-200/90 shadow-sm hover:shadow-md transition-all duration-200"
              >
                <Package className="w-5 h-5 text-brand-purple" />
                <span>View Our Products</span>
              </button>
            </div>

            {/* Business Highlights Under Hero */}
            <div className="pt-8 grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-3xl mx-auto text-left">
              {[
                { title: 'Practical Approach', desc: 'Understanding your needs' },
                { title: 'Modern Development', desc: 'Functional & maintainable' },
                { title: 'Creative Thinking', desc: 'Turning ideas to reality' },
                { title: 'Customer Support', desc: 'Clear communication' },
              ].map((pill, idx) => (
                <div key={idx} className="p-3 rounded-xl bg-white/80 backdrop-blur-md border border-slate-200/80 shadow-2xs hover:shadow-sm transition-shadow">
                  <div className="text-xs font-bold text-slate-900">{pill.title}</div>
                  <div className="text-[11px] text-slate-500 font-mono">{pill.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* METRIC BENCHMARKS TICKER / BUSINESS HIGHLIGHTS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl bg-white border border-slate-200/80 shadow-premium p-8 sm:p-12 overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-brand-cyan/5 rounded-full blur-3xl pointer-events-none" />
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-y md:divide-y-0 md:divide-x divide-slate-100">
            <div className="space-y-1 text-center md:text-left pt-4 md:pt-0">
              <span className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 font-display tracking-tight text-gradient">
                Custom
              </span>
              <p className="text-sm font-bold text-slate-800">Custom Development</p>
              <p className="text-xs text-slate-500">Solutions Built Around Your Needs</p>
            </div>

            <div className="space-y-1 text-center md:text-left pt-4 md:pt-0 md:pl-8">
              <span className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 font-display tracking-tight text-gradient-cyan">
                Modern
              </span>
              <p className="text-sm font-bold text-slate-800">Modern Technology</p>
              <p className="text-xs text-slate-500">Using Modern Development Tools</p>
            </div>

            <div className="space-y-1 text-center md:text-left pt-4 md:pt-0 md:pl-8">
              <span className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 font-display tracking-tight text-gradient">
                Creative
              </span>
              <p className="text-sm font-bold text-slate-800">Creative Solutions</p>
              <p className="text-xs text-slate-500">Turning Ideas Into Reality</p>
            </div>

            <div className="space-y-1 text-center md:text-left pt-4 md:pt-0 md:pl-8">
              <span className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 font-display tracking-tight text-slate-900">
                Focus
              </span>
              <p className="text-sm font-bold text-slate-800">Business Focus</p>
              <p className="text-xs text-slate-500">Technology That Makes a Difference</p>
            </div>
          </div>
        </div>
      </section>

      {/* OUR SERVICES / CORE CAPABILITIES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs font-mono font-bold tracking-widest uppercase text-brand-purple">
            Our Services
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight">
            Core Capabilities Built For Business Growth
          </h2>
          <p className="text-slate-600 text-base leading-relaxed">
            From modern websites to custom software solutions, we build practical digital tools designed to help businesses operate smoothly and succeed online.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              icon: Globe,
              title: 'Website Development',
              desc: 'Professional, responsive and modern websites that help businesses build a strong online presence.',
              color: 'from-blue-500 to-cyan-500'
            },
            {
              icon: Layers,
              title: 'Web Application Development',
              desc: 'Interactive web applications designed to simplify workflows and improve user experiences.',
              color: 'from-brand-purple to-brand-magenta'
            },
            {
              icon: Cpu,
              title: 'Custom Software Development',
              desc: 'Software solutions developed around specific business requirements and operational needs.',
              color: 'from-cyan-500 to-blue-600'
            },
            {
              icon: ShieldCheck,
              title: 'Business Solutions',
              desc: 'Practical digital solutions that help businesses manage their daily activities more efficiently.',
              color: 'from-brand-magenta to-rose-500'
            }
          ].map((service, idx) => {
            const Icon = service.icon;
            return (
              <div 
                key={idx}
                onClick={() => onNavigate('services')}
                className="group relative rounded-2xl bg-white p-7 border border-slate-200/80 shadow-sm hover:shadow-premium transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between cursor-pointer"
              >
                <div className="space-y-4">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${service.color} text-white flex items-center justify-center shadow-md group-hover:scale-105 transition-transform`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-brand-purple transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {service.desc}
                  </p>
                </div>

                <div className="pt-6 mt-4 border-t border-slate-100 flex items-center text-xs font-bold text-brand-purple group-hover:text-brand-cyan transition-colors">
                  <span>Explore our services</span>
                  <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* FEATURED SOLUTIONS TABBED SHOWCASE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-2 border-b border-slate-200">
          <div className="space-y-2 max-w-xl">
            <span className="text-xs font-mono font-bold tracking-widest uppercase text-brand-cyan">
              Technical Capabilities
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight">
              Software Development & Technical Capabilities
            </h2>
            <p className="text-slate-600 text-sm">
              Explore how MRNS Solutions builds tailored digital solutions using current technologies and practical development workflows.
            </p>
          </div>

          {/* Solution Tabs Switcher */}
          <div className="flex items-center gap-1.5 p-1.5 rounded-2xl bg-slate-100/90 border border-slate-200 overflow-x-auto max-w-full">
            {solutionTabs.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeSolutionTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveSolutionTab(tab.id)}
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold transition-all whitespace-nowrap ${
                    isActive
                      ? 'bg-white text-slate-950 shadow-sm border border-slate-200/80'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-white/50'
                  }`}
                >
                  <Icon className={`w-4 h-4 ${isActive ? 'text-brand-purple' : 'text-slate-400'}`} />
                  <span>{tab.name}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Tab Detail Display Card */}
        <div className="rounded-3xl bg-white border border-slate-200 shadow-premium p-8 sm:p-12 overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-cyan/10 text-brand-blue border border-brand-cyan/20 text-xs font-bold font-mono">
                <span>{currentTab.tag}</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-950 tracking-tight">
                {currentTab.title}
              </h3>

              <p className="text-slate-600 text-base leading-relaxed">
                {currentTab.desc}
              </p>

              <div className="space-y-3 pt-2">
                <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400">
                  Development Highlights
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {currentTab.features.map((feat, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs font-medium text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 flex items-center gap-4">
                <button
                  onClick={() => onNavigate('services')}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold transition-colors"
                >
                  <span>Explore Solutions</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  onClick={() => onNavigate('contact')}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-purple hover:text-brand-cyan transition-colors"
                >
                  <span>Discuss Your Project</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Right Live Spec Terminal */}
            <div className="lg:col-span-5 rounded-2xl bg-slate-950 p-6 text-white border border-slate-800 shadow-xl space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-slate-800 text-xs font-mono text-slate-400">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-rose-500" />
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-500" />
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                  <span className="ml-2 text-slate-300">mrns-development.log</span>
                </div>
                <span className="text-[10px] text-emerald-400 font-bold">ACTIVE</span>
              </div>

              <div className="space-y-4 font-mono text-xs">
                <div className="p-3 rounded-lg bg-slate-900/90 border border-slate-800 space-y-1">
                  <div className="text-slate-400 text-[11px]">{currentTab.metrics.item1Label}</div>
                  <div className="text-2xl font-bold text-brand-cyan">{currentTab.metrics.item1Value}</div>
                  <div className="text-[10px] text-slate-500">{currentTab.metrics.item1Desc}</div>
                </div>

                <div className="p-3 rounded-lg bg-slate-900/90 border border-slate-800 space-y-1">
                  <div className="text-slate-400 text-[11px]">{currentTab.metrics.item2Label}</div>
                  <div className="text-2xl font-bold text-brand-magenta">{currentTab.metrics.item2Value}</div>
                  <div className="text-[10px] text-slate-500">{currentTab.metrics.item2Desc}</div>
                </div>

                <div className="p-3 rounded-lg bg-slate-900/90 border border-slate-800 space-y-1">
                  <div className="text-slate-400 text-[11px]">{currentTab.metrics.item3Label}</div>
                  <div className="text-2xl font-bold text-emerald-400">{currentTab.metrics.item3Value}</div>
                  <div className="text-[10px] text-slate-500">{currentTab.metrics.item3Desc}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED PRODUCT — CRUSHER ERP */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="text-xs font-mono font-bold tracking-widest uppercase text-brand-purple">
            Featured Product
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight">
            Introducing Crusher ERP – Simplifying Crusher Business Management.
          </h2>
          <p className="text-slate-600 text-sm">
            Crusher ERP is a specialized business management application developed to help stone crusher businesses manage their daily operations, from weighbridge entries and production to inventory, sales and business reports.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {[
            {
              step: '01',
              title: 'Weighbridge Management',
              tech: 'Vehicle Weighing • Gross, Tare & Net Records',
              desc: 'Vehicle weighing, gross weight, tare weight and net weight records.'
            },
            {
              step: '02',
              title: 'Production & Inventory',
              tech: 'Raw Materials • Daily Output • Stock Tracking',
              desc: 'Raw material purchases, production tracking and stock management.'
            },
            {
              step: '03',
              title: 'GST Billing & Sales',
              tech: 'Sales Invoices • Customer Accounts • Payments',
              desc: 'Sales invoices, customer management and payment tracking.'
            },
            {
              step: '04',
              title: 'Business Reports',
              tech: 'Operational Summaries • Transactions • History',
              desc: 'Operational summaries, transaction history and business reports.'
            }
          ].map((tier, idx) => (
            <div 
              key={idx}
              className="relative p-6 rounded-2xl bg-white border border-slate-200/90 shadow-sm hover:shadow-md transition-all space-y-3"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-extrabold text-brand-purple bg-brand-purple/10 px-2.5 py-1 rounded-md">
                  0{idx + 1}
                </span>
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
              </div>
              <h3 className="text-base font-bold text-slate-900">{tier.title}</h3>
              <p className="text-xs font-mono text-slate-500">{tier.tech}</p>
              <p className="text-xs text-slate-600 leading-relaxed">{tier.desc}</p>
            </div>
          ))}
        </div>

        <div className="text-center pt-2">
          <button
            onClick={() => onNavigate('crusher-erp')}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs tracking-wide transition-colors"
          >
            <span>Explore Crusher ERP</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>

      {/* FINAL HIGH-IMPACT CALL TO ACTION BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl bg-gradient-to-br from-slate-900 via-slate-950 to-brand-navy p-10 sm:p-16 text-white overflow-hidden shadow-2xl border border-slate-800">
          <div className="absolute top-0 right-0 w-96 h-96 bg-brand-cyan/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-magenta/20 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-3xl mx-auto text-center space-y-6">
            <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 text-brand-cyan border border-white/15 text-xs font-mono font-bold tracking-wider uppercase">
              Start Your Project
            </span>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-tight">
              Have an Idea? <br className="hidden sm:inline" />
              <span className="text-gradient">Let's Build It Together</span>.
            </h2>

            <p className="text-slate-300 text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
              Whether you need a professional website, a custom web application or business software, MRNS Solutions can help turn your idea into reality.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <button
                onClick={() => onNavigate('contact')}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl bg-gradient-to-r from-brand-cyan via-brand-purple to-brand-magenta text-white font-bold text-sm shadow-glow-brand hover:scale-[1.02] active:scale-[0.98] transition-all"
              >
                <span>Start a Project</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => onNavigate('contact')}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-2xl bg-white/10 hover:bg-white/20 text-white font-bold text-sm border border-white/20 transition-all"
              >
                <span>Contact Us</span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
