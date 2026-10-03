import { useEffect, useRef, useState } from 'react'
import { process, sections } from '../content/site'

/** Where in the viewport a step counts as "reached". 0.55 = just below centre. */
const TRIGGER = 0.55

function ProcessSection() {
  const listRef = useRef<HTMLOListElement>(null)
  const trackRef = useRef<HTMLDivElement>(null)
  const fillRef = useRef<HTMLDivElement>(null)
  const markerRefs = useRef<(HTMLSpanElement | null)[]>([])

  // Only the step states live in React; the fill is written straight to the DOM
  // so scrolling never waits on a re-render.
  const [reached, setReached] = useState(0)

  useEffect(() => {
    const list = listRef.current
    const track = trackRef.current
    const fill = fillRef.current
    if (!list || !track || !fill) return

    let frame = 0

    /** Span the track from the first marker's centre to the last one's, so the
     *  line neither starts above step 01 nor runs on past the final step.
     *  Measured off the list's own box — each <li> is positioned, so offsetTop
     *  would report a position inside the item rather than inside the list. */
    function layout() {
      const markers = markerRefs.current.filter(Boolean) as HTMLSpanElement[]
      const first = markers[0]
      const last = markers[markers.length - 1]
      if (!first || !last || !track || !list) return

      const listTop = list.getBoundingClientRect().top
      const firstRect = first.getBoundingClientRect()
      const lastRect = last.getBoundingClientRect()

      const top = firstRect.top - listTop + firstRect.height / 2
      const bottom = lastRect.top - listTop + lastRect.height / 2
      track.style.top = `${top}px`
      track.style.height = `${Math.max(0, bottom - top)}px`
    }

    function update() {
      frame = 0
      if (!track || !fill) return

      const rect = track.getBoundingClientRect()
      const anchor = window.innerHeight * TRIGGER
      const travelled = rect.height === 0 ? 0 : (anchor - rect.top) / rect.height
      const progress = Math.min(1, Math.max(0, travelled))

      fill.style.transform = `scaleY(${progress})`

      let passed = 0
      for (const marker of markerRefs.current) {
        if (!marker) continue
        const markerRect = marker.getBoundingClientRect()
        if (markerRect.top + markerRect.height / 2 <= anchor) passed += 1
      }
      // React bails out when the count is unchanged, so this is a no-op on
      // almost every frame.
      setReached(passed)
    }

    function onScroll() {
      if (!frame) frame = window.requestAnimationFrame(update)
    }

    function onResize() {
      layout()
      onScroll()
    }

    layout()
    update()

    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onResize)

    // Copy reflow (font swap, wrapping change) moves the markers too.
    const observer = new ResizeObserver(onResize)
    observer.observe(list)

    return () => {
      if (frame) window.cancelAnimationFrame(frame)
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onResize)
      observer.disconnect()
    }
  }, [])

  return (
    <section id={sections.process} className="scroll-mt-24 bg-white px-6 py-20 lg:px-8 lg:py-28">
      <div className="mx-auto grid max-w-5xl gap-12 lg:grid-cols-2 lg:gap-16">
        <div className="lg:sticky lg:top-32 lg:self-start">
          <span className="inline-block rounded-full border border-slate-900 px-3 py-1 text-xs text-slate-900">
            {process.eyebrow}
          </span>
          <h2 className="mt-5 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
            {process.headline}
          </h2>
          <p className="mt-5 max-w-md text-sm leading-6 text-slate-600">{process.text}</p>
        </div>

        <ol ref={listRef} className="relative">
          {/* Positioned by layout() between the first and last marker centres. */}
          <div ref={trackRef} aria-hidden className="absolute left-[1.4rem] w-px bg-slate-200 sm:left-[1.75rem]">
            <div
              ref={fillRef}
              className="h-full w-px origin-top bg-slate-950 will-change-transform"
              style={{ transform: 'scaleY(0)' }}
            />
          </div>

          {process.steps.map((step, index) => {
            const active = index < reached

            return (
              <li key={step.number} className="relative flex gap-5 pb-16 last:pb-0 sm:gap-7">
                <span
                  ref={(node) => {
                    markerRefs.current[index] = node
                  }}
                  aria-hidden
                  className={`relative z-10 flex h-11 w-11 shrink-0 items-center justify-center rounded-full border text-sm font-semibold transition-colors duration-300 sm:h-14 sm:w-14 ${
                    active
                      ? 'border-slate-950 bg-slate-950 text-white'
                      : 'border-slate-200 bg-white text-slate-400'
                  }`}
                >
                  {step.number}
                </span>

                <div className="pt-1 sm:pt-3">
                  <h3
                    className={`text-lg font-semibold tracking-tight transition-colors duration-300 sm:text-xl ${
                      active ? 'text-slate-950' : 'text-slate-400'
                    }`}
                  >
                    {step.title}
                  </h3>
                  <p className="mt-2 max-w-md text-sm leading-6 text-slate-600">{step.text}</p>
                </div>
              </li>
            )
          })}
        </ol>
      </div>
    </section>
  )
}

export default ProcessSection
