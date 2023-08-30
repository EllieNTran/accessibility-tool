import { NextApiRequest } from "next";

export async function GET(request: NextApiRequest) {
    const users = [
        {id: 1, name: "one"},
        {id: 2, name: "two"},
        {id: 3, name: "three"},
    ];

    return new Response(JSON.stringify(users))
}