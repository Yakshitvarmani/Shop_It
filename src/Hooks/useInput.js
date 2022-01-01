import React, { useState } from "react";

function useInput(initialState) {
  const [value, setValue] = useState(initialState);

  let reset = () => {
    setValue(initialState);
  };
  let bind = {
    value,
    onChange: e => {
      setValue(e.target.value);
    },
  };
  return [value, bind, reset];
}

export default useInput;
