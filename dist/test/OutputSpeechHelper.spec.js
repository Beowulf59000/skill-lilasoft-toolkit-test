"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("mocha");
const chai_1 = require("chai");
const index_1 = require("../src/index");
describe('OutputSpeechHelper', () => {
    before(() => {
        this.outputSpeechHelper = new index_1.OutputSpeechHelper();
    });
    describe('getSsmlTextFromSsmlOutputSpeech', () => {
        it('it should throw TypeError when ssmlOutputSpeech is undefined', () => {
            let ssmlOutputSpeech;
            let fn = () => this.outputSpeechHelper.getSsmlTextFromSsmlOutputSpeech(ssmlOutputSpeech);
            chai_1.assert.throws(fn, TypeError, "Cannot read property 'ssml' of undefined");
        });
        it('it should return SSML Text when ssmlOutputSpeech is defined', () => {
            let ssmlOutputSpeech = {
                ssml: '<speak>Texte en SSML</speak>',
                type: undefined
            };
            let ssmlText = this.outputSpeechHelper.getSsmlTextFromSsmlOutputSpeech(ssmlOutputSpeech);
            chai_1.assert.equal(ssmlText, '<speak>Texte en SSML</speak>');
        });
    });
});
//# sourceMappingURL=OutputSpeechHelper.spec.js.map