import { Container, Logo } from "./HeaderStyles";

import logoImg from "../../assets/logo.png";

export function Header() {
  return (
    <Container>
      <Logo source={logoImg} />
    </Container>
  );
}
