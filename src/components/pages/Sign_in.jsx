import React from "react";
import RevealOnScroll from "../utils/RevealOnScroll";

const SignIn = () => {
  return (
    <div className="animate-fade-in section container flex justify-center items-center min-h-[70vh]">
      <div className="w-full max-w-[420px] bg-bg-secondary p-10 rounded-lg shadow-custom text-center">
        <RevealOnScroll>
          <h1 className="text-text-secondary mb-2">Welcome Back</h1>
          <p className="text-text-primary mb-8 text-[0.95rem]">
            Sign in to access your reservations and saved favorites.
          </p>
        </RevealOnScroll>

        <RevealOnScroll delay={0.2}>
          <form className="flex flex-col gap-5">
            <div>
              <input
                type="email"
                placeholder="Email Address"
                className="w-full p-3.5 rounded-lg border border-[#444] bg-bg-primary text-text-primary outline-none focus:border-accent-color transition-colors duration-300"
              />
            </div>
            <div>
              <input
                type="password"
                placeholder="Password"
                className="w-full p-3.5 rounded-lg border border-[#444] bg-bg-primary text-text-primary outline-none focus:border-accent-color transition-colors duration-300"
              />
            </div>

            <div className="flex justify-between text-[0.85rem]">
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" /> Remember me
              </label>
              <a href="#" className="text-accent-color no-underline">
                Forgot Password?
              </a>
            </div>

            <button type="submit" className="btn w-full mt-2">
              Sign In
            </button>
          </form>

          <div className="my-8 flex items-center gap-4 text-[#888]">
            <div className="flex-1 h-px bg-[#444]"></div>
            <span>OR</span>
            <div className="flex-1 h-px bg-[#444]"></div>
          </div>

          <div className="flex flex-col gap-4">
            <button className="w-full p-3 rounded-lg border border-[#444] bg-transparent text-text-primary flex items-center justify-center gap-2.5 transition-colors duration-300 hover:bg-[rgba(255,255,255,0.05)] cursor-pointer">
              <img
                src="https://www.svgrepo.com/show/475656/google-color.svg"
                alt="Google"
                className="w-5"
              />
              Continue with Google
            </button>

            <button className="w-full p-3 rounded-lg border border-[#444] bg-transparent text-text-primary flex items-center justify-center gap-2.5 transition-colors duration-300 hover:bg-[rgba(255,255,255,0.05)] cursor-pointer">
              <img
                src="https://www.svgrepo.com/show/475647/facebook-color.svg"
                alt="Facebook"
                className="w-5"
              />
              Continue with Facebook
            </button>
          </div>

          <p className="mt-8 text-[0.9rem]">
            Don't have an account?{" "}
            <a href="#" className="text-accent-color font-bold no-underline">
              Create Account
            </a>
          </p>
        </RevealOnScroll>
      </div>
    </div>
  );
};

export default SignIn;
