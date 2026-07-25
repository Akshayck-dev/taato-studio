'use client'

import { useState } from 'react'
import { SlidersHorizontal } from 'lucide-react'

export default function CoverupSlider() {
  const [sliderPosition, setSliderPosition] = useState(50)
  const [isDragging, setIsDragging] = useState(false)

  const handleMove = (clientX: number, rect: DOMRect) => {
    const x = clientX - rect.left
    let percentage = (x / rect.width) * 100
    if (percentage < 0) percentage = 0
    if (percentage > 100) percentage = 100
    setSliderPosition(percentage)
  }

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    handleMove(e.touches[0].clientX, rect)
  }

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging) return
    const rect = e.currentTarget.getBoundingClientRect()
    handleMove(e.clientX, rect)
  }

  return (
    <div className="bg-card border border-border rounded-2xl p-6 md:p-10 my-12 relative overflow-hidden">
      <div className="text-center mb-8">
        <span className="text-xs font-bold uppercase tracking-widest text-accent bg-accent/10 px-3 py-1 rounded-full border border-accent/20 mb-2 inline-block">
          Transformations Showcase
        </span>
        <h3 className="text-2xl md:text-4xl font-serif font-bold text-foreground mb-2">
          Before & After Cover-Up Magic
        </h3>
        <p className="text-sm text-foreground/60 max-w-xl mx-auto">
          Drag the slider left or right to see how our master artists transform faded or unwanted ink into vibrant new artwork.
        </p>
      </div>

      {/* Interactive Split-Screen Slider Box */}
      <div
        className="relative w-full h-[340px] md:h-[450px] rounded-xl overflow-hidden cursor-ew-resize select-none border border-border shadow-2xl"
        onMouseDown={() => setIsDragging(true)}
        onMouseUp={() => setIsDragging(false)}
        onMouseLeave={() => setIsDragging(false)}
        onMouseMove={handleMouseMove}
        onTouchMove={handleTouchMove}
      >
        {/* AFTER IMAGE (Fresh Masterpiece Cover-up background) */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1611501275019-9b5cda994e8d?auto=format&fit=crop&w=1200&q=80"
            alt="After Tattoo Cover-Up"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent p-8 flex flex-col justify-between">
            <div className="flex justify-end">
              <span className="bg-accent text-accent-foreground text-xs font-bold uppercase px-3 py-1.5 rounded-full shadow-lg">
                ✨ AFTER: Fresh Custom Realism
              </span>
            </div>

            <div className="space-y-1 max-w-sm">
              <span className="text-xs uppercase text-accent font-bold tracking-widest">Masterpiece Cover-Up</span>
              <h4 className="text-2xl font-serif font-bold text-white">Mythical Phoenix & Dragon</h4>
              <p className="text-xs text-white/80">Covered 12-year-old faded tribal ink with full EU-REACH certified vegan pigments.</p>
            </div>
          </div>
        </div>

        {/* BEFORE IMAGE (Faded Old Tattoo layer clipped by slider position) */}
        <div
          className="absolute inset-y-0 left-0 border-r-2 border-accent overflow-hidden"
          style={{ width: `${sliderPosition}%` }}
        >
          <div className="w-[1000px] h-full relative">
            <img
              src="https://images.unsplash.com/photo-1568515045052-f9a854d7e4d3?auto=format&fit=crop&w=1200&q=80"
              alt="Before Tattoo Cover-Up"
              className="w-full h-full object-cover filter grayscale contrast-125 brightness-75"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent p-8 flex flex-col justify-between">
              <div className="flex justify-start">
                <span className="bg-secondary/90 text-foreground/80 border border-border text-xs font-bold uppercase px-3 py-1.5 rounded-full backdrop-blur">
                  BEFORE: Faded 12-Year Old Ink
                </span>
              </div>

              <div className="space-y-1 max-w-sm whitespace-nowrap">
                <span className="text-xs uppercase text-foreground/70 font-bold tracking-widest">Original State</span>
                <h4 className="text-2xl font-serif font-bold text-foreground">Faded Tribal Symbol</h4>
                <p className="text-xs text-foreground/60">Faded pigment with scarring and blurred lines.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Divider Slider Handle Line */}
        <div
          className="absolute inset-y-0 w-1 bg-accent shadow-lg shadow-accent/50 flex items-center justify-center pointer-events-none"
          style={{ left: `${sliderPosition}%` }}
        >
          <div className="w-10 h-10 rounded-full bg-accent text-accent-foreground flex items-center justify-center shadow-xl border-2 border-background scale-110">
            <SlidersHorizontal className="w-5 h-5" />
          </div>
        </div>
      </div>

      <div className="flex justify-between items-center mt-4 text-xs text-foreground/50">
        <span>◀ Drag left to reveal After</span>
        <span>Drag right to reveal Before ▶</span>
      </div>
    </div>
  )
}
