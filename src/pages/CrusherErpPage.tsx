import React, { useState } from 'react';
import {
  ArrowRight, CheckCircle2, Sparkles, Scale, Factory, Receipt,
  BarChart3, Calculator, ShieldCheck, Users, Layers, Package,
  Monitor, Database, Server, Cloud, Truck, FileText, Eye,
  Camera, Printer, CreditCard, IndianRupee, Settings, Bell,
  Lock, ClipboardList, HardDrive, Cpu, Box, X
} from 'lucide-react';
import CrusherErpMockupViewer, { MockupModule } from '../components/CrusherErpMockupViewer';
import { AmbientWaveCanvas } from '../components/AmbientWaveCanvas';

interface CrusherErpPageProps {
  onNavigate: (page: string) => void;
}

/* ── Browser Mockup Frame ─────────────────────────────────── */
const BrowserFrame: React.FC<{
  src: string;
  alt: string;
  caption?: string;
  className?: string;
  moduleKey?: MockupModule;
  onOpenSim?: (mod: MockupModule) => void;
}> = ({ src, alt, caption, className = '', moduleKey, onOpenSim }) => (
  <div className={`rounded-2xl bg-slate-900 border border-slate-700 shadow-2xl overflow-hidden ${className}`}>
    <div className="flex items-center justify-between px-4 py-2.5 bg-slate-950 border-b border-slate-800">
      <div className="flex items-center gap-1.5">
        <span className="w-2.5 h-2.5 rounded-full bg-rose-500" />
        <span className="w-2.5 h-2.5 rounded-full bg-amber-500" />
        <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
        <span className="ml-3 text-[10px] font-mono text-slate-500">crusher-erp.app</span>
      </div>
      {moduleKey && onOpenSim && (
        <button
          onClick={() => onOpenSim(moduleKey)}
          className="px-2 py-0.5 rounded bg-brand-purple/20 hover:bg-brand-purple/40 text-brand-cyan text-[10px] font-mono font-bold flex items-center gap-1 transition-colors"
          title="Inspect this screen with active enterprise mock data"
        >
          <Sparkles className="w-2.5 h-2.5" />
          <span>View with Mock Data</span>
        </button>
      )}
    </div>
    <img src={src} alt={alt} className="w-full h-auto" loading="lazy" />
    {caption && (
      <div className="px-4 py-2 bg-slate-950 border-t border-slate-800 text-[11px] font-mono text-slate-400 flex items-center justify-between">
        <span>{caption}</span>
        {moduleKey && onOpenSim && (
          <button
            onClick={() => onOpenSim(moduleKey)}
            className="text-[10px] text-brand-cyan hover:underline flex items-center gap-1"
          >
            <span>Live simulation</span>
            <ArrowRight className="w-2.5 h-2.5" />
          </button>
        )}
      </div>
    )}
  </div>
);

/* ── Icon Placeholder (for features without screenshots) ──── */
const FeaturePlaceholder: React.FC<{
  icon: React.ElementType;
  label: string;
}> = ({ icon: Icon, label }) => (
  <div className="rounded-2xl bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 border border-slate-700 shadow-xl flex flex-col items-center justify-center min-h-[280px] text-center p-8 space-y-4">
    <div className="w-16 h-16 rounded-2xl bg-brand-purple/20 border border-brand-purple/30 flex items-center justify-center">
      <Icon className="w-8 h-8 text-brand-purple" />
    </div>
    <span className="text-xs font-mono text-slate-500">[Screenshot Coming Soon]</span>
    <span className="text-sm font-semibold text-slate-300">{label}</span>
  </div>
);

