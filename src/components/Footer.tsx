import React, { useState } from 'react';
import { Logo } from './Logo';
import { ArrowRight, CheckCircle2, Mail } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
    setTimeout(() => {
      setSubscribed(false);
      setEmail('');
    }, 4000);
  };

  const handleNav = (page: string) => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-slate-900 text-slate-300 pt-16 pb-12 overflow-hidden border-t border-slate-800">
      {/* Subtle background ambient mesh glow */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand-cyan/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-brand-purple/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800/80">
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-4">
            <div className="bg-white/95 inline-block p-2 rounded-xl shadow-md border border-white/20">
              <Logo size="md" showTagline={false} onClick={() => handleNav('home')} />
            </div>
            
            <p className="text-sm text-slate-400 max-w-sm leading-relaxed">
              <strong className="text-white font-medium">Modern Reliable Networked Solutions</strong> — 
              Building modern websites, high-performance web applications, and custom software tailored for reliable business growth.
            </p>

            <div className="flex items-center gap-2 pt-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800/90 border border-slate-700/80 text-xs font-mono text-emerald-400">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>All Core Nodes Operational • 99.99%</span>
              </div>
            </div>
          </div>

          {/* Quick Solutions */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-white">Solutions & Tech</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <button onClick={() => handleNav('services')} className="hover:text-brand-cyan transition-colors text-left">
                  Custom Software Systems
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('services')} className="hover:text-brand-cyan transition-colors text-left">
                  Web & Mobile Platforms
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('services')} className="hover:text-brand-cyan transition-colors text-left">
                  High-Throughput APIs
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('services')} className="hover:text-brand-cyan transition-colors text-left">
                  Microservices Mesh
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('services')} className="hover:text-brand-cyan transition-colors text-left">
                  High-Concurrency Tuning
                </button>
              </li>
            </ul>
          </div>

          {/* Products & Testimonials */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-white">Products & Trust</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <button onClick={() => handleNav('products')} className="hover:text-brand-purple transition-colors text-left">
                  Products Suite
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('projects')} className="hover:text-brand-purple transition-colors text-left">
                  Client Projects Portfolio
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('testimonials')} className="hover:text-brand-purple transition-colors text-left">
                  Client Testimonials
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('testimonials')} className="hover:text-brand-purple transition-colors text-left">
                  Submit Verified Feedback
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('about')} className="hover:text-brand-purple transition-colors text-left">
                  Our Approach
                </button>
              </li>
            </ul>
          </div>

          {/* Newsletter / Contact */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-white">Tech & Updates</h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Occasional updates on web technologies, software development, and modern digital solutions.
            </p>

            {subscribed ? (
              <div className="flex items-center gap-2 p-2.5 rounded-xl bg-emerald-950/40 border border-emerald-500/30 text-emerald-300 text-xs">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Subscribed to MRNS Updates!</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-2">
                <div className="relative">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@company.com"
                    required
                    className="w-full px-3.5 py-2 rounded-xl bg-slate-800/90 border border-slate-700 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-brand-cyan transition-colors"
                  />
                  <button
                    type="submit"
                    aria-label="Subscribe"
                    className="absolute right-1 top-1 bottom-1 px-3 bg-gradient-to-r from-brand-cyan to-brand-purple rounded-lg text-white hover:opacity-90 transition-opacity flex items-center justify-center"
                  >
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </form>
            )}

            <div className="pt-2">
              <button
                onClick={() => handleNav('contact')}
                className="w-full py-2 px-3 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700 text-xs font-semibold text-white flex items-center justify-center gap-1.5 transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-brand-cyan" />
                <span>Direct Contact Channel</span>
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 text-center sm:text-left">
            <span className="font-semibold text-slate-400">MRNS</span>
            <span>&copy; {new Date().getFullYear()} Modern Reliable Networked Solutions. All rights reserved.</span>
          </div>

          <div className="flex flex-wrap items-center justify-center sm:justify-end gap-x-6 gap-y-2">
            <button onClick={() => handleNav('about')} className="hover:text-slate-300 transition-colors">About</button>
            <button onClick={() => handleNav('services')} className="hover:text-slate-300 transition-colors">Services</button>
            <button onClick={() => handleNav('products')} className="hover:text-slate-300 transition-colors">Products</button>
            <button onClick={() => handleNav('projects')} className="hover:text-slate-300 transition-colors">Projects</button>
            <button onClick={() => handleNav('testimonials')} className="hover:text-slate-300 transition-colors">Testimonials</button>
            <button onClick={() => handleNav('contact')} className="hover:text-slate-300 transition-colors">Contact</button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
