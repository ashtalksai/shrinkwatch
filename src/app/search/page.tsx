"use client";

import Link from "next/link";
import { useState } from "react";

const products = [
  { id: 1, barcode: "048500000524", name: "Tropicana Orange Juice", oldSize: "64 oz", newSize: "52 oz", shrink: 18, lastUpdated: "2 days ago" },
  { id: 2, barcode: "044000034566", name: "Oreo Cookies", oldSize: "15.5 oz", newSize: "13.29 oz", shrink: 14, lastUpdated: "1 week ago" },
  { id: 3, barcode: "077567254276", name: "Breyers Ice Cream", oldSize: "56 oz", newSize: "48 oz", shrink: 14, lastUpdated: "3 days ago" },
  { id: 4, barcode: "028400034401", name: "Doritos Nacho Cheese", oldSize: "11 oz", newSize: "9.25 oz", shrink: 16, lastUpdated: "5 days ago" },
  { id: 5, barcode: "037000943419", name: "Charmin Ultra Soft", oldSize: "352 sheets", newSize: "264 sheets", shrink: 25, lastUpdated: "1 day ago" },
];

function getShrinkBadge(shrink: number) {
  if (shrink >= 15) return "bg-red-100 text-red-600";
  if (shrink >= 10) return "bg-yellow-100 text-yellow-600";
  return "bg-orange-100 text-orange-600";
}

export default function SearchPage() {
  const [query, setQuery] = useState("");

  const filteredProducts = products.filter(p => 
    p.name.toLowerCase().includes(query.toLowerCase()) ||
    p.barcode.includes(query)
  );

  return (
    <div className="min-h-screen bg-[#FAFAFA]">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center gap-2">
              <span className="text-2xl">🔍</span>
              <span className="font-bold text-xl bg-gradient-to-r from-[#FF6B35] to-[#EF4444] bg-clip-text text-transparent">
                ShrinkWatch
              </span>
            </Link>
          </div>
        </div>
      </nav>

      <main className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold text-center text-[#1A1A1A] mb-8">Search Products</h1>
          
          {/* Search Box */}
          <div className="relative mb-8">
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search by product name or barcode..."
              className="w-full px-6 py-4 rounded-2xl border border-gray-200 focus:border-[#FF6B35] focus:ring-2 focus:ring-[#FF6B35]/20 outline-none text-lg"
            />
            <button className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-gradient-to-r from-[#FF6B35] to-[#EF4444] rounded-xl text-white">
              🔍
            </button>
          </div>

          {/* Results */}
          <div className="space-y-4">
            {filteredProducts.map((product) => (
              <div key={product.id} className="bg-white rounded-2xl p-6 border border-gray-100 hover:shadow-lg transition-shadow">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="font-bold text-[#1A1A1A] text-lg">{product.name}</h3>
                    <p className="text-gray-400 text-sm font-mono">{product.barcode}</p>
                  </div>
                  <span className={`px-3 py-1 rounded-full font-mono text-sm font-bold ${getShrinkBadge(product.shrink)}`}>
                    -{product.shrink}%
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-sm">
                    <span className="text-gray-400 line-through">{product.oldSize}</span>
                    <span className="text-gray-400">→</span>
                    <span className="font-bold text-[#EF4444]">{product.newSize}</span>
                  </div>
                  <span className="text-gray-400 text-sm">Updated {product.lastUpdated}</span>
                </div>
              </div>
            ))}

            {filteredProducts.length === 0 && query && (
              <div className="text-center py-12">
                <div className="text-4xl mb-4">🔍</div>
                <p className="text-gray-500">No products found for &ldquo;{query}&rdquo;</p>
                <Link href="/submit">
                  <button className="mt-4 text-[#FF6B35] font-medium hover:underline">
                    Submit this product →
                  </button>
                </Link>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
