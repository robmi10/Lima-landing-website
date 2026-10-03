import { skillsBasedHiringArticle } from './skills-based-hiring'
import type { Article, ArticleCard } from './types'

const articles: Article[] = [skillsBasedHiringArticle]

export function getAllArticles(): Article[] {
  return [...articles].sort((a, b) => b.date.localeCompare(a.date))
}

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find((article) => article.slug === slug)
}

/** Rounded reading time at 200 words per minute, so cards stay in sync with the copy. */
function readMinutes(article: Article): number {
  const words = article.sections.reduce(
    (total, section) => total + section.paragraphs.join(' ').split(/\s+/).length,
    0,
  )
  return Math.max(1, Math.round(words / 200))
}

export function getArticleCards(): ArticleCard[] {
  return getAllArticles().map((article) => ({
    slug: article.slug,
    category: article.category,
    title: article.title,
    dek: article.dek,
    date: article.date,
    readMinutes: readMinutes(article),
    heroImage: article.heroImage,
    heroAlt: article.heroAlt,
    to: `/resources/articles/${article.slug}`,
  }))
}

export type { Article, ArticleCard } from './types'
