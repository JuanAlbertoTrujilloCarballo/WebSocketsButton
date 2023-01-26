import React from "react";
import { useNavigate } from "react-router-dom";
import Layout from "../components/Layout";
import "./LoginPage.css";

function LoginPage() {

  const navigate = useNavigate();

  const [username, setUsername] = React.useState("");
  const [errorMessage, setErrorMessage] = React.useState(false);

  function handleSubmit() {
    if (!username) {
      setErrorMessage(true);
      return;
    }

    navigate(`/main/${username}`);
  }

  return (
    <Layout>
      <form id="login-page-username-form">
        <label htmlFor="login-page-username">Pon el usuario por el que quieres que te reconozcan tus amigos</label>
        <input id="login-page-username" type="text" placeholder="Your name or nickname"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        {errorMessage ? <span id="login-page-error-message">* Debes escribir algún usuario</span> : <></>}
        <button id="login-page-login-button" type="button" onClick={handleSubmit}>Vamos a pulsar el botón</button>
      </form>
    </Layout>
  )
}

export default LoginPage;