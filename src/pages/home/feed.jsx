import { useContext } from "react";
import { DisciplineAccordion } from "../../components/accordions/disciplineAccordion.jsx";
import { TeacherAccordion } from "../../components/accordions/teacherAccordion.jsx";
import { FeedContainer } from "../../components/feedComponents";
import TabContext from "../../contexts/tabContext";
import { v4 as uuid } from "uuid";

export function Feed() {
  const { tab } = useContext(TabContext);

  if (!tab.data) {
    return <h1>Carregando</h1>;
  }

  return (
    <FeedContainer>
      {tab.title === "disciplinas"
        ? tab.data.map((terms) => (
            <DisciplineAccordion
              data={terms}
              key={uuid()}
            ></DisciplineAccordion>
          ))
        : tab.data.map((teachers) => (
            <TeacherAccordion data={teachers} key={uuid()}></TeacherAccordion>
          ))}
    </FeedContainer>
  );
}
