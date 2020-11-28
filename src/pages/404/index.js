import React from "react";

import { Container, Content, Label, H1, Comment, Button } from "./styles";

function Component(props) {
  //send status 404
  if (props.staticContext) {
    props.staticContext.statusCode = 404;
  }

  return (
    <>
      <Container id="home">
        <Content>
          <Label>404</Label>
          <H1>Esta página não existe mais.</H1>
          <Comment>
            Não conseguimos encontrar a página que você estava buscando.
            <br />
            Felizmente temos inúmeros conteúdos que são de seu interesse. :)
          </Comment>
          <Button to="/">Voltar</Button>
        </Content>
      </Container>
    </>
  );
}

//find in ssr for get data preload
function Head({ params }) {
  return (
    <>
      <meta name="theme-color" content="#18684d" />
      <title>Página não encontrada - Site Base</title>
      <meta name="description" content="Poxaa! Não conseguimos encontrar a página que você estava buscando." />
      <meta property="og:title" content="Página não encontrada - agenciaonside" />
      <meta name="title" content="Página não encontrada - çç" />
      <meta property="og:description" content="Poxaa! Não conseguimos encontrar a página que você estava buscando." />
      <link rel="apple-touch-icon" href="https://agenciaonside.com.br/logo192.png" />
      <meta rel="icon" type="image/png" href="https://agenciaonside.com.br/logo192.png" />
      <meta property="og:image" content="https://agenciaonside.com.br/logo512.png" />
      <meta property="og:site_name" content="Site Base" />
      <meta property="og:url" content="https://agenciaonside.com.br" />
      <link rel="manifest" href="/static/manifest.json" />
      <meta property="og:image:type" content="image/jpeg" />
      <meta property="og:image:width" content="800" />
      <meta property="og:image:height" content="420" />
      <meta property="og:locale" content="pt_BR" />
      <meta property="og:type" content="website" />
      <link rel="icon" href="/static/favicon.png" />
    </>
  );
}

export default { Component, Head };