/* ── Feature data ─────────────────────────────────────────── */
const features = [
  {
    badge: 'Business Intelligence',
    title: 'Real-Time Business Control Center',
    desc: 'Get a comprehensive overview of your crusher business performance at a glance. Monitor financial metrics, production output, and operational status from a single unified dashboard.',
    bullets: [
      'Sales and revenue metrics with trend indicators',
      'Production output tracking (daily tonnage)',
      'Expense and profit monitoring',
      'Pending payments and collection status',
      'Operational metrics: vehicles, customers, weighments',
      'Recent business activity feed',
    ],
    screenshot: '/crusher-dashboard.jpg',
    screenshotAlt: 'Crusher ERP Dashboard — Business Control Center',
    placeholderIcon: BarChart3,
    placeholderLabel: 'Dashboard & Analytics',
    moduleKey: 'dashboard' as MockupModule,
  },
  {
    badge: 'Operations',
    title: 'Customer Accounts & Fleet Tracking',
    desc: 'Maintain detailed records of your customers, their outstanding balances, and all associated vehicles. Track diesel consumption, maintenance schedules, and document expiry dates.',
    bullets: [
      'Customer accounts with outstanding balance tracking',
      'Vehicle registration and management',
      'Diesel consumption tracking per vehicle',
      'Vehicle maintenance scheduling',
      'Document expiry alerts and reminders',
      'Customer-wise transaction history',
    ],
    screenshot: '/crusher-vehicles.png',
    screenshotAlt: 'Crusher ERP Vehicle & Fleet Management',
    placeholderIcon: Truck,
    placeholderLabel: 'Customer & Vehicle Management',
    moduleKey: 'vehicles' as MockupModule,
  },
  {
    badge: 'Inventory',
    title: 'Material Catalog & Stock Management',
    desc: 'Define your complete material catalog with pricing, GST rates, and HSN codes. Monitor real-time stock levels and manage inventory across your crusher operations.',
    bullets: [
      'Material catalog with configurable pricing',
      'GST rates and HSN code management',
      'Stock level monitoring with reorder indicators',
      'Purchase and production stock reconciliation',
      'Material category organization',
      'Price history and adjustment tracking',
    ],
    screenshot: '/crusher-materials.png',
    screenshotAlt: 'Crusher ERP Material Master & GST Catalog',
    placeholderIcon: Box,
    placeholderLabel: 'Materials & Inventory',
    moduleKey: 'materials' as MockupModule,
  },
  {
    badge: 'Production',
    title: 'Raw Material Purchases & Production Tracking',
    desc: 'Record raw stone purchases from suppliers, track daily production runs, and analyze yield output across different material types produced by your crusher.',
    bullets: [
      'Purchase orders and goods receipt notes',
      'Raw stone purchase tracking with supplier details',
      'Daily production entry and output recording',
      'Dynamic production output material allocation',
      'Production yield analysis across material types',
      'Supplier balance and payment tracking',
    ],
    screenshot: '/crusher-production.png',
    screenshotAlt: 'Crusher ERP Production & Daily Yield Tracking',
    placeholderIcon: Factory,
    placeholderLabel: 'Purchase & Production',
    moduleKey: 'production' as MockupModule,
  },
  {
    badge: 'Weighbridge',
    title: 'Integrated Two-Stage Weighbridge System',
    desc: 'Streamline your weighbridge operations with a dedicated two-stage weighing workflow. Supports live scale integration, manual entry, camera capture, and automated weight calculations.',
    bullets: [
      'Two-stage weighing cycle (tare → gross → net)',
      'Automatic net weight calculation',
      'Live electronic scale integration support',
      'Manual weight entry option',
      'Weighment slip generation and printing',
      'Camera integration for vehicle photo capture',
      'Weighment history with full audit trail',
    ],
    screenshot: '/crusher-weighbridge.jpg',
    screenshotAlt: 'Crusher ERP Weighbridge — Two-Stage Weighing Workflow',
    placeholderIcon: Scale,
    placeholderLabel: 'Weighbridge Management',
    moduleKey: 'weighment' as MockupModule,
  },
  {
    badge: 'Sales',
    title: 'GST-Compliant Invoicing & Sales Management',
    desc: 'Generate GST-compliant invoices, manage sales transactions, track partial and full payments, and maintain a complete record of all customer billing activity.',
    bullets: [
      'GST invoice generation with tax calculations',
      'Sales order and delivery management',
      'Consolidated invoice support',
      'Partial and full payment tracking',
      'Multiple payment method support',
      'Invoice printing and export',
    ],
    screenshot: '/crusher-sales.png',
    screenshotAlt: 'Crusher ERP Sales & Invoices from Weighment Data',
    placeholderIcon: Receipt,
    placeholderLabel: 'Sales & Billing',
    moduleKey: 'sales' as MockupModule,
  },
  {
    badge: 'Finance',
    title: 'Financial Ledger & Business Reporting',
    desc: 'Maintain a double-entry financial ledger, track expenses and salaries, and generate comprehensive business reports including profit/loss statements and receivables analysis.',
    bullets: [
      'Double-entry ledger with account statements',
      'Expense categorization and tracking',
      'Salary and payroll management',
      'Profit and loss reporting',
      'Receivables and outstanding balance reports',
      'Export to Excel, PDF, and CSV formats',
    ],
    screenshot: '/crusher-ledger.jpg',
    screenshotAlt: 'Crusher ERP Accounts — Financial Ledger & Statements',
    placeholderIcon: Calculator,
    placeholderLabel: 'Accounts & Reports',
    moduleKey: 'ledger' as MockupModule,
  },
  {
    badge: 'Administration',
    title: 'User Roles, Audit Logs & System Security',
    desc: 'Control access with role-based user management, maintain a complete audit trail of all system actions, and safeguard your data with backup and restore capabilities.',
    bullets: [
      'Role-based user management and permissions',
      'Complete audit log with filtering and search',
      'Backup and restore functionality',
      'System configuration and settings',
      'Notification management',
      'Timeline and analytics views for audit data',
    ],
    screenshot: '/crusher-auditlog.jpg',
    screenshotAlt: 'Crusher ERP Audit Log — Activity Tracking & Security',
    placeholderIcon: ShieldCheck,
    placeholderLabel: 'Security & Administration',
    moduleKey: 'audit' as MockupModule,
  },
];

