const SignBanner = () => {
  return (
    <div className="bg-black text-white h-9 flex items-center justify-center">
      <span className="text-[12px] xl:text-[16px]">Sign up and get 20% off to your first order.</span>
      <a href="/register" className="underline ml-1">
        Sign Up Now
      </a>
    </div>
  );
};

export default SignBanner;
