import Insta from "@/components/insta";
import Image from 'next/image';
import Living from "@/assets/images/gowheels1.jpg"
import Link from "next/link";

const getvenicals = async () => {
  let data = await fetch(`${process.env.NEXT_PUBLIC_API_URL}gowheels`);
  data = await data.json();
  return data.result;
}

export default async function GoWheels() {
  const vehicals = await getvenicals()
  return (
    <>
      <section className="flex flex-col w-full h-screen ">
        <Image
          src={Living}
          alt="bg image"
          fill
          className="w-full h-screen bg-no-repeat rounded-b-3xl object-cover object-center"
        />
        <div className="w-full h-screen relative ">
          <div className="relative h-screen text-center flex flex-col justify-center items-center">
            <h1 className="font-normal text-7xl text-center mt-16 text-white capitalize">
              Your Adventure, Your Ride</h1>
            <h1 className="font-normal text-3xl text-center mt-2 text-white capitalize"> Hit the Road in Style with Our Rentals</h1>

          </div>
        </div>
      </section>

      <div className="mb-12">
      <Insta/>
      </div>

      <div className="mt-1 ml-5 mr-5 flex flex-wrap justify-center">
        { vehicals.map((item) => (          
         <div className="relative flex flex-col my-6 bg-white shadow-sm border border-slate-200 mx-2 rounded-lg w-96" key={item._id}>
            <div className="relative h-56 m-2.5 overflow-hidden rounded-md">
              <img
                src={item.images[0] || "/fallback-image.jpg"}
                alt={item.modelName}
                className="object-cover w-full h-full"
              />
            </div>
          <div className="p-4">
              <h6 className="mb-2 text-slate-800 text-xl font-semibold">
                {item.modelName}
              </h6>
              <p className="text-slate-600 leading-normal font-light">
                Price Per Hour: ₹{item.pricePerHour}
              </p>
              <p className="text-slate-600 leading-normal font-light">
                Price Per Day: ₹{item.pricePerDay}
              </p>
            </div>
          <div className="px-4 pb-4">
              <Link
                href={`./gowheels/${item._id}`}
                className="rounded-md bg-slate-800 py-2 px-4 text-center text-sm text-white shadow-md hover:bg-slate-700"
              >
                Read more
              </Link>
            </div>
        </div>))}
 

      </div>
    </>
  )
}