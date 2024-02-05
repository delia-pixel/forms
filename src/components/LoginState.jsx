import { useState } from "react";
import Input from "./Input";
import { useInput } from "../hook/useInput";
import { hasMinLength, isEmail, isNotEmpty } from "../util/validation";

export default function LoginState() {
  const {
    value: emailValue,
    handleChange: handleEmailChange,
    handleInputBlur: handleEmailBlur,
    hasError: emailHasError,
  } = useInput("", (value) => isEmail(value) && isNotEmpty(value));
  const {
    value: pwdValue,
    handleChange: handlePwdChange,
    handleInputBlur: handlePwdBlur,
    hasError: passwordHasError,
  } = useInput("", (value) => isNotEmpty(value) && hasMinLength(value, 6));

  const handleSubmit = (event) => {
    event.preventDefault();
    if (emailHasError || passwordHasError) {
      return;
    }
    console.log(emailValue, pwdValue);
  };

  const handleReset = () => {
    setEnteredValues({
      email: "",
      password: "",
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <div className="control no-margin">
          <Input
            id="email"
            type="email"
            label="Email"
            name="email"
            error={emailHasError}
            onBlur={handleEmailBlur}
            value={emailValue}
            onChange={(event) => handleEmailChange(event.target.value)}
          />
        </div>

        <div className="control no-margin">
          <Input
            id="password"
            type="password"
            label="Password"
            name="password"
            error={passwordHasError}
            value={pwdValue}
            onBlur={handlePwdBlur}
            onChange={(event) => handlePwdChange(event.target.value)}
          />
        </div>
      </div>

      <p className="form-actions">
        <button onClick={handleReset} className="button button-flat">
          Reset
        </button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}
