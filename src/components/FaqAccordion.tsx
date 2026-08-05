import type { FaqItem } from '../content/types'

function FaqAccordion({ title, items }: { title: string; items: FaqItem[] }) {
  return (
    <section className="rounded-3xl border border-white/70 bg-white/75 p-6 shadow-[0_30px_80px_-50px_rgba(15,23,42,0.35)] backdrop-blur md:p-8">
      <h2 className="text-2xl font-semibold tracking-tight text-slate-950">{title}</h2>

      <div className="mt-6 space-y-3">
        {items.map((item) => (
          <details key={item.question} className="group rounded-2xl border border-slate-200 bg-white px-5 py-4">
            <summary className="flex cursor-pointer items-center justify-between gap-4 text-base font-semibold text-slate-900 marker:content-['']">
              {item.question}
              <span className="text-xl leading-none text-slate-400 transition group-open:rotate-45">+</span>
            </summary>
            <p className="mt-3 text-sm leading-7 text-slate-600">{item.answer}</p>
          </details>
        ))}
      </div>
    </section>
  )
}

export default FaqAccordion
