'use client';

import { useState } from 'react';

const NpmPage = () => {

    const [apiResponse, setApiResponse] = useState('');
    // const handleButtonClick = async () => {
    //     try {
    //       const response = await fetch('/api/npm', { method: 'GET' });
    //       if (response.ok) {
    //         console.log('Function executed successfully');
    //       } else {
    //         console.error('Error executing function');
    //       }
    //     } catch (error) {
    //       console.error('An error occurred:', error);
    //     }
    //   };

    const handleButtonClick = async () => {
        try {
            console.log('button clicked');
          const response = await fetch('app/api/users');
          const data = await response.json();
          setApiResponse(data.message);
        } catch (error) {
          console.error('An error occurred:', error);
        }
      };
    
      return (
        <div>
          <button className='black_btn' onClick={handleButtonClick}>Click me to run function</button>
        </div>
      );
    };
    
    export default NpmPage;



