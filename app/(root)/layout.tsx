import { Toaster } from '@/components/ui/toaster'
import StreamVideoProvider from '@/providers/StreamClientProvider'
import React, { ReactNode } from 'react'

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <main>
      <StreamVideoProvider>
        {children}
        <Toaster />
      </StreamVideoProvider>
    </main>
  )
}

export default RootLayout