let config = require('../utilities/test-config');
let responseCode = require('../utilities/response-code');

const createVoiceEnrollmentTestCases = [
{
  expectedRc: responseCode.SPEECH_TO_TEXT_FAILED,
  expectedSc: 400,
  contentLanguage: config.CONTENT_LANGUAGE_REAL,
  phrase: config.ENGLISH_PHRASE,
  audioFilePath: config.STTF_FILE,
  expectedMessage:'Failed to create voice enrollment for user with userId : usr_([a-z0-9]){32}, low speech-to-text confidence'
},
{
  expectedRc: responseCode.SOUND_RECORDING_DOES_NOT_MEET_REQUIREMENTS,
  expectedSc: 400,
  contentLanguage: config.CONTENT_LANGUAGE_REAL,
  phrase: config.ENGLISH_PHRASE,
  audioFilePath: config.SRNR_FILE,
  expectedMessage:'Failed to create voice enrollment for user with userId : usr_([a-z0-9]){32}, recording length > 5.0s'
},
{
  expectedRc: responseCode.SPEAKER_SPEAKING_TOO_QUIET,
  expectedSc: 400,
  contentLanguage: config.CONTENT_LANGUAGE_REAL,
  phrase: config.ENGLISH_PHRASE,
  audioFilePath: config.SSTQ_FILE,
  expectedMessage:'Failed to create voice enrollment for user with userId : usr_([a-z0-9]){32}, speaker speaking too quiet'
},
{
  expectedRc: responseCode.SPEAKER_SPEAKING_TOO_LOUD,
  expectedSc: 400,
  contentLanguage: config.CONTENT_LANGUAGE_REAL,
  phrase: config.ENGLISH_PHRASE,
  audioFilePath: config.SSTL_FILE,
  expectedMessage:'Failed to create voice enrollment for user with userId : usr_([a-z0-9]){32}, speaker speaking too loud'
},
{
  expectedRc: responseCode.NOT_ENOUGH_HUMAN_SPEECH_DETECTED,
  expectedSc: 400,
  contentLanguage: config.CONTENT_LANGUAGE_REAL,
  phrase: config.ENGLISH_PHRASE,
  audioFilePath: config.NEHSD_FILE,
  expectedMessage:'Failed to create voice enrollment for user with userId : usr_([a-z0-9]){32}, not enough human speech detected'
},
{
  expectedRc: responseCode.INVALID_PHRASE_PARAMETER,
  expectedSc: 400,
  contentLanguage: config.CONTENT_LANGUAGE_REAL,
  audioFilePath: config.ENROLLMENT_FILE_A_1,
  phrase: config.ENGLISH_PHRASE_FAKE,
  expectedMessage:'invalid phrase parameter'
},
{
  expectedRc: responseCode.INCORRECTLY_FORMATTED_AUDIO_DATA,
  expectedSc: 400,
  contentLanguage: config.CONTENT_LANGUAGE_REAL,
  phrase: config.ENGLISH_PHRASE,
  audioFilePath: config.FAKE_FILE,
  expectedMessage:'Failed to create voice enrollment for user with userId : usr_([a-z0-9]){32}, incorrectly formatted audio data'
},
{
  expectedRc: responseCode.EMPTY_FILE_PASSED,
  expectedSc: 400,
  contentLanguage: config.CONTENT_LANGUAGE_REAL,
  phrase: config.ENGLISH_PHRASE,
  audioFilePath: config.EMPTY_FILE,
  expectedMessage:'An empty file cannot be processed by API 2'
},
{
  expectedRc: responseCode.SUCCESS,
  expectedSc: 201,
  contentLanguage: config.CONTENT_LANGUAGE_REAL,
  audioFilePath: config.ENROLLMENT_FILE_A_1,
  expectedText: config.ENGLISH_PHRASE,
  phrase: config.ENGLISH_PHRASE,
  expectedMessage:'Successfully enrolled voice for user with userId : usr_([a-z0-9]){32}'
}
];
module.exports = createVoiceEnrollmentTestCases;
