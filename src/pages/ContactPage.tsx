import React, { useState } from 'react';
import { 
  Mail, PhoneCall, ShieldCheck, CheckCircle2, ArrowRight, 
  Clock, Sparkles, ChevronDown, MessageSquare, Terminal, HelpCircle, AlertCircle 
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { AmbientWaveCanvas } from '../components/AmbientWaveCanvas';

interface ContactPageProps {
  onNavigate: (page: string) => void;
}

export const ContactPage: React.FC<ContactPageProps> = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: 'custom-software',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(0);
  const [validationError, setValidationError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitting) return;

    const trimmedName = formData.name.trim();
    const trimmedPhone = formData.phone.trim();
    const trimmedEmail = formData.email.trim();

    // 1. Validation
    if (!trimmedName) {
      setValidationError('Please enter your full name.');
      return;
    }

    if (!trimmedPhone) {
      setValidationError('Please enter your contact phone number.');
      return;
    }

    const phoneDigits = trimmedPhone.replace(/[^0-9]/g, '');
    if (phoneDigits.length < 7) {
      setValidationError('Please enter a valid phone number (at least 7 digits).');
      return;
    }

    if (trimmedEmail && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedEmail)) {
      setValidationError('Please enter a valid email address.');
      return;
    }

    setValidationError(null);
    setIsSubmitting(true);

    // Map service key to readable label
    const serviceLabels: Record<string, string> = {
      'custom-software': 'Custom Enterprise Software',
      'web-mobile': 'Web & Mobile Platforms',
      'high-load-apis': 'High-Throughput APIs & Microservices',
      'cloud-scale': 'Cloud Mesh & High Concurrency Tuning',
    };
    const serviceName = serviceLabels[formData.service] || formData.service;

    // Compose formatted WhatsApp message according to exact specification
    const whatsappMessage = [
      'Hello MRNS Solutions,',
      '',
      'I would like to enquire about your services.',
      '',
      `Name: ${trimmedName}`,
      `Phone: ${trimmedPhone}`,
      `Email: ${trimmedEmail || 'Not provided'}`,
      `Interested Service: ${serviceName}`,
      '',
      'Project Details:',
      formData.message.trim() || 'Not provided',
      '',
      'Thank you.',
    ].join('\n');

    // Open WhatsApp using official wa.me with destination 916374034451
    const encodedMessage = encodeURIComponent(whatsappMessage);
    const whatsappUrl = `https://wa.me/916374034451?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');

    setSubmitted(true);
    setIsSubmitting(false);

    try {
      confetti({
        particleCount: 90,
        spread: 60,
        origin: { y: 0.6 },
        colors: ['#00C2FF', '#7C3AED', '#D946EF', '#0A1128'],
      });
    } catch {
      // ignore
    }
  };

  const faqs = [
    {
      q: 'How does MRNS achieve a 99.99% uptime availability SLA?',
      a: 'We architect every deployment around active-active multi-region clusters, decoupled microservice queues, and automated health probing. When an individual node fails, requests automatically route to redundant instances within 100 milliseconds without dropping transactions or impacting end users.'
    },
    {
      q: 'How does your architecture prevent web & mobile interfaces from freezing under heavy traffic?',
      a: 'We decouple frontend UI threads from heavy synchronous network operations using web workers, non-blocking asynchronous event loops, optimistic state mutations, and edge Redis caching. Even when handling 100k+ concurrent requests, client-side rendering remains at a fluid 60fps.'
    },
    {
      q: 'Can MRNS integrate with or modernize our existing legacy cloud infrastructure?',
      a: 'Yes. We specialize in non-disruptive modernization. Our development team can audit your existing databases and backend services, install non-blocking API gateways, containerize workloads, and gradually migrate legacy bottlenecks into high-throughput microservices with zero downtime.'
    },
    {
      q: 'What is the typical timeline and engagement model for custom software projects?',
      a: 'Initial architecture discovery and rapid prototyping take 1 to 2 weeks. Production-grade systems with automated CI/CD pipelines, load testing, and security hardening typically launch within 6 to 12 weeks depending on scope, followed by continuous 24/7 telemetry support.'
    },
    {
      q: 'What security and compliance standards do MRNS solutions adhere to?',
      a: 'Every solution is architected with Zero-Trust principles: TLS 1.3 encryption in transit, AES-256 encryption at rest, cryptographically signed JWT tokens, role-based access control (RBAC), and automated vulnerability testing in our continuous deployment pipelines.'
    }
  ];

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
            <Mail className="w-3.5 h-3.5 text-brand-purple" />
            <span>Direct Project Consultation</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-slate-950 tracking-tight max-w-4xl mx-auto leading-tight">
            Let’s Architect Your Next <br />
            <span className="text-gradient">Modern Networked Solution</span>.
          </h1>

          <p className="text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Speak directly with our software and web development team. We review your project requirements and provide a clear, practical proposal.
          </p>

          {/* SLA Guarantee Pill with glassmorphism */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-50/90 backdrop-blur-md border border-emerald-200 text-xs font-semibold text-emerald-800 shadow-sm">
            <Clock className="w-4 h-4 text-emerald-600" />
            <span>Prompt Response Turnaround: Fast Reply Guaranteed</span>
          </div>
        </div>
      </section>

      {/* FORM & CONTACT DETAILS SPLIT */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Interactive Project Brief Form */}
          <div className="lg:col-span-7 rounded-3xl bg-white border border-slate-200/90 shadow-premium p-8 sm:p-12">
            {submitted ? (
              <div className="py-12 text-center space-y-6 animate-fadeIn">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center shadow-inner">
                  <CheckCircle2 className="w-10 h-10" />
                </div>

                <div className="space-y-2 max-w-md mx-auto">
                  <h3 className="text-2xl font-extrabold text-slate-950">
                    WhatsApp Opened Successfully
                  </h3>
                  <p className="text-sm text-slate-600">
                    Thank you, <strong className="text-slate-900">{formData.name}</strong>. Your enquiry details have been pre-filled in WhatsApp. Please press <strong className="text-brand-purple">Send</strong> in WhatsApp to reach our team directly.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-xs text-slate-600 max-w-sm mx-auto font-mono text-left space-y-1">
                  <div>CHANNEL: WHATSAPP DIRECT</div>
                  <div>NUMBER: +91 63740 34451</div>
                  <div>STATUS: AWAITING YOUR SEND</div>
                </div>

                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({
                      name: '',
                      email: '',
                      phone: '',
                      company: '',
                      service: 'custom-software',
                      message: '',
                    });
                    setValidationError(null);
                  }}
                  className="text-xs font-bold text-brand-purple hover:underline"
                >
                  Submit another consultation inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-1 pb-2 border-b border-slate-100">
                  <h3 className="text-xl font-bold text-slate-950">Request Project Scope & Architecture Brief</h3>
                  <p className="text-xs text-slate-500">All fields are handled securely in accordance with strict confidentiality.</p>
                </div>

                {validationError && (
                  <div className="p-3.5 rounded-xl bg-rose-50 border border-rose-200 text-xs text-rose-700 flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 text-rose-600 shrink-0" />
                    <span>{validationError}</span>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-700">Your Full Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="Alex Taylor"
                      value={formData.name}
                      onChange={(e) => {
                        setFormData({ ...formData, name: e.target.value });
                        if (validationError) setValidationError(null);
                      }}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-brand-purple focus:bg-white transition-all"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-700">Phone Number *</label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => {
                        setFormData({ ...formData, phone: e.target.value });
                        if (validationError) setValidationError(null);
                      }}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-brand-purple focus:bg-white transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-700">Work Email (Optional)</label>
                    <input
                      type="email"
                      placeholder="alex@enterprise.com"
                      value={formData.email}
                      onChange={(e) => {
                        setFormData({ ...formData, email: e.target.value });
                        if (validationError) setValidationError(null);
                      }}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-brand-purple focus:bg-white transition-all"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-700">Company / Organization</label>
                    <input
                      type="text"
                      placeholder="Acme Technologies"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-brand-purple focus:bg-white transition-all"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-700">Primary Service Focus</label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-800 focus:outline-none focus:border-brand-purple focus:bg-white transition-all"
                  >
                    <option value="custom-software">Custom Enterprise Software</option>
                    <option value="web-mobile">Web & Mobile Platforms</option>
                    <option value="high-load-apis">High-Throughput APIs & Microservices</option>
                    <option value="cloud-scale">Cloud Mesh & High Concurrency Tuning</option>
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-700">Project Overview & Performance Objectives</label>
                  <textarea
                    rows={4}
                    placeholder="Describe your current bottlenecks, target performance SLA, or desired architecture requirements..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-brand-purple focus:bg-white transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 rounded-2xl bg-gradient-to-r from-brand-cyan via-brand-purple to-brand-magenta text-white font-bold text-sm tracking-wide shadow-glow-brand hover:shadow-xl hover:scale-[1.01] active:scale-[0.99] transition-all flex items-center justify-center gap-2 disabled:opacity-75 disabled:cursor-not-allowed"
                >
                  <span>Submit Project Brief For Review</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            )}
          </div>

          {/* Right Column: Direct Communication Channels & Trust Badges */}
          <div className="lg:col-span-5 space-y-6">
            <div className="rounded-3xl bg-slate-950 p-8 text-white border border-slate-800 shadow-xl space-y-6">
              <div className="flex items-center gap-2 text-xs font-mono text-brand-cyan">
                <Terminal className="w-4 h-4" />
                <span>DIRECT SYSTEM CHANNELS</span>
              </div>

              <div className="space-y-4">
                <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 space-y-1">
                  <div className="text-xs font-bold text-slate-300">Software & Web Development</div>
                  <div className="text-sm font-mono text-brand-cyan select-all">architecture@mrns-solutions.com</div>
                  <div className="text-[11px] text-slate-500">Direct escalation to technical leads</div>
                </div>

                <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 space-y-1">
                  <div className="text-xs font-bold text-slate-300">Client Support & Delivery Desk</div>
                  <div className="text-sm font-mono text-brand-magenta select-all">support@mrns-solutions.com</div>
                  <div className="text-[11px] text-slate-500">Active project support & assistance</div>
                </div>

                <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 space-y-1">
                  <div className="text-xs font-bold text-slate-300">Development Office</div>
                  <div className="text-xs text-slate-300">MRNS Technology Operations</div>
                  <div className="text-[11px] text-slate-500">Modern Digital Solutions & Development</div>
                </div>
              </div>

              <div className="pt-2 border-t border-slate-800 flex items-center justify-between text-xs font-mono text-slate-400">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span>NDA Protection Ready</span>
                </div>
                <span>Quality & Security First</span>
              </div>
            </div>

            <div className="rounded-2xl bg-white p-6 border border-slate-200/90 shadow-sm space-y-3">
              <h4 className="text-sm font-bold text-slate-900">What happens after you submit?</h4>
              <ol className="space-y-2 text-xs text-slate-600">
                <li className="flex items-start gap-2">
                  <span className="font-mono font-bold text-brand-purple">1.</span>
                  <span>Our lead developer reviews your system requirements and goals.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-mono font-bold text-brand-purple">2.</span>
                  <span>We schedule a direct technical alignment consultation.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-mono font-bold text-brand-purple">3.</span>
                  <span>You receive a clear project plan, tech stack proposal, and timeline.</span>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* FREQUENTLY ASKED TECHNICAL QUESTIONS */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-1.5 text-xs font-mono font-bold uppercase tracking-widest text-brand-purple">
            <HelpCircle className="w-4 h-4" />
            <span>Technical FAQ</span>
          </div>
          <h2 className="text-3xl font-extrabold text-slate-950 tracking-tight">
            Frequently Asked Technical Questions
          </h2>
          <p className="text-sm text-slate-600">
            Clear answers about MRNS software development standards, project process, and delivery.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = activeFaq === index;
            return (
              <div
                key={index}
                className="rounded-2xl bg-white border border-slate-200/90 shadow-2xs overflow-hidden transition-all"
              >
                <button
                  type="button"
                  onClick={() => setActiveFaq(isOpen ? null : index)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 hover:bg-slate-50/80 transition-colors"
                >
                  <span className="text-sm font-bold text-slate-900">{faq.q}</span>
                  <ChevronDown className={`w-4 h-4 text-slate-400 shrink-0 transition-transform ${isOpen ? 'rotate-180 text-brand-purple' : ''}`} />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
