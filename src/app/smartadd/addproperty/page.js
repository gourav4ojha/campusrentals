"use client"
import Cookies from 'js-cookie'; 
import { useState } from "react";

const verifyToken = async () => {
  const Token = Cookies.get('token');
   const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}users`, {
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${Token}`  // Get token from cookies
    },
  });
  const data = await response.json();
  // console.log(data.user._id)
  return data.user._id
};

export default function Smartadd() {
  const [inputUser, setInputUser] = useState({
    sellerId: "",
    name: "",
    description: "",
    category: "",
    price: "",
    security: "",
    location: "",
    bhk: "",
    wifi: false,
    ac: false,
    fridge: false,
    furniture: false,
    images: "",
  });

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    setInputUser((prevState) => ({
      ...prevState,
      [name]: type === "checkbox" ? checked : value,
    }));
  };


  const handleSubmit = async (event) => {
    event.preventDefault();
    const sellerId = await verifyToken();
      // Setting ownerId after token verification
    try {
      const result = await fetch(`${process.env.NEXT_PUBLIC_API_URL}livinglinks`, {
        method: "POST",  // Change to POST since you're adding a new vehicle
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...inputUser, sellerId }),  // Send ownerId along with other data
      });

      const response = await result.json();
      if (response.success) {
        alert("Vehicle added successfully!");
      } else {
        alert(response.error || "Add vehicle failed!");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred. Please try again.");
    }
  };

  return (
    <div>
      <section className="text-gray-700 body-font relative mt-20">
        <div className="absolute inset-0 bg-gray-300">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3428.206252986747!2d76.57279697544242!3d30.76879017456685!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ffb140bd63e07%3A0x68591e334d17a988!2sChandigarh%20University!5e0!3m2!1sen!2sin!4v1734692088399!5m2!1sen!2sin" width="100%" height="100%" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
        <div className="container px-5 py-14 mx-auto flex">
          <div className="lg:w-1/3 md:w-1/2 bg-gray-900 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10">
            <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">Add Vehicle</h2>
            <form className="max-w-md mx-auto" onSubmit={handleSubmit}>
              <div className="relative z-0 w-full mb-5 group">
                <input value={inputUser.name} onChange={handleChange} type="text" name="name" id="floating_repeat_password" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">name</label>
              </div>
              <div className="relative z-0 w-full mb-5 group">
                <input value={inputUser.description} onChange={handleChange} type="text" name="description" id="floating_repeat_password" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">description</label>
              </div>
              <div className="grid md:grid-cols-2 md:gap-6">
                <div className="relative z-0 w-full mb-5 group">
                  <input value={inputUser.bhk} onChange={handleChange} type="text" name="bhk" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                  <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">bhk</label>
                </div>
                <div className="relative z-0 w-full mb-5 group">
                  <input value={inputUser.category} onChange={handleChange} type="text" name="category" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                  <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">category</label>
                </div>
              </div>
              <div className="grid md:grid-cols-2 md:gap-6">
                <div className="relative z-0 w-full mb-5 group">
                  <input value={inputUser.price} onChange={handleChange} type="tel" name="price" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                  <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Rent</label>
                </div>
                <div className="relative z-0 w-full mb-5 group">
                  <input value={inputUser.security} onChange={handleChange} type="text" name="security" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                  <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Security</label>
                </div>
              </div>
              <div className="relative z-0 w-full mb-5 group">
                <input value={inputUser.location} onChange={handleChange} type="text" name="location" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Address</label>
              </div>

              <h3 className="mb-1 font-semibold text-gray-900 dark:text-white">Facility</h3>
              <ul className="items-center w-full text-sm font-medium mb-3 mt-2 text-gray-900 bg-white border border-gray-200 rounded-lg sm:flex dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                  <div className="flex items-center ps-3">
                    <input value={inputUser.wifi} onChange={handleChange} name="wifi" id="vue-checkbox-list" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                    <label className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">WiFi</label>
                  </div>
                </li>
                <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                  <div className="flex items-center ps-3">
                    <input value={inputUser.ac} onChange={handleChange} name="ac" id="react-checkbox-list" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                    <label className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Ac</label>
                  </div>
                </li>
                <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                  <div className="flex items-center ps-3">
                    <input value={inputUser.fridge} onChange={handleChange} name="fridge" id="angular-checkbox-list" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                    <label className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Fridge</label>
                  </div>
                </li>
                <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                  <div className="flex items-center ps-3">
                    <input value={inputUser.furniture} onChange={handleChange} name="furniture" id="angular-checkbox-list" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                    <label className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Furniture</label>
                  </div>
                </li>
              </ul>



              <div className="relative z-0 w-full mb-5 group">
                <input value={inputUser.images} onChange={handleChange} type="file" name="images" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" />
                <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Upload Images</label>
              </div>
              <button className="text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-4 focus:ring-indigo-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center" type="submit">Add Property</button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
