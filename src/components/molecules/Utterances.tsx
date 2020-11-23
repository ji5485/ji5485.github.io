import React, { createRef, FunctionComponent, useEffect } from 'react';

const src = 'https://utteranc.es/client.js';
const repo = 'ji5485/ji5485.github.io';

const Utterances: FunctionComponent<{}> = function ({}) {
  const element = createRef<HTMLDivElement>();

  useEffect(() => {
    const utterances = document.createElement('script');
    const initialMode = window.document.body.classList.contains('dark') ? 'dark' : 'light';

    const attributes = {
      src,
      repo,
      'issue-term': 'pathname',
      label: 'utterances-comment',
      theme: `github-${initialMode}`,
      crossorigin: 'anonymous',
      async: true,
    };

    Object.entries(attributes).forEach(([key, value]) => {
      utterances.setAttribute(key, value);
    });

    element.current.appendChild(utterances);

    const changeUtterancesMode = (mode: string) => {
      const utterances = document.querySelector('iframe.utterances-frame').contentWindow;

      const message = {
        type: 'set-theme',
        theme: `github-${mode}`
      };
      
      utterances.postMessage(message, 'https://utteranc.es');
    }

    const observer = new MutationObserver(() => {
      const currentMode = window.document.body.classList.contains('dark') ? 'dark' : 'light';
      changeUtterancesMode(currentMode);
    });

    observer.observe(window.document.body, {
      attributes: true,
      attributeFilter: ['class'],
      childList: false, 
      characterData: false
    });

    return () => observer.disconnect();
  }, []);

  return <div ref={element} />;
};

export default Utterances;
