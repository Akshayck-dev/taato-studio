'use client'

import { useState, useRef } from 'react'
import { SlidersHorizontal } from 'lucide-react'

export default function CoverupSlider() {
  const [sliderPosition, setSliderPosition] = useState(50)
  const containerRef = useRef<HTMLDivElement>(null)

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return
    const rect = containerRef.current.getBoundingClientRect()
    const x = clientX - rect.left
    let percentage = (x / rect.width) * 100
    if (percentage < 0) percentage = 0
    if (percentage > 100) percentage = 100
    setSliderPosition(percentage)
  }

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    handleMove(e.touches[0].clientX)
  }

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.buttons === 1) { // Left click held
      handleMove(e.clientX)
    }
  }

  return (
    <div className="bg-card border border-border rounded-xl p-5 md:p-8">
      <div className="text-center mb-6">
        <span className="text-xs font-medium text-accent tracking-wider uppercase">Transformations</span>
        <h3 className="mt-2 text-lg font-serif font-bold text-foreground">Before & After Cover-Ups</h3>
        <p className="mt-3 text-xs text-muted-foreground max-w-xl mx-auto">
          Drag the slider to see how our artists transform older or faded tattoos into modern custom artwork.
        </p>
      </div>

      {/* Interactive Split-Screen Slider Box */}
      <div
        ref={containerRef}
        className="relative w-full h-[300px] md:h-[400px] rounded-xl overflow-hidden cursor-ew-resize select-none border border-border"
        onMouseMove={handleMouseMove}
        onTouchMove={handleTouchMove}
      >
        {/* AFTER IMAGE */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1611501275019-9b5cda994e8d?auto=format&fit=crop&w=1200&q=80"
            alt="After Tattoo Cover-Up"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent p-5 flex flex-col justify-between">
            <div className="flex justify-end">
              <span className="bg-accent text-white text-[10px] font-semibold uppercase px-2.5 py-1 rounded border border-accent/15">
                ✨ AFTER
              </span>
            </div>
            <div className="max-w-xs">
              <h4 className="text-base font-serif font-bold text-white">Mythical Phoenix</h4>
              <p className="text-[11px] text-white/70">Faded tribal cover-up with organic pigments.</p>
            </div>
          </div>
        </div>

        {/* BEFORE IMAGE */}
        <div
          className="absolute inset-y-0 left-0 border-r border-accent overflow-hidden"
          style={{ width: `${sliderPosition}%` }}
        >
          <div className="w-[1000px] h-full relative" style={{ width: containerRef.current ? containerRef.current.clientWidth : '100%' }}>
            <img
              src="https://images.unsplash.com/photo-1568515045052-f9a854d7e4d3?auto=format&fit=crop&w=1200&q=80"
              alt="Before Tattoo Cover-Up"
              className="w-full h-full object-cover filter grayscale contrast-125 brightness-75"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent p-5 flex flex-col justify-between">
              <div className="flex justify-start">
                <span className="bg-secondary/90 text-foreground/80 border border-border text-[10px] font-semibold uppercase px-2.5 py-1 rounded backdrop-blur">
                  BEFORE
                </span>
              </div>
              <div className="max-w-xs">
                <h4 className="text-base font-serif font-bold text-foreground">Faded Symbol</h4>
                <p className="text-[11px] text-foreground/60 font-medium">Original faded pigment.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Divider Slider Handle Line */}
        <div
          className="absolute inset-y-0 w-px bg-accent/80 flex items-center justify-center pointer-events-none"
          style={{ left: `${sliderPosition}%` }}
        >
          <div className="w-8 h-8 rounded-full bg-accent text-white flex items-center justify-center shadow-lg border border-background scale-110">
            <SlidersHorizontal className="w-4 h-4" />
          </div>
        </div>
      </div>

      <div className="flex justify-between items-center mt-3 text-[10px] text-muted-foreground">
        <span>◀ Drag left for After</span>
        <span>Drag right for Before ▶</span>
      </div>
    </div>
  )
}