const techStack = [
  { name: 'React', color: 'from-cyan-500 to-blue-500' },
  { name: 'TypeScript', color: 'from-blue-600 to-blue-800' },
  { name: 'Vite', color: 'from-purple-500 to-yellow-500' },
  { name: 'Node.js', color: 'from-green-600 to-green-800' },
  { name: 'Express', color: 'from-slate-600 to-slate-800' },
  { name: 'PostgreSQL', color: 'from-blue-500 to-indigo-700' },
  { name: 'MySQL', color: 'from-orange-500 to-blue-600' },
  { name: 'PGlite', color: 'from-blue-400 to-blue-600' },
  { name: 'SQLite', color: 'from-sky-500 to-cyan-600' },
  { name: 'Electron', color: 'from-teal-500 to-blue-600' },
  { name: 'Zustand', color: 'from-amber-500 to-orange-600' },
];

const deploymentOptions = [
  {
    icon: HardDrive,
    title: 'Local Database Mode',
    desc: 'PGlite / SQLite — runs entirely on the local machine with no server setup required.',
  },
  {
    icon: Database,
    title: 'External Database Mode',
    desc: 'PostgreSQL / MySQL — connect to an external database for centralized data storage.',
  },
  {
    icon: Monitor,
    title: 'Windows Desktop Application',
    desc: 'Electron-based desktop app for standalone Windows deployment.',
  },
  {
    icon: Users,
    title: 'Multi-User Deployment',
    desc: 'External database + backend server enabling multiple concurrent users.',
  },
];

const benefits = [
  'Manage daily crusher operations in one system',
  'Reduce manual record keeping',
  'Improve production visibility',
  'Track customer payments and outstanding balances',
  'Simplify weighbridge operations',
  'Monitor business performance with real-time dashboards',
  'Maintain centralized business records',
];

