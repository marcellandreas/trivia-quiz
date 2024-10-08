import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const Quiz = () => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [timer, setTimer] = useState(60);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchQuestions = async () => {
      const response = await axios.get(
        "https://opentdb.com/api.php?amount=10&category=31&difficulty=easy&type=multiple"
      );
      setQuestions(response.data.results);
    };
    fetchQuestions();
  }, []);

  // Save quiz state to localStorage
  useEffect(() => {
    localStorage.setItem(
      "quizState",
      JSON.stringify({ questions, currentQuestion, score, timer })
    );
  }, [questions, currentQuestion, score, timer]);

  useEffect(() => {
    const countdown = setInterval(() => {
      setTimer((prevTimer) => {
        if (prevTimer <= 0) {
          clearInterval(countdown);
          handleFinish();
          return 0;
        }
        return prevTimer - 1;
      });
    }, 1000);

    return () => clearInterval(countdown);
  }, []);

  const handleAnswer = (isCorrect) => {
    if (isCorrect) setScore(score + 1);
    setCurrentQuestion(currentQuestion + 1);
  };

  const handleFinish = () => {
    localStorage.setItem(
      "quizResult",
      JSON.stringify({ score, total: questions.length })
    );
    navigate("/result", { state: { score, total: questions.length } });
  };

  if (timer === 0 || currentQuestion >= questions.length) {
    handleFinish();
  }

  // Function to decode HTML entities
  const decodeHtml = (html) => {
    const txt = document.createElement("textarea");
    txt.innerHTML = html;
    return txt.value;
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-r from-green-100 to-blue-100">
      <div className="bg-white shadow-2xl rounded-lg p-8 max-w-md w-full transition-transform transform hover:scale-105">
        {currentQuestion < questions.length ? (
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Question {currentQuestion + 1} of {questions.length}
            </h2>
            <h2 className="text-xl font-semibold text-gray-700 mb-4">
              {decodeHtml(questions[currentQuestion].question)}
            </h2>
            <div className="mb-4">
              {questions[currentQuestion].incorrect_answers
                .concat(questions[currentQuestion].correct_answer)
                .map((answer) => (
                  <button
                    key={answer}
                    onClick={() =>
                      handleAnswer(
                        answer === questions[currentQuestion].correct_answer
                      )
                    }
                    className="w-full py-2 mb-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-500 transition duration-200 shadow hover:shadow-lg"
                  >
                    {decodeHtml(answer)}
                  </button>
                ))}
            </div>
            <h3 className="text-lg text-gray-600">
              Time Left: {Math.floor(timer / 60)}:
              {timer % 60 < 10 ? `0${timer % 60}` : timer % 60}
            </h3>
          </div>
        ) : (
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Quiz Finished!
            </h2>
            <p className="text-lg text-gray-600">Redirecting...</p>
            <p className="text-lg text-gray-600">Your Score: {score}</p>
          </div>
        )}
      </div>
    </div>
  );
};
