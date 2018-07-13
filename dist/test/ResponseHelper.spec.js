"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("mocha");
const chai_1 = require("chai");
const index_1 = require("../src/index");
let responseHelper;
describe('ResponseHelper', () => {
    before(() => {
        this.responseHelper = new index_1.ResponseHelper();
    });
    describe('getSsmlOutputSpeechFromResponse', () => {
        it('it should throw TypeError when response is undefined', () => {
            let response;
            let fn = () => this.responseHelper.getSsmlOutputSpeechFromResponse(response);
            chai_1.assert.throws(fn, TypeError, "Cannot read property 'outputSpeech' of undefined");
        });
        it('it should return undefined when response.outputSpeech is undefined', () => {
            let response = {
                outputSpeech: undefined
            };
            let ssmlOutputSpeech = this.responseHelper.getSsmlOutputSpeechFromResponse(response);
            chai_1.assert.isUndefined(ssmlOutputSpeech);
        });
        it('it should return SsmlOutputSpeech when response.outputSpeech is defined', () => {
            let response = {
                outputSpeech: { type: undefined, text: undefined }
            };
            let ssmlOutputSpeech = this.responseHelper.getSsmlOutputSpeechFromResponse(response);
            chai_1.assert.isDefined(ssmlOutputSpeech);
        });
    });
    describe('getSessionStatusFromResponse', () => {
        it('it should throw TypeError when response is undefined', () => {
            let response;
            let fn = () => this.responseHelper.getSessionStatusFromResponse(response);
            chai_1.assert.throws(fn, TypeError, "Cannot read property 'shouldEndSession' of undefined");
        });
        it('it should return undefined when response.shouldEndSession is undefined', () => {
            let response = {
                shouldEndSession: undefined
            };
            let shouldEndSession = this.responseHelper.getSessionStatusFromResponse(response);
            chai_1.assert.isUndefined(shouldEndSession);
        });
        it('it should return value when response.shouldEndSession is defined', () => {
            let response = {
                shouldEndSession: true
            };
            let shouldEndSession = this.responseHelper.getSessionStatusFromResponse(response);
            chai_1.assert.isTrue(shouldEndSession);
        });
    });
    describe('getStandardCardFromResponse', () => {
        it('it should throw TypeError when response is undefined', () => {
            let response;
            let fn = () => this.responseHelper.getStandardCardFromResponse(response);
            chai_1.assert.throws(fn, TypeError, "Cannot read property 'card' of undefined");
        });
        it('it should throw TypeError when response card is undefined', () => {
            let response = {
                card: undefined
            };
            let fn = () => this.responseHelper.getStandardCardFromResponse(response);
            chai_1.assert.throws(fn, TypeError, "Cannot read property 'type' of undefined");
        });
        it('it should return undefined when card type is Simple', () => {
            let response = {
                card: {
                    type: 'Simple'
                }
            };
            let card = this.responseHelper.getStandardCardFromResponse(response);
            chai_1.assert.isUndefined(card);
        });
        it('it should return card when card type is Standard', () => {
            let response = {
                card: {
                    type: 'Standard',
                    title: 'Title',
                    text: 'Text'
                }
            };
            let card = this.responseHelper.getStandardCardFromResponse(response);
            chai_1.assert.isDefined(card);
            chai_1.assert.equal(card.type, 'Standard');
            chai_1.assert.equal(card.title, 'Title');
            chai_1.assert.equal(card.text, 'Text');
        });
    });
});
//# sourceMappingURL=ResponseHelper.spec.js.map