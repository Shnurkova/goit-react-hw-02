import { useState, useEffect } from 'react';
import './App.module.css';
import Feedback from "../Feedback/Feedback.jsx";
import Description from "../Description/Description.jsx";
import Options from "../Options/Options.jsx";
import Notification from '../Notification/Notification.jsx';



function App() {
  const startFeedback = { good: 0, neutral: 0, bad: 0 };

    const [states, setState] = useState(() => {
    const savedStates = window.localStorage.getItem('saved-states');
    if (savedStates !== null) {
      return JSON.parse(savedStates);
    }
    return { good: 0, neutral: 0, bad: 0 };
    });
  
  const feedbackReset = () => {
    setState(startFeedback);
  };

    useEffect(() => {
    window.localStorage.setItem('saved-states', JSON.stringify(states));
  }, [states]);
    
    const { good, neutral, bad } = states;

    const updateFeedback = feedbackType => {
    setState({
      ...states,
      [feedbackType]: states[feedbackType] + 1,
    });
    };
    
    const totalFeedback = good + neutral + bad;
    const positiveFeedbackStat = Math.round((good / totalFeedback) * 100);


    return (
        <>
            <Description />
            <Options
            updateFeedback={updateFeedback}
            total={totalFeedback}
            feedbackReset={feedbackReset}/>
            {totalFeedback > 0 ? (
        <Feedback
          good={good}
          neutral={neutral}
          bad={bad}
          total={totalFeedback}
          positive={positiveFeedbackStat}
        />
      ) : (
        <Notification />
      )}
        </>
    )
}

export default App;