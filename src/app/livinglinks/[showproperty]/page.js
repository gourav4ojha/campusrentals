import Review from '@/components/review'
import Footer from '@/components/footer'

const fetchpropertyData = async (propertyId) => {
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}livinglinks/${propertyId}`);
        if (!response.ok) {
            throw new Error(`Error fetching property data: ${response.statusText}`);
        }
        const data = await response.json();
        // console.log(data.result);
        return data.result;
    } catch (error) {
        console.error("Error in fetchpropertyData:", error.message);
        return null;
    }
};

export default async function ShowProperty({ params }) {

    const { showproperty: propertyId } = await params; // Destructure showproperty from params
    // console.log("property ID:", propertyId);

    if (!propertyId) {
        console.error("No property ID provided");
        return { notFound: true }; // Handle missing IDs for Next.js
    }

    const property = await fetchpropertyData(propertyId);

    if (!property) {
        console.error("property not found");
        return { notFound: true }; // Return 404 if the property doesn't exist
    }


    return (
        <div className="m-12  pt-9" key={property._id}>
            <div>
                <div id="controls-carousel" className="relative w-full" data-carousel="static">
                    <div className="overflow-hidden rounded-lg h-[500px] md:h-[650px]">
                        <div className="ease-in-out">
                            <img
                                src={property.images[0]}
                                alt="Property"
                                className="w-full h-full object-cover object-center"
                            />
                        </div>
                    </div>
                </div>
            </div>


            <div>
                <div className="container my-5 py-2">
                    <div className="col flex">
                        <div className="col-md-6 col-sm-12 pr-2 p-2 w-500 border bg-white overflow-hidden rounded-lg bg-while">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3428.206252986747!2d76.57279697544242!3d30.76879017456685!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ffb140bd63e07%3A0x68591e334d17a988!2sChandigarh%20University!5e0!3m2!1sen!2sin!4v1734714513354!5m2!1sen!2sin" width="900" height="100%" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                        </div>
                        <div className="col-md-6 ml-5 bg-gradient-to-br from-gray-100 to-gray-300 shadow-2xl rounded-xl w-500 p-2 transition-transform duration-300">
                            <div className="bg-white w-800 p-2 rounded-lg shadow-lg">
                                <h4 className="text-xl text-gray-800 uppercase tracking-wide mb-2">Category: <span className="text-indigo-600">{property.category}</span></h4>
                                <h1 className="text-4xl font-extrabold text-gray-900 mb-4 hover:text-indigo-600 transition-colors duration-300">Elegant Apartment</h1>

                                <div className="space-y-3">
                                    <p className="text-lg text-gray-800"><strong>Owner Name:</strong> <span className="text-pink-600">{property.name}</span></p>
                                    <p className="text-lg text-gray-800"><strong>Apartment Name:</strong> <span className="text-teal-600">Sunrise Heights</span></p>
                                    <p className="text-lg text-gray-800 flex items-center">
                                        <strong>Rating:</strong>
                                        <span className="ml-2 text-yellow-500 text-2xl"><i className="fa fa-star"></i>{property.rating} 4.5</span>
                                    </p>
                                    <p className="text-lg text-gray-800"><strong>Address:</strong> <span className="text-blue-600">{property.location}</span></p>
                                    <p className="text-lg text-gray-800"><strong>Rent:</strong> <span className="text-green-600">{property.price}/month</span></p>
                                    <p className="text-lg text-gray-800"><strong>BHK:</strong> <span className="text-purple-600">{property.bhk}BHK</span></p>
                                </div>

                                <div className="mt-6">
                                    <h5 className="text-2xl font-semibold text-gray-900 mb-2">Amenities</h5>
                                    <div className="flex space-x-4 text-lg text-gray-700">
                                        <span className="flex items-center space-x-1 p-2 bg-gray-200 rounded-full shadow hover:bg-gray-300 transition duration-300">
                                            <i className="fa fa-snowflake text-blue-500"></i> <span>{property.fridge ? 'fridge' : 'no'}</span>
                                        </span>
                                        <span className="flex items-center space-x-1 p-2 bg-gray-200 rounded-full shadow hover:bg-gray-300 transition duration-300">
                                            <i className="fa fa-tv text-green-500"></i> <span>{property.furniture ? 'furniture' : 'no furniture'}</span>
                                        </span>
                                        <span className="flex items-center space-x-1 p-2 bg-gray-200 rounded-full shadow hover:bg-gray-300 transition duration-300">
                                            <i className="fa fa-wifi text-indigo-500"></i> <span>{property.wifi ? 'wifi' : 'no wifi'}</span>
                                        </span>
                                        <span className="flex items-center space-x-1 p-2 bg-gray-200 rounded-full shadow hover:bg-gray-300 transition duration-300">
                                            <i className="fa fa-apple text-red-500"></i> <span>{property.ac ? 'AC' : 'no Ac'}</span>
                                        </span>
                                    </div>
                                </div>

                                <p className="text-lg text-gray-700 mt-6">
                                    {property.description}
                                </p>

                                <div className="mt-8 flex space-x-4">
                                    <button className="btn text-lg font-semibold text-white bg-gradient-to-r from-blue-500 to-indigo-500 px-6 py-2 rounded-lg shadow hover:from-indigo-500 hover:to-blue-500 transition duration-300">
                                        Contact Owner
                                    </button>
                                    <button className="btn text-lg font-semibold text-white bg-gradient-to-r from-pink-500 to-red-500 px-6 py-2 rounded-lg shadow hover:from-red-500 hover:to-pink-500 transition duration-300">
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
    );
}
