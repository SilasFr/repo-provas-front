import { useContext } from "react";
import { TestsContext } from "../contexts/TestsContext";

export default function useTestsInfo() {
  const testsContext = useContext(TestsContext);
  if (!testsContext) {
    throw new Error("useTestsInfo must be used inside a TestsContext Provider");
  }

  return testsContext;
}
