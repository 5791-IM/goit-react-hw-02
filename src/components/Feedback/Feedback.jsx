import css from "./Feedback.module.css";

const Feedback = ({ feedbacks, totalFeedback, positivFeedbackPercentage }) => {
  return (
    <div>
      <ul className={css.list}>
        <li className={css.items}>Good: {feedbacks.good}</li>
        <li className={css.items}>Neutral: {feedbacks.neutral}</li>
        <li className={css.items}>Bad: {feedbacks.bad}</li>
        <li className={css.items}>Total: {totalFeedback}</li>
        <li className={css.items}>Positive: {positivFeedbackPercentage}%</li>
      </ul>
    </div>
  );
};

export default Feedback;
