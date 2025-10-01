import { useCallback } from "react";

type Params = Record<string, string | number | boolean | undefined>;

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
    plausible?: (event: string, opts?: { props?: Params }) => void;
  }
}

export function useAnalytics() {
  const track = useCallback((event: string, params: Params = {}) => {
    try {
      if (window.gtag) {
        window.gtag("event", event, params);
      }
    } catch {}
    try {
      if (window.plausible) {
        window.plausible(event, { props: params });
      }
    } catch {}
  }, []);

  return { track };
}
