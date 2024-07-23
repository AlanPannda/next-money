import * as z from 'zod'

export const searchParamsSchema = z.object({
  page: z.coerce.number().default(1),
  pageSize: z.coerce.number().default(10),
  sort: z.string().optional(),
  from: z.string().optional(),
  state: z.enum(["enable", "disable"]).optional(),
  to: z.string().optional(),
  operator: z.enum(['and', 'or']).optional(),
})
export const getSchema = searchParamsSchema

export type GetSchema = z.infer<typeof getSchema>

export const createSchema = z.object({
  amount: z.number().min(100),
  reward: z.number().min(0),
  originalAmount: z.number(),
  currency: z.enum(["CNY", "USD"]),
  message: z.string().optional(),
  state: z.enum(["enable", "disabled"]),
  tag: z.array(z.string()).optional(),
})

export type CreateSchema = z.infer<typeof createSchema>

export const updateSchema = z.object({
  amount: z.number().optional(),
  reward: z.number().optional(),
  originalAmount: z.number(),
  currency: z.enum(["CNY", "USD"]).optional(),
  message: z.string().optional(),
  state:  z.enum(["enable", "disabled"]).optional(),
  tag: z.array(z.string()).optional(),
})

export type UpdateSchema = z.infer<typeof updateSchema>