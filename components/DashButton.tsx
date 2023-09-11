import Button from '@mui/material/Button';
import dashImage from '@public/images/dash-image.png';
import Image from 'next/image';
import { Box, Grid, Typography } from '@mui/material';
import { useState } from 'react';

const DashImage = (): JSX.Element => {
  return (
    <Image src={dashImage} alt="Dash"/>
  )
}

const DashButton = (): JSX.Element => {

  const [isSelected, setIsSelected] = useState(false);


  return (
    <div>
     <button className={`rounded-none bg-light-purple w-132 h-40 text-white text-2xl flex items-center justify-start
          hover:outline ${isSelected ? 'outline outline-cyan-300' : 'outline-white-100'} ml-3 hover:bg-medium-purple`}
        onClick={() => setIsSelected(prev => !prev)}
          >
        <DashImage />
        <div className="flex flex-grow justify-center items-center">
          Dash
        </div>
      </button>
    </div>
    
  );
};


export default DashButton;