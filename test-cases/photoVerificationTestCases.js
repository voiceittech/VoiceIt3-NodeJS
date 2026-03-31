let config = require('../utilities/test-config');
let responseCode = require('../utilities/response-code');

const photoVerificationTestCases = [
{
  expectedRc: responseCode.SUCCESS,
  expectedSc: 200,
  photoFilePath: config.PHOTO_ENROLLMENT_FILE_B_2,
  expectedMessage:'Successfully verified face for user with userId : usr_([a-z0-9]){32}'
}
];
module.exports = photoVerificationTestCases;
