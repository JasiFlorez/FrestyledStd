import React from "react";
import {
  Button,
  Container,
  ContainerForm,
  ContainerImg,
  Fondo,
  Formulario,
  Imagen,
  Input,
  Texto,
} from "./styled";
import Logo from "../img/logo.gif";

export const Registro = () => {
  return (
    <Fondo>
      <Container>
        <ContainerForm>
          <Formulario>
            <ContainerImg>
              <img src={Logo} type="video/gif" />
            </ContainerImg>
            <Texto>
              <h1>freestyle</h1>
            </Texto>
            <Input placeholder="Nombre artístico"></Input>
            <Input placeholder="Nombre real"></Input>
            <Input placeholder="Correo electrónico"></Input>
            <Input placeholder="Contraseña"></Input>
            <Button>Registrarse</Button>
            <Texto className="direccion">
              <p>Ya tengo una cuenta</p>
            </Texto>
          </Formulario>
        </ContainerForm>
      </Container>
    </Fondo>
  );
};

export default Registro;
