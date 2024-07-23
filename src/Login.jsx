import { useState } from "react";
import { axiosPost } from "./lib/axiosUtility";
import AuthService from "./lib/AuthService";

import { LOGIN_URI, HEADER_JSON_CONFIG } from "./constants/backendRequests";
import { Navigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [existingUser, setExistingUser] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const body = { username, password };
    const credentials = await axiosPost(LOGIN_URI, body, HEADER_JSON_CONFIG);
    console.log("received credentials", credentials);
    const authService = new AuthService();
    authService.setLocalStorage(credentials);
    // collect currentUser
    setExistingUser(credentials.user._id);
  };

  return (
    <div>
      {/* Login succeeds, redirect to dashboard */}
      {existingUser && <Navigate to={`/dashboard`} replace={false} />}

      <h3>Login Page</h3>

      <form method="post" onSubmit={handleSubmit}>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <br />
        <label htmlFor="password">Password:</label>
        <input
          type="text"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default Login;
