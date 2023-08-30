"use client"

import beyondImage from '@public/images/beyond-image.png';
import Image from 'next/image';
import { useState } from 'react';

const BeyondImage = () => (
    <Image src={beyondImage} alt="Beyond"/>
  );

const BeyondButton = (): JSX.Element => {
  const [isSelected, setIsSelected] = useState(false);

  return (
    <div>
      <button className="rounded-none bg-light-purple w-132 h-40 text-white text-2xl hover:outline flex items-center justify-start">
        <BeyondImage />
        <div className="flex flex-grow justify-center items-center">
          Beyond
        </div>
      </button>
    </div>
    
  );
};

export default BeyondButton;