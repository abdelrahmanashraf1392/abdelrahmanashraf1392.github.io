import { useEffect } from "react";

export default function usePageMeta(title, description) {
  useEffect(() => {
    document.title = `${title} | Abdelrahman Ashraf`;
    document.querySelector('meta[name="description"]')?.setAttribute("content", description);
  }, [title, description]);
}
