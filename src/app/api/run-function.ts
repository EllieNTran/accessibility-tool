import { NextApiRequest, NextApiResponse } from 'next';

const runFunction = () => {
  // This is the function you want to run on the backend.
  console.log('Backend function executed');
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    return res.status(405).end();
  }

  try {
    runFunction();
    return res.status(200).end();
  } catch (error) {
    console.error('An error occurred:', error);
    return res.status(500).end();
  }
}
