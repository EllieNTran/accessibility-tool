import { NextApiRequest, NextApiResponse } from "next";
import { exec } from 'child_process';
import { stderr, stdout } from "process";
import error from "next/error";

export async function GET(req: NextApiRequest) {
    try {
      const command = "npm i"
    
      exec(command, (stdout, stderr) => {
        if (error) {
          console.error("Error executing command {stderr}");
          return new Response("Command execution failed"), {status: 500};
        }
        console.log("Command output {stdout}")
        return new Response("Command executely successfully"), {status: 200};
      });
    } catch (error) {
      console.error(`Error processing request: ${error}`);
      return new Response("Internal server error"), {status: 500};
    }
  //   const users = [
  //     {id: 1, name: "one"},
  //     {id: 2, name: "two"},
  //     {id: 3, name: "three"},
  // ];

  // return new Response(JSON.stringify(users))
};