const screenshots: { src: string; alt: string; caption: string; moduleKey: MockupModule }[] = [
  { src: '/crusher-dashboard.jpg', alt: 'Dashboard — Business Control Center', caption: 'Business Control Center', moduleKey: 'dashboard' },
  { src: '/crusher-weighbridge.jpg', alt: 'Weighbridge — Two-Stage Weighing', caption: 'Weighbridge Management', moduleKey: 'weighment' },
  { src: '/crusher-production.png', alt: 'Production — Daily Crusher Yield Tracking', caption: 'Production & Yield', moduleKey: 'production' },
  { src: '/crusher-sales.png', alt: 'Sales & Invoices — Weighment Data Integration', caption: 'Sales & Invoices', moduleKey: 'sales' },
  { src: '/crusher-materials.png', alt: 'Material Master — Pricing & GST HSN', caption: 'Material Master', moduleKey: 'materials' },
  { src: '/crusher-vehicles.png', alt: 'Vehicle Management — Fleet & Diesel Tracking', caption: 'Vehicle & Fleet Tracking', moduleKey: 'vehicles' },
  { src: '/crusher-ledger.jpg', alt: 'Accounts — Financial Ledger', caption: 'Financial Ledger', moduleKey: 'ledger' },
  { src: '/crusher-auditlog.jpg', alt: 'Audit Log — Activity Tracking', caption: 'Audit Log & Security', moduleKey: 'audit' },
];

/* ══════════════════════════════════════════════════════════════
   MAIN COMPONENT
   ══════════════════════════════════════════════════════════════ */
