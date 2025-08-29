import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

function Registration() {
  const [credential, setCredential] = useState({
    name: "",
    email: "",
    password: "",
    cpassword: "",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    const response = await fetch(`${process.env.REACT_APP_URL}/api/auth/register`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: credential.name,
        email: credential.email,
        password: credential.password,
      }),
    });

    const json = await response.json();

    if (json.success) {
      localStorage.setItem("token", json.authToken);
      localStorage.setItem("name", json.name);
      Swal.fire({
        toast: true,
        theme: 'dark',
        position: "bottom-end",
        icon: "success",
        title: "Account created successfully.",
        timer: 3000,
        timerProgressBar: true,
        showConfirmButton: false,
        showCloseButton: true,
      });
      navigate("/dashboard");
    } else {
      setError("Oops, something went wrong or Email already exists");

      // Auto-hide bootstrap alert after 3s
      setTimeout(() => setError(""), 3000);
    }
  };

  const onChange = (e) => {
    setCredential({ ...credential, [e.target.name]: e.target.value });
  };

  return (
    <div
      style={{
        backgroundColor: "#121212",
        minHeight: "97vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div className="container" style={{ maxWidth: "500px" }}>
      <Link to="/" className="btn btn-link text-light mb-3 d-flex align-items-center">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" className="bi bi-arrow-left me-2" viewBox="0 0 16 16">
          <path
            fillRule="evenodd"
            d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 
            4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 
            .708-.708L2.707 8.5H14.5A.5.5 0 
            0 0 15 8"
          />
        </svg>
        Back
      </Link>
        <div className="card bg-dark text-light shadow-lg border-0 rounded-3">
          <div className="card-body p-4">
            <h3 className="text-center mb-4">Sign Up</h3>

            {error && (
              <div
                className="alert alert-danger alert-dismissible fade show d-flex align-items-center"
                role="alert"
              > {error}
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="alert"
                  aria-label="Close"
                ></button>
              </div>
            )}

            <form onSubmit={handleSubmit}>
              {/* Name */}
              <div className="mb-3">
                <label className="form-label text-light" htmlFor="name">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required={true}
                  className="form-control bg-dark text-light border-secondary"
                  placeholder="Enter your name"
                  onChange={onChange}
                />
              </div>

              {/* Email */}
              <div className="mb-3">
                <label className="form-label text-light" htmlFor="email">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required={true}
                  className="form-control bg-dark text-light border-secondary"
                  placeholder="Enter your email"
                  onChange={onChange}
                />
              </div>

              {/* Password */}
              <div className="mb-3">
                <label className="form-label text-light" htmlFor="password">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  required={true}
                  minLength={6}
                  className="form-control bg-dark text-light border-secondary"
                  placeholder="Enter password"
                  onChange={onChange}
                />
              </div>

              {/* Confirm Password */}
              <div className="mb-3">
                <label className="form-label text-light" htmlFor="cpassword">
                  Confirm Password
                </label>
                <input
                  type="password"
                  id="cpassword"
                  name="cpassword"
                  required={true}
                  minLength={6}
                  className="form-control bg-dark text-light border-secondary"
                  placeholder="Confirm password"
                  onChange={onChange}
                />
              </div>

              {/* Terms Checkbox */}
              <div className="form-check d-flex justify-content-start mb-4">
                <input
                  className="form-check-input me-2"
                  type="checkbox"
                  id="form2Example3c"
                  required
                />
                <label
                  className="form-check-label text-light"
                  htmlFor="form2Example3c"
                >
                  I agree to all statements in{" "}
                  <Link to="/terms" className="text-info">
                    Terms of service
                  </Link>
                </label>
              </div>

              {/* Register Button */}
              <div className="d-grid">
                <button type="submit" className="btn btn-primary btn-lg">
                  Register
                </button>
              </div>

              {/* Back to login */}
              <p className="small fw-bold text-center mt-3 mb-0">
                Already have an account?{" "}
                <Link to="/login" className="link-warning">
                  Login
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Registration;
