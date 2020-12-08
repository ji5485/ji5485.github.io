/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

// You can delete this file if you're not using it
import React from 'react';

const awaitLoadStorageScript = `
  (function() {
    try {
      let mode = localStorage.getItem('blog-current-mode');
      let supportDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches === true;
      if (mode === null) {
        const initialMode = supportDarkMode ? 'dark' : 'light';
        document.body.classList.add(initialMode);
        localStorage.setItem('blog-current-mode', initialMode);
        return;
      };
      document.body.classList.add(mode);
    } catch (e) {}
  })();
`;

const AwaitLoadStorageComponent = function () {
  return <script dangerouslySetInnerHTML={{ __html: awaitLoadStorageScript }} />;
};

export const onRenderBody = ({ setPreBodyComponents }) => {
  setPreBodyComponents([<AwaitLoadStorageComponent />]);
};
