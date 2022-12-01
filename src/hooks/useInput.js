import { useState } from "react";

export const useInput = (intialValue, submitAction) => {
  const [inputValue, setInputValue] = useState(intialValue);

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = () => {
    submitAction(inputValue);
    setInputValue("");
  };

  return [inputValue, handleChange, handleSubmit];
};
