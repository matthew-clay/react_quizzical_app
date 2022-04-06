import { useEffect, useState } from "react";
import { decode } from "html-entities";
import { nanoid } from "nanoid";
import Welcome from "./components/Welcome";
import Quiz from "./components/Quiz";
import "./App.css";

function App() {
  const [isStart, setStart] = useState(false);
  const [quizData, setQuizData] = useState([]);

  const handleStart = () => {
    setStart((oldValue) => !oldValue);
  };

  useEffect(() => {
    fetch("https://opentdb.com/api.php?amount=5&type=multiple")
      .then((res) => res.json())
      .then((data) => setQuizData(formatAPIData(data.results)))
      .catch((err) => console.error("API ERROR:", err));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const formatAPIData = (rawData) => {
    return rawData.map((data) => ({
      ...data,
      id: nanoid(),
      question: decode(data.question),
      answers: decode(
        shuffleAnswerArray([...data.incorrect_answers, data.correct_answer])
      ),
    }));
  };

  const shuffleAnswerArray = (answersArr) => {
    return answersArr.sort(() => Math.random() - 0.5);
  };

  return (
    <section className="app">
      {!isStart ? (
        <Welcome handleStart={handleStart} />
      ) : (
        <Quiz quizzes={quizData} />
      )}
    </section>
  );
}

export default App;
