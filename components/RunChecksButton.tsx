import React from 'react';
import Button from '@mui/material/Button';
import Link from 'next/link';

const onClick  = (appName : string) => (
  <>
  </>
);

const RunChecksButton = (appName : string): JSX.Element => (
  <Button className="rounded-full border bg-violet-900 py-6 px-10 text-white text-xl normal-case 
    hover:bg-violet-500 hover:text-black text-center text-sm font-inter flex items-center justify-center">
    <Link href="/api/npm/${appName}">
      Run Npm Command
    </Link>
  </Button>
);

export default RunChecksButton;
