// "use client";
// import Cookies from "js-cookie";
// import { useState } from "react";

// const verifyToken = async () => {
//   const Token = Cookies.get("token");
//   const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}users`, {
//     method: "GET",
//     headers: {
//       Authorization: `Bearer ${Token}`, // Get token from cookies
//     },
//   });
//   const data = await response.json();
//   return data.user._id;
// };

// export default function UpdateUser() {
//   const [inputUser, setInputUser] = useState({
//     profile: "",
//     email: "",
//     firstname: "",
//     lastname: "",
//     phone: "",
//     gender: "",
//     address: "",
//     Dateofbirth: "",
//     about: "",
//     role: "",
//   });

//   const handleChange = (event) => {
//     const { name, value, files } = event.target;
//     if (name === "profile" && files && files.length > 0) {
//       setInputUser((prevState) => ({
//         ...prevState,
//         profile: files[0],
//       }));
//     } else {
//       setInputUser((prevState) => ({
//         ...prevState,
//         [name]: value,
//       }));
//     }
//   };

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     try {
//       const userId = await verifyToken();
//       console.log(userId);

//       const formData = new FormData();
//       Object.keys(inputUser).forEach((key) => {
//         if (key === "profile" && inputUser[key] instanceof File) {
//           formData.append(key, inputUser[key]);
//         } else {
//           formData.append(key, inputUser[key]);
//         }
//       });

//       const response = await fetch(
//         `${process.env.NEXT_PUBLIC_API_URL}users/${userId}`,
//         {
//           method: "PUT", // Change to PUT since you want to update the user
//           headers: {
//             Authorization: `Bearer ${Cookies.get("token")}`,
//           },
//           body: formData, // Send FormData instead of JSON for file upload
//         }
//       );

//       const result = await response.json();
//       if (result.success) {
//         alert("User details updated successfully!");
//         router.push('/profile'); 
//       } else {
//         alert(result.error || "Update failed!");
//       }
//     } catch (error) {
//       console.error("Update Error:", error.message);
//       alert("An error occurred while updating. Please try again.");
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-black text-white shadow-[0px_15px_60px_#00FF7F]">
//       <form className="max-w-md mx-auto mt-5" onSubmit={handleSubmit}>
//         <div className="relative z-0 w-full mb-1 group">
//           <div className="relative flex justify-center">
//             <label className="cursor-pointer">
//               <input
//                 type="file"
//                 name="profile"
//                 className="hidden"
//                 onChange={handleChange}
//               />
//               <img
//                 src={
//                   inputUser.profile
//                     ? URL.createObjectURL(inputUser.profile)
//                     : "https://img.freepik.com/premium-photo/indian-bengali-beautiful-girl-generate-by-ai_902671-1504.jpg"
//                 }
//                 alt="Profile"
//                 className="w-32 h-32 rounded-full object-cover mb-4 border-4 border-indigo-500"
//               />
//             </label>
//           </div>
//         </div>

//         {/* Email Field */}
//         <div className="relative z-0 w-full mb-5 group">
//           <input
//             value={inputUser.email}
//             onChange={handleChange}
//             type="email"
//             name="email"
//             id="floating_email"
//             className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
//             placeholder=" "
             
//           />
//           <label
//             htmlFor="floating_email"
//             className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
//           >
//             Email
//           </label>
//         </div>

//         {/* First Name and Last Name Fields */}
//         <div className="grid md:grid-cols-2 md:gap-6">
//           <div className="relative z-0 w-full mb-5 group">
//             <input
//               value={inputUser.firstname}
//               onChange={handleChange}
//               type="text"
//               name="firstname"
//               id="floating_first_name"
//               className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
//               placeholder=" "
               
//             />
//             <label
//               htmlFor="floating_first_name"
//               className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
//             >
//               First Name
//             </label>
//           </div>
//           <div className="relative z-0 w-full mb-5 group">
//             <input
//               value={inputUser.lastname}
//               onChange={handleChange}
//               type="text"
//               name="lastname"
//               id="floating_last_name"
//               className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
//               placeholder=" "
               
//             />
//             <label
//               htmlFor="floating_last_name"
//               className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
//             >
//               Last Name
//             </label>
//           </div>
//         </div>

//         {/* Phone and Gender Fields */}
//         <div className="grid md:grid-cols-2 md:gap-6">
//           <div className="relative z-0 w-full mb-5 group">
//             <input
//               value={inputUser.phone}
//               onChange={handleChange}
//               type="tel"
//               name="phone"
//               id="floating_phone"
//               className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
//               placeholder=" "
               
//             />
//             <label
//               htmlFor="floating_phone"
//               className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
//             >
//               Phone Number
//             </label>
//           </div>
//           <div className="relative z-0 w-full mb-5 group">
//             <input
//               value={inputUser.gender}
//               onChange={handleChange}
//               type="text"
//               name="gender"
//               id="floating_gender"
//               className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
//               placeholder=" "
               
//             />
//             <label
//               htmlFor="floating_gender"
//               className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
//             >
//               Gender
//             </label>
//           </div>
//         </div>

//         {/* Address Field */}
//         <div className="relative z-0 w-full mb-5 group">
//           <input
//             value={inputUser.address}
//             onChange={handleChange}
//             type="text"
//             name="address"
//             id="floating_address"
//             className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
//             placeholder=" "
             
//           />
//           <label
//             htmlFor="floating_address"
//             className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
//           >
//             Address
//           </label>
//         </div>

//         {/* Date of Birth Field */}
//         <div className="relative z-0 w-full mb-5 group">
//           <input
//             value={inputUser.Dateofbirth}
//             onChange={handleChange}
//             type="date"
//             name="Dateofbirth"
//             id="floating_date_of_birth"
//             className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
//             placeholder=" "
             
//           />
//           <label
//             htmlFor="floating_date_of_birth"
//             className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
//           >
//             Date of Birth
//           </label>
//         </div>

//         {/* About Field */}
//         <div className="relative z-0 w-full mb-5 group">
//           <input
//             value={inputUser.about}
//             onChange={handleChange}
//             type="text"
//             name="about"
//             id="floating_about"
//             className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
//             placeholder=" "
             
//           />
//           <label
//             htmlFor="floating_about"
//             className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
//           >
//             About
//           </label>
//         </div>

//         {/* Role Field */}
//         <div className="relative z-0 w-full mb-5 group">
//           <input
//             value={inputUser.role}
//             onChange={handleChange}
//             type="text"
//             name="role"
//             id="floating_role"
//             className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
//             placeholder=" "
             
//           />
//           <label
//             htmlFor="floating_role"
//             className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
//           >
//             Role
//           </label>
//         </div>

//         {/* Submit Button */}
//         <button
//           type="submit"
//           className="w-full py-2.5 px-5 bg-blue-700 hover:bg-blue-800 text-white font-medium rounded-lg text-sm focus:outline-none focus:ring-4 focus:ring-blue-300"
//         >
//           Submit
//         </button>
//       </form>
//     </div>
//   );
// }




"use client";
import { useState } from "react";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";

const verifyToken = async () => {
  const token = Cookies.get("token");
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}users`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  const data = await response.json();
  return data.user._id;
};

export default function UpdateUser() {
  const router = useRouter();
  const [inputUser, setInputUser] = useState({
    profile: "",
    email: "",
    firstname: "",
    lastname: "",
    phone: "",
    gender: "",
    address: "",
    Dateofbirth: "",
    about: "",
    role: "",
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "profile" && files.length > 0) {
      setInputUser((prev) => ({
        ...prev,
        profile: files[0],
      }));
    } else {
      setInputUser((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const userId = await verifyToken();

      const formData = new FormData();
      Object.keys(inputUser).forEach((key) => {
        if (key === "profile" && inputUser[key] instanceof File) {
          formData.append(key, inputUser[key]);
        } else {
          formData.append(key, inputUser[key]);
        }
      });

      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}users/${userId}`,
        {
          method: "PUT",
          headers: {
            Authorization: `Bearer ${Cookies.get("token")}`,
          },
          body: formData,
        }
      );

      const result = await response.json();
      if (result.success) {
        alert("User details updated successfully!");
        router.push("/profile");
      } else {
        alert(result.error || "Update failed!");
      }
    } catch (error) {
      console.error("Update Error:", error.message);
      alert("An error occurred while updating. Please try again.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white shadow-[0px_15px_60px_#00FF7F]">
      <form className="max-w-md w-full mt-12 p-4" onSubmit={handleSubmit}>
        <div className="flex justify-center mb-6">
          <label className="cursor-pointer">
            <input
              type="file"
              name="profile"
              className="hidden"
              onChange={handleChange}
            />
            <img
              src={
                inputUser.profile
                  ? URL.createObjectURL(inputUser.profile)
                  : "https://img.freepik.com/free-vector/blue-circle-with-white-user_78370-4707.jpg?semt=ais_hybrid&w=740"
              }
              alt="Profile"
              className="w-32 h-32 rounded-full object-cover border-4 border-indigo-500"
            />
          </label>
        </div>

        {/* Email */}
        <InputField
          label="Email"
          name="email"
          type="email"
          value={inputUser.email}
          onChange={handleChange}
        />

        {/* First and Last Name */}
        <div className="grid grid-cols-2 gap-4">
          <InputField
            label="First Name"
            name="firstname"
            type="text"
            value={inputUser.firstname}
            onChange={handleChange}
          />
          <InputField
            label="Last Name"
            name="lastname"
            type="text"
            value={inputUser.lastname}
            onChange={handleChange}
          />
        </div>

        {/* Phone and Gender */}
        <div className="grid grid-cols-2 gap-4">
          <InputField
            label="Phone"
            name="phone"
            type="tel"
            value={inputUser.phone}
            onChange={handleChange}
          />
          <InputField
            label="Gender"
            name="gender"
            type="text"
            value={inputUser.gender}
            onChange={handleChange}
          />
        </div>

        {/* Address */}
        <InputField
          label="Address"
          name="address"
          type="text"
          value={inputUser.address}
          onChange={handleChange}
        />

        {/* Date of Birth */}
        <InputField
          label="Date of Birth"
          name="Dateofbirth"
          type="date"
          value={inputUser.Dateofbirth}
          onChange={handleChange}
        />

        {/* About */}
        <InputField
          label="About"
          name="about"
          type="text"
          value={inputUser.about}
          onChange={handleChange}
        />

        {/* Role */}
        <InputField
          label="Role"
          name="role"
          type="text"
          value={inputUser.role}
          onChange={handleChange}
        />

        <button
          type="submit"
          className="w-full mt-4 bg-green-600 hover:bg-green-500 text-white font-semibold py-2 rounded-lg transition duration-300"
        >
          Update Profile
        </button>
      </form>
    </div>
  );
}

function InputField({ label, name, type, value, onChange }) {
  return (
    <div className="relative z-0 w-full mb-5 group">
      <input
        value={value}
        onChange={onChange}
        type={type}
        name={name}
        id={`floating_${name}`}
        className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-500 appearance-none dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-500 peer"
        placeholder=" "
      />
      <label
        htmlFor={`floating_${name}`}
        className="absolute text-sm text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
      >
        {label}
      </label>
    </div>
  );
}
