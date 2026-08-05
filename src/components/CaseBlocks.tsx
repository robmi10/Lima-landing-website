import type { Stat } from '../content/types'

export function StatGrid({ items }: { items: Stat[] }) {
  return (
    <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {items.map((stat) => (
        <div key={stat.label} className="rounded-2xl border border-slate-200 bg-white p-5">
          <p className="text-3xl font-semibold tracking-tight text-slate-950">{stat.value}</p>
          <p className="mt-2 text-sm leading-6 text-slate-600">{stat.label}</p>
        </div>
      ))}
    </div>
  )
}

export function PullQuote({ quote, attribution }: { quote: string; attribution: string }) {
  return (
    <figure className="rounded-3xl border border-white/70 bg-white/75 p-6 shadow-[0_30px_80px_-50px_rgba(15,23,42,0.35)] backdrop-blur md:p-8">
      <blockquote className="text-lg leading-8 text-slate-900">“{quote}”</blockquote>
      <figcaption className="mt-4 text-sm text-slate-500">— {attribution}</figcaption>
    </figure>
  )
}
