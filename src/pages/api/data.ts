// // Next.js API route support: https://nextjs.org/docs/api-routes/introduction
// import type { NextApiRequest, NextApiResponse } from 'next'



// import { db, newUser1, newUser2, UsersTable1, UsersTable2 } from '../../../lib/drizzle'; // Update the path
// export default async function handler(req: NextApiRequest, res: NextApiResponse) {
//   if (req.method === 'POST') {
//     const userType = req.body;
//     console.log(userType)
//     let array = userType.careerchallanges
//     console.log(Object.values(array))
//     try {
//       if (userType.selectedgender === 'male') {
//         await db.insert(UsersTable1).values(userType);
//       } else if (userType.selectedgender === 'female') {
//         await db.insert(UsersTable2).values(userType);
//       }
//       res.status(201).json({ message: "form submitted" });
//     } catch (error) {
//       console.error('Error creating user:', error);
//       res.status(500).json({ error: 'Internal server error' });
//     }


//   } else {
//     res.status(405).json({ error: 'Method not allowed' });
//   }
// }

import { NextApiRequest, NextApiResponse } from "next";
import { sql } from "@vercel/postgres";
import { NewUser, Survey_Form, User, db } from "../../db/form-schema";

const newUsers: NewUser[] = [
  {
    country: "PAKISTAN",
    gender: "MALE",
    age: "40",
    education: "matric",
    employment_status: "both",
    income: 150000,
    companies_prefer: "woman",
    challenges: "both",
    misconceptions: "both",
    experience: "both",
    easy_to_work: "both",
    balance: "both",
    permission: "sdf",
    support: "",
    send_school: "",
    email: "shayan@gmail",
    phone: "03468742593",
  },
  {
    country: "india",
    gender: "femle",
    age: "20",
    education: "intermediate",
    employment_status: "both",
    income: 150000,
    companies_prefer: "woman",
    challenges: "both",
    misconceptions: "both",
    experience: "both",
    easy_to_work: "both",
    balance: "both",
    permission: "sdf",
    support: "",
    send_school: "",
    email: "irtaza@gmail",
    phone: "03468742593",
  },
];

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method == "POST") {
    const postedData = await req.body;
    const createTable = await sql.query(`
      CREATE TABLE IF NOT EXISTS survey_form (
        id SERIAL PRIMARY KEY,
  country VARCHAR(256),
  gender VARCHAR(256),
  age VARCHAR(256),
  education VARCHAR(256),
  employment_status VARCHAR(256),
  income INTEGER,
  companies_prefer VARCHAR(256),
  challenges TEXT,
  misconceptions TEXT,
  experience TEXT,
  easy_to_work VARCHAR(256),
  balance VARCHAR(256),
  permission TEXT,
  support TEXT,
  send_school VARCHAR(256),
  email TEXT,
  phone VARCHAR(20) )`);
    const insertedUsers = await db.insert(Survey_Form).values(postedData).returning();
    console.log(`Seeded ${insertedUsers.length} users`);
    res.json({ table: createTable, newData: insertedUsers });
  }
}
