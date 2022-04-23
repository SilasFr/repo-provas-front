import SimpleAccordion, {
  FeedContainer,
} from "../../components/feedComponents";

export function Feed() {
  const example2 = [
    { "10 Período": ["CSS", "HTML", "JavaScript"] },
    { "20 Período": ["CSS3", "HTML5", "JavaScript mais poderoso"] },
    { "30 Período": ["Sass", "React"] },
    { "40 Período": ["CSS", "HTML", "JavaScript"] },
    { "50 Período": ["CSS", "HTML", "JavaScript"] },
    { "60 Período": ["CSS", "HTML", "JavaScript"] },
  ];
  return (
    <FeedContainer>
      {example2.map((term) => SimpleAccordion(term))}
    </FeedContainer>
  );
}

// const teste = (
//   <FeedUl>
//     {example2.map((term) => {
//       const [termTitle] = Object.keys(term);
//       const [subjects] = Object.values(term);

//       return (
//         <FeedItem key={uuid()}>
//           <p>{termTitle}</p>
//           <ul>
//             {subjects.map((subject) => {
//               console.log("matéria: ", subject);
//               return (
//                 <li>
//                   <p>{subject}</p>
//                 </li>
//               );
//             })}
//           </ul>
//         </FeedItem>
//       );
//     })}
//   </FeedUl>
// );
