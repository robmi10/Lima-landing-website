import { skillsBasedHiringArticle } from './skills-based-hiring'
import type { Article, ArticleCard } from './types'

const articles: Article[] = [skillsBasedHiringArticle]

export function getAllArticles(): Article[] {
  return [...articles].sort((a, b) => b.date.localeCompare(a.date))
}

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find((article) => article.slug === slug)
}

export function getArticleCards(): ArticleCard[] {
  return getAllArticles().map((article) => ({
    slug: article.slug,
    category: article.category,
    title: article.title,
    dek: article.dek,
    date: article.date,
    to: `/resources/articles/${article.slug}`,
  }))
}

export type { Article, ArticleCard } from './types'
