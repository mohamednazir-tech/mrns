import React from 'react';
import { 
  ShieldCheck, Cpu, Layers, Zap, Award, Target, CheckCircle2, 
  ArrowRight, Users, Terminal, Activity, FileCode, Server, Globe 
} from 'lucide-react';
import Logo from '../components/Logo';
import { AmbientWaveCanvas } from '../components/AmbientWaveCanvas';

interface AboutPageProps {
  onNavigate: (page: string) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate }) => {
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
            Who We Are
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-slate-950 tracking-tight max-w-4xl mx-auto leading-tight">
            Turning Ideas Into Practical <br />
            <span className="text-gradient">Digital Experiences</span>.
          </h1>

          <p className="text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
            MRNS Solutions is a software and web development business focused on creating modern websites, web applications and custom software that help businesses grow and bring ideas to life.
          </p>

          <div className="pt-4 flex justify-center">
            <div className="p-5 rounded-2xl bg-white/90 backdrop-blur-md border border-slate-200/90 shadow-premium max-w-md w-full hover:scale-[1.02] transition-transform">
              <Logo size="lg" showTagline={true} />
            </div>
          </div>
        </div>
      </section>

      {/* OUR STORY & MISSION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <span className="text-xs font-mono font-bold tracking-widest uppercase text-brand-purple">
              Our Story & Mission
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight">
              Built on Ideas. Driven by Technology.
            </h2>
            <div className="space-y-4 text-slate-600 text-base leading-relaxed">
              <p>
                MRNS Solutions started with a simple vision: to make technology more useful and accessible for businesses and individuals.
              </p>
              <p>
                What began as a passion for web development and software creation is growing into a business focused on building meaningful digital solutions.
              </p>
              <p>
                We believe every business has different requirements, and the right software should be designed around those needs rather than forcing businesses to adapt to complicated systems.
              </p>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 text-sm font-semibold text-slate-900">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
                <span>Making Technology Work for Everyone</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-brand-cyan shrink-0" />
                <span>Creating a Smarter Digital Future</span>
              </div>
            </div>
          </div>

          <div className="relative rounded-3xl bg-slate-950 p-8 sm:p-10 text-white border border-slate-800 shadow-2xl space-y-6 overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-cyan/20 rounded-full blur-3xl pointer-events-none" />
            
            <div className="flex items-center justify-between pb-4 border-b border-slate-800">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse" />
                <span className="font-mono text-xs text-slate-300">WHY CHOOSE MRNS SOLUTIONS</span>
              </div>
              <span className="text-[10px] font-mono text-slate-500">VALUES</span>
            </div>

            <div className="space-y-4 font-mono text-xs text-slate-300">
              <div className="p-3.5 rounded-xl bg-slate-900/90 border border-slate-800 space-y-1">
                <div className="text-brand-cyan font-bold">01. REQUIREMENT-FOCUSED DEVELOPMENT</div>
                <div className="text-slate-400 text-[11px]">
                  We build solutions based on your actual business needs rather than forcing businesses to adapt to complicated systems.
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-900/90 border border-slate-800 space-y-1">
                <div className="text-brand-purple font-bold">02. MODERN TECHNOLOGIES</div>
                <div className="text-slate-400 text-[11px]">
                  We use modern technologies and clean development practices to create functional and maintainable applications.
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-900/90 border border-slate-800 space-y-1">
                <div className="text-brand-magenta font-bold">03. PRACTICAL PROBLEM SOLVING & COMMUNICATION</div>
                <div className="text-slate-400 text-[11px]">
                  We focus on useful features that solve real-world challenges, backed by clear communication and long-term client support.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT WE DO */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs font-mono font-bold tracking-widest uppercase text-brand-cyan">
            What We Do
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight">
            Digital Solutions Built For Business Needs
          </h2>
          <p className="text-slate-600 text-sm">
            We focus on developing practical software, modern websites, and digital experiences that deliver real value.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              icon: Globe,
              title: 'Website Development',
              desc: 'Creating professional, responsive websites that help businesses establish a strong online presence.'
            },
            {
              icon: Layers,
              title: 'Web Application Development',
              desc: 'Developing interactive applications that simplify workflows and improve everyday business operations.'
            },
            {
              icon: Cpu,
              title: 'Custom Software Development',
              desc: 'Building software tailored to individual business requirements and real-world challenges.'
            },
            {
              icon: ShieldCheck,
              title: 'Business Digital Solutions',
              desc: 'Helping businesses improve their processes through practical and effective technology.'
            }
          ].map((service, idx) => {
            const Icon = service.icon;
            return (
              <div 
                key={idx}
                className="p-7 rounded-2xl bg-white border border-slate-200/90 shadow-sm hover:shadow-md transition-all space-y-3"
              >
                <div className="w-10 h-10 rounded-xl bg-slate-100 text-slate-800 flex items-center justify-center">
                  <Icon className="w-5 h-5 text-brand-purple" />
                </div>
                <h3 className="text-base font-bold text-slate-900">{service.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">{service.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* OUR APPROACH */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs font-mono font-bold tracking-widest uppercase text-brand-purple">
            Our Approach
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight">
            How We Work With You
          </h2>
          <p className="text-slate-600 text-sm">
            A simple, practical process to take your requirements from initial concept to a dependable digital product.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          {[
            {
              step: '01',
              title: 'Understand',
              desc: 'We first understand your business, goals and requirements to ensure we build what you actually need.'
            },
            {
              step: '02',
              title: 'Plan',
              desc: 'We identify the right approach, technologies and features tailored for your specific project.'
            },
            {
              step: '03',
              title: 'Develop',
              desc: 'We transform your ideas into functional digital products through structured, clean development.'
            },
            {
              step: '04',
              title: 'Deliver',
              desc: 'We focus on quality, responsiveness and thorough testing before smooth project handover.'
            },
            {
              step: '05',
              title: 'Support',
              desc: 'We value clear communication, transparency and continued support as your business evolves.'
            }
          ].map((stage, idx) => (
            <div 
              key={idx}
              className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-sm hover:shadow-md transition-all space-y-3 flex flex-col justify-between"
            >
              <div className="space-y-3">
                <span className="text-xs font-mono font-extrabold text-brand-cyan bg-brand-cyan/10 px-2.5 py-1 rounded-md">
                  PHASE {stage.step}
                </span>
                <h3 className="text-sm font-bold text-slate-900">{stage.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">{stage.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-slate-900 p-8 sm:p-12 text-white border border-slate-800 flex flex-col md:flex-row items-center justify-between gap-8 shadow-xl">
          <div className="space-y-2 max-w-xl text-center md:text-left">
            <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
              Let's Turn Your Idea Into Reality.
            </h3>
            <p className="text-sm text-slate-400">
              Have a website idea, software requirement or business challenge? Let's discuss how MRNS Solutions can help you bring it to life.
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

export default AboutPage;
