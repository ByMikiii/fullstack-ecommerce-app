import React from "react";

const SignBanner = () => {
  return (
    <div class="bg-black text-white h-9 flex items-center justify-center">
      <span>Sign up and get 20% off to your first order.</span>
      <a href="/register" class="underline ml-1">
        Sign Up Now
      </a>
    </div>
  );
};

export default SignBanner;
