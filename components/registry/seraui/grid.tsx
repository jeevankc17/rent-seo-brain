"use client";
import React from "react";
import Button from "./button";
import { ArrowRight } from "lucide-react";

// Grid Background Component
const GridBackground = () => {
  return (
    <div
      className="absolute inset-0 w-full h-full overflow-hidden transition-transform duration-300 ease-out opacity-50"
      style={{
        backgroundImage: `
          linear-gradient(to right, rgba(255, 255, 255, 0.08) 1px, transparent 1px),
          linear-gradient(to bottom, rgba(255, 255, 255, 0.08) 1px, transparent 1px)
        `,
        backgroundSize: "80px 80px",
        animation: "moveGrid 20s linear infinite",
        transform: "none",
      }}
    >
      {/* Glow effect */}
      <div className="absolute top-1/2 left-1/2 w-[60vmin] h-[60vmin] bg-cyan-500/20 rounded-full blur-[150px] -translate-x-1/2 -translate-y-1/2" />
      {/* Keyframes for the animation */}
      <style>
        {`
          @keyframes moveGrid {
            0% { background-position: 0 0; }
            100% { background-position: 80px 80px; }
          }
        `}
      </style>
    </div>
  );
};

// Main App Component
export default function GridBackgroundView() {
  return (
    <div className="relative w-full h-screen bg-[#0d0f13] overflow-hidden">
      <GridBackground />
      
        {/* Main Content */}
      <div className="relative z-10 style={{ position: 'absolute', top: '119px'">
        {/* Hero Section */}
        <div className="text-center px-8 mb-20 max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold mb-6 leading-tight font-urbanist">
            <span style={{ color: '#1D8FFF' }}>High-Converting </span>
            <span className="text-white">Landing Pages That Sell</span>
          </h1>
          <p className="text-[#D2D2D2] text-base mb-11 max-w-2xl mx-auto font-urbanist">
            Our SEO-focused design team creates landing pages that convert visitors into customers. Proven designs that drive results for your business.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
            <Button className="px-6 py-3 rounded-full font-urbanist relative overflow-hidden" style={{
              background: '#1D8FFF',
              boxShadow: '0 4px 14.7px rgba(47, 152, 255, 0.63)'
            }}>
              <span className="text-white">Start my landing page</span>
              <div className="ml-3 p-3 rounded-full border border-[#A2D1FF] bg-[#E8F4FF] flex items-center justify-center">
                <ArrowRight className="h-4 w-4 text-[#1D8FFF]" strokeWidth={2} />
              </div>
            </Button>
            <Button className="bg-[#FAFAFA] border border-[#D2D2D2] text-[#091E42] hover:bg-[#F5F5F5] px-5 py-2.5 rounded-full font-urbanist">
              see how it works
              <ArrowRight className="ml-2 h-4 w-4 text-[#091E42]" strokeWidth={1.75} />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
