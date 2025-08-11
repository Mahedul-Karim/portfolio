import { useEffect, useState } from "react";

interface Params {
  ids: string[];
}

export const useScrollSpy = ({ ids = [] }: Params) => {
  const [activeId, setActiveId] = useState("");

  useEffect(() => {
    if (ids.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const id = entry.target.id;

          if (entry.isIntersecting) {
            setActiveId(id);
          } else {
            setActiveId("");
          }
        });
      },
      {
        threshold: 0.5,
      }
    );

    ids.forEach((id) => {
      const el = document.getElementById(id);

      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [ids]);

  return activeId;
};
