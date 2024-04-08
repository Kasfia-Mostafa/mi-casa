import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import Swal from "sweetalert2";
import useAxiosPublic from "../../Hooks/useAxiosPublic";

const Register = () => {
  const { createUser, googleSignIn, updateUserProfile,reset } =
  useContext(AuthContext);
  const navigate = useNavigate();
  const axiosPublic = useAxiosPublic();
  const [error, setError] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
      const form = event.target;
      const name = form.name.value;
      const photo = form.photo.value;
      const email = form.email.value;
      const password = form.password.value;

    createUser(email, password)
    .then((result) => {
      const loggedUser = result.user;
      console.log(loggedUser);
      updateUserProfile(name,photo)
        .then(() => {
          const userInfo = {
            name: name,
            email: email,
          };
          axiosPublic.post("/users", userInfo).then((res) => {
            if (res.data.insertedId) {
              console.log("user added to database");
              reset();
              Swal.fire({
                position: "top-end",
                icon: "success",
                title: "User successfully",
                showConfirmButton: false,
                timer: 1500,
              });
              navigate("/");
            }
          });
        })
        .catch((error) => console.log(error));
    });
  };

  const handleGoogleRegister = () => {
    googleSignIn().then((result) => {
      console.log(result.user);
      const userInfo = {
        email: result.user?.email,
        name: result.user?.displayName
      }
      axiosPublic.post('/users', userInfo)
      .then(res => {
        console.log(res.data)
        navigate('/')
      })
    });
  };

  return (
    <div className="h-[80vh] font-DM">
      <div className="w-full relative">
        <img
          className="w-full h-[120vh]"
          src="https://i.ibb.co/mq326q3/cool-background.png"
          alt="matthew-henry-T-G9-PVLOf-OY-unsplash"
          border="0"
        ></img>
      </div>
      <section className="absolute top-10 left-80 w-3/5 mt-40">
        <div className="flex flex-col items-center justify-center  px-6 py-8 mx-auto md:h-screen lg:py-0 text-white">
          <div className="w-full border border-white backdrop-blur-sm rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8 bg-[#E3E3E3]">
              <h1 className="text-3xl text-center font-bold leading-tight tracking-tight text-black">
                Register Account
              </h1>
              <form
                onSubmit={handleSubmit}
                className="space-y-4 md:space-y-6"
                action="#"
              >
                <div>
                  <label
                    for="name"
                    className="block mb-2 text-sm font-medium text-black"
                  >
                    Your name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="name"
                    required=""
                  />
                </div>
                <div>
                  <label
                    for="image"
                    className="block mb-2 text-sm font-medium text-black"
                  >
                    Image URL
                  </label>
                  <input
                    type="text"
                    name="photo"
                    id="photo"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="image url"
                    required=""
                  />
                </div>

                <div>
                  <label
                    for="email"
                    className="block mb-2 text-sm font-medium text-black"
                  >
                    Your email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="email"
                    required=""
                  />
                </div>
                <div>
                  <label
                    for="password"
                    className="block mb-2 text-sm font-medium text-black"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="password"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required=""
                  />
                </div>

                <div className="flex justify-center">
                  <button
                    type="submit"
                    className="text-white bg-gradient-to-r from-slate-700 to-slate-400 hover:bg-gradient-to-l font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                  >
                    Register
                  </button>
                </div>
                <div className="flex justify-center">
                  <p className="font-light text-black">
                    Do not have an account yet?
                    <Link className="ml-2" to="/login">
                      Login
                    </Link>
                  </p>
                </div>
              </form>
              <div className="flex justify-center">
                <button
                  onClick={handleGoogleRegister}
                  type="button"
                  className="flex hover:text-white hover:bg-slate-700 bg-white text-black focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center  dark:focus:ring-[#4285F4]/55 mr-2 mb-2"
                >
                  <svg
                    class="w-4 h-4 mr-2"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 18 19"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M8.842 18.083a8.8 8.8 0 0 1-8.65-8.948 8.841 8.841 0 0 1 8.8-8.652h.153a8.464 8.464 0 0 1 5.7 2.257l-2.193 2.038A5.27 5.27 0 0 0 9.09 3.4a5.882 5.882 0 0 0-.2 11.76h.124a5.091 5.091 0 0 0 5.248-4.057L14.3 11H9V8h8.34c.066.543.095 1.09.088 1.636-.086 5.053-3.463 8.449-8.4 8.449l-.186-.002Z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  Sign up with Google
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Register;
