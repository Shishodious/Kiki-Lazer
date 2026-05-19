import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { fallbackContent } from "../lib/fallbackContent";
import { isSanityEnabled, sanityClient } from "../lib/sanity";

const SITE_CONTENT_QUERY = `{
  "sharedSettings": *[_type == "sharedSettings"][0],
  "contactDetails": *[_type == "contactDetails"][0],
  "footerContent": *[_type == "footerContent"][0],
  "homePage": *[_type == "homePage"][0],
  "servicesPage": *[_type == "servicesPage"][0]{
    ...,
    heroBackground{..., "blurHash": asset->metadata.blurHash}
  },
  "aboutPage": *[_type == "aboutPage"][0]{
    ...,
    heroBackground{..., "blurHash": asset->metadata.blurHash}
  },
  "contactPage": *[_type == "contactPage"][0]{
    ...,
    heroBackground{..., "blurHash": asset->metadata.blurHash}
  }
}`;

const SiteContentContext = createContext({
  ...fallbackContent,
  loading: false,
  sanityEnabled: false,
});

function mergeSharedSettings(base, incoming) {
  if (!incoming) return base;

  return {
    ...base,
    ...incoming,
    brand: { ...base.brand, ...incoming.brand },
  };
}

function mergeContactDetails(base, incoming) {
  if (!incoming) return base;
  return { ...base, ...incoming };
}

function mergeFooterContent(base, incoming) {
  if (!incoming) return base;

  return {
    ...base,
    ...incoming,
    navigationLinks: incoming.navigationLinks?.length ? incoming.navigationLinks : base.navigationLinks,
    treatmentLinks: incoming.treatmentLinks?.length ? incoming.treatmentLinks : base.treatmentLinks,
    legalLinks: incoming.legalLinks?.length ? incoming.legalLinks : base.legalLinks,
  };
}

function mergeHomePage(base, incoming) {
  if (!incoming) return base;

  return {
    ...base,
    ...incoming,
    hero: { ...base.hero, ...incoming.hero },
    stats: incoming.stats?.length ? incoming.stats : base.stats,
    aboutSection: { ...base.aboutSection, ...incoming.aboutSection },
    servicesSection: {
      ...base.servicesSection,
      ...incoming.servicesSection,
      serviceCards: incoming.servicesSection?.serviceCards?.length
        ? incoming.servicesSection.serviceCards
        : base.servicesSection.serviceCards,
    },
    testimonialsSection: {
      ...base.testimonialsSection,
      ...incoming.testimonialsSection,
      items: incoming.testimonialsSection?.items?.length
        ? incoming.testimonialsSection.items
        : base.testimonialsSection.items,
    },
  };
}

function mergeContent(base, incoming) {
  if (!incoming) return base;

  return {
    sharedSettings: mergeSharedSettings(base.sharedSettings, incoming.sharedSettings),
    contactDetails: mergeContactDetails(base.contactDetails, incoming.contactDetails),
    footerContent: mergeFooterContent(base.footerContent, incoming.footerContent),
    homePage: mergeHomePage(base.homePage, incoming.homePage),
    servicesPage: {
      ...base.servicesPage,
      ...incoming.servicesPage,
      items: incoming.servicesPage?.items?.length ? incoming.servicesPage.items : base.servicesPage.items,
    },
    aboutPage: {
      ...base.aboutPage,
      ...incoming.aboutPage,
      stats: incoming.aboutPage?.stats?.length ? incoming.aboutPage.stats : base.aboutPage.stats,
      values: incoming.aboutPage?.values?.length ? incoming.aboutPage.values : base.aboutPage.values,
    },
    contactPage: {
      ...base.contactPage,
      ...incoming.contactPage,
      serviceOptions: incoming.contactPage?.serviceOptions?.length
        ? incoming.contactPage.serviceOptions
        : base.contactPage.serviceOptions,
      faqs: incoming.contactPage?.faqs?.length ? incoming.contactPage.faqs : base.contactPage.faqs,
    },
  };
}

export function SiteContentProvider({ children }) {
  const [content, setContent] = useState(fallbackContent);
  const [loading, setLoading] = useState(isSanityEnabled);

  useEffect(() => {
    if (!isSanityEnabled || !sanityClient) {
      setLoading(false);
      return undefined;
    }

    let cancelled = false;

    async function loadContent() {
      try {
        const data = await sanityClient.fetch(SITE_CONTENT_QUERY);
        if (!cancelled) {
          setContent(mergeContent(fallbackContent, data));
        }
      } catch (error) {
        if (!cancelled) {
          setContent(fallbackContent);
        }
      } finally {
        if (!cancelled) {
          setLoading(false);
        }
      }
    }

    loadContent();

    return () => {
      cancelled = true;
    };
  }, []);

  const value = useMemo(
    () => ({
      ...content,
      loading,
      sanityEnabled: isSanityEnabled,
    }),
    [content, loading, isSanityEnabled]
  );

  return <SiteContentContext.Provider value={value}>{children}</SiteContentContext.Provider>;
}

export function useSiteContent() {
  return useContext(SiteContentContext);
}
