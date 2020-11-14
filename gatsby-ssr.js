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

      if (mode === null && supportDarkMode) {
        document.body.classList.add('dark');
        localStorage.setItem('blog-current-mode', 'dark');
      };

      if (mode === 'dark') document.body.classList.add('dark');

      if (mode === null) localStorage.setItem('blog-current-mode', 'light');
    } catch (e) {}
  })();
`;

const AwaitLoadStorageComponent = function () {
  return <script dangerouslySetInnerHTML={{ __html: awaitLoadStorageScript }} />;
};

export const onRenderBody = ({ setPreBodyComponents }) => {
  setPreBodyComponents([<AwaitLoadStorageComponent />]);
};
