import { useCallback } from "react";

export const useScrollTo = () => {
  const scrollToSection = useCallback(
    (
      e: React.MouseEvent<HTMLAnchorElement>,
      id: string,
      callback?: () => void,
    ) => {
      e.preventDefault();

      // Se houver uma função para fechar menu, executa aqui
      if (callback) callback();

      const element = document.getElementById(id);
      if (element) {
        // Pequeno timeout opcional caso o menu mobile precise de tempo para fechar
        setTimeout(() => {
          element.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }, 100);
      }
    },
    [],
  );

  return scrollToSection;
};
