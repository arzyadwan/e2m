import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'testimonial',
  title: 'Testimonials',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Client Name',
      type: 'string',
    }),
    defineField({
      name: 'role',
      title: 'Role / Company',
      type: 'string', // e.g., "CEO of ABC" or "Bride"
    }),
    defineField({
      name: 'quote',
      title: 'Testimony',
      type: 'text',
    }),
    defineField({
      name: 'photo',
      title: 'Client Photo',
      type: 'image',
      options: { hotspot: true },
    }),
  ],
})