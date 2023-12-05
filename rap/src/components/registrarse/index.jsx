import react, { useState } from "react";
import {  Button, Container, ContainerForm, ContainerImg, Fondo, Formulario, Imagen, Input, Texto } from "./styled";
import freestyle from "../img/freestyle.jpg"
export const Registro = () => {
    const  [aka, setAka] = useState("")
    const [nombre, setNombre] = useState("")
    const [correo, setCorreo] = useState("")
    const [contraseña, setContraseña] = useState("")

    
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
                    
                        <Input type="text" onChange={(e) => setAka(e.target.value)} placeholder="Nombre artistico"></Input>
                        <Input type="text" onChange={(e) => setNombre(e.target.value)} placeholder="Nombre real"></Input>
                        <Input type="email" onChange={(e) => setCorreo(e.target.value)} placeholder="Correo electronico"></Input>
                        <Input type="password" onChange={(e) => setContraseña(e.target.value)} placeholder="contraseña"></Input>
                    <Button>Registrarse</Button>
                    <Texto className="direccion"> <p>ya tengo una cuenta</p></Texto>
                    
                </Formulario>
                </ContainerForm>
                
            </Container>
        </Fondo>
    )
} 

export default Registro