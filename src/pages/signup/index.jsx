import { useState } from "react";
import {
  Form,
  Inputs,
  GithubButton,
  Container,
  ConfirmButton,
  SeePassword,
  Redirect,
  Interface,
} from "../../components/AuthComponents";
import { Logo } from "../../components/Logo";

export function SignUp() {
  const [formData, setFormData] = useState([]);

  function handleInputChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }
  return (
    <Container>
      <Logo />
      <main>
        <h2>Cadastro</h2>
        <GithubButton variant="contained">ENTRAR COM O GITHUB</GithubButton>
        <p>ou</p>
        <Form action="">
          <Inputs
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email || ""}
            onChange={handleInputChange}
            required
          >
            <SeePassword />
          </Inputs>
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
        </Form>
        <Interface>
          <Redirect to={"/"}>
            <p>Já possuo cadastro</p>
          </Redirect>
          <ConfirmButton variant="contained">CADASTRAR</ConfirmButton>
        </Interface>
      </main>
    </Container>
  );
}
