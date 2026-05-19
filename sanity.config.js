import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import { schemaTypes } from "./src/sanity/schemaTypes";

const singletonActions = new Set(["publish", "discardChanges", "restore"]);
const singletonTypes = [
  "sharedSettings",
  "contactDetails",
  "footerContent",
  "homePage",
  "servicesPage",
  "aboutPage",
  "contactPage",
];

export default defineConfig({
  name: "default",
  title: "Kiki's Laser Spa",
  projectId: import.meta.env.VITE_SANITY_PROJECT_ID || "wcwooz05",
  dataset: import.meta.env.VITE_SANITY_DATASET || "production",
  basePath: "/studio",
  plugins: [
    deskTool({
      structure: (S) =>
        S.list()
          .title("Content")
          .items([
            S.listItem()
              .title("Home Page")
              .id("homePage")
              .child(S.document().schemaType("homePage").documentId("homePage")),
            S.listItem()
              .title("Services Page")
              .id("servicesPage")
              .child(S.document().schemaType("servicesPage").documentId("servicesPage")),
            S.listItem()
              .title("About Kiki Page")
              .id("aboutPage")
              .child(S.document().schemaType("aboutPage").documentId("aboutPage")),
            S.listItem()
              .title("Contact Page")
              .id("contactPage")
              .child(S.document().schemaType("contactPage").documentId("contactPage")),
            S.listItem()
              .title("Navbar")
              .id("sharedSettings")
              .child(S.document().schemaType("sharedSettings").documentId("sharedSettings")),
            S.listItem()
              .title("Contact Details")
              .id("contactDetails")
              .child(S.document().schemaType("contactDetails").documentId("contactDetails")),
            S.listItem()
              .title("Footer Content")
              .id("footerContent")
              .child(S.document().schemaType("footerContent").documentId("footerContent")),
            ...S.documentTypeListItems().filter(
              (item) => !singletonTypes.includes(item.getId())
            ),
          ]),
    }),
  ],
  schema: {
    types: schemaTypes,
    templates: (templates) =>
      templates.filter(({ schemaType }) => !singletonTypes.includes(schemaType)),
  },
  document: {
    actions: (prev, context) =>
      singletonTypes.includes(context.schemaType)
        ? prev.filter(({ action }) => action && singletonActions.has(action))
        : prev,
  },
});
