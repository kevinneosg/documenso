import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    host: 'https://docs.onemed.com.sg',
    sitemap: 'https://docs.onemed.com.sg/sitemap.xml',
  };
}
