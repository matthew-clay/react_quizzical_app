import { useEffect, useState } from "react";
import Welcome from "./components/Welcome";
import Quiz from "./components/Quiz";
import "./App.css";
import { nanoid } from "nanoid";

function App() {
  const [isStart, setStart] = useState(false);
  const [quizData, setQuizData] = useState([]);

  const handleStart = () => {
    setStart((oldValue) => !oldValue);
  };

  console.log("quiz", quizData);

  useEffect(() => {
    try {
      fetch("https://opentdb.com/api.php?amount=5&type=multiple")
        .then((res) => res.json())
        .then((data) =>
          setQuizData(
            data.results.map((quiz) => ({
              ...quiz,
              id: nanoid(),
              question: quiz.question,
              answers: [...quiz.incorrect_answers, quiz.correct_answer],
            }))
          )
        );
    } catch (error) {
      console.log("Fetch Error:", error);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // const shuffleAnswerArray = (answersArr) => {
  //   return answersArr.sort(() => Math.random() - 0.5);
  // };

  return (
    <section className="app">
      {isStart ? (
        <Quiz quizzes={quizData} />
      ) : (
        <Welcome handleStart={handleStart} />
      )}
    </section>
  );
}

export default App;
