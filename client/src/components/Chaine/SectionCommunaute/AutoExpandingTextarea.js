import React, { useState } from "react";

function AutoExpandingTextarea(props) {
  const [value, setValue] = useState("");

  const handleChange = (event) => {
    setValue(event.target.value);
    event.target.style.height = "auto";
    event.target.style.height = `${event.target.scrollHeight}px`;
  };

  return (
    <textarea
        value={value}
        onChange={handleChange}
        {...props}
        placeholder="Exprimez-vous !"
        className='content'
        type="text"
    />
  );
}

export default AutoExpandingTextarea;