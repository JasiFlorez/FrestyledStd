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
              <Imagen src={Logo} type="video/gif" />
            </ContainerImg>
            <Texto>
              <h1>freestyle</h1>
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
