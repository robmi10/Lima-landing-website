import { useState } from 'react'
import Accordion from '../components/Accordion'
import { faqGroups } from '../content/faq'
import { faq, sections } from '../content/site'

/** The dark rotating swirl mark above the FAQ headline. */
function SwirlMark() {
  return (
    <svg viewBox="0 0 100 100" aria-hidden className="h-20 w-20 text-slate-800">
      <defs>
        <linearGradient id="swirl" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="currentColor" />
          <stop offset="100%" stopColor="currentColor" stopOpacity="0.15" />
        </linearGradient>
      </defs>
      {[0, 60, 120, 180, 240, 300].map((angle) => (
        <path
          key={angle}
          d="M50 12c18 6 26 20 22 34"
          fill="none"
          stroke="url(#swirl)"
          strokeWidth="7"
          strokeLinecap="round"
          transform={`rotate(${angle} 50 50)`}
        />
      ))}
    </svg>
  )
}

function FaqSection() {
  const [active, setActive] = useState(0)
  const [expanded, setExpanded] = useState(false)

  const group = faqGroups[active]
  const items = expanded ? group.items : group.items.slice(0, faq.visibleItems)
  const hidden = group.items.length - items.length

  function selectGroup(index: number) {
    setActive(index)
    setExpanded(false)
  }

  return (
    <section id={sections.faq} className="scroll-mt-24 bg-[#fafbff] px-6 py-20 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-2xl">
        <div className="flex flex-col items-center text-center">
          <SwirlMark />
          <h2 className="mt-6 max-w-xs text-3xl tracking-tight text-slate-950 sm:text-4xl">{faq.eyebrow}</h2>
        </div>

        <div className="mt-8 flex flex-wrap items-center justify-center divide-x divide-slate-300 text-xs">
          {faqGroups.map((item, index) => (
            <button
              key={item.title}
              type="button"
              onClick={() => selectGroup(index)}
              aria-pressed={index === active}
              className={`px-4 transition ${
                index === active ? 'font-semibold text-slate-950' : 'text-slate-400 hover:text-slate-700'
              }`}
            >
              {item.title}
            </button>
          ))}
        </div>

        <Accordion items={items} className="mt-8" />

        {hidden > 0 && (
          <div className="mt-8 text-center">
            <button
              type="button"
              onClick={() => setExpanded(true)}
              className="inline-flex items-center gap-2 rounded-full border border-slate-300 px-5 py-2 text-xs text-slate-700 transition hover:border-slate-400 hover:text-slate-950"
            >
              Show all {group.items.length} questions
              <span aria-hidden className="text-[0.6rem]">
                ▾
              </span>
            </button>
          </div>
        )}
      </div>
    </section>
  )
}

export default FaqSection
