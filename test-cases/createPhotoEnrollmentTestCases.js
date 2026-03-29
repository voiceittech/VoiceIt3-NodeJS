let config = require('../utilities/test-config');
let responseCode = require('../utilities/response-code');

const createPhotoEnrollmentTestCases = [
{
  expectedRc: responseCode.SUCCESS,
  expectedSc: 201,
  photoFilePath: config.PHOTO_ENROLLMENT_FILE_B_1,
  expectedMessage:'Successfully enrolled face for user with userId : usr_([a-z0-9]){32}'
},
  expectedSc: 400,
  photoFilePath: config.FALI_PHOTO_FILE_1,
  expectedMessage:'Failed to create face enrollment for user with userId : usr_([a-z0-9]){32}, liveness check failed - possible spoofing attempt'
},
  expectedSc: 400,
  photoFilePath: config.FALI_PHOTO_FILE_2,
  expectedMessage:'Failed to create face enrollment for user with userId : usr_([a-z0-9]){32}, liveness check failed - possible spoofing attempt'
}
];
module.exports = createPhotoEnrollmentTestCases;
