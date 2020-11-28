import styled, { keyframes } from "styled-components";

const pulseAnimate = keyframes`

  0% {
    -moz-box-shadow: 0 0 0 0 #2753e2;
    box-shadow: 0 0 0 0 #2753e2;
  }
  50% {
      -moz-box-shadow: 0 0 0 10px rgba(204,169,44, 0);
      box-shadow: 0 0 0 10px rgba(204,169,44, 0);
  }
  70% {
      -moz-box-shadow: 0 0 0 10px rgba(204,169,44, 0);
      box-shadow: 0 0 0 10px rgba(204,169,44, 0);
  }
  100% {
      -moz-box-shadow: 0 0 0 0 rgba(204,169,44, 0);
      box-shadow: 0 0 0 0 rgba(204,169,44, 0);
  }

`;

export const Container = styled.header`
  width: 1120px;

  align-self: center;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: flex-start;
  flex: 1;

  @media (max-width: 1120px) {
    width: 100%;
    padding-left: 20px;
    padding-right: 20px;
  }
`;

export const Navigator = styled.nav`
  margin: 35px 0 70px;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  flex: 1;

  z-index: 2;

  a {
    z-index: 2;
    text-decoration: none;
    text-transform: none;
  }

  @media (max-width: 1120px) {
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    margin-bottom: 55px;

    a {
      display: none;
    }
  }
`;

export const NavItems = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  list-style: none;

  flex: 1;

  margin: 0px 50px;

  @media (max-width: 1120px) {
    margin: 0;
  }
`;

export const NavItem = styled.li`
  button {
    border: 0;
    background-color: transparent;

    margin: 0 14px;

    font-family: "TTNorms-Regular";
    font-size: 15px;
    line-height: 30px;
    color: #081d43;

    cursor: pointer;

    transition: all 0.4s ease-in-out;

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;

    &:after {
      content: "";
      width: 0px;
      height: 2px;
      background: rgb(44, 87, 228);
      background: linear-gradient(90deg, rgba(44, 87, 228, 1) 0%, rgba(135, 188, 40, 1) 89%);

      transition: all 0.4s ease-in-out;
    }

    &:hover {
      &:after {
        width: 100%;
      }
    }
  }
`;

export const NavButton = styled.button`
  padding: 9px 12px;

  font-family: "TTNorms-Regular";
  font-size: 14px;
  line-height: 19px;
  color: #ffffff;

  background-color: #87bc28;
  display: flex;
  align-items: center;
  justify-content: center;

  border: 0;
  border-radius: 6px;
  z-index: 2;

  cursor: pointer;

  transition: all 0.4s ease-in-out;

  &:hover {
    color: #87bc28;
    background-color: #ffffff;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;

  @media (max-width: 1120px) {
    align-items: stretch;
    justify-content: center;
  }
`;

export const Title = styled.h1`
  font-family: "TTNorms-Medium";
  font-size: 36px;
  line-height: 44px;
  color: #081d43;

  text-align: left;
  z-index: 2;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  margin-bottom: 35px;
  margin-right: 60%;

  @media (max-width: 1120px) {
    align-items: center;
    text-align: center;
    margin-right: 0;
  }
`;

export const Description = styled.p`
  font-family: "TTNorms-Medium";
  font-size: 16px;
  line-height: 30px;
  color: #6c7890;

  text-align: left;
  z-index: 2;

  margin-bottom: 35px;
  margin-right: 60%;

  span {
    font-family: "TTNorms-Bold";
  }

  @media (max-width: 1120px) {
    text-align: center;
    margin-right: 0;
  }
`;

export const Button = styled.a`
  padding: 12px 20px;

  font-family: "TTNorms-Regular";
  font-size: 14px;
  line-height: 19px;
  color: #ffffff;
  text-transform: uppercase;
  text-decoration: none;
  text-align: center;

  background-color: #87bc28;
  display: flex;
  align-items: center;
  justify-content: center;

  z-index: 2;

  border: 0;
  border-radius: 6px;

  cursor: pointer;

  transition: all 0.4s ease-in-out;
  animation: ${pulseAnimate} 2s infinite;

  text-transform: uppercase;

  &:hover {
    background-color: #2753e2;
    color: #ffffff;
  }

  @media (max-width: 1120px) {
    align-self: center;
  }
`;

export const LogoFigure = styled.figure``;

export const LogoImage = styled.img`
  max-width: 150px;

  @media (max-width: 1120px) {
    margin-bottom: 23px;
  }
`;

export const ImageArt = styled.img`
  position: absolute;
  right: 0;
  top: 0;

  @media (max-width: 1120px) {
    display: none;
  }
`;
