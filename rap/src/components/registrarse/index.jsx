import React from "react";
import {
  Button,
  Container,
  ContainerForm,
  Fondo,
  Formulario,
  Input,
  Texto,
} from "./styled";

export const Registro = () => {
  return (
    <Fondo>
      <Container>
        <ContainerForm>
          <Formulario>
            <Texto>
              <h1>Registrar</h1>
            </Texto>
            <Input placeholder="Nombre Artístico"></Input>
            <Input placeholder="Cual es tu Categoria"></Input>
            <Input placeholder="Correo Electrónico"></Input>
            <Input placeholder="Contraseña"></Input>
            <Input placeholder="Confirmar contraseña"></Input>
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
