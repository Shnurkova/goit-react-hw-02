import { useState, useEffect } from 'react';
import Feedback from "../Feedback/Feedback.jsx";
import Descriptions from "../Description/Description.jsx";
import Options from "../Options/Options.jsx";
import Notification from '../Notification/Notification.jsx';



function App() {

    const [states, setState] = useState(() => {
    const savedStates = window.localStorage.getItem('saved-states');
    if (savedStates !== null) {
      return JSON.parse(savedStates);
    }
    return { good: 0, neutral: 0, bad: 0 };
    });

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
            <Descriptions />
            <Options
            updateFeedback={updateFeedback}
            total={totalFeedback}
            setState={setState}/>
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