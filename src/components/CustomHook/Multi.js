import { useState } from "react";

const useInput = (initialValues) => {
  const [values, setValues] = useState(initialValues);

  // Function to handle changes for multiple inputs
  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  // Reset form values to initial state
  const resetValues = () => {
    setValues(initialValues);
  };

  return {
    values,
    handleChange,
    resetValues,
  };
};

export default useInput;
