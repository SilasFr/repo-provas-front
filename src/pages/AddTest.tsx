import {
  Autocomplete,
  Button,
  Divider,
  FormControl,
  TextField,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import { AxiosError } from "axios";
import { useEffect, useState } from "react";
import Nav from "../components/Navigation";
import useAlert from "../hooks/useAlert";
import useAuth from "../hooks/useAuth";
import api, { Category, Discipline, Teacher } from "../services/api";

const styles = {
  container: {
    marginTop: "180px",
    width: "460px",
    display: "flex",
    flexDirection: "column",
    textAlign: "center",
  },
  title: { marginBottom: "30px" },
  dividerContainer: {
    display: "flex",
    alignItems: "center",
    gap: "8px",
    marginTop: "16px",
    marginBottom: "26px",
  },
  input: {
    margin: "0 auto 16px auto",
    fontSize: "24px",
    lineHeight: "80px",
    maxWidth: "300px",
  },
  actionsContainer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
};

interface FormData {
  name: string | null;
  pdfUrl: string | null;
  category: string | null;
  discipline: string | null;
  teacher: string | null;
}

interface ITestsInfo {
  categories: Category[] | null;
  disciplines: Discipline[] | null;
  teachers: Teacher[] | null;
}

export default function Add() {
  const { token } = useAuth();
  const { setMessage } = useAlert();
  const [testsInfo, setTestsInfo] = useState<ITestsInfo>({
    categories: null,
    disciplines: null,
    teachers: null,
  });
  const [formData, setFormData] = useState<FormData>({
    name: "",
    pdfUrl: "",
    category: null,
    discipline: null,
    teacher: null,
  });

  useEffect(() => {
    async function loadPage() {
      if (!token) return;
      const { data: categoriesData } = await api.getCategories(token);
      const { data: disciplinesData } = await api.getAllDisciplines(token);

      setTestsInfo({
        categories: categoriesData.categories,
        disciplines: disciplinesData,
        teachers: null,
      });
    }
    loadPage();
  }, [token]);

  async function handleDisciplineSelection(
    event: any,
    newValue: string | null
  ) {
    if (!token) {
      return;
    }
    setFormData({ ...formData, discipline: newValue, teacher: null });

    if (!newValue) {
      return;
    }

    const disciplineId = getDisciplineId(newValue);

    const { data: teachersOfThisDiscipline } = await api.getTeacherByDiscipline(
      token,
      disciplineId
    );
    setTestsInfo({
      ...testsInfo,
      teachers: teachersOfThisDiscipline,
    });
  }

  async function handleSubmit(e: any) {
    if (
      !formData.discipline ||
      !formData.teacher ||
      !formData.category ||
      !token
    ) {
      setMessage({
        text: "O formulário está incompleto ou incorreto",
        type: "error",
      });
      return;
    }
    e.preventDefault();

    const categoryId = getCategoryId();

    const teacherId = getTeacherId();

    const disciplineId = getDisciplineId(formData.discipline);

    const newTest = {
      name: formData.name,
      pdfUrl: formData.pdfUrl,
      categoryId,
      teacherId,
      disciplineId,
    };

    try {
      const { data: res } = await api.createTest(token, newTest);

      setFormData({
        name: "",
        pdfUrl: "",
        category: null,
        discipline: null,
        teacher: null,
      });

      setMessage({ type: "success", text: res });
    } catch (e: any) {
      setMessage({ type: "error", text: e?.response?.data?.toString() });
    }
  }

  if (!testsInfo?.categories || !testsInfo.disciplines) {
    return <h1>Carregando</h1>;
  }
  return (
    <>
      <Box sx={{ margin: "0 auto", width: "100%" }}>
        <Typography sx={styles.input}>Adicione uma prova</Typography>
        <Divider sx={{ marginBottom: "35px" }} />
      </Box>
      <Box sx={{ marginX: "auto", width: "700px" }}>
        <Nav tab="adicionar" />
      </Box>

      <Box
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <FormControl
          sx={{
            margin: "50px auto",
            width: "700px",
            display: "flex",
            flexDirection: "column",
            gap: "20px",
          }}
          variant="outlined"
        >
          <TextField
            required
            label="Título da prova"
            type="text"
            name="name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          ></TextField>
          <TextField
            required
            label="PDF da prova"
            type="url"
            name="pdfUrl"
            onChange={(e) =>
              setFormData({ ...formData, pdfUrl: e.target.value })
            }
          ></TextField>

          <Autocomplete
            value={formData.category}
            onChange={(event: any, newValue: string | null) => {
              setFormData({ ...formData, category: newValue });
            }}
            id="controllable-states-demo"
            options={testsInfo?.categories.map(
              (category: Category) => category.name
            )}
            renderInput={(params) => (
              <TextField {...params} label="Categoria" />
            )}
          />
          <Autocomplete
            value={formData.discipline}
            onChange={handleDisciplineSelection}
            id="controllable-states-demo"
            options={testsInfo?.disciplines.map(
              (discipline: Discipline) => discipline.name
            )}
            renderInput={(params) => (
              <TextField {...params} label="Disciplina" />
            )}
          />
          <Autocomplete
            disabled={!formData.discipline}
            value={formData.teacher}
            onChange={(event: any, newValue: string | null) => {
              setFormData({ ...formData, teacher: newValue });
            }}
            id="controllable-states-demo"
            options={
              testsInfo.teachers
                ? testsInfo.teachers.map((teacher: Teacher) => teacher.name)
                : []
            }
            renderInput={(params) => (
              <TextField {...params} label="Pessoa instrutora" />
            )}
          />

          <Button onClick={handleSubmit} variant="contained" type="submit">
            Enviar
          </Button>
        </FormControl>
      </Box>
    </>
  );

  function getTeacherId() {
    const teacher = testsInfo.teachers?.find(
      (teacher) => teacher.name === formData.teacher
    );

    const teacherId = teacher?.id.toString();
    return teacherId;
  }

  function getCategoryId() {
    const category = testsInfo.categories?.find(
      (category) => category.name === formData.category
    );
    const categoryId = category?.id.toString();
    return categoryId;
  }

  function getDisciplineId(newValue: string) {
    const discipline = testsInfo?.disciplines?.find(
      (discipline: Discipline) => discipline.name === newValue
    );

    const id = discipline?.id.toString();
    return id;
  }
}
