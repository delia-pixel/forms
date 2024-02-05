import React from "react";

function Input({ label, id, error, ...props }) {
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <input id={id} {...props} />
      <div className="control-error">
        {error && <p>Please enter a valid {label}   .</p>}
      </div>
    </div>
  );
}

export default Input;
