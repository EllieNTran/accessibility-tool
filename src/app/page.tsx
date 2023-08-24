import React from 'react';
import './App.css';
import Banner from '../components/Banner';
import DashButton from '../components/DashButton';
import BeyondButton from '../components/BeyondButton';
import RunChecksButton from '../components/RunChecksButton';
import { Container, Grid } from '@mui/material';

function App() {
  return (
    <Grid
     container
     spacing={0}
     direction="column"
     alignItems="center"
     sx={{ minHeight: "100vh"}}
    >
        <Grid item xs={6}>
          <Banner />
        </Grid>
        {/* <div className="buttons-container">
          <DashButton />
          <BeyondButton />
        </div>
        <div className='run-checks-container'>
          <RunChecksButton />
        </div> */}
    </Grid>
  );
}
 
export default App;