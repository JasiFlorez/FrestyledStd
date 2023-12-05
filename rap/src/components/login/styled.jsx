import styled from "styled-components";
import Plaza from "../img/H1H65gatEg_1256x620.jpg";

export const Fondo = styled.div`
  width: 100%;
  height: 100%;
`;
export const Container = styled.div`
  background-image: url(${Plaza});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: left;
`;
export const ContainerForm = styled.div`
  background-color: #2b2a2a66;
  width: 27%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const Formulario = styled.form`
  width: 90%;
  height: 70%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
`;
export const Texto = styled.div`
  width: 45%;
  height: 7%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  color: #fff;
  &.direccion {
    justify-content: left;
    font-size: 15px;
  }
`;

export const ContabinerInput = styled.div`
  background-color: aquamarine;
  width: 70%;
  height: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Input = styled.input`
  background-color: #0000007b;
  width: 350px;
  height: 50px;
  padding-left: 5px;
  outline: none;
  border-radius: 7px;
  color: #fff;
  border: none;
  font-size: 15px;
  border: solid 1px #ffffff52;
`;

export const ContanierButton = styled.div`
  background-color: #273542;
  width: 100%;
  height: 20%;
`;
export const Button = styled.button`
  background-color: #31043662;
  width: 200px;
  height: 50px;
  border-radius: 7px;
  color: #fff;
  font-size: 20px;
  border: solid 1px #ffffff52;
  cursor: pointer;
`;
