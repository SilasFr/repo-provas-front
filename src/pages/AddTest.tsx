import {
  Autocomplete,
  Button,
  Divider,
  FormControl,
  TextField,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";
import Nav from "../components/Navigation";

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

export default function Add() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    pdfUrl: "",
    category: null,
    discipline: null,
    teacher: null,
  });

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
            label="Título da prova"
            type="text"
            name="name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          ></TextField>
          <TextField
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
            options={["teste1", "teste2"]}
            renderInput={(params) => (
              <TextField {...params} label="Categoria" />
            )}
          />
          <Autocomplete
            value={formData.discipline}
            onChange={(event: any, newValue: string | null) => {
              setFormData({ ...formData, discipline: newValue });
            }}
            id="controllable-states-demo"
            options={["teste1", "teste2"]}
            renderInput={(params) => (
              <TextField {...params} label="Disciplina" />
            )}
          />
          <Autocomplete
            value={formData.teacher}
            onChange={(event: any, newValue: string | null) => {
              setFormData({ ...formData, teacher: newValue });
            }}
            id="controllable-states-demo"
            options={["teste1", "teste2"]}
            renderInput={(params) => (
              <TextField {...params} label="Pessoa instrutora" />
            )}
          />

          <Button variant="contained">Enviar</Button>
        </FormControl>
      </Box>
    </>
  );
}
