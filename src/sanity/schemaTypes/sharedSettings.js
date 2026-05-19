import { defineField, defineType } from "sanity";
import { fallbackContent } from "../../lib/fallbackContent";

export const sharedSettingsType = defineType({
  name: "sharedSettings",
  title: "Navbar",
  type: "document",
  initialValue: fallbackContent.sharedSettings,
  fields: [
    defineField({
      name: "brand",
      title: "Brand",
      type: "object",
      fields: [
        defineField({ name: "name", title: "Business Name", type: "string" }),
        defineField({ name: "scriptLabel", title: "Script Label", type: "string" }),
        defineField({ name: "stackTop", title: "Brand Stack Top", type: "string" }),
        defineField({ name: "stackBottom", title: "Brand Stack Bottom", type: "string" }),
        defineField({ name: "reserveLabel", title: "Reserve Button Label", type: "string" }),
      ],
    }),
  ],
  preview: {
    prepare: () => ({
      title: "Navbar",
    }),
  },
});
