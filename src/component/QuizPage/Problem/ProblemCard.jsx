import React, { useEffect, useState } from "react";
import "./ProblemCard.css";

const ProblemCard = ({
  questionData,
  markedQuestions,
  setMarkedQuestions,
  markedOptions,
  setMarkedOption,
  pos,
  setPos,
  visitedQuestions,
  setVisitedQuestions,
  isRunning,
  setIsRunning
}) => {
  // Destructure question data
  const { question, correct_answer, incorrect_answers } = questionData[pos];

  // State to hold shuffled options
  const [options, setOptions] = useState([]);

  // Use Effect to shuffle options when 'pos' changes
  useEffect(() => {
    const shuffledOptions = [...incorrect_answers, correct_answer];
    shuffledOptions.sort(() => Math.random() - 0.5);
    setOptions(shuffledOptions);
  }, [pos]);

  // Function to handle incrementing the question counter
  const incrementCounter = (pos) => {
    setPos(Math.min(pos + 1, 14));
    const updatedVisitedQuestions = [...visitedQuestions];
    updatedVisitedQuestions[pos] = true;
    setVisitedQuestions(updatedVisitedQuestions);
    console.log(pos);
  };

  // Function to handle decrementing the question counter
  const decrementCounter = (pos) => {
    const updatedVisitedQuestions = [...visitedQuestions];
    updatedVisitedQuestions[pos] = true;
    setVisitedQuestions(updatedVisitedQuestions);
    setPos(Math.max(pos - 1, 0));
  };

  // Function to set quiz status to not running
  const setQuizStatus = () => {
    setIsRunning(0);
  };

  // Function to handle marking/unmarking a question
  const handleMarkQuestion = (pos, index) => {
    // Toggle the question mark status
    const updatedMarkedQuestions = [...markedQuestions];
    updatedMarkedQuestions[pos] = !updatedMarkedQuestions[pos] || updatedMarkedQuestions[pos];
    setMarkedQuestions(updatedMarkedQuestions);

    // Set the marked option for the question
    const updatedMarkedOptions = [...markedOptions];
    updatedMarkedOptions[pos] = options[index];
    setMarkedOption(updatedMarkedOptions);
  };

  return (
    <div className="problem-card">
      <span> Q. {pos + 1}/15 </span>
      <h2 className="question">
        <p>{question}</p>
      </h2>
      <div className="options">
        {options.map((option, index) => (
          <div
            key={index}
            onClick={() => {
              handleMarkQuestion(pos, index);
            }}
            className={`option ${
              option === markedOptions[pos] ? "correct" : "white"
            }`}
          >
            {option}
          </div>
        ))}
      </div>

      <div>
        <button className="nav-buttons" onClick={() => { decrementCounter(pos) }}>
          prev
        </button>
        <button className="nav-buttons" onClick={() => { incrementCounter(pos) }}>
          next
        </button>
        <button className="nav-buttons" onClick={() => { setQuizStatus() }}>
          submit
        </button>
      </div>
    </div>
  );
};

export default ProblemCard;
