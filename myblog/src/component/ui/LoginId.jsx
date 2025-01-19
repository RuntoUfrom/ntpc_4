import React from "react";
import styled from "styled-components";

const LoginInput = styled.div`
  border: 1px solid #d1d1d1;
  display: block;
  font-size: 16px;
  line-height: 24px;
  margin: 8px 0;
  padding: 16px 24px;
  width: 600px;
`;

function LoginId({ userid, userpassword, onUseridChange, onUserpasswordChange }) {
  return (
    <form>
      <LoginInput>
        <label htmlFor="userid" style={{ margin: "20px" }}>
          아이디
        </label>
        <input
          id="userid"
          type="text"
          name="userid"
          value={userid} // Controlled input for userid
          onChange={onUseridChange} // Call handler on change
        />
      </LoginInput>
      <LoginInput>
        <label htmlFor="userpassword" style={{ margin: "20px" }}>
          비밀 번호
        </label>
        <input
          id="userpassword"
          type="password"
          name="userpassword"
          value={userpassword} // Controlled input for userpassword
          onChange={onUserpasswordChange} // Call handler on change
        />
      </LoginInput>
    </form>
  );
}

export default LoginId;
