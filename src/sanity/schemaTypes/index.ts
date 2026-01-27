import { type SchemaTypeDefinition } from 'sanity'
import service from './service'
import portfolio from './portfolio'
import pricing from './pricing'
import testimonial from './testimonial'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [service, portfolio, pricing, testimonial],
}