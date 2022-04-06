import { nanoid } from "nanoid";

function Answer(props) {
  console.log("Answer props:", props);

  const answerList = props.answers.map((answer) => {
    return (
      <li className="answer-list" key={nanoid()}>
        {answer}
      </li>
    );
  });
  return <ul className="answers">{answerList}</ul>;
}

export default Answer;
