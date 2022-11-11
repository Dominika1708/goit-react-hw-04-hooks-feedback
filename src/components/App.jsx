import { useState } from 'react';

import { Section } from './Section/section';
import { FeedbackOptions } from './FeedbackOptions/feedbackOptions';
import { Statistics } from './Statistics/statistics';
import { Notification } from './Notification/notification';

export const App = () => {
  
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleClick = buttonClicked => {
    switch (buttonClicked) {
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
        return 0;
    }
  };

  const countTotalFeedback = () => good + neutral + bad;
  const countPositiveFeedbackPercentage = () =>
    Math.floor((good / countTotalFeedback()) * 100);

  return (
    <>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={[
            { name: 'good', id: '1' },
            { name: 'neutral', id: '2' },
            { name: 'bad', id: '3' },
          ]}
          onLeaveFeedback={handleClick}
        />
      </Section>
      <Section title="Statistics">
        {countTotalFeedback() > 0 ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </>
  );
};
