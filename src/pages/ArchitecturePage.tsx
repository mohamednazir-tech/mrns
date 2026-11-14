import React, { useState } from 'react';
import { 
  Cpu, Zap, Server, Database, ShieldCheck, Activity, 
  ArrowRight, CheckCircle2, Layers, Sliders, BarChart, 
  RefreshCw, Terminal, Lock, Globe 
} from 'lucide-react';

interface ArchitecturePageProps {
  onNavigate: (page: string) => void;
}

export const ArchitecturePage: React.FC<ArchitecturePageProps> = ({ onNavigate }) => {
  const [selectedTier, setSelectedTier] = useState<number>(0);
  const [simulatedLoad, setSimulatedLoad] = useState<number>(75000);

  // Dynamic simulation calculations
  const simulatedPods = Math.max(4, Math.round(simulatedLoad / 3200));
  const simulatedLatency = Math.min(14.8, (8.2 + (simulatedLoad / 250000) * 4.2)).toFixed(1);
  const throughputReqSec = Math.round(simulatedLoad * 1.85).toLocaleString();
  const memoryUtilization = Math.round(35 + (simulatedLoad / 250000) * 32);

  const architectureTiers = [
    {
      id: 0,
      title: 'Global Edge & Anycast CDN Layer',
      subtitle: 'Instant geographical packet termination',
      tech: 'Anycast DNS • HTTP/3 (QUIC) • Edge Cache • TLS 1.3',
      description: 'Incoming user requests land on the geographically nearest edge node within 5-10ms. Static assets and idempotent API responses are served directly from edge memory, reducing origin load by up to 88%.',
      safeguards: [
        'Automatic DDoS absorption layer with dynamic IP challenge',
        'TLS 1.3 0-RTT session resumption for instant handshakes',
        'Brotli and Gzip compression with pre-warmed edge caches'
      ],
      stats: { latency: '<8ms', offload: '88%', sslHandshake: '1ms' }
    },
    {
      id: 1,
      title: 'Ingress & Intelligent Load Balancing',
      subtitle: 'Dynamic Layer 7 reverse proxy routing',
      tech: 'Envoy Proxy • Token Bucket Rate Limiter • JWT Verifier',
      description: 'Incoming dynamic traffic is inspected and distributed using weighted least-connection algorithms. Microservices are decoupled from external direct access via hardened API gateways.',
      safeguards: [
        'Token Bucket rate limiting prevents upstream service exhaustion',
        'Cryptographic JWT verification before hitting application logic',
        'Health probe checks with 100ms automatic pod removal on anomaly'
      ],
      stats: { latency: '<2ms', uptime: '99.999%', throughput: '500k rps' }
    },
    {
      id: 2,
      title: 'Decoupled Microservices & Event Stream',
      subtitle: 'Non-blocking asynchronous task execution',
      tech: 'Go & Node.js • gRPC • Apache Kafka • Redis Streams',
      description: 'Long-running computations and database writes are queued as event messages. User responses return immediately with optimistic UI updates while worker pools process tasks asynchronously.',
      safeguards: [
        'Circuit breakers prevent cascading microservice outages',
        'Strict idempotency keys prevent duplicate transaction executions',
        'Horizontal Pod Autoscaling (HPA) scales compute dynamically in seconds'
      ],
      stats: { queueBacklog: '0ms', scaleTime: '<15s', concurrency: 'Elastic' }
    },
    {
      id: 3,
      title: 'Distributed Data & In-Memory Storage',
      subtitle: 'Sub-millisecond data read/write layer',
      tech: 'PostgreSQL Active-Active • Redis Cluster • Connection Pooling',
      description: 'Read-heavy workloads are served directly from an in-memory Redis cluster. Transactional persistence utilizes sharded PostgreSQL clusters with automated read replicas and strict ACID compliance.',
      safeguards: [
        'Connection pooling via PgBouncer eliminates connection exhaustion',
        'Automated point-in-time recovery and cross-region replica streaming',
        'Intelligent cache-invalidation hooks tied to event stream triggers'
      ],
      stats: { readLatency: '<1.2ms', writeSync: '<8ms', redundancy: 'Multi-Region' }
    }
  ];

  const currentTier = architectureTiers[selectedTier];

  return (
    <div className="pt-28 pb-20 space-y-24 sm:space-y-32">
      {/* HEADER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-cyan/10 border border-brand-cyan/20 text-xs font-mono font-bold text-brand-blue uppercase tracking-wider">
          System Architecture & Scalability Blueprint
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-slate-950 tracking-tight max-w-4xl mx-auto leading-tight">
          Built for High Concurrency & Scale <br />
          <span className="text-gradient">Without Freezing or Latency Spikes</span>.
        </h1>

        <p className="text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
          How MRNS architects digital applications that remain ultra-responsive under extreme enterprise load by decoupling compute, utilizing asynchronous queues, and eliminating synchronous locks.
        </p>
      </section>

      {/* INTERACTIVE HIGH CONCURRENCY STRESS SIMULATOR */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-slate-950 p-8 sm:p-12 text-white border border-slate-800 shadow-2xl space-y-8 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-brand-cyan/15 rounded-full blur-3xl pointer-events-none" />
          
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-800">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <Sliders className="w-4 h-4 text-brand-cyan" />
                <span className="text-xs font-mono font-bold tracking-wider uppercase text-slate-400">
                  Interactive Concurrency Simulator
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl font-extrabold text-white">
                Live Load Scaling Behavior
              </h2>
            </div>

            <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 bg-emerald-950/60 border border-emerald-500/30 px-3 py-1.5 rounded-full">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>SIMULATOR STATUS: REAL-TIME TELEMETRY</span>
            </div>
          </div>

          {/* Slider Control */}
          <div className="space-y-4 max-w-3xl">
            <div className="flex items-center justify-between">
              <label htmlFor="concurrency-slider" className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                Simulated Concurrent Active Users:
              </label>
              <span className="text-2xl font-extrabold font-mono text-brand-cyan">
                {simulatedLoad.toLocaleString()} users
              </span>
            </div>

            <input
              id="concurrency-slider"
              type="range"
              min="5000"
              max="250000"
              step="5000"
              value={simulatedLoad}
              onChange={(e) => setSimulatedLoad(Number(e.target.value))}
              className="w-full h-2.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-brand-cyan"
            />

            <div className="flex justify-between text-[11px] font-mono text-slate-500">
              <span>5,000 (Standard)</span>
              <span>75,000 (Spike)</span>
              <span>150,000 (High Volume)</span>
              <span>250,000+ (Peak Enterprise)</span>
            </div>
          </div>

          {/* Real-time Dynamic Metrics Output */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4">
            <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 space-y-1">
              <span className="text-[11px] font-mono text-slate-400">ACTIVE COMPUTE PODS</span>
              <div className="text-3xl font-extrabold text-white font-mono">{simulatedPods}</div>
              <p className="text-[10px] text-slate-500">Dynamically auto-scaled</p>
            </div>

            <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 space-y-1">
              <span className="text-[11px] font-mono text-slate-400">P99 RESPONSE LATENCY</span>
              <div className="text-3xl font-extrabold text-brand-cyan font-mono">{simulatedLatency} ms</div>
              <p className="text-[10px] text-emerald-400 font-mono">Flat latency curve maintained</p>
            </div>

            <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 space-y-1">
              <span className="text-[11px] font-mono text-slate-400">PROCESSED REQ/SEC</span>
              <div className="text-3xl font-extrabold text-brand-magenta font-mono">{throughputReqSec}</div>
              <p className="text-[10px] text-slate-500">Non-blocking async I/O</p>
            </div>

            <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 space-y-1">
              <span className="text-[11px] font-mono text-slate-400">CLUSTER MEMORY LOAD</span>
              <div className="text-3xl font-extrabold text-emerald-400 font-mono">{memoryUtilization}%</div>
              <p className="text-[10px] text-slate-500">Balanced across worker nodes</p>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800/80 text-xs text-slate-400 flex items-center gap-3">
            <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
            <span>
              <strong>Zero-Freeze Guarantee:</strong> Even at 250,000 simultaneous users, compute auto-scaling and Redis read-caching maintain response times below 15ms with 0 client UI freezes.
            </span>
          </div>
        </div>
      </section>

      {/* INTERACTIVE 4-TIER ARCHITECTURAL EXPLORER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="text-xs font-mono font-bold tracking-widest uppercase text-brand-purple">
            Architectural Hierarchy
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight">
            The 4 Tiers of MRNS System Topology
          </h2>
          <p className="text-slate-600 text-sm">
            Click through each layer to inspect how user data and network packets flow safely through our infrastructure.
          </p>
        </div>

        {/* Tier Selector Buttons */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
          {architectureTiers.map((tier) => (
            <button
              key={tier.id}
              onClick={() => setSelectedTier(tier.id)}
              className={`p-4 rounded-2xl text-left transition-all border ${
                selectedTier === tier.id
                  ? 'bg-white border-brand-purple shadow-md ring-2 ring-brand-purple/20'
                  : 'bg-white/80 border-slate-200/90 hover:bg-white hover:border-slate-300'
              }`}
            >
              <div className="text-xs font-mono font-extrabold text-brand-purple mb-1">
                TIER 0{tier.id + 1}
              </div>
              <div className="text-sm font-bold text-slate-900 truncate">{tier.title}</div>
              <div className="text-[11px] text-slate-500 truncate mt-0.5">{tier.subtitle}</div>
            </button>
          ))}
        </div>

        {/* Tier Details Card */}
        <div className="rounded-3xl bg-white border border-slate-200 shadow-premium p-8 sm:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-8 space-y-5">
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-brand-purple bg-brand-purple/10 px-2.5 py-1 rounded-md">
                  Tier 0{currentTier.id + 1} Blueprint
                </span>
                <span className="text-xs font-mono text-slate-400">• {currentTier.subtitle}</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-950 tracking-tight">
                {currentTier.title}
              </h3>

              <div className="p-3 rounded-xl bg-slate-100/80 border border-slate-200/60 font-mono text-xs text-slate-800">
                <span className="text-slate-500">Core Technologies: </span>
                <span className="font-semibold text-brand-purple">{currentTier.tech}</span>
              </div>

              <p className="text-sm text-slate-600 leading-relaxed">
                {currentTier.description}
              </p>

              <div className="space-y-2.5 pt-2">
                <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400">
                  Reliability & Concurrency Safeguards
                </h4>
                <div className="space-y-2">
                  {currentTier.safeguards.map((safeguard, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                      <span>{safeguard}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Performance Metrics for this tier */}
            <div className="lg:col-span-4 rounded-2xl bg-slate-950 p-6 text-white border border-slate-800 space-y-4">
              <span className="text-xs font-mono text-slate-400 font-bold uppercase tracking-wider">
                TIER SPECIFICATIONS
              </span>

              <div className="space-y-3 font-mono text-xs">
                {Object.entries(currentTier.stats).map(([key, val], idx) => (
                  <div key={idx} className="p-3 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-between">
                    <span className="text-slate-400 uppercase text-[10px]">{key}</span>
                    <span className="text-sm font-bold text-brand-cyan">{val}</span>
                  </div>
                ))}
              </div>

              <div className="pt-2 text-[11px] text-slate-400 text-center font-mono">
                Verified across synthetic benchmark suites
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-slate-900 p-8 sm:p-12 text-white border border-slate-800 flex flex-col md:flex-row items-center justify-between gap-8 shadow-xl">
          <div className="space-y-2 max-w-xl text-center md:text-left">
            <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
              Ready to architect your custom solution?
            </h3>
            <p className="text-sm text-slate-400">
              Request a comprehensive technical specification or book a consultation session with our development team.
            </p>
          </div>

          <button
            onClick={() => onNavigate('contact')}
            className="shrink-0 inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-gradient-to-r from-brand-cyan via-brand-purple to-brand-magenta text-white font-bold text-xs tracking-wide shadow-glow-brand hover:scale-105 transition-all"
          >
            <span>Request Architectural Consultation</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>
    </div>
  );
};

export default ArchitecturePage;
