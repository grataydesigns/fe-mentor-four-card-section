import React from 'react';
import { Helmet } from 'react-helmet';
import { useSiteMetadata } from '../hooks/useSiteMetadata';

const SEO = () => {
  const { title, description, siteUrl, image, twitterUsername } =
    useSiteMetadata();

  const seo = {
    image: new URL(image, siteUrl),
  };

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:url" content={siteUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={seo.image} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content={twitterUsername} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={seo.image} />
    </Helmet>
  );
};

export default SEO;
