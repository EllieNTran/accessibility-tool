"use client"

import '@styles/globals.css';
import Banner from '@components/Banner';
import DashButton from '@components/DashButton';
import BeyondButton from '@components/BeyondButton';
import { Ring, Roller } from 'react-spinners-css';
import { useState } from 'react';

const RunChecksButton = ():JSX.Element => {
  const [clicked, setClicked] = useState(false);
//   // const handleClick = async () => {
//   //   try {
//   //     const response = await fetch("api/npm/${appName}", {
//   //       method: "GET",
//   //       headers: {
//   //         "Content-Type": "application/json",
//   //       },
//   //     });
//   //   } catch (error) {
//   //     console.log(error);
//   //   }
//   };

// const cyanClick = () => {
//   setClicked((prevClicked) => !prevClicked);
// };
const [message, setMessage] = useState<string>('');

const executeCommand = async () => {
  try {
    const response = await fetch('/api/command', {
      method: 'GET', 
    });

    if (response.ok) {
      const data = await response.json();
      setMessage(data.message);
    } else {
      const errorData = await response.json();
      setMessage(`Error: ${errorData.error}`);
    }
  } catch (error) {
    console.error(error);
    setMessage('An error occurred');
  }
};

  

  return (
    <button
      className={`rounded-full border bg-medium-purple py-8 px-10 text-white text-xl normal-case hover:bg-violet-900 text-center text-sm font-inter flex items-center justify-center ml-auto mr-auto ${
        clicked ? 'outline-cyan-300' : ''
      }`}
      onClick={executeCommand}
      // onClick={cyanClick}
    >
      Run Npm Command
    </button>
  )
}

const App = () => {
  return (
    <section className="w-full flex-center justify-center flex-col">
      <div className="mt-4 mr-8 ml-5">
        <Banner />
      </div>
      <div className="flex justify-center mt-6">
        <div className='flex space-x-4 mt-3'>
        <DashButton />
        <BeyondButton />
        </div>
      </div>
      <div className="flex justify-center mt-12">
        <RunChecksButton />
      </div>
    </section>
  )
}
 
export default App;