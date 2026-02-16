let config = require('../utilities/test-config');
let responseCode = require('../utilities/response-code');

const videoVerificationTestCases = [
{
  expectedRc: responseCode.SPEECH_TO_TEXT_FAILED,
  expectedSc: 400,
  contentLanguage: config.CONTENT_LANGUAGE_REAL,
  phrase: config.ENGLISH_PHRASE,
  videoFilePath: config.STTF_VIDEO_FILE,
  expectedMessage:'Failed to verify video for user with userId : usr_([a-z0-9]){32}, low speech-to-text confidence'
},
{
  expectedRc: responseCode.FOUND_TOO_MANY_FACES,
  expectedSc: 400,
  contentLanguage: config.CONTENT_LANGUAGE_REAL,
  phrase: config.ENGLISH_PHRASE,
  videoFilePath: config.FTMF_VIDEO_FILE,
  expectedMessage:'Failed to verify video for user with userId : usr_([a-z0-9]){32}, found too many faces in video'
},
{
  expectedRc: responseCode.FACE_NOT_FOUND,
  expectedSc: 400,
  contentLanguage: config.CONTENT_LANGUAGE_REAL,
  phrase: config.ENGLISH_PHRASE,
  videoFilePath: config.FNFD_FILE,
  expectedMessage:'Failed to verify video for user with userId : usr_([a-z0-9]){32}, could not find face in video. Face may be too far from camera'
},
{
  expectedRc: responseCode.SUCCESS,
  expectedSc: 200,
  contentLanguage: config.CONTENT_LANGUAGE_REAL,
  videoFilePath: config.VIDEO_VERIFICATION_FILE_B_1,
  expectedText: config.ENGLISH_PHRASE,
  phrase: config.ENGLISH_PHRASE,
  expectedMessage:'Successfully verified video for user with userId : usr_([a-z0-9]){32}'
},
{
  userId: 'secondUserId',
  expectedRc: responseCode.THREE_VIDEO_ENROLLMENTS_REQUIRED,
  expectedSc: 400,
  contentLanguage: config.CONTENT_LANGUAGE_REAL,
  phrase: config.ENGLISH_PHRASE,
  videoFilePath: config.VIDEO_VERIFICATION_FILE_B_1,
  expectedMessage:'Failed to verify video for user with userId : usr_([a-z0-9]){32}, need a minimum of \\(3\\) enrollments'
},
{
  expectedRc: responseCode.INCORRECTLY_FORMATTED_VIDEO_DATA,
  expectedSc: 400,
  contentLanguage: config.CONTENT_LANGUAGE_REAL,
  phrase: config.ENGLISH_PHRASE,
  videoFilePath: config.FAKE_FILE,
  expectedMessage:'Failed to verify video for user with userId : usr_([a-z0-9]){32}, incorrectly formatted video data'
},
{
  expectedRc: responseCode.EMPTY_FILE_PASSED,
  expectedSc: 400,
  contentLanguage: config.CONTENT_LANGUAGE_REAL,
  phrase: config.ENGLISH_PHRASE,
  videoFilePath: config.EMPTY_FILE,
  expectedMessage:'An empty file cannot be processed by API 2'
},
{
  expectedRc: responseCode.LIVENESS_CHECK_FAILED,
  expectedSc: 400,
  contentLanguage: config.CONTENT_LANGUAGE_REAL,
  phrase: config.ENGLISH_PHRASE,
  videoFilePath: config.FALI_VIDEO_FILE,
  requireLiveness: true,
  expectedMessage:'Failed to verify video for user with userId : usr_([a-z0-9]){32}, liveness check failed - possible spoofing attempt'
}
];

module.exports = videoVerificationTestCases;
