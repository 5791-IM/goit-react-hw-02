const Feedback = ({ feedbacks, totalFeedback, positivFeedbackPercentage }) => {
  return (
    <div>
      <ul>
        <li>Good: {feedbacks.good}</li>
        <li>Neutral: {feedbacks.neutral}</li>
        <li>Bad: {feedbacks.bad}</li>
        <li>Total: {totalFeedback}</li>
        <li>Positive: {positivFeedbackPercentage}%</li>
      </ul>
    </div>
  );
};

export default Feedback;
