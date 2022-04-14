import Answer from "./Answer";

function Quiz(props) {
  const generateAnswers = props.answers.map((item) => {
    return <Answer key={item.answer} answer={item.answer} id={item.id} />;
  });
  return (
    <div className="quiz">
      <h3 className="question" key={props.id}>
        {props.question}
      </h3>
      <ul className="answers">{generateAnswers}</ul>
    </div>
  );
}

export default Quiz;
