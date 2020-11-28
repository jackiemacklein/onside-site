import React from "react";

import { Container, Content, Description } from "./styles";

function Footer() {
  return (
    <Container>
      <Content>
        <Description>Copyright &copy; 2020 - {new Date().getFullYear()}</Description>
        <Description>Onside Agência Digital - Todos os direitos reservados</Description>
      </Content>
    </Container>
  );
}

export default Footer;
