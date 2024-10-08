export const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-blue-500 to-indigo-600  text-white py-4 mt-auto">
      <div className="container mx-auto text-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Anime Quiz. All rights reserved.
        </p>
      </div>
    </footer>
  );
};
