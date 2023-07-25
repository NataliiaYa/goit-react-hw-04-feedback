import { PropTypes } from 'prop-types';
import css from "./Feedback.module.css";


const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div className={css.feedbackOptions}>
      {options.map(option => (
        <button
          key={option}
          type="button"
          onClick={() => onLeaveFeedback(option)}
          className={css.voteButton}
        >
          {option}
        </button>
      ))}
    </div>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func,
};

// // <ul className={css['btn-list']}>
//       {options.map(option => (
//         <li key={option} className={css['btn-item']}>
//           <button
//             onClick={() => onLeaveFeedback(option)}
//             type="button"
//             className={css['fdb-btn']}

export default FeedbackOptions;