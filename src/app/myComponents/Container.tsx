import { ReactNode } from 'react'

export default function Container({ children }: { children: ReactNode }) {
  return (
    <div className="w-full mx-auto px-2 sm:px-6 lg:px-8" style={{ maxWidth: 'var(--max-width)' }}>
      {children}
    </div>
  )
}