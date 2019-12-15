import React from "react";
import { Form, Input } from "@rocketseat/unform";
import { Container } from "./styles";

export default function Profile() {
  return (
    <Container>
      <Form>
        <Input name="name" placeholder="Nome completo" />
        <Input name="email" type="email" placeholder="Seu endereço de email" />
        <hr />

        <Input
          type="password"
          name="oldPassword"
          placeholder="Sua senha atual"
        />
        <Input type="password" name="password" placeholder="Nova senha" />
        <Input
          type="password"
          name="password"
          placeholder="Confirm your password"
        />

        <button type="submit">Atualizar perfil</button>
      </Form>
      <button type="submit">Sair do GoBarber</button>
    </Container>
  );
}
