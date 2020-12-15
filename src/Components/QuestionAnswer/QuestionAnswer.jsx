import React from "react";
import classes from "./QuestionAnswer.module.css";
import { Link } from 'react-router-dom'
function QuestionAnswer({
  question,
  answer1,
  answer2,
  answer3,
  answer4,
  answer5,
  answer6,
  link4,
}) {
  console.log(answer1, answer2, answer3, answer4, answer5, answer6);
  return (
    <div className={classes.QAContainer}>
      <h4 className={classes.question}>{question}</h4>
      <div className={classes.answer}>
        <p className={classes.answerPara}>{answer1}</p>
        {answer2 && <p className={classes.answerPara}>{answer2}</p>}
        {answer3 && <p className={classes.answerPara}>{answer3}</p>}
        {answer4 && <p className={classes.answerPara}>{answer4}</p>}
        {link4 && (
          <p className={classes.answerPara}>
            <Link target="_blank" to={link4}>{link4}</Link>
          </p>
        )}
        {answer5 && <p className={classes.answerPara}>{answer5}</p>}
        {answer6 && <p className={classes.answerPara}>{answer6}</p>}
      </div>
    </div>
  );
}

export default QuestionAnswer;
