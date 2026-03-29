let config = require('../utilities/test-config');
let responseCode = require('../utilities/response-code');

const photoVerificationTestCases = [
{
  expectedRc: responseCode.SUCCESS,
  expectedSc: 200,
  photoFilePath: config.PHOTO_ENROLLMENT_FILE_B_2,
  expectedMessage:'Successfully verified face for user with userId : usr_([a-z0-9]){32}'
},
  expectedSc: 400,
  photoFilePath: config.FALI_PHOTO_FILE_1,
  expectedMessage:'Failed to verify face for user with userId : usr_([a-z0-9]){32}, liveness check failed - possible spoofing attempt'
},
  expectedSc: 400,
  photoFilePath: config.FALI_PHOTO_FILE_2,
  expectedMessage:'Failed to verify face for user with userId : usr_([a-z0-9]){32}, liveness check failed - possible spoofing attempt'
}
];
module.exports = photoVerificationTestCases;
