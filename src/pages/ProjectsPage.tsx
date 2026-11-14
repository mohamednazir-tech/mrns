import React, { useState } from 'react';
import { 
  FolderKanban, ArrowRight, ExternalLink, CheckCircle2, 
  Sparkles, Code2, Globe, ShieldCheck, Layers, Cpu,
  Building2, FileText, Lightbulb, Hammer, Smartphone
} from 'lucide-react';
import { ProjectVideoPlayer } from '../components/ProjectVideoPlayer';
import { ProjectMobileShowcase, MobileScreenshot } from '../components/ProjectMobileShowcase';
import { AmbientWaveCanvas } from '../components/AmbientWaveCanvas';

interface ProjectsPageProps {
  onNavigate: (page: string) => void;
}

interface ProjectItem {
  id: string;
  number: string;
  name: string;
  category: string;
  categoryBadge: string;
  tagline: string;
  description: string;
  liveUrl?: string;
  displayUrl?: string;
  videoSrc?: string;
  poster?: string;
  screenshots?: MobileScreenshot[];
  features: string[];
  techStack: string[];
  icon: React.ElementType;
  brandTheme: {
    gradient: string;
    badgeBg: string;
    badgeText: string;
    accentColor: string;
  };
}

export const ProjectsPage: React.FC<ProjectsPageProps> = ({ onNavigate }) => {
  const [selectedFilter, setSelectedFilter] = useState<string>('all');

  const projects: ProjectItem[] = [
    {
      id: 'kadambam-builders',
      number: '01',
      name: 'Kadambam Builders',
      category: 'Real Estate & Construction',
      categoryBadge: 'Construction Platform',
      tagline: 'Premier residential & commercial construction portal in Tirunelveli.',
      description: 'A modern corporate web platform and customer acquisition showcase developed for Kadambam Builders. Features residential and commercial project portfolios, architectural plan consulting workflows, and structured SEO architecture.',
      liveUrl: 'https://kadambambuilders.com/',
      displayUrl: 'kadambambuilders.com',
      videoSrc: '/videos/Best Builders in Tirunelveli _ Construction Company _ Kadambam Builders - 14 November 2026.mp4',
      features: [
        'Residential homes, commercial complexes, and turnkey renovation showcases',
        'Online consultation booking and project estimation enquiry workflow',
        'Geo-targeted local SEO architecture with Schema.org Organization markup and 4.8★ reviews',
        'High-speed Jamstack architecture with code-split Vite bundles and Supabase backend'
      ],
      techStack: ['React', 'TypeScript', 'Vite', 'Supabase', 'Tailwind CSS', 'Google Analytics'],
      icon: Building2,
      brandTheme: {
        gradient: 'from-amber-950 via-slate-950 to-orange-950',
        badgeBg: 'bg-amber-500/20',
        badgeText: 'text-amber-400',
        accentColor: '#f59e0b',
      }
    },
    {
      id: 'milestone-construction',
      number: '02',
      name: 'New Milestone Construction',
      category: 'Civil Contracting & Interiors',
      categoryBadge: 'Contracting Portfolio',
      tagline: 'Building construction, contracting & bespoke interior works.',
      description: 'High-conversion digital showcase for Milestone Construction, delivering building construction, commercial contracting, bespoke interior works, woodwork, and building plan consulting across Tamil Nadu.',
      liveUrl: 'https://new-milestone-construction.vercel.app/',
      displayUrl: 'new-milestone-construction.vercel.app',
      videoSrc: '/videos/WhatsApp Video 2026-11-08 at 2.00.20 PM.mp4',
      features: [
        'End-to-end service catalog covering residential building, turnkey interiors, and 3D plan consulting',
        'Interactive portfolio gallery highlighting executed construction milestones',
        'Fast mobile-first layout with smooth navigation and direct contact integrations',
        'Structured GeneralContractor Schema metadata optimized for local search visibility'
      ],
      techStack: ['React', 'Vite', 'Tailwind CSS', 'Vercel Edge Network', 'Schema.org JSON-LD'],
      icon: Hammer,
      brandTheme: {
        gradient: 'from-blue-950 via-slate-950 to-cyan-950',
        badgeBg: 'bg-blue-500/20',
        badgeText: 'text-blue-400',
        accentColor: '#0ea5e9',
      }
    },
    {
      id: 'indiran-tech',
      number: '03',
      name: 'Indiran Tech',
      category: 'Legal Documentation & E-Gov',
      categoryBadge: 'Government Services Portal',
      tagline: 'Document writing, registration & land governance services.',
      description: 'Bilingual digital service portal for IDIRAN TECH, a specialized document writer and property registration office situated in Gangaikondan, Tirunelveli district, Tamil Nadu.',
      liveUrl: 'https://indiran-tech.vercel.app/',
      displayUrl: 'indiran-tech.vercel.app',
      videoSrc: '/videos/Copy of Document Writer & Registration Services in Tamil Nadu _ IDIRAN TECH - 14 November 2026.mp4',
      features: [
        'Comprehensive guide & assistance workflow for property registration and Encumbrance Certificates (EC)',
        'Marriage registration, Patta Chitta transfer, and certified document copy processing',
        'Bilingual localized interface tailored for regional clients in Tamil and English',
        'Optimized asset delivery with WebP preload strategies and Supabase backend connectivity'
      ],
      techStack: ['React', 'Vite', 'Supabase', 'WebP Optimization', 'Tailwind CSS', 'Vercel'],
      icon: FileText,
      brandTheme: {
        gradient: 'from-emerald-950 via-slate-950 to-teal-950',
        badgeBg: 'bg-emerald-500/20',
        badgeText: 'text-emerald-400',
        accentColor: '#10b981',
      }
    },
    {
      id: 'moosin-led',
      number: '04',
      name: 'Moosin LED Lights',
      category: 'Manufacturing & Commercial Tech',
      categoryBadge: 'B2B Product Platform',
      tagline: 'Industrial & commercial LED lighting manufacturer catalog.',
      description: 'Comprehensive B2B product catalog and manufacturer showcase for MOOSIN LED LIGHTS, a trusted LED lighting manufacturer in Tirunelveli, Tamil Nadu, supplying energy-efficient commercial and industrial lighting solutions.',
      liveUrl: 'https://moosin.vercel.app/',
      displayUrl: 'moosin.vercel.app',
      videoSrc: '/videos/MOOSIN LED LIGHTS _ Best LED Manufacturer in Tirunelveli, Tamil Nadu - 9 November 2026.mp4',
      features: [
        'Complete product catalog featuring industrial LED flood lights, street lights, panel lights, and COB spotlights',
        'Energy-efficient technical specifications, lumens ratings, and commercial lighting parameters',
        'Wholesale inquiry pipeline connecting commercial contractors with factory-direct pricing',
        'Structured Product Schema markup with Google indexing optimization'
      ],
      techStack: ['React', 'Vite', 'Tailwind CSS', 'Product Schema.org', 'Vercel'],
      icon: Lightbulb,
      brandTheme: {
        gradient: 'from-indigo-950 via-slate-950 to-purple-950',
        badgeBg: 'bg-purple-500/20',
        badgeText: 'text-purple-400',
        accentColor: '#8b5cf6',
      }
    },
    {
      id: 'jigarthanda-pos',
      number: '05',
      name: 'Madurai Vilakkuthoon Hanifa Jigarthanda',
      category: 'Mobile App Development',
      categoryBadge: 'Mobile POS & Business App',
      tagline: 'Smart POS, billing & shop operations mobile application.',
      description: 'A modern mobile-based Point of Sale (POS) and business management application developed for Madurai Vilakkuthoon Hanifa Jigarthanda. The application helps manage daily shop operations, including menu management, order processing, billing, payment tracking, sales reports and Bluetooth thermal printing through a simple and user-friendly mobile interface.',
      screenshots: [
        {
          src: '/WhatsApp Image 2026-11-15 at 12.50.01 AM.jpeg',
          caption: 'Smart POS Billing & Menu Catalog',
          description: 'Category menu browsing, quick-add to cart, and automatic total calculations.'
        },
        {
          src: '/WhatsApp Image 2026-11-15 at 12.50.02 AM.jpeg',
          caption: 'Cart & Order Checkout Workflow',
          description: 'Item quantity adjustments, real-time tax calculation, and instant payment recording.'
        },
        {
          src: '/WhatsApp Image 2026-11-15 at 12.50.02 AM (1).jpeg',
          caption: 'Live Order Management',
          description: 'Active order status tracking, customer order history, and multi-device sync.'
        },
        {
          src: '/WhatsApp Image 2026-11-15 at 12.50.02 AM (2).jpeg',
          caption: 'Bluetooth Thermal Bill Printing',
          description: 'Direct mobile bill printing with Bluetooth thermal printer auto-reconnection.'
        },
        {
          src: '/WhatsApp Image 2026-11-15 at 12.50.02 AM (3).jpeg',
          caption: 'Sales Reports & Revenue Analytics',
          description: 'Daily sales summaries, monthly revenue overview, and Cash vs UPI payment analysis.'
        },
        {
          src: '/WhatsApp Image 2026-11-15 at 12.51.17 AM.jpeg',
          caption: 'Multi-User Role Permissions',
          description: 'Granular access controls for Admin, Shop Manager, and Staff accounts.'
        },
        {
          src: '/WhatsApp Image 2026-11-15 at 12.51.42 AM.jpeg',
          caption: 'Business & Hardware Settings',
          description: 'Shop profile management, GST billing details, and printer hardware configuration.'
        }
      ],
      features: [
        'Smart POS Billing: Browse menu items by category, manage cart quantities, and generate bills with automatic totals',
        'Order Management: View customer orders, track order history, and monitor daily sales across connected devices',
        'Bluetooth Thermal Printing: Connect Bluetooth thermal printers and print bills directly from the application',
        'Sales Reports & Analytics: Daily sales summaries, monthly revenue overview, and Cash vs UPI payment breakdown',
        'Multi-User Access: Dedicated permission levels for Admin, Manager, and Staff with restricted access controls',
        'Business Settings: Shop profile management, GST billing details, user profile controls, and printer settings'
      ],
      techStack: [
        'React Native',
        'Expo SDK 54',
        'TypeScript',
        'Expo Router',
        'Node.js',
        'TanStack Query',
        'Context API',
        'AsyncStorage',
        'Bluetooth Classic',
        'REST API'
      ],
      icon: Smartphone,
      brandTheme: {
        gradient: 'from-rose-950 via-slate-950 to-amber-950',
        badgeBg: 'bg-rose-500/20',
        badgeText: 'text-rose-400',
        accentColor: '#f43f5e',
      }
    }
  ];

  const filteredProjects = selectedFilter === 'all'
    ? projects
    : projects.filter(p => p.category.toLowerCase().includes(selectedFilter.toLowerCase()));

  const handleOpenLive = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="space-y-24 sm:space-y-32 pb-20">

      {/* ─── 1. 3D HERO HEADER ──────────────────────────────────── */}
      <section className="relative min-h-[75vh] flex items-center justify-center pt-28 pb-16 overflow-hidden">
        {/* 3D Canvas Background */}
        <div className="absolute inset-0 z-0 opacity-80 pointer-events-auto">
          <AmbientWaveCanvas intensity={0.95} interactive={true} />
        </div>

        {/* Ambient Top Glow */}
        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[650px] h-[320px] bg-gradient-to-r from-brand-cyan/15 via-brand-purple/15 to-brand-magenta/15 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-slate-200/90 shadow-sm text-xs font-mono font-bold text-brand-blue uppercase tracking-wider">
            <FolderKanban className="w-3.5 h-3.5 text-brand-purple" />
            <span>MRNS Solutions • Production Portfolio</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-slate-950 tracking-tight max-w-4xl mx-auto leading-tight">
            Crafted With Precision. <br />
            <span className="text-gradient">Built For Real-World Scale</span>.
          </h1>

          <p className="text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
            A showcase of commercial web applications and digital platforms personally designed, developed, and delivered to active businesses.
          </p>

          {/* Quick Filter Tabs */}
          <div className="flex items-center justify-center gap-2 pt-4 flex-wrap">
            {[
              { id: 'all', label: 'All Projects (5)' },
              { id: 'mobile', label: 'Mobile Apps' },
              { id: 'construction', label: 'Construction & Civil' },
              { id: 'legal', label: 'Legal & E-Gov' },
              { id: 'manufacturing', label: 'B2B & Products' },
            ].map(filter => (
              <button
                key={filter.id}
                onClick={() => setSelectedFilter(filter.id)}
                className={`px-4 py-2 rounded-full text-xs font-semibold backdrop-blur-md transition-all ${
                  selectedFilter === filter.id
                    ? 'bg-slate-900 text-white shadow-md'
                    : 'bg-white/80 text-slate-700 hover:text-slate-900 border border-slate-200/80 hover:bg-white shadow-xs'
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 2. PROJECTS SHOWCASE (ALTERNATING HORIZONTAL LAYOUT) ─ */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24 sm:space-y-32">
        {filteredProjects.map((project, idx) => {
          // Odd projects (0 and 2): Video left, Info right
          // Even projects (1 and 3): Info left, Video right
          const isEven = idx % 2 === 1;
          const ProjectIcon = project.icon;

          return (
            <div 
              key={project.id}
              className="relative p-6 sm:p-10 lg:p-12 rounded-3xl bg-white border border-slate-200/90 shadow-premium transition-all duration-300"
            >
              <div className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center ${isEven ? 'lg:[direction:rtl]' : ''}`}>
                
                {/* ── PREVIEW / VIDEO PLAYER OR MOBILE SHOWCASE (7 cols on lg) ── */}
                <div className={`lg:col-span-7 ${isEven ? 'lg:[direction:ltr]' : ''}`}>
                  {project.screenshots && project.screenshots.length > 0 ? (
                    <ProjectMobileShowcase
                      screenshots={project.screenshots}
                      title={project.name}
                      category={project.categoryBadge}
                      brandTheme={project.brandTheme}
                    />
                  ) : (
                    <ProjectVideoPlayer
                      videoSrc={project.videoSrc}
                      poster={project.poster}
                      title={project.name}
                      liveUrl={project.liveUrl || '#'}
                      displayUrl={project.displayUrl || ''}
                      category={project.categoryBadge}
                      brandTheme={project.brandTheme}
                    />
                  )}
                </div>

                {/* ── PROJECT INFORMATION SIDE (5 cols on lg) ───── */}
                <div className={`lg:col-span-5 space-y-6 ${isEven ? 'lg:[direction:ltr]' : ''}`}>
                  
                  {/* Top Badge & Number */}
                  <div className="flex items-center justify-between">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-slate-700 font-mono text-xs font-bold border border-slate-200">
                      <ProjectIcon className="w-3.5 h-3.5 text-brand-purple" />
                      <span>{project.category}</span>
                    </div>

                    <span className="text-2xl font-black font-mono text-slate-300">
                      /{project.number}
                    </span>
                  </div>

                  {/* Title & Tagline */}
                  <div className="space-y-2">
                    <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950 tracking-tight">
                      {project.name}
                    </h2>
                    <p className="text-xs font-semibold text-brand-purple">
                      {project.tagline}
                    </p>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Verified Features */}
                  <div className="space-y-2 pt-2 border-t border-slate-100">
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400">
                      Key Features & Highlights
                    </span>
                    <div className="space-y-1.5">
                      {project.features.map((feat, i) => (
                        <div key={i} className="flex items-start gap-2 text-xs text-slate-700">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Technologies Used (Only verified from live sites) */}
                  <div className="space-y-2 pt-2 border-t border-slate-100">
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400">
                      Verified Technology Stack
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {project.techStack.map((tech, i) => (
                        <span 
                          key={i} 
                          className="px-2.5 py-1 rounded-lg bg-slate-100 text-slate-800 text-[11px] font-mono font-medium border border-slate-200/70"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="pt-4 border-t border-slate-100 flex items-center gap-3">
                    {project.liveUrl ? (
                      <>
                        <button
                          onClick={() => handleOpenLive(project.liveUrl!)}
                          className="flex-1 py-3 px-4 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs flex items-center justify-center gap-2 transition-colors shadow-sm"
                        >
                          <span>View Project</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </button>

                        <button
                          onClick={() => handleOpenLive(project.liveUrl!)}
                          className="py-3 px-4 rounded-xl bg-white hover:bg-slate-50 text-slate-700 font-bold text-xs flex items-center gap-2 border border-slate-300 transition-colors shadow-sm"
                          title={`Visit ${project.displayUrl}`}
                        >
                          <Globe className="w-3.5 h-3.5 text-brand-purple" />
                          <span>Live Website</span>
                          <ExternalLink className="w-3 h-3 text-slate-400" />
                        </button>
                      </>
                    ) : (
                      <>
                        <button
                          onClick={() => onNavigate('contact')}
                          className="flex-1 py-3 px-4 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs flex items-center justify-center gap-2 transition-colors shadow-sm"
                        >
                          <span>Request App Demo</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </button>

                        <button
                          onClick={() => onNavigate('contact')}
                          className="py-3 px-4 rounded-xl bg-white hover:bg-slate-50 text-slate-700 font-bold text-xs flex items-center justify-center gap-2 border border-slate-300 transition-colors shadow-sm"
                          title="Enquire about custom mobile app development"
                        >
                          <Smartphone className="w-3.5 h-3.5 text-rose-500" />
                          <span>Enquire About App</span>
                        </button>
                      </>
                    )}
                  </div>

                </div>

              </div>
            </div>
          );
        })}
      </section>

      {/* ─── 3. FINAL CALL TO ACTION SECTION ──────────────────── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl bg-gradient-to-br from-slate-900 via-slate-950 to-brand-navy p-10 sm:p-16 text-white overflow-hidden shadow-2xl border border-slate-800">
          {/* Ambient Glows */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-brand-cyan/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-magenta/20 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-3xl mx-auto text-center space-y-6">
            <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 text-brand-cyan border border-white/15 text-xs font-mono font-bold tracking-wider uppercase">
              Start Your Digital Project
            </span>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-tight">
              Have an Idea? <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan via-brand-purple to-brand-magenta">
                Let's Build Something Great Together.
              </span>
            </h2>

            <p className="text-slate-400 text-base max-w-xl mx-auto leading-relaxed">
              Have a project in mind? Let's turn your ideas into meaningful digital experiences with high performance and elegant design.
            </p>

            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={() => onNavigate('contact')}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-brand-cyan via-brand-purple to-brand-magenta text-white font-bold text-sm shadow-glow-brand hover:scale-105 active:scale-95 transition-all"
              >
                <Sparkles className="w-4 h-4" />
                <span>Start a Project</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default ProjectsPage;
