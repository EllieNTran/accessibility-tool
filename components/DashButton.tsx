import Button from '@mui/material/Button';
import dashImage from '@public/images/dash-image.png';
import Image from 'next/image';
import { Box, Grid, Typography } from '@mui/material';

const DashImage = (): JSX.Element => {
  return (
    <Image src={dashImage} alt="Dash"/>
  )
}

const DashButton = (): JSX.Element => {
  return (
    <div>
     <button className="rounded-none bg-light-purple w-132 h-40 text-white text-2xl hover:outline flex items-center justify-start">
        <DashImage />
        <div className="flex flex-grow justify-center items-center">
          Dash
        </div>
      </button>
    </div>
    
  );
};


export default DashButton;