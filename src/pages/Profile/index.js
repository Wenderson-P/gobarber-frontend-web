import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Form, Input } from "@rocketseat/unform";
import { Container } from "./styles";
import { updateProfileRequest } from "~/store/modules/user/actions";

export default function Profile() {
  const dispatch = useDispatch();

  const profile = useSelector(state => state.user.profile);

  function handleSubmit(data) {
    dispatch(updateProfileRequest(data));
  }
  return (
    <Container>
      <Form initialData={profile} onSubmit={handleSubmit}>
        <Input name="name" placeholder="Nome completo" />
        <Input name="email" type="email" placeholder="Seu endereço de email" />
        <hr />

        <Input
          type="password"
          name="oldPassword"
          placeholder="Sua senha atual"
        />
        <Input type="newPassword" name="password" placeholder="Nova senha" />
        <Input
          type="confirmNewpassword"
          name="confirmNewpassword"
          placeholder="Confirm your password"
        />

        <button type="submit">Atualizar perfil</button>
      </Form>
      <button type="submit">Sair do GoBarber</button>
    </Container>
  );
}
