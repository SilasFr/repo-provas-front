import { SearchOutlined } from "@mui/icons-material";
import {
  Divider,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField,
} from "@mui/material";
import { Box } from "@mui/system";
import { AxiosError } from "axios";
import { useState } from "react";
import useAlert from "../hooks/useAlert";
import useAuth from "../hooks/useAuth";
import api from "../services/api";

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
  input: { marginBottom: "16px" },
  actionsContainer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
};

export function SearchBar({
  label,
  tab,
  setTerms,
  setTeachersDisciplines,
}: any) {
  const { setMessage } = useAlert();
  const { token } = useAuth();
  const [filter, setFilter] = useState("");

  async function handleSubmit(e: any) {
    e.preventDefault();
    try {
      if (!token) return;
      if (tab === "disciplines") {
        const { data: result } = await api.getTestsByFilteredDiscipline(
          filter,
          token
        );
        setTerms(result.tests);
      }

      if (tab === "teachers") {
        const { data: result } = await api.getTestsByFilteredTeacher(
          filter,
          token
        );
        setTeachersDisciplines(result.tests);
      }
    } catch (e: AxiosError | any) {
      setMessage(e);
    }
  }
  return (
    <Box sx={{ margin: "0 auto" }}>
      <FormControl sx={styles.input} variant="outlined">
        <TextField
          label={`Pesquisar por ${label}`}
          sx={{ marginX: "auto", marginBottom: "25px", width: "450px" }}
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleSubmit(e);
            }
          }}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleSubmit}
                  edge="end"
                >
                  <SearchOutlined />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </FormControl>
      <Divider sx={{ marginBottom: "35px" }} />
    </Box>
  );
}
