import { useContext } from "react";
import {
  DisciplineAccordion,
  TeacherAccordion,
} from "../../components/accordionComponents";
import { FeedContainer } from "../../components/feedComponents";
import TabContext from "../../contexts/tabContext";

export function Feed() {
  const { tab } = useContext(TabContext);

  if (!tab.data) {
    return <h1>Carregando</h1>;
  }

  return (
    <FeedContainer>
      {tab.title === "disciplinas"
        ? tab.data.map((terms) => (
            <DisciplineAccordion data={terms}></DisciplineAccordion>
          ))
        : tab.data.map((teachers) => (
            <TeacherAccordion data={teachers}></TeacherAccordion>
          ))}
    </FeedContainer>
  );
}
