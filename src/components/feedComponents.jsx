import styled from "styled-components";
import { Container } from "@mui/material";

const FeedContainer = styled(Container)`
  max-width: 700px;
  margin: 50px 0 0 0;
  padding: 0 12px;

  display: flex;
  flex-direction: column;

  background-color: #fff;
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.3);
  border-radius: 4px;
`;

export { FeedContainer };
