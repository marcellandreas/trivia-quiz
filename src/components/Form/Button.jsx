export const Button = ({ text }) => {
  return (
    <button
      type="submit"
      className="w-full py-3 bg-blue-600 text-white font-semibold rounded hover:bg-blue-500 transition duration-200"
    >
      {text}
    </button>
  );
};
