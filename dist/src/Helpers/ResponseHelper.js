'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
class ResponseHelper {
    getResponseFromResponseEnvelope(responseEnvelope) {
        return (responseEnvelope.version === "1.0") ?
            responseEnvelope.response
            : undefined;
    }
    getSsmlOutputSpeechFromResponse(response) {
        return response.outputSpeech;
    }
    getSsmlOutputSpeechFromResponseEnvelope(responseEnvelope) {
        const response = this.getResponseFromResponseEnvelope(responseEnvelope);
        return this.getSsmlOutputSpeechFromResponse(response);
    }
    getSsmlTextFromSsmlOutputSpeech(ssmlOutputSpeech) {
        return ssmlOutputSpeech.ssml;
    }
    getSsmlTextFromResponse(response) {
        const ssmlOutputSpeech = this.getSsmlOutputSpeechFromResponse(response);
        return this.getSsmlTextFromSsmlOutputSpeech(ssmlOutputSpeech);
    }
    getSsmlTextFromResponseEnvelope(responseEnvelope) {
        const ssmlOutputSpeech = this.getSsmlOutputSpeechFromResponseEnvelope(responseEnvelope);
        return this.getSsmlTextFromSsmlOutputSpeech(ssmlOutputSpeech);
    }
    getSessionStatusFromResponse(response) {
        return response.shouldEndSession;
    }
    getSessionStatusFromResponseEnvelope(responseEnvelope) {
        const response = this.getResponseFromResponseEnvelope(responseEnvelope);
        return this.getSessionStatusFromResponse(response);
    }
    getStandardCardFromResponse(response) {
        let card;
        if (response.card.type === 'Standard') {
            card = response.card;
        }
        return card;
    }
    getStandardCardFromResponseEnvelope(responseEnvelope) {
        const response = this.getResponseFromResponseEnvelope(responseEnvelope);
        return this.getStandardCardFromResponse(response);
    }
}
exports.default = ResponseHelper;
;
//# sourceMappingURL=ResponseHelper.js.map