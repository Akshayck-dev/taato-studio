'use client'

import { useState } from 'react'
import { Calculator, Clock, Sparkles, ShieldCheck, ArrowRight } from 'lucide-react'
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
    <div className="bg-card border border-border rounded-xl p-5 md:p-8">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2 rounded-lg bg-accent/8 text-accent">
          <Calculator className="w-5 h-5" />
        </div>
        <div>
          <span className="text-[10px] uppercase tracking-wider text-accent font-bold">Interactive Tool</span>
          <h3 className="text-lg font-serif font-bold text-foreground">Estimate Calculator</h3>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Inputs */}
        <div className="lg:col-span-7 space-y-5">
          {/* Placement Selection */}
          <div>
            <label className="block text-[11px] font-semibold uppercase tracking-wider text-muted-foreground mb-2">
              1. Select Placement Area
            </label>
            <div className="flex flex-wrap gap-1.5">
              {placements.map((p) => (
                <button
                  key={p.id}
                  type="button"
                  onClick={() => setSelectedPlacement(p.id)}
                  className={`px-3.5 py-2 rounded-lg text-xs font-semibold transition-all ${
                    selectedPlacement === p.id
                      ? 'bg-accent text-white'
                      : 'bg-secondary/40 text-muted-foreground border border-border/80 hover:border-accent/40'
                  }`}
                >
                  {p.label}
                </button>
              ))}
            </div>
          </div>

          {/* Size Slider */}
          <div>
            <div className="flex justify-between items-center mb-2">
              <label className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
                2. Approximate Size (Inches)
              </label>
              <span className="text-xs font-serif font-bold text-accent px-2 py-0.5 bg-accent/10 rounded border border-accent/20">
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
              className="w-full h-1 bg-secondary rounded-lg appearance-none cursor-pointer accent-accent"
            />
            <div className="flex justify-between text-[10px] text-muted-foreground mt-1.5 font-mono">
              <span>Small (2")</span>
              <span>Medium (6")</span>
              <span>Large (10")</span>
              <span>Full Piece (14")</span>
            </div>
          </div>

          {/* Style Selector */}
          <div>
            <label className="block text-[11px] font-semibold uppercase tracking-wider text-muted-foreground mb-2">
              3. Artistic Style Complexity
            </label>
            <div className="flex flex-wrap gap-1.5">
              {styles.map((s) => (
                <button
                  key={s.id}
                  type="button"
                  onClick={() => setSelectedStyle(s.id)}
                  className={`px-3.5 py-2 rounded-lg text-xs font-semibold transition-all ${
                    selectedStyle === s.id
                      ? 'bg-accent text-white'
                      : 'bg-secondary/40 text-muted-foreground border border-border/80 hover:border-accent/40'
                  }`}
                >
                  {s.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Right Live Estimate Display Box */}
        <div className="lg:col-span-5 bg-secondary/20 border border-border rounded-xl p-5 flex flex-col justify-between self-stretch">
          <div className="space-y-5">
            <div className="flex justify-between items-start border-b border-border/40 pb-4">
              <div>
                <span className="text-[10px] text-muted-foreground uppercase tracking-wider">Estimated Price Range</span>
                <div className="text-2xl font-serif font-bold text-accent mt-0.5">
                  ${minCost} - ${maxCost}
                </div>
              </div>
              <span className="bg-accent/8 text-accent text-[10px] font-semibold px-2 py-0.5 rounded border border-accent/15">
                Transparent Quote
              </span>
            </div>

            <div className="space-y-2.5 text-xs text-muted-foreground">
              <div className="flex items-center justify-between">
                <span className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-accent" /> Estimated Session Time:
                </span>
                <span className="font-semibold text-foreground">{calculatedHours} - {calculatedHours + 1} Hours</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-accent" /> Custom Stencil Fee:
                </span>
                <span className="font-semibold text-emerald-400">Included ($0)</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-accent" /> 90-Day Touch-Up:
                </span>
                <span className="font-semibold text-emerald-400">Included ($0)</span>
              </div>
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-border/40">
            <Button
              onClick={() =>
                onBookEstimate?.({
                  placement: placementObj.label,
                  size: sizeInches,
                  style: styleObj.label,
                  estimate: `$${minCost} - $${maxCost}`,
                })
              }
              className="w-full bg-accent hover:bg-[#F5C74F] text-white font-medium h-10 px-5 text-sm"
            >
              Book With This Estimate <ArrowRight className="w-4 h-4 ml-1.5" />
            </Button>
            <p className="text-[10px] text-center text-muted-foreground/60 mt-2">
              Final quote confirmed during your 1-on-1 stencil fitting.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
