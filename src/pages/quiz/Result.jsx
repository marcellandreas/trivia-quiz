import { NavLink, useLocation } from "react-router-dom";

export const Result = () => {
  const location = useLocation();

  // Ambil hasil dari state atau localStorage jika tidak ada state
  const {
    score = JSON.parse(localStorage.getItem("quizResult"))?.score || 0,
    total = JSON.parse(localStorage.getItem("quizResult"))?.total || 0,
  } = location.state || {};

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-100 to-purple-100 p-4">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full transition-transform transform hover:scale-105">
        <h1 className="text-3xl font-extrabold text-center mb-4 text-gray-800">
          Quiz Result
        </h1>
        <div className="border-b border-gray-300 mb-4" />
        <h2 className="text-2xl text-gray-700 mb-2">
          Score: <span className="font-semibold text-blue-600">{score}</span>
        </h2>
        <h2 className="text-xl text-gray-600 mb-2">
          Total Questions: <span className="font-semibold">{total}</span>
        </h2>
        <h2 className="text-xl text-gray-600 mb-2">
          Correct Answers: <span className="font-semibold">{score}</span>
        </h2>
        <h2 className="text-xl text-gray-600 mb-4">
          Wrong Answers:{" "}
          <span className="font-semibold text-red-600">{total - score}</span>
        </h2>

        {/* Tombol untuk kembali ke halaman kuis */}
        <div className="flex flex-col md:flex-row justify-between">
          <NavLink
            to={"/"}
            className="block text-center bg-blue-600 text-white py-3 rounded-lg mb-2 md:mb-0 md:mr-2 hover:bg-blue-700 transition duration-300 flex-1 shadow hover:shadow-lg"
          >
            Kembali ke halaman kuis
          </NavLink>
          <NavLink
            to={"/quiz"}
            state={{ reset: true }}
            className="block text-center bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition duration-300 flex-1 shadow hover:shadow-lg"
          >
            Mengerjakan Ulang
          </NavLink>
        </div>
      </div>
    </div>
  );
};
