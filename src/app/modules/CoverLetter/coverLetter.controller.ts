import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { CoverLetterServices } from './academicDepartment.service';

const generateCoverLetter = catchAsync(async (req, res) => {
  const result = await CoverLetterServices.generateCoverLetter(req.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Cover Letter created successfully',
    data: result,
  });
});

export const CoverLetterControllers = {
  generateCoverLetter,
};
