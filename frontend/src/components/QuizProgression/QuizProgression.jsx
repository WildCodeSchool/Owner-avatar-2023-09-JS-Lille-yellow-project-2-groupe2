import "./QuizProgression.css";
import PropTypes from "prop-types";

function QuizProgression({ questionIndex }) {
  return <p className="progression_text">Question {questionIndex} / 10</p>;
}

QuizProgression.propTypes = {
  questionIndex: PropTypes.number.isRequired,
};
export default QuizProgression;
