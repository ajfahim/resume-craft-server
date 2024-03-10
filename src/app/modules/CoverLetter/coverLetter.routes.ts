import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { CoverLetterControllers } from './coverLetter.controller';
import { CoverLetterValidation } from './coverLetter.validation';

const router = express.Router();

router.post(
  '/',
  // auth(USER_ROLE.superAdmin, USER_ROLE.admin),
  validateRequest(CoverLetterValidation.generateCoverLetterValidationSchema),
  CoverLetterControllers.generateCoverLetter,
);

export const CoverLetterRoutes = router;
