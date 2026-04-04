import styles from "./HeroOffer.module.css";
// Se já tiver uma imagem, importe-a aqui ou use o caminho do /public

export function HeroOffer() {
  const handleCTAClick = () => {
    /*
    // Dispara o evento do Meta Pixel (se existir)
    if (typeof window !== 'undefined' && window.fbq) {
      window.fbq('track', 'InitiateCheckout');
    }
    window.location.href = "https://pay.hotmart.com/SEU_LINK_AQUI";
    */
  };

  return (
    <section className={styles.heroSection}>
      <div className={styles.textColumn}>
        <div className={styles.badge}>🔥 Oferta de Lançamento</div>
        <h1 className={styles.title}>
          Automatize seu Marketing e{" "}
          <span className={styles.highlight}>Venda no Piloto Automático</span>
        </h1>
        <p className={styles.subtitle}>
          Copie e cole os exatos fluxos que geram resultados diários. Otimize
          seu tempo sem precisar saber programar.
        </p>

        <button onClick={handleCTAClick} className={styles.ctaButton}>
          Quero Acessar o Pack Agora
        </button>

        <p className={styles.guarantee}>
          <span className={styles.lockIcon}>🔒</span> 7 Dias de Garantia
          Incondicional
        </p>
      </div>

      <div className={styles.imageColumn}>
        {/* Substitua o src pela sua imagem de Mockup */}
        <img
          src="https://i.ibb.co/j9fqdFd7/AUTOMA-ES.png"
          alt="Prévia do Pack de Automações no Notion"
          className={styles.heroImage}
          loading="lazy"
        />
        {/* Um efeito de "brilho" atrás da imagem para destacar */}
        <div className={styles.imageGlow}></div>
      </div>
    </section>
  );
}
