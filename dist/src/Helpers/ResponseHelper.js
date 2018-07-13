'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const OutputSpeechHelper_1 = require("./OutputSpeechHelper");
class ResponseHelper {
    constructor() {
        this.outputSpeechHelper = new OutputSpeechHelper_1.default();
    }
    getSsmlOutputSpeechFromResponse(response) {
        return response.outputSpeech;
    }
    getSsmlTextFromResponse(response) {
        const ssmlOutputSpeech = this.getSsmlOutputSpeechFromResponse(response);
        return this.outputSpeechHelper.getSsmlTextFromSsmlOutputSpeech(ssmlOutputSpeech);
    }
    getSessionStatusFromResponse(response) {
        return response.shouldEndSession;
    }
    getStandardCardFromResponse(response) {
        let card;
        if (response.card.type === 'Standard') {
            card = response.card;
        }
        return card;
    }
}
exports.default = ResponseHelper;
;
//# sourceMappingURL=ResponseHelper.js.map