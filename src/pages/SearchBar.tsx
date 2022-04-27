import { SearchOutlined } from "@mui/icons-material";
import {
  Divider,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
} from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";
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

export function SearchBar({ label }: any) {
  const { token } = useAuth();
  const [filter, setFilter] = useState("");

  async function handleSubmit(e: any) {
    e.preventDefault();
    try {
      if (!token) return;
      const { data: result } = await api.getTestsByFilteredDiscipline(
        filter,
        token
      );
      console.log(result);
    } catch (e) {
      console.log(e);
    }
    console.log("clicou");
  }
  return (
    <Box sx={{ margin: "0 auto" }}>
      <FormControl sx={styles.input} variant="outlined">
        <InputLabel htmlFor={"name"}>{`Pesquisar por ${label}`}</InputLabel>
        <OutlinedInput
          sx={{ marginX: "auto", marginBottom: "25px", width: "450px" }}
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              console.log("mandou");
            }
          }}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleSubmit}
                edge="end"
              >
                <SearchOutlined />
              </IconButton>
            </InputAdornment>
          }
        />
      </FormControl>
      <Divider sx={{ marginBottom: "35px" }} />
    </Box>
  );
}
