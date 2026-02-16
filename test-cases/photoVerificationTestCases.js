let config = require('../utilities/test-config');
let responseCode = require('../utilities/response-code');

const photoVerificationTestCases = [
{
  expectedRc: responseCode.SUCCESS,
  expectedSc: 200,
  photoFilePath: config.PHOTO_ENROLLMENT_FILE_B_2,
  expectedMessage:'Successfully verified face for user with userId : usr_([a-z0-9]){32}'
},
{ // FALI: Liveness check failed (print attack 1)
  expectedRc: responseCode.LIVENESS_CHECK_FAILED,
  expectedSc: 400,
  photoFilePath: config.FALI_PHOTO_FILE_1,
  requireLiveness: true,
  expectedMessage:'Failed to verify face for user with userId : usr_([a-z0-9]){32}, liveness check failed - possible spoofing attempt'
},
{ // FALI: Liveness check failed (print attack 2)
  expectedRc: responseCode.LIVENESS_CHECK_FAILED,
  expectedSc: 400,
  photoFilePath: config.FALI_PHOTO_FILE_2,
  requireLiveness: true,
  expectedMessage:'Failed to verify face for user with userId : usr_([a-z0-9]){32}, liveness check failed - possible spoofing attempt'
}
];
module.exports = photoVerificationTestCases;
