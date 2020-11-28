import styled from "styled-components";

export const Container = styled.footer`
  width: 100%;

  padding: 20px;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.div`
  width: 1120px;

  align-self: center;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 1120px) {
    width: 100%;
    padding-left: 10px;
    padding-right: 10px;
    flex-direction: column;
  }
`;

export const Description = styled.p`
  font-family: "TTNorms-Regular";
  font-size: 14px;
  line-height: 30px;
  color: #6c7890;
`;
