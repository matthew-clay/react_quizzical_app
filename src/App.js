import { useEffect, useState } from "react";
import Welcome from "./components/Welcome";
import Main from "./components/Main";
import { nanoid } from "nanoid";
import { decode } from "html-entities";
import "./App.css";

function App() {
  const [isStart, setStart] = useState(false);
  const [quizData, setQuizData] = useState([]);
  // const [score, setScore] = useState(0);

  const handleStart = () => {
    setStart((oldValue) => !oldValue);
  };

  useEffect(() => {
    try {
      fetch("https://opentdb.com/api.php?amount=5&type=multiple")
        .then((res) => res.json())
        .then((data) => {
          setQuizData(customizeAPIData(data.results));
        });
    } catch (error) {
      console.log("Error while fetching:", error);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // start region || customize api returned data
  const customizeAPIData = (raw) => {
    const customizedData = raw.map((quiz) => {
      const answers = [...quiz.incorrect_answers, quiz.correct_answer];
      return {
        id: nanoid(),
        question: decode(quiz.question),
        correctAnswer: decode(quiz.correct_answer),
        answers: formatAnswersFromAPI(shuffleAnswersFromArray, answers),
      };
    });
    return customizedData;
  };

  const formatAnswersFromAPI = (callback, answersArr) => {
    const randomizeAnswers = callback(answersArr);
    return randomizeAnswers.map((answer) => ({
      id: nanoid(),
      isSelected: false,
      answer: decode(answer),
    }));
  };

  const shuffleAnswersFromArray = (answersArr) => {
    return answersArr.sort(() => Math.random - 0.5);
  };
  // end region of customize api data

  return (
    <section className="app">
      {isStart ? (
        <Main quizzes={quizData} />
      ) : (
        <Welcome handleStart={handleStart} />
      )}
    </section>
  );
}

export default App;
