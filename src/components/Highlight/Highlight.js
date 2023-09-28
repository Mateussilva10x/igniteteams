import { Container, Subtitle, Title } from "./HighlightStyles";

export function Highlight({ title, subtitle }) {
  return (
    <Container>
      <Title>{title}</Title>
      <Subtitle>{subtitle}</Subtitle>
    </Container>
  );
}
