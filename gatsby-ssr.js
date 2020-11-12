/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

// You can delete this file if you're not using it
import { createElement } from 'react';

const awaitLoadStorage = `
  (function() {
    try {
      let mode = localStorage.getItem('blog-current-mode');

      if (mode === null) return;
    } catch (e) {}
  })();
`;

export const onRenderBody = ({ setPreBodyComponents }) => {
  const script = createElement('script', {
    dangerouslySetInnerHTML: {
      __html: awaitLoadStorage,
    },
  });
  setPreBodyComponents([script]);
};
