import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'skill',
  title: 'Skills',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Skill Name',
      type: 'string', // Contoh: "React.js"
    }),
    // Dropdown buat milih kategori
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'Frontend', value: 'frontend' },
          { title: 'Backend', value: 'backend' },
          { title: 'Tools', value: 'tools' },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    // Buat Icon, kita simpen Namanya aja (misal: FaReact)
    defineField({
      name: 'iconName',
      title: 'React Icon Name',
      description: 'Contoh: FaReact, SiNextdotjs',
      type: 'string',
    }),
  ],
})