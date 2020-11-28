import styled from "styled-components";
import { Link } from "react-router-dom";

import bg from "./../../assets/icons/bg.png";

export const Container = styled.div`
  background-color: #2c57e4;
  background-image: url(${bg});
  background-repeat: repeat;

  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: stretch;

  overflow: hidden;

  position: relative;

  width: 100%;

  @media (max-width: 1130px) {
    align-items: center;
  }

  @media (max-width: 970px) {
  }
`;

export const Content = styled.div`
  align-self: center;
  display: flex;
  flex-direction: column;
  align-items: center;

  margin: 25px;
`;

export const Label = styled.label`
  font-family: "TTNorms-Medium";
  font-size: 40px;
  line-height: 60px;
  color: #ffffff;
  text-align: center;
`;

export const H1 = styled.h1`
  font-family: "TTNorms-Regular";
  font-size: 24px;
  line-height: 40px;
  color: #fff;
  text-align: center;
`;

export const Comment = styled.p`
  font-family: "TTNorms-Regular";
  font-size: 24px;
  line-height: 40px;
  color: #fff;
  text-align: center;
  text-transform: uppercase;
`;

export const Button = styled(Link)`
  padding: 9px 12px;

  font-family: "TTNorms-Regular";
  font-size: 14px;
  line-height: 19px;
  color: #ffffff;
  text-decoration: none;
  text-transform: none;

  background-color: #87bc28;
  display: flex;
  align-items: center;
  justify-content: center;

  border: 0;
  border-radius: 6px;
  z-index: 2;

  cursor: pointer;

  transition: all 0.4s ease-in-out;

  margin-top: 30px;

  &:hover {
    color: #87bc28;
    background-color: #ffffff;
  }
`;
