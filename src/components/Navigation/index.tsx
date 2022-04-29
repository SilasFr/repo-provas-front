import { Button } from "@mui/material";
import { Box } from "@mui/system";
import { useNavigate } from "react-router-dom";

interface Props {
  tab: string;
}

export default function Nav({ tab }: Props) {
  const navigate = useNavigate();
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "wrap",
      }}
    >
      <Button
        variant={tab === "disciplinas" ? "contained" : "outlined"}
        onClick={() => navigate("/app/disciplinas")}
      >
        Disciplinas
      </Button>
      <Button
        variant={tab === "pessoa-instrutora" ? "contained" : "outlined"}
        onClick={() => navigate("/app/pessoas-instrutoras")}
      >
        Pessoa Instrutora
      </Button>
      <Button
        variant={tab === "adicionar" ? "contained" : "outlined"}
        onClick={() => navigate("/app/adicionar")}
      >
        Adicionar
      </Button>
    </Box>
  );
}
