import React from 'react';
import Button from '@mui/material/Button';
import Link from 'next/link';

const RunChecksButton = (): JSX.Element => (
  <div>
    <Link href="/NpmPage">
  <Button  className="black_btn" >Run Npm Command</Button>
  </Link>
  </div>
);

export default RunChecksButton;
