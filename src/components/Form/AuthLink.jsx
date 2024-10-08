export const AuthLink = ({ text, linkText, onClick }) => {
  return (
    <p className="text-center mt-4">
      {text}{" "}
      <a href="#" onClick={onClick} className="text-blue-600 hover:underline">
        {linkText}
      </a>
    </p>
  );
};
