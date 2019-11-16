import React from "react";
import { Link } from "react-router-dom";

import logo from "~/assets/logo.svg";

export default function SignUp() {
  return (
    <>
      <img src={logo} alt="GoBarber" />
      <form>
        <input type="text" placeholder="Nome completo" />
        <input type="email" placeholder="Seu e-mail" />
        <input type="password" placeholder="Sua senha" />
        <button type="submit">Ciar conta</button>
        <Link to="/">Já sou cadastrado</Link>
      </form>
    </>
  );
}
