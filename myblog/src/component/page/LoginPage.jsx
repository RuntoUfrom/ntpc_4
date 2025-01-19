import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Button from "../ui/Button";
import LoginId from "../ui/LoginId";

const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

function LoginPage(props) {
  const navigate = useNavigate();

  // State for user ID and password
  const [userid, setUserid] = useState("");
  const [userpassword, setUserpassword] = useState("");

  // Handle form submission
  const handleFormSubmit = (e) => {
    e.preventDefault();

    // Validation
    if (!userid || !userpassword) {
      alert("아이디와 비밀번호를 모두 입력해주세요.");
      return;
    }

    // Simulate login or navigate
    console.log("Logging in with:", { userid, userpassword });
    navigate("/"); // Navigate to home page after successful login
  };

  return (
    <LoginContainer>
      <h1>Login</h1>
      {/* Pass state and handlers as props */}
      <LoginId
        userid={userid}
        userpassword={userpassword}
        onUseridChange={(e) => setUserid(e.target.value)}
        onUserpasswordChange={(e) => setUserpassword(e.target.value)}
      />
      {/* Login button */}
      <Button title="Login" onClick={handleFormSubmit} />
    </LoginContainer>
  );
}

export default LoginPage;
