import React from "react";
import { Button, Heading, Image, Text, VStack } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { QuizContext } from "../Context/QuizContextProvider";
import { useContext } from "react";


function Result() {

  const navigate = useNavigate();
  const { QuizResult } = useContext(QuizContext)

  const startNewQuiz = () => {
    navigate("/");
  };

  return (
    <VStack pt={'20px'} fontFamily={'Lora'} spacing={6} alignItems="center">
      {QuizResult != 0 ? <>    <img src="https://images-cdn.ubuy.co.in/633ae529d559363fc566bf5b-juvale-large-gold-trophy-cup-for-sports.jpg" alt="Trophy" width={120} height={120} />
        <Heading as="h1" size="xl" fontFamily={'Lora'}>
          Congratulations!
        </Heading> </> : <Heading textAlign={'center'} as="h1" size="xl" fontFamily={'Lora'}>
        Sorry to to say please try again
      </Heading>}
      <Text fontSize="lg">
        You scored <strong>{QuizResult}</strong> out of 5.
      </Text>
      {QuizResult >= 3 && (
        <Image
          src="https://lordicon.com/icons/wired/flat/1103-confetti.gif"
          alt="Confetti"
          width={100}
          height={100}
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
