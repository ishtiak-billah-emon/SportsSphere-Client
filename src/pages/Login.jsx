import React, { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import Swal from "sweetalert2";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Login = () => {
  const { setUser, signInUser, loginWithGoogle } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    // firebase Login
    signInUser(email, password)
      .then((res) => {
        const lastSignInTime = res.user?.metadata?.lastSignInTime;
        const loginInfo = {
          email,
          lastSignInTime,
        };
        setUser(res.user);
        fetch(`http://localhost:3000/users`, {
          method: "PATCH",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(loginInfo),
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.modifiedCount) {
              Swal.fire("Successfully Logged in!");
              navigate(location?.state ? location.state : "/");
            }
          });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        Swal.fire("Login failed. Please try again.");
      });
  };

  const handleGoogleLogin = async () => {
    try {
      await loginWithGoogle();
      Swal.fire("Successfully Logged in!");
      navigate(location?.state ? location.state : "/");
    } catch (error) {
      setError({
        ...error,
        googleLogin: error.message,
      });
    }
  };

  return (
    <div>
      {/* <div className="hero bg-red-200 min-h-screen"> */}
      <div className="card bg-[#F3F3F3] w-full max-w-2xl shrink-0 shadow-2xl mx-auto mt-24">
        <div className="my-8">
          <h2 className="text-3xl font-bold text-center mb-3">
            Welcome to the Login Portal
          </h2>
          <p className="text-center text-[#9F9F9F]">
            Don't have an account?
            <Link to={"/signup"}>
              {" "}
              <span className="underline">Sign Up here </span>
            </Link>{" "}
          </p>
        </div>
        <form className="card-body" onSubmit={handleLogin}>
          {/* email */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="Email address"
              name="email"
              className="input input-bordered"
              required
            />
          </div>
          {/* pass */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="Enter password"
              name="password"
              className="input input-bordered"
              required
            />
          </div>
          <div className="flex flex-col gap-3">
            <div className="form-control mt-6">
              <button className="btn bg-[#403F3F] text-white text-lg">
                Login
              </button>
            </div>
            <div className="divider">OR</div>
            <div className="form-control ">
              <button
                onClick={handleGoogleLogin}
                className="btn text-white bg-[#58b97f] rounded-lg text-lg"
              >
                Login with Google
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
