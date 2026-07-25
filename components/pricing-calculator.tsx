'use client'

import { useState } from 'react'
import { Calculator, Clock, DollarSign, Sparkles, ShieldCheck, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

interface PricingCalculatorProps {
  onBookEstimate?: (details: { placement: string; size: number; style: string; estimate: string }) => void
}

const placements = [
  { id: 'wrist', label: 'Wrist / Ankle', factor: 1.0 },
  { id: 'forearm', label: 'Forearm / Bicep', factor: 1.2 },
  { id: 'ribs', label: 'Ribs / Chest', factor: 1.4 },
  { id: 'back', label: 'Full Back / Chest', factor: 1.8 },
  { id: 'sleeve', label: 'Full Sleeve', factor: 2.5 },
]

const styles = [
  { id: 'minimalist', label: 'Fine Line / Minimalist', basePerHour: 150, rate: 1.0 },
  { id: 'black-grey', label: 'Black & Grey Realism', basePerHour: 180, rate: 1.3 },
  { id: 'irezumi', label: 'Japanese Irezumi', basePerHour: 190, rate: 1.4 },
  { id: 'color', label: 'Full Color Realism', basePerHour: 200, rate: 1.5 },
]

export default function PricingCalculator({ onBookEstimate }: PricingCalculatorProps) {
  const [selectedPlacement, setSelectedPlacement] = useState(placements[1].id)
  const [sizeInches, setSizeInches] = useState(4)
  const [selectedStyle, setSelectedStyle] = useState(styles[0].id)

  const placementObj = placements.find((p) => p.id === selectedPlacement) || placements[1]
  const styleObj = styles.find((s) => s.id === selectedStyle) || styles[0]

  // Dynamic estimate calculation
  const calculatedHours = Math.max(1, Math.round(sizeInches * placementObj.factor * 0.75))
  const minCost = Math.round(calculatedHours * styleObj.basePerHour)
  const maxCost = Math.round(minCost * 1.25)

  return (
    <div className="bg-card border border-border rounded-2xl p-6 md:p-10 shadow-xl relative overflow-hidden">
      {/* Background Accent */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-accent/5 rounded-full blur-3xl pointer-events-none" />

      <div className="flex items-center gap-3 mb-8">
        <div className="p-3 rounded-xl bg-accent/10 text-accent border border-accent/20">
          <Calculator className="w-6 h-6" />
        </div>
        <div>
          <span className="text-xs uppercase tracking-wider text-accent font-bold">Interactive Tool</span>
          <h3 className="text-2xl font-serif font-bold text-foreground">Instant Estimate Calculator</h3>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Inputs */}
        <div className="lg:col-span-7 space-y-6">
          {/* Placement Selection */}
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-foreground/70 mb-3">
              1. Select Placement Area
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {placements.map((p) => (
                <button
                  key={p.id}
                  type="button"
                  onClick={() => setSelectedPlacement(p.id)}
                  className={`p-3 rounded-lg text-xs font-semibold text-left transition-all ${
                    selectedPlacement === p.id
                      ? 'bg-accent text-accent-foreground shadow-md shadow-accent/20'
                      : 'bg-secondary/60 text-foreground/70 border border-border/80 hover:border-accent/40'
                  }`}
                >
                  {p.label}
                </button>
              ))}
            </div>
          </div>

          {/* Size Slider */}
          <div>
            <div className="flex justify-between items-center mb-3">
              <label className="text-xs font-semibold uppercase tracking-wider text-foreground/70">
                2. Approximate Size (Inches)
              </label>
              <span className="text-sm font-serif font-bold text-accent px-3 py-1 bg-accent/10 rounded-md border border-accent/20">
                {sizeInches} inches ({Math.round(sizeInches * 2.54)} cm)
              </span>
            </div>
            <input
              type="range"
              min="2"
              max="14"
              step="1"
              value={sizeInches}
              onChange={(e) => setSizeInches(Number(e.target.value))}
              className="w-full h-2 bg-secondary rounded-lg appearance-none cursor-pointer accent-accent"
            />
            <div className="flex justify-between text-[11px] text-foreground/40 mt-1 font-mono">
              <span>Small (2")</span>
              <span>Medium (6")</span>
              <span>Large (10")</span>
              <span>Full Piece (14")</span>
            </div>
          </div>

          {/* Style Selector */}
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-foreground/70 mb-3">
              3. Artistic Style Complexity
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {styles.map((s) => (
                <button
                  key={s.id}
                  type="button"
                  onClick={() => setSelectedStyle(s.id)}
                  className={`p-3 rounded-lg text-xs font-semibold text-left transition-all ${
                    selectedStyle === s.id
                      ? 'bg-accent text-accent-foreground shadow-md shadow-accent/20'
                      : 'bg-secondary/60 text-foreground/70 border border-border/80 hover:border-accent/40'
                  }`}
                >
                  {s.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Right Live Estimate Display Box */}
        <div className="lg:col-span-5 bg-gradient-to-br from-secondary/80 to-background border border-accent/30 rounded-xl p-6 relative flex flex-col justify-between">
          <div className="space-y-6">
            <div className="flex justify-between items-start border-b border-border/60 pb-4">
              <div>
                <span className="text-xs text-foreground/50 uppercase tracking-wider">Estimated Price Range</span>
                <div className="text-3xl font-serif font-bold text-accent mt-1">
                  ${minCost} - ${maxCost}
                </div>
              </div>
              <span className="bg-accent/10 text-accent text-[11px] font-bold px-2.5 py-1 rounded border border-accent/20">
                Transparent Quote
              </span>
            </div>

            <div className="space-y-3 text-xs text-foreground/70">
              <div className="flex items-center justify-between">
                <span className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-accent" /> Estimated Session Time:
                </span>
                <span className="font-bold text-foreground">{calculatedHours} - {calculatedHours + 1} Hours</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-accent" /> Custom Stencil Fee:
                </span>
                <span className="font-bold text-emerald-400">Included ($0)</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-accent" /> 90-Day Touch-Up:
                </span>
                <span className="font-bold text-emerald-400">Included ($0)</span>
              </div>
            </div>
          </div>

          <div className="mt-8 pt-4 border-t border-border/60">
            <Button
              onClick={() =>
                onBookEstimate?.({
                  placement: placementObj.label,
                  size: sizeInches,
                  style: styleObj.label,
                  estimate: `$${minCost} - $${maxCost}`,
                })
              }
              className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-semibold py-5 rounded-lg text-sm"
            >
              Book With This Estimate <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
            <p className="text-[11px] text-center text-foreground/50 mt-2">
              Final quote confirmed during your 1-on-1 stencil fitting.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
