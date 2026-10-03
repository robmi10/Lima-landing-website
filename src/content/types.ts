export type PageMeta = {
  title: string
  description: string
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
