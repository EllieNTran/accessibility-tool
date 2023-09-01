"use client"

import beyondImage from '@public/images/beyond-image.png';
import Image from 'next/image';
import { useState } from 'react';

const BeyondImage = () => (
    <Image src={beyondImage} alt="Beyond"/>
);

const BeyondButton = (): JSX.Element => {
  const [isSelected, setIsSelected] = useState(false);

  const handleClick = (clicked: boolean) => {
    setIsSelected(true)
  }

  const test = isSelected.toString();
  
  return (
    <div>
      <button className="rounded-none bg-light-purple w-132 h-40 text-white text-2xl flex items-center justify-start
      hover:outline ${isSelected ? 'outline outline-cyan-300' : 'outline-none'}" 
      onClick={() => setIsSelected(prev => !prev)}>
        <BeyondImage />
        <div className="flex flex-grow justify-center items-center">
          Beyond
        </div>
      </button>
      <p className='text-white'>{test}</p>
    </div>
    
  );
};

export default BeyondButton;