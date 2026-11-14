import React, { useState } from 'react';
import {
  LayoutDashboard, Users, Truck, Box, ShoppingCart, Factory,
  Scale, Receipt, Calculator, IndianRupee, ShieldCheck,
  Bot, Settings, Bell, Search, Plus, Filter, Download,
  CheckCircle2, ArrowUpRight, TrendingUp, AlertCircle, Wrench,
  Fuel, FileText, ChevronRight, RefreshCw, X, Eye, Camera,
  Printer, ArrowDownLeft, Clock, DollarSign
} from 'lucide-react';

export type MockupModule = 
  | 'dashboard'
  | 'production' 
  | 'vehicles' 
  | 'materials' 
  | 'weighment'
  | 'sales' 
  | 'purchases'
  | 'ledger' 
  | 'audit';

interface CrusherErpMockupViewerProps {
  initialModule?: MockupModule;
  onClose?: () => void;
  isModal?: boolean;
}

export const CrusherErpMockupViewer: React.FC<CrusherErpMockupViewerProps> = ({
  initialModule = 'production',
  onClose,
  isModal = false,
}) => {
  const [activeModule, setActiveModule] = useState<MockupModule>(initialModule);
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className={`w-full bg-[#f8fafc] text-slate-800 rounded-2xl border border-slate-300 shadow-2xl overflow-hidden font-sans text-xs select-none ${isModal ? 'max-w-6xl max-h-[92vh] flex flex-col' : ''}`}>
      
      {/* ── WINDOW TITLE BAR ─────────────────────────────────────── */}
      <div className="bg-[#f1f5f9] border-b border-slate-300 px-3 py-1.5 flex items-center justify-between text-[11px] text-slate-600">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-rose-400 inline-block border border-rose-500/30" />
            <span className="w-2.5 h-2.5 rounded-full bg-amber-400 inline-block border border-amber-500/30" />
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 inline-block border border-emerald-500/30" />
          </div>
          <span className="font-semibold text-slate-700">Crusher ERP — Business Management System</span>
          <div className="hidden sm:flex items-center gap-3 text-slate-500 pl-4 border-l border-slate-300">
            <span>File</span>
            <span>Edit</span>
            <span>View</span>
            <span>Window</span>
            <span>Help</span>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <span className="px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 font-mono text-[10px] font-bold">
            Live Enterprise Mock Data
          </span>
          {onClose && (
            <button onClick={onClose} className="p-1 hover:bg-slate-200 rounded text-slate-600">
              <X className="w-3.5 h-3.5" />
            </button>
          )}
        </div>
      </div>

      {/* ── TOP APPLICATION HEADER ───────────────────────────────── */}
      <div className="bg-white border-b border-slate-200 px-4 py-2 flex items-center justify-between">
        <div className="flex items-center gap-6">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-[#1e3a8a] text-white flex items-center justify-center font-black text-sm">
              M
            </div>
            <div>
              <div className="font-bold text-slate-900 leading-none">Crusher ERP</div>
              <div className="text-[10px] text-slate-500">Business Management</div>
            </div>
          </div>

          {/* Top Navigation Tabs */}
          <div className="hidden md:flex items-center gap-1">
            <button 
              onClick={() => setActiveModule('dashboard')}
              className={`px-3 py-1.5 rounded-lg flex items-center gap-1.5 font-medium ${activeModule === 'dashboard' ? 'bg-blue-50 text-blue-700 border border-blue-200' : 'text-slate-600 hover:bg-slate-100'}`}
            >
              <LayoutDashboard className="w-3.5 h-3.5" />
              <span>Home</span>
            </button>
            <button 
              onClick={() => setActiveModule('sales')}
              className={`px-3 py-1.5 rounded-lg flex items-center gap-1.5 font-medium ${activeModule === 'sales' ? 'bg-blue-50 text-blue-700 border border-blue-200' : 'text-slate-600 hover:bg-slate-100'}`}
            >
              <ShoppingCart className="w-3.5 h-3.5" />
              <span>Sales</span>
            </button>
            <button 
              onClick={() => setActiveModule('ledger')}
              className={`px-3 py-1.5 rounded-lg flex items-center gap-1.5 font-medium ${activeModule === 'ledger' ? 'bg-blue-50 text-blue-700 border border-blue-200' : 'text-slate-600 hover:bg-slate-100'}`}
            >
              <Calculator className="w-3.5 h-3.5" />
              <span>Accounts</span>
            </button>
            <button 
              onClick={() => setActiveModule('production')}
              className={`px-3 py-1.5 rounded-lg flex items-center gap-1.5 font-medium ${activeModule === 'production' ? 'bg-blue-50 text-blue-700 border border-blue-200' : 'text-slate-600 hover:bg-slate-100'}`}
            >
              <Factory className="w-3.5 h-3.5" />
              <span>Reports</span>
            </button>
            <button className="px-3 py-1.5 rounded-lg text-slate-600 hover:bg-slate-100 flex items-center gap-1.5 font-medium">
              <Bot className="w-3.5 h-3.5 text-purple-600" />
              <span>AI Assistant</span>
            </button>
            <button 
              onClick={() => setActiveModule('audit')}
              className={`px-3 py-1.5 rounded-lg flex items-center gap-1.5 font-medium ${activeModule === 'audit' ? 'bg-blue-50 text-blue-700 border border-blue-200' : 'text-slate-600 hover:bg-slate-100'}`}
            >
              <Settings className="w-3.5 h-3.5" />
              <span>Settings</span>
            </button>
          </div>
        </div>

        {/* User Badge */}
        <div className="flex items-center gap-3">
          <div className="relative">
            <Bell className="w-4 h-4 text-slate-600" />
            <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-rose-500" />
          </div>
          <div className="flex items-center gap-2 pl-2 border-l border-slate-200">
            <div className="w-6 h-6 rounded-full bg-blue-100 text-blue-800 font-bold flex items-center justify-center text-[10px]">
              1
            </div>
            <div className="text-right hidden sm:block">
              <div className="font-bold text-slate-900 leading-none text-[11px]">1mona</div>
              <div className="text-[9px] text-slate-400">Administrator</div>
            </div>
          </div>
        </div>
      </div>

      {/* ── MAIN BODY (SIDEBAR + CONTENT) ────────────────────────── */}
      <div className="flex-1 flex overflow-hidden min-h-[520px]">

        {/* LEFT SIDEBAR */}
        <div className="w-48 sm:w-56 bg-white border-r border-slate-200 p-2 flex flex-col justify-between shrink-0 overflow-y-auto">
          <div className="space-y-0.5">
            {[
              { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
              { id: 'vehicles', label: 'Vehicle Management', icon: Truck },
              { id: 'materials', label: 'Materials', icon: Box },
              { id: 'purchases', label: 'Purchases', icon: ShoppingCart },
              { id: 'production', label: 'Production', icon: Factory },
              { id: 'weighment', label: 'Weighment', icon: Scale },
              { id: 'sales', label: 'Sales / Invoices', icon: Receipt },
              { id: 'ledger', label: 'Accounts / Ledger', icon: Calculator },
              { id: 'audit', label: 'Audit Log', icon: ShieldCheck },
            ].map(item => {
              const Icon = item.icon;
              const isSelected = activeModule === item.id;

              return (
                <button
                  key={item.id}
                  onClick={() => setActiveModule(item.id as MockupModule)}
                  className={`w-full flex items-center gap-2.5 px-3 py-2 rounded-lg text-left transition-colors font-medium text-[11px] ${
                    isSelected
                      ? 'bg-[#1e3a8a] text-white shadow-sm'
                      : 'text-slate-700 hover:bg-slate-100'
                  }`}
                >
                  <Icon className={`w-3.5 h-3.5 shrink-0 ${isSelected ? 'text-white' : 'text-slate-500'}`} />
                  <span className="truncate">{item.label}</span>
                </button>
              );
            })}
          </div>

          <div className="p-2.5 bg-slate-50 rounded-xl border border-slate-200 mt-4 text-[10px] text-slate-500 space-y-1">
            <div className="font-bold text-slate-700 flex items-center gap-1">
              <CheckCircle2 className="w-3 h-3 text-emerald-600" />
              <span>Exact UI Design</span>
            </div>
            <div>All screens retain authentic application layout with active quarry mock data.</div>
          </div>
        </div>

        {/* RIGHT CONTENT WORKSPACE */}
        <div className="flex-1 p-4 sm:p-6 overflow-y-auto space-y-4 bg-[#f8fafc]">

          {/* ════ MODULE 1: DASHBOARD & CONTROL CENTER ════════════ */}
          {activeModule === 'dashboard' && (
            <div className="space-y-4 animate-fadeIn">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div>
                  <h2 className="text-xl font-bold text-slate-900 tracking-tight">Business Control Center</h2>
                  <p className="text-slate-500 text-[11px]">Comprehensive operational and financial pulse of stone crusher operations</p>
                </div>
                <div className="flex items-center gap-2 text-slate-500 font-mono text-[11px]">
                  <Clock className="w-3.5 h-3.5 text-blue-600" />
                  <span>Live Stream: 10 Nov 2026</span>
                </div>
              </div>

              {/* 4 Financial Stat Cards */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
                <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm space-y-1">
                  <div className="flex items-center justify-between text-slate-500 text-[11px]">
                    <span>Monthly Sales</span>
                    <TrendingUp className="w-4 h-4 text-emerald-500" />
                  </div>
                  <div className="text-2xl font-black text-slate-900">₹48,65,200</div>
                  <div className="text-[10px] text-emerald-600 font-medium">+12.4% vs last month</div>
                </div>

                <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm space-y-1">
                  <div className="flex items-center justify-between text-slate-500 text-[11px]">
                    <span>Total Tonnage Dispatched</span>
                    <Scale className="w-4 h-4 text-blue-500" />
                  </div>
                  <div className="text-2xl font-black text-blue-600">8,420 Tons</div>
                  <div className="text-[10px] text-slate-500">Across 384 vehicle trips</div>
                </div>

                <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm space-y-1">
                  <div className="flex items-center justify-between text-slate-500 text-[11px]">
                    <span>Net Operating Profit</span>
                    <DollarSign className="w-4 h-4 text-purple-500" />
                  </div>
                  <div className="text-2xl font-black text-emerald-600">₹14,28,400</div>
                  <div className="text-[10px] text-slate-500">Yield margin: 29.3%</div>
                </div>

                <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm space-y-1">
                  <div className="flex items-center justify-between text-slate-500 text-[11px]">
                    <span>Outstanding Receivables</span>
                    <AlertCircle className="w-4 h-4 text-amber-500" />
                  </div>
                  <div className="text-2xl font-black text-amber-600">₹8,45,000</div>
                  <div className="text-[10px] text-amber-700">4 clients pending collection</div>
                </div>
              </div>

              {/* 2 Column Operational Overview */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                <div className="lg:col-span-2 bg-white p-4 rounded-xl border border-slate-200 shadow-sm space-y-3">
                  <div className="flex items-center justify-between">
                    <h3 className="font-bold text-slate-900 text-sm">Today's Live Production & Weighment Stream</h3>
                    <span className="text-[10px] text-emerald-600 font-mono font-bold">CRUSHER ONLINE</span>
                  </div>
                  <div className="space-y-2">
                    {[
                      { time: '18:24', action: 'Weighment Completed', desc: 'TN-13-AR-4567 • Mohamed Nazir • 22.22 Tons BMS', amt: '₹14,44,300' },
                      { time: '16:50', action: 'Daily Shift Production Entry', desc: 'Quarry Boulders #4 -> 428 Tons Jelly 20mm', amt: '89.1% Yield' },
                      { time: '15:10', action: 'Diesel Fuel Logged', desc: 'TN-72-AR-1234 • 65 Liters filled @ HP Bunk', amt: '₹6,175' },
                      { time: '13:40', action: 'Payment Received', desc: 'L&T Infrastructure NEFT transfer settled', amt: '₹8,15,000' },
                    ].map((act, i) => (
                      <div key={i} className="p-2.5 rounded-lg bg-slate-50 border border-slate-100 flex items-center justify-between text-[11px]">
                        <div className="flex items-center gap-2.5">
                          <span className="font-mono text-slate-400 text-[10px]">{act.time}</span>
                          <div>
                            <span className="font-bold text-slate-800">{act.action}</span>
                            <span className="text-slate-500 block text-[10px]">{act.desc}</span>
                          </div>
                        </div>
                        <span className="font-mono font-bold text-slate-900">{act.amt}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm space-y-3">
                  <h3 className="font-bold text-slate-900 text-sm">Fleet Status Today</h3>
                  <div className="space-y-2 text-[11px]">
                    <div className="flex justify-between py-1.5 border-b border-slate-100">
                      <span className="text-slate-600">Active Trucks on Field</span>
                      <span className="font-bold text-emerald-600">12 / 14</span>
                    </div>
                    <div className="flex justify-between py-1.5 border-b border-slate-100">
                      <span className="text-slate-600">Total Weighbridge Slips</span>
                      <span className="font-bold text-slate-900">38 Slips</span>
                    </div>
                    <div className="flex justify-between py-1.5 border-b border-slate-100">
                      <span className="text-slate-600">Crusher Feeder Run Time</span>
                      <span className="font-bold text-blue-600">9.5 Hours</span>
                    </div>
                    <div className="flex justify-between py-1.5">
                      <span className="text-slate-600">Quarry Raw Stone Buffer</span>
                      <span className="font-bold text-slate-900">4,200 Tons</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* ════ MODULE 2: PRODUCTION ════════════════════════════ */}
          {activeModule === 'production' && (
            <div className="space-y-4 animate-fadeIn">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div>
                  <h2 className="text-xl font-bold text-slate-900 tracking-tight">Crusher Production</h2>
                  <p className="text-slate-500 text-[11px]">Track daily crusher production and yield</p>
                </div>
                <button className="px-4 py-2 bg-[#1e3a8a] hover:bg-blue-900 text-white rounded-lg font-bold text-[11px] flex items-center gap-1.5 shadow-sm transition-colors self-start sm:self-auto">
                  <Plus className="w-3.5 h-3.5" />
                  <span>Record Production</span>
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm space-y-1">
                  <div className="flex items-center justify-between text-slate-500 font-medium text-[11px]">
                    <span>Total Raw Stone</span>
                    <Box className="w-4 h-4 text-blue-500" />
                  </div>
                  <div className="text-2xl font-black text-slate-900">1,840 tons</div>
                </div>

                <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm space-y-1">
                  <div className="flex items-center justify-between text-slate-500 font-medium text-[11px]">
                    <span>Total Output</span>
                    <TrendingUp className="w-4 h-4 text-emerald-500" />
                  </div>
                  <div className="text-2xl font-black text-emerald-600">1,620 tons</div>
                </div>

                <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm space-y-1">
                  <div className="flex items-center justify-between text-slate-500 font-medium text-[11px]">
                    <span>Average Yield</span>
                    <ArrowUpRight className="w-4 h-4 text-blue-500" />
                  </div>
                  <div className="text-2xl font-black text-blue-600">88.0%</div>
                </div>

                <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm space-y-1">
                  <div className="flex items-center justify-between text-slate-500 font-medium text-[11px]">
                    <span>Efficiency</span>
                    <Factory className="w-4 h-4 text-purple-500" />
                  </div>
                  <div className="text-base font-black text-emerald-600 pt-1">Optimal Performance</div>
                </div>
              </div>

              <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm space-y-3">
                <div>
                  <h3 className="font-bold text-slate-900 text-sm">Material Breakdown</h3>
                  <p className="text-slate-500 text-[11px]">All-time production by material type</p>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  <div className="p-3 bg-slate-50 rounded-lg border border-slate-200">
                    <span className="text-[10px] text-slate-500 uppercase font-mono">BMS</span>
                    <div className="text-lg font-bold text-slate-900">580 tons</div>
                  </div>
                  <div className="p-3 bg-slate-50 rounded-lg border border-slate-200">
                    <span className="text-[10px] text-slate-500 uppercase font-mono">Jelly 20mm</span>
                    <div className="text-lg font-bold text-slate-900">640 tons</div>
                  </div>
                  <div className="p-3 bg-slate-50 rounded-lg border border-slate-200">
                    <span className="text-[10px] text-slate-500 uppercase font-mono">Jelly 10mm</span>
                    <div className="text-lg font-bold text-slate-900">260 tons</div>
                  </div>
                  <div className="p-3 bg-slate-50 rounded-lg border border-slate-200">
                    <span className="text-[10px] text-slate-500 uppercase font-mono">Crusher Dust</span>
                    <div className="text-lg font-bold text-slate-900">140 tons</div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
                <div className="px-4 py-3 border-b border-slate-200 flex items-center justify-between">
                  <div className="font-bold text-slate-900 text-sm">Recent Daily Production Entries</div>
                  <span className="text-[10px] text-slate-500 font-mono">Showing 4 recorded batches</span>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse text-[11px]">
                    <thead>
                      <tr className="bg-slate-50 border-b border-slate-200 text-slate-600 font-mono text-[10px]">
                        <th className="py-2.5 px-4 font-semibold">DATE & SHIFT</th>
                        <th className="py-2.5 px-4 font-semibold">FEED MATERIAL</th>
                        <th className="py-2.5 px-4 font-semibold">RAW STONE (TON)</th>
                        <th className="py-2.5 px-4 font-semibold">OUTPUT MATERIAL</th>
                        <th className="py-2.5 px-4 font-semibold">NET OUTPUT (TON)</th>
                        <th className="py-2.5 px-4 font-semibold">YIELD %</th>
                        <th className="py-2.5 px-4 font-semibold">OPERATOR</th>
                        <th className="py-2.5 px-4 font-semibold">STATUS</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      {[
                        { date: '10 Nov 2026 (Shift 1)', feed: 'Quarry Granite Boulders', raw: '480', out: 'Jelly 20mm + Dust', net: '428', yield: '89.1%', op: 'Rajesh K.', status: 'Completed' },
                        { date: '10 Nov 2026 (Shift 2)', feed: 'Quarry Granite Boulders', raw: '420', out: 'BMS (Base Material)', net: '372', yield: '88.5%', op: 'Selvam P.', status: 'Completed' },
                        { date: '09 Nov 2026 (Shift 1)', feed: 'Quarry Granite Boulders', raw: '500', out: 'Jelly 20mm + 10mm', net: '439', yield: '87.8%', op: 'Rajesh K.', status: 'Completed' },
                        { date: '09 Nov 2026 (Shift 2)', feed: 'Quarry Granite Boulders', raw: '440', out: 'Crusher Dust (M-Sand)', net: '381', yield: '86.6%', op: 'Selvam P.', status: 'Completed' },
                      ].map((row, i) => (
                        <tr key={i} className="hover:bg-slate-50 transition-colors">
                          <td className="py-2.5 px-4 font-medium text-slate-900">{row.date}</td>
                          <td className="py-2.5 px-4 text-slate-600">{row.feed}</td>
                          <td className="py-2.5 px-4 font-mono font-bold text-slate-900">{row.raw}</td>
                          <td className="py-2.5 px-4 text-slate-700">{row.out}</td>
                          <td className="py-2.5 px-4 font-mono font-bold text-emerald-600">{row.net}</td>
                          <td className="py-2.5 px-4 font-mono text-blue-600">{row.yield}</td>
                          <td className="py-2.5 px-4 text-slate-600">{row.op}</td>
                          <td className="py-2.5 px-4">
                            <span className="px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 font-mono text-[9px] font-bold">
                              {row.status}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {/* ════ MODULE 3: WEIGHBRIDGE MANAGEMENT ═══════════════ */}
          {activeModule === 'weighment' && (
            <div className="space-y-4 animate-fadeIn">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div>
                  <h2 className="text-xl font-bold text-slate-900 tracking-tight">Two-Stage Weighbridge System</h2>
                  <p className="text-slate-500 text-[11px]">Live electronic scale integration, gross/tare calculation, and slip generation</p>
                </div>
                <div className="flex items-center gap-2">
                  <button className="px-3 py-2 bg-white border border-slate-300 text-slate-700 rounded-lg font-bold text-[11px] flex items-center gap-1.5 shadow-sm">
                    <Printer className="w-3.5 h-3.5" />
                    <span>Print Slip</span>
                  </button>
                  <button className="px-4 py-2 bg-[#1e3a8a] hover:bg-blue-900 text-white rounded-lg font-bold text-[11px] flex items-center gap-1.5 shadow-sm">
                    <Plus className="w-3.5 h-3.5" />
                    <span>New Weighment</span>
                  </button>
                </div>
              </div>

              {/* Digital Scale Readout Banner */}
              <div className="bg-slate-950 text-white p-5 rounded-2xl border border-slate-800 shadow-xl flex flex-col md:flex-row items-center justify-between gap-4">
                <div className="space-y-1 text-center md:text-left">
                  <span className="text-[10px] font-mono font-bold text-emerald-400 uppercase tracking-widest flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                    LIVE ELECTRONIC SCALE STATUS: STABLE
                  </span>
                  <div className="text-4xl sm:text-5xl font-mono font-black text-white tracking-wider">
                    32,450 <span className="text-xl font-sans font-bold text-slate-400">KG</span>
                  </div>
                  <div className="text-[11px] text-slate-400">Connected to Weighbridge Platform 01 • Auto-capture enabled</div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="px-4 py-3 bg-slate-900 rounded-xl border border-slate-800 text-center">
                    <div className="text-[10px] font-mono text-slate-400">TARE WEIGHT</div>
                    <div className="text-lg font-mono font-bold text-amber-400">10,228 KG</div>
                  </div>
                  <div className="px-4 py-3 bg-blue-950/80 rounded-xl border border-blue-800 text-center">
                    <div className="text-[10px] font-mono text-blue-300">NET PAYLOAD</div>
                    <div className="text-lg font-mono font-bold text-emerald-400">22,222 KG</div>
                  </div>
                </div>
              </div>

              {/* Two-Stage Active Cycle Card */}
              <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm space-y-4">
                <div className="flex items-center justify-between pb-2 border-b border-slate-100">
                  <div className="font-bold text-slate-900 text-sm">Active Vehicle Weighment Ticket #WS-2026-000108</div>
                  <span className="px-2 py-0.5 rounded bg-blue-50 text-blue-700 border border-blue-200 font-mono text-[10px] font-bold">
                    Stage 2: Loaded Gross
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-[11px]">
                  <div className="p-3 bg-slate-50 rounded-lg space-y-1">
                    <span className="text-[10px] text-slate-400 font-mono">VEHICLE DETAILS</span>
                    <div className="font-mono font-bold text-slate-900 text-sm">TN-13-AR-4567</div>
                    <div className="text-slate-600">Heavy Tipper • Driver: Murugan M.</div>
                  </div>
                  <div className="p-3 bg-slate-50 rounded-lg space-y-1">
                    <span className="text-[10px] text-slate-400 font-mono">CUSTOMER & SITE</span>
                    <div className="font-bold text-slate-900 text-sm">Mohamed Nazir M.</div>
                    <div className="text-slate-600">Highway Expansion Project, Ward 4</div>
                  </div>
                  <div className="p-3 bg-slate-50 rounded-lg space-y-1">
                    <span className="text-[10px] text-slate-400 font-mono">MATERIAL & RATE</span>
                    <div className="font-bold text-slate-900 text-sm">BMS (Base Material Stone)</div>
                    <div className="text-slate-600">Rate: ₹650.00 / Ton • Net: 22.22 Tons</div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* ════ MODULE 4: VEHICLE MANAGEMENT ═══════════════════ */}
          {activeModule === 'vehicles' && (
            <div className="space-y-4 animate-fadeIn">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div>
                  <h2 className="text-xl font-bold text-slate-900 tracking-tight">Vehicle Management</h2>
                  <p className="text-slate-500 text-[11px]">Manage your fleet, fuel consumption, maintenance, documents, and vehicle performance</p>
                </div>
                <button className="px-4 py-2 bg-[#1e3a8a] hover:bg-blue-900 text-white rounded-lg font-bold text-[11px] flex items-center gap-1.5 shadow-sm transition-colors self-start sm:self-auto">
                  <Plus className="w-3.5 h-3.5" />
                  <span>Add Vehicle</span>
                </button>
              </div>

              <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
                <div className="bg-white p-3.5 rounded-xl border border-slate-200 shadow-sm flex items-center justify-between">
                  <div>
                    <div className="text-[10px] text-slate-500 uppercase font-medium">TOTAL VEHICLES</div>
                    <div className="text-xl font-black text-slate-900">14</div>
                  </div>
                  <Truck className="w-7 h-7 text-blue-500 p-1.5 bg-blue-50 rounded-lg" />
                </div>
                <div className="bg-white p-3.5 rounded-xl border border-slate-200 shadow-sm flex items-center justify-between">
                  <div>
                    <div className="text-[10px] text-slate-500 uppercase font-medium">ACTIVE VEHICLES</div>
                    <div className="text-xl font-black text-emerald-600">12</div>
                  </div>
                  <Truck className="w-7 h-7 text-emerald-500 p-1.5 bg-emerald-50 rounded-lg" />
                </div>
                <div className="bg-white p-3.5 rounded-xl border border-slate-200 shadow-sm flex items-center justify-between">
                  <div>
                    <div className="text-[10px] text-slate-500 uppercase font-medium">TOTAL TRIPS</div>
                    <div className="text-xl font-black text-slate-900">186</div>
                  </div>
                  <TrendingUp className="w-7 h-7 text-indigo-500 p-1.5 bg-indigo-50 rounded-lg" />
                </div>
                <div className="bg-white p-3.5 rounded-xl border border-slate-200 shadow-sm flex items-center justify-between">
                  <div>
                    <div className="text-[10px] text-slate-500 uppercase font-medium">TOTAL TONNAGE</div>
                    <div className="text-xl font-black text-slate-900">3,420 t</div>
                  </div>
                  <Scale className="w-7 h-7 text-emerald-500 p-1.5 bg-emerald-50 rounded-lg" />
                </div>
                <div className="bg-white p-3.5 rounded-xl border border-slate-200 shadow-sm flex items-center justify-between">
                  <div>
                    <div className="text-[10px] text-slate-500 uppercase font-medium">TOTAL DIESEL COST</div>
                    <div className="text-lg font-black text-slate-900">₹1,84,500.00</div>
                  </div>
                  <Fuel className="w-7 h-7 text-amber-500 p-1.5 bg-amber-50 rounded-lg" />
                </div>
                <div className="bg-white p-3.5 rounded-xl border border-slate-200 shadow-sm flex items-center justify-between">
                  <div>
                    <div className="text-[10px] text-slate-500 uppercase font-medium">TOTAL DIESEL</div>
                    <div className="text-lg font-black text-blue-600">1,940 L</div>
                  </div>
                  <Fuel className="w-7 h-7 text-blue-500 p-1.5 bg-blue-50 rounded-lg" />
                </div>
                <div className="bg-white p-3.5 rounded-xl border border-slate-200 shadow-sm flex items-center justify-between">
                  <div>
                    <div className="text-[10px] text-slate-500 uppercase font-medium">MAINTENANCE COST</div>
                    <div className="text-lg font-black text-rose-600">₹24,800.00</div>
                  </div>
                  <Wrench className="w-7 h-7 text-rose-500 p-1.5 bg-rose-50 rounded-lg" />
                </div>
                <div className="bg-white p-3.5 rounded-xl border border-slate-200 shadow-sm flex items-center justify-between">
                  <div>
                    <div className="text-[10px] text-slate-500 uppercase font-medium">OPERATING COST</div>
                    <div className="text-lg font-black text-slate-900">₹2,09,300.00</div>
                  </div>
                  <Calculator className="w-7 h-7 text-purple-500 p-1.5 bg-purple-50 rounded-lg" />
                </div>
              </div>

              <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
                <table className="w-full text-left border-collapse text-[11px]">
                  <thead>
                    <tr className="bg-slate-50 border-b border-slate-200 text-slate-600 font-mono text-[10px]">
                      <th className="py-2.5 px-4 font-semibold">VEHICLE NO.</th>
                      <th className="py-2.5 px-4 font-semibold">TYPE</th>
                      <th className="py-2.5 px-4 font-semibold">DRIVER</th>
                      <th className="py-2.5 px-4 font-semibold">OWNER</th>
                      <th className="py-2.5 px-4 font-semibold">CAPACITY</th>
                      <th className="py-2.5 px-4 font-semibold">DIESEL SUMMARY</th>
                      <th className="py-2.5 px-4 font-semibold">STATUS</th>
                      <th className="py-2.5 px-4 font-semibold">ACTIONS</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {[
                      { no: 'tn72ar1234', type: 'Tipper (10-Wheel)', driver: 'Karthikeyan S.', owner: 'MRNS Fleet', cap: '25.0 Ton', diesel: '185 L (₹17,500)', status: 'Active' },
                      { no: 'tn13ar4567', type: 'Heavy Tipper (12W)', driver: 'Murugan M.', owner: 'Siva Roadways', cap: '32.0 Ton', diesel: '220 L (₹20,900)', status: 'Active' },
                      { no: 'tn69az9988', type: 'Dumper (6-Wheel)', driver: 'Selvam P.', owner: 'Apex Quarry', cap: '16.0 Ton', diesel: '140 L (₹13,300)', status: 'Active' },
                      { no: 'tn45bk5521', type: 'Tipper (10-Wheel)', driver: 'Ramesh Kumar', owner: 'MRNS Fleet', cap: '25.0 Ton', diesel: '190 L (₹18,050)', status: 'Active' },
                    ].map((row, i) => (
                      <tr key={i} className="hover:bg-slate-50 transition-colors">
                        <td className="py-2.5 px-4 font-mono font-bold text-slate-900 uppercase">{row.no}</td>
                        <td className="py-2.5 px-4 text-slate-600">{row.type}</td>
                        <td className="py-2.5 px-4 font-medium text-slate-800">{row.driver}</td>
                        <td className="py-2.5 px-4 text-slate-600">{row.owner}</td>
                        <td className="py-2.5 px-4 font-mono text-slate-700">{row.cap}</td>
                        <td className="py-2.5 px-4 font-mono text-blue-700">{row.diesel}</td>
                        <td className="py-2.5 px-4">
                          <span className="px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 font-mono text-[9px] font-bold">
                            {row.status}
                          </span>
                        </td>
                        <td className="py-2.5 px-4 text-slate-400">
                          <span className="cursor-pointer hover:text-slate-700 font-mono text-xs">Edit / View</span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* ════ MODULE 5: MATERIAL MASTER ══════════════════════ */}
          {activeModule === 'materials' && (
            <div className="space-y-4 animate-fadeIn">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div>
                  <h2 className="text-xl font-bold text-slate-900 tracking-tight">Material Master</h2>
                  <p className="text-slate-500 text-[11px]">Manage materials, rates, and GST information</p>
                </div>
                <button className="px-4 py-2 bg-[#1e3a8a] hover:bg-blue-900 text-white rounded-lg font-bold text-[11px] flex items-center gap-1.5 shadow-sm transition-colors self-start sm:self-auto">
                  <Plus className="w-3.5 h-3.5" />
                  <span>Add Material</span>
                </button>
              </div>

              <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
                <table className="w-full text-left border-collapse text-[11px]">
                  <thead>
                    <tr className="bg-slate-50 border-b border-slate-200 text-slate-600 font-mono text-[10px]">
                      <th className="py-2.5 px-4 font-semibold">CODE</th>
                      <th className="py-2.5 px-4 font-semibold">NAME</th>
                      <th className="py-2.5 px-4 font-semibold">CATEGORY</th>
                      <th className="py-2.5 px-4 font-semibold">UNIT</th>
                      <th className="py-2.5 px-4 font-semibold">HSN</th>
                      <th className="py-2.5 px-4 font-semibold">GST %</th>
                      <th className="py-2.5 px-4 font-semibold">SELLING RATE</th>
                      <th className="py-2.5 px-4 font-semibold">PURCHASE RATE</th>
                      <th className="py-2.5 px-4 font-semibold">STATUS</th>
                      <th className="py-2.5 px-4 font-semibold">ACTIONS</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {[
                      { code: 'bms001', name: 'BMS', category: 'jelly', unit: 'ton', hsn: '3456', gst: '18%', sell: '₹650.00', buy: '₹320.00', status: 'Active' },
                      { code: 'jelly002', name: 'jelly 20mm', category: 'jelly', unit: 'ton', hsn: '2345', gst: '18%', sell: '₹500.00', buy: '₹280.00', status: 'Active' },
                      { code: 'jelly001', name: 'jelly 10mm', category: 'jelly', unit: 'ton', hsn: '2345', gst: '18%', sell: '₹550.00', buy: '₹290.00', status: 'Active' },
                      { code: 'dust001', name: 'crusher dust (M-sand)', category: 'sand', unit: 'ton', hsn: '2517', gst: '18%', sell: '₹420.00', buy: '₹180.00', status: 'Active' },
                      { code: 'gsb001', name: 'GSB (Granular Sub-Base)', category: 'roadbase', unit: 'ton', hsn: '2517', gst: '18%', sell: '₹380.00', buy: '₹200.00', status: 'Active' },
                      { code: 'boulder01', name: 'Raw Stone Boulders', category: 'raw', unit: 'ton', hsn: '2517', gst: '5%', sell: '₹260.00', buy: '₹140.00', status: 'Active' },
                    ].map((row, i) => (
                      <tr key={i} className="hover:bg-slate-50 transition-colors">
                        <td className="py-2.5 px-4 font-mono text-slate-600">{row.code}</td>
                        <td className="py-2.5 px-4 font-bold text-slate-900">{row.name}</td>
                        <td className="py-2.5 px-4 text-slate-500">{row.category}</td>
                        <td className="py-2.5 px-4 font-mono text-slate-600">{row.unit}</td>
                        <td className="py-2.5 px-4 font-mono text-slate-600">{row.hsn}</td>
                        <td className="py-2.5 px-4 font-mono font-bold text-blue-600">{row.gst}</td>
                        <td className="py-2.5 px-4 font-mono font-bold text-emerald-600">{row.sell}</td>
                        <td className="py-2.5 px-4 font-mono text-slate-600">{row.buy}</td>
                        <td className="py-2.5 px-4">
                          <span className="px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 font-mono text-[9px] font-bold">
                            {row.status}
                          </span>
                        </td>
                        <td className="py-2.5 px-4 text-slate-400">
                          <span className="cursor-pointer hover:text-slate-700 font-mono text-xs">Edit</span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* ════ MODULE 6: SALES / INVOICES ═════════════════════ */}
          {activeModule === 'sales' && (
            <div className="space-y-4 animate-fadeIn">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div>
                  <h2 className="text-xl font-bold text-slate-900 tracking-tight">Sales / Invoices</h2>
                  <p className="text-slate-500 text-[11px]">Generate invoices from weighment data</p>
                </div>
                <div className="flex items-center gap-2">
                  <button className="px-3.5 py-2 bg-white border border-slate-300 hover:bg-slate-50 text-slate-700 rounded-lg font-bold text-[11px] shadow-sm transition-colors">
                    Consolidated Invoice
                  </button>
                  <button className="px-4 py-2 bg-[#1e3a8a] hover:bg-blue-900 text-white rounded-lg font-bold text-[11px] flex items-center gap-1.5 shadow-sm transition-colors">
                    <Plus className="w-3.5 h-3.5" />
                    <span>New Invoice</span>
                  </button>
                </div>
              </div>

              <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
                <table className="w-full text-left border-collapse text-[11px]">
                  <thead>
                    <tr className="bg-slate-50 border-b border-slate-200 text-slate-600 font-mono text-[10px]">
                      <th className="py-2.5 px-4 font-semibold">INVOICE NO.</th>
                      <th className="py-2.5 px-4 font-semibold">SLIP NO.</th>
                      <th className="py-2.5 px-4 font-semibold">VEHICLE</th>
                      <th className="py-2.5 px-4 font-semibold">CUSTOMER</th>
                      <th className="py-2.5 px-4 font-semibold">MATERIAL</th>
                      <th className="py-2.5 px-4 font-semibold">GROSS (KG)</th>
                      <th className="py-2.5 px-4 font-semibold">TARE (KG)</th>
                      <th className="py-2.5 px-4 font-semibold">NET (KG)</th>
                      <th className="py-2.5 px-4 font-semibold">QTY</th>
                      <th className="py-2.5 px-4 font-semibold">NET AMOUNT</th>
                      <th className="py-2.5 px-4 font-semibold">BALANCE</th>
                      <th className="py-2.5 px-4 font-semibold">STATUS</th>
                      <th className="py-2.5 px-4 font-semibold">DATE</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {[
                      { inv: 'INV-2026-000002', slip: 'WS-2026-000002', veh: 'tn13ar4567', cust: 'mohamed nazir.m', mat: 'BMS', gross: '6,789 kg', tare: '4,567 kg', net: '2,222 kg', qty: '2,222 kg', amt: '₹14,44,300.00', bal: '₹14,44,300.00', status: 'Unpaid', date: '05 Nov 2026, 18:24' },
                      { inv: 'INV-2026-000001', slip: 'WS-2026-000001', veh: 'tn12ar1234', cust: 'mohamed nazir.m', mat: 'BMS', gross: '6,893 kg', tare: '4,589 kg', net: '2,304 kg', qty: '2,304 kg', amt: '₹14,97,600.00', bal: '₹14,97,600.00', status: 'Unpaid', date: '02 Nov 2026, 13:56' },
                      { inv: 'INV-2026-000003', slip: 'WS-2026-000003', veh: 'tn72ar1234', cust: 'L&T Construction Ltd.', mat: 'jelly 20mm', gross: '28,890 kg', tare: '9,586 kg', net: '19,304 kg', qty: '19.30 ton', amt: '₹9,65,200.00', bal: '₹0.00', status: 'Paid', date: '09 Nov 2026, 11:20' },
                      { inv: 'INV-2026-000004', slip: 'WS-2026-000004', veh: 'tn69az9988', cust: 'Siva Roadways & Infra', mat: 'crusher dust', gross: '24,120 kg', tare: '8,400 kg', net: '15,720 kg', qty: '15.72 ton', amt: '₹6,60,240.00', bal: '₹1,50,000.00', status: 'Partial', date: '10 Nov 2026, 14:10' },
                    ].map((row, i) => (
                      <tr key={i} className="hover:bg-slate-50 transition-colors">
                        <td className="py-2.5 px-4 font-mono font-bold text-slate-900">{row.inv}</td>
                        <td className="py-2.5 px-4 font-mono text-slate-600">{row.slip}</td>
                        <td className="py-2.5 px-4 font-mono text-slate-700">{row.veh}</td>
                        <td className="py-2.5 px-4 font-medium text-slate-800">{row.cust}</td>
                        <td className="py-2.5 px-4 uppercase text-slate-700 font-mono text-[10px]">{row.mat}</td>
                        <td className="py-2.5 px-4 font-mono text-slate-600">{row.gross}</td>
                        <td className="py-2.5 px-4 font-mono text-slate-600">{row.tare}</td>
                        <td className="py-2.5 px-4 font-mono font-bold text-slate-800">{row.net}</td>
                        <td className="py-2.5 px-4 font-mono text-slate-700">{row.qty}</td>
                        <td className="py-2.5 px-4 font-mono font-bold text-slate-900">{row.amt}</td>
                        <td className="py-2.5 px-4 font-mono text-slate-600">{row.bal}</td>
                        <td className="py-2.5 px-4">
                          <span className={`px-2 py-0.5 rounded-full font-mono text-[9px] font-bold ${
                            row.status === 'Paid'
                              ? 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                              : row.status === 'Partial'
                              ? 'bg-amber-50 text-amber-700 border border-amber-200'
                              : 'bg-rose-50 text-rose-700 border border-rose-200'
                          }`}>
                            {row.status}
                          </span>
                        </td>
                        <td className="py-2.5 px-4 text-slate-500 whitespace-nowrap text-[10px]">{row.date}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* ════ MODULE 7: PURCHASES (RAW STONE) ════════════════ */}
          {activeModule === 'purchases' && (
            <div className="space-y-4 animate-fadeIn">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div>
                  <h2 className="text-xl font-bold text-slate-900 tracking-tight">Raw Stone Purchases & Inward GRN</h2>
                  <p className="text-slate-500 text-[11px]">Track incoming stone boulders from quarry sites, weighment receipts, and supplier payables</p>
                </div>
                <button className="px-4 py-2 bg-[#1e3a8a] hover:bg-blue-900 text-white rounded-lg font-bold text-[11px] flex items-center gap-1.5 shadow-sm">
                  <Plus className="w-3.5 h-3.5" />
                  <span>Record Inward Stone</span>
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="bg-white p-3.5 rounded-xl border border-slate-200 shadow-sm">
                  <span className="text-[10px] text-slate-500 font-mono">TOTAL RAW INWARD THIS MONTH</span>
                  <div className="text-2xl font-black text-slate-900">4,850 Tons</div>
                </div>
                <div className="bg-white p-3.5 rounded-xl border border-slate-200 shadow-sm">
                  <span className="text-[10px] text-slate-500 font-mono">TOTAL PURCHASE VALUE</span>
                  <div className="text-2xl font-black text-blue-600">₹6,79,000.00</div>
                </div>
                <div className="bg-white p-3.5 rounded-xl border border-slate-200 shadow-sm">
                  <span className="text-[10px] text-slate-500 font-mono">AVG PURCHASE RATE / TON</span>
                  <div className="text-2xl font-black text-emerald-600">₹140.00 / t</div>
                </div>
              </div>

              <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
                <table className="w-full text-left border-collapse text-[11px]">
                  <thead>
                    <tr className="bg-slate-50 border-b border-slate-200 text-slate-600 font-mono text-[10px]">
                      <th className="py-2.5 px-4 font-semibold">GRN NO.</th>
                      <th className="py-2.5 px-4 font-semibold">SUPPLIER</th>
                      <th className="py-2.5 px-4 font-semibold">VEHICLE</th>
                      <th className="py-2.5 px-4 font-semibold">RAW MATERIAL</th>
                      <th className="py-2.5 px-4 font-semibold">NET WEIGHT</th>
                      <th className="py-2.5 px-4 font-semibold">RATE / TON</th>
                      <th className="py-2.5 px-4 font-semibold">TOTAL PAYABLE</th>
                      <th className="py-2.5 px-4 font-semibold">STATUS</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {[
                      { grn: 'GRN-2026-0042', sup: 'Cauvery Stone Quarry Ltd', veh: 'TN-45-BK-5521', mat: 'Granite Boulders (ROM)', net: '28.40 t', rate: '₹140.00', amt: '₹3,976.00', status: 'Settled' },
                      { grn: 'GRN-2026-0041', sup: 'Cauvery Stone Quarry Ltd', veh: 'TN-13-AR-4567', mat: 'Granite Boulders (ROM)', net: '31.20 t', rate: '₹140.00', amt: '₹4,368.00', status: 'Settled' },
                      { grn: 'GRN-2026-0040', sup: 'Apex Hardrock Mines', veh: 'TN-72-AR-1234', mat: 'Granite Boulders (ROM)', net: '24.80 t', rate: '₹145.00', amt: '₹3,596.00', status: 'Pending' },
                    ].map((row, i) => (
                      <tr key={i} className="hover:bg-slate-50">
                        <td className="py-2.5 px-4 font-mono font-bold text-slate-900">{row.grn}</td>
                        <td className="py-2.5 px-4 font-medium text-slate-800">{row.sup}</td>
                        <td className="py-2.5 px-4 font-mono text-slate-600">{row.veh}</td>
                        <td className="py-2.5 px-4 text-slate-600">{row.mat}</td>
                        <td className="py-2.5 px-4 font-mono font-bold text-slate-900">{row.net}</td>
                        <td className="py-2.5 px-4 font-mono text-slate-600">{row.rate}</td>
                        <td className="py-2.5 px-4 font-mono font-bold text-blue-700">{row.amt}</td>
                        <td className="py-2.5 px-4">
                          <span className={`px-2 py-0.5 rounded-full font-mono text-[9px] font-bold ${row.status === 'Settled' ? 'bg-emerald-50 text-emerald-700 border border-emerald-200' : 'bg-amber-50 text-amber-700 border border-amber-200'}`}>
                            {row.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* ════ MODULE 8: ACCOUNTS / FINANCIAL LEDGER ═══════════ */}
          {activeModule === 'ledger' && (
            <div className="space-y-4 animate-fadeIn">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div>
                  <h2 className="text-xl font-bold text-slate-900 tracking-tight">Financial Ledger & Accounts</h2>
                  <p className="text-slate-500 text-[11px]">Real-time double entry ledger, account statements, receivables, and profit/loss</p>
                </div>
                <div className="flex items-center gap-2">
                  <button className="px-3.5 py-2 bg-white border border-slate-300 text-slate-700 rounded-lg font-bold text-[11px] shadow-sm flex items-center gap-1.5">
                    <Download className="w-3.5 h-3.5" />
                    <span>Export Statement</span>
                  </button>
                  <button className="px-4 py-2 bg-[#1e3a8a] hover:bg-blue-900 text-white rounded-lg font-bold text-[11px] flex items-center gap-1.5 shadow-sm">
                    <Plus className="w-3.5 h-3.5" />
                    <span>New Journal Entry</span>
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="bg-white p-3.5 rounded-xl border border-slate-200 shadow-sm">
                  <span className="text-[10px] text-slate-500 font-mono">TOTAL DEBITS (DR)</span>
                  <div className="text-xl font-black text-rose-600">₹1,42,80,500.00</div>
                </div>
                <div className="bg-white p-3.5 rounded-xl border border-slate-200 shadow-sm">
                  <span className="text-[10px] text-slate-500 font-mono">TOTAL CREDITS (CR)</span>
                  <div className="text-xl font-black text-emerald-600">₹1,38,40,200.00</div>
                </div>
                <div className="bg-white p-3.5 rounded-xl border border-slate-200 shadow-sm">
                  <span className="text-[10px] text-slate-500 font-mono">NET LEDGER BALANCE</span>
                  <div className="text-xl font-black text-slate-900">₹4,40,300.00 Dr</div>
                </div>
              </div>

              <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
                <table className="w-full text-left border-collapse text-[11px]">
                  <thead>
                    <tr className="bg-slate-50 border-b border-slate-200 text-slate-600 font-mono text-[10px]">
                      <th className="py-2.5 px-4 font-semibold">DATE</th>
                      <th className="py-2.5 px-4 font-semibold">REF VOUCHER</th>
                      <th className="py-2.5 px-4 font-semibold">PARTICULARS</th>
                      <th className="py-2.5 px-4 font-semibold">ACCOUNT HEAD</th>
                      <th className="py-2.5 px-4 font-semibold">DEBIT (₹)</th>
                      <th className="py-2.5 px-4 font-semibold">CREDIT (₹)</th>
                      <th className="py-2.5 px-4 font-semibold">RUNNING BALANCE</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {[
                      { date: '10 Nov 2026', ref: 'REC-2026-089', part: 'By Bank Transfer - L&T Construction', head: 'Bank A/c', dr: '—', cr: '8,15,000.00', bal: '₹14,28,400.00 Cr' },
                      { date: '10 Nov 2026', ref: 'INV-2026-000002', part: 'To Sales - Mohamed Nazir (BMS 22.22t)', head: 'Sales A/c', dr: '14,44,300.00', cr: '—', bal: '₹22,43,400.00 Dr' },
                      { date: '09 Nov 2026', ref: 'EXP-2026-012', part: 'Diesel Expense - IOCL Fleet Filling', head: 'Vehicle Fuel A/c', dr: '18,050.00', cr: '—', bal: '₹7,99,100.00 Dr' },
                      { date: '08 Nov 2026', ref: 'PAY-2026-034', part: 'Crusher Operator Wages (Weekly)', head: 'Salary & Wages', dr: '42,500.00', cr: '—', bal: '₹7,81,050.00 Dr' },
                    ].map((row, i) => (
                      <tr key={i} className="hover:bg-slate-50">
                        <td className="py-2.5 px-4 text-slate-500 font-mono">{row.date}</td>
                        <td className="py-2.5 px-4 font-mono font-bold text-slate-900">{row.ref}</td>
                        <td className="py-2.5 px-4 font-medium text-slate-800">{row.part}</td>
                        <td className="py-2.5 px-4 text-blue-700 font-mono text-[10px]">{row.head}</td>
                        <td className="py-2.5 px-4 font-mono text-rose-600 font-bold">{row.dr}</td>
                        <td className="py-2.5 px-4 font-mono text-emerald-600 font-bold">{row.cr}</td>
                        <td className="py-2.5 px-4 font-mono text-slate-900 font-semibold">{row.bal}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* ════ MODULE 9: AUDIT LOG & SECURITY ═════════════════ */}
          {activeModule === 'audit' && (
            <div className="space-y-4 animate-fadeIn">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div>
                  <h2 className="text-xl font-bold text-slate-900 tracking-tight">System Audit Log & Trail</h2>
                  <p className="text-slate-500 text-[11px]">Immutable record of all user operations, weighment adjustments, and financial postings</p>
                </div>
                <div className="flex items-center gap-2">
                  <button className="px-3 py-1.5 bg-white border border-slate-300 text-slate-700 rounded-lg font-bold text-[10px] flex items-center gap-1 shadow-sm">
                    <Download className="w-3 h-3" />
                    <span>Export CSV</span>
                  </button>
                  <button className="px-3 py-1.5 bg-white border border-slate-300 text-slate-700 rounded-lg font-bold text-[10px] flex items-center gap-1 shadow-sm">
                    <Download className="w-3 h-3" />
                    <span>Export PDF</span>
                  </button>
                </div>
              </div>

              <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
                <table className="w-full text-left border-collapse text-[11px]">
                  <thead>
                    <tr className="bg-slate-50 border-b border-slate-200 text-slate-600 font-mono text-[10px]">
                      <th className="py-2.5 px-4 font-semibold">TIMESTAMP</th>
                      <th className="py-2.5 px-4 font-semibold">USER</th>
                      <th className="py-2.5 px-4 font-semibold">MODULE</th>
                      <th className="py-2.5 px-4 font-semibold">ACTION</th>
                      <th className="py-2.5 px-4 font-semibold">DETAILS</th>
                      <th className="py-2.5 px-4 font-semibold">IP ADDRESS</th>
                      <th className="py-2.5 px-4 font-semibold">STATUS</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {[
                      { time: '10 Nov 2026, 18:24:12', user: '1mona (Admin)', mod: 'Weighment', act: 'CAPTURE_SCALE_WEIGHT', detail: 'Vehicle TN-13-AR-4567 gross 32,450 kg captured', ip: '192.168.1.104', status: 'SUCCESS' },
                      { time: '10 Nov 2026, 18:25:05', user: '1mona (Admin)', mod: 'Billing', act: 'GENERATE_GST_INVOICE', detail: 'Created INV-2026-000002 for Mohamed Nazir', ip: '192.168.1.104', status: 'SUCCESS' },
                      { time: '10 Nov 2026, 16:51:30', user: 'selvam (Operator)', mod: 'Production', act: 'RECORD_SHIFT_OUTPUT', detail: 'Recorded 428 tons output for Shift 1', ip: '192.168.1.118', status: 'SUCCESS' },
                      { time: '10 Nov 2026, 14:15:22', user: '1mona (Admin)', mod: 'Materials', act: 'UPDATE_SELLING_RATE', detail: 'Updated BMS rate to ₹650.00 / ton', ip: '192.168.1.104', status: 'SUCCESS' },
                      { time: '10 Nov 2026, 09:00:01', user: 'system_backup', mod: 'System', act: 'AUTO_DATABASE_BACKUP', detail: 'Automated snapshot backup created to local drive', ip: '127.0.0.1', status: 'SUCCESS' },
                    ].map((row, i) => (
                      <tr key={i} className="hover:bg-slate-50">
                        <td className="py-2.5 px-4 font-mono text-slate-500 text-[10px]">{row.time}</td>
                        <td className="py-2.5 px-4 font-medium text-slate-900">{row.user}</td>
                        <td className="py-2.5 px-4">
                          <span className="px-2 py-0.5 rounded bg-slate-100 text-slate-700 font-mono text-[9px] font-bold">
                            {row.mod}
                          </span>
                        </td>
                        <td className="py-2.5 px-4 font-mono text-blue-700 font-bold text-[10px]">{row.act}</td>
                        <td className="py-2.5 px-4 text-slate-600">{row.detail}</td>
                        <td className="py-2.5 px-4 font-mono text-slate-500 text-[10px]">{row.ip}</td>
                        <td className="py-2.5 px-4">
                          <span className="px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 font-mono text-[9px] font-bold">
                            {row.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};

export default CrusherErpMockupViewer;
