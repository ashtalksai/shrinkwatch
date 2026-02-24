"use client";

import { useState } from "react";
import Link from "next/link";

// Icons
const GTMIcon = () => (
  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
  </svg>
);

const MarketingIcon = () => (
  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
  </svg>
);

const BrandIcon = () => (
  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
  </svg>
);

const AssetsIcon = () => (
  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
  </svg>
);

const PitchIcon = () => (
  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
  </svg>
);

const DownloadIcon = () => (
  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
  </svg>
);

const ExternalLinkIcon = () => (
  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
  </svg>
);

const sections = [
  { id: "gtm", label: "GTM Plan", icon: GTMIcon },
  { id: "marketing", label: "Marketing", icon: MarketingIcon },
  { id: "brand", label: "Brand", icon: BrandIcon },
  { id: "assets", label: "Assets", icon: AssetsIcon },
  { id: "pitch", label: "Pitch Deck", icon: PitchIcon },
];

export default function DocsPage() {
  const [activeSection, setActiveSection] = useState("gtm");

  return (
    <div className="min-h-screen bg-[#FAFAFA]">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center gap-2">
              <span className="font-bold text-xl bg-gradient-to-r from-[#FF6B35] to-[#EF4444] bg-clip-text text-transparent">ShrinkWatch</span>
              <span className="text-gray-400">— Documentation</span>
            </Link>
            <div className="hidden md:flex items-center gap-4">
              <Link href="/" className="text-sm text-gray-600 hover:text-[#FF6B35]">
                Live Site
              </Link>
              <a 
                href="https://github.com/ashtalksai/shrinkwatch" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-sm text-gray-600 hover:text-[#FF6B35] flex items-center gap-1"
              >
                GitHub <ExternalLinkIcon />
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Tab Navigation */}
      <nav className="md:hidden sticky top-16 z-40 bg-white border-b border-gray-200 overflow-x-auto">
        <div className="flex">
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => setActiveSection(section.id)}
              className={`flex-shrink-0 px-4 py-3 text-sm font-medium border-b-2 transition-colors ${
                activeSection === section.id
                  ? "border-[#FF6B35] text-[#FF6B35]"
                  : "border-transparent text-gray-500 hover:text-gray-900"
              }`}
            >
              {section.label}
            </button>
          ))}
        </div>
      </nav>

      <div className="max-w-7xl mx-auto flex">
        {/* Desktop Sidebar */}
        <aside className="hidden md:block w-64 flex-shrink-0 border-r border-gray-200 min-h-[calc(100vh-4rem)] sticky top-16">
          <nav className="p-4 space-y-2">
            {sections.map((section) => {
              const Icon = section.icon;
              return (
                <button
                  key={section.id}
                  onClick={() => setActiveSection(section.id)}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-all ${
                    activeSection === section.id
                      ? "bg-gradient-to-r from-[#FF6B35] to-[#EF4444] text-white"
                      : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
                  }`}
                >
                  <Icon />
                  <span className="font-medium">{section.label}</span>
                </button>
              );
            })}
            <hr className="my-4 border-gray-200" />
            <Link 
              href="/"
              className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-gray-600 hover:bg-gray-100 hover:text-gray-900"
            >
              Live Site
            </Link>
            <a 
              href="https://github.com/ashtalksai/shrinkwatch"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-gray-600 hover:bg-gray-100 hover:text-gray-900"
            >
              GitHub <ExternalLinkIcon />
            </a>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6 md:p-8 max-w-4xl">
          {activeSection === "gtm" && <GTMSection />}
          {activeSection === "marketing" && <MarketingSection />}
          {activeSection === "brand" && <BrandSection />}
          {activeSection === "assets" && <AssetsSection />}
          {activeSection === "pitch" && <PitchSection />}
        </main>
      </div>
    </div>
  );
}

function GTMSection() {
  return (
    <section className="space-y-8">
      <div>
        <h1 className="font-bold text-3xl md:text-4xl text-gray-900 mb-4">Go-to-Market Plan</h1>
        <p className="text-gray-600 text-lg">Launch strategy for ShrinkWatch — Crowdsourced shrinkflation detector</p>
      </div>

      {/* Executive Summary */}
      <div className="bg-gradient-to-br from-[#FF6B35] to-[#EF4444] rounded-2xl p-6 md:p-8 text-white">
        <h2 className="text-xl font-bold mb-4">Executive Summary</h2>
        <p className="text-white/90 mb-6">
          ShrinkWatch launches to the 192K strong r/shrinkflation community and TikTok audience with a 
          crowdsourced database that proves &quot;you&apos;re not crazy — products ARE getting smaller.&quot;
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-white/10 rounded-xl p-4">
            <div className="text-2xl font-bold">$8.2B</div>
            <div className="text-sm text-white/70">TAM</div>
          </div>
          <div className="bg-white/10 rounded-xl p-4">
            <div className="text-2xl font-bold">192K</div>
            <div className="text-sm text-white/70">Reddit Community</div>
          </div>
          <div className="bg-white/10 rounded-xl p-4">
            <div className="text-2xl font-bold">50K</div>
            <div className="text-sm text-white/70">Users Month 6</div>
          </div>
          <div className="bg-white/10 rounded-xl p-4">
            <div className="text-2xl font-bold">$19K</div>
            <div className="text-sm text-white/70">MRR Target</div>
          </div>
        </div>
      </div>

      {/* Target Audience */}
      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-white rounded-2xl p-6 border border-gray-200">
          <h3 className="font-semibold text-lg mb-4 text-[#FF6B35]">Primary Target</h3>
          <ul className="space-y-3 text-gray-600">
            <li className="flex items-start gap-2">
              <span className="text-[#EF4444]">•</span>
              Budget-conscious grocery shoppers
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#EF4444]">•</span>
              r/shrinkflation community (192K members)
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#EF4444]">•</span>
              TikTok users interested in consumer justice
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#EF4444]">•</span>
              News outlets needing shrinkflation data
            </li>
          </ul>
        </div>
        <div className="bg-white rounded-2xl p-6 border border-gray-200">
          <h3 className="font-semibold text-lg mb-4 text-[#FF6B35]">Pain Point</h3>
          <blockquote className="italic text-gray-600 border-l-4 border-[#FF6B35] pl-4">
            &quot;I KNEW my cereal box looked smaller! But I couldn&apos;t prove it until now. 
            Finally, receipts!&quot;
          </blockquote>
          <p className="mt-4 text-sm text-gray-400">— r/shrinkflation user</p>
        </div>
      </div>

      {/* Channels */}
      <div className="bg-white rounded-2xl p-6 border border-gray-200">
        <h3 className="font-semibold text-lg mb-6 text-gray-900">Distribution Channels</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            { channel: "Reddit r/shrinkflation", focus: "192K members, home base", priority: "PRIMARY" },
            { channel: "TikTok", focus: "#shrinkflation 15M+ views", priority: "VIRAL" },
            { channel: "Product Hunt", focus: "Tech early adopters + press", priority: "LAUNCH" },
            { channel: "News Partnerships", focus: "NPR, Consumer Reports B2B", priority: "B2B" },
            { channel: "Viral Receipts", focus: "Auto-generated shareable cards", priority: "GROWTH" },
          ].map((item, i) => (
            <div key={i} className="p-4 rounded-xl bg-gray-50">
              <div className="flex items-center justify-between mb-2">
                <span className="font-medium">{item.channel}</span>
                <span className="text-xs px-2 py-1 rounded-full bg-gradient-to-r from-[#FF6B35] to-[#EF4444] text-white">{item.priority}</span>
              </div>
              <p className="text-sm text-gray-600">{item.focus}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Timeline */}
      <div className="bg-white rounded-2xl p-6 border border-gray-200">
        <h3 className="font-semibold text-lg mb-6 text-gray-900">90-Day Timeline</h3>
        <div className="space-y-4">
          {[
            { phase: "Phase 1: Beta", time: "Weeks 1-2", goals: "Reddit AMA, seed 100 products, TikTok first 5 videos" },
            { phase: "Phase 2: Product Hunt", time: "Week 3", goals: "Top 5 product of the day, tech press coverage" },
            { phase: "Phase 3: Viral", time: "Months 2-3", goals: "TikTok content engine, news partnerships, 10K products" },
            { phase: "Phase 4: Scale", time: "Months 4-6", goals: "50K users, B2B deals closed, $19K MRR" },
          ].map((phase, i) => (
            <div key={i} className="flex gap-4 items-start">
              <div className="w-3 h-3 rounded-full bg-gradient-to-r from-[#FF6B35] to-[#EF4444] mt-2 flex-shrink-0" />
              <div className="flex-1 pb-4 border-b border-gray-100 last:border-0">
                <div className="flex flex-wrap gap-2 items-center mb-1">
                  <span className="font-medium">{phase.phase}</span>
                  <span className="text-xs text-gray-400">{phase.time}</span>
                </div>
                <p className="text-sm text-gray-600">{phase.goals}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Pricing */}
      <div className="bg-white rounded-2xl p-6 border border-gray-200">
        <h3 className="font-semibold text-lg mb-6 text-gray-900">Pricing Strategy</h3>
        <div className="grid md:grid-cols-4 gap-4">
          <div className="p-4 rounded-xl bg-gray-50">
            <div className="text-sm text-gray-400 mb-1">Free</div>
            <div className="text-2xl font-bold text-gray-900">$0</div>
            <div className="text-sm text-gray-600 mt-2">Basic scanning + database</div>
          </div>
          <div className="p-4 rounded-xl bg-gradient-to-r from-[#FF6B35] to-[#EF4444] text-white">
            <div className="text-sm text-white/70 mb-1">Premium</div>
            <div className="text-2xl font-bold">$7.99/mo</div>
            <div className="text-sm text-white/80 mt-2">Alerts, reports, calculator</div>
          </div>
          <div className="p-4 rounded-xl bg-gray-50">
            <div className="text-sm text-gray-400 mb-1">News Tier</div>
            <div className="text-2xl font-bold text-gray-900">$500-2K</div>
            <div className="text-sm text-gray-600 mt-2">Full API for journalists</div>
          </div>
          <div className="p-4 rounded-xl bg-gray-50">
            <div className="text-sm text-gray-400 mb-1">Enterprise</div>
            <div className="text-2xl font-bold text-gray-900">$2K+</div>
            <div className="text-sm text-gray-600 mt-2">CPG brands, research firms</div>
          </div>
        </div>
      </div>
    </section>
  );
}

function MarketingSection() {
  return (
    <section className="space-y-8">
      <div>
        <h1 className="font-bold text-3xl md:text-4xl text-gray-900 mb-4">Marketing Plan</h1>
        <p className="text-gray-600 text-lg">Positioning, messaging, and viral content strategy</p>
      </div>

      {/* Positioning */}
      <div className="bg-white rounded-2xl p-6 md:p-8 border border-gray-200">
        <h2 className="text-xl font-semibold mb-6 text-gray-900">Positioning Statement</h2>
        <div className="space-y-4 text-lg">
          <p><span className="text-[#FF6B35] font-medium">For</span> budget-conscious grocery shoppers</p>
          <p><span className="text-[#FF6B35] font-medium">Who</span> suspect products are shrinking but can&apos;t prove it</p>
          <p><span className="text-[#FF6B35] font-medium">ShrinkWatch</span> is a crowdsourced shrinkflation database</p>
          <p><span className="text-[#FF6B35] font-medium">That</span> tracks size changes with photo evidence and timelines</p>
          <p><span className="text-[#FF6B35] font-medium">Unlike</span> Reddit chaos or one-person blogs</p>
          <p><span className="text-[#FF6B35] font-medium">We</span> provide searchable, verified, shareable proof</p>
        </div>
      </div>

      {/* Tagline */}
      <div className="bg-gradient-to-r from-[#FF6B35] to-[#EF4444] rounded-2xl p-8 text-center">
        <p className="text-white/80 mb-2">Tagline</p>
        <h2 className="font-bold text-3xl md:text-4xl text-white">&quot;You&apos;re not crazy. Products ARE getting smaller.&quot;</h2>
      </div>

      {/* Viral Formats */}
      <div className="grid md:grid-cols-3 gap-6">
        {[
          { platform: "TikTok", format: "\"CAUGHT: [Brand] shrinking [Product]\"", desc: "POV videos with barcode scanner reveal" },
          { platform: "Twitter", format: "\"[Product]: [Old] → [New]. That's a [X]% price increase.\"", desc: "Data-driven threads with receipts" },
          { platform: "Instagram", format: "Brand Report Cards", desc: "\"We graded PepsiCo on shrinkflation: D-\"" },
        ].map((item, i) => (
          <div key={i} className="bg-white rounded-2xl p-6 border border-gray-200">
            <h3 className="font-semibold text-lg text-[#FF6B35] mb-3">{item.platform}</h3>
            <p className="text-gray-900 font-medium mb-2">{item.format}</p>
            <p className="text-sm text-gray-600">{item.desc}</p>
          </div>
        ))}
      </div>

      {/* Brand Voice */}
      <div className="bg-white rounded-2xl p-6 border border-gray-200">
        <h3 className="font-semibold text-lg mb-6 text-gray-900">Brand Voice</h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h4 className="text-green-500 font-medium mb-3">✓ We Are</h4>
            <ul className="space-y-2 text-gray-600">
              <li>• Consumer detective with receipts</li>
              <li>• Playful but sharp</li>
              <li>• Data-driven but accessible</li>
              <li>• Slightly sassy, TikTok-friendly</li>
            </ul>
          </div>
          <div>
            <h4 className="text-[#EF4444] font-medium mb-3">✗ We&apos;re Not</h4>
            <ul className="space-y-2 text-gray-600">
              <li>• Serious academic consumer advocacy</li>
              <li>• Corporate blue dashboards</li>
              <li>• Text-heavy boring comparisons</li>
              <li>• Angry conspiracy theorist energy</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Content Calendar */}
      <div className="bg-white rounded-2xl p-6 border border-gray-200">
        <h3 className="font-semibold text-lg mb-6 text-gray-900">Content Strategy</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-3 px-4 font-medium text-gray-400">Channel</th>
                <th className="text-left py-3 px-4 font-medium text-gray-400">Frequency</th>
                <th className="text-left py-3 px-4 font-medium text-gray-400">Content Type</th>
              </tr>
            </thead>
            <tbody className="text-gray-600">
              <tr className="border-b border-gray-100">
                <td className="py-3 px-4">TikTok</td>
                <td className="py-3 px-4">5x/week</td>
                <td className="py-3 px-4">&quot;CAUGHT&quot; videos, barcode scanner reveals</td>
              </tr>
              <tr className="border-b border-gray-100">
                <td className="py-3 px-4">Twitter</td>
                <td className="py-3 px-4">Daily</td>
                <td className="py-3 px-4">Data threads, shrinkflation receipts</td>
              </tr>
              <tr className="border-b border-gray-100">
                <td className="py-3 px-4">Blog</td>
                <td className="py-3 px-4">Weekly</td>
                <td className="py-3 px-4">&quot;50 Most Shrunken Products of 2024&quot;</td>
              </tr>
              <tr>
                <td className="py-3 px-4">Email</td>
                <td className="py-3 px-4">Monthly</td>
                <td className="py-3 px-4">Shrinkflation report + trending products</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

function BrandSection() {
  return (
    <section className="space-y-8">
      <div>
        <h1 className="font-bold text-3xl md:text-4xl text-gray-900 mb-4">Brand Guidelines</h1>
        <p className="text-gray-600 text-lg">Visual identity and design system for ShrinkWatch</p>
      </div>

      {/* Color Palette */}
      <div className="bg-white rounded-2xl p-6 border border-gray-200">
        <h3 className="font-semibold text-lg mb-6 text-gray-900">Color Palette</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="rounded-xl overflow-hidden">
            <div className="h-24 bg-[#FF6B35]" />
            <div className="p-3 bg-gray-50">
              <div className="font-medium">Orange</div>
              <div className="text-sm text-gray-400 font-mono">#FF6B35</div>
            </div>
          </div>
          <div className="rounded-xl overflow-hidden">
            <div className="h-24 bg-[#EF4444]" />
            <div className="p-3 bg-gray-50">
              <div className="font-medium">Red</div>
              <div className="text-sm text-gray-400 font-mono">#EF4444</div>
            </div>
          </div>
          <div className="rounded-xl overflow-hidden">
            <div className="h-24 bg-[#FBBF24]" />
            <div className="p-3 bg-gray-50">
              <div className="font-medium">Yellow Warning</div>
              <div className="text-sm text-gray-400 font-mono">#FBBF24</div>
            </div>
          </div>
          <div className="rounded-xl overflow-hidden">
            <div className="h-24 bg-[#10B981]" />
            <div className="p-3 bg-gray-50">
              <div className="font-medium">Green OK</div>
              <div className="text-sm text-gray-400 font-mono">#10B981</div>
            </div>
          </div>
        </div>
        <div className="mt-6 p-4 rounded-xl bg-gradient-to-r from-[#FF6B35] to-[#EF4444]">
          <p className="text-white font-medium">Brand Gradient</p>
          <p className="text-white/70 text-sm font-mono">linear-gradient(135deg, #FF6B35 0%, #EF4444 100%)</p>
        </div>
      </div>

      {/* Shrinkage Badges */}
      <div className="bg-white rounded-2xl p-6 border border-gray-200">
        <h3 className="font-semibold text-lg mb-6 text-gray-900">Shrinkage Severity Badges</h3>
        <div className="flex flex-wrap gap-4">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#EF4444] text-white font-bold">
            -18% <span className="text-white/70 font-normal">Severe (&gt;15%)</span>
          </span>
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#FBBF24] text-gray-900 font-bold">
            -12% <span className="text-gray-700 font-normal">Moderate (10-15%)</span>
          </span>
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#FF6B35] text-white font-bold">
            -7% <span className="text-white/70 font-normal">Minor (&lt;10%)</span>
          </span>
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#10B981] text-white font-bold">
            0% <span className="text-white/70 font-normal">No shrinkage</span>
          </span>
        </div>
      </div>

      {/* Typography */}
      <div className="bg-white rounded-2xl p-6 border border-gray-200">
        <h3 className="font-semibold text-lg mb-6 text-gray-900">Typography</h3>
        <div className="space-y-6">
          <div>
            <p className="text-sm text-gray-400 mb-2">Display — Space Grotesk Bold</p>
            <p className="font-bold text-4xl">You&apos;re not crazy.</p>
          </div>
          <div>
            <p className="text-sm text-gray-400 mb-2">Body — Inter (or system UI)</p>
            <p className="text-lg">Products ARE getting smaller. Scan groceries, see shrinkflation, hold brands accountable.</p>
          </div>
          <div>
            <p className="text-sm text-gray-400 mb-2">Data — JetBrains Mono</p>
            <p className="font-mono text-lg">64oz → 52oz = <span className="text-[#EF4444]">-18.75%</span> = <span className="text-[#EF4444]">+23% real price increase</span></p>
          </div>
        </div>
      </div>

      {/* Components */}
      <div className="bg-white rounded-2xl p-6 border border-gray-200">
        <h3 className="font-semibold text-lg mb-6 text-gray-900">Components</h3>
        <div className="space-y-8">
          {/* Buttons */}
          <div>
            <p className="text-sm text-gray-400 mb-4">Buttons</p>
            <div className="flex flex-wrap gap-4">
              <button className="px-6 py-3 bg-gradient-to-r from-[#FF6B35] to-[#EF4444] text-white rounded-full font-bold hover:opacity-90 transition-opacity">
                Scan Product
              </button>
              <button className="px-6 py-3 border-2 border-[#FF6B35] text-[#FF6B35] rounded-full font-bold hover:bg-[#FF6B35] hover:text-white transition-colors">
                View Database
              </button>
            </div>
          </div>
          {/* Product Card */}
          <div>
            <p className="text-sm text-gray-400 mb-4">Product Card</p>
            <div className="max-w-sm bg-gray-50 rounded-xl p-4 border border-gray-200">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <p className="font-bold text-gray-900">Tropicana Orange Juice</p>
                  <p className="text-sm text-gray-400 font-mono">0-48500-00052-4</p>
                </div>
                <span className="px-2 py-1 rounded-full bg-[#EF4444] text-white text-sm font-bold">-18%</span>
              </div>
              <div className="text-sm text-gray-600">
                <span className="font-mono">64oz → 52oz</span> since 2022
              </div>
              <div className="mt-2 text-sm text-[#EF4444] font-medium">
                Real price increase: +23%
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Design Principles */}
      <div className="bg-white rounded-2xl p-6 border border-gray-200">
        <h3 className="font-semibold text-lg mb-6 text-gray-900">Design Principles</h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div>
              <h4 className="font-medium text-[#FF6B35] mb-2">TikTok Detective Energy</h4>
              <p className="text-sm text-gray-600">Viral, shareable, &quot;CAUGHT red-handed&quot; aesthetic</p>
            </div>
            <div>
              <h4 className="font-medium text-[#FF6B35] mb-2">Data as Proof</h4>
              <p className="text-sm text-gray-600">Timeline graphs, photo evidence, before/after comparisons</p>
            </div>
          </div>
          <div className="space-y-4">
            <div>
              <h4 className="font-medium text-[#FF6B35] mb-2">Mobile-First</h4>
              <p className="text-sm text-gray-600">Barcode scanner UI, thumb-friendly cards, vertical timelines</p>
            </div>
            <div>
              <h4 className="font-medium text-[#FF6B35] mb-2">Gamification</h4>
              <p className="text-sm text-gray-600">Contributor badges, &quot;Top Detective&quot; status, verification medals</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function AssetsSection() {
  const assets = [
    { name: "Logo", dimensions: "500x500", file: "logo.png", url: "https://drive.google.com/file/d/16WN49PKaidmWl-STNQt7EZPRshm8Ig3j/view" },
    { name: "Favicon", dimensions: "32x32", file: "favicon.png", url: "https://drive.google.com/file/d/1_nPWisVy2PT8W-akyq4hpZoLk-ELKdTl/view" },
    { name: "OG Image", dimensions: "1200x630", file: "og-image.png", url: "https://drive.google.com/file/d/1ckMZSV6IIg37W1jInDdi8SYk7novo9cE/view" },
    { name: "LinkedIn Banner", dimensions: "1584x396", file: "linkedin-banner.png", url: "https://drive.google.com/file/d/1arLCJxTnLmYIi2eCuVmS_Q2KIfELY8MQ/view" },
    { name: "Twitter Header", dimensions: "1500x500", file: "twitter-header.png", url: "https://drive.google.com/file/d/1prDQ-A0wW-zWlT9kak2ob_8ou3yrQRse/view" },
    { name: "Social Media Card", dimensions: "1200x630", file: "social-card.png", url: "https://drive.google.com/file/d/1JveEY83FuEjdDOK1Xwo9AnYiFgkI-TyT/view" },
    { name: "Instagram Story", dimensions: "1080x1920", file: "instagram-story.png", url: "https://drive.google.com/file/d/1IE9RwFLA3dUXPbIRfq0kZmuLyhzHzjy2/view" },
  ];

  return (
    <section className="space-y-8">
      <div>
        <h1 className="font-bold text-3xl md:text-4xl text-gray-900 mb-4">Brand Assets</h1>
        <p className="text-gray-600 text-lg">Download logos, banners, and social media assets</p>
      </div>

      {/* Download All */}
      <a 
        href="https://drive.google.com/drive/folders/18pm85KPJOt5Wj6p1HOENtRpphc9au6_o"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-between p-6 bg-gradient-to-r from-[#FF6B35] to-[#EF4444] rounded-2xl text-white hover:opacity-90 transition-opacity"
      >
        <div>
          <h3 className="font-semibold text-lg">Download All Assets</h3>
          <p className="text-white/80 text-sm">Google Drive folder with all brand assets</p>
        </div>
        <DownloadIcon />
      </a>

      {/* Asset Grid */}
      <div className="grid md:grid-cols-2 gap-6">
        {assets.map((asset, i) => (
          <div key={i} className="bg-white rounded-2xl overflow-hidden border border-gray-200">
            <div className="h-40 bg-gradient-to-br from-[#FF6B35]/20 to-[#EF4444]/20 flex items-center justify-center">
              <div className="text-center">
                <p className="font-medium text-gray-900">{asset.name}</p>
                <p className="text-xs text-gray-400">{asset.dimensions}</p>
              </div>
            </div>
            <div className="p-4 flex items-center justify-between">
              <div>
                <p className="font-medium text-sm">{asset.file}</p>
              </div>
              <a 
                href={asset.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-3 py-1.5 bg-gradient-to-r from-[#FF6B35] to-[#EF4444] text-white text-sm rounded-lg hover:opacity-90 transition-opacity"
              >
                <DownloadIcon /> Download
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Usage Guidelines */}
      <div className="bg-white rounded-2xl p-6 border border-gray-200">
        <h3 className="font-semibold text-lg mb-6 text-gray-900">Usage Guidelines</h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h4 className="text-green-500 font-medium mb-3">✓ Do</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>• Use the orange-to-red gradient consistently</li>
              <li>• Keep the detective/magnifying glass motif</li>
              <li>• Use bold, punchy copy (&quot;CAUGHT&quot;, &quot;PROOF&quot;)</li>
              <li>• Include data in shareable cards</li>
            </ul>
          </div>
          <div>
            <h4 className="text-[#EF4444] font-medium mb-3">✗ Don&apos;t</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>• Use corporate blue/gray colors</li>
              <li>• Make it look like a boring database</li>
              <li>• Use angry or conspiracy-theory energy</li>
              <li>• Forget the QR code on viral shares</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function PitchSection() {
  return (
    <section className="space-y-8">
      <div>
        <h1 className="font-bold text-3xl md:text-4xl text-gray-900 mb-4">Pitch Deck</h1>
        <p className="text-gray-600 text-lg">Investment presentation for ShrinkWatch</p>
      </div>

      {/* External Link */}
      <Link 
        href="/pitch"
        className="flex items-center justify-between p-6 bg-gradient-to-r from-[#FF6B35] to-[#EF4444] rounded-2xl text-white hover:opacity-90 transition-opacity"
      >
        <div>
          <h3 className="font-semibold text-lg">View Full Pitch Deck</h3>
          <p className="text-white/80 text-sm">Interactive presentation with animations</p>
        </div>
        <ExternalLinkIcon />
      </Link>

      {/* Deck Overview */}
      <div className="bg-white rounded-2xl p-6 border border-gray-200">
        <h3 className="font-semibold text-lg mb-6 text-gray-900">Deck Overview</h3>
        <div className="space-y-4">
          {[
            { slide: 1, title: "Problem", content: "Hidden inflation: products shrink 5-20%, prices stay flat = 23%+ real increase" },
            { slide: 2, title: "Solution", content: "Crowdsourced database with barcode scanning, photo evidence, timeline graphs" },
            { slide: 3, title: "Market", content: "$8.2B TAM, 330M grocery shoppers, 192K active Reddit community" },
            { slide: 4, title: "Product", content: "Mobile-first scanner, viral receipt cards, contributor gamification" },
            { slide: 5, title: "Traction", content: "192K Reddit community validation, 15M+ TikTok views on #shrinkflation" },
            { slide: 6, title: "Business Model", content: "Free tier → $7.99/mo premium → B2B data licensing $500-2K+/mo" },
            { slide: 7, title: "Competition", content: "vs MousePrint (1 person), Reddit (chaotic), Consumer Reports (paywalled)" },
            { slide: 8, title: "GTM Strategy", content: "Reddit home base, TikTok viral, Product Hunt, News partnerships" },
            { slide: 9, title: "Financials", content: "Year 1: $252K, Year 2: $1.3M, Year 5: $14.4M" },
            { slide: 10, title: "The Ask", content: "$750K seed for mobile app, OCR, TikTok content, B2B sales" },
          ].map((slide) => (
            <div key={slide.slide} className="flex gap-4 items-start p-4 rounded-xl bg-gray-50">
              <div className="w-8 h-8 rounded-full bg-gradient-to-r from-[#FF6B35] to-[#EF4444] text-white flex items-center justify-center text-sm font-bold flex-shrink-0">
                {slide.slide}
              </div>
              <div>
                <h4 className="font-medium text-gray-900">{slide.title}</h4>
                <p className="text-sm text-gray-600">{slide.content}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Key Metrics */}
      <div className="bg-white rounded-2xl p-6 border border-gray-200">
        <h3 className="font-semibold text-lg mb-6 text-gray-900">Key Investment Metrics</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="p-4 rounded-xl bg-gray-50 text-center">
            <div className="text-2xl font-bold bg-gradient-to-r from-[#FF6B35] to-[#EF4444] bg-clip-text text-transparent">32x</div>
            <div className="text-sm text-gray-400">Consumer LTV:CAC</div>
          </div>
          <div className="p-4 rounded-xl bg-gray-50 text-center">
            <div className="text-2xl font-bold bg-gradient-to-r from-[#FF6B35] to-[#EF4444] bg-clip-text text-transparent">$750K</div>
            <div className="text-sm text-gray-400">Seed Ask</div>
          </div>
          <div className="p-4 rounded-xl bg-gray-50 text-center">
            <div className="text-2xl font-bold bg-gradient-to-r from-[#FF6B35] to-[#EF4444] bg-clip-text text-transparent">$14.4M</div>
            <div className="text-sm text-gray-400">Year 5 Revenue</div>
          </div>
          <div className="p-4 rounded-xl bg-gray-50 text-center">
            <div className="text-2xl font-bold bg-gradient-to-r from-[#FF6B35] to-[#EF4444] bg-clip-text text-transparent">192K</div>
            <div className="text-sm text-gray-400">Reddit Validation</div>
          </div>
        </div>
      </div>
    </section>
  );
}
