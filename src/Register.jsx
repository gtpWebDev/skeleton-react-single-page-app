import { useState } from "react";
import { axiosPost } from "./lib/axiosUtility";
import AuthService from "./lib/AuthService";

import { REGISTER_URI, HEADER_JSON_CONFIG } from "./constants/backendRequests";

const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    const body = { username, password };
    const credentials = await axiosPost(REGISTER_URI, body, HEADER_JSON_CONFIG);
    // console.log("received credentials", credentials);
    const authService = new AuthService();
    authService.setLocalStorage(credentials);
  };

  return (
    <div>
      <h3>Register Page</h3>

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

export default Register;
