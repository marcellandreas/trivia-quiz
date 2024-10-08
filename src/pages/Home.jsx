import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const quizResult = localStorage.getItem("quizResult");
  const quizState = localStorage.getItem("quizState");

  const handleStartQuiz = () => {
    navigate("/quiz");
  };

  const handleToResult = () => {
    navigate("/result");
  };

  const handleReset = () => {
    localStorage.removeItem("quizResult");
    localStorage.removeItem("quizState");
    alert("Quiz has been reset!");
    navigate("/quiz");
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col items-center mt-10">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 text-center">
          Welcome to the Anime Quiz!
        </h1>
        <p className="mt-4 text-base sm:text-lg md:text-xl text-gray-600 text-center">
          Test your knowledge about your favorite anime with our easy-level quiz
          questions.
        </p>
        {!quizResult ? (
          <button
            onClick={handleStartQuiz}
            className="mt-6 px-4 py-2 sm:px-6 sm:py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition duration-200"
          >
            Start Quiz
          </button>
        ) : (
          <button
            onClick={handleReset}
            className="mt-6 px-4 py-2 sm:px-6 sm:py-3 bg-red-600 text-white font-semibold rounded-lg shadow-md hover:bg-red-700 transition duration-200"
          >
            Reset Quiz
          </button>
        )}
        {quizResult && quizState ? (
          <>
            <button
              onClick={handleToResult}
              className="mt-6 px-4 py-2 sm:px-6 sm:py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition duration-200"
            >
              Result
            </button>
          </>
        ) : null}
      </div>
    </div>
  );
};

export default Home;
