import { Router } from 'express';

import { CoverLetterRoutes } from '../modules/CoverLetter/coverLetter.routes';

const router = Router();

const moduleRoutes = [
  {
    path: '/generate-cover-letter',
    route: CoverLetterRoutes,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
