import React, { useState, useEffect } from 'react';
import { X, Search, Bookmark, Moon, Sun, Shield, Power, Thermometer, Database, Play, CheckCircle2, RefreshCw, Code2, ExternalLink } from 'lucide-react';
import { Project } from '../data/portfolioData';

interface ProjectDemoModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectDemoModal: React.FC<ProjectDemoModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  // State for Insight Bharat Demo
  const [newsCategory, setNewsCategory] = useState('Technology');
  const [newsSearch, setNewsSearch] = useState('');
  const [newsDarkMode, setNewsDarkMode] = useState(false);
  const [bookmarkedIds, setBookmarkedIds] = useState<number[]>([1]);

  // State for Securra IoT Demo
  const [livingLight, setLivingLight] = useState(true);
  const [studioLight, setStudioLight] = useState(false);
  const [securityArmed, setSecurityArmed] = useState(true);
  const [temperature, setTemperature] = useState(22);
  const [stateLog, setStateLog] = useState<string>('State loaded from LocalStorage');

  // State for Grocery DBMS Demo
  const [selectedTable, setSelectedTable] = useState<'inventory' | 'transactions' | 'suppliers' | 'audit_log'>('inventory');
  const [queryCode, setQueryCode] = useState('SELECT * FROM inventory WHERE stock_qty <= 25 ORDER BY stock_qty ASC;');
  const [queryResult, setQueryResult] = useState<any[] | null>(null);

  // Mock News Data for Insight Bharat
  const mockArticles = [
    {
      id: 1,
      category: 'Technology',
      title: 'AI Studio introduces native Web Applet container environments',
      source: 'Tech India',
      time: '10m ago',
      summary: 'Developers can now deploy multi-file React apps with instant previews and background tasks.',
      reads: '1.2k'
    },
    {
      id: 2,
      category: 'Technology',
      title: 'NewsAPI multi-proxy resilience strategy reduces endpoint latency by 35%',
      source: 'Web Dev Digest',
      time: '1h ago',
      summary: 'By combining primary API routes with rotating CORS proxies, client apps maintain 99.9% uptime.',
      reads: '3.4k'
    },
    {
      id: 3,
      category: 'India',
      title: 'National Tech Summit highlights emerging frontend innovators from Rajasthan',
      source: 'Bharat Chronicle',
      time: '3h ago',
      summary: 'Undergraduates from PW Institute of Innovation present capstones in smart IoT and web platforms.',
      reads: '890'
    },
    {
      id: 4,
      category: 'Science',
      title: 'Next-Gen IoT Sensors achieve ultra-low power persistence in smart homes',
      source: 'Science Daily',
      time: '5h ago',
      summary: 'Low-cost microcontroller chips enable real-time home automation without cloud dependency.',
      reads: '2.1k'
    }
  ];

  const filteredArticles = mockArticles.filter((article) => {
    const matchesCat = newsCategory === 'All' || article.category === newsCategory;
    const matchesSearch = article.title.toLowerCase().includes(newsSearch.toLowerCase()) ||
                          article.summary.toLowerCase().includes(newsSearch.toLowerCase());
    return matchesCat && matchesSearch;
  });

  const toggleBookmark = (id: number) => {
    if (bookmarkedIds.includes(id)) {
      setBookmarkedIds(bookmarkedIds.filter((bId) => bId !== id));
    } else {
      setBookmarkedIds([...bookmarkedIds, id]);
    }
  };

  // Handler for Securra state updates
  const handleSecurraUpdate = (actionName: string, newStateFn: () => void) => {
    newStateFn();
    setStateLog(`saveState() triggered: Updated ${actionName} @ ${new Date().toLocaleTimeString()}`);
  };

  // Mock DB Tables for Grocery DBMS
  const dbData = {
    inventory: [
      { product_id: 101, item_name: 'Organic Basmati Rice 5kg', stock_qty: 18, unit_price: '₹450', category: 'Grains' },
      { product_id: 102, item_name: 'Cold Pressed Mustard Oil 1L', stock_qty: 42, unit_price: '₹190', category: 'Oils' },
      { product_id: 103, item_name: 'Whole Wheat Atta 10kg', stock_qty: 12, unit_price: '₹380', category: 'Grains' },
      { product_id: 104, item_name: 'Toor Dal Premium 1kg', stock_qty: 65, unit_price: '₹160', category: 'Pulses' }
    ],
    transactions: [
      { txn_id: 'TXN-8801', customer_name: 'Aarav Sharma', amount: '₹1,240', items_count: 4, status: 'PAID' },
      { txn_id: 'TXN-8802', customer_name: 'Priya Mehta', amount: '₹680', items_count: 2, status: 'PAID' },
      { txn_id: 'TXN-8803', customer_name: 'Rahul Verma', amount: '₹2,150', items_count: 7, status: 'PAID' }
    ],
    suppliers: [
      { supplier_id: 'SUP-01', company_name: 'Rajasthan Agro Feeds', contact: '+91 98290XXXXX', city: 'Jaipur' },
      { supplier_id: 'SUP-02', company_name: 'Mewar Organic Traders', contact: '+91 94141XXXXX', city: 'Udaipur' }
    ],
    audit_log: [
      { log_id: 501, event_type: 'TRIGGER_STOCK_DECREMENT', table_affected: 'inventory', timestamp: '2026-08-11 10:20:15' },
      { log_id: 502, event_type: 'STORED_PROC_INVOICE_GEN', table_affected: 'transactions', timestamp: '2026-08-11 10:14:02' }
    ]
  };

  const handleRunQuery = () => {
    if (queryCode.toLowerCase().includes('inventory')) {
      setQueryResult(dbData.inventory);
    } else if (queryCode.toLowerCase().includes('transaction')) {
      setQueryResult(dbData.transactions);
    } else if (queryCode.toLowerCase().includes('supplier')) {
      setQueryResult(dbData.suppliers);
    } else {
      setQueryResult(dbData.audit_log);
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-[#242424]/80 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="relative max-w-4xl w-full bg-[#FAF8F5] border-2 border-[#242424] shadow-2xl p-4 sm:p-8 rounded-xs max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between pb-4 mb-6 border-b-2 border-[#242424]">
          <div>
            <div className="flex items-center gap-2">
              <span className="font-display font-bold text-xs px-2 py-0.5 bg-[#82A775] text-[#242424]">
                PROJECT {project.number} DEMO
              </span>
              <span className="font-handwriting text-lg text-[#82A775] font-bold">
                {project.badge}
              </span>
            </div>
            <h3 className="font-display text-2xl sm:text-3xl font-bold text-[#242424] mt-1">
              {project.title}
            </h3>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-[#242424] hover:bg-[#82A775] hover:text-[#242424] border border-[#242424] transition-colors rounded-xs"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* PROJECT DEMO 01: INSIGHT BHARAT */}
        {project.id === 'insight-bharat' && (
          <div className="space-y-6">
            <div
              className={`p-4 border border-[#DCD6C8] rounded-xs transition-colors ${
                newsDarkMode ? 'bg-[#1E1E1E] text-[#F3F0E8]' : 'bg-[#F8F6EF] text-[#242424]'
              }`}
            >
              {/* App Bar */}
              <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-[#DCD6C8]">
                <div className="flex items-center gap-2">
                  <span className="font-display font-black text-xl tracking-wider">
                    INSIGHT BHARAT
                  </span>
                  <span className="text-[10px] font-mono px-1.5 py-0.5 bg-[#82A775] text-[#242424]">
                    NEWS API
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  {/* Category Filter */}
                  <div className="flex items-center gap-1 text-xs">
                    {['Technology', 'Science', 'India'].map((cat) => (
                      <button
                        key={cat}
                        onClick={() => setNewsCategory(cat)}
                        className={`px-2 py-1 rounded-xs font-medium transition-colors ${
                          newsCategory === cat
                            ? 'bg-[#82A775] text-[#242424] font-bold'
                            : 'hover:bg-[#EAE5D9] text-[#5E5B52]'
                        }`}
                      >
                        {cat}
                      </button>
                    ))}
                  </div>

                  {/* Dark mode switch */}
                  <button
                    onClick={() => setNewsDarkMode(!newsDarkMode)}
                    className="p-1.5 border border-[#DCD6C8] rounded-xs hover:bg-[#82A775] hover:text-[#242424] transition-colors"
                    title="Toggle Dark Mode"
                  >
                    {newsDarkMode ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              {/* Search Bar */}
              <div className="mt-3 flex items-center gap-2 bg-white/10 p-2 border border-[#DCD6C8] rounded-xs">
                <Search className="w-4 h-4 text-[#82A775]" />
                <input
                  type="text"
                  placeholder="Search live news headlines..."
                  value={newsSearch}
                  onChange={(e) => setNewsSearch(e.target.value)}
                  className="w-full bg-transparent text-xs outline-none"
                />
              </div>

              {/* Articles Grid */}
              <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
                {filteredArticles.length > 0 ? (
                  filteredArticles.map((art) => (
                    <div
                      key={art.id}
                      className={`p-3 border rounded-xs relative transition-all ${
                        newsDarkMode
                          ? 'bg-[#2A2A2A] border-[#3D3D3D]'
                          : 'bg-white border-[#E2DCCE]'
                      }`}
                    >
                      <div className="flex justify-between items-start gap-2">
                        <span className="text-[10px] font-mono px-1.5 py-0.5 bg-[#82A775]/20 text-[#82A775] font-bold">
                          {art.category}
                        </span>
                        <button
                          onClick={() => toggleBookmark(art.id)}
                          className={`p-1 rounded-xs transition-colors ${
                            bookmarkedIds.includes(art.id)
                              ? 'text-[#82A775]'
                              : 'text-gray-400 hover:text-[#82A775]'
                          }`}
                        >
                          <Bookmark className="w-3.5 h-3.5 fill-current" />
                        </button>
                      </div>

                      <h4 className="font-display text-sm font-bold mt-2 line-clamp-2">
                        {art.title}
                      </h4>
                      <p className="text-xs text-[#5E5B52] dark:text-gray-300 mt-1 line-clamp-2">
                        {art.summary}
                      </p>

                      <div className="mt-3 pt-2 border-t border-[#DCD6C8]/50 flex justify-between items-center text-[10px] text-gray-500">
                        <span>{art.source}</span>
                        <span>{art.time}</span>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="col-span-2 py-8 text-center text-xs text-[#5E5B52]">
                    No headlines match "{newsSearch}". Try searching "AI" or "IoT".
                  </div>
                )}
              </div>

              {/* Proxy Pipeline Status */}
              <div className="mt-4 pt-3 border-t border-[#DCD6C8] flex flex-wrap items-center justify-between text-[11px] text-[#5E5B52]">
                <div className="flex items-center gap-1.5 text-[#82A775] font-bold">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>3 Multi-Proxy CORS Endpoints Active</span>
                </div>
                <div>Bookmarks saved: {bookmarkedIds.length}</div>
              </div>
            </div>
          </div>
        )}

        {/* PROJECT DEMO 02: SECURRA IOT */}
        {project.id === 'securra' && (
          <div className="space-y-6">
            <div className="blueprint-grid p-4 sm:p-6 text-white rounded-xs border-2 border-blue-400/40">
              <div className="flex flex-wrap items-center justify-between pb-3 border-b border-white/20 gap-2">
                <div className="flex items-center gap-2">
                  <Power className="w-5 h-5 text-[#82A775]" />
                  <span className="font-display text-lg font-bold">
                    SECURRA HOME OS
                  </span>
                </div>

                <span className="font-mono text-xs px-2 py-0.5 bg-[#82A775] text-[#242424] font-bold">
                  PERSISTENT STATE ENGINE
                </span>
              </div>

              {/* IoT Control Tiles */}
              <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-4">
                {/* Control 1: Living Room Light */}
                <div className="p-3 bg-slate-800/80 border border-white/10 rounded-xs flex flex-col justify-between">
                  <div className="flex justify-between items-center">
                    <span className="text-xs font-mono text-slate-300">LIVING ROOM LED</span>
                    <span className={`w-2 h-2 rounded-full ${livingLight ? 'bg-emerald-400 animate-pulse' : 'bg-rose-500'}`} />
                  </div>
                  <div className="my-3 font-display text-xl font-bold">
                    {livingLight ? 'ON (80%)' : 'OFF'}
                  </div>
                  <button
                    onClick={() => handleSecurraUpdate('Living Light', () => setLivingLight(!livingLight))}
                    className={`w-full py-1.5 text-xs font-bold rounded-xs transition-colors ${
                      livingLight ? 'bg-emerald-500 text-slate-950 hover:bg-emerald-400' : 'bg-slate-700 text-slate-200 hover:bg-slate-600'
                    }`}
                  >
                    TOGGLE POWER
                  </button>
                </div>

                {/* Control 2: Climate Temperature Slider */}
                <div className="p-3 bg-slate-800/80 border border-white/10 rounded-xs flex flex-col justify-between">
                  <div className="flex justify-between items-center">
                    <span className="text-xs font-mono text-slate-300">CLIMATE CONTROL</span>
                    <Thermometer className="w-4 h-4 text-sky-400" />
                  </div>
                  <div className="my-2 text-center">
                    <span className="font-display text-2xl font-bold">{temperature}°C</span>
                    <span className="text-[10px] text-slate-400 block">Target Temp</span>
                  </div>
                  <input
                    type="range"
                    min="16"
                    max="30"
                    value={temperature}
                    onChange={(e) => handleSecurraUpdate('Temperature', () => setTemperature(parseInt(e.target.value)))}
                    className="w-full accent-[#82A775] cursor-pointer"
                  />
                </div>

                {/* Control 3: Security Alarm */}
                <div className="p-3 bg-slate-800/80 border border-white/10 rounded-xs flex flex-col justify-between">
                  <div className="flex justify-between items-center">
                    <span className="text-xs font-mono text-slate-300">SECURITY ALARM</span>
                    <Shield className={`w-4 h-4 ${securityArmed ? 'text-emerald-400' : 'text-amber-400'}`} />
                  </div>
                  <div className="my-3 font-display text-lg font-bold">
                    {securityArmed ? 'ARMED (SECURE)' : 'DISARMED'}
                  </div>
                  <button
                    onClick={() => handleSecurraUpdate('Security Alarm', () => setSecurityArmed(!securityArmed))}
                    className={`w-full py-1.5 text-xs font-bold rounded-xs transition-colors ${
                      securityArmed ? 'bg-emerald-500 text-slate-950 hover:bg-emerald-400' : 'bg-amber-500 text-slate-950 hover:bg-amber-400'
                    }`}
                  >
                    {securityArmed ? 'DISARM' : 'ARM SYSTEM'}
                  </button>
                </div>
              </div>

              {/* State Manager Log */}
              <div className="mt-4 p-2.5 bg-slate-950/80 font-mono text-xs text-emerald-400 rounded-xs border border-white/10 flex items-center justify-between">
                <span>{stateLog}</span>
                <RefreshCw className="w-3.5 h-3.5 animate-spin" />
              </div>
            </div>
          </div>
        )}

        {/* PROJECT DEMO 03: GROCERY DBMS */}
        {project.id === 'grocery-dbms' && (
          <div className="space-y-6">
            <div className="notebook-grid p-4 sm:p-6 bg-[#FAF8F5] border-2 border-[#242424] rounded-xs">
              <div className="flex flex-wrap items-center justify-between pb-3 border-b-2 border-[#242424] gap-2">
                <div className="flex items-center gap-2">
                  <Database className="w-5 h-5 text-[#82A775]" />
                  <span className="font-display text-lg font-bold text-[#242424]">
                    GROCERY DBMS RUNNER
                  </span>
                </div>

                <div className="flex items-center gap-1.5 text-xs font-mono">
                  {['inventory', 'transactions', 'suppliers', 'audit_log'].map((tbl) => (
                    <button
                      key={tbl}
                      onClick={() => {
                        setSelectedTable(tbl as any);
                        setQueryCode(`SELECT * FROM ${tbl};`);
                      }}
                      className={`px-2 py-1 rounded-xs border border-[#242424] transition-colors ${
                        selectedTable === tbl
                          ? 'bg-[#82A775] text-[#242424] font-bold'
                          : 'bg-white text-[#5E5B52] hover:bg-[#EAE5D9]'
                      }`}
                    >
                      {tbl}
                    </button>
                  ))}
                </div>
              </div>

              {/* Query Editor */}
              <div className="mt-4">
                <div className="flex justify-between items-center mb-1 text-xs font-handwriting text-[#5E5B52] font-bold">
                  <span>Interactive SQL Query Console</span>
                  <span className="text-[#82A775]">PostgreSQL / MySQL Schema</span>
                </div>

                <div className="flex gap-2">
                  <input
                    type="text"
                    value={queryCode}
                    onChange={(e) => setQueryCode(e.target.value)}
                    className="w-full bg-[#242424] text-emerald-400 font-mono text-xs p-2.5 rounded-xs outline-none border border-[#242424]"
                  />
                  <button
                    onClick={handleRunQuery}
                    className="px-4 py-2 bg-[#82A775] text-[#242424] font-display font-bold text-xs hover:bg-[#242424] hover:text-[#F3F0E8] transition-colors rounded-xs flex items-center gap-1 shrink-0"
                  >
                    <Play className="w-3.5 h-3.5 fill-current" />
                    <span>EXECUTE</span>
                  </button>
                </div>
              </div>

              {/* Query Output Results */}
              <div className="mt-4 border border-[#242424] overflow-x-auto rounded-xs bg-white">
                <table className="w-full text-left font-mono text-xs border-collapse">
                  <thead>
                    <tr className="bg-[#242424] text-[#F3F0E8]">
                      {Object.keys((queryResult || dbData[selectedTable])[0]).map((key) => (
                        <th key={key} className="p-2 border-b border-[#3D3D3D] uppercase">
                          {key}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {(queryResult || dbData[selectedTable]).map((row, idx) => (
                      <tr key={idx} className="hover:bg-[#E4EEDC] border-b border-[#DCD6C8]">
                        {Object.values(row).map((val: any, vIdx) => (
                          <td key={vIdx} className="p-2">
                            {String(val)}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="mt-3 text-right text-[11px] font-handwriting text-[#82A775] font-bold">
                ✓ Normalized 3NF Schema • 10+ Tables • 134+ Pre-seeded Audit Records
              </div>
            </div>
          </div>
        )}

        {/* Features & Technical Details Footer */}
        <div className="mt-6 pt-4 border-t border-[#DCD6C8]">
          <h5 className="font-display font-bold text-sm text-[#242424] mb-2">
            KEY ARCHITECTURAL HIGHLIGHTS:
          </h5>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#5E5B52]">
            {project.features.map((feat, idx) => (
              <li key={idx} className="flex items-start gap-1.5">
                <span className="text-[#82A775] font-bold">•</span>
                <span>{feat}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProjectDemoModal;
