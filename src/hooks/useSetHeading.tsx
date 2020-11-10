import { useState, useEffect } from 'react';

function useSetHeading(toc: string): string {
  const [activeSlug, setActiveSlug] = useState<string>('');
  const [headingElements, setHeadingElements] = useState<Element[]>([]);

  const scrollEvent = function () {
    for (let i = headingElements.length - 1; i >= 0; i--) {
      const { top } = headingElements[i].getBoundingClientRect();

      if (top <= 0.1) {
        headingElements[i].id !== activeSlug && setActiveSlug(headingElements[i].id);
        return;
      }
    }

    setActiveSlug('');
  };

  useEffect(() => {
    const getElementsByTarget = () => {
      const allHeadingTags: Element[] = Array.from(window.document.querySelectorAll('h1, h2, h3'));
      setHeadingElements(allHeadingTags);
    };

    getElementsByTarget();
  }, [toc]);

  useEffect(() => {
    window.addEventListener('scroll', scrollEvent);

    return () => window.removeEventListener('scroll', scrollEvent);
  }, [headingElements]);

  return activeSlug;
}

export default useSetHeading;
