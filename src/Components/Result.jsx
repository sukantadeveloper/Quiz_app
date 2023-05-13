import React from "react";
import { Button, Heading, Text, VStack } from "@chakra-ui/react";
import {  useNavigate } from "react-router-dom";
import { QuizContext } from "../Context/QuizContextProvider";
import { useContext } from "react";


function Result() {

  const navigate = useNavigate();
  const { QuizResult } = useContext(QuizContext)

  const startNewQuiz = () => {
    navigate("/");
  };

  return (
    <VStack spacing={6} alignItems="center">
      <img src="https://png.pngtree.com/element_our/png/20181109/realistic-trophy-gold-cup-png_235093.jpg" alt="Trophy" width={120} height={120} />
      <Heading as="h1" size="xl">
        Congratulations!
      </Heading>
      <Text fontSize="lg">
        You scored <strong>{QuizResult}</strong> out of 5.
      </Text>
      {QuizResult >=3 && (
        <img
          src="https://lordicon.com/icons/wired/flat/1103-confetti.gif"
          alt="Confetti"
          width={200}
          height={200}
          css={{ animation: "confetti 1s ease-in-out infinite" }}
        />
      )}
      <Button colorScheme="teal" onClick={startNewQuiz}>
        Start a New Quiz
      </Button>
    </VStack>
  );
}

export default Result;
