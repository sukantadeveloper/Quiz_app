import React from "react";
import { ChakraProvider } from "@chakra-ui/react";

import AllRoutes from "./Components/AllRoutes";

function App() {
  return (
    <ChakraProvider>
      <AllRoutes />
    </ChakraProvider>
  );
}

export default App;

// import { Heading, Box, Button } from "@chakra-ui/react";
// import { Link } from "react-router-dom";
// import Question from "./Question";
// import Results from "./Results";

// const App = () => {
//   const [questionIndex, setQuestionIndex] = useState(0);
//   const [score, setScore] = useState(0);

//   const questions = [
//     {
//       question: "What is the capital of France?",
//       options: ["Paris", "Berlin", "London", "Madrid"],
//       answer: "Paris",
//     },
//     {
//       question: "What is the largest country in the world?",
//       options: ["Russia", "China", "USA", "Canada"],
//       answer: "Russia",
//     },
//     {
//       question: "What is the currency of Japan?",
//       options: ["Yen", "Dollar", "Euro", "Pound"],
//       answer: "Yen",
//     },
//     {
//       question: "What is the highest mountain in the world?",
//       options: ["Mount Kilimanjaro", "Mount Everest", "Mount Fuji", "Mount McKinley"],
//       answer: "Mount Everest",
//     },
//     {
//       question: "What is the name of the longest river in Africa?",
//       options: ["Nile", "Congo", "Niger", "Zambezi"],
//       answer: "Nile",
//     },
//   ];

//   const handleAnswer = (selectedAnswer) => {
//     if (selectedAnswer === questions[questionIndex].answer) {
//       setScore(score + 1);
//     }
//     setQuestionIndex(questionIndex + 1);
//   };

//   return (
//     <Box textAlign="center" marginTop="50px">
//       {questionIndex < questions.length ? (
//         <>
//           <Heading as="h1" size="xl" marginBottom="50px">
//             Question {questionIndex + 1}
//           </Heading>
//           <Question
//             question={questions[questionIndex].question}
//             options={questions[questionIndex].options}
//             handleAnswer={handleAnswer}
//           />
//         </>
//       ) : (
//         <>
//           <Heading as="h1" size="xl" marginBottom="50px">
//             Results
//           </Heading>
//           <Results score={score} totalQuestions={questions.length} />
//           <Button as={Link} to="/" size="lg" marginTop="50px">
//             Play Again
//           </Button>
//         </>
//       )}
//     </Box>
//   );
// };

// export default App;
