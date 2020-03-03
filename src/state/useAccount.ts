import { useState, useEffect } from "react";
import { login } from "../backend/AccountApi";

export const useAccount = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [username, setUsername] = useState("");
  const [isAuthenticating, setIsAuthenticating] = useState(false);
  const [authError, setAuthError] = useState(undefined);


  const authenticate = async () => {
    try {
      console.log("Running authentication");
      setIsAuthenticating(true);
      const username = await login("sonikro", "ronaldo");
      setIsAuthenticated(true);
      setUsername(username);
    } catch (error) {
      setAuthError(error);
    } finally {
      setIsAuthenticating(false);
    }
  };

  useEffect(() => {
    authenticate();
  }, []);

  return { isAuthenticated, username, isAuthenticating, authError };
};
