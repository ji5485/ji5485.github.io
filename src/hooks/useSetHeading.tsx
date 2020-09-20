import { useState, useEffect } from "react";

function useSetHeading(target: string, nonTarget: string[]) {
  const [activeSlug, setActiveSlug] = useState<string>('');
  const [headingElements, setHeadingElements] = useState<Element[]>([]);

  const scrollEvent = function () {
    for (let i = headingElements.length - 1; i >= 0; i--) {
      const { top } = headingElements[i].getBoundingClientRect();

      if (0 >= top) {
        headingElements[i].id !== activeSlug && setActiveSlug(headingElements[i].id);
        return;
      }
    }

    setActiveSlug('');
  };

  useEffect(() => {
    const getElementsByTarget = () => new Promise((resolve) => {
      const elements: Element[] = Array.from(window.document.querySelectorAll(target));

      const filteredElements: Element[] = elements.reduce<Element[]>((acc, cur) => {
        if (!nonTarget.includes(cur.id)) acc.push(cur);
        return acc;
      }, []);

      setHeadingElements(filteredElements);
      resolve();
    });

    getElementsByTarget();
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', scrollEvent);

    return () => window.removeEventListener('scroll', scrollEvent);
  }, [headingElements]);

  return activeSlug;
}

export default useSetHeading;