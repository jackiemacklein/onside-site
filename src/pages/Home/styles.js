import styled from "styled-components";

import bg from "./../../assets/icons/bg.png";

export const Container = styled.main`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: flex-start;

  margin-top: 125px;

  @media (max-width: 1120px) {
    margin-top: 60px;
  }
`;

export const StepsSection = styled.section`
  width: 1120px;

  align-self: center;

  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: flex-start;

  @media (max-width: 1120px) {
    width: 100%;
    padding-left: 10px;
    padding-right: 10px;
  }
`;

export const StepsHeader = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const StepsTitle = styled.h2`
  font-family: "TTNorms-Medium";
  font-size: 30px;
  line-height: 44px;
  color: #081d43;

  text-align: center;
`;

export const StepsSubTitle = styled.span`
  font-family: "TTNorms-Regular";
  font-size: 15px;
  line-height: 30px;
  color: #6c7890;

  text-align: center;
  text-transform: uppercase;
`;

export const Steps = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: stretch;
  justify-content: flex-start;

  margin-top: 30px;
`;

export const Step = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  padding: 20px;
  width: 33.33%;

  @media (max-width: 1020px) {
    width: 50%;
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const StepTitle = styled.h3`
  font-family: "TTNorms-Regular";
  font-size: 18px;
  line-height: 44px;
  color: #081d43;

  text-align: center;
`;

export const StepDescription = styled.p`
  font-family: "TTNorms-Regular";
  font-size: 16px;
  line-height: 30px;
  color: #6c7890;

  text-align: center;
`;

export const StepsImage = styled.img`
  align-self: center;
  max-width: 100%;
`;

export const ServicesSection = styled.section`
  width: 100%;

  background-color: #2c57e4;
  background-image: url(${bg});
  background-repeat: repeat;

  padding: 60px;
  margin-top: 30px;

  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 1120px) {
    padding: 20px;
  }
`;

export const ServicesArticle = styled.article`
  width: 1120px;

  align-self: center;

  @media (max-width: 1120px) {
    width: 100%;
    padding-left: 10px;
    padding-right: 10px;
  }
`;

export const ServicesHeader = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const ServicesSubTitle = styled.span`
  font-family: "TTNorms-Medium";
  font-size: 30px;
  line-height: 44px;
  color: #ffffff;

  text-align: center;
  text-transform: uppercase;
`;

export const ServicesTitle = styled.h2`
  font-family: "TTNorms-Light";
  font-size: 14px;
  line-height: 25px;
  color: #ffffff;

  text-align: center;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Services = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: stretch;
  justify-content: center;

  margin-top: 60px;
`;

export const ServiceLink = styled.a`
  transition: all 0.4s ease-in-out;

  font-family: "TTNorms-Bold";
  font-size: 14px;
  line-height: 14px;
  color: #000000;
  text-align: center;

  padding: 20px;

  background-color: #87bc28;
  color: #fff;
  text-transform: none;
  text-decoration: none;

  &:hover {
    background-color: #05cd51;
  }

  @media (min-width: 768px) {
    position: absolute;
    bottom: -100px;
    width: 100%;
    left: 0;
  }
`;

export const Service = styled.li`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: space-between;

  margin: 15px;

  width: 30%;

  background-color: #ffffff;

  border-radius: 6px;
  overflow: hidden;
  box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.55);

  position: relative;

  &:hover {
    ${ServiceLink} {
      bottom: 0;
    }
  }

  @media (max-width: 1020px) {
    width: 40%;
  }

  @media (max-width: 768px) {
    width: 90%;
  }
`;

export const ServiceDescription = styled.p`
  font-family: "TTNorms-Regular";
  font-size: 14px;
  line-height: 22px;
  color: #7e8085;
  text-align: center;

  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: flex-start;

  padding: 25px;

  flex: 1;

  span {
    font-family: "TTNorms-Bold";
    text-align: center;
    padding-top: 10px;
  }
`;

export const ServiceTitle = styled.h2`
  font-family: "TTNorms-Bold";
  font-size: 14px;
  line-height: 14px;
  color: #000000;
  text-align: center;

  padding: 20px;

  background-color: #ccc;
`;

export const PortfolioSection = styled.section`
  width: 1120px;

  align-self: center;

  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: flex-start;

  margin-top: 45px;

  @media (max-width: 1120px) {
    width: 100%;
    padding-left: 10px;
    padding-right: 10px;
  }
`;

export const PortfolioHeader = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const PortfolioSubTitle = styled.span`
  font-family: "TTNorms-Regular";
  font-size: 15px;
  line-height: 30px;
  color: #6c7890;

  text-align: center;
  text-transform: uppercase;
`;

export const PortfolioTitle = styled.h2`
  font-family: "TTNorms-Medium";
  font-size: 30px;
  line-height: 44px;
  color: #081d43;

  text-align: center;
`;

export const PortfolioItems = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: stretch;
  justify-content: center;

  margin-top: 60px;
`;

export const PortfolioItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  margin: 15px;

  width: 343px;

  background-color: #ffffff;

  border-radius: 6px;
  overflow: hidden;

  @media (max-width: 1020px) {
    width: 40%;
  }

  @media (max-width: 768px) {
    width: 90%;
  }
`;

export const PortfolioItemFigure = styled.figure`
  width: 100%;
  height: 100%;
`;

export const PortfolioItemImage = styled.img`
  width: 100%;
  height: 100%;
`;

export const PortfolioItemTitle = styled.h3``;

export const ContactSection = styled.section`
  width: 100%;

  background-color: #2c57e4;
  background-image: url(${bg});
  background-repeat: repeat;

  padding: 60px;
  margin-top: 30px;

  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 1120px) {
    padding: 20px;
  }
`;

export const ContactArticle = styled.article`
  width: 1120px;

  align-self: center;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;

  @media (max-width: 1120px) {
    width: 100%;
    padding-left: 10px;
    padding-right: 10px;
    flex-direction: column;
    align-items: stretch;
  }
`;

export const ContactTitle = styled.h2`
  font-family: "TTNorms-Regular";
  font-size: 25px;
  line-height: 44px;
  color: #ffffff;

  text-align: center;

  width: 30%;
  padding-right: 60px;

  @media (max-width: 1120px) {
    width: 100%;
    padding-right: 0;
    padding-bottom: 20px;
  }
`;

export const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: flex-start;

  flex: 1;
`;

export const FormRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;

  @media (max-width: 1120px) {
    flex-direction: column;
    align-items: stretch;
  }
`;

export const FormCol = styled.div`
  flex: 1;

  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: center;

  margin: 15px;

  position: relative;
`;

export const Input = styled.input`
  padding: 15px;
  border: 0;
  border-radius: 4px;

  font-family: "TTNorms-Regular";
  font-size: 15px;
  line-height: 30px;
  color: #6c7890;

  text-align: left;

  &.email {
    padding-right: 60px;
  }
`;

export const FormButton = styled.button`
  background-color: #2f5bea;
  border: 0;

  transition: all 0.4s ease-in-out;

  cursor: pointer;

  position: absolute;

  height: 50px;

  border-radius: 4px;

  color: #fff;
  font-size: 22px;
  right: 4px;

  padding: 0px 22.5px;

  &:hover {
    background-color: #87bc28;
  }
`;
