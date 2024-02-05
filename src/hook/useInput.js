import { useState } from "react";

export function useInput(initialValue, validationFn) {
  const [enteredValue, setEnteredValue] = useState(initialValue);

  const [didEdit, setDidEdit] = useState(false);

  const valueIsValid = validationFn(enteredValue);

  const handleInputBlur = () => {
    setDidEdit(true);
  };

  const handleChange = (value) => {
    setEnteredValue(value);
    setDidEdit(false);
  };

  return {
    value: enteredValue,
    handleChange,
    handleInputBlur,
    hasError: didEdit && !valueIsValid,
  };
}
