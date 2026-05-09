import { NEXT_PUBLIC_WEBAPP_URL } from '@documenso/lib/constants/app';
import { i18n, type MessageDescriptor } from '@lingui/core';

export const appMetaTags = (title?: MessageDescriptor) => {
  const description =
    'OneMed Sign — the document signing portal for OneMed Singapore home nursing freelance contracts and per-deployment Annex Bs.';

  return [
    {
      title: title ? `${i18n._(title)} - OneMed Sign` : 'OneMed Sign',
    },
    {
      name: 'description',
      content: description,
    },
    {
      name: 'keywords',
      content: 'OneMed, document signing, nurse onboarding, freelance contract, Annex B, Singapore home nursing',
    },
    {
      name: 'author',
      content: 'OneMed Pte Ltd',
    },
    {
      name: 'robots',
      content: 'noindex, nofollow',
    },
    {
      property: 'og:title',
      content: 'OneMed Sign',
    },
    {
      property: 'og:description',
      content: description,
    },
    {
      property: 'og:image',
      content: `${NEXT_PUBLIC_WEBAPP_URL()}/opengraph-image.jpg`,
    },
    {
      property: 'og:type',
      content: 'website',
    },
    {
      name: 'twitter:card',
      content: 'summary_large_image',
    },
    {
      name: 'twitter:description',
      content: description,
    },
    {
      name: 'twitter:image',
      content: `${NEXT_PUBLIC_WEBAPP_URL()}/opengraph-image.jpg`,
    },
  ];
};
