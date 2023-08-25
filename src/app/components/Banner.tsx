import React from 'react';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';

const Banner = (): JSX.Element => {
  return (
    <Box id="mainBox"
      sx={{width: 1300,height: 240,margin: '5%',}}>
      <Typography id="title" variant="h2" fontWeight="300">
        Accessibility Tool
      </Typography>
    </Box>
  )
}

  export default Banner;