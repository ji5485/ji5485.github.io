import React, { createRef, FunctionComponent, useEffect } from 'react';

interface UtterancesProps {
  repo: string;
  mode: 'light' | 'dark';
}

const src = 'https://utteranc.es/client.js';

const Utterances: FunctionComponent<UtterancesProps> = function ({ repo, mode }) {
  const element = createRef<HTMLDivElement>();

  useEffect(() => {
    const utterances = document.createElement('script');

    const attributes = {
      src,
      repo,
      'issue-term': 'pathname',
      label: 'utterances-comment',
      theme: `github-${mode}`,
      crossorigin: 'anonymous',
      async: true,
    };

    Object.entries(attributes).forEach(([key, value]) => {
      utterances.setAttribute(key, value);
    });

    element.current.appendChild(utterances);
  }, []);

  return <div ref={element} />;
};

Utterances.defaultProps = {
  mode: 'light',
};

export default Utterances;
