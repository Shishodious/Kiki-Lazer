import { defineField, defineType } from "sanity";
import { fallbackContent } from "../../lib/fallbackContent";

export const contactDetailsType = defineType({
  name: "contactDetails",
  title: "Contact Details",
  type: "document",
  initialValue: fallbackContent.contactDetails,
  fields: [
    defineField({ name: "email", title: "Email", type: "string" }),
    defineField({ name: "phone", title: "Phone", type: "string" }),
    defineField({ name: "location", title: "Location", type: "string" }),
    defineField({
      name: "hours",
      title: "Hours",
      type: "text",
      rows: 2,
      description: "Use line breaks to create multiple lines.",
    }),
    defineField({ name: "socialLabel", title: "Social Label", type: "string" }),
    defineField({ name: "socialUrl", title: "Social URL", type: "url" }),
  ],
  preview: {
    prepare: () => ({
      title: "Contact Details",
    }),
  },
});
