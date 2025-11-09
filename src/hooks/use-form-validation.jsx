import { useState } from "react";

export function useFormValidation() {
  const [error, setError] = useState({});
  const [formIsValid, setFormIsValid] = useState(false);

  /**
   * Validates the form fields and sets error messages accordingly.
   * @param {Object} fields - The object containing all form field values.
   * Example: { firstName: "", lastName: "", email: "", password: "", confirmPassword: "" }
   */

  function validateForm(fields) {
    for (const key in fields) {
      const value = fields[key]?.trim?.() || fields[key];

      switch (key) {
        // === First Name ===
        case "firstName":
          if (!value) return setError({ firstName: "First name is required." });
          else if (value.length < 2)
            return setError({
              firstName: "First name must be at least 2 characters long.",
            });
          else if (!/^[A-Za-z]+$/.test(value))
            return setError({
              firstName: "First name should only contain letters.",
            });
          break;

        // === Last Name ===
        case "lastName":
          if (!value) return setError({ lastName: "Last name is required." });
          else if (value.length < 2)
            return setError({
              lastName: "Last name must be at least 2 characters long.",
            });
          else if (!/^[A-Za-z]+$/.test(value))
            return setError({
              lastName: "Last name should only contain letters.",
            });
          break;

        // === Email ===
        case "email":
          if (!value) return setError({ email: "Email address is required." });
          else if (
            !/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/.test(value)
          )
            return setError({ email: "Please enter a valid email address." });
          break;

        // === Password ===
        case "password":
          if (!value) return setError({ password: "Password is required." });
          else if (value.length < 8)
            return setError({
              password: "Password must be at least 8 characters long.",
            });
          else if (!/[A-Z]/.test(value))
            return setError({
              password: "Password must include at least one uppercase letter.",
            });
          else if (!/[a-z]/.test(value))
            return setError({
              password: "Password must include at least one lowercase letter.",
            });
          else if (!/[0-9]/.test(value))
            return setError({
              password: "Password must include at least one number.",
            });
          else if (!/[!@#$%^&*(),.?":{}|<>]/.test(value))
            return setError({
              password: "Password must include at least one special character.",
            });
          break;

        // === Confirm Password ===
        case "confirmPassword":
          if (!value)
            return setError({
              confirmPassword: "Please confirm your password.",
            });
          else if (value !== fields.password)
            return setError({ confirmPassword: "Passwords do not match." });
          break;

        default:
          break;
      }
    }
    setError({});
    setFormIsValid(Object.keys(error).length === 0);
  }

  return { error, formIsValid, validateForm };
}
