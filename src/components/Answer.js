function Answer(props) {
  console.log("answer props:", props);

  let answerStyle = {};

  return (
    <span
      className="answer"
      style={answerStyle}
      onClick={props.runHold}
      dangerouslySetInnerHTML={{ __html: props.answer }}
    ></span>
  );
}

export default Answer;
