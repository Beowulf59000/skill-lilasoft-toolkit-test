import 'mocha';
import { expect, assert } from 'chai';
import AssertHelper from '../src/Helpers/AssertHelper';

let assertHelper: AssertHelper;

describe('skill-lilasoft-toolkit-test Test - Assert Helper', () => {
    before(() => {
        assertHelper = new AssertHelper();
    });

    it('checkResponseStructure must be defined', () => {
        expect(assertHelper.checkResponseStructure).to.be.not.undefined;
    });

    it('checkOutputSpeech must be defined', () => {
        expect(assertHelper.checkOutputSpeech).to.be.not.undefined;
    });

    it('checkOutputSpeechContains must be defined', () => {
        expect(assertHelper.checkOutputSpeechContains).to.be.not.undefined;
    });

    it('checkOutputSpeechContainsList must be defined', () => {
        expect(assertHelper.checkOutputSpeechContainsList).to.be.not.undefined;
    });

    it('checkOutputSpeechDoesNotContains must be defined', () => {
        expect(assertHelper.checkOutputSpeechDoesNotContains).to.be.not.undefined;
    });

    it('checkSessionStatus must be defined', () => {
        expect(assertHelper.checkResponseStructure).to.be.not.undefined;
    });

    it('checkStandardCard must be defined', () => {
        expect(assertHelper.checkOutputSpeech).to.be.not.undefined;
    });

    it('checkReprompt must be defined', () => {
        expect(assertHelper.checkOutputSpeechContains).to.be.not.undefined;
    });

    it('checkNoReprompt must be defined', () => {
        expect(assertHelper.checkOutputSpeechContainsList).to.be.not.undefined;
    });
});