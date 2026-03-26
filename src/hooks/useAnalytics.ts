import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import ReactGA from "react-ga4";

const GA_ID = import.meta.env.VITE_GA_MEASUREMENT_ID;
const isDev = import.meta.env.DEV;

export function useAnalytics() {
  const location = useLocation();

  // Inicializa o GA4 uma única vez
  useEffect(() => {
    if (GA_ID) {
      ReactGA.initialize(GA_ID, {
        gaOptions: {
          debug_mode: isDev, // Ativa o modo de depuração em desenvolvimento
        },
      });
    }
  }, []);

  // Envia um page_view toda vez que a rota mudar
  useEffect(() => {
    if (GA_ID) {
      ReactGA.send({
        hitType: "pageview",
        page: location.pathname + location.search,
        title: document.title,
      });
    }
  }, [location]);
}
