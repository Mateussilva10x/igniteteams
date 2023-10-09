import { BackButton, BackIcon, Container, Logo } from "./HeaderStyles";
import logoImg from "../../assets/logo.png";

function Header({ showBackButton = false }) {
  return (
    <Container>
      {showBackButton && (
        <BackButton>
          <BackIcon />
        </BackButton>
      )}
      <Logo source={logoImg} />
    </Container>
  );
}

export default Header;
