import { useContext, useState } from "react";
import { GameStateContext } from "../helpers/Context";
import { Questions } from "../helpers/Question";
import "../App.css";
import { FaCheck, FaTimes } from "react-icons/fa"; 

function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [optionChosen, setOptionChosen] = useState("");
  const [isOptionClicked, setIsOptionClicked] = useState(false);  
  const { score, setScore, setGameState } = useContext(GameStateContext);

  const chooseOption = (option) => {
    setOptionChosen(option);
    setIsOptionClicked(true);  
  };

  const nextQuestion = () => {
    if (Questions[currentQuestion].asnwer === optionChosen) {
      setScore(score + 1);
    }
    setCurrentQuestion(currentQuestion + 1);
    setIsOptionClicked(false);  
  };

  const finishQuiz = () => {
    if (Questions[currentQuestion].asnwer === optionChosen) {
      setScore(score + 1);
    }
    setGameState("finished");
  };

  return (
    <div className="Quiz">
      <h1>{Questions[currentQuestion].prompt}</h1>
      <div className="questions">
        <div>
          <button
            onClick={() => {
              chooseOption("optionA");
            }}
          >
            {Questions[currentQuestion].optionA}
          </button>
          {isOptionClicked && optionChosen === "optionA" && (
            Questions[currentQuestion].asnwer === "optionA" ? (
              <FaCheck style={{ color: "green", marginLeft: "5px" }} />
            ) : (
              <FaTimes style={{ color: "red", marginLeft: "5px" }} />
            )
          )}
        </div>
        <div>
          <button
            onClick={() => {
              chooseOption("optionB");
            }}
          >
            {Questions[currentQuestion].optionB}
          </button>
          {isOptionClicked && optionChosen === "optionB" && (
            Questions[currentQuestion].asnwer === "optionB" ? (
              <FaCheck style={{ color: "green", marginLeft: "5px" }} />
            ) : (
              <FaTimes style={{ color: "red", marginLeft: "5px" }} />
            )
          )}
        </div>
        <div>
          <button
            onClick={() => {
              chooseOption("optionC");
            }}
          >
            {Questions[currentQuestion].optionC}
          </button>
          {isOptionClicked && optionChosen === "optionC" && (
            Questions[currentQuestion].asnwer === "optionC" ? (
              <FaCheck style={{ color: "green", marginLeft: "5px" }} />
            ) : (
              <FaTimes style={{ color: "red", marginLeft: "5px" }} />
            )
          )}
        </div>
        <div>
          <button
            onClick={() => {
              chooseOption("optionD");
            }}
          >
            {Questions[currentQuestion].optionD}
          </button>
          {isOptionClicked && optionChosen === "optionD" && (
            Questions[currentQuestion].asnwer === "optionD" ? (
              <FaCheck style={{ color: "green", marginLeft: "5px" }} />
            ) : (
              <FaTimes style={{ color: "red", marginLeft: "5px" }} />
            )
          )}
        </div>
      </div>
      {currentQuestion === Questions.length - 1 ? (
        <button onClick={finishQuiz} id="nextQuestion">
          Finish Quiz
        </button>
      ) : (
        <button onClick={nextQuestion} id="nextQuestion">
          Next Question
        </button>
      )}
    </div>
  );
}

export default Quiz;