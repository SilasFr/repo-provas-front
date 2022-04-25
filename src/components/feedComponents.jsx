import styled from "styled-components";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Container,
} from "@mui/material";
import { ExpandMoreRounded } from "@mui/icons-material";
import { v4 as uuid } from "uuid";

export default function SimpleAccordion({ data }) {
  const [dataTitle] = Object.keys(data);
  const [dataContent] = Object.values(data);

  return (
    <div key={uuid()}>
      <Accordion key={uuid()}>
        <AccordionSummary
          expandIcon={<ExpandMoreRounded />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <p>{dataTitle}º Período</p>
        </AccordionSummary>
        <AccordionDetails>
          {dataContent.map((item) => (
            <div key={uuid()}>
              <Accordion key={uuid()}>
                <AccordionSummary
                  expandIcon={<ExpandMoreRounded />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <p>{item.name}</p>
                </AccordionSummary>
                <AccordionDetails>
                  {item.tests.P1.length > 0 && (
                    <div>
                      <h4 key={uuid()}>P1</h4>
                      {item.tests.P1.map((test) => (
                        <div>
                          <a href="#"> {test.name} </a>{" "}
                          <span> - {test.teacherDiscipline.teacher.name}</span>
                        </div>
                      ))}
                    </div>
                  )}
                  {item.tests.P2.length > 0 && (
                    <div>
                      <h4 key={uuid()}>P2</h4>
                      {item.tests.P2.map((test) => (
                        <div>
                          <a href="#"> {test.name} </a>{" "}
                          <span> - {test.teacherDiscipline.teacher.name}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  {item.tests.P3.length > 0 && (
                    <div>
                      <h4 key={uuid()}>P3</h4>
                      {item.tests.P3.map((test) => (
                        <div>
                          <a href="#"> {test.name} </a>{" "}
                          <span> - {test.teacherDiscipline.teacher.name}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </AccordionDetails>
              </Accordion>
            </div>
          ))}
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
