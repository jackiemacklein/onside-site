import React from "react";

/* import Kieee Rendering */
import { KieeeHead } from "./../../components/Kieee";

/* import styles */
import { Container, Content, Label, H1, Comment, Button } from "./styles";

function Component(props) {
  return (
    <>
      <Container id="home">
        <Content>
          <Label>Nós da Onside agradecemos o seu contato.</Label>
          <H1> Obrigado! ;)</H1>
          <Comment>Em breve a nossa equipe vai entrar em contato com você através do e-mail e telefone informado.</Comment>
          <Button to="/">Voltar para o Site</Button>
        </Content>
      </Container>
    </>
  );
}

//find in ssr for get data preload
function Head({ params }) {
  return (
    <KieeeHead
      themeColor="#2c57e4"
      title="Recebemos o seu contato | Agência Onside"
      description="Agência Digital em Cuiabá, Desenvolvimento de sites e Aplicativos Android e iOS, Otimização SEO, Tráfego Pago no Google e Facebook ADS, Consultoria em marketing digital."
      appleIcon="https://agenciaonside.com.br/logo512.png"
      icon="https://agenciaonside.com.br/logo512.png"
      imagePath="https://agenciaonside.com.br/logo512.png"
      siteName="Agência Onside"
      url={process.env.REACT_APP_SITE_HOST}
      favicon="/static/favicon.png"
      manifest="/static/manifest.json"
      canonical="https://agenciaonside.com.br"
    />
  );
}

export default { Component, Head };
