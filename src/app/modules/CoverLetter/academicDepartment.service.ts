import { TCoverLetterPayload } from './academicDepartment.interface';

const generateCoverLetter = async (payload: TCoverLetterPayload) => {
  console.log('🚀 ~ generateCoverLetter ~ payload:', payload);

  // return result;
};

export const CoverLetterServices = {
  generateCoverLetter,
};
