import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

function Login() {
  const [credential, setCredential] = useState({ email: "", password: "" });
  const [error, setError] = useState(""); // for invalid credentials
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(""); // clear old errors

    const response = await fetch(`${process.env.REACT_APP_URL}/api/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email: credential.email,
        password: credential.password
      })
    });

    const json = await response.json();
    if (json.success) {
      localStorage.setItem('token',json.authToken);
      localStorage.setItem("name", json.name);
      Swal.fire({
        toast: true,
        theme:'dark',
        position: "bottom-end",
        icon: "success",
        title: "Logged in successfully",
        timer: 3000,
        timerProgressBar: true,
        showConfirmButton: false,
        showCloseButton: true,
      });
      navigate("/dashboard");
    } else {
      setError("Oops, the credentials you entered were invalid. Please try again.");
    }
  };

  const onChange = (e) => {
    setCredential({ ...credential, [e.target.name]: e.target.value });
  };

  return (
    <div style={{ backgroundColor: "#121212", minHeight: "85vh", color: "#fff" }}>
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
      <section className="vh-100 d-flex align-items-center">
        <div className="container-fluid h-custom">
          <div className="row d-flex justify-content-center align-items-center h-100">
            {/* Left Side Image */}
            <div className="col-md-9 col-lg-6 col-xl-5 mb-4">
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                className="img-fluid"
                alt="Sample"
              />
            </div>

            {/* Right Side Form */}
            <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
              {/* Show Error Alert */}
              {error && (               
                  <div className="alert alert-danger alert-dismissible fade show" role="alert">
                  {error}
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="alert"
                    aria-label="Close"
                  ></button>                  
                </div>
              )}

              <form onSubmit={handleSubmit}>
                {/* Email Input */}
                <div className="form-outline mb-4">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="form-control form-control-lg bg-dark text-light border-secondary"
                    placeholder="Enter a valid email address"
                    onChange={onChange}
                  />
                  <label className="form-label text-light" htmlFor="email">
                    Email address
                  </label>
                </div>

                {/* Password Input */}
                <div className="form-outline mb-3">
                  <input
                    type="password"
                    id="password"
                    name="password"
                    required
                    className="form-control form-control-lg bg-dark text-light border-secondary"
                    placeholder="Enter atleast 6 char password"
                    onChange={onChange}
                  />
                  <label className="form-label text-light" htmlFor="password">
                    Password
                  </label>
                </div>

                {/* Remember Me */}
                <div className="d-flex justify-content-between align-items-center">
                  <div className="form-check mb-0">
                    <input className="form-check-input me-2" type="checkbox" id="form2Example3" />
                    <label className="form-check-label text-light" htmlFor="form2Example3">
                      Remember me
                    </label>
                  </div>
                </div>

                {/* Login Button + Register */}
                <div className="text-center text-lg-start mt-4 pt-2">
                  <button
                    type="submit"
                    className="btn btn-primary btn-lg"
                    style={{ paddingLeft: "2.5rem", paddingRight: "2.5rem" }}
                  >
                    Login
                  </button>
                  <p className="small fw-bold mt-2 pt-1 mb-0">
                    Don't have an account?{" "}
                    <Link to="/register" className="link-warning">
                      Register
                    </Link>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Login;
