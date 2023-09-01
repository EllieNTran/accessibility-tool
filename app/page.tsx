"use client"

import '@styles/globals.css';
import Banner from '@components/Banner';
import DashButton from '@components/DashButton';
import BeyondButton from '@components/BeyondButton';
import { Ring, Roller } from 'react-spinners-css';

const RunChecksButton = ():JSX.Element => {
  const handleClick = async () => {
    try {
      fetch("api/npm/test"), {
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        }
      }
      console.log("yay");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <button className="rounded-full border bg-medium-purple py-6 px-10 text-white text-xl normal-case 
    hover:bg-violet-900 text-center text-sm font-inter flex items-center justify-center"
    onClick={handleClick}>
    {/* <Link href="/api/npm/${appName}"> */}
      Run Npm Command
    {/* </Link> */}
  </button>
  )
}

const App = () => {
  return (
    <section className="w-full flex-center justify-center flex-col">
      <div className="mt-8">
        <Banner />
      </div>
      <div className="flex justify-between w-full mt-12">
        <DashButton />
        <BeyondButton />
      </div>
      <div className="flex justify-center mt-12">
        <RunChecksButton />
      </div>
    </section>
  )
}
 
export default App;