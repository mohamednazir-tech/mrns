import React, { useState, useEffect, useRef } from 'react';
import { Search, Compass, ArrowRight, Layers, Cpu, ShieldCheck, Mail, Sparkles, X, Package, MessageSquareQuote, FolderKanban } from 'lucide-react';

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (page: string) => void;
}

interface CommandItem {
  id: string;
  title: string;
  description: string;
  category: 'Navigation' | 'Services' | 'Products' | 'Actions';
  icon: React.ElementType;
  action: () => void;
}

export const CommandPalette: React.FC<CommandPaletteProps> = ({ isOpen, onClose, onNavigate }) => {
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  const items: CommandItem[] = [
    {
      id: 'home',
      title: 'Home',
      description: 'Overview of MRNS, 3D Hero, Core Value Pillars & Solutions',
      category: 'Navigation',
      icon: Compass,
      action: () => { onNavigate('home'); onClose(); }
    },
    {
      id: 'about',
      title: 'About Us',
      description: 'Our mission, development standards, team & philosophy',
      category: 'Navigation',
      icon: ShieldCheck,
      action: () => { onNavigate('about'); onClose(); }
    },
    {
      id: 'services',
      title: 'Services',
      description: 'Explore full-stack software, mobile/web apps, and high-throughput APIs',
      category: 'Navigation',
      icon: Layers,
      action: () => { onNavigate('services'); onClose(); }
    },
    {
      id: 'products',
      title: 'Products',
      description: 'Showcase of products developed and offered by MRNS Solutions',
      category: 'Navigation',
      icon: Package,
      action: () => { onNavigate('products'); onClose(); }
    },
    {
      id: 'projects',
      title: 'Projects Showcase',
      description: 'Featured client websites and web applications developed by MRNS',
      category: 'Navigation',
      icon: FolderKanban,
      action: () => { onNavigate('projects'); onClose(); }
    },
    {
      id: 'testimonials',
      title: 'Testimonials',
      description: 'Client experiences, feedback slots, and verified project ratings',
      category: 'Navigation',
      icon: MessageSquareQuote,
      action: () => { onNavigate('testimonials'); onClose(); }
    },
    {
      id: 'contact',
      title: 'Contact Us & Consultation',
      description: 'Start a project, request enterprise SLA, or get in touch',
      category: 'Navigation',
      icon: Mail,
      action: () => { onNavigate('contact'); onClose(); }
    },
    // Products
    {
      id: 'crusher-erp',
      title: 'Crusher ERP',
      description: 'Complete ERP system for stone crusher businesses — weighbridge, billing, production & accounting',
      category: 'Products',
      icon: Package,
      action: () => { onNavigate('crusher-erp'); onClose(); }
    },
    // Services direct links
    {
      id: 'service-website-dev',
      title: 'Website Development',
      description: 'Modern, responsive and professional websites for businesses and portfolios',
      category: 'Services',
      icon: Layers,
      action: () => { onNavigate('services'); onClose(); }
    },
    {
      id: 'service-web-app',
      title: 'Web Application Development',
      description: 'Interactive web applications, dashboards, ERPs, and customer portals',
      category: 'Services',
      icon: Layers,
      action: () => { onNavigate('services'); onClose(); }
    },
    {
      id: 'service-mobile-app',
      title: 'Mobile App Development',
      description: 'Android and iOS cross-platform mobile applications using React Native and Expo',
      category: 'Services',
      icon: Layers,
      action: () => { onNavigate('services'); onClose(); }
    },
    {
      id: 'service-custom-software',
      title: 'Custom Software Development',
      description: 'Custom business software, ERPs, inventory management, and workflow automation',
      category: 'Services',
      icon: Cpu,
      action: () => { onNavigate('services'); onClose(); }
    },
    {
      id: 'service-api-backend',
      title: 'API & Backend Development',
      description: 'REST API development, database design, backend services, and integrations',
      category: 'Services',
      icon: Cpu,
      action: () => { onNavigate('services'); onClose(); }
    },
    {
      id: 'action-consultation',
      title: 'Schedule Project Consultation',
      description: 'Direct consultation with the MRNS development team',
      category: 'Actions',
      icon: Sparkles,
      action: () => { onNavigate('contact'); onClose(); }
    }
  ];

  const filteredItems = items.filter(item =>
    item.title.toLowerCase().includes(query.toLowerCase()) ||
    item.description.toLowerCase().includes(query.toLowerCase()) ||
    item.category.toLowerCase().includes(query.toLowerCase())
  );

  useEffect(() => {
    if (isOpen) {
      setQuery('');
      setSelectedIndex(0);
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;

      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowDown') {
        e.preventDefault();
        setSelectedIndex(prev => (prev < filteredItems.length - 1 ? prev + 1 : 0));
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        setSelectedIndex(prev => (prev > 0 ? prev - 1 : filteredItems.length - 1));
      } else if (e.key === 'Enter' && filteredItems[selectedIndex]) {
        e.preventDefault();
        filteredItems[selectedIndex].action();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, filteredItems, selectedIndex, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 bg-slate-900/40 backdrop-blur-sm animate-fadeIn">
      <div 
        className="w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden transition-all transform scale-100"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input Bar */}
        <div className="relative flex items-center px-4 py-3.5 border-b border-slate-100">
          <Search className="w-5 h-5 text-slate-400 mr-3" />
          <input
            ref={inputRef}
            type="text"
            placeholder="Type a page, service, or technology... (or press Esc to close)"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setSelectedIndex(0);
            }}
            className="w-full bg-transparent text-slate-800 placeholder-slate-400 text-sm focus:outline-none"
          />
          <button 
            onClick={onClose}
            className="p-1 text-slate-400 hover:text-slate-600 rounded-lg hover:bg-slate-100 transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Results List */}
        <div className="max-h-[380px] overflow-y-auto p-2 space-y-1">
          {filteredItems.length === 0 ? (
            <div className="py-12 text-center text-slate-400 text-sm">
              No matching pages or services found for "{query}".
            </div>
          ) : (
            filteredItems.map((item, index) => {
              const Icon = item.icon;
              const isSelected = index === selectedIndex;
              return (
                <div
                  key={item.id}
                  onClick={item.action}
                  onMouseEnter={() => setSelectedIndex(index)}
                  className={`flex items-center justify-between px-3.5 py-2.5 rounded-xl cursor-pointer transition-all ${
                    isSelected
                      ? 'bg-gradient-to-r from-brand-cyan/10 via-brand-purple/10 to-transparent border border-brand-cyan/30 text-slate-900'
                      : 'hover:bg-slate-50 text-slate-700'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className={`p-2 rounded-lg ${
                      isSelected 
                        ? 'bg-gradient-to-br from-brand-cyan to-brand-purple text-white shadow-sm' 
                        : 'bg-slate-100 text-slate-500'
                    }`}>
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-semibold text-sm text-slate-900">{item.title}</span>
                        <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-slate-100 text-slate-500">
                          {item.category}
                        </span>
                      </div>
                      <p className="text-xs text-slate-500 truncate max-w-md">{item.description}</p>
                    </div>
                  </div>
                  <ArrowRight className={`w-4 h-4 transition-transform ${isSelected ? 'translate-x-0.5 text-brand-purple' : 'text-slate-300'}`} />
                </div>
              );
            })
          )}
        </div>

        {/* Footer shortcuts */}
        <div className="flex items-center justify-between px-4 py-2.5 bg-slate-50/80 border-t border-slate-100 text-[11px] text-slate-500">
          <div className="flex items-center gap-3">
            <span><kbd className="px-1.5 py-0.5 bg-white border border-slate-200 rounded text-[10px] font-mono text-slate-700">↑↓</kbd> Navigate</span>
            <span><kbd className="px-1.5 py-0.5 bg-white border border-slate-200 rounded text-[10px] font-mono text-slate-700">Enter</kbd> Select</span>
            <span><kbd className="px-1.5 py-0.5 bg-white border border-slate-200 rounded text-[10px] font-mono text-slate-700">Esc</kbd> Close</span>
          </div>
          <span className="font-medium text-slate-400">MRNS Quick Navigator</span>
        </div>
      </div>
    </div>
  );
};

export default CommandPalette;
