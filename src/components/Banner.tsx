import React from 'react';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';

const styles = {
  container: {
    display: "flex",
    alignItems: "flex-end",
    justifyContent: "flex-start",
    minHeight: "35vh",
    minWidth: "90vw",
    flexGrow: 1,
    mt: "10px",
    backgroundImage: 'url("./images/banner.png")',
  },
};

const Banner = (): JSX.Element => {
  return (
    <Box sx={styles.container}>
      <Typography variant= "h2" fontSize= "3.5rem" mb= "2%" ml= "2%">
        Accessibility Tool
      </Typography>
    </Box>
  )
}

export default Banner;