import type { ReactNode } from 'react'
import type { Feature } from '../content/types'

export function PageBody({ children }: { children: ReactNode }) {
  return <div className="mx-auto max-w-4xl space-y-6 px-6 pb-16 lg:px-8">{children}</div>
}

export function ContentSection({ title, text, children }: Feature & { children?: ReactNode }) {
  return (
    <section className="rounded-3xl border border-white/70 bg-white/75 p-6 shadow-[0_30px_80px_-50px_rgba(15,23,42,0.35)] backdrop-blur md:p-8">
      <h2 className="text-2xl font-semibold tracking-tight text-slate-950">{title}</h2>
      <p className="mt-4 text-base leading-7 text-slate-600">{text}</p>
      {children}
    </section>
  )
}

export function FeatureGrid({ items, columns = 3 }: { items: Feature[]; columns?: 2 | 3 }) {
  return (
    <div className={`mt-6 grid gap-4 sm:grid-cols-2 ${columns === 3 ? 'lg:grid-cols-3' : ''}`}>
      {items.map((item) => (
        <div key={item.title} className="rounded-2xl border border-slate-200 bg-white p-5">
          <h3 className="text-base font-semibold text-slate-900">{item.title}</h3>
          <p className="mt-2 text-sm leading-6 text-slate-600">{item.text}</p>
        </div>
      ))}
    </div>
  )
}

export function FeatureList({ items }: { items: Feature[] }) {
  return (
    <ul className="mt-6 space-y-3">
      {items.map((item) => (
        <li key={item.title} className="flex items-start gap-3 text-sm leading-6 text-slate-600">
          <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-slate-950" />
          <span>
            <span className="font-semibold text-slate-900">{item.title}:</span> {item.text}
          </span>
        </li>
      ))}
    </ul>
  )
}
