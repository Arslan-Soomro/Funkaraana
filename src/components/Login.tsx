import { useRef } from "react";
import { userData } from "../utils/customTypes";

const Login = ({clickHandler} : {clickHandler: (data: userData) => void}) => {

  const usernameRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  return (
      <div className="bg-white flex min-h-full">
        <div
          className="
        flex flex-col
        justify-center
        flex-1
        px-4
        py-12
        sm:px-6
        lg:flex-none lg:px-20
        xl:px-24
      "
        >
          <div className="w-full max-w-xl mx-auto lg:w-96 px-2">
            <div>
              <a href="/" className="text-brclr-600 text-medium">
                Funkaraana
              </a>
              <h2 className="mt-6 text-3xl font-extrabold text-nclr-600">
                {" "}
                Log in.{" "}
              </h2>
            </div>
            <div className="mt-8">
              <div className="mt-6">
                <form action="#" method="POST" className="space-y-6">
                  <div>
                    <label
                      htmlFor="logusername"
                      className="block text-sm font-medium text-nclr-600"
                    >
                      {" "}
                      Username{" "}
                    </label>
                    <div className="mt-1">
                      <input
                        ref={usernameRef}
                        id="logusername"
                        name="username"
                        type="text"
                        autoComplete="name"
                        required={true}
                        placeholder="Your Username"
                        className="
                      block
                      w-full
                      px-5
                      py-3
                      text-base
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
                      htmlFor="logpassword"
                      className="block text-sm font-medium text-nclr-600"
                    >
                      {" "}
                      Password{" "}
                    </label>
                    <div className="mt-1">
                      <input
                        ref={passwordRef}
                        id="logpassword"
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
                      text-base
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
                    <button
                      type="submit"
                      onClick={(e) => {
                        e.preventDefault();
                        clickHandler({username: usernameRef.current?.value, password: passwordRef.current?.value});
                      }}
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
                      Log in{" "}
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
  );
};

export default Login;
