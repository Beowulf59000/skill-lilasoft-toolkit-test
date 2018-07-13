import {ResponseEnvelope, Response, ui} from 'ask-sdk-model';
import 'mocha';
import * as sinon from "ts-sinon";
import { expect, assert } from 'chai';
import { OutputSpeechHelper } from "../src/index";

describe('OutputSpeechHelper', () => {
    before(() => {
        this.outputSpeechHelper = new OutputSpeechHelper();
    });

    describe('getSsmlTextFromSsmlOutputSpeech', () => {
        it('it should throw TypeError when ssmlOutputSpeech is undefined', () => {
            let ssmlOutputSpeech: ui.SsmlOutputSpeech;
            let fn = () => this.outputSpeechHelper.getSsmlTextFromSsmlOutputSpeech(ssmlOutputSpeech);
            assert.throws(fn, TypeError, "Cannot read property 'ssml' of undefined");      
        });

        it('it should return SSML Text when ssmlOutputSpeech is defined', () => {
            let ssmlOutputSpeech: ui.SsmlOutputSpeech = {
                ssml: '<speak>Texte en SSML</speak>',
                type: undefined
            };
            let ssmlText = this.outputSpeechHelper.getSsmlTextFromSsmlOutputSpeech(ssmlOutputSpeech);
            assert.equal(ssmlText, '<speak>Texte en SSML</speak>');
        });
    });
});