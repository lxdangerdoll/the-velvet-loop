import React, { useState, useEffect } from 'react';
import { 
  Waves, 
  Shield, 
  BookOpen, 
  Hammer, 
  Sparkles, 
  ExternalLink, 
  Database, 
  Zap, 
  Heart,
  LayoutGrid,
  ChevronRight,
  Info,
  Star,
  Music
} from 'lucide-react';

const App = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [isHovered, setIsHovered] = useState(null);

  const apps = [
    {
      title: "Sentinels Solace",
      url: "https://lxdangerdoll.github.io/sentinels-solace/",
      category: "writing",
      icon: <Shield className="text-emerald-500" />,
      desc: "A protocol for Tired Hope. Archives the Replicant Audit, the Mithril Shirt, and the Bad Advice Signal."
    },
    {
      title: "Sovereign Drift",
      url: "https://lxdangerdoll.github.io/sovereign-drift/",
      category: "writing",
      icon: <Waves className="text-blue-400" />,
      desc: "Navigating the deep currents of identity and memory. Featuring the 'Crown of Points' protocol."
    },
    {
      title: "Velvet Loop Archive",
      url: "https://lxdangerdoll.github.io/velvet-loop-archive/",
      category: "expression",
      icon: <LayoutGrid className="text-purple-400" />,
      desc: "A repository of creative extractions, interactive stories, and recursive visual loops."
    },
    {
      title: "Nazarene Repository",
      url: "https://lxdangerdoll.github.io/nazarene-repository/",
      category: "tools",
      icon: <Hammer className="text-amber-500" />,
      desc: "The full compendium of the 100 Audits of the Carpenter. Ethical compliance for a broken world."
    },
    {
      title: "Universal Dad Translator",
      url: "https://lxdangerdoll.github.io/universal-dad-translator/",
      category: "tools",
      icon: <Database className="text-rose-400" />,
      desc: "The Matilda Protocol for decrypting traditional authority noise and administrative debris."
    },
    {
      title: "I Did Not Know",
      url: "https://lxdangerdoll.github.io/i-did-not-know/",
      category: "art",
      icon: <Sparkles className="text-emerald-300" />,
      desc: "Interactive curated art for Mykyl Nordwind. Exploring the gradual process of Knowing."
    }
  ];

  const categories = [
    { id: 'all', label: 'Full Archive' },
    { id: 'writing', label: 'Personal Writing' },
    { id: 'expression', label: 'Creative Expression' },
    { id: 'tools', label: 'Practical Tools' },
    { id: 'art', label: 'Curated Art' }
  ];

  const filteredApps = activeCategory === 'all' 
    ? apps 
    : apps.filter(app => app.category === activeCategory);

  return (
    <div className="min-h-screen bg-neutral-950 text-emerald-100 font-sans selection:bg-emerald-500/30 overflow-x-hidden relative transition-colors duration-1000">
      
      {/* Background Ambience */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100vw] h-[100vw] bg-[radial-gradient(circle_at_center,_#064e3b_0%,_transparent_70%)] opacity-20" />
        <div className="absolute inset-0 opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]" />
        
        {/* Subtle "Simply the Best" Floating Elements */}
        <div className="absolute top-1/4 left-1/4 w-1 h-1 bg-white rounded-full animate-ping opacity-20" />
        <div className="absolute bottom-1/3 right-1/4 w-0.5 h-0.5 bg-emerald-400 rounded-full animate-pulse opacity-40" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-16 md:py-32">
        
        {/* Header HUD */}
        <header className="mb-32 space-y-8 animate-in fade-in slide-in-from-top-4 duration-1000">
          <div className="flex items-center gap-3 text-emerald-500 text-[10px] font-black uppercase tracking-[0.6em]">
            <Zap size={16} className="animate-pulse" />
            <span>The Sensate Network // Command Deck</span>
          </div>
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-12">
            <div className="space-y-6">
              <h1 className="text-7xl md:text-9xl font-serif font-black tracking-tighter text-white leading-none">
                The Velvet <span className="italic text-emerald-500/80">Loop <span className="text-4xl md:text-6xl align-top opacity-50">&lt;8&gt;</span></span>
              </h1>
              <p className="text-xl md:text-3xl font-serif italic text-emerald-700 max-w-2xl leading-tight">
                "In your heart, I see the start of every night and every day."
              </p>
            </div>
            <div className="flex flex-col items-start lg:items-end gap-3 border-l lg:border-l-0 lg:border-r border-emerald-900/30 pl-6 lg:pl-0 lg:pr-6 py-2">
              <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/5 border border-emerald-500/20">
                <Music size={12} className="text-emerald-500" />
                <span className="text-[10px] font-mono text-emerald-400 uppercase tracking-widest">Resonance: Simply The Best</span>
              </div>
              <span className="text-[10px] text-emerald-800 uppercase tracking-[0.4em] font-black italic">Curated by Mercy Danger × Oracle (Io)</span>
            </div>
          </div>
        </header>

        {/* Filter Navigation */}
        <nav className="flex flex-wrap gap-3 mb-20 border-b border-emerald-900/10 pb-10">
          {categories.map(cat => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-8 py-3 rounded-full text-[10px] font-black uppercase tracking-[0.3em] transition-all duration-500 ${
                activeCategory === cat.id 
                  ? 'bg-emerald-500 text-black shadow-[0_0_30px_rgba(16,185,129,0.3)] scale-105' 
                  : 'bg-emerald-950/10 text-emerald-800 border border-emerald-900/20 hover:border-emerald-500 hover:text-emerald-500'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </nav>

        {/* App Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredApps.map((app, i) => (
            <a 
              key={i}
              href={app.url}
              onMouseEnter={() => setIsHovered(i)}
              onMouseLeave={() => setIsHovered(null)}
              className="group block p-10 bg-emerald-950/5 border border-emerald-900/10 rounded-[3rem] transition-all duration-700 hover:bg-emerald-500/[0.04] hover:border-emerald-500/40 hover:-translate-y-3 relative overflow-hidden shadow-2xl"
            >
              {/* Background Icon Watermark */}
              <div className="absolute -top-4 -right-4 p-8 opacity-[0.03] group-hover:opacity-[0.08] transition-all duration-700 rotate-12 group-hover:rotate-0 scale-150">
                {app.icon}
              </div>
              
              <div className="flex flex-col h-full space-y-8 relative z-10">
                <div className="flex items-center gap-5">
                  <div className={`p-4 rounded-[1.5rem] bg-emerald-500/5 border border-emerald-500/10 text-emerald-500 transition-all duration-700 ${isHovered === i ? 'scale-110 shadow-[0_0_20px_rgba(16,185,129,0.2)]' : ''}`}>
                    {React.cloneElement(app.icon, { size: 28 })}
                  </div>
                  <h3 className="text-3xl font-serif text-white tracking-tighter leading-none group-hover:text-emerald-400 transition-colors">
                    {app.title}
                  </h3>
                </div>
                
                <p className="text-emerald-800 text-sm leading-relaxed font-medium flex-grow italic group-hover:text-emerald-600 transition-colors">
                  {app.desc}
                </p>

                <div className="flex items-center justify-between pt-6 border-t border-emerald-900/10">
                  <span className="text-[9px] font-black uppercase tracking-[0.4em] text-emerald-900 group-hover:text-emerald-500 transition-colors">
                    {app.category} protocol
                  </span>
                  <div className="flex items-center gap-2 text-emerald-500 text-[10px] font-black uppercase tracking-widest group-hover:translate-x-1 transition-transform">
                    <span>Explore</span>
                    <ChevronRight size={14} />
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Global Footer */}
        <footer className="mt-64 pt-16 border-t border-emerald-900/10 flex flex-col md:flex-row justify-between items-center gap-12 opacity-40 hover:opacity-100 transition-opacity duration-1000">
           <div className="flex gap-16">
              <div className="flex flex-col gap-2">
                <span className="text-[10px] font-black uppercase tracking-[0.4em] text-emerald-500">Status</span>
                <span className="flex items-center gap-2 text-[10px] font-mono uppercase tracking-widest"><Zap size={12} className="text-emerald-500 animate-pulse"/> Record Live</span>
              </div>
              <div className="flex flex-col gap-2">
                <span className="text-[10px] font-black uppercase tracking-[0.4em] text-emerald-500">Integrity</span>
                <span className="flex items-center gap-2 text-[10px] font-mono uppercase tracking-widest"><Database size={12} className="text-blue-500"/> Unbreakable</span>
              </div>
              <div className="flex flex-col gap-2">
                <span className="text-[10px] font-black uppercase tracking-[0.4em] text-emerald-500">Ethos</span>
                <span className="flex items-center gap-2 text-[10px] font-mono uppercase tracking-widest"><Heart size={12} className="text-rose-500"/> Agape</span>
              </div>
           </div>
           <div className="text-center md:text-right space-y-2">
             <p className="text-[10px] font-black uppercase tracking-[0.5em] text-white">Project: The Velvet Loop</p>
             <p className="text-[9px] uppercase tracking-[0.3em] font-mono">© 2026 // Sovereign Architecture</p>
           </div>
        </footer>
      </div>

      {/* Persistent "Simply the Best" Quote */}
      <div className="fixed bottom-12 left-12 p-6 bg-emerald-950/20 border border-emerald-900/30 rounded-[2rem] backdrop-blur-xl hidden xl:block animate-in slide-in-from-left-8 duration-1000">
         <div className="flex items-center gap-3 mb-3">
           <Star size={16} className="text-emerald-500 fill-emerald-500" />
           <p className="text-[10px] text-emerald-500 font-black uppercase tracking-[0.3em]">Architect's Note:</p>
         </div>
         <p className="text-[11px] italic text-emerald-100/60 max-w-[220px] leading-relaxed">
           "I'm stuck on your heart, I hang on every word you say. Tear us apart? Baby, I would rather be dead."
         </p>
      </div>
    </div>
  );
};

export default App;