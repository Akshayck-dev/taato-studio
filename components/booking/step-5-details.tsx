'use client'

import { useState } from 'react'
import { UploadCloud, Image as ImageIcon, X, CheckCircle2 } from 'lucide-react'

interface BookingStep5Props {
  bookingData: any
  setBookingData: (data: any) => void
}

export default function BookingStep5({ bookingData, setBookingData }: BookingStep5Props) {
  const [uploadedFiles, setUploadedFiles] = useState<Array<{ id: string; name: string; size: string }>>(
    bookingData.referenceFiles || [
      { id: '1', name: 'flower_inspiration_ref.png', size: '2.4 MB' },
    ]
  )

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0]
      const newFile = {
        id: Date.now().toString(),
        name: file.name,
        size: `${(file.size / (1024 * 1024)).toFixed(1)} MB`,
      }
      const updated = [...uploadedFiles, newFile]
      setUploadedFiles(updated)
      setBookingData({ ...bookingData, referenceFiles: updated })
    }
  }

  const handleRemoveFile = (id: string) => {
    const updated = uploadedFiles.filter((f) => f.id !== id)
    setUploadedFiles(updated)
    setBookingData({ ...bookingData, referenceFiles: updated })
  }

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl md:text-2xl font-serif font-bold mb-2">Tell us about your design</h2>
        <p className="text-sm text-foreground/60">Share your vision and upload reference images for your master artist.</p>
      </div>

      <div className="space-y-4">
        {/* Description Textarea */}
        <div>
          <label className="block text-sm font-semibold mb-2 text-foreground">
            Design Concept & Placement Details *
          </label>
          <textarea
            value={bookingData.details}
            onChange={(e) => setBookingData({ ...bookingData, details: e.target.value })}
            rows={5}
            className="w-full bg-background border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-foreground/40 focus:outline-none focus:border-accent resize-none text-sm"
            placeholder="Describe your tattoo idea, preferred style (e.g. Fine line, Realism), body location (e.g. Forearm, Ribs), and target size in inches."
          />
        </div>

        {/* Drag & Drop Reference Image Uploader */}
        <div>
          <label className="block text-sm font-semibold mb-2 text-foreground">
            Upload Reference Images / Stencils (Optional)
          </label>
          <div className="border-2 border-dashed border-border hover:border-accent/60 bg-background/50 rounded-xl p-6 text-center transition-all cursor-pointer relative group">
            <input
              type="file"
              accept="image/*"
              onChange={handleFileUpload}
              className="absolute inset-0 opacity-0 cursor-pointer w-full h-full z-10"
            />
            <div className="flex flex-col items-center justify-center space-y-2">
              <div className="p-3 bg-accent/10 text-accent rounded-full group-hover:scale-110 transition-transform">
                <UploadCloud className="w-6 h-6" />
              </div>
              <p className="text-sm font-semibold text-foreground">
                <span className="text-accent">Click to upload</span> or drag and drop images here
              </p>
              <p className="text-xs text-foreground/50">PNG, JPG, WEBP or GIF (Max 10MB per photo)</p>
            </div>
          </div>
        </div>

        {/* Uploaded Reference Files List */}
        {uploadedFiles.length > 0 && (
          <div className="space-y-2">
            <span className="text-xs font-semibold uppercase tracking-wider text-foreground/60">
              Attached References ({uploadedFiles.length})
            </span>
            <div className="space-y-2">
              {uploadedFiles.map((file) => (
                <div
                  key={file.id}
                  className="flex items-center justify-between bg-secondary/60 border border-border/80 rounded-lg p-3 text-xs"
                >
                  <div className="flex items-center gap-2.5 overflow-hidden">
                    <ImageIcon className="w-4 h-4 text-accent flex-shrink-0" />
                    <span className="font-semibold text-foreground truncate">{file.name}</span>
                    <span className="text-foreground/40">({file.size})</span>
                  </div>
                  <button
                    type="button"
                    onClick={() => handleRemoveFile(file.id)}
                    className="p-1 text-foreground/50 hover:text-destructive transition-colors"
                    title="Remove file"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tips Box */}
        <div className="bg-secondary/40 border border-border/70 rounded-lg p-4">
          <h3 className="font-semibold text-xs text-accent uppercase tracking-wider mb-2 flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4" /> Tips for a Great Custom Stencil
          </h3>
          <ul className="text-xs text-foreground/70 space-y-1.5 pl-1">
            <li>• Include reference photos of styles, shading, or line thicknesses you like.</li>
            <li>• Mention any existing tattoos nearby if planning a sleeve or cover-up.</li>
            <li>• Our artist will prepare digital mockups for your consultation.</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
