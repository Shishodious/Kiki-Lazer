import { defineField, defineType } from "sanity";
import { fallbackContent } from "../../lib/fallbackContent";

export const servicesPageType = defineType({
  name: "servicesPage",
  title: "Services Page",
  type: "document",
  initialValue: fallbackContent.servicesPage,
  fields: [
    defineField({ name: "heroEyebrow", title: "Hero Eyebrow", type: "string" }),
    defineField({
      name: "heroTitle",
      title: "Hero Title",
      type: "text",
      rows: 3,
      description: "Use line breaks to create multiple lines.",
    }),
    defineField({ name: "heroSubtitle", title: "Hero Subtitle", type: "text", rows: 4 }),
    defineField({ name: "ctaLabel", title: "CTA Label", type: "string" }),
    defineField({
      name: "heroBackground",
      title: "Hero Background",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({ name: "heroBackgroundAlt", title: "Hero Background Alt", type: "string" }),
    defineField({
      name: "items",
      title: "Services",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({ name: "title", title: "Title", type: "string" }),
            defineField({ name: "tagline", title: "Tagline", type: "string" }),
            defineField({ name: "description", title: "Description", type: "text", rows: 5 }),
            defineField({ name: "duration", title: "Duration", type: "string" }),
            defineField({ name: "sessions", title: "Sessions", type: "string" }),
            defineField({ name: "image", title: "Image", type: "image", options: { hotspot: true } }),
            defineField({ name: "imageAlt", title: "Image Alt", type: "string" }),
          ],
          preview: {
            select: { title: "title", subtitle: "tagline", media: "image" },
          },
        },
      ],
    }),
  ],
  preview: {
    prepare: () => ({
      title: "Services Page",
    }),
  },
});
