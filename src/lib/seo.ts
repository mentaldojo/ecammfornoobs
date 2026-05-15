const DEFAULT_SITE_URL = "https://ecammfornoobs.com";

function normalizeSiteUrl(url: string) {
  return url.endsWith("/") ? url.slice(0, -1) : url;
}

export function getSiteUrl() {
  return normalizeSiteUrl(process.env.NEXT_PUBLIC_SITE_URL || DEFAULT_SITE_URL);
}

export function toAbsoluteUrl(pathname: string) {
  if (pathname.startsWith("http://") || pathname.startsWith("https://")) {
    return pathname;
  }

  const normalizedPath = pathname.startsWith("/") ? pathname : `/${pathname}`;
  return `${getSiteUrl()}${normalizedPath}`;
}

export function getOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Ecamm for Noobs",
    url: getSiteUrl(),
    logo: toAbsoluteUrl("/images/asset-images/Orange_Ecamm_LogoCentered.png"),
    sameAs: ["https://www.youtube.com/channel/UCWkyh-bTFJeYnkUeFr7ya4Q"],
  };
}

export function getWebsiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Ecamm for Noobs",
    url: getSiteUrl(),
    inLanguage: "en",
  };
}
