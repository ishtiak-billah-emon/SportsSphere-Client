import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import Swal from "sweetalert2";
import { Link, useNavigate } from "react-router-dom";

const SignUp = () => {
  const { createUser, setUser, updateUserProfile } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleSignUp = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const image = form.image.value;
    const email = form.email.value;
    const password = form.password.value;

    // firebase
    createUser(email, password)
      .then((result) => {
        // console.log('Signed up user', result.user);
        // database

        const createdAt = result?.user?.metadata?.creationTime;
        const user = { name, image, email, createdAt };
        setUser(result.user);
        updateUserProfile({ displayName: name, photoURL: image });

        fetch("http://localhost:3000/users", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(user),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log("user created to db: ", data);
            if (data.insertedId) {
              Swal.fire("Successfully signed up!");
              navigate("/");
            }
          });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  };
  return (
    <div>
      <div className="hero bg-red-200 min-h-screen">
        <div className="card bg-green-100 w-full max-w-2xl shrink-0 shadow-2xl">
          <h2 className="text-3xl font-bold text-center my-8">Welcome</h2>
          <form className="card-body" onSubmit={handleSignUp}>
            {/* name */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="name"
                name="name"
                className="input input-bordered"
                required
              />
            </div>
            {/* photo url */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo Url</span>
              </label>
              <input
                type="text"
                placeholder="Photo url"
                name="image"
                className="input input-bordered"
                required
              />
            </div>
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
            <div className="form-control mt-6">
              <button className="btn btn-primary">Sign Up</button>
            </div>
          </form>
          <p>
            Already have an account?<Link to={"/login"}> Login</Link>{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
