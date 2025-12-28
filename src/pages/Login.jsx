// Import React hooks
import { useState } from "react";
import { useNavigate } from "react-router-dom";

// Import auth state
import { auth } from "../auth";

// Login page component
export default function Login() {
  // State for email input
  const [email, setEmail] = useState("");

  // State for password input
  const [password, setPassword] = useState("");

  // Hook for navigation
  const navigate = useNavigate();

  // Handle login button click
  const handleLogin = () => {
    // Validate credentials
    if (email === "admin@fleet.com" && password === "admin123") {
      // Set authentication true
      auth.isAuth = true;

      // Navigate to admin page
      navigate("/admin");
    } else {
      // Show error alert
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