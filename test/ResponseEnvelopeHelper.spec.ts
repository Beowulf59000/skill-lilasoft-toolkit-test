import {ResponseEnvelope, Response, ui} from 'ask-sdk-model';
import 'mocha';
import * as sinon from "ts-sinon";
import { expect, assert } from 'chai';
import { ResponseEnvelopeHelper } from '../src/index';

describe('ResponseEnvelopeHelper', () => {
    before(() => {
        this.responseEnvelopeHelper = new ResponseEnvelopeHelper();
    });

    describe('getResponseFromResponseEnvelope', () => {
        it('it should throw TypeError when responseEnvelope is undefined', () => {
            let responseEnvelope: ResponseEnvelope;
            let fn = () => this.responseEnvelopeHelper.getResponseFromResponseEnvelope(responseEnvelope);
            assert.throws(fn, TypeError, "Cannot read property 'version' of undefined");      
        });

        it('it should return undefined when responseEnvelope does not have property version', () => {
            let responseEnvelope: ResponseEnvelope = {
                version: undefined,
                response: undefined
            };
            let response = this.responseEnvelopeHelper.getResponseFromResponseEnvelope(responseEnvelope);
            assert.isUndefined(response);
        });

        it('it should return undefined when responseEnvelope does have wrong version', () => {
            let responseEnvelope: ResponseEnvelope = {
                version: "0.5",
                response: undefined
            };
            let response = this.responseEnvelopeHelper.getResponseFromResponseEnvelope(responseEnvelope);
            assert.isUndefined(response);
        });

        it('it should return undefined when response is undefined', () => {
            let responseEnvelope: ResponseEnvelope= {
                version: "1.0",
                response: undefined
            };
            let response = this.responseEnvelopeHelper.getResponseFromResponseEnvelope(responseEnvelope);
            assert.isUndefined(response);
        });

        it('it should return response when response is undefined', () => {
            let responseEnvelope: ResponseEnvelope= {
                version: "1.0",
                response: {}
            };
            let response = this.responseEnvelopeHelper.getResponseFromResponseEnvelope(responseEnvelope);
            assert.isDefined(response);
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