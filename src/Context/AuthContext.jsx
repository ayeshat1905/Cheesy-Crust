import React, { createContext, useContext, useEffect, useState } from "react";
import { api } from "../api";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(
    () => localStorage.getItem("cheesyToken") || ""
  );
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!token) {
      setUser(null);
      setLoading(false);
      return;
    }

    let cancelled = false;

    api("/auth/me", { token })
      .then((data) => {
        if (!cancelled) setUser(data.user);
      })
      .catch(() => {
        localStorage.removeItem("cheesyToken");
        if (!cancelled) {
          setToken("");
          setUser(null);
        }
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });

    return () => {
      cancelled = true;
    };
  }, [token]);

  const persistSession = (nextToken, nextUser) => {
    localStorage.setItem("cheesyToken", nextToken);
    setToken(nextToken);
    setUser(nextUser);
  };

  const signup = async ({ name, email, password }) => {
    const data = await api("/auth/signup", {
      method: "POST",
      body: { name, email, password },
    });
    persistSession(data.token, data.user);
    return data.user;
  };

  const login = async ({ email, password }) => {
    const data = await api("/auth/login", {
      method: "POST",
      body: { email, password },
    });
    persistSession(data.token, data.user);
    return data.user;
  };

  const logout = () => {
    localStorage.removeItem("cheesyToken");
    setToken("");
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{ user, token, loading, signup, login, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
