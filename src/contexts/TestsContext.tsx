import { createContext, useState } from "react";

interface TestsInfo {
  categories: [] | null;
  disciplines: [] | null;
  teachers: [] | null;
}

interface ITestsContext {
  testsInfo: TestsInfo | null;
  setTestsInfo: (newTestsInfo: TestsInfo | null) => void;
}

const TestsContext = createContext<ITestsContext | null>(null);

interface Props {
  children: React.ReactNode;
}

export function TestsProvider({ children }: Props) {
  const [testsInfo, setTestsInfo] = useState<TestsInfo | null>(null);

  return (
    <TestsContext.Provider value={{ testsInfo, setTestsInfo }}>
      {children}
    </TestsContext.Provider>
  );
}
