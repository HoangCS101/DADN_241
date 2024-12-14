import { React } from "react";
import { Navigate } from "react-router-dom";

const TOKEN_EXPIRY_TIME = 15 * 60 * 1000; // 15 minutes in ms

function Authentication({ children }) {
  const auth = localStorage.getItem("authToken");
  return auth ? children : <Navigate to="/sign-in" replace />;
}

const storeAuthToken = (token) => {
  if (!token) {
    console.error("Invalid token. Not storing.");
    return;
  }
  const currentTime = Date.now();
  localStorage.setItem("authToken", token);
  localStorage.setItem("tokenTimestamp", currentTime);
};

const isTokenExpired = () => {
  const tokenTimestamp = localStorage.getItem("tokenTimestamp");
  if (!tokenTimestamp) return true;
  return Date.now() - parseInt(tokenTimestamp, 10) > TOKEN_EXPIRY_TIME;
};

const refreshAuthToken = async () => {
  const authToken = localStorage.getItem("authToken");
  if (!authToken) {
    console.warn("No auth token found. Redirecting to login...");
    window.location.href = "/sign-in";
    return false;
  }

  try {
    const response = await fetch("/api/users/refresh-token", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${authToken}`,
      },
    });

    if (response.ok) {
      const result = await response.json();
      console.log("Token refreshed:", result);
      storeAuthToken(result.token);
      return true;
    } else {
      console.error("Failed to refresh token:", response.statusText);
      return false;
    }
  } catch (error) {
    console.error("Error during token refresh:", error);
    return false;
  }
};

const validateAuthToken = async () => {
  if (isTokenExpired()) {
    console.warn("Token expired. Attempting to refresh...");
    const refreshSuccess = await refreshAuthToken();
    if (!refreshSuccess) {
      console.error("Token refresh failed. Redirecting to login...");
      localStorage.removeItem("authToken");
      localStorage.removeItem("tokenTimestamp");
      window.location.href = "/sign-in";
    }
  }
};

export default Authentication;
export { refreshAuthToken, storeAuthToken, validateAuthToken };
