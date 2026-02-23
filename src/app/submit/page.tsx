"use client";

import Link from "next/link";
import { useState } from "react";

export default function SubmitPage() {
  const [step, setStep] = useState(1);
  const [barcode, setBarcode] = useState("");
  const [productName, setProductName] = useState("");
  const [size, setSize] = useState("");
  const [unit, setUnit] = useState("oz");

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
        <div className="max-w-lg mx-auto">
          <h1 className="text-3xl font-bold text-center text-[#1A1A1A] mb-2">Submit Data</h1>
          <p className="text-gray-500 text-center mb-8">Help the community track shrinkflation</p>

          {/* Progress */}
          <div className="flex gap-2 mb-8">
            {[1, 2, 3].map((s) => (
              <div
                key={s}
                className={`flex-1 h-2 rounded-full ${
                  s <= step ? "bg-gradient-to-r from-[#FF6B35] to-[#EF4444]" : "bg-gray-200"
                }`}
              />
            ))}
          </div>

          {step === 1 && (
            <div className="bg-white rounded-2xl p-6 border border-gray-100">
              <h2 className="font-bold text-[#1A1A1A] text-xl mb-6">Step 1: Enter Barcode</h2>
              <div className="border-2 border-dashed border-gray-200 rounded-xl p-8 text-center mb-4">
                <div className="text-4xl mb-2">📷</div>
                <p className="text-gray-500">Tap to scan barcode</p>
                <p className="text-gray-400 text-sm mt-1">or enter manually below</p>
              </div>
              <input
                type="text"
                value={barcode}
                onChange={(e) => setBarcode(e.target.value)}
                placeholder="Enter barcode number..."
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#FF6B35] focus:ring-2 focus:ring-[#FF6B35]/20 outline-none font-mono"
              />
              <button
                onClick={() => setStep(2)}
                disabled={!barcode}
                className="w-full mt-6 py-4 rounded-xl bg-gradient-to-r from-[#FF6B35] to-[#EF4444] text-white font-bold disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Continue
              </button>
            </div>
          )}

          {step === 2 && (
            <div className="bg-white rounded-2xl p-6 border border-gray-100">
              <h2 className="font-bold text-[#1A1A1A] text-xl mb-6">Step 2: Product Details</h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Product Name</label>
                  <input
                    type="text"
                    value={productName}
                    onChange={(e) => setProductName(e.target.value)}
                    placeholder="e.g., Tropicana Orange Juice"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#FF6B35] focus:ring-2 focus:ring-[#FF6B35]/20 outline-none"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Size/Weight</label>
                    <input
                      type="text"
                      value={size}
                      onChange={(e) => setSize(e.target.value)}
                      placeholder="52"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#FF6B35] focus:ring-2 focus:ring-[#FF6B35]/20 outline-none font-mono"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Unit</label>
                    <select
                      value={unit}
                      onChange={(e) => setUnit(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#FF6B35] focus:ring-2 focus:ring-[#FF6B35]/20 outline-none"
                    >
                      <option value="oz">oz</option>
                      <option value="ml">ml</option>
                      <option value="g">grams</option>
                      <option value="count">count</option>
                      <option value="sheets">sheets</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="flex gap-4 mt-6">
                <button
                  onClick={() => setStep(1)}
                  className="flex-1 py-4 rounded-xl border border-gray-200 text-gray-600 font-medium"
                >
                  Back
                </button>
                <button
                  onClick={() => setStep(3)}
                  disabled={!productName || !size}
                  className="flex-1 py-4 rounded-xl bg-gradient-to-r from-[#FF6B35] to-[#EF4444] text-white font-bold disabled:opacity-50"
                >
                  Continue
                </button>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="bg-white rounded-2xl p-6 border border-gray-100 text-center">
              <div className="text-6xl mb-4">🎉</div>
              <h2 className="font-bold text-[#1A1A1A] text-xl mb-2">Thank You!</h2>
              <p className="text-gray-500 mb-6">
                Your submission has been received. The community will verify it shortly.
              </p>
              <div className="bg-[#FFF9F5] rounded-xl p-4 mb-6">
                <p className="text-sm text-gray-600">You&apos;ve submitted <strong>12 products</strong>!</p>
                <p className="text-xs text-[#FF6B35] mt-1">Top 5% contributor this month 🏆</p>
              </div>
              <Link href="/">
                <button className="w-full py-4 rounded-xl bg-gradient-to-r from-[#FF6B35] to-[#EF4444] text-white font-bold">
                  Back to Home
                </button>
              </Link>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
