import React from "react";

/* import utils */
import { handleAnchor } from "./../../utils/functions";

/* import images */
import headerImg from "./../../assets/images/header.png";

/* import logo */
import logoColor from "./../../assets/logos/color.png";

/* import styles */
import { Container, Navigator, NavItems, NavItem, NavButton, Content } from "./styles";
import { Title, Description, Button, LogoFigure, LogoImage, ImageArt } from "./styles";

function Header() {
  return (
    <Container id="home">
      <Navigator>
        <LogoFigure alt="Marketing digital é com a Onside Agência Digital" title="Marketing digital é com a Onside Agência Digital">
          <LogoImage src={logoColor} alt="Marketing digital é com a Onside Agência Digital" title="Marketing digital é com a Onside Agência Digital" />
        </LogoFigure>

        <NavItems>
          <NavItem>
            <button name="btnNavHome" id="btnNavHome" onClick={() => handleAnchor("home")}>
              Home
            </button>
          </NavItem>
          <NavItem>
            <button name="btnNavMetodo" id="btnNavMetodo" onClick={() => handleAnchor("metodologia")}>
              Método
            </button>
          </NavItem>
          <NavItem>
            <button name="btnNavServicos" id="btnNavServicos" onClick={() => handleAnchor("servicos")}>
              Serviços
            </button>
          </NavItem>
          <NavItem>
            <button name="btnNavProjetos" id="btnNavProjetos" onClick={() => handleAnchor("projetos")}>
              Projetos
            </button>
          </NavItem>
          <NavItem>
            <button name="btnNavContato" id="btnNavContato" onClick={() => handleAnchor("contato")}>
              Contato
            </button>
          </NavItem>
        </NavItems>
        <a rel="noopener noreferrer" href="https://api.whatsapp.com/send?phone=5565993047884&text=" target="_blank">
          <NavButton name="btnTelefone" id="btnTelefone">
            LIGUE: +55 65 9 9304-7884
          </NavButton>
        </a>
      </Navigator>
      <Content>
        <Title>Somos um agência digital com Gestão Focada em Resultados!</Title>
        <Description>
          <span>Usamos as ferramentas em seu favor!</span>
          <br />
          Nós entendemos que um site, uma loja virtual e até mesmo um aplicativo de celular são apenas ferramentas que vão conectar você aos seus clientes, seja
          para vender mais, atrair mais clientes ou fidelizar os seus clietes atuais.
        </Description>
        <Button
          title="Consultoria 100% gratuita de marketing digital"
          rel="opener referrer"
          href="http://pages.agenciaonside.com.br/consultoria-de-marketing-digital-gratuita"
          target="_blank"
          name="btnConsultoriaGratuita"
          id="btnConsultoriaGratuita">
          Clique aqui e receba uma consultoria 100% GRATUITA
        </Button>
        <ImageArt src={headerImg} alt="Marketing digital é com a Onside Agência Digital" title="Marketing digital é com a Onside Agência Digital" />
      </Content>
    </Container>
  );
}

export default Header;
