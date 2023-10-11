import { Container, Title } from "./ButtonsStyles";

function Button({ title, type = "PRIMARY", ...rest }) {
  return (
    <Container type={type} {...rest}>
      <Title>{title}</Title>
    </Container>
  );
}

export default Button;
