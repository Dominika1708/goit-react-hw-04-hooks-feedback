import React, { Component } from 'react';

import { Section } from './Section/section';
import { FeedbackOptions } from './FeedbackOptions/feedbackOptions';
import { Statistics } from './Statistics/statistics';
import { Notification } from './Notification/notification';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleClick = buttonClicked => {
    switch (buttonClicked) {
      case 'good':
        this.setState(prev => ({
          ...prev,
          good: prev.good + 1,
        }));
        break;
      case 'neutral':
        this.setState(prev => ({
          ...prev,
          neutral: prev.neutral + 1,
        }));
        break;
      case 'bad':
        this.setState(prev => ({
          ...prev,
          bad: prev.bad + 1,
        }));
        break;
      default:
        return 0;
    }
  };

  render() {
    const { good, neutral, bad } = this.state;
    const countTotalFeedback = () => good + neutral + bad;
    const countPositiveFeedbackPercentage = () => Math.floor((good / countTotalFeedback()) * 100);

    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={[
              { name: 'good', id: '1' },
              { name: 'neutral', id: '2' },
              { name: 'bad', id: '3' },
            ]}
            onLeaveFeedback={this.handleClick}
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
  }
}