export const CrusherErpPage: React.FC<CrusherErpPageProps> = ({ onNavigate }) => {
  const [activeSimModal, setActiveSimModal] = useState<MockupModule | null>(null);

  return (
    <div className="space-y-24 sm:space-y-32 pb-20">

      {/* ─── 1. 3D HERO SECTION ──────────────────────────────────── */}
      <section className="relative min-h-[85vh] flex items-center justify-center pt-28 pb-16 overflow-hidden">
        {/* 3D Canvas Background */}
        <div className="absolute inset-0 z-0 opacity-80 pointer-events-auto">
          <AmbientWaveCanvas intensity={0.95} interactive={true} />
        </div>

        {/* Ambient Top Glow */}
        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-gradient-to-r from-brand-cyan/15 via-brand-purple/15 to-brand-magenta/15 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Text */}
            <div className="space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-slate-200/90 shadow-sm text-xs font-mono font-bold text-brand-purple uppercase tracking-wider">
                <Package className="w-3.5 h-3.5" />
                <span>Developed by MRNS Solutions • Enterprise ERP</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-950 tracking-tight leading-tight">
                Complete Control Over Your{' '}
                <span className="text-gradient">Crusher Business</span>.
              </h1>

              <p className="text-lg text-slate-600 leading-relaxed max-w-xl mx-auto lg:mx-0">
                Manage your entire stone crusher operation from one intelligent platform — from purchases and production to weighbridge, sales, inventory, and financial management.
              </p>

              <div className="flex flex-col sm:flex-row items-center gap-3 pt-2 justify-center lg:justify-start">
                <a
                  href="#features"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-sm shadow-md transition-colors"
                >
                  <span>Explore Features</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
                <button
                  onClick={() => onNavigate('contact')}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-gradient-to-r from-brand-cyan via-brand-purple to-brand-magenta text-white font-bold text-sm shadow-glow-brand hover:scale-[1.02] transition-all"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>Request a Demo</span>
                </button>
              </div>
            </div>

          {/* Screenshot in browser mockup */}
          <div className="relative">
            <div className="absolute -top-8 -right-8 w-64 h-64 bg-brand-cyan/20 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-8 -left-8 w-48 h-48 bg-brand-magenta/20 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10" style={{ perspective: '1200px' }}>
              <div style={{ transform: 'rotateY(-4deg) rotateX(2deg)' }}>
                <BrowserFrame
                  src="/crusher-dashboard.jpg"
                  alt="Crusher ERP Dashboard — Business Control Center"
                  caption="Dashboard & Control Center"
                  moduleKey="dashboard"
                  onOpenSim={(mod) => setActiveSimModal(mod)}
                />
              </div>
            </div>

            {/* Floating glassmorphic pills */}
            <div className="absolute -top-2 -left-4 z-20 px-3.5 py-2 rounded-xl bg-white/10 backdrop-blur-lg border border-white/20 shadow-lg text-xs font-bold text-slate-700 bg-white/90">
              <div className="flex items-center gap-2">
                <Scale className="w-3.5 h-3.5 text-brand-purple" />
                Weighbridge Ready
              </div>
            </div>
            <div className="absolute top-1/2 -right-3 z-20 px-3.5 py-2 rounded-xl bg-white/90 backdrop-blur-lg border border-white/20 shadow-lg text-xs font-bold text-slate-700 hidden lg:flex items-center gap-2">
              <Receipt className="w-3.5 h-3.5 text-emerald-600" />
              GST Compliant
            </div>
            <div className="absolute -bottom-2 left-8 z-20 px-3.5 py-2 rounded-xl bg-white/90 backdrop-blur-lg border border-white/20 shadow-lg text-xs font-bold text-slate-700 flex items-center gap-2">
              <Monitor className="w-3.5 h-3.5 text-brand-cyan" />
              Desktop & Web
            </div>
          </div>
        </div>
      </div>
    </section>

      {/* ─── 2. PRODUCT OVERVIEW ──────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="text-xs font-mono font-bold tracking-widest uppercase text-brand-cyan">
            Product Overview
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight">
            One Platform. Complete Crusher Operations.
          </h2>
          <p className="text-slate-600 text-sm leading-relaxed">
            Crusher ERP brings together every aspect of your stone crusher business into a single, cohesive platform — eliminating the need for disconnected spreadsheets and manual registers.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {[
            { icon: Layers, title: 'Complete Business Management', desc: 'Unified platform covering all departments and workflows of your crusher business.' },
            { icon: Factory, title: 'Production & Inventory Tracking', desc: 'Record daily production, monitor stock levels, and track material output.' },
            { icon: Scale, title: 'Integrated Weighbridge', desc: 'Two-stage weighing with live scale support, camera integration, and slip printing.' },
            { icon: Receipt, title: 'GST Billing & Sales', desc: 'Generate GST-compliant invoices with tax calculations and payment tracking.' },
            { icon: Package, title: 'Purchase & Supplier Management', desc: 'Track raw stone purchases, manage suppliers, and monitor payables.' },
            { icon: IndianRupee, title: 'Financial Accounting', desc: 'Double-entry ledger, expense tracking, payroll, and profit/loss reports.' },
            { icon: BarChart3, title: 'Business Analytics & Reports', desc: 'Real-time dashboard with sales, production, and financial analytics.' },
          ].map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="group rounded-2xl bg-white border border-slate-200/80 p-6 space-y-3 shadow-sm hover:shadow-premium hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-brand-cyan/20 to-brand-purple/20 border border-brand-purple/20 flex items-center justify-center group-hover:scale-105 transition-transform">
                  <Icon className="w-5 h-5 text-brand-purple" />
                </div>
                <h3 className="text-sm font-bold text-slate-900">{item.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">{item.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* ─── 3. FEATURE SHOWCASE ──────────────────────────────── */}
      <section id="features" className="space-y-20 sm:space-y-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-2xl mx-auto space-y-3">
          <span className="text-xs font-mono font-bold tracking-widest uppercase text-brand-purple">
            Feature Deep Dive
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight">
            Everything Your Crusher Business Needs
          </h2>
        </div>

        {features.map((feat, idx) => {
          const isEven = idx % 2 === 1;
          return (
            <div key={idx} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className={`grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center ${isEven ? 'lg:[direction:rtl]' : ''}`}>
                {/* Text side */}
                <div className={`space-y-5 ${isEven ? 'lg:[direction:ltr]' : ''}`}>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-cyan/10 border border-brand-cyan/20 text-xs font-bold font-mono text-brand-blue">
                    {feat.badge}
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-950 tracking-tight">
                    {feat.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {feat.desc}
                  </p>
                  <div className="space-y-2 pt-2">
                    {feat.bullets.map((bullet, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-slate-700">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                        <span>{bullet}</span>
                      </div>
                    ))}
                  </div>

                  {feat.moduleKey && (
                    <div className="pt-2">
                      <button
                        onClick={() => setActiveSimModal(feat.moduleKey!)}
                        className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-gradient-to-r from-blue-50 to-indigo-50 hover:from-blue-100 hover:to-indigo-100 text-[#1e3a8a] text-xs font-bold border border-blue-200 shadow-sm transition-all"
                      >
                        <Sparkles className="w-3.5 h-3.5 text-blue-600" />
                        <span>View Exact Screen with Populated Mock Data</span>
                      </button>
                    </div>
                  )}
                </div>

                {/* Visual side */}
                <div className={isEven ? 'lg:[direction:ltr]' : ''}>
                  {feat.screenshot ? (
                    <BrowserFrame
                      src={feat.screenshot}
                      alt={feat.screenshotAlt || feat.title}
                      caption={feat.badge}
                      moduleKey={feat.moduleKey}
                      onOpenSim={(mod) => setActiveSimModal(mod)}
                    />
                  ) : (
                    <FeaturePlaceholder
                      icon={feat.placeholderIcon}
                      label={feat.placeholderLabel}
                    />
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </section>

      {/* ─── 4. SCREENSHOT GALLERY ────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="text-center space-y-3">
          <span className="text-xs font-mono font-bold tracking-widest uppercase text-brand-cyan">
            Product Gallery
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight">
            See Crusher ERP in Action
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {screenshots.map((shot, idx) => (
            <div key={idx} className="group">
              <BrowserFrame
                src={shot.src}
                alt={shot.alt}
                caption={shot.caption}
                moduleKey={shot.moduleKey}
                onOpenSim={(mod) => setActiveSimModal(mod)}
                className="group-hover:scale-[1.02] transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </section>

      {/* ─── 4B. INTERACTIVE APPLICATION SIMULATOR (MOCK DATA) ──── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-[#1e3a8a] border border-blue-200 text-xs font-mono font-bold">
            <Sparkles className="w-3.5 h-3.5 text-blue-600" />
            <span>Interactive Application Demo</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight">
            Explore Crusher ERP with Live Enterprise Mock Data
          </h2>
          <p className="text-slate-600 text-sm leading-relaxed">
            Experience the actual application interface populated with realistic crusher operational data — test drive production shifts, vehicle fleet tracking, material catalogs, and sales billing without altering the original software design.
          </p>
        </div>

        {/* Embedded Interactive Viewer */}
        <div className="rounded-3xl p-2 sm:p-4 bg-gradient-to-b from-slate-200 via-slate-100 to-slate-200 border border-slate-300 shadow-2xl">
          <CrusherErpMockupViewer />
        </div>
      </section>

      {/* ─── 5. TECHNOLOGY STACK ──────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="text-xs font-mono font-bold tracking-widest uppercase text-brand-purple">
            Technology
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight">
            Built With Modern Technology
          </h2>
          <p className="text-slate-600 text-sm leading-relaxed">
            Crusher ERP is built using a modern technology stack that supports both web browser and desktop deployment, with flexible database configuration options.
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-3">
          {techStack.map((tech, idx) => (
            <div
              key={idx}
              className="group px-5 py-3 rounded-xl bg-white border border-slate-200/80 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all flex items-center gap-2.5"
            >
              <div className={`w-2.5 h-2.5 rounded-full bg-gradient-to-br ${tech.color}`} />
              <span className="text-sm font-bold text-slate-800 font-mono">{tech.name}</span>
            </div>
          ))}
        </div>

        <p className="text-center text-xs text-slate-500 max-w-lg mx-auto">
          Supports web and desktop (Electron) deployment modes with local (PGlite/SQLite) and external (PostgreSQL/MySQL) database configurations.
        </p>
      </section>

      {/* ─── 6. BUSINESS BENEFITS ─────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="text-xs font-mono font-bold tracking-widest uppercase text-brand-cyan">
            Business Value
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight">
            Simplify Your Daily Crusher Operations
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-4xl mx-auto">
          {benefits.map((benefit, idx) => (
            <div
              key={idx}
              className="flex items-start gap-3 p-5 rounded-2xl bg-white border border-slate-200/80 shadow-sm hover:shadow-md transition-all"
            >
              <div className="w-8 h-8 shrink-0 rounded-lg bg-emerald-100 flex items-center justify-center">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              </div>
              <span className="text-sm font-medium text-slate-800 leading-snug">{benefit}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ─── 7. DEPLOYMENT OPTIONS ────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="text-xs font-mono font-bold tracking-widest uppercase text-brand-purple">
            Deployment
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight">
            Flexible Deployment Options
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {deploymentOptions.map((opt, idx) => {
            const Icon = opt.icon;
            return (
              <div
                key={idx}
                className="group rounded-2xl bg-white border border-slate-200/80 p-6 space-y-4 shadow-sm hover:shadow-premium hover:-translate-y-1 transition-all duration-300 text-center"
              >
                <div className="mx-auto w-12 h-12 rounded-xl bg-gradient-to-br from-brand-cyan/20 to-brand-purple/20 border border-brand-purple/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Icon className="w-6 h-6 text-brand-purple" />
                </div>
                <h3 className="text-sm font-bold text-slate-900">{opt.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">{opt.desc}</p>
              </div>
            );
          })}
        </div>

        <p className="text-center text-xs text-slate-500 max-w-lg mx-auto">
          Deployment capabilities depend on configuration and infrastructure setup.
        </p>
      </section>

      {/* ─── 8. FINAL CTA ─────────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl bg-gradient-to-br from-slate-900 via-slate-950 to-brand-navy p-10 sm:p-16 text-white overflow-hidden shadow-2xl border border-slate-800">
          {/* Glow accents */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-brand-cyan/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-magenta/20 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-3xl mx-auto text-center space-y-6">
            <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 text-brand-cyan border border-white/15 text-xs font-mono font-bold tracking-wider uppercase">
              Get Started with Crusher ERP
            </span>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-tight">
              Ready to Take Control of Your{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan via-brand-purple to-brand-magenta">
                Crusher Business
              </span>?
            </h2>

            <p className="text-slate-400 text-base max-w-xl mx-auto leading-relaxed">
              Discover how Crusher ERP can simplify your daily operations and bring your business activities together in one platform.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
              <button
                onClick={() => onNavigate('contact')}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-brand-cyan via-brand-purple to-brand-magenta text-white font-bold text-sm shadow-glow-brand hover:scale-105 transition-all"
              >
                <Sparkles className="w-4 h-4" />
                <span>Request a Product Demo</span>
              </button>
              <button
                onClick={() => onNavigate('contact')}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-white/10 hover:bg-white/15 text-white font-bold text-sm border border-white/20 transition-colors"
              >
                <span>Contact MRNS Solutions</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Modal Dialog for Focused Screen Simulation */}
      {activeSimModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/75 backdrop-blur-md animate-fadeIn">
          <div className="w-full max-w-6xl">
            <CrusherErpMockupViewer
              initialModule={activeSimModal}
              onClose={() => setActiveSimModal(null)}
              isModal={true}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default CrusherErpPage;
