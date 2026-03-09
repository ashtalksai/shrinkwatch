"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { 
  BarChart3, 
  Target, 
  Megaphone, 
  Palette, 
  Presentation,
  ExternalLink,
  Github,
  Menu,
  X,
  CheckCircle2,
  XCircle,
  TrendingUp,
  Users,
  DollarSign,
  Clock,
  MessageSquare,
  Zap,
  Shield,
  Camera,
  Search,
  Share2,
  Star,
  Smartphone,
  Database,
  Award
} from "lucide-react";

const CROSS_PATTERN_BG = "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")";

const sections = [
  { id: "research", label: "Research", icon: BarChart3 },
  { id: "gtm", label: "GTM Plan", icon: Target },
  { id: "marketing", label: "Marketing", icon: Megaphone },
  { id: "brand", label: "Brand", icon: Palette },
  { id: "pitch", label: "Pitch Deck", icon: Presentation, external: "/pitch" },
];

export default function DocsPage() {
  const [activeSection, setActiveSection] = useState("research");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sectionElements = sections.filter(s => !s.external).map(s => ({
        id: s.id,
        element: document.getElementById(s.id)
      }));

      for (const section of sectionElements.reverse()) {
        if (section.element) {
          const rect = section.element.getBoundingClientRect();
          if (rect.top <= 150) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      setMobileMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#FAFAFA]">
      {/* Mobile Header */}
      <div className="lg:hidden fixed top-0 left-0 right-0 z-50 bg-[#FAFAFA]/95 backdrop-blur-sm border-b border-gray-200">
        <div className="flex items-center justify-between px-4 py-3">
          <div className="flex items-center gap-2">
            <span className="text-xl">🔍</span>
            <span className="font-bold bg-gradient-to-r from-[#FF6B35] to-[#EF4444] bg-clip-text text-transparent">Docs</span>
          </div>
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-gray-500 hover:text-gray-900"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        
        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="bg-white border-b border-gray-200 py-2">
            {sections.map((section) => (
              section.external ? (
                <Link
                  key={section.id}
                  href={section.external}
                  className="flex items-center gap-3 px-4 py-3 text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                >
                  <section.icon size={18} />
                  <span>{section.label}</span>
                  <ExternalLink size={14} className="ml-auto" />
                </Link>
              ) : (
                <button
                  key={section.id}
                  onClick={() => scrollToSection(section.id)}
                  className={`w-full flex items-center gap-3 px-4 py-3 transition-colors ${
                    activeSection === section.id 
                      ? "text-[#FF6B35] bg-[#FF6B35]/10" 
                      : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                  }`}
                >
                  <section.icon size={18} />
                  <span>{section.label}</span>
                </button>
              )
            ))}
          </div>
        )}
      </div>

      {/* Desktop Sidebar */}
      <aside className="hidden lg:flex fixed left-0 top-0 bottom-0 w-64 flex-col bg-white border-r border-gray-200">
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#FF6B35] to-[#EF4444] flex items-center justify-center">
              <span className="text-white text-lg">🔍</span>
            </div>
            <div>
              <h1 className="font-bold bg-gradient-to-r from-[#FF6B35] to-[#EF4444] bg-clip-text text-transparent">ShrinkWatch</h1>
              <p className="text-xs text-gray-400">Documentation</p>
            </div>
          </div>
        </div>

        <nav className="flex-1 py-4">
          {sections.map((section) => (
            section.external ? (
              <Link
                key={section.id}
                href={section.external}
                className="flex items-center gap-3 px-6 py-3 text-gray-500 hover:text-gray-900 hover:bg-gray-50 transition-colors"
              >
                <section.icon size={18} />
                <span className="text-sm font-medium">{section.label}</span>
                <ExternalLink size={14} className="ml-auto opacity-50" />
              </Link>
            ) : (
              <button
                key={section.id}
                onClick={() => scrollToSection(section.id)}
                className={`w-full flex items-center gap-3 px-6 py-3 transition-all ${
                  activeSection === section.id
                    ? "text-[#FF6B35] bg-[#FF6B35]/10 border-r-2 border-[#FF6B35]"
                    : "text-gray-500 hover:text-gray-900 hover:bg-gray-50"
                }`}
              >
                <section.icon size={18} />
                <span className="text-sm font-medium">{section.label}</span>
              </button>
            )
          ))}
        </nav>

        <div className="p-6 border-t border-gray-200">
          <div className="space-y-2">
            <Link 
              href="/" 
              className="flex items-center gap-2 text-sm text-gray-400 hover:text-[#FF6B35] transition-colors"
            >
              <ExternalLink size={14} />
              Live Site
            </Link>
            <Link 
              href="https://github.com/ashtalksai/shrinkwatch" 
              target="_blank"
              className="flex items-center gap-2 text-sm text-gray-400 hover:text-[#FF6B35] transition-colors"
            >
              <Github size={14} />
              GitHub
            </Link>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="lg:ml-64 pt-16 lg:pt-0">
        {/* Research Section */}
        <section id="research" className="min-h-screen p-6 lg:p-12">
          <div className="max-w-5xl mx-auto">
            {/* Hero */}
            <div className="relative rounded-3xl bg-gradient-to-br from-[#FF6B35]/20 via-[#EF4444]/10 to-[#FBBF24]/20 p-8 lg:p-12 mb-8 overflow-hidden">
              <div className="absolute inset-0 opacity-20" style={{backgroundImage: CROSS_PATTERN_BG}} />
              <div className="relative">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FF6B35]/20 text-[#FF6B35] text-sm font-medium mb-4">
                  <BarChart3 size={14} />
                  Market Research
                </div>
                <h2 className="text-3xl lg:text-4xl font-bold text-[#1A1A1A] mb-4">
                  Crowdsourced Shrinkflation Detector
                </h2>
                <p className="text-gray-600 text-lg max-w-2xl">
                  192K people on Reddit know products are shrinking. They just can&apos;t prove it. 
                  ShrinkWatch turns viral outrage into verified data.
                </p>
              </div>
            </div>

            {/* Opportunity Score */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
              {[
                { label: "Opportunity", value: "9/10", color: "from-[#10B981] to-emerald-600" },
                { label: "Problem Severity", value: "8/10", color: "from-[#FF6B35] to-[#EF4444]" },
                { label: "Feasibility", value: "8/10", color: "from-[#FBBF24] to-amber-600" },
                { label: "Why Now", value: "10/10", color: "from-[#EF4444] to-red-600" },
              ].map((score) => (
                <div key={score.label} className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm">
                  <p className="text-gray-400 text-sm mb-2">{score.label}</p>
                  <p className={`text-3xl font-bold bg-gradient-to-r ${score.color} bg-clip-text text-transparent`}>
                    {score.value}
                  </p>
                </div>
              ))}
            </div>

            {/* Bento Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-8">
              {/* Market Size - Large Card */}
              <div className="lg:col-span-2 bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                <h3 className="text-lg font-semibold text-[#1A1A1A] mb-4 flex items-center gap-2">
                  <TrendingUp className="text-[#FF6B35]" size={20} />
                  Market Opportunity
                </h3>
                <div className="grid grid-cols-3 gap-4">
                  <div className="bg-gradient-to-br from-[#FF6B35] to-[#EF4444] rounded-xl p-4 text-white">
                    <p className="text-xs opacity-80 font-mono">TAM</p>
                    <p className="text-2xl font-bold mt-1">$8.2B</p>
                  </div>
                  <div className="bg-gray-50 rounded-xl p-4">
                    <p className="text-xs text-gray-400 font-mono">GROCERY SHOPPERS</p>
                    <p className="text-2xl font-bold text-[#1A1A1A] mt-1">330M</p>
                    <p className="text-xs text-gray-400">in US alone</p>
                  </div>
                  <div className="bg-gray-50 rounded-xl p-4">
                    <p className="text-xs text-gray-400 font-mono">REDDIT COMMUNITY</p>
                    <p className="text-2xl font-bold text-[#1A1A1A] mt-1">192K</p>
                    <p className="text-xs text-gray-400">r/shrinkflation</p>
                  </div>
                </div>
                <div className="mt-4 p-4 bg-gray-50 rounded-xl">
                  <p className="text-gray-600 text-sm">
                    <span className="text-[#FF6B35] font-semibold">&quot;shrinkflation&quot;</span> — TikTok has 15M+ views on the hashtag. 
                    Consumer Reports, NPR, NYT have all covered it. The anger is real — the data is missing.
                  </p>
                </div>
              </div>

              {/* Execution */}
              <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                <h3 className="text-lg font-semibold text-[#1A1A1A] mb-4 flex items-center gap-2">
                  <Clock className="text-[#FBBF24]" size={20} />
                  Execution
                </h3>
                <div className="flex items-center justify-center h-32">
                  <div className="text-center">
                    <p className="text-5xl font-bold text-[#FBBF24]">3</p>
                    <p className="text-gray-400 text-sm">/10 difficulty</p>
                    <p className="text-gray-300 text-xs mt-2">1-2 week MVP</p>
                  </div>
                </div>
              </div>
            </div>

            {/* The Real Problem */}
            <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm mb-8">
              <h3 className="text-lg font-semibold text-[#1A1A1A] mb-4 flex items-center gap-2">
                <Zap className="text-[#EF4444]" size={20} />
                The Real Problem
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-[#EF4444]/10 to-[#FF6B35]/10 rounded-xl p-5">
                  <h4 className="font-medium text-[#1A1A1A] mb-3">Hidden Inflation</h4>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="flex items-start gap-2">
                      <span className="text-[#EF4444]">•</span>
                      Products shrink 5-20% while prices stay flat
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#EF4444]">•</span>
                      That&apos;s a hidden 23%+ real price increase
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#EF4444]">•</span>
                      Consumers notice but can&apos;t prove it
                    </li>
                  </ul>
                </div>
                <div className="bg-gradient-to-br from-[#FBBF24]/10 to-[#10B981]/10 rounded-xl p-5">
                  <h4 className="font-medium text-[#1A1A1A] mb-3">The Math Doesn&apos;t Lie</h4>
                  <div className="font-mono text-sm space-y-2">
                    <p className="text-gray-500">Before: 64oz for $4.99 = $0.078/oz</p>
                    <p className="text-gray-500">Now: 52oz for $4.99 = $0.096/oz</p>
                    <p className="text-[#EF4444] font-bold mt-2">Real price increase: +23% 📈</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Validation Signals */}
            <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm mb-8">
              <h3 className="text-lg font-semibold text-[#1A1A1A] mb-4 flex items-center gap-2">
                <MessageSquare className="text-[#FF6B35]" size={20} />
                Validation Signals
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {[
                  { source: "r/shrinkflation", quote: "I KNEW my cereal box looked smaller! Finally, receipts!", date: "192K members" },
                  { source: "TikTok", quote: "#shrinkflation exposing brands one video at a time", date: "15M+ views" },
                  { source: "Consumer Reports", quote: "Shrinkflation is real — but tracking it is nearly impossible", date: "Coverage 2024" },
                ].map((signal, i) => (
                  <div key={i} className="bg-gray-50 rounded-xl p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-6 h-6 rounded bg-[#FF6B35]/20 flex items-center justify-center">
                        <span className="text-[#FF6B35] text-xs font-bold">{signal.source[0]}</span>
                      </div>
                      <span className="text-gray-600 text-sm font-medium">{signal.source}</span>
                    </div>
                    <p className="text-gray-500 text-sm italic">&quot;{signal.quote}&quot;</p>
                    <p className="text-gray-300 text-xs mt-2">{signal.date}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Competition */}
            <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
              <h3 className="text-lg font-semibold text-[#1A1A1A] mb-4 flex items-center gap-2">
                <Users className="text-[#FBBF24]" size={20} />
                Competitive Landscape
              </h3>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-100">
                      <th className="text-left py-3 px-4 text-gray-400 text-sm font-medium">Company</th>
                      <th className="text-center py-3 px-4 text-gray-400 text-sm font-medium">Crowdsourced</th>
                      <th className="text-center py-3 px-4 text-gray-400 text-sm font-medium">Scanner</th>
                      <th className="text-center py-3 px-4 text-gray-400 text-sm font-medium">Viral Shares</th>
                      <th className="text-left py-3 px-4 text-gray-400 text-sm font-medium">Weakness</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-50 bg-[#FF6B35]/5">
                      <td className="py-3 px-4 text-[#1A1A1A] font-medium flex items-center gap-2">
                        <Star size={14} className="text-[#FF6B35]" />
                        ShrinkWatch
                      </td>
                      <td className="py-3 px-4 text-center"><CheckCircle2 size={18} className="text-[#10B981] mx-auto" /></td>
                      <td className="py-3 px-4 text-center"><CheckCircle2 size={18} className="text-[#10B981] mx-auto" /></td>
                      <td className="py-3 px-4 text-center"><CheckCircle2 size={18} className="text-[#10B981] mx-auto" /></td>
                      <td className="py-3 px-4 text-gray-400 text-sm">New entrant</td>
                    </tr>
                    <tr className="border-b border-gray-50">
                      <td className="py-3 px-4 text-gray-500">MousePrint.org</td>
                      <td className="py-3 px-4 text-center"><XCircle size={18} className="text-[#EF4444]/50 mx-auto" /></td>
                      <td className="py-3 px-4 text-center"><XCircle size={18} className="text-[#EF4444]/50 mx-auto" /></td>
                      <td className="py-3 px-4 text-center"><XCircle size={18} className="text-[#EF4444]/50 mx-auto" /></td>
                      <td className="py-3 px-4 text-gray-400 text-sm">One-person blog, static</td>
                    </tr>
                    <tr className="border-b border-gray-50">
                      <td className="py-3 px-4 text-gray-500">r/shrinkflation</td>
                      <td className="py-3 px-4 text-center"><CheckCircle2 size={18} className="text-[#10B981] mx-auto" /></td>
                      <td className="py-3 px-4 text-center"><XCircle size={18} className="text-[#EF4444]/50 mx-auto" /></td>
                      <td className="py-3 px-4 text-center"><CheckCircle2 size={18} className="text-[#10B981] mx-auto" /></td>
                      <td className="py-3 px-4 text-gray-400 text-sm">Chaotic, not searchable</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 text-gray-500">Consumer Reports</td>
                      <td className="py-3 px-4 text-center"><XCircle size={18} className="text-[#EF4444]/50 mx-auto" /></td>
                      <td className="py-3 px-4 text-center"><XCircle size={18} className="text-[#EF4444]/50 mx-auto" /></td>
                      <td className="py-3 px-4 text-center"><XCircle size={18} className="text-[#EF4444]/50 mx-auto" /></td>
                      <td className="py-3 px-4 text-gray-400 text-sm">Paywalled, slow updates</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* GTM Section */}
        <section id="gtm" className="min-h-screen p-6 lg:p-12 bg-white">
          <div className="max-w-5xl mx-auto">
            {/* Hero */}
            <div className="relative rounded-3xl bg-gradient-to-br from-[#FBBF24]/20 via-[#FF6B35]/10 to-[#EF4444]/20 p-8 lg:p-12 mb-8 overflow-hidden">
              <div className="absolute inset-0 opacity-20" style={{backgroundImage: CROSS_PATTERN_BG}} />
              <div className="relative">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FBBF24]/20 text-[#FBBF24] text-sm font-medium mb-4">
                  <Target size={14} />
                  Go-to-Market Plan
                </div>
                <h2 className="text-3xl lg:text-4xl font-bold text-[#1A1A1A] mb-4">
                  Launch Strategy
                </h2>
                <p className="text-gray-600 text-lg max-w-2xl">
                  Launch to the 192K r/shrinkflation community. Go viral on TikTok. 
                  Become the &quot;receipts&quot; that journalists cite.
                </p>
              </div>
            </div>

            {/* Target Audience */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-8">
              {[
                { 
                  type: "Primary", 
                  audience: "Budget-Conscious Shoppers",
                  desc: "192K r/shrinkflation members and TikTok consumers who want proof",
                  color: "from-[#FF6B35] to-[#EF4444]"
                },
                { 
                  type: "Secondary", 
                  audience: "News & Journalists",
                  desc: "NPR, Consumer Reports, NYT — need data for shrinkflation stories",
                  color: "from-[#FBBF24] to-amber-600"
                },
                { 
                  type: "Tertiary", 
                  audience: "CPG & Research",
                  desc: "Brands tracking competitors, market research firms",
                  color: "from-[#10B981] to-emerald-600"
                },
              ].map((target) => (
                <div key={target.type} className="bg-[#FAFAFA] rounded-2xl p-6 border border-gray-100">
                  <div className={`inline-flex px-2 py-1 rounded text-xs font-bold bg-gradient-to-r ${target.color} text-white mb-3`}>
                    {target.type}
                  </div>
                  <h4 className="text-xl font-semibold text-[#1A1A1A] mb-2">{target.audience}</h4>
                  <p className="text-gray-400 text-sm">{target.desc}</p>
                </div>
              ))}
            </div>

            {/* Distribution Channels */}
            <div className="bg-[#FAFAFA] rounded-2xl p-6 border border-gray-100 mb-8">
              <h3 className="text-lg font-semibold text-[#1A1A1A] mb-6 flex items-center gap-2">
                <Megaphone className="text-[#FF6B35]" size={20} />
                Distribution Channels
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  { 
                    channel: "Reddit r/shrinkflation",
                    strategy: "192K members = home base. AMA, seed data, weekly posts",
                    priority: "PRIMARY"
                  },
                  { 
                    channel: "TikTok",
                    strategy: "\"CAUGHT\" videos with barcode scanner reveals. #shrinkflation 15M views",
                    priority: "VIRAL"
                  },
                  { 
                    channel: "Product Hunt",
                    strategy: "Tech early adopters + press coverage on launch day",
                    priority: "LAUNCH"
                  },
                  { 
                    channel: "News Partnerships",
                    strategy: "B2B tier for journalists: NPR, Consumer Reports, food blogs",
                    priority: "B2B"
                  },
                ].map((item) => (
                  <div key={item.channel} className="bg-white rounded-xl p-5 flex gap-4">
                    <div className={`w-2 rounded-full ${item.priority === "PRIMARY" || item.priority === "VIRAL" ? "bg-[#FF6B35]" : "bg-[#FBBF24]"}`} />
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <h4 className="text-[#1A1A1A] font-medium">{item.channel}</h4>
                        <span className="text-xs px-2 py-1 rounded-full bg-gradient-to-r from-[#FF6B35] to-[#EF4444] text-white">{item.priority}</span>
                      </div>
                      <p className="text-gray-400 text-sm">{item.strategy}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Launch Phases */}
            <div className="bg-[#FAFAFA] rounded-2xl p-6 border border-gray-100 mb-8">
              <h3 className="text-lg font-semibold text-[#1A1A1A] mb-6 flex items-center gap-2">
                <Zap className="text-[#FBBF24]" size={20} />
                Launch Timeline
              </h3>
              <div className="space-y-6">
                <div className="relative pl-8 pb-8 border-l-2 border-[#FF6B35]">
                  <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-[#FF6B35]" />
                  <div className="bg-white rounded-xl p-5">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-[#FF6B35] font-mono text-sm font-bold">PHASE 1</span>
                      <span className="text-gray-300 text-sm">Weeks 1-2</span>
                    </div>
                    <h4 className="text-[#1A1A1A] font-semibold mb-2">Beta Launch — Reddit AMA</h4>
                    <ul className="text-gray-400 text-sm space-y-1">
                      <li>• Seed database with 100 popular products</li>
                      <li>• Reddit AMA on r/shrinkflation</li>
                      <li>• First 5 TikTok videos</li>
                    </ul>
                  </div>
                </div>
                <div className="relative pl-8 pb-8 border-l-2 border-[#FBBF24]">
                  <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-[#FBBF24]" />
                  <div className="bg-white rounded-xl p-5">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-[#FBBF24] font-mono text-sm font-bold">PHASE 2</span>
                      <span className="text-gray-300 text-sm">Week 3</span>
                    </div>
                    <h4 className="text-[#1A1A1A] font-semibold mb-2">Product Hunt Launch</h4>
                    <ul className="text-gray-400 text-sm space-y-1">
                      <li>• Target top 5 product of the day</li>
                      <li>• Tech press coverage</li>
                      <li>• TikTok content engine running</li>
                    </ul>
                  </div>
                </div>
                <div className="relative pl-8 border-l-2 border-[#10B981]">
                  <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-[#10B981]" />
                  <div className="bg-white rounded-xl p-5">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-[#10B981] font-mono text-sm font-bold">PHASE 3</span>
                      <span className="text-gray-300 text-sm">Months 2-6</span>
                    </div>
                    <h4 className="text-[#1A1A1A] font-semibold mb-2">Scale & Monetize</h4>
                    <ul className="text-gray-400 text-sm space-y-1">
                      <li>• 50K users, 10K products in database</li>
                      <li>• News partnerships closed</li>
                      <li>• $19K MRR target</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Pricing Strategy */}
            <div className="bg-[#FAFAFA] rounded-2xl p-6 border border-gray-100 mb-8">
              <h3 className="text-lg font-semibold text-[#1A1A1A] mb-6 flex items-center gap-2">
                <DollarSign className="text-[#10B981]" size={20} />
                Pricing Strategy
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="bg-white rounded-xl p-5 border border-gray-100">
                  <p className="text-gray-400 text-sm mb-2">FREE</p>
                  <p className="text-2xl font-bold text-[#1A1A1A] mb-3">$0</p>
                  <p className="text-gray-400 text-sm">Basic scanning + database access</p>
                </div>
                <div className="bg-gradient-to-br from-[#FF6B35] to-[#EF4444] rounded-xl p-5 text-white">
                  <p className="text-white/70 text-sm mb-2">PREMIUM</p>
                  <p className="text-2xl font-bold mb-3">$7.99<span className="text-lg text-white/70">/mo</span></p>
                  <p className="text-white/70 text-sm">Alerts, reports, price calculator</p>
                </div>
                <div className="bg-white rounded-xl p-5 border border-gray-100">
                  <p className="text-[#FBBF24] text-sm mb-2">NEWS TIER</p>
                  <p className="text-2xl font-bold text-[#1A1A1A] mb-3">$500-2K</p>
                  <p className="text-gray-400 text-sm">Full API for journalists</p>
                </div>
                <div className="bg-white rounded-xl p-5 border border-gray-100">
                  <p className="text-[#10B981] text-sm mb-2">ENTERPRISE</p>
                  <p className="text-2xl font-bold text-[#1A1A1A] mb-3">$2K+</p>
                  <p className="text-gray-400 text-sm">CPG brands, research firms</p>
                </div>
              </div>
            </div>

            {/* Key Metrics */}
            <div className="bg-gradient-to-br from-[#FF6B35]/10 to-[#FBBF24]/10 rounded-2xl p-6 border border-gray-100">
              <h3 className="text-lg font-semibold text-[#1A1A1A] mb-6 flex items-center gap-2">
                <BarChart3 className="text-[#1A1A1A]" size={20} />
                Success Metrics
              </h3>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                {[
                  { metric: "North Star", value: "Products", desc: "Tracked in database" },
                  { metric: "Month 6", value: "50K", desc: "Active users" },
                  { metric: "MRR Target", value: "$19K", desc: "Monthly revenue" },
                  { metric: "LTV:CAC", value: "32x", desc: "Consumer tier" },
                ].map((item) => (
                  <div key={item.metric} className="text-center bg-white rounded-xl p-4">
                    <p className="text-gray-400 text-xs uppercase tracking-wider mb-1">{item.metric}</p>
                    <p className="text-2xl font-bold text-[#1A1A1A]">{item.value}</p>
                    <p className="text-gray-400 text-xs">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Marketing Section */}
        <section id="marketing" className="min-h-screen p-6 lg:p-12 bg-[#FAFAFA]">
          <div className="max-w-5xl mx-auto">
            {/* Hero */}
            <div className="relative rounded-3xl bg-gradient-to-br from-[#EF4444]/20 via-[#FF6B35]/10 to-[#FBBF24]/20 p-8 lg:p-12 mb-8 overflow-hidden">
              <div className="absolute inset-0 opacity-20" style={{backgroundImage: CROSS_PATTERN_BG}} />
              <div className="relative">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EF4444]/20 text-[#EF4444] text-sm font-medium mb-4">
                  <Megaphone size={14} />
                  Marketing Strategy
                </div>
                <h2 className="text-3xl lg:text-4xl font-bold text-[#1A1A1A] mb-4">
                  Positioning & Messaging
                </h2>
                <p className="text-gray-600 text-lg max-w-2xl">
                  Consumer detective with receipts — playful but sharp. TikTok-native, 
                  data-driven, slightly sassy.
                </p>
              </div>
            </div>

            {/* Positioning Statement */}
            <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm mb-8">
              <h3 className="text-lg font-semibold text-[#1A1A1A] mb-6">Positioning Statement</h3>
              <div className="space-y-4 text-lg">
                <p><span className="text-gray-400">For</span> <span className="text-[#1A1A1A] font-medium">budget-conscious grocery shoppers</span></p>
                <p><span className="text-gray-400">Who</span> <span className="text-[#1A1A1A] font-medium">suspect products are shrinking but can&apos;t prove it</span></p>
                <p><span className="text-gray-400">ShrinkWatch is a</span> <span className="text-[#FF6B35] font-medium">crowdsourced shrinkflation database</span></p>
                <p><span className="text-gray-400">That</span> <span className="text-[#1A1A1A] font-medium">tracks size changes with photo evidence and timelines</span></p>
                <p><span className="text-gray-400">Unlike</span> <span className="text-gray-400">Reddit chaos or one-person blogs</span></p>
                <p><span className="text-gray-400">We</span> <span className="text-[#FBBF24] font-medium">provide searchable, verified, shareable proof</span></p>
              </div>
            </div>

            {/* Tagline Banner */}
            <div className="bg-gradient-to-r from-[#FF6B35] to-[#EF4444] rounded-2xl p-8 text-center mb-8">
              <p className="text-white/80 mb-2 text-sm">Tagline</p>
              <h2 className="font-bold text-3xl md:text-4xl text-white">&quot;You&apos;re not crazy. Products ARE getting smaller.&quot;</h2>
            </div>

            {/* Messaging Pillars */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              <div className="bg-gradient-to-br from-[#FF6B35] to-[#EF4444] rounded-2xl p-6 text-white">
                <Camera size={32} className="mb-4 opacity-80" />
                <h4 className="text-xl font-bold mb-2">Receipts</h4>
                <p className="text-white/80">&quot;CAUGHT red-handed&quot;</p>
                <p className="text-white/60 text-sm mt-2">Photo evidence, timeline graphs, before/after</p>
              </div>
              <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                <Search size={32} className="mb-4 text-[#FBBF24]" />
                <h4 className="text-xl font-bold text-[#1A1A1A] mb-2">Scanner</h4>
                <p className="text-gray-600">&quot;Scan any barcode, see the truth&quot;</p>
                <p className="text-gray-400 text-sm mt-2">Mobile-first barcode detection</p>
              </div>
              <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                <Share2 size={32} className="mb-4 text-[#10B981]" />
                <h4 className="text-xl font-bold text-[#1A1A1A] mb-2">Viral</h4>
                <p className="text-gray-600">&quot;Auto-generated shareable cards&quot;</p>
                <p className="text-gray-400 text-sm mt-2">TikTok-native, tweet-ready</p>
              </div>
            </div>

            {/* Brand Voice */}
            <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm mb-8">
              <h3 className="text-lg font-semibold text-[#1A1A1A] mb-6 flex items-center gap-2">
                <MessageSquare className="text-[#FBBF24]" size={20} />
                Brand Voice
              </h3>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="bg-[#FAFAFA] rounded-xl p-5">
                  <h4 className="text-[#10B981] font-medium mb-3">✓ We Are</h4>
                  <ul className="space-y-2 text-gray-600 text-sm">
                    <li>• Consumer detective with receipts</li>
                    <li>• Playful but sharp</li>
                    <li>• Data-driven but accessible</li>
                    <li>• Slightly sassy, TikTok-friendly</li>
                    <li>• &quot;CAUGHT&quot;, &quot;PROOF&quot;, &quot;EXPOSED&quot;</li>
                  </ul>
                </div>
                <div className="bg-[#FAFAFA] rounded-xl p-5">
                  <h4 className="text-[#EF4444] font-medium mb-3">✗ We&apos;re Not</h4>
                  <ul className="space-y-2 text-gray-600 text-sm">
                    <li>• Serious academic advocacy</li>
                    <li>• Corporate blue dashboards</li>
                    <li>• Text-heavy boring comparisons</li>
                    <li>• Angry conspiracy theorist energy</li>
                    <li>• Paywalled or exclusive</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Viral Content Formats */}
            <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm mb-8">
              <h3 className="text-lg font-semibold text-[#1A1A1A] mb-6 flex items-center gap-2">
                <TrendingUp className="text-[#FF6B35]" size={20} />
                Viral Content Formats
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {[
                  { 
                    platform: "TikTok",
                    format: "\"CAUGHT: [Brand] shrinking [Product]\"",
                    desc: "POV videos with barcode scanner reveal"
                  },
                  { 
                    platform: "Twitter/X",
                    format: "\"[Product]: [Old] → [New]. That's [X]% hidden increase.\"",
                    desc: "Data threads with visual receipts"
                  },
                  { 
                    platform: "Instagram",
                    format: "Brand Report Cards",
                    desc: "\"We graded PepsiCo: D-\" carousel posts"
                  },
                ].map((item, i) => (
                  <div key={i} className="bg-[#FAFAFA] rounded-xl p-5 border border-gray-100">
                    <h4 className="font-semibold text-[#FF6B35] mb-3">{item.platform}</h4>
                    <p className="text-[#1A1A1A] font-medium mb-2">{item.format}</p>
                    <p className="text-sm text-gray-400">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Content Calendar */}
            <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
              <h3 className="text-lg font-semibold text-[#1A1A1A] mb-6 flex items-center gap-2">
                <Clock className="text-[#FBBF24]" size={20} />
                Content Strategy
              </h3>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-gray-100">
                      <th className="text-left py-3 px-4 font-medium text-gray-400">Channel</th>
                      <th className="text-left py-3 px-4 font-medium text-gray-400">Frequency</th>
                      <th className="text-left py-3 px-4 font-medium text-gray-400">Content Type</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-600">
                    <tr className="border-b border-gray-50">
                      <td className="py-3 px-4 font-medium">TikTok</td>
                      <td className="py-3 px-4">5x/week</td>
                      <td className="py-3 px-4">&quot;CAUGHT&quot; videos, barcode scanner reveals</td>
                    </tr>
                    <tr className="border-b border-gray-50">
                      <td className="py-3 px-4 font-medium">Twitter/X</td>
                      <td className="py-3 px-4">Daily</td>
                      <td className="py-3 px-4">Data threads, shrinkflation receipts</td>
                    </tr>
                    <tr className="border-b border-gray-50">
                      <td className="py-3 px-4 font-medium">Reddit</td>
                      <td className="py-3 px-4">3x/week</td>
                      <td className="py-3 px-4">r/shrinkflation posts, AMAs</td>
                    </tr>
                    <tr className="border-b border-gray-50">
                      <td className="py-3 px-4 font-medium">Blog</td>
                      <td className="py-3 px-4">Weekly</td>
                      <td className="py-3 px-4">&quot;50 Most Shrunken Products of 2024&quot;</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-medium">Email</td>
                      <td className="py-3 px-4">Monthly</td>
                      <td className="py-3 px-4">Shrinkflation report + trending products</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* Brand Section */}
        <section id="brand" className="min-h-screen p-6 lg:p-12 bg-white">
          <div className="max-w-5xl mx-auto">
            {/* Hero */}
            <div className="relative rounded-3xl bg-gradient-to-br from-[#FF6B35]/30 via-[#EF4444]/20 to-[#FBBF24]/30 p-8 lg:p-12 mb-8 overflow-hidden">
              <div className="absolute inset-0 opacity-20" style={{backgroundImage: CROSS_PATTERN_BG}} />
              <div className="relative">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/50 text-[#1A1A1A] text-sm font-medium mb-4">
                  <Palette size={14} />
                  Brand System
                </div>
                <h2 className="text-3xl lg:text-4xl font-bold text-[#1A1A1A] mb-4">
                  Visual Identity
                </h2>
                <p className="text-gray-600 text-lg max-w-2xl">
                  Viral justice orange-to-red gradient. TikTok detective energy. 
                  Data as proof, not boring charts.
                </p>
              </div>
            </div>

            {/* Color Palette */}
            <div className="bg-[#FAFAFA] rounded-2xl p-6 border border-gray-100 mb-8">
              <h3 className="text-lg font-semibold text-[#1A1A1A] mb-6">Color Palette</h3>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="rounded-xl overflow-hidden">
                  <div className="h-24 bg-[#FF6B35]" />
                  <div className="bg-white p-4">
                    <p className="text-[#1A1A1A] font-medium">Brand Orange</p>
                    <p className="text-gray-400 font-mono text-sm">#FF6B35</p>
                  </div>
                </div>
                <div className="rounded-xl overflow-hidden">
                  <div className="h-24 bg-[#EF4444]" />
                  <div className="bg-white p-4">
                    <p className="text-[#1A1A1A] font-medium">Alert Red</p>
                    <p className="text-gray-400 font-mono text-sm">#EF4444</p>
                  </div>
                </div>
                <div className="rounded-xl overflow-hidden">
                  <div className="h-24 bg-[#FBBF24]" />
                  <div className="bg-white p-4">
                    <p className="text-[#1A1A1A] font-medium">Warning Yellow</p>
                    <p className="text-gray-400 font-mono text-sm">#FBBF24</p>
                  </div>
                </div>
                <div className="rounded-xl overflow-hidden">
                  <div className="h-24 bg-[#10B981]" />
                  <div className="bg-white p-4">
                    <p className="text-[#1A1A1A] font-medium">OK Green</p>
                    <p className="text-gray-400 font-mono text-sm">#10B981</p>
                  </div>
                </div>
              </div>
              <div className="mt-6 p-4 rounded-xl bg-gradient-to-r from-[#FF6B35] to-[#EF4444]">
                <p className="text-white font-medium">Brand Gradient</p>
                <p className="text-white/70 text-sm font-mono">linear-gradient(135deg, #FF6B35 0%, #EF4444 100%)</p>
              </div>
            </div>

            {/* Shrinkage Severity Badges */}
            <div className="bg-[#FAFAFA] rounded-2xl p-6 border border-gray-100 mb-8">
              <h3 className="text-lg font-semibold text-[#1A1A1A] mb-6">Shrinkage Severity Badges</h3>
              <div className="flex flex-wrap gap-4">
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#EF4444] text-white font-bold">
                  -18% <span className="text-white/70 font-normal text-sm">Severe (&gt;15%)</span>
                </span>
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#FBBF24] text-[#1A1A1A] font-bold">
                  -12% <span className="text-[#1A1A1A]/70 font-normal text-sm">Moderate (10-15%)</span>
                </span>
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#FF6B35] text-white font-bold">
                  -7% <span className="text-white/70 font-normal text-sm">Minor (&lt;10%)</span>
                </span>
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#10B981] text-white font-bold">
                  0% <span className="text-white/70 font-normal text-sm">No shrinkage</span>
                </span>
              </div>
            </div>

            {/* Typography */}
            <div className="bg-[#FAFAFA] rounded-2xl p-6 border border-gray-100 mb-8">
              <h3 className="text-lg font-semibold text-[#1A1A1A] mb-6">Typography</h3>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="bg-white rounded-xl p-5">
                  <p className="text-gray-400 text-xs uppercase tracking-wider mb-3">Display — Space Grotesk Bold</p>
                  <p className="font-bold text-3xl text-[#1A1A1A]">You&apos;re not crazy.</p>
                  <p className="text-gray-400 text-sm mt-2">Headlines, emotional moments</p>
                </div>
                <div className="bg-white rounded-xl p-5">
                  <p className="text-gray-400 text-xs uppercase tracking-wider mb-3">Data — JetBrains Mono</p>
                  <p className="font-mono text-xl text-[#1A1A1A]">64oz → 52oz = <span className="text-[#EF4444]">-18%</span></p>
                  <p className="text-gray-400 text-sm mt-2">Numbers, comparisons, proof</p>
                </div>
              </div>
            </div>

            {/* Components */}
            <div className="bg-[#FAFAFA] rounded-2xl p-6 border border-gray-100 mb-8">
              <h3 className="text-lg font-semibold text-[#1A1A1A] mb-6">Components</h3>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Buttons */}
                <div className="bg-white rounded-xl p-5">
                  <p className="text-gray-400 text-xs uppercase tracking-wider mb-4">Buttons</p>
                  <div className="space-y-4">
                    <button className="w-full bg-gradient-to-r from-[#FF6B35] to-[#EF4444] text-white px-6 py-3 rounded-full font-bold transition-all hover:shadow-lg hover:shadow-orange-500/30">
                      Scan Product
                    </button>
                    <button className="w-full bg-transparent text-[#FF6B35] border-2 border-[#FF6B35] hover:bg-[#FF6B35] hover:text-white px-6 py-3 rounded-full font-bold transition-all">
                      View Database
                    </button>
                  </div>
                </div>

                {/* Product Card */}
                <div className="bg-white rounded-xl p-5">
                  <p className="text-gray-400 text-xs uppercase tracking-wider mb-4">Product Card</p>
                  <div className="bg-[#FAFAFA] rounded-xl p-4 border border-gray-200">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <p className="font-bold text-[#1A1A1A]">Tropicana OJ</p>
                        <p className="text-xs text-gray-400 font-mono">UPC: 0485000052</p>
                      </div>
                      <span className="px-2 py-1 rounded-full bg-[#EF4444] text-white text-sm font-bold">-18%</span>
                    </div>
                    <div className="text-sm text-gray-600 font-mono">
                      64oz → 52oz since 2022
                    </div>
                    <div className="mt-2 text-sm text-[#EF4444] font-medium">
                      Real price increase: +23%
                    </div>
                    <div className="mt-3 h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div className="h-full w-[82%] bg-[#EF4444] rounded-full" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Design Principles */}
            <div className="bg-[#FAFAFA] rounded-2xl p-6 border border-gray-100">
              <h3 className="text-lg font-semibold text-[#1A1A1A] mb-6">Design Principles</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="bg-white rounded-xl p-4">
                    <h4 className="font-medium text-[#FF6B35] mb-2 flex items-center gap-2">
                      <Smartphone size={18} /> Mobile-First
                    </h4>
                    <p className="text-sm text-gray-600">Barcode scanner UI, thumb-friendly cards, vertical timelines</p>
                  </div>
                  <div className="bg-white rounded-xl p-4">
                    <h4 className="font-medium text-[#FF6B35] mb-2 flex items-center gap-2">
                      <Database size={18} /> Data as Proof
                    </h4>
                    <p className="text-sm text-gray-600">Timeline graphs, photo evidence, before/after comparisons</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="bg-white rounded-xl p-4">
                    <h4 className="font-medium text-[#FF6B35] mb-2 flex items-center gap-2">
                      <Share2 size={18} /> Viral by Design
                    </h4>
                    <p className="text-sm text-gray-600">Auto-generated share cards with QR codes for every product</p>
                  </div>
                  <div className="bg-white rounded-xl p-4">
                    <h4 className="font-medium text-[#FF6B35] mb-2 flex items-center gap-2">
                      <Award size={18} /> Gamification
                    </h4>
                    <p className="text-sm text-gray-600">Contributor badges, &quot;Top Detective&quot; status, verification medals</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Assets Download */}
            <div className="mt-8">
              <a 
                href="https://drive.google.com/drive/folders/18pm85KPJOt5Wj6p1HOENtRpphc9au6_o"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-6 bg-gradient-to-r from-[#FF6B35] to-[#EF4444] rounded-2xl text-white hover:opacity-90 transition-opacity"
              >
                <div>
                  <h3 className="font-semibold text-lg">Download All Brand Assets</h3>
                  <p className="text-white/80 text-sm">Logo, OG images, social banners — Google Drive</p>
                </div>
                <ExternalLink size={20} />
              </a>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-12 px-6 border-t border-gray-200 bg-[#FAFAFA]">
          <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <span className="text-xl">🔍</span>
              <span className="font-bold bg-gradient-to-r from-[#FF6B35] to-[#EF4444] bg-clip-text text-transparent">ShrinkWatch</span>
            </div>
            <div className="flex items-center gap-6 text-sm text-gray-400">
              <Link href="/" className="hover:text-[#FF6B35] transition-colors">Live Site</Link>
              <Link href="https://github.com/ashtalksai/shrinkwatch" target="_blank" className="hover:text-[#FF6B35] transition-colors">GitHub</Link>
              <Link href="/pitch" className="hover:text-[#FF6B35] transition-colors">Pitch Deck</Link>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
