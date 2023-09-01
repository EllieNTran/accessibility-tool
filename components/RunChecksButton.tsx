"use client"

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

function RunChecksButton (): JSX.Element {
  const [clicked, setClicked] = useState(false)
  const [apiResponse, setApiResponse] = useState('');

  const handleClick = async () => {
    console.log("hello?")
    // setClicked(prev => !prev)

    // try {
    //   fetch("api/npm/test"), {
    //     method: "GET",
    //     headers: {
    //       "Content-Type": "application/json"
    //     }
    //   }
    //   console.log("yay");
    // } catch (error) {
    //   console.log(error);
    // }
  }

  return (
    <button className="rounded-full border bg-violet-900 py-6 px-10 text-white text-xl normal-case 
    hover:bg-medium-purple text-center text-sm font-inter flex items-center justify-center"
    onClick={handleClick}>
    {/* <Link href="/api/npm/${appName}"> */}
      Run Npm Command
    {/* </Link> */}
  </button>
  )
}

export default RunChecksButton;
