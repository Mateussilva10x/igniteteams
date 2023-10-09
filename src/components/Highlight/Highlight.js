import { Container, Subtitle, Title } from "./HighlightStyles";

function Highlight({ title, subtitle }) {
  return (
    <Container>
      <Title>{title}</Title>
      <Subtitle>{subtitle}</Subtitle>
    </Container>
  );
}

export default Highlight;
