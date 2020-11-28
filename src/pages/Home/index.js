import "./../../configs/dotenv";
import "isomorphic-fetch";

import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

/* import Kieee Rendering */
import { KieeeHead, useInitialData } from "./../../components/Kieee";

/* import utils */
import { maskTelephone89Digitos } from "./../../utils/functions";
import MailerLite from "mailerlite-api-v2-node";

/* import components */
import Header from "./../../components/Header";
import Footer from "./../../components/Footer";

/* import images */
import stepsImage from "./../../assets/images/steps.png";

import img1 from "./../../assets/images/img1.png";
import img2 from "./../../assets/images/img2.png";
import img3 from "./../../assets/images/img3.png";

/* import icons */

/* import styles */
import { Container, StepsSection, StepsHeader, StepsTitle, StepsSubTitle } from "./styles";
import { Steps, Step, StepTitle, StepDescription, StepsImage } from "./styles";
import { ServicesSection, ServicesArticle, ServicesHeader, ServicesSubTitle, ServicesTitle, Services } from "./styles";
import { Service, ServiceDescription, ServiceTitle, ServiceLink } from "./styles";
import { PortfolioSection, PortfolioHeader, PortfolioSubTitle, PortfolioTitle, PortfolioItems, PortfolioItem } from "./styles";
import { PortfolioItemFigure, PortfolioItemImage } from "./styles";
import { ContactSection, ContactArticle, ContactTitle, ContactForm, FormRow, FormCol, Input, FormButton } from "./styles";

const mailerLite = MailerLite("d8bb17227393366b6844168775886036");

