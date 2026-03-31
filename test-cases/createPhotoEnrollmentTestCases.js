let config = require('../utilities/test-config');
let responseCode = require('../utilities/response-code');

const createPhotoEnrollmentTestCases = [
{
  expectedRc: responseCode.SUCCESS,
  expectedSc: 201,
  photoFilePath: config.PHOTO_ENROLLMENT_FILE_B_1,
  expectedMessage:'Successfully enrolled face for user with userId : usr_([a-z0-9]){32}'
}
];
module.exports = createPhotoEnrollmentTestCases;
