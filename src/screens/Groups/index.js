import { useState } from "react";
import { Container } from "./styles";
import { FlatList } from "react-native";
import { GroupCard, Header, Highlight, ListEmpty } from "../../components";

export default function Groups() {
  const [groups, setGroups] = useState([]);

  return (
    <Container>
      <Header />
      <Highlight title="Turmas" subtitle="Jogue com sua turma" />

      <FlatList
        data={groups}
        keyExtractor={(item) => item}
        renderItem={({ item }) => <GroupCard title={item} />}
        contentContainerStyle={groups.length === 0 && { flex: 1 }}
        ListEmptyComponent={() => <ListEmpty message="Cadastre uma turma" />}
      />
    </Container>
  );
}
