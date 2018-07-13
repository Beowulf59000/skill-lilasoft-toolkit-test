'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("../index");
const OutputSpeechHelper_1 = require("./OutputSpeechHelper");
class ResponseEnvelopeHelper {
    constructor() {
        this.responseHelper = new index_1.ResponseHelper();
        this.outputSpeechHelper = new OutputSpeechHelper_1.default();
    }
    getResponseFromResponseEnvelope(responseEnvelope) {
        return (responseEnvelope.version === "1.0") ? responseEnvelope.response : undefined;
    }
    getSsmlOutputSpeechFromResponseEnvelope(responseEnvelope) {
        /* istanbul ignore next */ const response = this.getResponseFromResponseEnvelope(responseEnvelope);
        return response.outputSpeech;
    }
    getSsmlTextFromResponseEnvelope(responseEnvelope) {
        /* istanbul ignore next */ const ssmlOutputSpeech = this.getSsmlOutputSpeechFromResponseEnvelope(responseEnvelope);
        return this.outputSpeechHelper.getSsmlTextFromSsmlOutputSpeech(ssmlOutputSpeech);
    }
    getSessionStatusFromResponseEnvelope(responseEnvelope) {
        /* istanbul ignore next */ const response = this.getResponseFromResponseEnvelope(responseEnvelope);
        return this.responseHelper.getSessionStatusFromResponse(response);
    }
    getStandardCardFromResponseEnvelope(responseEnvelope) {
        /* istanbul ignore next */ const response = this.getResponseFromResponseEnvelope(responseEnvelope);
        return this.responseHelper.getStandardCardFromResponse(response);
    }
}
exports.default = ResponseEnvelopeHelper;
;
//# sourceMappingURL=ResponseEnvelopeHelper.js.map