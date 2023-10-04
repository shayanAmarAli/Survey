import { pgTable, serial, text, varchar, integer} from 'drizzle-orm/pg-core'
import { InferModel } from 'drizzle-orm'
import { sql } from '@vercel/postgres'
import { drizzle } from 'drizzle-orm/vercel-postgres'

export const Survey_Form = pgTable('survey_form', {
  id: serial('id').primaryKey(),
  country: varchar('country'),
  gender: varchar('gender'),
  age: varchar('age'),
  education: varchar('education', { length: 256 }),
  employment_status: varchar('employment_status'),
  income: integer('income'),
  companies_prefer: varchar('companies_prefer'),
  challenges: text('challenges'),
  misconceptions: text('misconceptions'),
  experience: text('experience'),
  easy_to_work: varchar('easy_to_work'),
  balance: varchar('balance'),
  permission: text('permission'),
  support: text('support'),
  send_school: varchar('send_school'),
  email: text('email'),
  phone: varchar('phone', { length: 20 }),
});

export type User = InferModel<typeof Survey_Form>
export type NewUser = InferModel<typeof Survey_Form, 'insert'>

// Connect to Vercel Postgres
export const db = drizzle(sql)
