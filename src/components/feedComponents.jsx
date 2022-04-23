import styled from "styled-components";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Container,
} from "@mui/material";
import { ExpandMoreRounded } from "@mui/icons-material";
import { v4 as uuid } from "uuid";

export default function SimpleAccordion(term) {
  const [termTitle] = Object.keys(term);
  const [subjects] = Object.values(term);
  return (
    <div key={uuid()}>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreRounded />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <p>{termTitle}</p>
        </AccordionSummary>
        <AccordionDetails>
          {subjects.map((subject) => {
            return <p key={uuid()}>{subject}</p>;
          })}
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

const FeedContainer = styled(Container)`
  max-width: 700px;
  margin: 50px 0 0 0;
  padding: 5px 12px;

  display: flex;
  flex-direction: column;
`;

export { FeedContainer };
