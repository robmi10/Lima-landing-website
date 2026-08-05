export type PageMeta = {
  title: string
  description: string
}

export type Cta = {
  label: string
  href: string
}

export type Hero = {
  eyebrow?: string
  headline: string
  text: string
  secondaryCta?: Cta
}

export type Feature = {
  title: string
  text: string
}

export type FaqItem = {
  question: string
  answer: string
}

export type FaqGroup = {
  title: string
  items: FaqItem[]
}

export type FinalCtaContent = {
  headline: string
  text: string
}

export type Stat = {
  label: string
  value: string
}

export type PageContent = {
  meta: PageMeta
  hero: Hero
  faq?: FaqItem[]
  finalCta: FinalCtaContent
}
