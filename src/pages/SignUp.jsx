import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import Swal from "sweetalert2";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const SignUp = () => {
  const { createUser, setUser, updateUserProfile } = useContext(AuthContext);
  const navigate = useNavigate();

  const validatePassword = (password) => {
    const hasUppercase = /[A-Z]/.test(password);
    const hasLowercase = /[a-z]/.test(password);
    const isLongEnough = password.length >= 6;

    if (!hasUppercase) {
      return "Password must contain at least one uppercase letter.";
    }
    if (!hasLowercase) {
      return "Password must contain at least one lowercase letter.";
    }
    if (!isLongEnough) {
      return "Password must be at least 6 characters long.";
    }
    return "";
  };

  const handleSignUp = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const image = form.image.value;
    const email = form.email.value;
    const password = form.password.value;

    //validate password
    const passwordError = validatePassword(password);
    if (passwordError) {
      toast.error(passwordError);
      return;
    }

    // firebase
    createUser(email, password)
      .then((result) => {
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
            // console.log("user created to db: ", data);
            if (data.insertedId) {
              Swal.fire("Successfully signed up!");
              navigate("/");
            }
          });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // console.log(errorCode, errorMessage);
        toast.error(errorMessage);
      });
  };
  return (
    <div>
      <div className="card bg-[#F3F3F3] w-full max-w-2xl shrink-0 shadow-2xl mx-auto mt-24">
        <div className="flex flex-col justify-center items-center pt-12">
          <h2 className="text-3xl font-bold text-center my-3">
            Start Your Journey
          </h2>
          <p className="text-[#9F9F9F]">
            Already have an account?
            <Link to={"/login"}>
              {" "}
              <span className="underline">Login</span>
            </Link>{" "}
          </p>
        </div>
        <form className="card-body" onSubmit={handleSignUp}>
          {/* name */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              placeholder="Name"
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
              placeholder="Enter Email"
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
          <div className="form-control mt-6">
            <button className="btn bg-[#403F3F] rounded-lg text-white text-lg">
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
