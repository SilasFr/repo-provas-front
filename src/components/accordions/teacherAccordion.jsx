import styled from "styled-components";
import { Accordion, AccordionSummary, AccordionDetails } from "@mui/material";
import { ExpandMoreRounded } from "@mui/icons-material";
import { v4 as uuid } from "uuid";

export function TeacherAccordion({ data }) {
  if (!data) return;
  const [dataTitle] = Object.keys(data);
  const [dataContent] = Object.values(data);
  const categories = dataContent.categories;

  return (
    <div key={uuid()}>
      <Accordion key={uuid()}>
        <AccordionSummary
          expandIcon={<ExpandMoreRounded />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <p>{dataTitle}</p>
        </AccordionSummary>
        <AccordionDetails>
          {categories?.P1.length > 0 && (
            <Accordion key={uuid()}>
              <AccordionSummary
                expandIcon={<ExpandMoreRounded />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <h4>P1</h4>
              </AccordionSummary>
              <AccordionDetails>
                {categories.P1.map((test) => (
                  <div key={uuid()}>
                    <p>
                      <a href={test.pdfUrl}>{test.name}</a>
                      <span> - {test.teacherDiscipline.discipline.name}</span>
                    </p>
                  </div>
                ))}
              </AccordionDetails>
            </Accordion>
          )}

          {categories?.P2.length > 0 && (
            <Accordion key={uuid()}>
              <AccordionSummary
                expandIcon={<ExpandMoreRounded />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <h4>P2</h4>
              </AccordionSummary>
              <AccordionDetails>
                {categories.P2.map((test) => (
                  <div key={uuid()}>
                    <p>
                      <a href={test.pdfUrl}>{test.name}</a>
                      <span> - {test.teacherDiscipline.discipline.name}</span>
                    </p>
                  </div>
                ))}
              </AccordionDetails>
            </Accordion>
          )}

          {categories?.P3.length > 0 && (
            <Accordion key={uuid()}>
              <AccordionSummary
                expandIcon={<ExpandMoreRounded />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <h4>P3</h4>
              </AccordionSummary>
              <AccordionDetails>
                {categories.P3.map((test) => (
                  <div key={uuid()}>
                    <p>
                      <a href={test.pdfUrl}>{test.name}</a>
                      <span> - {test.teacherDiscipline.discipline.name}</span>
                    </p>
                  </div>
                ))}
              </AccordionDetails>
            </Accordion>
          )}
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
