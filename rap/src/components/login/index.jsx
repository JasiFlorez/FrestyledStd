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
              <h1>Inicio</h1>
            </Texto>
            <Input placeholder="Correo electronico"></Input>
            <Input placeholder="contraseña"></Input>
            <Button>Inicio</Button>
            <Texto className="direccion">
              {" "}
              <p>ya tengo una cuenta</p>
            </Texto>
          </Formulario>
        </ContainerForm>
      </Container>
    </Fondo>
  );
};

export default Registro;
