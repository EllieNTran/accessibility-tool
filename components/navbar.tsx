import Link from 'next/link';
import kpmgImage from '@public/images/KPMG_logo.png';
import Image from 'next/image';


const KpmgImage = (): JSX.Element => {
    return (
      <Image src={kpmgImage} alt="kpmg"  className="h-12 w-auto filter invert brightness-0" />
    )
  }

const Navbar = () => {

 
      return (
    <nav className="bg-navbar text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
      <div className="flex items-center">
            <KpmgImage  />  
        </div>
        <ul className="flex space-x-4">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/Help">Help</Link>
          </li>
          {/* Add more navigation links here */}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
