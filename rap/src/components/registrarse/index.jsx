import react from "react";
import {  Button, Container, ContainerForm, ContainerImg, Fondo, Formulario, Imagen, Input, Texto } from "./styled";
import freestyle from "../img/freestyle.jpg"
export const Registro = () => {
    return(
        <Fondo>
            <Container>
                <ContainerForm>
                <Formulario>
                    <ContainerImg>
                        <Imagen src={freestyle} alt="" />
                    </ContainerImg>
                    <Texto>
                        <h1>freestyle</h1>
                    </Texto>
                    
                        <Input placeholder="Nombre artistico"></Input>
                        <Input placeholder="Nombre real"></Input>
                        <Input placeholder="Correo electronico"></Input>
                        <Input placeholder="contraseña"></Input>
                    <Button>Registrarse</Button>
                    <Texto className="direccion"> <p>ya tengo una cuenta</p></Texto>
                    
                </Formulario>
                </ContainerForm>
                
            </Container>
        </Fondo>
    )
} 

export default Registro