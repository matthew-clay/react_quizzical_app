function Answer(props) {
  return (
    <li key={props.id} className="answer-list">
      {props.answer}
    </li>
  );
}

export default Answer;
