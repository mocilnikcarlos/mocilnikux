"use client";
import React, { useState, useEffect } from "react";
import styles from "./customtextarea.module.scss";
import ErrorMessage from "./errormessageinputs";

const CustomTextArea = ({
  name,
  placeholder,
  required,
  label,
  value,
  onChange,
  error: externalError,
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [localError, setLocalError] = useState("");

  const handleChange = (e) => {
    const newValue = e.target.value;

    onChange(e);

    if (newValue.length > 500) {
      setLocalError("El texto no puede superar los 500 caracteres.");
    } else {
      setLocalError("");
    }
  };

  const handleFocus = () => setIsFocused(true);

  const handleBlur = () => {
    setIsFocused(false);

    if (required && !value) {
      setLocalError("Este campo es obligatorio.");
    }
  };

  useEffect(() => {
    if (value && value.length <= 500) {
      setLocalError("");
    }
  }, [value]);

  const displayError = externalError || localError;

  return (
    <div
      className={`${styles.input} ${isFocused || value ? styles.focused : ""}`}
    >
      <label className={styles.label} htmlFor={name}>
        {label}
      </label>
      <div className={styles.boxInput}>
        <textarea
          id={name}
          name={name}
          placeholder={placeholder}
          required={required}
          className={`${styles.formInput} ${value ? styles.filled : ""} ${
            displayError ? styles.error : ""
          }`}
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          value={value}
          rows="4"
          aria-describedby={`${name}-error`}
        />
      </div>
      {displayError && (
        <ErrorMessage id={`${name}-error`} displayError={displayError} />
      )}
    </div>
  );
};

export default CustomTextArea;
