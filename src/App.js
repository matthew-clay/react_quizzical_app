import { useState, useEffect } from "react";
import { nanoid } from "nanoid";
import Question from "./components/Question";
import "./App.css";

function App() {
  // state
  const [welcome, setWelcome] = useState(true); // state for welcome page
  const [question, setQuestion] = useState([]); // state for quizzes
  const [checked, setChecked] = useState(false); // state for checking answers
  const [score, setScore] = useState(0); // state for user's score

  console.log(question);

  const handleClick = () => {
    setWelcome((oldValue) => !oldValue); // for welcome page onClick
  };

  useEffect(() => {
    const url = "https://opentdb.com/api.php?amount=5&type=multiple";
    fetch(url)
      .then((res) => res.json())
      .then((data) => setQuestion(data.results));
  }, []);

  const welcomePage = (
    <section className="welcome">
      <h1 className="title">Quizzical</h1>
      <span className="description">
        A web app for your brain made with REACT JS + Trivia API
      </span>
      <button className="btn-start" onClick={handleClick}>
        Start Quiz
      </button>
    </section>
  );

  const runHold = () => {
    console.log("run hold...");
  };

  const questionElements = question.map((questionArr) => {
    return (
      <Question
        key={questionArr.id}
        question={questionArr.question}
        // answer={questionArr.icorrect_answers} // this will update soon
        id={questionArr.id}
        runHold={runHold}
      />
    );
  });

  const checkAnswers = () => {
    console.log("checking answers...");
  };

  const newGame = () => {
    console.log("new game...");
  };

  return (
    <main className="app">
      {welcome && welcomePage}
      <section className="quiz-container">
        {questionElements}
        <div className="btn-container">
          {checked ? (
            <div>
              <span className="score-container">
                You scored {score}/{question.length} correct answers
                <button onClick={newGame}>Play Again</button>
              </span>
            </div>
          ) : (
            <button onClick={checkAnswers}>Check Answers</button>
          )}
        </div>
      </section>
    </main>
  );
}

export default App;
