import { defineArrayMember, defineField, defineType } from "sanity";
import { fallbackContent } from "../../lib/fallbackContent";

const linkFields = [
  defineField({ name: "label", title: "Label", type: "string" }),
  defineField({ name: "href", title: "URL or Path", type: "string" }),
];

export const footerContentType = defineType({
  name: "footerContent",
  title: "Footer Content",
  type: "document",
  initialValue: fallbackContent.footerContent,
  fields: [
    defineField({
      name: "tagline",
      title: "Tagline",
      type: "text",
      rows: 2,
      description: "Use line breaks to create multiple lines.",
    }),
    defineField({ name: "ctaLabel", title: "CTA Label", type: "string" }),
    defineField({ name: "navigateHeading", title: "Navigate Heading", type: "string" }),
    defineField({
      name: "navigationLinks",
      title: "Navigation Links",
      type: "array",
      of: [
        defineArrayMember({
          type: "object",
          fields: linkFields,
          preview: {
            select: { title: "label", subtitle: "href" },
          },
        }),
      ],
    }),
    defineField({ name: "treatmentsHeading", title: "Treatments Heading", type: "string" }),
    defineField({
      name: "treatmentLinks",
      title: "Treatment Links",
      type: "array",
      of: [
        defineArrayMember({
          type: "object",
          fields: linkFields,
          preview: {
            select: { title: "label", subtitle: "href" },
          },
        }),
      ],
    }),
    defineField({ name: "contactHeading", title: "Contact Heading", type: "string" }),
    defineField({ name: "followHeading", title: "Follow Heading", type: "string" }),
    defineField({
      name: "legalLinks",
      title: "Legal Links",
      type: "array",
      of: [
        defineArrayMember({
          type: "object",
          fields: linkFields,
          preview: {
            select: { title: "label", subtitle: "href" },
          },
        }),
      ],
    }),
    defineField({ name: "copyright", title: "Copyright", type: "string" }),
  ],
  preview: {
    prepare: () => ({
      title: "Footer Content",
    }),
  },
});
