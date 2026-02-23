import Link from "next/link";

const popularProducts = [
  { id: 1, name: "Tropicana Orange Juice", oldSize: "64 oz", newSize: "52 oz", shrink: 18, brand: "Tropicana" },
  { id: 2, name: "Oreo Cookies", oldSize: "15.5 oz", newSize: "13.29 oz", shrink: 14, brand: "Nabisco" },
  { id: 3, name: "Breyers Ice Cream", oldSize: "56 oz", newSize: "48 oz", shrink: 14, brand: "Breyers" },
  { id: 4, name: "Doritos Chips", oldSize: "11 oz", newSize: "9.25 oz", shrink: 16, brand: "Frito-Lay" },
  { id: 5, name: "Charmin Ultra Soft", oldSize: "352 sheets", newSize: "264 sheets", shrink: 25, brand: "P&G" },
  { id: 6, name: "Gatorade", oldSize: "32 oz", newSize: "28 oz", shrink: 12, brand: "PepsiCo" },
];

function getShrinkColor(shrink: number) {
  if (shrink >= 15) return "bg-red-500";
  if (shrink >= 10) return "bg-yellow-500";
  return "bg-orange-500";
}

function getShrinkBadge(shrink: number) {
  if (shrink >= 15) return "bg-red-100 text-red-600";
  if (shrink >= 10) return "bg-yellow-100 text-yellow-600";
  return "bg-orange-100 text-orange-600";
}

export default function Home() {
  return (
    <div className="min-h-screen bg-[#FAFAFA]">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2">
              <span className="text-2xl">🔍</span>
              <span className="font-bold text-xl bg-gradient-to-r from-[#FF6B35] to-[#EF4444] bg-clip-text text-transparent">
                ShrinkWatch
              </span>
            </div>
            <div className="hidden md:flex items-center gap-6">
              <Link href="/search" className="text-gray-600 hover:text-gray-900 transition-colors">Search</Link>
              <Link href="/submit" className="text-gray-600 hover:text-gray-900 transition-colors">Submit</Link>
              <Link href="/trending" className="text-gray-600 hover:text-gray-900 transition-colors">Trending</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#FFF9F5] to-[#FAFAFA]">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-[#FF6B35] to-[#EF4444] text-white text-sm font-medium mb-6">
            🔍 192K+ detectives already scanning
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#1A1A1A] leading-tight mb-4">
            You&apos;re not crazy.
          </h1>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-[#FF6B35] to-[#EF4444] bg-clip-text text-transparent mb-6">
            Products ARE getting smaller.
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Scan groceries. See shrinkflation. Hold brands accountable.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/search">
              <button className="px-8 py-4 rounded-full bg-gradient-to-r from-[#FF6B35] to-[#EF4444] text-white font-bold text-lg shadow-lg shadow-orange-500/30 hover:shadow-xl hover:-translate-y-0.5 transition-all">
                Search Products
              </button>
            </Link>
            <Link href="/submit">
              <button className="px-8 py-4 rounded-full border-2 border-[#FF6B35] text-[#FF6B35] font-bold text-lg hover:bg-[#FF6B35]/5 transition-colors">
                Submit Data
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-3xl sm:text-4xl font-bold text-[#1A1A1A] font-mono">192,408</div>
              <div className="text-gray-500 mt-1">Active Detectives</div>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl font-bold text-[#1A1A1A] font-mono">47,629</div>
              <div className="text-gray-500 mt-1">Products Tracked</div>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl font-bold text-[#1A1A1A] font-mono">2.4M</div>
              <div className="text-gray-500 mt-1">Scans This Month</div>
            </div>
          </div>
        </div>
      </section>

      {/* Caught Red-Handed */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-[#1A1A1A] mb-2">🚨 Caught Red-Handed</h2>
          <p className="text-gray-500 text-center mb-12">Recent shrinkflation discoveries</p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {popularProducts.map((product) => (
              <div key={product.id} className="bg-[#FAFAFA] rounded-2xl p-6 hover:shadow-lg transition-shadow border border-gray-100">
                <div className="flex justify-between items-start mb-4">
                  <div className="text-4xl">📦</div>
                  <span className={`px-3 py-1 rounded-full font-mono text-sm font-bold ${getShrinkBadge(product.shrink)}`}>
                    -{product.shrink}%
                  </span>
                </div>
                <h3 className="font-bold text-[#1A1A1A] text-lg mb-1">{product.name}</h3>
                <p className="text-gray-500 text-sm mb-4">{product.brand}</p>
                <div className="flex items-center gap-2 text-sm">
                  <span className="text-gray-400 line-through">{product.oldSize}</span>
                  <span className="text-gray-400">→</span>
                  <span className="font-bold text-[#EF4444]">{product.newSize}</span>
                </div>
                <div className="mt-4 h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div 
                    className={`h-full rounded-full ${getShrinkColor(product.shrink)}`}
                    style={{ width: `${100 - product.shrink}%` }}
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link href="/trending">
              <button className="text-[#FF6B35] font-medium hover:underline">
                View all tracked products →
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-[#1A1A1A] mb-12">How it works</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto bg-gradient-to-r from-[#FF6B35] to-[#EF4444] rounded-2xl flex items-center justify-center text-white text-2xl mb-4">
                📷
              </div>
              <h3 className="font-bold text-[#1A1A1A] mb-2">Scan</h3>
              <p className="text-gray-500">Point your phone at any barcode</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto bg-gradient-to-r from-[#FF6B35] to-[#EF4444] rounded-2xl flex items-center justify-center text-white text-2xl mb-4">
                📉
              </div>
              <h3 className="font-bold text-[#1A1A1A] mb-2">Discover</h3>
              <p className="text-gray-500">See when products shrank & by how much</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto bg-gradient-to-r from-[#FF6B35] to-[#EF4444] rounded-2xl flex items-center justify-center text-white text-2xl mb-4">
                📢
              </div>
              <h3 className="font-bold text-[#1A1A1A] mb-2">Share</h3>
              <p className="text-gray-500">Post receipts to TikTok & Twitter</p>
            </div>
          </div>
        </div>
      </section>

      {/* The Math */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-[#FF6B35] to-[#EF4444]">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-3xl font-bold mb-8">The Math Doesn&apos;t Lie</h2>
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 font-mono">
            <div className="grid md:grid-cols-2 gap-8 text-left">
              <div>
                <div className="text-white/60 mb-2">Before</div>
                <div className="text-2xl">64 oz for $4.99</div>
                <div className="text-white/80">= $0.078/oz</div>
              </div>
              <div>
                <div className="text-white/60 mb-2">Now</div>
                <div className="text-2xl">52 oz for $4.99</div>
                <div className="text-white/80">= $0.096/oz</div>
              </div>
            </div>
            <div className="mt-8 pt-8 border-t border-white/20">
              <div className="text-3xl font-bold">Real price increase: +23% 📈</div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 sm:px-6 lg:px-8 border-t border-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <span className="text-xl">🔍</span>
              <span className="font-bold text-lg bg-gradient-to-r from-[#FF6B35] to-[#EF4444] bg-clip-text text-transparent">
                ShrinkWatch
              </span>
            </div>
            <div className="flex gap-6 text-sm text-gray-600">
              <a href="#" className="hover:text-gray-900 transition-colors">About</a>
              <a href="#" className="hover:text-gray-900 transition-colors">Submit Data</a>
              <a href="#" className="hover:text-gray-900 transition-colors">API Access</a>
              <a href="#" className="hover:text-gray-900 transition-colors">Privacy</a>
            </div>
            <p className="text-sm text-gray-500">Community-powered • Not affiliated with any brand</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
