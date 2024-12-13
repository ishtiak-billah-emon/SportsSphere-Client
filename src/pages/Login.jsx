import React from "react";

const Login = () => {
  const handleLogin = e =>{
    e.preventDefault();
  }
  return (
    <div>
      <div className="hero bg-red-200 min-h-screen">
        <div className="card bg-green-100 w-full max-w-2xl shrink-0 shadow-2xl">
          <h2 className="text-3xl font-bold text-center my-8">Welcome</h2>
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
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Sign Up</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
