import React, { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import Swal from "sweetalert2";
import { Link, useLocation, useNavigate } from "react-router-dom";
import google from "../assets/google.png";

const Login = () => {
  const { setUser, signInUser, loginWithGoogle } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    // firebase
    signInUser(email, password)
      .then((res) => {
        // console.log(result.user);
        const lastSignInTime = res.user?.metadata?.lastSignInTime;
        const loginInfo = {
          email,
          lastSignInTime,
        };
        setUser(res.user);
        // console.log(res.user);
        fetch(`http://localhost:3000/users`, {
          method: "PATCH",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(loginInfo),
        })
          .then((res) => res.json())
          .then((data) => {
            // console.log(data);
            // console.log(data.modifiedCount);
            if (data.modifiedCount) {
              Swal.fire("Successfully Logged in!");
              navigate(location?.state ? location.state : "/");
              //  Navigating to the home or saved state.
            }
          });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  };

  const handleGoogleLogin = async () => {
    try {
      await loginWithGoogle();
      navigate(location?.state ? location.state : "/");
    } catch (error) {
      // console.error("Google login failed: ", error);
      setError({
        ...error,
        googleLogin: error.message,
      });
    }
  };

  return (
    <div>
      <div className="hero bg-red-200 min-h-screen">
        <div className="card bg-green-100 w-full max-w-2xl shrink-0 shadow-2xl">
          <h2 className="text-3xl font-bold text-center my-8">Welcome Login</h2>
          <form className="card-body" onSubmit={handleLogin}>
            {/* email */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
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
                placeholder="password"
                name="password"
                className="input input-bordered"
                required
              />
            </div>
            <div className="flex flex-col gap-3">
              <div className="form-control mt-6">
                <button className="btn bg-[#fc601d] text-white  text-lg">
                  Login
                </button>
              </div>
              <div className="divider">OR</div>
              <div className="form-control mt-6">
                <button
                  onClick={handleGoogleLogin}
                  className="btn text-white bg-[#58b97f] rounded-none"
                >
                  Login with Google
                </button>
              </div>
            </div>
          </form>
          <p>
            Do not have an account?<Link to={"/signup"}> Sign Up here </Link>{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
