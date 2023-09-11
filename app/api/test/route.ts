import { NextApiRequest, NextApiResponse } from "next";

// export default async function handler(req: NextApiRequest, res: NextApiResponse) {
//   try {
//     const users = [
//       { id: 1, name: "one" },
//       { id: 2, name: "two" },
//       { id: 3, name: "three" },
//     ];

//     res.status(200).json(users);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: "Internal Server Error" });
//   }
// }


export default function handler(req:NextApiRequest, res:NextApiResponse) {
    res.status(200).json({ message: "Hello, World!" });
  }