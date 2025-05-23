'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Cookies from 'js-cookie';

export default function LoginForm() {
  const [inputUser, setInputUser] = useState({
    email: '',
    password: '',
  });
  const [loading, setLoading] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const router = useRouter();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setInputUser((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}users/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(inputUser),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Login failed. Please check your credentials.');
      }

      // Set cookie with conditional expiration
      Cookies.set('token', data.token, {
        expires: rememberMe ? 7 : undefined, // 7 days or session cookie
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'strict'
      });

      router.push('/'); // More logical redirect target
    } catch (error) {
      console.error('Login Error:', error);
      alert(error.message || 'An error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
      <div className="relative group">
        <input
          type="email"
          name="email"
          value={inputUser.email}
          onChange={handleChange}
          placeholder="Email"
          className="w-full px-4 py-2 bg-gray-800 text-white rounded-lg border border-gray-600 focus:ring-2 focus:ring-blue-500 focus:outline-none"
          required
          disabled={loading}
        />
      </div>

      <div className="relative group">
        <input
          type="password"
          name="password"
          value={inputUser.password}
          onChange={handleChange}
          placeholder="Password"
          className="w-full px-4 py-2 bg-gray-800 text-white rounded-lg border border-gray-600 focus:ring-2 focus:ring-blue-500 focus:outline-none"
          required
          disabled={loading}
        />
      </div>

      <div className="flex items-center">
        <input
          type="checkbox"
          id="remember-me"
          checked={rememberMe}
          onChange={(e) => setRememberMe(e.target.checked)}
          className="w-4 h-4 text-blue-500 focus:ring-blue-500 rounded border-gray-300"
          disabled={loading}
        />
        <label htmlFor="remember-me" className="ml-2 text-sm text-gray-200">
          Remember me
        </label>
      </div>

      <button
        type="submit"
        className="w-full py-3 font-semibold bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors duration-200"
        disabled={loading}
      >
        {loading ? (
          <span className="flex justify-center items-center">
            <span className="animate-spin mr-2">🌀</span>
            Logging in...
          </span>
        ) : (
          'Login'
        )}
      </button>
    </form>
  );
}

// 'use client';

// import { useState } from 'react';
// import { useRouter } from 'next/navigation'; // Updated import for Next.js 13+ router
// import Cookies from 'js-cookie';

// export default function Loginform() {
//   const [inputUser, setinputUser] = useState({
//     email: '',
//     password: '',
//   });
//   const [loading, setLoading] = useState(false);
//   const [rememberMe, setRememberMe] = useState(false);
//   const router = useRouter(); // Used for navigation after successful login

//   const handleChange = (event) => {
//     const { name, value } = event.target;
//     setinputUser((prevState) => ({
//       ...prevState,
//       [name]: value,
//     }));
//   };

//   const handleRememberMeChange = (event) => {
//     setRememberMe(event.target.checked);
//   };

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     setLoading(true); // Set loading state to true

//     try {
//       let result = await fetch(`${process.env.NEXT_PUBLIC_API_URL}users/login`, {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(inputUser),
//       });

//       result = await result.json();

//       if (result.success) {
//         Cookies.set('token', `${result.token}`, { expires: 7 });
//         if (rememberMe) {
//           // Save token in cookies if "Remember me" is checked
//           document.cookie = `token=${result.token}; path=/; max-age=86400`; // 1 day expiry
//         }

//         alert('Login Successful');
//         router.push('/'); // Redirect to home page or any page after login
//       } else {
//         alert(result.error || 'Login failed!');
//       }
//     } catch (error) {
//       console.error('Login Error:', error);
//       alert('An error occurred. Please try again.');
//     } finally {
//       setLoading(false); // Reset loading state
//     }
//   };

//   return (
//     <form className="space-y-4" onSubmit={handleSubmit}>
//       <div className="relative group">
//         <input
//           type="email"
//           id="email"
//           name="email"
//           aria-label="Email"
//           value={inputUser.email}
//           onChange={handleChange}
//           placeholder="Email"
//           className="w-full px-4 py-2 bg-gray-800 text-white rounded-lg shadow-md border border-gray-600 focus:ring-4 focus:ring-blue-500 focus:outline-none peer"
//           required
//         />
//       </div>

//       <div className="relative group">
//         <input
//           value={inputUser.password}
//           onChange={handleChange}
//           name="password"
//           type="password"
//           id="password"
//           aria-label="Password"
//           placeholder="Password"
//           className="w-full px-4 py-2 bg-gray-800 text-white rounded-lg shadow-md border border-gray-600 focus:ring-4 focus:ring-blue-500 focus:outline-none peer"
//           required
//         />
//       </div>

//       <div className="flex items-center">
//         <input
//           type="checkbox"
//           id="remember-me"
//           className="w-4 h-4 text-blue-500 focus:ring-blue-500 border-gray-300 rounded"
//           checked={rememberMe}
//           onChange={handleRememberMeChange}
//         />
//         <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-200">
//           Keep me logged in
//         </label>
//       </div>

//       <button
//         type="submit"
//         className="w-full py-3 text-lg font-bold bg-blue-500 hover:bg-blue-600 text-white rounded-lg shadow-lg transform transition-transform duration-200 hover:-translate-y-1"
//         disabled={loading} // Disable button when loading
//       >
//         {loading ? 'Logging in...' : 'Login'}
//       </button>
//     </form>
//   );
// }
