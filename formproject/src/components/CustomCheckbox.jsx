import React from "react";
import { useField } from "formik";

function CustomCheckbox({ ...props }) {
  const [field, meta] = useField(props);
  return (
    <>
      <div className="checkBox">
        <input
          {...props}
          {...field}
          className={meta.error ? "input-error" : ""}
        />
        <span>Please accept the terms of use</span>
      </div>

      {meta.error && <div className="error">{meta.error}</div>}
    </>
  );
}

export default CustomCheckbox;
