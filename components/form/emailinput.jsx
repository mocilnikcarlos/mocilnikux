"use client";
import { useState, useEffect } from "react";
import styles from "./emailinput.module.scss";
import ErrorMessage from "./errormessageinputs";

const EmailInput = ({
  name,
  placeholder,
  required,
  label,
  value,
  onChange,
  error: externalError,
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [suggestions, setSuggestions] = useState([]);
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const [localError, setLocalError] = useState("");

  const emailDomains = [
    "@gmail.com",
    "@hotmail.com",
    "@yahoo.com",
    "@outlook.com",
    "@icloud.com",
    "@aol.com",
    "@live.com",
  ];

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const getFilteredSuggestions = (inputValue) => {
    if (!inputValue) return [];
    const [localPart, domainPart] = inputValue.split("@");

    if (!domainPart) {
      return emailDomains.map((domain) => `${localPart}${domain}`);
    }

    return emailDomains
      .filter((domain) =>
        domain.toLowerCase().startsWith("@" + domainPart.toLowerCase())
      )
      .map((domain) => `${localPart}${domain}`);
  };

  const handleChange = (e) => {
    let newValue = e.target.value;

    if (/[^a-zA-Z0-9@.]/.test(newValue)) {
      return;
    }

    onChange(e);

    const filtered = getFilteredSuggestions(newValue);
    setSuggestions(filtered);
    setIsDropdownVisible(filtered.length > 0);

    validateEmail(newValue);
  };

  const validateEmail = (newValue) => {
    if (!newValue) {
      setLocalError("");
    } else if (!newValue.includes("@")) {
      setLocalError("Por favor, ingresa un correo electrónico válido");
    } else if (newValue.split("@").length > 2) {
      setLocalError("Solo se puede escribir un símbolo '@'");
    } else if (/\.{2,}/.test(newValue)) {
      setLocalError(
        "No se pueden usar puntos consecutivos en el correo electrónico"
      );
    } else if (!emailRegex.test(newValue)) {
      setLocalError("El formato del correo electrónico no es válido");
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

  const handleSelectSuggestion = (suggestion) => {
    onChange({ target: { name, value: suggestion } });
    setIsDropdownVisible(false);
    setLocalError("");
  };

  useEffect(() => {
    if (value === "") {
      setSuggestions([]);
      setIsDropdownVisible(false);
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
          type="email"
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
          aria-describedby={`${name}-error`}
        />
      </div>
      {isDropdownVisible && (
        <ul className={styles.suggestions}>
          {suggestions.map((suggestion, index) => (
            <li
              key={index}
              className={styles.suggestionItem}
              onClick={() => handleSelectSuggestion(suggestion)}
            >
              {suggestion}
            </li>
          ))}
        </ul>
      )}
      {displayError && (
        <ErrorMessage id={`${name}-error`} displayError={displayError} />
      )}
    </div>
  );
};

export default EmailInput;
