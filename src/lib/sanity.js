import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const sanityConfig = {
  projectId: import.meta.env.VITE_SANITY_PROJECT_ID || "wcwooz05",
  dataset: import.meta.env.VITE_SANITY_DATASET || "production",
  apiVersion: import.meta.env.VITE_SANITY_API_VERSION || "2026-05-18",
  useCdn: true,
};

export const isSanityEnabled = Boolean(sanityConfig.projectId && sanityConfig.dataset);

export const sanityClient = isSanityEnabled ? createClient(sanityConfig) : null;

const imageBuilder = isSanityEnabled ? imageUrlBuilder(sanityClient) : null;

export function urlForImage(source) {
  if (!source) return "";
  if (typeof source === "string") return source;
  if (!imageBuilder || !source.asset) return "";
  return imageBuilder.image(source).auto("format").fit("max").url();
}
