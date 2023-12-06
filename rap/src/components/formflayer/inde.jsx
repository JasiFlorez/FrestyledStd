import React from "react";
import { Form, Input } from "./styled";

export default function Flayerform() {
  return (
    <Form>
      <Input placeholder="Nombre de flaye"></Input>
      <Input placeholder="Hora"></Input>
      <Input placeholder="Direccion"></Input>
      <Input placeholder="Referencia"></Input>
      <Input placeholder="Organizador"></Input>
    </Form>
  );
}
