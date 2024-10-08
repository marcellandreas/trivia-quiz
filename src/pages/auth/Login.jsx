import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthLink, Button, InputField } from "../../routers";

export const Login = ({ onLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const storedUsername = localStorage.getItem("username");
    const storedPassword = localStorage.getItem("password");

    if (username === storedUsername && password === storedPassword) {
      onLogin();
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full">
        <h1 className="text-2xl font-bold text-center mb-6">Login</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <InputField
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="mb-6">
            <InputField
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <Button text="Login" />
        </form>
        <AuthLink
          text="Don't have an account?"
          linkText="Register here"
          onClick={() => navigate("/register")}
        />
      </div>
    </div>
  );
};
