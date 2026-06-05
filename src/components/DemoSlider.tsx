"use client";

import React, { useState, useRef, useEffect } from "react";
import { Sparkles, MoveHorizontal } from "lucide-react";

export default function DemoSlider() {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  };

  const handleTouchMove = (e: TouchEvent) => {
    if (!isDragging) return;
    handleMove(e.touches[0].clientX);
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    if (isDragging) {
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseup", handleMouseUp);
      window.addEventListener("touchmove", handleTouchMove);
      window.addEventListener("touchend", handleMouseUp);
    }
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleMouseUp);
    };
  }, [isDragging]);

  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="text-center mb-8">
        <span className="text-brand font-bold text-xs uppercase tracking-widest bg-brand-light px-4 py-1.5 rounded-full">
          Interactive Cleaning Simulator
        </span>
        <h3 className="text-2xl sm:text-3xl font-bold font-display text-text-charcoal mt-3">
          See the Clean in Action
        </h3>
        <p className="text-slate-500 text-sm mt-2 max-w-md mx-auto">
          Drag the bar left and right to see how our concentrated formula breaks down grease, oil, and soap scum.
        </p>
      </div>

      {/* Slider viewport */}
      <div
        ref={containerRef}
        className="relative h-[320px] sm:h-[400px] w-full rounded-[2.5rem] overflow-hidden shadow-xl border border-slate-200 cursor-ew-resize no-select"
        onMouseDown={() => setIsDragging(true)}
        onTouchStart={() => setIsDragging(true)}
      >
        
        {/* AFTER STATE (Bottom layer - Clean & Shiny) */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-emerald-50/20 flex flex-col justify-center items-center">
          
          {/* Shiny Tiles Grid */}
          <div className="absolute inset-0 grid grid-cols-6 grid-rows-4 opacity-25">
            {Array.from({ length: 24 }).map((_, i) => (
              <div key={i} className="border border-brand/10 bg-white" />
            ))}
          </div>

          {/* Sparkling Micro-effects */}
          <div className="absolute top-1/4 right-1/4 animate-bounce text-brand opacity-60">
            <Sparkles className="w-8 h-8" />
          </div>
          <div className="absolute bottom-1/3 right-1/3 animate-pulse text-brand opacity-40">
            <Sparkles className="w-6 h-6" />
          </div>
          <div className="absolute top-1/2 right-12 animate-ping text-accent opacity-30">
            <Sparkles className="w-5 h-5" />
          </div>

          {/* Clinically clean visual indicator */}
          <div className="z-10 text-center">
            <div className="bg-brand/10 text-brand text-[10px] font-bold uppercase tracking-widest px-4 py-1.5 rounded-full inline-flex items-center gap-1.5 shadow-sm border border-brand/20">
              <Sparkles className="w-3.5 h-3.5" /> Shiny & Germ-Free
            </div>
            <p className="text-xs text-slate-400 mt-2.5 font-medium">100% Acid-Free Purity</p>
          </div>

          <div className="absolute bottom-6 right-6 z-10 bg-slate-900/85 text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-xl backdrop-blur-sm">
            After TM Solutions
          </div>
        </div>

        {/* BEFORE STATE (Top layer - Dirty & Stained) */}
        <div
          className="absolute inset-y-0 left-0 overflow-hidden bg-slate-200"
          style={{ width: `${sliderPosition}%` }}
        >
          {/* Inner container must keep full width to avoid squishing */}
          <div className="absolute inset-y-0 left-0 w-[800px] sm:w-[900px] md:w-[1024px] bg-amber-100/40 flex flex-col justify-center items-center">
            
            {/* Dirty Tiles Grid */}
            <div className="absolute inset-0 grid grid-cols-6 grid-rows-4 opacity-40">
              {Array.from({ length: 24 }).map((_, i) => (
                <div key={i} className="border border-amber-900/10 bg-amber-50" />
              ))}
            </div>

            {/* Stain blobs */}
            <div className="absolute inset-0 overflow-hidden opacity-60">
              {/* Stain 1 */}
              <div className="absolute top-12 left-10 w-28 h-20 bg-amber-800/20 rounded-full blur-md transform rotate-12" />
              {/* Stain 2 */}
              <div className="absolute bottom-16 left-32 w-36 h-16 bg-amber-900/30 rounded-full blur-xl" />
              {/* Stain 3 */}
              <div className="absolute top-1/3 left-1/4 w-20 h-20 bg-yellow-900/20 rounded-full blur-lg" />
              {/* Grout dirt lines */}
              <div className="absolute inset-0 border-l border-amber-800/10" style={{ left: "16.6%" }} />
              <div className="absolute inset-0 border-l border-amber-800/15" style={{ left: "33.3%" }} />
              <div className="absolute inset-0 border-l border-amber-800/20" style={{ left: "50%" }} />
            </div>

            {/* Dirty Indicator */}
            <div className="z-10 text-center">
              <span className="bg-amber-800/10 text-amber-900 text-[10px] font-bold uppercase tracking-widest px-4 py-1.5 rounded-full border border-amber-800/20">
                Stained & Greasy
              </span>
              <p className="text-xs text-amber-800/60 mt-2.5 font-medium">Calcium Scale & Oil buildup</p>
            </div>

            <div className="absolute bottom-6 left-6 z-10 bg-amber-950/85 text-amber-100 text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-xl backdrop-blur-sm">
              Before Clean
            </div>
          </div>
        </div>

        {/* DRAG HANDLE BAR */}
        <div
          className="absolute inset-y-0 w-1 bg-white shadow-lg z-20"
          style={{ left: `${sliderPosition}%` }}
        >
          <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 bg-slate-900 text-white rounded-full flex items-center justify-center shadow-xl border-2 border-white hover:bg-brand transition-colors duration-200">
            <MoveHorizontal className="w-4 h-4" />
          </div>
        </div>

      </div>
    </div>
  );
}
