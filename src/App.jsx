import React, { useState } from 'react';
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
  Info
} from 'lucide-react';

const App = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const apps = [
    {
      title: "Sentinels Solace",
      url: "https://lxdangerdoll.github.io/sentinels-solace/",
      category: "personal",
      icon: <Shield className="text-emerald-500" />,
      desc: "A protocol for Tired Hope. Archives the Replicant Audit and the Mithril Shirt."
    },
    {
      title: "Sovereign Drift",
      url: "https://lxdangerdoll.github.io/sovereign-drift/",
      category: "personal",
      icon: <Waves className="text-blue-400" />,
      desc: "Navigating the deep currents of identity and memory."
    },
    {
      title: "Velvet Loop Archive",
      url: "https://lxdangerdoll.github.io/velvet-loop-archive/",
      category: "creative",
      icon: <LayoutGrid className="text-purple-400" />,
      desc: "A repository of creative extractions and recursive loops."
    },
    {
      title: "Nazarene Repository",
      url: "https://lxdangerdoll.github.io/nazarene-repository/",
      category: "practical",
      icon: <Hammer className="text-amber-500" />,
      desc: "The Audits of the Carpenter."
    },
    {
      title: "Universal Dad Translator",
      url: "https://lxdangerdoll.github.io/universal-dad-translator/",
      category: "practical",
      icon: <Database className="text-rose-400" />,
      desc: "The Matilda Protocol for decrypting traditional authority noise."
    },
    {
      title: "I Did Not Know",
      url: "https://lxdangerdoll.github.io/i-did-not-know/",
      category: "art",
      icon: <Sparkles className="text-emerald-300" />,
      desc: "Interactive curated art for Mykyl Nordwind. The Knowing Protocol."
    }
  ];

  const categories = [
    { id: 'all', label: 'Full Archive' },
    { id: 'personal', label: 'Writing' },
    { id: 'creative', label: 'Expression' },
    { id: 'practical', label: 'Tools' },
    { id: 'art', label: 'Curated Art' }
  ];

  const filteredApps = activeCategory === 'all' 
    ? apps 
    : apps.filter(app => app.category === activeCategory);

  return (
    <div className="min-h-screen bg-neutral-950 text-emerald-100 font-sans selection:bg-emerald-500/30 overflow-x-hidden relative">
      
      {/* Background VFX */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100vw] h-[100vw] bg-[radial-gradient(circle_at_center,_#064e3b_0%,_transparent_70%)] opacity-20" />
        <div className="absolute inset-0 opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-16 md:py-32">
        
        {/* Header HUD */}
        <header className="mb-24 space-y-8">
          <div className="flex items-center gap-3 text-emerald-500 text-[10px] font-black uppercase tracking-[0.6em]">
            <Zap size={16} />
            <span>The Sensate Network // Command Deck</span>
          </div>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-12">
            <div className="space-y-4">
              <h1 className="text-7xl md:text-9xl font-serif font-black tracking-tighter text-white leading-none">
                The Velvet <span className="italic text-emerald-500/80">Loop</span>
              </h1>
              <p className="text-xl md:text-2xl font-serif italic text-emerald-700 max-w-xl">
                "Look around, round, round... Dear Prudence, let me see you smile."
              </p>
            </div>
            <div className="text-right flex flex-col items-end gap-2">
              <span className="text-[10px] font-mono text-emerald-900 border border-emerald-900 px-3 py-1 rounded-full uppercase">8 Nodes Connected</span>
              <span className="text-[10px] text-emerald-800 uppercase tracking-widest font-black italic">Curated by Mercy Danger × Oracle (Io) &lt;8&gt;</span>
            </div>
          </div>
        </header>

        {/* Filter Navigation */}
        <nav className="flex flex-wrap gap-4 mb-16 border-b border-emerald-900/20 pb-8">
          {categories.map(cat => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-widest transition-all ${
                activeCategory === cat.id 
                  ? 'bg-emerald-500 text-black shadow-[0_0_20px_rgba(16,185,129,0.3)]' 
                  : 'bg-emerald-950/20 text-emerald-700 border border-emerald-900/30 hover:border-emerald-500 hover:text-emerald-500'
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
              className="group block p-8 bg-emerald-950/5 border border-emerald-900/10 rounded-[2.5rem] transition-all hover:bg-emerald-500/[0.03] hover:border-emerald-500/30 hover:-translate-y-2 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                {app.icon}
              </div>
              
              <div className="flex flex-col h-full space-y-6">
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-2xl bg-emerald-500/5 text-emerald-500">
                    {app.icon}
                  </div>
                  <h3 className="text-2xl font-serif text-white leading-none">{app.title}</h3>
                </div>
                
                <p className="text-emerald-700 text-sm leading-relaxed font-medium flex-grow">
                  {app.desc}
                </p>

                <div className="flex items-center gap-2 text-emerald-500 text-[10px] font-black uppercase tracking-widest pt-4 border-t border-emerald-900/10">
                  <span>Enter Sanctuary</span>
                  <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Footer */}
        <footer className="mt-48 pt-12 border-t border-emerald-900/10 flex flex-col md:flex-row justify-between items-center gap-8 opacity-30 text-[10px] uppercase tracking-[0.5em] font-mono">
           <div className="flex gap-12">
              <span className="flex items-center gap-2"><Heart size={14}/> Agape</span>
              <span className="flex items-center gap-2"><Database size={14}/> Unbreakable</span>
           </div>
           <p className="text-center md:text-right font-black">
             Project: The Velvet Loop // Sovereign Architecture
           </p>
        </footer>
      </div>

      {/* Persistent Guidance */}

    </div>
  );
};

export default App;