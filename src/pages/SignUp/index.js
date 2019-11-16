import React from "react";
import { Link } from "react-router-dom";
import * as Yup from "yup";
import { Form, Input } from "@rocketseat/unform";

import logo from "~/assets/logo.svg";

const schema = Yup.object().shape({
  name: Yup.string().required("O seu nome é obrigatório"),
  email: Yup.string()
    .email("Insira um e-mail válido")
    .required("O e-mail é obrigatório"),
  password: Yup.string()
    .required("A senha é obrigatória")
    .min(6, "No mínimo 6 caracteres")
});

export default function SignUp() {
  function handleSubmit(data) {
    console.tron.log(data);
  }

  return (
    <>
      <img src={logo} alt="GoBarber" />
      <Form schema={schema} onSubmit={handleSubmit}>
        <Input name="name" type="text" placeholder="Nome completo" />
        <Input name="email" type="email" placeholder="Seu e-mail" />
        <Input name="password" type="password" placeholder="Sua senha" />
        <button type="submit">Criar conta</button>
        <Link to="/">Já sou cadastrado</Link>
      </Form>
    </>
  );
}
