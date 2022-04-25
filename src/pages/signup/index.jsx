import { useState } from "react";
import {
  Form,
  Inputs,
  GithubButton,
  Container,
  ConfirmButton,
  Redirect,
  Interface,
} from "../../components/AuthComponents";
import { Logo } from "../../components/Logo";
import Swal from "sweetalert2";
import api from "../../services/api";
import { useNavigate } from "react-router-dom";

export function SignUp() {
  const [formData, setFormData] = useState({});
  const navigate = useNavigate();

  function handleInputChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    if (formData.password !== formData.passwordConfirmation) {
      return Swal.fire({
        icon: "error",
        title: "Oops ...",
        text: "Your passwords don't match",
      });
    }

    const { email, password } = formData;
    const promise = api.postSignUp(email, password);
    promise.then((response) => {
      navigate("/");
    });

    promise.catch((error) => {
      alert(error.response);
    });
  }

  return (
    <Container>
      <Logo />
      <main>
        <h2>Cadastro</h2>
        <GithubButton variant="contained">ENTRAR COM O GITHUB</GithubButton>
        <p>ou</p>
        <Form onSubmit={handleSubmit}>
          <Inputs
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email || ""}
            onChange={handleInputChange}
            required
          ></Inputs>
          <Inputs
            type="password"
            name="password"
            placeholder="Senha"
            value={formData.password || ""}
            onChange={handleInputChange}
            required
          />
          <Inputs
            type="password"
            name="passwordConfirmation"
            placeholder="Confirme sua senha"
            value={formData.passwordConfirmation || ""}
            onChange={handleInputChange}
            required
          />
          <Interface>
            <Redirect to={"/"}>
              <p>Já possuo cadastro</p>
            </Redirect>
            <ConfirmButton type="submit" variant="contained">
              CADASTRAR
            </ConfirmButton>
          </Interface>
        </Form>
      </main>
    </Container>
  );
}
