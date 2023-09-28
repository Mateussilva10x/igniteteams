import { Header } from "../../components/Header/Header";
import { Highlight } from "../../components/Highlight/HighLight";
import { Container } from "./styles";

export default function Groups() {
  return (
    <Container>
      <Header />
      <Highlight title="Turmas" subtitle="Jogue com sua turma" />
    </Container>
  );
}
