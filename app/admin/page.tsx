'use client'

import AdminPanel from '@/components/admin/admin-panel'
import { BookingProvider } from '@/contexts/booking-context'
import { useRouter } from 'next/navigation'

export default function AdminPage() {
  const router = useRouter()

  return (
    <BookingProvider>
      <main className="min-h-screen bg-background">
        <AdminPanel onLogout={() => router.push('/')} />
      </main>
    </BookingProvider>
  )
}
