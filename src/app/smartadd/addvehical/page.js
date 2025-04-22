// "use client"
// import Cookies from 'js-cookie'; 
// import { useState } from "react";

// const verifyToken = async () => {
//   const Token = Cookies.get('token');
//   const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}users`, {
//     method: 'GET',
//     headers: {
//       'Authorization': `Bearer ${Token}`  // Get token from cookies
//     },
//   });
//   const data = await response.json();
//   // console.log(data.user._id)
//   return data.user._id
// };

// export default function Smartadd() {

//   const [inputUser, setinputUser] = useState({
//     ownerId: "",
//     category: "",
//     modelName: "",
//     registrationNo: "",
//     pricePerHour: "",
//     pricePerDay: "",
//     fuelType: "",
//     lastService: "",
//     ownerName: "",
//     images: "",
//   });

//   const handleChange = (event) => {
//     const { name, value } = event.target;
//     setinputUser((prevState) => ({
//       ...prevState,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     const ownerId = await verifyToken();
//     // let userid = "1237hdb891"
//      // Setting ownerId after token verification
//     try {
//       const result = await fetch(`${process.env.NEXT_PUBLIC_API_URL}gowheels`, {
//         method: "POST",  // Change to POST since you're adding a new vehicle
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ ...inputUser, ownerId }),  // Send ownerId along with other data
//       });

//       const response = await result.json();
//       if (response.success) {
//         alert("Vehicle added successfully!");
//       } else {
//         alert(response.error || "Add vehicle failed!");
//       }
//     } catch (error) {
//       console.error("Error:", error);
//       alert("An error occurred. Please try again.");
//     }
//   };

//   return (
//     <div>
//       <section className="text-gray-700 body-font relative mt-20">
//         <div className="absolute inset-0 bg-gray-300">
//           <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3428.206252986747!2d76.57279697544242!3d30.76879017456685!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ffb140bd63e07%3A0x68591e334d17a988!2sChandigarh%20University!5e0!3m2!1sen!2sin!4v1734692088399!5m2!1sen!2sin" width="100%" height="100%" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
//         </div>
//         <div className="container px-5 py-14 mx-auto flex">
//           <div className="lg:w-1/3 md:w-1/2 bg-gray-900 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10">
//             <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">Add Vehicle</h2>
//             <form className="max-w-md mx-auto" onSubmit={handleSubmit}>
//               <div className="relative z-0 w-full mb-5 group">
//                 <input value={inputUser.category} onChange={handleChange} type="text" name="category" id="floating_repeat_password" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
//                 <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Category</label>
//               </div>
//               <div className="grid md:grid-cols-2 md:gap-6">
//                 <div className="relative z-0 w-full mb-5 group">
//                   <input value={inputUser.modelName} onChange={handleChange} type="text" name="modelName" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
//                   <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Model Name</label>
//                 </div>
//                 <div className="relative z-0 w-full mb-5 group">
//                   <input value={inputUser.registrationNo} onChange={handleChange} type="text" name="registrationNo" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
//                   <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Registration No.</label>
//                 </div>
//               </div>
//               <div className="grid md:grid-cols-2 md:gap-6">
//                 <div className="relative z-0 w-full mb-5 group">
//                   <input value={inputUser.pricePerHour} onChange={handleChange} type="tel" name="pricePerHour" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
//                   <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Price Per Hour</label>
//                 </div>
//                 <div className="relative z-0 w-full mb-5 group">
//                   <input value={inputUser.pricePerDay} onChange={handleChange} type="text" name="pricePerDay" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
//                   <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Price Per Day</label>
//                 </div>
//               </div>
//               <div className="relative z-0 w-full mb-5 group">
//                 <input value={inputUser.fuelType} onChange={handleChange} type="text" name="fuelType" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
//                 <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Fuel Type</label>
//               </div>
//               <div className="relative z-0 w-full mb-5 group">
//                 <input value={inputUser.lastService} onChange={handleChange} type="text" name="lastService" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
//                 <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Last Service</label>
//               </div>
//               <div className="relative z-0 w-full mb-5 group">
//                 <input value={inputUser.ownerName} onChange={handleChange} type="text" name="ownerName" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
//                 <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Owner Name</label>
//               </div>
//               <div className="relative z-0 w-full mb-5 group">
//                 <input value={inputUser.images} onChange={handleChange} type="file" name="images" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" />
//                 <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Upload Images</label>
//               </div>
//               <button className="text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-4 focus:ring-indigo-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center" type="submit">Add Vehicle</button>
//             </form>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }


"use client"
import Cookies from 'js-cookie';
import { useState, useEffect } from "react";
import { Country, State } from 'country-state-city';

