import { decode } from "html-entities";

function Answer(props) {
  const answerList = props.answers.map((answer) => {
    return (
      <li key={answer} className="answer-list">
        {decode(answer)}
      </li>
    );
  });
  return <ul className="answers">{answerList}</ul>;
}

export default Answer;
