'use client'

import { ShieldCheck, Heart, CalendarCheck, CheckCircle2, Download, Package } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'

const healingSteps = [
  {
    day: 'Days 1–3',
    title: 'Initial Protection',
    desc: 'Keep the breathable Derm Shield wrap intact. Your skin stays sealed against microbes while natural plasma begins recovery.',
  },
  {
    day: 'Days 4–7',
    title: 'Gentle Cleansing',
    desc: 'Remove wrap under warm water, clean with fragrance-free soap, and apply ointment sparingly 2-3 times daily.',
  },
  {
    day: 'Days 8–14',
    title: 'Peeling & Renewal',
    desc: 'Light flaking and itching is normal. Apply light lotion. Never scratch or pick the healing epidermal layer.',
  },
  {
    day: 'Days 15–90',
    title: 'Locked-in Pigment',
    desc: 'Deep skin layers continue healing. Use sunscreen (SPF 30+) daily to protect colors and fine linework from fading.',
  },
]

const recommendedProducts = [
  {
    name: 'Ink Balm Wash',
    type: 'Hypoallergenic Cleanser',
    desc: 'Fragrance-free, antibacterial wash specifically formulated for fresh tattoos.',
    price: '$18',
  },
  {
    name: 'Botanical Balm',
    type: 'Organic Moisturizer Balm',
    desc: 'Contains shea butter and calendula to soothe skin and speed recovery.',
    price: '$22',
  },
  {
    name: 'UV Guard Sunscreen',
    type: 'SPF 50+ Daily Protection',
    desc: 'Mineral sunscreen designed to protect healed ink from solar fading.',
    price: '$24',
  },
]

const aftercareFaqs = [
  {
    q: 'Can I exercise or go to the gym?',
    a: 'Avoid heavy sweating and friction on the tattooed area for the first 7-10 days. Bacteria in gym environments can cause infections.',
  },
  {
    q: 'Can I swim or take a bath?',
    a: 'Do not submerge your tattoo in water (pools, ocean, baths) for at least 2-3 weeks. Short showers are fine.',
  },
  {
    q: 'What should I do if it feels extremely itchy?',
    a: 'Do not scratch. Apply a very thin layer of fragrance-free lotion or gently tap the area to soothe the itch.',
  },
]

export default function AftercarePage() {
  return (
    <div className="space-y-16 lg:space-y-24 py-6">
      {/* Hero Header */}
      <section className="px-4 md:px-8 py-16 md:py-24 lg:py-28 text-center max-w-3xl mx-auto">
        <span className="text-xs font-medium text-accent tracking-wider uppercase">Ink Longevity</span>
        <h1 className="mt-3 text-foreground font-serif text-3xl md:text-5xl font-bold">Tattoo Healing & Aftercare</h1>
        <p className="mt-4 text-muted-foreground text-sm md:text-base leading-relaxed">
          Proper aftercare represents 50% of the final tattoo result. Follow our professional clinical guide to ensure your masterpiece heals perfectly.
        </p>
      </section>

      {/* Healing Timeline */}
      <section className="px-4 md:px-8 py-16 md:py-24 lg:py-28">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-xl md:text-2xl font-serif font-bold text-foreground">Healing Timeline</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
            {healingSteps.map((step, idx) => (
              <div key={idx} className="bg-card border border-border rounded-xl p-5 relative group">
                <span className="text-[10px] font-bold uppercase tracking-wider text-accent bg-accent/8 px-2.5 py-0.5 rounded border border-accent/15">
                  {step.day}
                </span>
                <h3 className="text-base font-semibold text-foreground mt-4 mb-2">{step.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Daily Instructions & Products */}
      <section className="px-4 md:px-8 py-16 md:py-24 lg:py-28 bg-secondary/5 border-y border-border/40">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Instructions */}
          <div className="lg:col-span-6 space-y-6">
            <h2 className="text-xl md:text-2xl font-serif font-bold text-foreground">Instructions & Guidelines</h2>
            <ul className="space-y-4 text-sm text-muted-foreground">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                <span><strong>Always wash your hands</strong> thoroughly with soap and water before touching your healing tattoo.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                <span><strong>Pat dry</strong> with a clean disposable paper towel. Do not rub or use dirty bath towels.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                <span><strong>Wear loose clothing</strong> over the area to prevent friction and sweat buildup.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                <span><strong>Avoid direct sun exposure</strong> on the healing area for at least 4 weeks.</span>
              </li>
            </ul>

            <div className="pt-2">
              <Button
                variant="outline"
                className="border-border text-foreground hover:bg-secondary font-medium h-10 px-5 text-sm"
                onClick={() => alert('Downloading official Aftercare PDF Guide...')}
              >
                <Download className="w-4 h-4 mr-2 text-accent" /> Download Detailed PDF Guide
              </Button>
            </div>
          </div>

          {/* Recommended Products */}
          <div className="lg:col-span-6 space-y-6">
            <h2 className="text-xl md:text-2xl font-serif font-bold text-foreground">Recommended Studio Products</h2>
            <div className="space-y-3">
              {recommendedProducts.map((p, i) => (
                <div key={i} className="bg-card border border-border rounded-xl p-4 flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-secondary rounded-lg">
                      <Package className="w-4 h-4 text-accent" />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-foreground">{p.name}</h4>
                      <p className="text-[11px] text-muted-foreground">{p.type} · {p.desc}</p>
                    </div>
                  </div>
                  <span className="font-semibold text-sm text-foreground">{p.price}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Aftercare FAQ */}
      <section className="px-4 md:px-8 py-16 md:py-24 lg:py-28 max-w-3xl mx-auto">
        <h2 className="text-xl md:text-2xl font-serif font-bold text-foreground text-center mb-8">Aftercare FAQ</h2>
        <div className="space-y-4">
          {aftercareFaqs.map((faq, i) => (
            <div key={i} className="border-b border-border/40 pb-4">
              <h4 className="text-sm font-semibold text-foreground mb-1.5">{faq.q}</h4>
              <p className="text-xs text-muted-foreground leading-relaxed">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
