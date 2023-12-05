import styled from "styled-components"

export const Fondo = styled.div`
    width: 100%;
    height: 100%;
`
export const Container = styled.div`
    background-image: url(https://i.pinimg.com/originals/12/10/af/1210af59c277c155e2fc7cce6d9703bd.png);
    background-repeat: no-repeat;
    background-size: 100%;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: left;
`
export const ContainerForm = styled.div`
background-color: #ff000066;
    width: 27%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`
export const Formulario = styled.form`

    width: 90%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    
`
export const ContainerImg = styled.div`
    width: 100%;
    height: 20%;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
`
export const Imagen = styled.img`
    border-radius: 10px;
    width: 100px;
    height: 50px;
`

export const Texto = styled.div` 
    width: 45%;
    height: 7%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
    color: #fff;
    &.direccion{
        justify-content: left;
        font-size: 15px;
    }
`

export const ContabinerInput = styled.div`
    background-color: aquamarine;
    width: 70%;
    height: 80%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

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
`

export const ContanierButton = styled.div`
    background-color: #273542;
    width: 100%;
    height: 20%;
`
export const Button = styled.button`
    background-color: #31043662;
    width: 200px;
    height: 50px;
    border-radius: 7px;
    color: #fff;
    font-size: 20px;
    border: solid 1px #ffffff52;
    cursor: pointer;
`

