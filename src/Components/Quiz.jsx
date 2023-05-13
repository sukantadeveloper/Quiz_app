import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Button, VStack, Heading, Text } from "@chakra-ui/react";
import { QuizContext } from "../Context/QuizContextProvider";

function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [timeRemaining, setTimeRemaining] = useState(60);
  const [score, setScore] = useState(0);
  const [quizData, setQuizData] = useState([
    {
      question: "What is the capital of France?",
      options: ["London", "Paris", "Berlin", "Rome"],
      answer: "Paris",
    },
    {
      question: "What is the largest mammal?",
      options: ["Elephant", "Whale", "Giraffe", "Hippopotamus"],
      answer: "Whale",
    },
    {
      question: "Who was the first man to walk on the moon?",
      options: ["Buzz Aldrin", "Neil Armstrong", "Michael Collins", "Yuri Gagarin"],
      answer: "Neil Armstrong",
    },
    {
      question: "What is the smallest country in the world?",
      options: ["Vatican City", "Monaco", "Nauru", "Tuvalu"],
      answer: "Vatican City",
    },
    {
      question: "What is the largest planet in our solar system?",
      options: ["Jupiter", "Saturn", "Uranus", "Neptune"],
      answer: "Jupiter",
    },
  ]);
  const navigate = useNavigate();
  const { QuizResult, setQuizResult } = useContext(QuizContext)
  useEffect(() => {
    const timer =
      timeRemaining > 0 &&
      setInterval(() => {
        setTimeRemaining((prev) => prev - 1);
      }, 1000);
    return () => clearInterval(timer);
  }, [timeRemaining]);

  useEffect(() => {
    const timer =
      timeRemaining === 0 &&
      setTimeout(() => {
        const nextQuestion = currentQuestion + 1;
        if (nextQuestion < quizData.length) {
          setCurrentQuestion(nextQuestion);
          setTimeRemaining(60);
        } else {
          setQuizResult(score)
          setTimeout(() => {
            navigate("/result", { score: score });
          }, 100);

        }
      }, 1000);
    return () => clearTimeout(timer);
  }, [timeRemaining, currentQuestion]);
  const handleAnswerOptionClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < quizData.length) {
      setCurrentQuestion(nextQuestion);
      setTimeRemaining(60);
    } else {
      setQuizResult(score)
      setTimeout(() => {
        navigate("/result", { score: score });
      }, 100);

    }
  };
  setQuizResult(score)
  console.log(QuizResult, "score")
  return (
    <VStack>
      <Heading as="h1" size="xl" textAlign="center">
        Question {currentQuestion + 1}
      </Heading>
      <Text fontSize="xl" textAlign="center">
        {quizData[currentQuestion].question}
      </Text>
      <Text fontSize="lg">Time Remaining: {timeRemaining} seconds</Text>
      <VStack>
        {quizData[currentQuestion].options.map((option) => (
          <Button
            key={option}
            onClick={() =>
              handleAnswerOptionClick(option === quizData[currentQuestion].answer)
            }
            colorScheme="teal"
            size="lg"
          >
            {option}
          </Button>
        ))}
      </VStack>
    </VStack>
  );
}

export default Quiz;
