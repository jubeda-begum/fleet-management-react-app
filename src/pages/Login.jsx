import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../auth";
export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleLogin = () => {
    if (email === "admin@fleet.com" && password === "admin123") {
      auth.isAuth = true;
      navigate("/admin");
    } else {
      alert("Wrong email or password");
    }
  };

  return (
    <div>
      {/* Login heading */}
      <h1>Login Page</h1>

      {/* Email input */}
      <input
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      {/* Password input */}
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      {/* Login button */}
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}
