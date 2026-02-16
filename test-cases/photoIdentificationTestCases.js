let config = require('../utilities/test-config');
let responseCode = require('../utilities/response-code');

const photoIdentificationTestCases = [
  {
  expectedRc: responseCode.SUCCESS,
  expectedSc: 200,
  photoFilePath: config.PHOTO_ENROLLMENT_FILE_A_1,
  user: 'A',
  expectedMessage:'Successfully identified face for user with userId : usr_([a-z0-9]){32} in group with groupId : grp_([a-z0-9]){32}'
  }
];

module.exports = photoIdentificationTestCases;