function Component(props) {
  const initialData = useInitialData(props, requestInitialData);
  const history = useHistory();

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [send, setSend] = useState(false);

  const handleSend = async event => {
    event.preventDefault();
    setSend(true);

    try {
      await mailerLite.addSubscriberToGroup("105176750", { email, fields: { name, origin: "site", phone } });

      setSend(false);
      history.push("/obrigado");
    } catch (error) {
      console.log(error);
      alert("Desculpe, ocorreu um erro ao tentar enviar o seu contato! Tente novamente");
      setSend(false);
    }
  };

  useEffect(() => {}, [initialData]);

  return (
    <>
      <Header />
      <Container>
        <StepsSection id="metodologia">
          <StepsHeader>
            <StepsSubTitle>Fazer o simples é genial</StepsSubTitle>
            <StepsTitle>São três etapas simples que vão transformar a realidade do seu negócio</StepsTitle>
          </StepsHeader>
          <Steps>
            <Step>
              <StepTitle>Atrair</StepTitle>
              <StepDescription>
                Através do marketing digital vamos atrair novos e mais clientes para o seu negócio! Fazemos uso das Campanhas no Facebook ADS, Sorteios no
                instagram e pesquisas no Google com foco na conversão
              </StepDescription>
            </Step>

            <Step>
              <StepTitle>Converter</StepTitle>
              <StepDescription>
                Através do seu site, das páginas de conversões e do e-mail marketing vamos trabalhar estratégias para converter os seus possíveis fechar vendas
                e serviços.
              </StepDescription>
            </Step>

            <Step>
              <StepTitle>Fidelizar</StepTitle>
              <StepDescription>
                Usando estratégias de e-mail marketing vamos fidelizar os seus clientes através de envios periódicos de ofertas e promoções juntamente com
                gatilhos mentais.
              </StepDescription>
            </Step>
          </Steps>
          <StepsImage src={stepsImage} alt="Especialidades da Onside Agência Digital" title="Especialidades da Onside Agência Digital" />
        </StepsSection>

        <ServicesSection id="servicos">
          <ServicesArticle>
            <ServicesHeader>
              <ServicesSubTitle>Nossa Paixão :)</ServicesSubTitle>
              <ServicesTitle>
                Nossa paixão é transformar vidas e negócios!<span>Confira aqui as especialidades da Onside Agência Digital e se surpreenda.</span>
              </ServicesTitle>
            </ServicesHeader>
            <Services>
              {/*Desenvolvimento de Sites Incríveis */}
              <Service>
                <ServiceDescription>
                  Não criamos sites, desenvolvemos soluções criativas para o seu negócio! Seja para divulgar a sua imagem/empresa, oferecer os seus serviços ou
                  vender mais pela internet. Nós da Onside temos a solução ideial.
                  <br />
                  <span>Faça um orçamento sem compromisso</span>
                </ServiceDescription>
                <ServiceTitle>Desenvolvimento de Sites Incríveis</ServiceTitle>

                <ServiceLink
                  id="btnServicoSite"
                  name="btnServicoSite"
                  rel="noopener noreferrer"
                  href="https://api.whatsapp.com/send?phone=5565993047884&text=Olá, estou vindo através do site da On e quero um *Site Incrível*"
                  target="_blank">
                  <i className="fa fa-whatsapp"></i> Quero conversar pelo WhatsApp
                </ServiceLink>
              </Service>

              {/*Tráfego no Facebook e Google ADS */}
              <Service>
                <ServiceDescription>
                  Verdade seja dita! Não basta só ter um site se você quer vender na internet. Você precisa pensar além de ter somente um site "bonitinho", você
                  precisa investir em tráfego pago, seja no Facebook ou no Google ADS.
                  <br />
                  <span>Fale conosco através do WhatsApp!</span>
                </ServiceDescription>
                <ServiceTitle>Tráfego no Facebook e Google ADS</ServiceTitle>
                <ServiceLink
                  id="btnServicoTrafegoPago"
                  name="btnServicoTrafegoPago"
                  rel="noopener noreferrer"
                  href="https://api.whatsapp.com/send?phone=5565993047884&text=Olá, estou vindo através do site da On e quero impulsionar as minhas vendas/serviços com *Tráfego no Facebook e Google ADS*"
                  target="_blank">
                  <i className="fa fa-whatsapp"></i> Quero conversar pelo WhatsApp
                </ServiceLink>
              </Service>

              {/*Consultoria em Marketing Digital */}
              <Service>
                <ServiceDescription>
                  Utilize ações de comunicação por meio da internet, da telefonia celular e outros meios digitais, para divulgar e comercializar seus produtos
                  ou serviços, conquistando novos clientes e melhorando a sua rede de relacionamentos.
                  <br />
                  <span>Receba uma consultoria 100% gratuita</span>
                </ServiceDescription>
                <ServiceTitle>Consultoria em Marketing Digital</ServiceTitle>
                <ServiceLink
                  id="btnServicoConsultoriaMkt"
                  name="btnServicoConsultoriaMkt"
                  title="Consultoria 100% gratuita de marketing digital"
                  rel="opener referrer"
                  href="http://pages.agenciaonside.com.br/consultoria-de-marketing-digital-gratuita"
                  target="_blank">
                  <i className="fa fa-whatsapp"></i> Clique para abrir
                </ServiceLink>
              </Service>

              {/*Páginas de Conversão */}
              <Service>
                <ServiceDescription>
                  Quer aumentar o número de PROSPECTS na sua carteira? Nós criamos páginas de conversões, as famosas Landing Pages. Com elas você consegue
                  rastrear os acessos, trocar materiais ricos por informações e realizar vendas.
                  <br />
                  <span>Solicite agora mesmo</span>
                </ServiceDescription>
                <ServiceTitle>Páginas de Conversão</ServiceTitle>
                <ServiceLink
                  id="btnServicoPaginaDeConversao"
                  name="btnServicoPaginaDeConversao"
                  rel="noopener noreferrer"
                  href="https://api.whatsapp.com/send?phone=5565993047884&text=Olá, estou vindo através do site da On e quero aumentar a conversão dos meus serviços com algumas *Landing Pages*"
                  target="_blank">
                  <i className="fa fa-whatsapp"></i> Quero conversar pelo WhatsApp
                </ServiceLink>
              </Service>

              {/*Loja virtual que vende de verdade */}
              <Service>
                <ServiceDescription>
                  Tem uma loja fisíca e quer maximizar os seus ganhos? Crie agora mesmo a sua loja virtual e comece a vender seus produtos e serviços pela
                  internet. <span>Estudos apontam que o faturamento do e-commerce cresceu cerca de 58,8% em 2020.</span>
                  <br />
                  <span>Vai ficar de fora?</span>
                </ServiceDescription>
                <ServiceTitle>Loja virtual que vende de verdade</ServiceTitle>
                <ServiceLink
                  id="btnServicoLojaVirtual"
                  name="btnServicoLojaVirtual"
                  rel="noopener noreferrer"
                  href="https://api.whatsapp.com/send?phone=5565993047884&text=Olá, estou vindo através do site da On e quero vender muito com um *Loja Virtual*"
                  target="_blank">
                  <i className="fa fa-whatsapp"></i> Quero conversar pelo WhatsApp
                </ServiceLink>
              </Service>

              {/*SEO */}
              <Service>
                <ServiceDescription>
                  SEO (Search Engine Optimization) é um conjunto de técnicas que visa posicionar uma página nos primeiros resultados nos mecanismos de busca
                  online, como por exemplo o Google.
                  <br />
                  <span>Saia na frente dos seus concorrentes, fale conosco pelo whatsApp</span>
                </ServiceDescription>
                <ServiceTitle>SEO</ServiceTitle>
                <ServiceLink
                  id="btnServicoSEO"
                  name="btnServicoSEO"
                  rel="noopener noreferrer"
                  href="https://api.whatsapp.com/send?phone=5565993047884&text=Olá, estou vindo através do site da On e não estou satisfeito com o posicionamento do meu site no Google, quero melhorar o meu *SEO*"
                  target="_blank">
                  <i className="fa fa-whatsapp"></i> Quero conversar pelo WhatsApp
                </ServiceLink>
              </Service>
            </Services>
          </ServicesArticle>
        </ServicesSection>

        <PortfolioSection id="projetos">
          <PortfolioHeader>
            <PortfolioSubTitle>Portfólio</PortfolioSubTitle>
            <PortfolioTitle>Confira alguns dos nossos trabalhos</PortfolioTitle>
          </PortfolioHeader>
          <PortfolioItems>
            {/* serviço aprosoja */}
            <PortfolioItem>
              <PortfolioItemFigure
                title="Serviço de Gestão de Sistema de Eleição + Infraestrutura de redes nas eleições 2020"
                alt="Serviço de Gestão de Sistema de Eleição + Infraestrutura de redes nas eleições 2020">
                <PortfolioItemImage
                  src={img1}
                  title="Serviço de Gestão de Sistema de Eleição + Infraestrutura de redes nas eleições 2020"
                  alt="Serviço de Gestão de Sistema de Eleição + Infraestrutura de redes nas eleições 2020"
                />
              </PortfolioItemFigure>
            </PortfolioItem>

            {/* serviço site VIDA */}
            <PortfolioItem>
              <PortfolioItemFigure
                title="Desenvolvimento de site com foco em vendas - Vida Cartão Fidelidade"
                alt="Desenvolvimento de site com foco em vendas - Vida Cartão Fidelidade">
                <PortfolioItemImage
                  src={img2}
                  title="Desenvolvimento de site com foco em vendas - Vida Cartão Fidelidade"
                  alt="Desenvolvimento de site com foco em vendas - Vida Cartão Fidelidade"
                />
              </PortfolioItemFigure>
            </PortfolioItem>
          </PortfolioItems>
        </PortfolioSection>

        <ContactSection id="contato">
          <ContactArticle>
            <ContactTitle>Que tal receber um contato da nossa equipe?</ContactTitle>
            <ContactForm onSubmit={handleSend}>
              <FormRow>
                <FormCol>
                  <Input type="text" required placeholder="Seu nome" value={name} onChange={event => setName(event.target.value)} />
                </FormCol>
                <FormCol>
                  <Input type="text" required placeholder="Telefone" value={phone} onChange={event => setPhone(maskTelephone89Digitos(event.target.value))} />
                </FormCol>
              </FormRow>
              <FormRow>
                <FormCol>
                  <Input type="email" placeholder="Seu melhor e-mail" value={email} onChange={event => setEmail(event.target.value)} />
                  <FormButton>
                    {send ? (
                      <>{"Enviando..."}</>
                    ) : (
                      <>
                        <i className="fa fa-chevron-right"></i>
                      </>
                    )}
                  </FormButton>
                </FormCol>
              </FormRow>
            </ContactForm>
          </ContactArticle>
        </ContactSection>
      </Container>
      <Footer />
    </>
  );
}

//Function essential to get data initial in server side
async function requestInitialData() {
  let siteConfig = { sucesss: true };

  return { siteConfig };
}

//Preload to render head of html by data server side
function Head({ siteConfig }) {
  if (siteConfig) {
    return (
      <KieeeHead
        themeColor="#2c57e4"
        title="Agência Onside | Marketing Digital, Criação de Sites, SEO - Cuiabá"
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
  } else {
    return <></>;
  }
}

export default { Component, requestInitialData, Head };
