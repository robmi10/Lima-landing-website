import { demoCta } from '../content/global'
import type { FinalCtaContent } from '../content/types'

type Variant = 'light' | 'dark'

const styles: Record<Variant, { card: string; headline: string; text: string; button: string }> = {
  light: {
    card: 'border-white/70 bg-white/75 shadow-[0_30px_80px_-50px_rgba(15,23,42,0.35)] backdrop-blur',
    headline: 'text-slate-950',
    text: 'text-slate-600',
    button: 'bg-slate-950 text-white hover:bg-slate-800',
  },
  dark: {
    card: 'border-slate-200 bg-slate-950 shadow-[0_35px_80px_-40px_rgba(15,23,42,0.8)]',
    headline: 'text-white',
    text: 'text-slate-300',
    button: 'bg-white text-black hover:-translate-y-0.5',
  },
}

function FinalCta({ headline, text, variant = 'light' }: FinalCtaContent & { variant?: Variant }) {
  const style = styles[variant]

  return (
    <section className="px-6 pb-16 pt-4 lg:px-8">
      <div className={`mx-auto max-w-4xl rounded-3xl border px-6 py-7 sm:px-8 ${style.card}`}>
        <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className={`text-2xl font-semibold tracking-tight ${style.headline}`}>{headline}</h2>
            <p className={`mt-2 max-w-xl text-sm leading-6 ${style.text}`}>{text}</p>
          </div>

          <a
            href={demoCta.href}
            className={`shrink-0 rounded-xl px-5 py-3 text-sm font-semibold transition ${style.button}`}
          >
            {demoCta.label}
          </a>
        </div>
      </div>
    </section>
  )
}

export default FinalCta
