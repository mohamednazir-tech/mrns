import React from 'react';
import { 
  Package, ArrowRight, CheckCircle2, Sparkles, Scale, Factory,
  Receipt, BarChart3, Calculator, Users, MessageSquare, Truck,
  ShieldCheck, Monitor, Database, ArrowUpRight
} from 'lucide-react';
import { AmbientWaveCanvas } from '../components/AmbientWaveCanvas';

interface ProductsPageProps {
  onNavigate: (page: string) => void;
}

export const ProductsPage: React.FC<ProductsPageProps> = ({ onNavigate }) => {
  const crusherErp = {
    id: 'crusher-erp',
    name: 'Crusher ERP',
    badge: 'Enterprise ERP Software',
    category: 'Enterprise Software & Industrial Operations',
    tagline: 'Complete stone crusher business management — from weighbridge to ledger.',
    description: 'A comprehensive, commercial-grade ERP system specifically designed for stone crusher businesses, quarries, and construction material suppliers. Manage purchases, production, weighbridge operations, GST billing, sales, vehicle fleet, and financial accounting from one intelligent platform.',
    features: [
      'Integrated two-stage weighbridge management with live scale connectivity',
      'Daily quarry production tracking with output yield analysis',
      'GST-compliant billing, E-way bill workflows, and customer sales statements',
      'Comprehensive fleet & vehicle management with diesel consumption tracking',
      'Double-entry financial ledger with profit/loss reporting and balance sheets',
      'Role-based access control, automated database backups, and tamper-proof audit trails',
    ],
    techStack: ['React', 'TypeScript', 'Node.js', 'Electron', 'PostgreSQL', 'SQLite / PGlite', 'Zustand'],
    modules: [
      {
        icon: Scale,
        title: 'Weighbridge Automation',
        desc: 'Gross, tare, and net calculations with dual-stage weighment, automated tare weight deduction, and thermal slip printing.',
      },
      {
        icon: Factory,
        title: 'Production & Yield Tracking',
        desc: 'Track daily stone crusher output across aggregates (40mm, 20mm, 10mm, M-sand, dust) with yield efficiency metrics.',
      },
      {
        icon: Receipt,
        title: 'GST Billing & Invoicing',
        desc: 'Generate GST tax invoices directly from weighment data with customizable HSN codes, tax slabs, and payment terms.',
      },
      {
        icon: Truck,
        title: 'Vehicle & Diesel Tracking',
        desc: 'Log trips per vehicle, monitor diesel efficiency (km/L and hours/L), and track vehicle fitness and permit expiries.',
      },
      {
        icon: Calculator,
        title: 'Financial Accounting',
        desc: 'Double-entry accounting, customer receivables, supplier payables, driver batta, and exportable financial reports.',
      },
      {
        icon: ShieldCheck,
        title: 'Audit Logs & User Roles',
        desc: 'Multi-user permission levels (Operator, Accountant, Admin), with immutable audit logs recording every weighment and entry.',
      },
    ]
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
            <Package className="w-3.5 h-3.5 text-brand-purple" />
            <span>MRNS Solutions • Products Suite</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-slate-950 tracking-tight max-w-4xl mx-auto leading-tight">
            Enterprise Software Products <br />
            <span className="text-gradient">Built For Modern Scale</span>.
          </h1>

          <p className="text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Explore commercial software products developed, owned, and offered by MRNS Solutions — purpose-built for operational efficiency, high concurrency, and measurable business growth.
          </p>

          <div className="flex items-center justify-center gap-3 pt-2">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur-md border border-slate-200/80 text-xs font-semibold text-slate-800 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Commercial Product Available: <strong>Crusher ERP</strong></span>
            </span>
          </div>
        </div>
      </section>

      {/* ─── 2. FEATURED PRODUCT — CRUSHER ERP ─────────────────── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-white border border-slate-200/90 shadow-premium overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
            {/* Screenshot Side */}
            <div className="lg:col-span-6 relative bg-gradient-to-br from-slate-900 via-slate-950 to-brand-navy p-8 sm:p-10 flex flex-col justify-center items-center overflow-hidden min-h-[380px]">
              <div className="absolute top-0 right-0 w-64 h-64 bg-brand-cyan/20 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-brand-magenta/20 rounded-full blur-3xl pointer-events-none" />
              
              {/* Browser mockup frame */}
              <div className="relative z-10 w-full max-w-lg rounded-2xl bg-slate-800 border border-slate-700 shadow-2xl overflow-hidden group">
                <div className="flex items-center justify-between px-4 py-2.5 bg-slate-900 border-b border-slate-700">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-rose-500" />
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-500" />
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                  </div>
                  <span className="text-[10px] font-mono text-slate-400">crusher-erp.mrns.in</span>
                  <span className="text-[10px] font-mono text-emerald-400 font-semibold bg-emerald-950/60 border border-emerald-500/30 px-2 py-0.5 rounded">
                    Active
                  </span>
                </div>
                <img 
                  src="/crusher-dashboard.jpg" 
                  alt="Crusher ERP Dashboard — Business Control Center" 
                  className="w-full h-auto object-cover group-hover:scale-[1.01] transition-transform duration-300" 
                  loading="lazy" 
                />
              </div>

              {/* Badges on screenshot */}
              <div className="relative z-10 mt-6 flex flex-wrap gap-2 justify-center">
                <span className="px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[11px] font-medium text-white">
                  GST Invoicing
                </span>
                <span className="px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[11px] font-medium text-white">
                  Live Weighbridge
                </span>
                <span className="px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[11px] font-medium text-white">
                  Desktop & Cloud
                </span>
              </div>
            </div>

            {/* Content Side */}
            <div className="lg:col-span-6 p-8 sm:p-12 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-purple/10 text-brand-purple border border-brand-purple/20 text-xs font-mono font-bold">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>{crusherErp.badge}</span>
                  </span>
                  <span className="text-xs text-slate-400 font-mono">Developed by MRNS</span>
                </div>

                <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight">
                  {crusherErp.name}
                </h2>

                <p className="text-sm font-semibold text-brand-purple">
                  {crusherErp.tagline}
                </p>

                <p className="text-sm text-slate-600 leading-relaxed">
                  {crusherErp.description}
                </p>
              </div>

              {/* Key features */}
              <div className="space-y-2.5 pt-2 border-t border-slate-100">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400">
                  Core Enterprise Capabilities
                </span>
                <div className="grid grid-cols-1 gap-2">
                  {crusherErp.features.map((feat, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tech stack */}
              <div className="space-y-2 pt-2 border-t border-slate-100">
                <span className="text-xs font-mono text-slate-400">Technology Architecture:</span>
                <div className="flex flex-wrap gap-1.5">
                  {crusherErp.techStack.map((tech, i) => (
                    <span key={i} className="px-2.5 py-0.5 rounded-md bg-slate-100 text-slate-700 text-xs font-mono border border-slate-200/70">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
                <button
                  onClick={() => onNavigate('crusher-erp')}
                  className="w-full sm:w-auto flex-1 py-3.5 px-6 rounded-xl bg-gradient-to-r from-brand-cyan via-brand-purple to-brand-magenta text-white font-bold text-xs flex items-center justify-center gap-2 shadow-glow-brand hover:scale-[1.02] transition-all"
                >
                  <span>Explore Crusher ERP In Detail</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  onClick={() => onNavigate('contact')}
                  className="w-full sm:w-auto py-3.5 px-6 rounded-xl bg-slate-100 hover:bg-slate-200/80 text-slate-800 font-bold text-xs flex items-center justify-center gap-2 transition-colors border border-slate-200"
                >
                  <MessageSquare className="w-4 h-4 text-brand-purple" />
                  <span>Request Live Demo</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 3. CRUSHER ERP SYSTEM MODULES ─────────────────────── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs font-mono font-bold tracking-widest uppercase text-brand-purple">
            Product Architecture & Modules
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight">
            End-to-End Stone Crusher Operations
          </h2>
          <p className="text-slate-600 text-base leading-relaxed">
            Crusher ERP replaces fragmented paper slips, manual tally sheets, and disconnected spreadsheets with a unified operational platform.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {crusherErp.modules.map((mod, idx) => {
            const Icon = mod.icon;
            return (
              <div
                key={idx}
                className="rounded-2xl bg-white border border-slate-200/80 p-7 shadow-sm hover:shadow-premium hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-brand-cyan/10 to-brand-purple/10 border border-brand-purple/20 text-brand-purple flex items-center justify-center shadow-xs">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-950">
                    {mod.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {mod.desc}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-brand-purple">
                  <span>Included Module</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ─── 4. PRODUCT ENQUIRY CTA SECTION ────────────────────── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-slate-900 p-8 sm:p-12 text-white border border-slate-800 flex flex-col md:flex-row items-center justify-between gap-8 shadow-xl">
          <div className="space-y-2 max-w-xl text-center md:text-left">
            <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
              Ready to deploy Crusher ERP for your business?
            </h3>
            <p className="text-sm text-slate-400">
              Speak directly with the MRNS Solutions team to schedule a custom live demonstration, verify weighbridge hardware compatibility, or request a localized deployment.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0">
            <button
              onClick={() => onNavigate('crusher-erp')}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white hover:bg-slate-100 text-slate-900 font-bold text-xs tracking-wide shadow-md transition-all"
            >
              <span>Explore Features</span>
              <ArrowUpRight className="w-4 h-4 text-brand-purple" />
            </button>
            <button
              onClick={() => onNavigate('contact')}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-gradient-to-r from-brand-cyan via-brand-purple to-brand-magenta text-white font-bold text-xs tracking-wide shadow-glow-brand hover:scale-105 transition-all"
            >
              <span>Initiate Product Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductsPage;
