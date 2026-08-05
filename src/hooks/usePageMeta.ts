import { useEffect } from 'react'
import type { PageMeta } from '../content/types'

export function usePageMeta({ title, description }: PageMeta) {
  useEffect(() => {
    document.title = title

    let tag = document.querySelector<HTMLMetaElement>('meta[name="description"]')
    if (!tag) {
      tag = document.createElement('meta')
      tag.name = 'description'
      document.head.appendChild(tag)
    }
    tag.content = description
  }, [title, description])
}
