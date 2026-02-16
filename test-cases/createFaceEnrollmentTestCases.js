let config = require('../utilities/test-config');
let responseCode = require('../utilities/response-code');

const createFaceEnrollmentTestCases = [
{
    expectedRc: responseCode.FACE_NOT_FOUND,
    expectedSc: 400,
    videoFilePath: config.FNFD_FILE,
    expectedMessage:'Failed to create face enrollment for user with userId : usr_([a-z0-9]){32}, could not find face in video. Face may be too far from camera'
},
{
    expectedRc: responseCode.FOUND_TOO_MANY_FACES,
    expectedSc: 400,
    videoFilePath: config.FTMF_VIDEO_FILE,
    expectedMessage:'Failed to create face enrollment for user with userId : usr_([a-z0-9]){32}, found too many faces in video'
},
{
    expectedRc: responseCode.SUCCESS,
    expectedSc: 201,
    videoFilePath: config.FACE_ENROLLMENT_FILE_B_1,
    expectedMessage:'Successfully enrolled face for user with userId : usr_([a-z0-9]){32}'
},
{
    expectedRc: responseCode.INCORRECTLY_FORMATTED_VIDEO_DATA,
    expectedSc: 400,
    videoFilePath: config.FAKE_VIDEO_FILE,
    expectedMessage:'Failed to create face enrollment for user with userId : usr_([a-z0-9]){32}, incorrectly formatted video data'
},
{
    expectedRc: responseCode.EMPTY_FILE_PASSED,
    expectedSc: 400,
    videoFilePath: config.EMPTY_FILE,
    expectedMessage:'An empty file cannot be processed by API 2'
},
{
    expectedRc: responseCode.LIVENESS_CHECK_FAILED,
    expectedSc: 400,
    videoFilePath: config.FALI_VIDEO_FILE,
    requireLiveness: true,
    expectedMessage:'Failed to create face enrollment for user with userId : usr_([a-z0-9]){32}, liveness check failed - possible spoofing attempt'
}
];
module.exports = createFaceEnrollmentTestCases;
