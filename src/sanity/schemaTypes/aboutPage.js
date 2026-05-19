import { defineField, defineType } from "sanity";
import { fallbackContent } from "../../lib/fallbackContent";

export const aboutPageType = defineType({
  name: "aboutPage",
  title: "About Kiki Page",
  type: "document",
  initialValue: fallbackContent.aboutPage,
  fields: [
    defineField({ name: "heroEyebrow", title: "Hero Eyebrow", type: "string" }),
    defineField({
      name: "heroTitle",
      title: "Hero Title",
      type: "text",
      rows: 3,
      description: "Use line breaks to create multiple lines.",
    }),
    defineField({
      name: "heroBackground",
      title: "Hero Background",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({ name: "heroBackgroundAlt", title: "Hero Background Alt", type: "string" }),
    defineField({ name: "storyEyebrow", title: "Story Eyebrow", type: "string" }),
    defineField({
      name: "storyHeading",
      title: "Story Heading",
      type: "text",
      rows: 3,
      description: "Use line breaks to create multiple lines.",
    }),
    defineField({ name: "storyBody", title: "Story Body", type: "text", rows: 5 }),
    defineField({
      name: "stats",
      title: "Stats",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({ name: "value", title: "Value", type: "string" }),
            defineField({ name: "label", title: "Label", type: "string" }),
          ],
          preview: {
            select: { title: "value", subtitle: "label" },
          },
        },
      ],
    }),
    defineField({
      name: "storyImage",
      title: "Story Image",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({ name: "storyImageAlt", title: "Story Image Alt", type: "string" }),
    defineField({ name: "badgePrimary", title: "Badge Primary", type: "string" }),
    defineField({ name: "badgeSecondary", title: "Badge Secondary", type: "string" }),
    defineField({ name: "valuesEyebrow", title: "Values Eyebrow", type: "string" }),
    defineField({ name: "valuesHeading", title: "Values Heading", type: "string" }),
    defineField({
      name: "values",
      title: "Values",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({ name: "title", title: "Title", type: "string" }),
            defineField({ name: "body", title: "Body", type: "text", rows: 4 }),
          ],
          preview: {
            select: { title: "title", subtitle: "body" },
          },
        },
      ],
    }),
    defineField({ name: "ctaEyebrow", title: "CTA Eyebrow", type: "string" }),
    defineField({ name: "ctaHeading", title: "CTA Heading", type: "string" }),
    defineField({ name: "ctaLabel", title: "CTA Label", type: "string" }),
  ],
  preview: {
    prepare: () => ({
      title: "About Kiki Page",
    }),
  },
});
