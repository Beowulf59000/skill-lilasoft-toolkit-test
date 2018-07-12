"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("mocha");
const chai_1 = require("chai");
const AssertHelper_1 = require("../src/Helpers/AssertHelper");
let assertHelper;
describe('skill-lilasoft-toolkit-test Test - Assert Helper', () => {
    before(() => {
        assertHelper = new AssertHelper_1.default();
    });
    it('checkResponseStructure must be defined', () => {
        chai_1.expect(assertHelper.checkResponseStructure).to.be.not.undefined;
    });
    it('checkOutputSpeech must be defined', () => {
        chai_1.expect(assertHelper.checkOutputSpeech).to.be.not.undefined;
    });
    it('checkOutputSpeechContains must be defined', () => {
        chai_1.expect(assertHelper.checkOutputSpeechContains).to.be.not.undefined;
    });
    it('checkOutputSpeechContainsList must be defined', () => {
        chai_1.expect(assertHelper.checkOutputSpeechContainsList).to.be.not.undefined;
    });
    it('checkOutputSpeechDoesNotContains must be defined', () => {
        chai_1.expect(assertHelper.checkOutputSpeechDoesNotContains).to.be.not.undefined;
    });
    it('checkSessionStatus must be defined', () => {
        chai_1.expect(assertHelper.checkResponseStructure).to.be.not.undefined;
    });
    it('checkStandardCard must be defined', () => {
        chai_1.expect(assertHelper.checkOutputSpeech).to.be.not.undefined;
    });
    it('checkReprompt must be defined', () => {
        chai_1.expect(assertHelper.checkOutputSpeechContains).to.be.not.undefined;
    });
    it('checkNoReprompt must be defined', () => {
        chai_1.expect(assertHelper.checkOutputSpeechContainsList).to.be.not.undefined;
    });
});
//# sourceMappingURL=AssertHelper.spec.js.map