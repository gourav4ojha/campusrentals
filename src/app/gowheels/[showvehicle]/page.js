import Review from '@/components/review'
import Footer from '@/components/footer'

const fetchVehicleData = async (vehicleId) => {
 try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}gowheels/${vehicleId}`);
        if (!response.ok) {
            throw new Error(`Error fetching vehicle data: ${response.statusText}`);
        }
        const data = await response.json();
        return data.result;
    } catch (error) {
        console.error("Error in fetchVehicleData:", error.message);
        return null;
    }
};
 
export default async function showvehicles({ params }) {

    const { showvehicle: vehicleId } = params;

    if (!vehicleId) {
        console.error("No vehicle ID provided");
        return { notFound: true };
    }
    
    const vehicle = await fetchVehicleData(vehicleId);
    
    if (!vehicle) {
        console.error("Vehicle not found");
        return { notFound: true };
    }
    
    const amount = vehicle.amount;
    
    // const handlePayment = async () => {
    //     if (!amount) {
    //         console.error("Amount is not defined");
    //         return;
    //     }
    
    //     if (!process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID) {
    //         console.error("Razorpay Key ID is missing!");
    //         return;
    //     }
    
    //     try {
    //         const response = await fetch(`/create-order`, {
    //             method: "POST",
    //             headers: {
    //                 "Content-Type": "application/json",
    //             },
    //             body: JSON.stringify({ amount }),
    //         });
    
    //         const { data } = await response.json();
    //         console.log("Order ID:", data.id);
    
    //         const options = {
    //             key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
    //             amount: amount * 100,
    //             currency: "INR",
    //             name: "Campus Rentals",
    //             description: "Test Transaction",
    //             order_id: data.id,
    //             handler: function (response) {
    //                 console.log("Payment Successful:", response);
    //                 alert("Payment Successful!");
    //             },
    //             prefill: {
    //                 name: "John Doe",
    //                 email: "johndoe@example.com",
    //                 contact: "9999999999",
    //             },
    //             theme: {
    //                 color: "#3399cc",
    //             },
    //         };
    
    //         const paymentObject = new window.Razorpay(options);
    //         paymentObject.open();
    //     } catch (error) {
    //         console.error("Error:", error);
    //     }
    // };
    

    return (
        <>
            <div className="m-12  pt-9">
                <div>
                    <div id="controls-carousel" className="relative w-full" data-carousel="static">
                        <div className="relative overflow-hidden rounded-lg h-[500px] md:h-[650px]">
                            <div className="duration-700 ease-in-out object-cover object-center" data-carousel-item>
                                <img src={vehicle.images[0]} alt="..." />
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="container my-5 py-2">
                        <div className="col flex">
                            <div className="col-md-6 col-sm-12 pr-2 p-2 w-500 border bg-white overflow-hidden rounded-lg bg-while">
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3428.206252986747!2d76.57279697544242!3d30.76879017456685!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ffb140bd63e07%3A0x68591e334d17a988!2sChandigarh%20University!5e0!3m2!1sen!2sin!4v1734714513354!5m2!1sen!2sin" width="1200" height="100%" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                            </div>
                            <div className="col-md-6 ml-5 bg-gradient-to-br from-gray-100 to-gray-300 shadow-2xl rounded-xl w-500 p-2 transition-transform duration-300">
                                <div className="bg-white p-2 rounded-lg shadow-lg">
                                    <h4 className="text-xl text-gray-800 uppercase tracking-wide mb-2">Category: <span className="text-indigo-600">{vehicle.category}</span></h4>
                                    <h1 className="text-4xl font-extrabold text-gray-900 mb-4 hover:text-indigo-600 transition-colors duration-300">{vehicle.modelName}</h1>

                                    <div className="space-y-3">
                                        <p className="text-lg text-gray-800"><strong>Owner Name:</strong> <span className="text-pink-600">{vehicle.registrationNo}</span></p>
                                        <p className="text-lg text-gray-800"><strong>Apartment Name:</strong> <span className="text-teal-600">{vehicle.ownerName}</span></p>
                                        <p className="text-lg text-gray-800 flex items-center">
                                            <strong>Rating:</strong>
                                            <span className="ml-2 text-yellow-500 text-2xl"><i className="fa fa-star"></i> 4.5</span>
                                        </p>
                                        <p className="text-lg text-gray-800"><strong>Address:</strong> <span className="text-blue-600">123 Main Street, Cityville</span></p>
                                        <p className="text-lg text-gray-800"><strong>Rent pr Day:</strong> <span className="text-green-600">{vehicle.pricePerDay}</span></p>
                                        <p className="text-lg text-gray-800"><strong>Rent pr Hour:</strong> <span className="text-purple-600">{vehicle.pricePerHour}</span></p>
                                    </div>

                                    <div className="mt-6">
                                        <h5 className="text-2xl font-semibold text-gray-900 mb-2">Amenities</h5>
                                        <div className="flex space-x-4 text-lg text-gray-700">
                                            <span className="flex items-center space-x-1 p-2 bg-gray-200 rounded-full shadow hover:bg-gray-300 transition duration-300">
                                                <i className="fa fa-snowflake text-blue-500"></i> <span>{vehicle.fuelType}</span>
                                            </span>
                                        </div>
                                    </div>

                                    <p className="text-lg text-gray-700 mt-6">
                                        Beautiful and spacious apartment with modern amenities. Perfect for families or professionals.
                                    </p>

                                    <div className="mt-8 flex space-x-4">
                                        <button className="btn text-lg font-semibold text-white bg-gradient-to-r from-blue-500 to-indigo-500 px-6 py-2 rounded-lg shadow hover:from-indigo-500 hover:to-blue-500 transition duration-300">
                                            Contact Owner
                                        </button>
                                        <button
                                            className="btn text-lg font-semibold text-white bg-gradient-to-r from-pink-500 to-red-500 px-6 py-2 rounded-lg shadow hover:from-red-500 hover:to-pink-500 transition duration-300"
                                            // onClick={handlePayment}

                                        >
                                            Gunrate Token
                                        </button>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Review />
                <Footer />
            </div>
        </>
    )
}