import Question from "./Question";
import Answer from "./Answer";

function Quiz(props) {
  const generateQuizzes = props.quizzes.map((quiz) => {
    return (
      <div className="quiz" key={quiz.id}>
        <Question question={quiz.question} />
        <Answer answers={quiz.answers} />
      </div>
    );
  });

  return <main className="container">{generateQuizzes}</main>;
}

export default Quiz;
