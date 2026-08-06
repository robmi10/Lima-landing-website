import type { FaqItem, FinalCtaContent, PageMeta } from '../types'

export type ArticleSection = {
  heading?: string
  paragraphs: string[]
}

export type Article = {
  slug: string
  category: string
  meta: PageMeta
  title: string
  dek: string
  date: string
  heroImage: string
  heroAlt: string
  sections: ArticleSection[]
  takeaway?: {
    title: string
    text: string
  }
  reflection?: {
    title: string
    text: string
  }
  faq?: FaqItem[]
  finalCta?: FinalCtaContent
}

export type ArticleCard = {
  slug: string
  category: string
  title: string
  dek: string
  date: string
  to: string
}
