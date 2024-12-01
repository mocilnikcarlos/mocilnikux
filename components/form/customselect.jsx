"use client";
import React, { useState, useEffect, useRef } from "react";
import styles from "./customselect.module.scss";
import Arrow from "../svg/arrow";
import ErrorMessage from "./errormessageinputs";

const CustomSelect = ({
  name,
  label,
  required,
  options,
  value,
  onChange,
  error: externalError,
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [localError, setLocalError] = useState("");
  const selectRef = useRef(null);

  const handleDropdownToggle = () => {
    setIsDropdownOpen((prevState) => !prevState);
  };

  const handleOptionSelect = (option) => {
    onChange({ target: { name, value: option } });
    setIsDropdownOpen(false);
    setLocalError("");
  };

  const handleBlur = () => {
    setIsFocused(false);
    if (!value && required) {
      setLocalError("Este campo es obligatorio");
    }
  };

  const handleFocus = () => {
    setIsFocused(true);
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (selectRef.current && !selectRef.current.contains(e.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    if (value) {
      setLocalError("");
    }
  }, [value]);

  const displayError = externalError || localError;

  return (
    <div
      className={`${styles.input} ${isFocused || value ? styles.focused : ""}`}
      ref={selectRef}
    >
      <label className={styles.label} htmlFor={name}>
        {label}
      </label>
      <div className={styles.boxInput}>
        <div
          className={`${styles.dropdown} ${value ? styles.filled : ""} ${
            displayError ? styles.error : ""
          }`}
          onClick={handleDropdownToggle}
          tabIndex="0"
          onFocus={handleFocus}
          onBlur={handleBlur}
        >
          <span
            className={`${styles.selectedOption} ${
              !value ? styles.defaultOption : styles.activeOption
            }`}
          >
            {value || "Seleccioná una opción"}
          </span>

          <Arrow className={styles.arrow} />
        </div>
        {isDropdownOpen && (
          <div className={styles.optionsList}>
            {options.map((option, index) => (
              <div
                key={index}
                className={styles.optionItem}
                onClick={() => handleOptionSelect(option)}
              >
                {option}
              </div>
            ))}
          </div>
        )}
      </div>
      {displayError && <ErrorMessage displayError={displayError} />}
    </div>
  );
};

export default CustomSelect;
