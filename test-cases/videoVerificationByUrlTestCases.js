let config = require('../utilities/test-config');
let responseCode = require('../utilities/response-code');

const videoVerifcationByUrlTestCases = [
  {
    expectedRc: responseCode.SUCCESS,
    expectedSc: 200,
    contentLanguage: config.CONTENT_LANGUAGE_REAL,
    videoFileURL: config.getURL(config.VIDEO_VERIFICATION_FILE_B_2),
    expectedText: config.ENGLISH_PHRASE,
    phrase: config.ENGLISH_PHRASE,
    expectedMessage:'Successfully verified video for user with userId : usr_([a-z0-9]){32}'
  },
  {
    expectedRc: responseCode.SPEECH_TO_TEXT_FAILED,
    expectedSc: 400,
    contentLanguage: config.CONTENT_LANGUAGE_REAL,
    phrase: config.ENGLISH_PHRASE,
    videoFileURL: config.getURL(config.STTF_VIDEO_FILE),
    expectedMessage:'Failed to verify video for user with userId : usr_([a-z0-9]){32}, low speech-to-text confidence'
  }
  ];

module.exports = videoVerifcationByUrlTestCases;
