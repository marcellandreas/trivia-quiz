import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthLink, Button, InputField } from "../../routers";

export const Register = ({ onRegister }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === confirmPassword) {
      localStorage.setItem("username", username);
      localStorage.setItem("password", password);
      onRegister();
    } else {
      alert("Passwords do not match");
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full">
        <h1 className="text-2xl font-bold text-center mb-6">Register</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <InputField
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <InputField
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="mb-6">
            <InputField
              type="password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>
          <Button text="Register" />
        </form>
        <AuthLink
          text="Already have an account?"
          linkText="Log in here"
          onClick={() => navigate("/login")}
        />
      </div>
    </div>
  );
};

export default Register;
