import { useState } from "react";

const Signup = () => {

  return (
    <section>
      <div className="bg-white flex min-h-screen overflow-hidden">
        <div
          className="
        flex flex-col
        justify-start
        flex-1
        px-4
        pt-2
        sm:px-6
        lg:flex-none lg:px-20
        xl:px-24
      "
        >
          <div className="w-full max-w-xl mx-auto lg:w-96 px-2">
            <div>
              <a href="/" className="text-brclr-600">
                Funkaraana
              </a>
              <h2 className="mt-2 text-3xl font-bold text-nclr-600">
                {" "}
                Sign up.{" "}
              </h2>
            </div>
            <div className="mt-6">
              <div className="mt-0">
                <form action="#" method="POST" className="space-y-4">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm text-nclr-600"
                    >
                      {" "}
                      Name{" "}
                    </label>
                    <div className="mt-1">
                      <input
                        id="name"
                        name="name"
                        type="text"
                        autoComplete="name"
                        required={true}
                        placeholder="Your Name"
                        className="
                      block
                      w-full
                      px-5
                      py-3
                      text-sm
                      placeholder-nclr-300
                      transition
                      duration-500
                      ease-in-out
                      transform
                      border border-transparent
                      rounded-lg
                      text-nclr-600
                      bg-nclr-50
                      focus:outline-none
                      focus:border-transparent
                      focus:ring-2
                      focus:ring-white
                      focus:ring-offset-2
                      focus:ring-offset-nclr-300
                    "
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="username"
                      className="block text-sm text-nclr-600"
                    >
                      {" "}
                      Username{" "}
                    </label>
                    <div className="mt-1">
                      <input
                        id="username"
                        name="username"
                        type="text"
                        autoComplete="username"
                        required={true}
                        placeholder="Your Username"
                        className="
                      block
                      w-full
                      px-5
                      py-3
                      text-sm
                      placeholder-nclr-300
                      transition
                      duration-500
                      ease-in-out
                      transform
                      border border-transparent
                      rounded-lg
                      text-nclr-600
                      bg-nclr-50
                      focus:outline-none
                      focus:border-transparent
                      focus:ring-2
                      focus:ring-white
                      focus:ring-offset-2
                      focus:ring-offset-nclr-300
                    "
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-nclr-600"
                    >
                      {" "}
                      Email address{" "}
                    </label>
                    <div className="mt-1">
                      <input
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        required={true}
                        placeholder="Your Email"
                        className="
                      block
                      w-full
                      px-5
                      py-3
                      text-sm
                      placeholder-nclr-300
                      transition
                      duration-500
                      ease-in-out
                      transform
                      border border-transparent
                      rounded-lg
                      text-nclr-600
                      bg-nclr-50
                      focus:outline-none
                      focus:border-transparent
                      focus:ring-2
                      focus:ring-white
                      focus:ring-offset-2
                      focus:ring-offset-nclr-300
                    "
                      />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label
                      htmlFor="password"
                      className="block text-sm font-medium text-nclr-600"
                    >
                      {" "}
                      Password{" "}
                    </label>
                    <div className="mt-1">
                      <input
                        id="password"
                        name="password"
                        type="password"
                        autoComplete="current-password"
                        required={true}
                        placeholder="Your Password"
                        className="
                      block
                      w-full
                      px-5
                      py-3
                      text-sm
                      placeholder-nclr-300
                      transition
                      duration-500
                      ease-in-out
                      transform
                      border border-transparent
                      rounded-lg
                      text-nclr-600
                      bg-nclr-50
                      focus:outline-none
                      focus:border-transparent
                      focus:ring-2
                      focus:ring-white
                      focus:ring-offset-2
                      focus:ring-offset-nclr-300
                    "
                      />
                    </div>
                  </div>
                  <p className="text-xs bg-red-200 p-2 rounded border border-red-400 text-red-600">Error Occured in Type</p>
                  <div>
                    <button
                      type="submit"
                      className="
                    flex
                    items-center
                    justify-center
                    w-full
                    px-10
                    py-4
                    text-base
                    font-medium
                    text-center text-white
                    transition
                    duration-500
                    ease-in-out
                    transform
                    bg-brclr-600
                    rounded-xl
                    hover:bg-brclr-700
                    focus:outline-none
                    focus:ring-2
                    focus:ring-offset-2
                    focus:ring-brclr-500
                  "
                    >
                      {" "}
                      Sign in{" "}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="relative flex-1 hidden w-0 overflow-hidden lg:block">
          <img
            className="absolute inset-0 object-cover w-full h-full"
            src="https://d33wubrfki0l68.cloudfront.net/1a058aec6e3d81efe3ac4ca6366b40574876f6bc/32bc1/images/placeholders/rectanglewide.svg"
            alt=""
          />
        </div>
      </div>
    </section>
  );
};

export default Signup;
