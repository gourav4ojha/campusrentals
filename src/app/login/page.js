// pages/login.js
import Head from 'next/head';

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
          <button
            type="button"
            className="w-full py-3 mb-4 text-lg font-bold bg-red-500 hover:bg-red-600 text-white rounded-lg shadow-lg transform transition-transform duration-200 hover:-translate-y-1"
          >
            Continue with Google
          </button>

          <form className="space-y-4">
            {/* Email Field */}
            <div className="relative group">
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 bg-gray-800 text-white rounded-lg shadow-md border border-gray-600 focus:ring-4 focus:ring-blue-500 focus:outline-none peer"
                required
              />
              <label
                htmlFor="email"
                className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500 transition-all duration-300 peer-placeholder-shown:top-2 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:translate-y-0 peer-focus:top-0 peer-focus:text-blue-500"
              >
                Email
              </label>
            </div>

            {/* Password Field */}
            <div className="relative group">
              <input
                type="password"
                id="password"
                className="w-full px-4 py-2 bg-gray-800 text-white rounded-lg shadow-md border border-gray-600 focus:ring-4 focus:ring-blue-500 focus:outline-none peer"
                required
              />
              <label
                htmlFor="password"
                className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500 transition-all duration-300 peer-placeholder-shown:top-2 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:translate-y-0 peer-focus:top-0 peer-focus:text-blue-500"
              >
                Password
              </label>
            </div>

            <div className="flex justify-between items-center">
              <a href="/forgot-password" className="text-blue-500 hover:underline">Forgot Password?</a>
            </div>

            <button
              type="submit"
              className="w-full py-3 text-lg font-bold bg-blue-500 hover:bg-blue-600 text-white rounded-lg shadow-lg transform transition-transform duration-200 hover:-translate-y-1"
            >
              Login
            </button>
          </form>
          <p className="text-center text-gray-400">
            Don&apos;t have an account? <a href="/signup" className="text-blue-500 hover:underline">Sign Up</a>
          </p>
        </div>
      </div>
    </>
  );
}





// export default function Login() {
//     return (
//         <>
//       {/* <section className="min-h-screen flex items-stretch text-w">
        
//         <div
//           className="lg:flex w-1/2 hidden bg-gray-500 bg-no-repeat bg-cover relative items-center"
//           style={{
//             backgroundImage: "url('https://images.unsplash.com/photo-1577495508048-b635879837f1?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80')",
//           }}
//         >
//           <div className="absolute bg-black opacity-60 inset-0 z-0"></div>
//           <div className="w-full px-24 z-10">
//             <h1 className="text-5xl font-bold text-left tracking-wide">
//               Keep it special
//             </h1>
//             <p className="text-3xl my-4">
//               Capture your personal memory in a unique way, anywhere.
//             </p>
//           </div>
//           <div className="absolute bottom-0 p-4 text-center right-0 left-0 flex justify-center space-x-4">
            
//             <span>
//               <svg
//                 fill="#fff"
//                 xmlns="http://www.w3.org/2000/svg"
//                 width="24"
//                 height="24"
//                 viewBox="0 0 24 24"
//               >
//                 <path d="M24 4.557c-.883.392-1.832.656-2.828.775..." />
//               </svg>
//             </span>
//             <span>
//               <svg
//                 fill="#fff"
//                 xmlns="http://www.w3.org/2000/svg"
//                 width="24"
//                 height="24"
//                 viewBox="0 0 24 24"
//               >
//                 <path d="M9 8h-3v4h3v12h5v-12h3.642l..." />
//               </svg>
//             </span>
//             <span>
//               <svg
//                 fill="#fff"
//                 xmlns="http://www.w3.org/2000/svg"
//                 width="24"
//                 height="24"
//                 viewBox="0 0 24 24"
//               >
//                 <path d="M12 2.163c3.204 0 3.584.012 4.85.07..." />
//               </svg>
//             </span>
//           </div>
//         </div>
         
//         <div className="flex flex-col justify-center w-full lg:w-1/2 px-8">
//           <div className="text-center">
//             <h2 className="text-4xl font-semibold">Welcome Back</h2>
//             <p className="mt-2 text-gray-300">
//               Please login to access your account.
//             </p>
//           </div>
//           <form className="mt-8 space-y-4">
//                         <div className="relative">
//               <label className="block text-sm font-medium text-gray-400">
//                 Username
//               </label>
//               <input
//                 type="text"
//                 name="username"
//                 placeholder="Enter your username"
//                 className="w-full px-3 py-2 bg-transparent border rounded-lg focus:border-blue-500"
//               />
//             </div>
//                         <div className="relative">
//               <label className="block text-sm font-medium text-gray-400">
//                 Password
//               </label>
//               <input
//                 type="password"
//                 name="password"
//                 placeholder="Enter your password"
//                 className="w-full px-3 py-2 bg-transparent border rounded-lg focus:border-blue-500"
//               />
//             </div>
           
//             <button
//               type="submit"
//               className="w-full py-2 bg-blue-500 rounded-lg text-white font-semibold hover:bg-blue-600"
//             >
//               Log in
//             </button>
//           </form>
//         </div>
//       </section> */}

//       <div className="flex items-center justify-center min-h-screen bg-black">
//       <form
//         action=""
//         method="post"
//         className="grid w-72 h-[472px] p-6 bg-[#161616] shadow-[0px_15px_60px_#00FF7F] outline outline-1 outline-[#2b9962] rounded-lg"
//       >
//         <div className="absolute top-1/2 left-6 right-6 w-[230px] -translate-y-1/2 mx-auto">
//           <div className="text-center leading-none">
//             <div className="text-[#00FF7F] font-semibold text-[40px]">Spotify</div>
//             <div className="text-white text-[18px] mt-4">Welcome Back, Loyd</div>
//           </div>

//           <div className="mt-10">
//             <div className="mb-4">
//               <input
//                 placeholder="Email Address"
//                 type="text"
//                 className="w-full py-[11px] px-6 bg-transparent border border-gray-300 rounded-md text-[#00FF7F] text-sm focus:outline-none focus:border-[#00FF7F]"
//               />
//             </div>
//             <div>
//               <input
//                 placeholder="Password"
//                 type="password"
//                 className="w-full py-[11px] px-6 bg-transparent border border-gray-300 rounded-md text-[#00FF7F] text-sm focus:outline-none focus:border-[#00FF7F]"
//               />
//             </div>
//           </div>

//           <div className="mt-5">
//             <button
//               type="submit"
//               className="w-full py-3 bg-transparent text-[#00FF7F] font-semibold text-sm outline outline-1 outline-[#00FF7F] rounded-md transition-all ease-in-out duration-300 hover:bg-[#00FF7F] hover:text-black"
//             >
//               Login
//             </button>
//           </div>

//           <div className="text-center mt-4">
//             <a href="#" className="text-[#868686] text-xs no-underline">
//               Forgot password?
//             </a>
//           </div>
//         </div>

//         <div className="absolute left-1/2 bottom-[-50px] w-7 h-2 ml-[-33px] bg-[#00FF7F] rounded-full">
//           <div className="absolute w-2 h-2 bg-gray-200 rounded-full right-[-20px]"></div>
//           <div className="absolute w-2 h-2 bg-gray-200 rounded-full right-[-38px]"></div>
//         </div>
//       </form>
//     </div>


//         </>
//     );
//   }
  



