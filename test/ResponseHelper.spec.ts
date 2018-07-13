import {ResponseEnvelope, Response, ui} from 'ask-sdk-model';
import 'mocha';
import * as sinon from "ts-sinon";
import { expect, assert } from 'chai';
import { ResponseHelper } from '../src/index';

let responseHelper: ResponseHelper;

describe('ResponseHelper', () => {
    before(() => {
        this.responseHelper = new ResponseHelper();
    });

    describe('getSsmlOutputSpeechFromResponse', () => {
        it('it should throw TypeError when response is undefined', () => {
            let response: Response;
            let fn = () => this.responseHelper.getSsmlOutputSpeechFromResponse(response);
            assert.throws(fn, TypeError, "Cannot read property 'outputSpeech' of undefined");      
        });

        it('it should return undefined when response.outputSpeech is undefined', () => {
            let response: Response = {
                outputSpeech: undefined
            };
            let ssmlOutputSpeech = this.responseHelper.getSsmlOutputSpeechFromResponse(response);
            assert.isUndefined(ssmlOutputSpeech);
        });

        it('it should return SsmlOutputSpeech when response.outputSpeech is defined', () => {
            let response: Response = {
                outputSpeech: { type: undefined, text: undefined }
            };
            let ssmlOutputSpeech = this.responseHelper.getSsmlOutputSpeechFromResponse(response);
            assert.isDefined(ssmlOutputSpeech);        
        });
    });

    describe('getSessionStatusFromResponse', () => {
        it('it should throw TypeError when response is undefined', () => {
            let response: Response;
            let fn = () => this.responseHelper.getSessionStatusFromResponse(response);
            assert.throws(fn, TypeError, "Cannot read property 'shouldEndSession' of undefined");      
        });

        it('it should return undefined when response.shouldEndSession is undefined', () => {
            let response: Response = {
                shouldEndSession: undefined
            };
            let shouldEndSession = this.responseHelper.getSessionStatusFromResponse(response);
            assert.isUndefined(shouldEndSession);
        });

        it('it should return value when response.shouldEndSession is defined', () => {
            let response: Response = {
                shouldEndSession: true
            };
            let shouldEndSession = this.responseHelper.getSessionStatusFromResponse(response);
            assert.isTrue(shouldEndSession);        
        });
    });

    describe('getStandardCardFromResponse', () => {
        it('it should throw TypeError when response is undefined', () => {
            let response: Response;
            let fn = () => this.responseHelper.getStandardCardFromResponse(response);
            assert.throws(fn, TypeError, "Cannot read property 'card' of undefined");      
        });

        it('it should throw TypeError when response card is undefined', () => {
            let response: Response = {
                card: undefined
            };
            let fn = () => this.responseHelper.getStandardCardFromResponse(response);
            assert.throws(fn, TypeError, "Cannot read property 'type' of undefined");      
        });

        it('it should return undefined when card type is Simple', () => {
            let response: Response = {
                card: { 
                    type: 'Simple' 
                }
            };
            let card = this.responseHelper.getStandardCardFromResponse(response);
            assert.isUndefined(card);
        });

        it('it should return card when card type is Standard', () => {
            let response: Response = {
                card: { 
                    type: 'Standard',
                    title: 'Title',
                    text: 'Text' 
                }
            };
            let card = this.responseHelper.getStandardCardFromResponse(response);
            assert.isDefined(card);
            assert.equal(card.type, 'Standard');
            assert.equal(card.title, 'Title');
            assert.equal(card.text, 'Text');
        });
    });
});