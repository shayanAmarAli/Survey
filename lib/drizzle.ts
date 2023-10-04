import {
    pgTable,
    serial,
    text,
    timestamp,
    uniqueIndex,
    integer,
    PgArray,
    varchar
  } from 'drizzle-orm/pg-core'
  import { InferModel } from 'drizzle-orm'
  import { sql } from '@vercel/postgres'
  import { drizzle } from 'drizzle-orm/vercel-postgres'
export const UsersTable1 = pgTable("male",
    {
      id: serial('id').primaryKey(),
      email: text('email'),
      selectedgender:text ('selectedgender').notNull(),
      age:text ('age').notNull(),
      education:text('education').notNull(),
      employmentstatus:text ('employmentstatus').notNull(),
      phonenumber:varchar('phonenumber', { length: 256 }),
      genderpreference:text('genderpreference').notNull(), //Question no 1
      careerchallanges :text('careerchallanges').notNull(), //Question no 2\
      womenworkplace:text('womenworkplace').notNull(), //Question no 3
      priority:text('priority').notNull(), //Question no 4
      encouragingwomen :text('encouragingwomen').notNull(), //Question no 6
      easiertowork:text('easiertowork').notNull(), //Question no 7
      overtime :text('overtime').notNull(), //Question no 8
      childschoolingpreference:text('childschoolingpreference').notNull(), //Question no 9
      incomecurrency:text('incomecurrency').notNull(), //Question no 10
      income :text('income').notNull(), //Question no 11
      educationimpact:text("educationimpact").notNull(),
      country:text ('country').notNull()

    }
)
export const UsersTable2 = pgTable("female",
    {
      id: serial('id').primaryKey(),
      email: text('email'),
      selectedgender:text ('selectedgender').notNull(),
      country:text ('country').notNull(),
      age:text ('age').notNull(),
      education:text ('education').notNull(),
      employmentstatus:text ('employmentstatus').notNull(),
      phonenumber:varchar('phonenumber', { length: 256 }),
      genderpreference:text('genderpreference').notNull(), //Question no 1
      careerchallanges: text('careerchallanges').notNull(),
      misconceptions:text('misconceptions').notNull(), //Question no 3
      challenges:text('challenges').notNull(), //Question no 4
      collaborativework :text('collaborativework').notNull(), //Question no 5
      priority :text('priority').notNull(), //Question no 6
      genderdynamicsincareersupport:text('genderdynamicsincareersupport').notNull(), //Question no 7
      backgroundsupport :text('backgroundsupport').notNull(), //Question no 8
      childschoolingpreference:text('childschoolingpreference').notNull(), //Question no 9
      incomecurrency:text('incomecurrency').notNull(), //Question no 10
      income :text('income').notNull(), //Question no 11
      educationimpact :text('educationimpact').notNull(), //Question no 12
    }
)
export type USER1 = InferModel<typeof UsersTable1>
export type USER2 = InferModel<typeof UsersTable2 >
export type newUser1 = InferModel<typeof  UsersTable1, "insert" >
export type newUser2 = InferModel<typeof  UsersTable2, "insert" >
export const db = drizzle(sql)