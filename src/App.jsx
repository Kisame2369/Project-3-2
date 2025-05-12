import { useState, useEffect } from 'react'
import './App.css'

import Description from "./components/Description"
import Options from "./components/Options"
import Feedback from "./components/Feedback"
import Notification from './components/Notification'

function App() {
  const [feedback, setFeedback] = useState({
    good: 0,
    neutral: 0,
    bad: 0
  }
  )

  useEffect(() => {
    const savedFeedback = JSON.parse(localStorage.getItem('feedback'));
    if (savedFeedback) {
      setFeedback(savedFeedback);
    }
  }, []);

  useEffect(() => {
    if (feedback.good + feedback.neutral + feedback.bad > 0) {
      localStorage.setItem('feedback', JSON.stringify(feedback));
    }
  }, [feedback]);

  const updateFeedback = (type) => {
    setFeedback(prev => ({
      ...prev,
      [type]: prev[type] + 1
    }))
  }

  const resetFeedback = () => {
    setFeedback({
      good: 0,
      neutral: 0,
      bad: 0
    });
  };
    
  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;


  return (
    <>
      <Description />
      <Options onValue={updateFeedback} total={totalFeedback} onReset={resetFeedback} />
      {(feedback.good > 0 || feedback.neutral > 0 || feedback.bad > 0) ? (
        <Feedback value={feedback} total={totalFeedback} />) : (<Notification />)}
    </>
  )
}

export default App
