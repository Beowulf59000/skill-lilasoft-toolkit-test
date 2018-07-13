"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("mocha");
const chai_1 = require("chai");
const index_1 = require("../src/index");
describe('ResponseEnvelopeHelper', () => {
    before(() => {
        this.responseEnvelopeHelper = new index_1.ResponseEnvelopeHelper();
    });
    describe('getResponseFromResponseEnvelope', () => {
        it('it should throw TypeError when responseEnvelope is undefined', () => {
            let responseEnvelope;
            let fn = () => this.responseEnvelopeHelper.getResponseFromResponseEnvelope(responseEnvelope);
            chai_1.assert.throws(fn, TypeError, "Cannot read property 'version' of undefined");
        });
        it('it should return undefined when responseEnvelope does not have property version', () => {
            let responseEnvelope = {
                version: undefined,
                response: undefined
            };
            let response = this.responseEnvelopeHelper.getResponseFromResponseEnvelope(responseEnvelope);
            chai_1.assert.isUndefined(response);
        });
        it('it should return undefined when responseEnvelope does have wrong version', () => {
            let responseEnvelope = {
                version: "0.5",
                response: undefined
            };
            let response = this.responseEnvelopeHelper.getResponseFromResponseEnvelope(responseEnvelope);
            chai_1.assert.isUndefined(response);
        });
        it('it should return undefined when response is undefined', () => {
            let responseEnvelope = {
                version: "1.0",
                response: undefined
            };
            let response = this.responseEnvelopeHelper.getResponseFromResponseEnvelope(responseEnvelope);
            chai_1.assert.isUndefined(response);
        });
        it('it should return response when response is undefined', () => {
            let responseEnvelope = {
                version: "1.0",
                response: {}
            };
            let response = this.responseEnvelopeHelper.getResponseFromResponseEnvelope(responseEnvelope);
            chai_1.assert.isDefined(response);
        });
    });
    // describe('getSsmlOutputSpeechFromResponseEnvelope', () => {
    //     it('it should call getResponseFromResponseEnvelope', () => {
    //         let responseEnvelope: ResponseEnvelope= {
    //             version: "1.0",
    //             response: {}
    //         };
    //         //let fngetResponseFromResponseEnvelope = sinon.spy(this.responseHelper, '');
    //         let fn = () => this.responseHelper.getSsmlOutputSpeechFromResponse(response);
    //         assert.throws(fn, TypeError, "Cannot read property 'outputSpeech' of undefined");      
    //     });
    // });
});
//# sourceMappingURL=ResponseEnvelopeHelper.spec.js.map