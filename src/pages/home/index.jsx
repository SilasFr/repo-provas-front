import { Feed } from "./feed";
import { Header } from "./header";
import { Tabs } from "./tabs";

export function Home() {
  return (
    <>
      <Header />
      <Tabs />
      <Feed />
    </>
  );
}
