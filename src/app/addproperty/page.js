import instaImg4 from '@/assets/images/insta4.png';
// import addvehical from './addvehical'
import Image from 'next/image';
import Link from 'next/link'; // Import Link from Next.js

export default function Smartadd() {
  return (
    <>
      <div>
        <div className="flex justify-center items-center mt-40 pt-40">
          {/* Image 1 */}
          <Link href="./addproperty/addvehical" > {/* Link to the desired page */}
            <Image
              src={instaImg4}
              alt="instagram image"
              className="mx-5 my-3 w-[255px] h-[255px] rounded-lg hover:scale-110 ease-in duration-200 cursor-pointer"
            />
          </Link>
          
          {/* Image 2 */}
          <Link href="./addvehical"> {/* Link to another page */}
            <Image
              src={instaImg4}
              alt="instagram image"
              className="mx-5 my-3 w-[255px] h-[255px] rounded-lg hover:scale-110 ease-in duration-200 cursor-pointer"
            />
          </Link>
        </div>
      </div>
    </>
  );
}
