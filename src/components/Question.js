import Answer from "./Answer";

function Question(props) {
  function runHold(id) {
    props.runHold(id, props.id);
  }

  const answerElements = props.answers.map((ansArr) => {
    return (
      <Answer
        key={ansArr.id}
        answer={ansArr.answer}
        isHeld={ansArr.isHeld}
        runHold={() => runHold(ansArr.id)}
        questionId={props.id}
        id={ansArr.id}
        correct={ansArr.correct}
        heldCorrect={ansArr.heldCorrect}
        heldIncorrect={ansArr.heldIncorrect}
        checked={ansArr.checked}
      />
    );
  });

  return (
    <div className="question-container">
      <span dangerouslySetInnerHTML={{ __html: props.question }}></span>
      <div className="answer-container">{answerElements}</div>
      <hr />
    </div>
  );
}

export default Question;
