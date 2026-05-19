import { defineField, defineType } from "sanity";
import { fallbackContent } from "../../lib/fallbackContent";

export const homePageType = defineType({
  name: "homePage",
  title: "Home Page",
  type: "document",
  initialValue: fallbackContent.homePage,
  fields: [
    defineField({
      name: "hero",
      title: "Hero",
      type: "object",
      fields: [
        defineField({ name: "tag", title: "Tag", type: "string" }),
        defineField({
          name: "title",
          title: "Title",
          type: "text",
          rows: 3,
          description: "Use line breaks if you want multiple lines.",
        }),
        defineField({ name: "subtitle", title: "Subtitle", type: "text", rows: 3 }),
        defineField({ name: "ctaLabel", title: "CTA Label", type: "string" }),
        defineField({ name: "videoUrl", title: "Background Video URL", type: "url" }),
      ],
    }),
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
      name: "aboutSection",
      title: "About Section",
      type: "object",
      fields: [
        defineField({ name: "eyebrow", title: "Eyebrow", type: "string" }),
        defineField({
          name: "heading",
          title: "Heading",
          type: "text",
          rows: 3,
          description: "Use line breaks to create stacked lines.",
        }),
        defineField({ name: "body", title: "Body", type: "text", rows: 5 }),
        defineField({ name: "ctaLabel", title: "CTA Label", type: "string" }),
        defineField({ name: "image", title: "Image", type: "image", options: { hotspot: true } }),
        defineField({ name: "imageAlt", title: "Image Alt", type: "string" }),
        defineField({ name: "badgePrimary", title: "Badge Primary", type: "string" }),
        defineField({ name: "badgeSecondary", title: "Badge Secondary", type: "string" }),
      ],
    }),
    defineField({
      name: "servicesSection",
      title: "Services Section",
      type: "object",
      fields: [
        defineField({ name: "heading", title: "Heading", type: "string" }),
        defineField({ name: "body", title: "Body", type: "text", rows: 3 }),
        defineField({ name: "ctaLabel", title: "CTA Label", type: "string" }),
        defineField({ name: "spotlightLabel", title: "Spotlight Label", type: "string" }),
        defineField({
          name: "serviceCards",
          title: "Service Cards",
          type: "array",
          of: [
            {
              type: "object",
              fields: [
                defineField({ name: "title", title: "Title", type: "string" }),
                defineField({ name: "description", title: "Description", type: "text", rows: 3 }),
                defineField({ name: "image", title: "Image", type: "image", options: { hotspot: true } }),
                defineField({ name: "imageAlt", title: "Image Alt", type: "string" }),
              ],
              preview: {
                select: { title: "title", subtitle: "description", media: "image" },
              },
            },
          ],
        }),
      ],
    }),
    defineField({
      name: "testimonialsSection",
      title: "Testimonials Section",
      type: "object",
      fields: [
        defineField({ name: "eyebrow", title: "Eyebrow", type: "string" }),
        defineField({ name: "heading", title: "Heading", type: "string" }),
        defineField({ name: "body", title: "Body", type: "text", rows: 3 }),
        defineField({
          name: "highlightImage",
          title: "Highlight Image",
          type: "image",
          options: { hotspot: true },
        }),
        defineField({ name: "highlightImageAlt", title: "Highlight Image Alt", type: "string" }),
        defineField({ name: "ratingValue", title: "Rating Value", type: "string" }),
        defineField({ name: "ratingLabel", title: "Rating Label", type: "string" }),
        defineField({
          name: "backgroundImage",
          title: "Carousel Background Image",
          type: "image",
          options: { hotspot: true },
        }),
        defineField({
          name: "backgroundImageAlt",
          title: "Carousel Background Image Alt",
          type: "string",
        }),
        defineField({
          name: "items",
          title: "Testimonials",
          type: "array",
          of: [
            {
              type: "object",
              fields: [
                defineField({ name: "name", title: "Name", type: "string" }),
                defineField({ name: "detail", title: "Detail", type: "string" }),
                defineField({ name: "quote", title: "Quote", type: "text", rows: 5 }),
                defineField({ name: "rating", title: "Rating", type: "number", initialValue: 5 }),
              ],
              preview: {
                select: { title: "name", subtitle: "detail" },
              },
            },
          ],
        }),
      ],
    }),
  ],
  preview: {
    prepare: () => ({
      title: "Home Page",
    }),
  },
});
