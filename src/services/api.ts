import axios from "axios";

const baseAPI = axios.create({
  baseURL: "http://localhost:5000/",
});

interface UserData {
  email: string;
  password: string;
}

function getConfig(token: string) {
  return {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
}

async function signUp(signUpData: UserData) {
  await baseAPI.post("/sign-up", signUpData);
}

async function signIn(signInData: UserData) {
  return baseAPI.post<{ token: string }>("/sign-in", signInData);
}

export interface Term {
  id: number;
  number: number;
}

export interface Discipline {
  id: number;
  name: string;
  teacherDisciplines: TeacherDisciplines[];
  term: Term;
}

export interface TeacherDisciplines {
  id: number;
  discipline: Discipline;
  teacher: Teacher;
  tests: Test[];
}

export interface Teacher {
  id: number;
  name: string;
}

export interface Category {
  id: number;
  name: string;
}

export interface Test {
  id: number;
  name: string;
  pdfUrl: string;
  views: number;
  category: Category;
}

export type TestByDiscipline = Term & {
  disciplines: Discipline[];
};

export type TestByTeacher = TeacherDisciplines & {
  teacher: Teacher;
  disciplines: Discipline[];
  tests: Test[];
};

export type TestInsert = Partial<Test>;

async function getTestsByDiscipline(token: string) {
  const config = getConfig(token);
  return baseAPI.get<{ tests: TestByDiscipline[] }>(
    "/tests?groupBy=disciplines",
    config
  );
}

async function getTestsByTeacher(token: string) {
  const config = getConfig(token);
  return baseAPI.get<{ tests: TestByTeacher[] }>(
    "/tests?groupBy=teachers",
    config
  );
}

async function getCategories(token: string) {
  const config = getConfig(token);
  return baseAPI.get<{ categories: Category[] }>("/categories", config);
}

async function getTestsByFilteredDiscipline(filter: string, token: string) {
  const config = getConfig(token);
  return baseAPI.get(`/tests?groupBy=disciplines&where=${filter}`, config);
}

async function getTestsByFilteredTeacher(filter: string, token: string) {
  const config = getConfig(token);
  return baseAPI.get(`/tests?groupBy=teachers&where=${filter}`, config);
}

async function updateTestViews(id: string) {
  return baseAPI.patch(`/tests/views/${id}`);
}

async function getAllDisciplines(token: string) {
  const config = getConfig(token);
  return baseAPI.get(`/disciplines`, config);
}

async function getTeacherByDiscipline(token: string, id: string | undefined) {
  const config = getConfig(token);
  return baseAPI.get(`/teachers/${id}`, config);
}

async function createTest(token: string, test: any) {
  const config = getConfig(token);
  return baseAPI.post(`/tests/add`, test, config);
}

async function oauth() {}

const api = {
  signUp,
  signIn,
  oauth,
  createTest,
  getTestsByDiscipline,
  getTestsByTeacher,
  getCategories,
  getTestsByFilteredDiscipline,
  getTestsByFilteredTeacher,
  updateTestViews,
  getAllDisciplines,
  getTeacherByDiscipline,
};

export default api;
