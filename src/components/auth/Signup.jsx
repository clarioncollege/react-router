import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Error from "../common/Error";
import { useFormValidation } from "../../hooks/use-form-validation";

function Signup() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [passwordType, setPasswordType] = useState("password");
  const [confirmPasswordType, setConfirmPasswordType] = useState("password");

  const { error, validateForm, formIsValid } = useFormValidation();

  /**
   * Validate form data on each change with debounce of 1000ms
   */
  useEffect(() => {
    const timer = setTimeout(() => {
      validateForm(formData);
    }, 1000);

    return () => clearTimeout(timer);
  }, [
    formData.firstName,
    formData.lastName,
    formData.email,
    formData.password,
    formData.confirmPassword,
  ]);

  /**
   * Update form data state
   */
  function updateFormData(field, value) {
    setFormData((prevData) => ({
      ...prevData,
      [field]: value,
    }));
  }

  const submitFormHandler = (event) => {
    event.preventDefault();

    if (!formIsValid) {
      return;
    }
  };

  return (
    <section className="flex justify-center">
      <div className="w-[50%]">
        <h1 className="text-4xl font-bold" style={{ marginBottom: "10px" }}>
          Sign up
        </h1>
        <p>Sign up to get Started</p>

        {Object.keys(error).length > 0 && (
          <Error errorMessage={Object.values(error)[0]} />
        )}
        <div style={{ marginTop: "50px" }} className="w-full">
          <form onSubmit={submitFormHandler}>
            <div style={{ marginBottom: "20px" }}>
              <input
                type="text"
                placeholder="Enter Firstname"
                className="w-full border border-gray-200 rounded-md"
                style={{ padding: "10px" }}
                onChange={(event) =>
                  updateFormData("firstName", event.target.value)
                }
              />
            </div>

            <div style={{ marginBottom: "20px" }}>
              <input
                type="text"
                placeholder="Enter Lastname"
                className="w-full border border-gray-200 rounded-md"
                style={{ padding: "10px" }}
                onChange={(event) =>
                  updateFormData("lastName", event.target.value)
                }
              />
            </div>

            <div style={{ marginBottom: "20px" }}>
              <input
                type="text"
                placeholder="Enter Email"
                className="w-full border border-gray-200 rounded-md"
                style={{ padding: "10px" }}
                onChange={(event) =>
                  updateFormData("email", event.target.value)
                }
              />
            </div>

            <div style={{ marginBottom: "20px" }} className="flex items-center">
              <input
                type={passwordType}
                placeholder="Enter Password"
                className="w-full border border-gray-200 rounded-md"
                style={{ padding: "10px" }}
                onChange={(event) =>
                  updateFormData("password", event.target.value)
                }
              />

              <div style={{ marginLeft: "-25px" }}>
                {passwordType === "password" ? (
                  <i
                    className="fa-solid fa-eye cursor-pointer"
                    onClick={() => setPasswordType("text")}
                  ></i>
                ) : (
                  <i
                    className="fa-solid fa-eye-slash cursor-pointer"
                    onClick={() => setPasswordType("password")}
                  ></i>
                )}
              </div>
            </div>

            <div style={{ marginBottom: "20px" }} className="flex items-center">
              <input
                type={confirmPasswordType}
                placeholder="Confirm Password"
                className="w-full border border-gray-200 rounded-md"
                style={{ padding: "10px" }}
                onChange={(event) =>
                  updateFormData("confirmPassword", event.target.value)
                }
              />

              <div style={{ marginLeft: "-25px" }}>
                {confirmPasswordType === "password" ? (
                  <i
                    className="fa-solid fa-eye cursor-pointer"
                    onClick={() => setConfirmPasswordType("text")}
                  ></i>
                ) : (
                  <i
                    className="fa-solid fa-eye-slash cursor-pointer"
                    onClick={() => setConfirmPasswordType("password")}
                  ></i>
                )}
              </div>
            </div>

            <div style={{ marginBottom: "20px" }}>
              <input
                disabled={!formIsValid}
                type="submit"
                value="Sign Up"
                className="w-full border border-gray-200 rounded-md cursor-pointer bg-[#8c8c8c]"
                style={{ padding: "10px" }}
              />
            </div>

            <div style={{ marginBottom: "20px" }}>
              <p>
                Already have an account ? <Link to="/auth/login">Login</Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Signup;
