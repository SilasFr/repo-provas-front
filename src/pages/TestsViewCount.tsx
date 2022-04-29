import api from "../services/api";

export default async function testsViewCounter(id: number) {
  try {
    const testId: string = id.toString();
    const { data: res } = await api.updateTestViews(testId);
  } catch (e) {
    console.log(e);
  }
}
