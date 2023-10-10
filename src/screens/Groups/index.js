import { GroupCard } from "../../components/GroupCard";
import { Header } from "../../components/Header";
import { Highlight } from "../../components/Highlight";
import { Container } from "./styles";

export default function Groups() {
  return (
    <Container>
      <Header showBackButton />
      <Highlight title="Turmas" subtitle="Jogue com sua turma" />
      <GroupCard title="Galera do ignite" />
    </Container>
  );
}
