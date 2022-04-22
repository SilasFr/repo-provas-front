import { useContext } from "react";
import { Container, Tab, TabsContainer } from "../../components/navComponents";
import TabContext from "../../contexts/tabContext";

export function Tabs() {
  const { tab, setTab } = useContext(TabContext);

  function handleChangeTab(e) {
    setTab({ ...tab, title: e.target.textContent });
  }
  return (
    <Container>
      <TabsContainer>
        <Tab
          variant={tab.title === "disciplinas" ? "contained" : "outlined"}
          onClick={handleChangeTab}
        >
          disciplinas
        </Tab>
        <Tab
          variant={tab.title === "pessoa instrutora" ? "contained" : "outlined"}
          onClick={handleChangeTab}
        >
          pessoa instrutora
        </Tab>
        <Tab
          variant={tab.title === "adicionar" ? "contained" : "outlined"}
          onClick={handleChangeTab}
        >
          adicionar
        </Tab>
      </TabsContainer>
    </Container>
  );
}
