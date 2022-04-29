import { createContext, useState } from "react";
import { Category, Discipline, Teacher } from "../services/api";

interface TestsInfo {
  categories: readonly Category[] | null;
  disciplines: readonly Discipline[] | null;
  teachers: readonly Teacher[] | null;
}

interface ITestsContext {
  testsInfo: TestsInfo | null;
  setTestsInfo: (newTestsInfo: TestsInfo | null) => void;
}

export const TestsContext = createContext<ITestsContext | null>(null);

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
