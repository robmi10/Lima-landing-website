import type { ReactNode } from 'react'

/** Centered eyebrow + display headline + optional lede, shared by every section. */
function SectionHeading({
  eyebrow,
  headline,
  text,
  children,
}: {
  eyebrow: string
  headline?: string
  text?: string
  children?: ReactNode
}) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <p className="text-xl font-normal text-slate-900 sm:text-2xl">{eyebrow}</p>
      {headline && (
        <h2 className="mt-5 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl lg:text-[2.6rem] lg:leading-[1.15]">
          {headline}
        </h2>
      )}
      {text && <p className="mx-auto mt-5 max-w-2xl text-sm leading-6 text-slate-600">{text}</p>}
      {children}
    </div>
  )
}

export default SectionHeading
