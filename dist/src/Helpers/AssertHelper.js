'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
class AssertHelper {
    checkResponseStructure(response) {
        chai_1.expect(response).to.have.property("version");
        chai_1.expect(response.version).to.be.equal("1.0");
        chai_1.expect(response).to.have.property("response");
    }
    checkOutputSpeech(response) {
        chai_1.expect(response).to.have.property("response");
        let r = response.response;
        chai_1.expect(r).to.have.property("outputSpeech");
        chai_1.expect(r.outputSpeech).to.have.property("type");
        chai_1.expect(r.outputSpeech.type).to.equal('SSML');
        chai_1.expect(r.outputSpeech).to.have.property("ssml");
        let os = r.outputSpeech;
        chai_1.expect(os.ssml).to.match(/^<speak>/);
        chai_1.expect(os.ssml).to.match(/<\/speak>$/);
    }
    checkOutputSpeechContains(response, text) {
        chai_1.expect(response).to.have.property("response");
        let r = response.response;
        chai_1.expect(r).to.have.property("outputSpeech");
        chai_1.expect(r.outputSpeech).to.have.property("type");
        chai_1.expect(r.outputSpeech.type).to.equal('SSML');
        chai_1.expect(r.outputSpeech).to.have.property("ssml");
        let os = r.outputSpeech;
        chai_1.expect(os.ssml).to.contains(text);
        chai_1.expect(os.ssml).to.match(/^<speak>/);
        chai_1.expect(os.ssml).to.match(/<\/speak>$/);
    }
    checkOutputSpeechContainsList(response, texts) {
        chai_1.expect(response).to.have.property("response");
        let r = response.response;
        chai_1.expect(r).to.have.property("outputSpeech");
        chai_1.expect(r.outputSpeech).to.have.property("type");
        chai_1.expect(r.outputSpeech.type).to.equal('SSML');
        chai_1.expect(r.outputSpeech).to.have.property("ssml");
        let os = r.outputSpeech;
        let regexp = /^<speak>(.+?)<\/speak>$/;
        let speechWithoutSsml = regexp.exec(os.ssml)[1];
        chai_1.expect(texts).to.contains(speechWithoutSsml);
        chai_1.expect(os.ssml).to.match(/^<speak>/);
        chai_1.expect(os.ssml).to.match(/<\/speak>$/);
    }
    checkOutputSpeechDoesNotContains(response, text) {
        chai_1.expect(response).to.have.property("response");
        let r = response.response;
        chai_1.expect(r).to.have.property("outputSpeech");
        chai_1.expect(r.outputSpeech).to.have.property("type");
        chai_1.expect(r.outputSpeech.type).to.equal('SSML');
        chai_1.expect(r.outputSpeech).to.have.property("ssml");
        let os = r.outputSpeech;
        chai_1.expect(os.ssml).to.not.contains(text);
        chai_1.expect(os.ssml).to.match(/^<speak>/);
        chai_1.expect(os.ssml).to.match(/<\/speak>$/);
    }
    checkSessionStatus(response, shouldEndSession) {
        let r = response.response;
        chai_1.expect(r).to.have.property("shouldEndSession");
        if (shouldEndSession) {
            chai_1.expect(r.shouldEndSession).to.be.true;
        }
        else {
            chai_1.expect(r.shouldEndSession).to.be.false;
        }
    }
    checkStandardCard(response) {
        let r = response.response;
        chai_1.expect(r).to.have.property("card");
        chai_1.expect(r.card.type).to.equal('Standard');
        chai_1.expect(r.card.text).to.not.be.equal('');
        chai_1.expect(r.card.title).to.not.be.equal('');
    }
    checkReprompt(response) {
        chai_1.expect(response).to.have.property("response");
        let r = response.response;
        chai_1.expect(r).to.have.property("reprompt");
        chai_1.expect(r.reprompt).to.have.property("outputSpeech");
        chai_1.expect(r.reprompt.outputSpeech).to.have.property("type");
        chai_1.expect(r.reprompt.outputSpeech.type).to.equal('SSML');
        chai_1.expect(r.reprompt.outputSpeech).to.have.property("ssml");
        let os = r.reprompt.outputSpeech;
        chai_1.expect(os.ssml).to.match(/^<speak>/);
        chai_1.expect(os.ssml).to.match(/<\/speak>$/);
    }
    checkNoReprompt(response) {
        chai_1.expect(response).to.have.property("response");
        let r = response.response;
        chai_1.expect(r).to.not.have.property("reprompt");
    }
}
exports.default = AssertHelper;
;
//# sourceMappingURL=AssertHelper.js.map