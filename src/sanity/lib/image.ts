import createImageUrlBuilder from '@sanity/image-url'
import { dataset, projectId } from '../env'
import { SanityImage } from '@/types/sanity'

const imageBuilder = createImageUrlBuilder({
  projectId: projectId || '',
  dataset: dataset || '',
})

export const urlFor = (source: SanityImage) => {
  return imageBuilder.image(source)
}