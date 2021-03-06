import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import TabContext from "../../contexts/tabContext";
import UserContext from "../../contexts/userContext";
import api from "../../services/api";
import { Feed } from "./feed";
import { Header } from "./header";
import { Tabs } from "./tabs";

export function Home() {
  const { userData } = useContext(UserContext);
  const { tab, setTab } = useContext(TabContext);
  const navigate = useNavigate();

  useEffect(() => {
    let query = "";
    if (tab.title === "disciplinas") {
      query = "discipline";
    }
    if (tab.title === "pessoa instrutora") {
      query = "teacher";
    }
    const promise = api.getTests(userData.token, query);
    promise.then((response) => {
      setTab({ ...tab, data: response.data });
    });
    promise.catch((error) => {
      alert("error: ", error.response);
      navigate("/");
    });
  }, [tab.title]);
  return (
    <>
      <Header />
      <Tabs />
      <Feed />
    </>
  );
}
