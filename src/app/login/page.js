import Loginform from "./loginform";
import Head from "next/head";
// import Googlelogin from "./googlelogin";

export default function Login() {
  return (
    <>
      <Head>
        <title>Login</title>
      </Head>
      <div className="min-h-screen flex items-center justify-center bg-black text-white">
        <div className="w-full max-w-md p-8 space-y-6 shadow-lg bg-gray-900 rounded-3xl relative">
          <h1 className="text-3xl font-bold text-center">Login</h1>

          {/* Google Login Button */}
          {/* <Googlelogin /> */}

          <div className="my-12 border-b text-center">
            <div className="leading-none px-2 inline-block text-sm text-gray-200 tracking-wide font-medium bg-gray-900 transform translate-y-1/2">
              Or Log In with e-mail
            </div>
          </div>

          <Loginform />
          <p className="text-center text-gray-400">
            Don&apos;t have an account?{" "}
            <a href="/signup" className="text-blue-500 hover:underline">
              Sign Up
            </a>
          </p>
        </div>
      </div>
    </>
  );
}
