"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("mocha");
const chai_1 = require("chai");
const ResponseHelper_1 = require("../src/Helpers/ResponseHelper");
let responseHelper;
describe('ResponseHelper', () => {
    before(() => {
        this.responseHelper = new ResponseHelper_1.default();
    });
    describe('getResponseFromResponseEnvelope', () => {
        it('it should return undefined when responseEnvelope does not have property version', () => {
            let responseEnvelope = {
                version: undefined,
                response: undefined
            };
            let response = this.responseHelper.getResponseFromResponseEnvelope(responseEnvelope);
            chai_1.expect(response).to.be.undefined;
        });
        it('it should return undefined when responseEnvelope does have wrong version', () => {
            let responseEnvelope = {
                version: "0.5",
                response: undefined
            };
            let response = this.responseHelper.getResponseFromResponseEnvelope(responseEnvelope);
            chai_1.expect(response).to.be.undefined;
        });
        it('it should return undefined when response is undefined', () => {
            let responseEnvelope = {
                version: "1.0",
                response: undefined
            };
            let response = this.responseHelper.getResponseFromResponseEnvelope(responseEnvelope);
            chai_1.expect(response).to.be.undefined;
        });
        it('it should return response when response is undefined', () => {
            let responseEnvelope = {
                version: "1.0",
                response: {}
            };
            let response = this.responseHelper.getResponseFromResponseEnvelope(responseEnvelope);
            chai_1.expect(response).to.be.not.undefined;
        });
    });
    //     expect(responseEnvelope).to.have.property("version");
    //     expect(responseEnvelope.version).to.be.equal("1.0");
    //     expect(responseEnvelope).to.have.property("response");
    // it('checkResponseStructure must be defined', () => {
    //     expect(assertHelper.checkResponseStructure).to.be.not.undefined;
    // });
    // it('checkOutputSpeech must be defined', () => {
    //     expect(assertHelper.checkOutputSpeech).to.be.not.undefined;
    // });
    // it('checkOutputSpeechContains must be defined', () => {
    //     expect(assertHelper.checkOutputSpeechContains).to.be.not.undefined;
    // });
    // it('checkOutputSpeechContainsList must be defined', () => {
    //     expect(assertHelper.checkOutputSpeechContainsList).to.be.not.undefined;
    // });
    // it('checkOutputSpeechDoesNotContains must be defined', () => {
    //     expect(assertHelper.checkOutputSpeechDoesNotContains).to.be.not.undefined;
    // });
    // it('checkSessionStatus must be defined', () => {
    //     expect(assertHelper.checkResponseStructure).to.be.not.undefined;
    // });
    // it('checkStandardCard must be defined', () => {
    //     expect(assertHelper.checkOutputSpeech).to.be.not.undefined;
    // });
    // it('checkReprompt must be defined', () => {
    //     expect(assertHelper.checkOutputSpeechContains).to.be.not.undefined;
    // });
    // it('checkNoReprompt must be defined', () => {
    //     expect(assertHelper.checkOutputSpeechContainsList).to.be.not.undefined;
    // });
});
//# sourceMappingURL=ResponseHelper.spec.js.map