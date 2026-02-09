import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'project',
  title: 'Projects',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Project Name',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'Slug (URL)',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
    }),
    defineField({
      name: 'desc',
      title: 'Description',
      type: 'text',
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string', // Contoh: "Web App"
    }),
    defineField({
      name: 'duration',
      title: 'Duration',
      type: 'string', // Contoh: "3 Month"
    }),
    defineField({
      name: 'order',
      title: 'Order ID',
      type: 'number',
      description: 'Isi angka 1, 2, 3 buat ngatur urutan (1 paling atas)',
    }),
    defineField({
      name: 'image',
      title: 'Main Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    // 👇 Nanti isi ini pake Text aja: "React", "Laravel", "Tailwind"
    // defineField({
    //   name: 'techStack',
    //   title: 'Tech Stack',
    //   type: 'array',
    //   of: [{ type: 'string' }],
    // }),
    defineField({
      name: 'techStack',
      title: 'Tech Stack',
      description: 'Contoh: FaReact, SiNextdotjs',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'linkWeb',
      title: 'Live Demo URL',
      type: 'url',
    }),
    defineField({
      name: 'github',
      title: 'GitHub Repo URL',
      type: 'url',
    }),
  ],
})