import { useId, useState } from 'react'
import type { FaqItem } from '../content/types'

/**
 * Rule-separated disclosure list used by the Platform and FAQ sections.
 *
 * Built from buttons rather than <details> so the panel can animate both ways:
 * a closing <details> hides its content immediately, which makes collapsing
 * snap. The open panel is a grid row transitioning 0fr to 1fr, which animates
 * to the content's natural height without measuring it.
 */
function Accordion({ items, className = '' }: { items: FaqItem[]; className?: string }) {
  const [open, setOpen] = useState<string[]>([])
  const id = useId()

  function toggle(question: string) {
    setOpen((current) =>
      current.includes(question) ? current.filter((q) => q !== question) : [...current, question],
    )
  }

  return (
    <div className={className}>
      {items.map((item, index) => {
        const isOpen = open.includes(item.question)
        const panelId = `${id}-panel-${index}`
        const buttonId = `${id}-button-${index}`

        return (
          <div key={item.question} className="border-b border-slate-200">
            <h3>
              <button
                type="button"
                id={buttonId}
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => toggle(item.question)}
                className="flex w-full items-center justify-between gap-6 rounded-sm py-4 text-left text-sm text-slate-900 transition-colors hover:text-slate-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-400 focus-visible:ring-offset-2"
              >
                {item.question}
                <span
                  aria-hidden
                  className={`shrink-0 text-lg font-light leading-none text-slate-400 transition-transform duration-300 ease-out ${
                    isOpen ? 'rotate-45' : ''
                  }`}
                >
                  +
                </span>
              </button>
            </h3>

            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              className={`grid transition-[grid-template-rows,opacity] duration-300 ease-out motion-reduce:transition-none ${
                isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
              }`}
            >
              <div className="overflow-hidden">
                <p className="pb-5 pr-10 text-sm leading-6 text-slate-600">{item.answer}</p>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default Accordion