const Smartadd = () => {
  // Address State
  const [address, setAddress] = useState({
    street: "",
    city: "",
    state: "",
    country: "",
    pincode: "",
    localAddress: ""
  });

  // Map State
  const [mapData, setMapData] = useState({
    url: "https://maps.google.com/maps?q=Chandigarh+University&output=embed",
    isSatellite: false,
    latitude: null,
    longitude: null
  });

  // Form State
  const [inputUser, setInputUser] = useState({
    ownerId: "",
    category: "",
    modelName: "",
    registrationNo: "",
    pricePerHour: "",
    pricePerDay: "",
    fuelType: "",
    lastService: "",
    ownerName: "",
    images: "",
  });

  const [states, setStates] = useState([]);
  const [countries] = useState(Country.getAllCountries());
  const [isLocating, setIsLocating] = useState(false);
  const [locationError, setLocationError] = useState("");

  // Map Update Effect
  useEffect(() => {
    const debounceTimer = setTimeout(() => {
      const query = [
        address.street,
        address.localAddress,
        address.city,
        State.getStateByCode(address.state)?.name,
        address.pincode,
        Country.getCountryByCode(address.country)?.name
      ].filter(Boolean).join(', ');

      const mapType = mapData.isSatellite ? "k" : "m";
      const coords = mapData.latitude && mapData.longitude 
        ? `@${mapData.latitude},${mapData.longitude},15z`
        : "";

      const newUrl = `https://maps.google.com/maps?q=${encodeURIComponent(query)}${coords}&t=${mapType}&output=embed`;
      setMapData(prev => ({ ...prev, url: newUrl }));
    }, 500);

    return () => clearTimeout(debounceTimer);
  }, [address, mapData.isSatellite, mapData.latitude, mapData.longitude]);

  // Load States when Country Changes
  useEffect(() => {
    if (address.country) {
      setStates(State.getStatesOfCountry(address.country));
    }
  }, [address.country]);

  // Form Handlers
  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    setInputUser(prev => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value
    }));
  };

  const handleAddressChange = (e) => {
    const { name, value } = e.target;
    setAddress(prev => ({ ...prev, [name]: value }));
  };

  // GPS Location Handler
  const handleGPSLocation = async () => {
    if (!navigator.geolocation) {
      setLocationError("Geolocation is not supported by your browser");
      return;
    }

    setIsLocating(true);
    setLocationError("");

    try {
      const position = await new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(resolve, reject, {
          enableHighAccuracy: true,
          timeout: 10000,
          maximumAge: 0
        });
      });

      const { latitude, longitude } = position.coords;
      const addressData = await reverseGeocode(latitude, longitude);
      
      setAddress(prev => ({
        ...prev,
        ...addressData,
        country: Country.getCountryByCode(addressData.countryCode)?.isoCode || ""
      }));

      setMapData(prev => ({
        ...prev,
        latitude,
        longitude,
        isSatellite: true
      }));

    } catch (error) {
      setLocationError(error.message || "Error getting location");
    } finally {
      setIsLocating(false);
    }
  };

  // Reverse Geocoding
  const reverseGeocode = async (lat, lng) => {
    try {
      const response = await fetch(
        `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${lat}&lon=${lng}`
      );
      const data = await response.json();
      
      return {
        street: data.address.road || "",
        city: data.address.city || data.address.town || data.address.village || "",
        state: data.address.state || "",
        countryCode: data.address.country_code?.toUpperCase() || "",
        pincode: data.address.postcode || "",
        localAddress: data.display_name || ""
      };
    } catch (error) {
      throw new Error("Failed to fetch address details");
    }
  };

  // View Toggle
  const toggleSatelliteView = () => {
    setMapData(prev => ({ ...prev, isSatellite: !prev.isSatellite }));
  };

  // Token Verification
  const verifyToken = async () => {
    const Token = Cookies.get('token');
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}users`, {
      method: 'GET',
      headers: { 'Authorization': `Bearer ${Token}` }
    });
    const data = await response.json();
    return data.user._id;
  };

  // Form Submission
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const sellerId = await verifyToken();
      
      const fullLocation = [
        address.street,
        address.localAddress,
        address.city,
        State.getStateByCode(address.state)?.name,
        address.pincode,
        Country.getCountryByCode(address.country)?.name
      ].filter(Boolean).join(', ');

      const formData = {
        ...inputUser,
        sellerId,
        location: fullLocation,
        images: inputUser.images
      };

      const result = await fetch(`${process.env.NEXT_PUBLIC_API_URL}livinglinks`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });

      const response = await result.json();
      if (response.success) {
        alert("Property added successfully!");
        // Reset Form
        setInputUser({
             ownerId: "",
    category: "",
    modelName: "",
    registrationNo: "",
    pricePerHour: "",
    pricePerDay: "",
    fuelType: "",
    lastService: "",
    ownerName: "",
    images: "",
        });
        setAddress({
          street: "",
          city: "",
          state: "",
          country: "",
          pincode: "",
          localAddress: ""
        });
      } else {
        alert(response.error || "Add property failed!");
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
          <iframe 
            width="100%" 
            height="100%" 
            src={mapData.url}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
        
        <div className="container px-5 py-14 mx-auto flex">
          <div className="lg:w-1/3 md:w-1/2 bg-gray-900 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-gray-100 text-lg font-medium title-font">Add Vehical</h2>
              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={toggleSatelliteView}
                  className="text-white bg-blue-600 hover:bg-blue-700 px-3 py-1.5 rounded-lg text-sm"
                >
                  {mapData.isSatellite ? 'Map View' : 'Satellite View'}
                </button>
                <button
                  type="button"
                  onClick={handleGPSLocation}
                  disabled={isLocating}
                  className="text-white bg-green-600 hover:bg-green-700 px-3 py-1.5 rounded-lg text-sm"
                >
                  {isLocating ? (
                    <div className="flex items-center">
                      <span className="animate-spin mr-2">🌀</span>
                      Locating...
                    </div>
                  ) : (
                    <div className="flex items-center">
                      <span className="mr-2">📍</span>
                      GPS
                    </div>
                  )}
                </button>
              </div>
            </div>
            {locationError && (
              <p className="text-red-500 text-sm mb-4">{locationError}</p>
            )}

            <form className="max-w-md mx-auto" onSubmit={handleSubmit}>
              {/* Property Details */}
              <div className="relative z-0 w-full mb-5 group">
                <input 
                  value={inputUser.name} 
                  onChange={handleChange} 
                  type="text" 
                  name="name" 
                  className="block py-2.5 px-0 w-full text-sm text-gray-100 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" 
                  placeholder=" "
                  required 
                />
                <label className="peer-focus:font-medium absolute text-sm text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                  Vehical Name
                </label>
              </div>

              {/* Address Fields */}
              <div className="relative z-0 w-full mb-5 group">
                <input
                  name="localAddress"
                  value={address.localAddress}
                  onChange={handleAddressChange}
                  className="block py-2.5 px-0 w-full text-sm text-gray-100 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                />
                <label className="peer-focus:font-medium absolute text-sm text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                  Full Address
                </label>
              </div>

              <div className="grid md:grid-cols-2 md:gap-6">
                <div className="relative z-0 w-full mb-5 group">
                  <input
                    name="pincode"
                    type="number"
                    value={address.pincode}
                    onChange={handleAddressChange}
                    className="block py-2.5 px-0 w-full text-sm text-gray-100 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder=" "
                  />
                  <label className="peer-focus:font-medium absolute text-sm text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                    Pincode
                  </label>
                </div>
                <div className="relative z-0 w-full mb-5 group">
                  <input
                    name="pincode"
                    type="number"
                    value={address.pincode}
                    onChange={handleAddressChange}
                    className="block py-2.5 px-0 w-full text-sm text-gray-100 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder=" "
                  />
                  <label className="peer-focus:font-medium absolute text-sm text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                    Registation number
                  </label>
                </div>
              </div>
          
              {/* Description, Category, Price, Security, BHK */}
              
              <div className="grid md:grid-cols-2 md:gap-6">
                {["Price pr day", "Price pr Hour", "security", "Fuel"].map((field) => (
                  <div className="relative z-0 w-full mb-5 group" key={field}>
                    <input
                      name={field}
                      value={inputUser[field]}
                      onChange={handleChange}
                      className="block py-2.5 px-0 w-full text-sm text-gray-100 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                      placeholder=" "
                    />
                    <label className="peer-focus:font-medium absolute text-sm text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                      {field.charAt(0).toUpperCase() + field.slice(1)}
                    </label>
                  </div>
                ))}
              </div>

              <div className="relative z-0 w-full mb-5 group">
                <textarea
                  name="description"
                  value={inputUser.description}
                  onChange={handleChange}
                  rows="3"
                  className="block py-2.5 px-0 w-full text-sm text-gray-100 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                />
                <label className="peer-focus:font-medium absolute text-sm text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                  Description
                </label>
              </div>

              {/* Image Input */}
              <div className="relative z-0 w-full mb-5 group">
                <input
                  name="images"
                  value={inputUser.images}
                  onChange={handleChange}
                  className="block py-2.5 px-0 w-full text-sm text-gray-100 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                />
                <label className="peer-focus:font-medium absolute text-sm text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                  Image URL
                </label>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
              >
                Submit 
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Smartadd;
