import { z } from 'zod';

const generateCoverLetterValidationSchema = z.object({
  body: z.object({
    jobTitle: z
      .string({
        invalid_type_error: 'Job Title must be string',
        required_error: 'Job Title is required',
      })
      .min(2, { message: 'Job Title is too short.' }),
    companyName: z
      .string({
        invalid_type_error: 'Company Name must be string',
        required_error: 'Company Name is required',
      })
      .min(2, { message: 'Company Name is too short.' }),
    jobDescription: z
      .string({
        invalid_type_error: 'Job Description must be string',
        required_error: 'Job Description is required',
      })
      .min(20, { message: 'Job Description is too short.' }),
  }),
});

export const CoverLetterValidation = {
  generateCoverLetterValidationSchema,
};
