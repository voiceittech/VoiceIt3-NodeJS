let config = require('../utilities/test-config');
let responseCode = require('../utilities/response-code');

const voiceVerifcationByUrlTestCases = [
{
  expectedRc: responseCode.SPEECH_TO_TEXT_FAILED,
  expectedSc: 400,
  contentLanguage: config.CONTENT_LANGUAGE_REAL,
  phrase: config.ENGLISH_PHRASE,
  audioFileURL: config.getURL(config.STTF_FILE),
  expectedMessage:'Failed to verify voice for user with userId : usr_([a-z0-9]){32}, low speech-to-text confidence'
},
{
  expectedRc: responseCode.SOUND_RECORDING_DOES_NOT_MEET_REQUIREMENTS,
  expectedSc: 400,
  contentLanguage: config.CONTENT_LANGUAGE_REAL,
  phrase: config.ENGLISH_PHRASE,
  audioFileURL: config.getURL(config.SRNR_FILE),
  expectedMessage:'Failed to verify voice for user with userId : usr_([a-z0-9]){32}, recording length > 5.0s'
},
{
  expectedRc: responseCode.NOT_ENOUGH_HUMAN_SPEECH_DETECTED,
  expectedSc: 400,
  contentLanguage: config.CONTENT_LANGUAGE_REAL,
  phrase: config.ENGLISH_PHRASE,
  audioFileURL: config.getURL(config.NEHSD_FILE),
  expectedMessage:'Failed to verify voice for user with userId : usr_([a-z0-9]){32}, not enough human speech detected'
},
{
  expectedRc: responseCode.INVALID_PHRASE_PARAMETER,
  expectedSc: 400,
  contentLanguage: config.CONTENT_LANGUAGE_REAL,
  audioFileURL: config.getURL(config.ENROLLMENT_FILE_A_1),
  phrase: config.ENGLISH_PHRASE_FAKE,
  expectedMessage:'invalid phrase parameter'
},
{
  expectedRc: responseCode.SUCCESS,
  expectedSc: 200,
  contentLanguage: config.CONTENT_LANGUAGE_REAL,
  audioFileURL: config.getURL(config.VERIFICATION_FILE_A_2),
  expectedText: config.ENGLISH_PHRASE,
  phrase: config.ENGLISH_PHRASE,
  expectedMessage:'Successfully verified voice for user with userId : usr_([a-z0-9]){32}'
}
];

module.exports = voiceVerifcationByUrlTestCases;
