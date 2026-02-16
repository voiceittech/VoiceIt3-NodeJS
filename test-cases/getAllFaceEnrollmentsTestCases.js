let config = require('../utilities/test-config');
let responseCode = require('../utilities/response-code');

const getAllFaceEnrollmentsTestCases = [
{
  expectedRc: responseCode.SUCCESS,
  expectedSc: 200,
  expectedMessage:'Successfully got all face enrollments for user with userId : usr_([a-z0-9]){32}'
},
{
  userId: config.FAKE_USER_ID,
  expectedRc: responseCode.USER_NOT_FOUND,
  expectedSc: 404,
  expectedMessage:'User with userId : ' + config.FAKE_USER_ID + ' not found'
}
];

module.exports = getAllFaceEnrollmentsTestCases;
