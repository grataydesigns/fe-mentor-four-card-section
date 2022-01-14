import React from 'react';

import '../scss/index.scss';
import SEO from './Seo';

const Layout = ({ children }) => {
  return (
    <main>
      <SEO />
      <div className="container">{children}</div>
    </main>
  );
};

export default Layout;
