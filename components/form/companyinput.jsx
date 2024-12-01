"use client";
import React, { useState, useEffect } from "react";
import styles from "./companyinput.module.scss";
import ErrorMessage from "./errormessageinputs";

const CompanyInput = ({
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

    if (newValue && !/^[A-Za-z0-9ÑñÁáÉéÍíÓóÚúÜü\s]+$/.test(newValue)) {
      setLocalError(
        "El nombre de la empresa solo puede contener letras, números y espacios"
      );
    } else {
      setLocalError("");
    }
  };

  const handleFocus = () => setIsFocused(true);

  const handleBlur = () => {
    setIsFocused(false);

    if (required && !value) {
      setLocalError("Este campo es obligatorio");
    }
  };

  useEffect(() => {
    if (value) {
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
        <input
          type="text"
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
        />
      </div>
      {displayError && <ErrorMessage displayError={displayError} />}
    </div>
  );
};

export default CompanyInput;
