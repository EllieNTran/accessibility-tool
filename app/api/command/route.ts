import { NextApiRequest, NextApiResponse } from "next";
import { promisify } from "util";
import { exec } from 'child_process';


const execAsync = promisify(exec);

export default async (req: NextApiRequest, res: NextApiResponse) => {

    try{
        const {stdout, stderr} = await execAsync('echo "Command executed successfully"');

        if (stderr) {
            console.error(stderr);
            return res.status(500).json({ error: 'Command execution failed' })
          }
      
            console.log(stdout);
            return res.status(200).json({ message: 'Command executed successfully' })
        }   
        catch (error) {
          console.error(error);
          return res.status(500).json({ error: 'Server error' })
        }
      };