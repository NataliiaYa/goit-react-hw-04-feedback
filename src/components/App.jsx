import {useState} from 'react';
import css from "./App.module.css"
import Statistics from "./Statistics/Statistics";
import FeedbackOptions from "./Feedback/Feedback";
import Section from "./Section/Section";
import Notification from "./Notifications/Notification";

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  // state = {
  //   good: 0,
  //   neutral: 0,
  //   bad: 0,


  const handleVote = option => {
    switch (option) {
      case 'good':
        setGood(prev => prev + 1);
        break;
      case 'neutral':
        setNeutral(prev => prev + 1);
        break;
      case 'bad':
        setBad(prev => prev + 1);
        break;
      default:
        console.log('Ooops... something was wrong')
    }
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    let total = countTotalFeedback();
    if (total !== 0) {
      return ((good / total) * 100).toFixed(0);
    } else {
      return 0;
    }
  };

  return (
    <div className={css.feedbackArea}>
      <Section title="Please leave feedback">
        <FeedbackOptions onLeaveFeedback={handleVote} />
      </Section>
      <Section title="Statistics">
        {countTotalFeedback() === 0 ? (
          <Notification message="There is no feedback" />
        ) : (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        )}
      </Section>
    </div>
  );
};

export default App;