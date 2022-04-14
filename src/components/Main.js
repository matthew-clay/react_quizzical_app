import Quiz from "./Quiz";

function Main(props) {
  const generateQuizzes = props.quizzes.map((quiz) => {
    return (
      <Quiz
        key={quiz.question}
        question={quiz.question}
        id={quiz.id}
        answers={quiz.answers}
      />
    );
  });

  return (
    <main className="container">
      {generateQuizzes}
      <button className="btn">Check Answers</button>
    </main>
  );
}

export default Main;
