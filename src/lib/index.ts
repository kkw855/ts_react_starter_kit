import React, { useEffect } from 'react';

export const useOnClickOutside = (
  ref: React.RefObject<HTMLElement>,
  handler: () => void,
  events: string[] = [`mousedown`, `touchstart`],
): void => {
  useEffect(() => {
    const detectClickOutside = (event: Event) => {
      if (ref.current) {
        !ref.current.contains(event.target as Node) && handler();
      }
    };

    for (const event of events)
      document.addEventListener(event, detectClickOutside);

    return () => {
      for (const event of events)
        document.removeEventListener(event, detectClickOutside);
    };
  }, [ref, handler, events]);
};
