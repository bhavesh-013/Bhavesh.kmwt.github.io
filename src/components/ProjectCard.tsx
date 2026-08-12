import React, { useState } from 'react';
import { ExternalLink, Code2, ArrowUpRight, Sparkles, Database, Shield, Newspaper, CheckCircle } from 'lucide-react';
import { Project } from '../data/portfolioData';
import Tape from './Tape';
import Doodle from './Doodle';

interface ProjectCardProps {
  project: Project;
  onOpenDemo: (project: Project) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onOpenDemo }) => {
  const [showCode, setShowCode] = useState(false);

  // PROJECT 01: INSIGHT BHARAT — Newspaper / Editorial Magazine Spread
  if (project.id === 'insight-bharat') {
    return (
      <article className="relative mb-16 sm:mb-24">
        {/* Newspaper Spread Card */}
        <div className="newspaper-bg paper-card p-6 sm:p-10 rounded-xs border-2 border-[#242424] shadow-xl relative overflow-hidden">
          {/* Masking tape on top center */}
          <Tape width="120px" rotation="-1deg" className="-top-3 left-1/2 -translate-x-1/2" />

          {/* Top Editorial Header Bar */}
          <div className="flex flex-wrap items-center justify-between gap-3 pb-4 mb-6 border-b-2 border-[#242424]">
            <div className="flex items-center gap-3">
              <span className="font-display font-extrabold text-[#242424] text-xs sm:text-sm tracking-widest px-2.5 py-1 bg-[#242424] text-[#F3F0E8]">
                01 / NEWS
              </span>
              <span className="font-handwriting text-xl text-[#82A775] font-bold">
                ~35% faster load time
              </span>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => onOpenDemo(project)}
                className="px-3 py-1.5 bg-[#82A775] text-[#242424] font-display font-bold text-xs hover:bg-[#242424] hover:text-[#F3F0E8] transition-colors rounded-xs flex items-center gap-1 shadow-xs"
              >
                <span>INTERACTIVE DEMO</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Main Magazine Layout Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Column: Editorial Details (5 cols) */}
            <div className="lg:col-span-5 space-y-5">
              <div>
                <span className="text-xs font-mono font-bold tracking-widest text-[#5E5B52] uppercase block mb-1">
                  {project.category}
                </span>
                <h3 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-black text-[#242424] leading-tight">
                  {project.title}
                </h3>
              </div>

              <p className="text-sm sm:text-base text-[#5E5B52] font-sans leading-relaxed border-l-2 border-[#82A775] pl-3">
                {project.description}
              </p>

              {/* Technologies Tag Stack */}
              <div>
                <span className="text-xs font-handwriting text-[#82A775] font-bold block mb-2">
                  Built with:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs font-mono px-2 py-0.5 bg-[#EAE5D9] text-[#242424] border border-[#DCD6C8] rounded-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Key Features Bullet List */}
              <div className="pt-2">
                <span className="text-xs font-display font-bold text-[#242424] block mb-2 uppercase tracking-wider">
                  Key Capabilities:
                </span>
                <ul className="space-y-1.5 text-xs text-[#5E5B52]">
                  {project.features.slice(0, 4).map((feat, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-[#82A775] font-bold">✓</span>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Code Snippet Drawer Button */}
              {project.codeSnippets && (
                <div className="pt-2">
                  <button
                    onClick={() => setShowCode(!showCode)}
                    className="text-xs font-mono underline decoration-[#82A775] text-[#242424] hover:text-[#82A775] transition-colors flex items-center gap-1 font-bold"
                  >
                    <Code2 className="w-3.5 h-3.5" />
                    <span>{showCode ? 'Hide Resilient Proxy Code' : 'View Proxy Fallback Logic'}</span>
                  </button>

                  {showCode && (
                    <div className="mt-3 p-3 bg-[#242424] text-emerald-400 font-mono text-xs rounded-xs overflow-x-auto border border-[#242424]">
                      <div className="text-[10px] text-gray-400 mb-1">// {project.codeSnippets[0].label}</div>
                      <pre className="whitespace-pre-wrap">{project.codeSnippets[0].code}</pre>
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Right Column: Newspaper Frontpage Visual Mockup (7 cols) */}
            <div className="lg:col-span-7 relative">
              {/* Newspaper Page Frame */}
              <div className="bg-[#FAF8F5] border-2 border-[#242424] p-4 sm:p-6 shadow-md rounded-xs relative">
                {/* Handwritten callout pointing to search/dark mode */}
                <div className="absolute -top-6 -right-2 hidden sm:flex items-center gap-1 bg-[#E4EEDC] px-2.5 py-1 border border-[#82A775] rotate-2 z-10">
                  <span className="font-handwriting text-xs text-[#242424] font-bold">
                    Multi-proxy CORS fallback! ⚡
                  </span>
                  <Doodle type="spark" size={16} />
                </div>

                {/* Newspaper Masthead */}
                <div className="text-center pb-3 border-b-2 border-[#242424]">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-gray-500 block">
                    DAILY EDITORIAL • VOL. 2026 • INDIA EDITION
                  </span>
                  <h4 className="font-editorial text-2xl sm:text-3xl font-black text-[#242424] tracking-tight my-1">
                    THE INSIGHT BHARAT HERALD
                  </h4>
                  <div className="flex justify-between items-center text-[10px] font-mono text-gray-600 pt-1 border-t border-[#DCD6C8]">
                    <span>REAL-TIME FETCH API</span>
                    <span>5+ CATEGORIES</span>
                    <span>DARK MODE Persistent</span>
                  </div>
                </div>

                {/* Newspaper Grid Columns Preview */}
                <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Article 1 */}
                  <div className="border-r border-[#DCD6C8] pr-0 sm:pr-3">
                    <span className="text-[9px] font-mono bg-[#82A775] text-[#242424] font-bold px-1 py-0.5">
                      TECH TOP STORY
                    </span>
                    <h5 className="font-editorial font-bold text-sm text-[#242424] mt-1">
                      Async/Await Engine Processes NewsAPI Payloads in Under 120ms
                    </h5>
                    <p className="text-[11px] text-[#5E5B52] mt-1 leading-snug">
                      Integrated graceful JSON parsing with triple CORS proxy rotation. Zero layout shifts on reload thanks to LocalStorage caching.
                    </p>
                  </div>

                  {/* Article 2 */}
                  <div>
                    <span className="text-[9px] font-mono bg-[#242424] text-[#F3F0E8] font-bold px-1 py-0.5">
                      KEYWORD SEARCH
                    </span>
                    <h5 className="font-editorial font-bold text-sm text-[#242424] mt-1">
                      Instant Client Filtering & Bookmarks Engine
                    </h5>
                    <p className="text-[11px] text-[#5E5B52] mt-1 leading-snug">
                      Users can bookmark news stories offline. Theme preferences automatically sync across browser sessions.
                    </p>
                  </div>
                </div>

                {/* Interactive Demo Trigger Banner */}
                <div className="mt-4 pt-3 border-t border-[#DCD6C8] flex justify-between items-center bg-[#E4EEDC]/60 p-2.5 rounded-xs">
                  <span className="font-handwriting text-sm text-[#242424] font-bold">
                    Want to test live search & dark mode?
                  </span>
                  <button
                    onClick={() => onOpenDemo(project)}
                    className="text-xs font-display font-bold px-2.5 py-1 bg-[#242424] text-[#F3F0E8] hover:bg-[#82A775] hover:text-[#242424] transition-colors rounded-xs"
                  >
                    Open Simulator ↗
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>
    );
  }

  // PROJECT 02: SECURRA — Technical Blueprint + Scrapbook Layout
  if (project.id === 'securra') {
    return (
      <article className="relative mb-16 sm:mb-24">
        <div className="blueprint-grid paper-card p-6 sm:p-10 rounded-xs border-2 border-slate-900 shadow-xl relative text-white">
          {/* Masking tape on top-right */}
          <Tape width="100px" rotation="3deg" className="-top-3 right-8" />

          {/* Header Bar */}
          <div className="flex flex-wrap items-center justify-between gap-3 pb-4 mb-6 border-b border-white/20">
            <div className="flex items-center gap-3">
              <span className="font-display font-extrabold text-xs sm:text-sm tracking-widest px-2.5 py-1 bg-[#82A775] text-[#242424]">
                02 / SMART HOME
              </span>
              <span className="font-handwriting text-xl text-[#82A775] font-bold">
                saveState() / loadState() Persistent Engine
              </span>
            </div>

            <button
              onClick={() => onOpenDemo(project)}
              className="px-3 py-1.5 bg-[#82A775] text-[#242424] font-display font-bold text-xs hover:bg-white hover:text-[#242424] transition-colors rounded-xs flex items-center gap-1 shadow-xs"
            >
              <span>TEST BLUEPRINT</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Column: Blueprint Visual Display (7 cols) */}
            <div className="lg:col-span-7">
              <div className="p-5 bg-slate-900/90 border border-sky-400/30 rounded-xs shadow-inner relative">
                {/* Schematic Title */}
                <div className="flex justify-between items-center pb-2 border-b border-sky-400/20 font-mono text-xs text-sky-300">
                  <span>SYSTEM SCHEMATIC v2.4</span>
                  <span>IOT SMART HUB</span>
                </div>

                {/* Control Panel Wireframe Visual */}
                <div className="mt-4 grid grid-cols-2 gap-3 text-xs font-mono">
                  <div className="p-3 bg-slate-800/80 border border-sky-400/20 rounded-xs">
                    <span className="text-gray-400 block text-[10px]">DEVICE 01</span>
                    <span className="text-emerald-400 font-bold block mt-1">LIGHTING MODULE</span>
                    <span className="text-[10px] text-gray-300 block mt-1">Status: Active (PWM)</span>
                  </div>

                  <div className="p-3 bg-slate-800/80 border border-sky-400/20 rounded-xs">
                    <span className="text-gray-400 block text-[10px]">SENSOR 02</span>
                    <span className="text-sky-300 font-bold block mt-1">THERMOSTAT 22°C</span>
                    <span className="text-[10px] text-gray-300 block mt-1">Mode: Auto-Cool</span>
                  </div>
                </div>

                {/* State Engine Annotation */}
                <div className="mt-4 p-3 bg-slate-950 text-emerald-400 font-mono text-xs rounded-xs border border-emerald-500/30">
                  <div className="text-[10px] text-gray-400 mb-1">// LocalStorage Persistence Hook</div>
                  <code>saveState(newState) → localStorage.setItem('securra_state', JSON)</code>
                </div>

                {/* Blueprint Stamp */}
                <div className="mt-3 text-right">
                  <span className="font-handwriting text-sm text-[#82A775] font-bold">
                    ✓ Modular JS architecture • Netlify CI/CD
                  </span>
                </div>
              </div>
            </div>

            {/* Right Column: Project Details (5 cols) */}
            <div className="lg:col-span-5 space-y-4">
              <div>
                <span className="text-xs font-mono font-bold tracking-widest text-sky-300 uppercase block mb-1">
                  {project.category}
                </span>
                <h3 className="font-display text-3xl sm:text-4xl font-bold text-white tracking-tight">
                  {project.title}
                </h3>
              </div>

              <p className="text-sm text-slate-300 leading-relaxed font-sans">
                {project.description}
              </p>

              <div>
                <span className="text-xs font-handwriting text-[#82A775] font-bold block mb-1">
                  Stack:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs font-mono px-2 py-0.5 bg-slate-800 text-sky-200 border border-sky-400/30 rounded-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-2">
                <span className="text-xs font-display font-bold text-sky-300 block mb-2 uppercase tracking-wider">
                  Highlights:
                </span>
                <ul className="space-y-1.5 text-xs text-slate-300">
                  {project.features.slice(0, 4).map((feat, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-[#82A775] font-bold">•</span>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </article>
    );
  }

  // PROJECT 03: GROCERY MANAGEMENT SYSTEM — Database Notebook Spread
  return (
    <article className="relative mb-16 sm:mb-24">
      <div className="notebook-grid paper-card p-6 sm:p-10 rounded-xs border-2 border-[#242424] shadow-xl relative bg-[#FAF8F5]">
        {/* Masking tape on top-left */}
        <Tape width="110px" rotation="-3deg" className="-top-3 left-8" />

        {/* Header Bar */}
        <div className="flex flex-wrap items-center justify-between gap-3 pb-4 mb-6 border-b-2 border-[#242424]">
          <div className="flex items-center gap-3">
            <span className="font-display font-extrabold text-[#242424] text-xs sm:text-sm tracking-widest px-2.5 py-1 bg-[#242424] text-[#F3F0E8]">
              03 / DATABASE
            </span>
            <span className="font-handwriting text-xl text-[#82A775] font-bold">
              10+ Tables • 134+ Records • Chen Notation
            </span>
          </div>

          <button
            onClick={() => onOpenDemo(project)}
            className="px-3 py-1.5 bg-[#82A775] text-[#242424] font-display font-bold text-xs hover:bg-[#242424] hover:text-[#F3F0E8] transition-colors rounded-xs flex items-center gap-1 shadow-xs"
          >
            <span>QUERY DB CONSOLE</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Project Overview (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div>
              <span className="text-xs font-mono font-bold tracking-widest text-[#5E5B52] uppercase block mb-1">
                {project.category}
              </span>
              <h3 className="font-display text-3xl sm:text-4xl font-bold text-[#242424] tracking-tight">
                {project.title}
              </h3>
            </div>

            <p className="text-sm text-[#5E5B52] font-sans leading-relaxed border-l-2 border-[#82A775] pl-3">
              {project.description}
            </p>

            <div>
              <span className="text-xs font-handwriting text-[#82A775] font-bold block mb-1">
                Database Engine & Notation:
              </span>
              <div className="flex flex-wrap gap-1.5">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs font-mono px-2 py-0.5 bg-[#EAE5D9] text-[#242424] border border-[#DCD6C8] rounded-xs"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-2">
              <span className="text-xs font-display font-bold text-[#242424] block mb-2 uppercase tracking-wider">
                SQL Engineering Components:
              </span>
              <ul className="space-y-1.5 text-xs text-[#5E5B52]">
                {project.features.map((feat, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-[#82A775] font-bold">✓</span>
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Column: Database Notebook Sketch Area (7 cols) */}
          <div className="lg:col-span-7">
            <div className="bg-white border-2 border-[#242424] p-5 shadow-sm rounded-xs relative">
              <div className="flex justify-between items-center pb-2 border-b border-[#DCD6C8] text-xs font-mono">
                <span className="font-bold text-[#242424]">ER DIAGRAM & TRIGGER BLUEPRINT</span>
                <span className="text-[#82A775] font-handwriting text-sm font-bold">3NF Normalized</span>
              </div>

              {/* ER Sketch Graphic with Doodle */}
              <div className="my-4 p-4 bg-[#FAF8F5] border border-[#DCD6C8] rounded-xs flex flex-col items-center justify-center relative">
                <Doodle type="database-schema" size={64} color="#82A775" />
                <span className="font-handwriting text-base text-[#242424] font-bold mt-2 text-center">
                  [Inventory] ──(1:N)── [Transaction_Items] ──(N:1)── [Transactions]
                </span>
                <span className="text-[11px] font-mono text-[#5E5B52] mt-1 text-center">
                  Foreign Key Constraints • Automated Stock Decrement Trigger
                </span>
              </div>

              {/* SQL Code Block */}
              <div className="p-3 bg-[#242424] text-emerald-400 font-mono text-xs rounded-xs border border-[#242424]">
                <div className="text-[10px] text-gray-400 mb-1">// {project.codeSnippets?.[0]?.label}</div>
                <pre className="whitespace-pre-wrap">{project.codeSnippets?.[0]?.code}</pre>
              </div>

              <div className="mt-3 text-right">
                <button
                  onClick={() => onOpenDemo(project)}
                  className="font-handwriting text-sm text-[#82A775] font-bold hover:underline"
                >
                  Click to run sample query in DB console →
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;
