import { z } from "zod"
import { contactFormSchema } from "./Contact.schema"


export type ContactForm = z.infer<typeof contactFormSchema>