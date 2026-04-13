import { useState } from "react";

export default function useInputFields({ defaultValue }) {
  const [fieldValue, setFieldValue] = useState(defaultValue);
  const handleFieldChange = (event) => {
    setFieldValue(event.target.value);
  };

  return [fieldValue, handleFieldChange];
}
