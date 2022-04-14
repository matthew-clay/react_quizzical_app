import Question from "./Question";
import Answer from "./Answer";
import { decode } from "html-entities";

function Quiz(props) {
  const generateQuizzes = props.quizzes.map((quiz) => {
    const newAnswers = quiz.answers.sort(() => Math.random() - 0.5);
    return (
      <div className="quiz" key={quiz.id}>
        <Question question={decode(quiz.question)} />
        <Answer answers={newAnswers} correct_answer={quiz.correct_answer} />
      </div>
    );
  });

  return (
    <main className="container">
      <>{generateQuizzes}</>
      <button className="btn">Check Answers</button>
    </main>
  );
}

export default Quiz;
