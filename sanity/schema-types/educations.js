import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'education',
  title: 'Education',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Institution Name',
      type: 'string',
    }),
    defineField({
      name: 'major',
      title: 'Major / Program',
      type: 'string',
    }),
    defineField({
      name: 'GPA', // Tambahan buat IPK
      title: 'GPA',
      type: 'number', // Pake number biar bisa sort kalau perlu
    }),
    defineField({
      name: 'time',
      title: 'Time Period',
      type: 'string',
    }),
    // Kolom tambahan buat ngurutin manual (biar STT NF tetep paling atas)
    defineField({
      name: 'order',
      title: 'Order',
      type: 'number',
    }),
  ],
})