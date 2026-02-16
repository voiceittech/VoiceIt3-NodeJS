let config = require('../utilities/test-config');
let responseCode = require('../utilities/response-code');

const videoVerificationThresholdsTestCases = [
{
  expectedRc: responseCode.FAIL,
  expectedSc: 200,
  contentLanguage: config.CONTENT_LANGUAGE_REAL,
  phrase: config.ENGLISH_PHRASE,
  videoFilePath: config.ARMAAN_FACE_STEPHEN_VOICE,
  expectedMessage:'Failed to verify video for user with userId : usr_([a-z0-9]){32}'
},
{
  expectedRc: responseCode.FAIL,
  expectedSc: 200,
  contentLanguage: config.CONTENT_LANGUAGE_REAL,
  phrase: config.ENGLISH_PHRASE,
  videoFilePath: config.ARMAAN_VOICE_STEPHEN_FACE,
  expectedMessage:'Failed to verify video for user with userId : usr_([a-z0-9]){32}'
}
];

module.exports = videoVerificationThresholdsTestCases;
