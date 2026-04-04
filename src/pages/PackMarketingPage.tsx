import { Helmet } from "react-helmet-async";
import { Container } from "../components/ui/Container";
import { Benefits } from "../features/pack-marketing/components/Benefits";
import { HeroOffer } from "../features/pack-marketing/components/HeroOffer";
import { Main } from "../features/pack-marketing/components/ui/Main";

export function PackMarketingPage() {
  return (
    <Main>
      <Helmet>
        <title>Pack Automações de Marketing | lucascr.site</title>
        <meta
          name="description"
          content="Aumente sua produtividade com automações validadas para marketing digital."
        />

        {/* Tags para Redes Sociais (Open Graph) */}
        <meta property="og:title" content="Pack Automações de Marketing" />
        <meta
          property="og:description"
          content="O segredo para vender mais no automático."
        />
        <meta
          property="og:image"
          content="https://olucascr.site/imagem-do-pack.png"
        />
        <meta
          property="og:url"
          content="https://olucascr.site/pack-marketing"
        />

        {/* Canonical Link - Importante para SEO */}
        <link rel="canonical" href="https://olucascr.site/pack-marketing" />
      </Helmet>

      <Container>
        <HeroOffer />
        <Benefits />
        {/* Outras seções: Depoimentos, FAQ, etc. */}
      </Container>
    </Main>
  );
}
