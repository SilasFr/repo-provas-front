import { useContext } from "react";
import SimpleAccordion, {
  FeedContainer,
} from "../../components/feedComponents";
import TabContext from "../../contexts/tabContext";

export function Feed() {
  const { tab } = useContext(TabContext);
  const list = tab.data;

  console.log(list);
  if (!tab.data) {
    return <h1>Carregando</h1>;
  }
  return (
    <FeedContainer>
      {list.map((terms) => (
        <SimpleAccordion data={terms}></SimpleAccordion>
      ))}
    </FeedContainer>
  );
}
