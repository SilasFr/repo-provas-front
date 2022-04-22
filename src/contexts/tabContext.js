import { createContext, useState } from "react";

const TabContext = createContext();

export function TabProvider({ children }) {
  const [tab, setTab] = useState({ title: "pessoa instrutora" });

  return (
    <TabContext.Provider value={{ tab, setTab }}>
      {children}
    </TabContext.Provider>
  );
}

export default TabContext;
