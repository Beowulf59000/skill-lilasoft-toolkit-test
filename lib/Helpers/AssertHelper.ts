'use strict';

import { ResponseEnvelope, ui } from 'ask-sdk-model'
import { expect } from 'chai';

export class AssertHelper {
    checkResponseStructure(response: ResponseEnvelope): void {
        expect(response).to.have.property("version");
        expect(response.version).to.be.equal("1.0");
        expect(response).to.have.property("response");
    }

    checkOutputSpeech(response: ResponseEnvelope): void {

        expect(response).to.have.property("response");
        let r = response.response;

        expect(r).to.have.property("outputSpeech");
        expect(r.outputSpeech).to.have.property("type");
        expect(r.outputSpeech.type).to.equal('SSML');
        expect(r.outputSpeech).to.have.property("ssml");

        let os = <ui.SsmlOutputSpeech>r.outputSpeech;

        expect(os.ssml).to.match(/^<speak>/);
        expect(os.ssml).to.match(/<\/speak>$/);
    }

    checkOutputSpeachContains(response: ResponseEnvelope, text: string): void {

        expect(response).to.have.property("response");
        let r = response.response;

        expect(r).to.have.property("outputSpeech");
        expect(r.outputSpeech).to.have.property("type");
        expect(r.outputSpeech.type).to.equal('SSML');
        expect(r.outputSpeech).to.have.property("ssml");

        let os = <ui.SsmlOutputSpeech>r.outputSpeech;
        expect(os.ssml).to.contains(text);
        expect(os.ssml).to.match(/^<speak>/);
        expect(os.ssml).to.match(/<\/speak>$/);
    }

    checkOutputSpeechContainsList(response: ResponseEnvelope, texts: string[]) {

        expect(response).to.have.property("response");
        let r = response.response;

        expect(r).to.have.property("outputSpeech");
        expect(r.outputSpeech).to.have.property("type");
        expect(r.outputSpeech.type).to.equal('SSML');
        expect(r.outputSpeech).to.have.property("ssml");

        let os = <ui.SsmlOutputSpeech>r.outputSpeech;
        let regexp = /^<speak>(.+?)<\/speak>$/;
        let speechWithoutSsml = regexp.exec(os.ssml)[1];
        expect(texts).to.contains(speechWithoutSsml);
        expect(os.ssml).to.match(/^<speak>/); 
        expect(os.ssml).to.match(/<\/speak>$/);
    }

    checkOutputSpeachDoesNotContains(response: ResponseEnvelope, text: string): void {

        expect(response).to.have.property("response");
        let r = response.response;

        expect(r).to.have.property("outputSpeech");
        expect(r.outputSpeech).to.have.property("type");
        expect(r.outputSpeech.type).to.equal('SSML');
        expect(r.outputSpeech).to.have.property("ssml");

        let os = <ui.SsmlOutputSpeech>r.outputSpeech;
        expect(os.ssml).to.not.contains(text);
        expect(os.ssml).to.match(/^<speak>/);
        expect(os.ssml).to.match(/<\/speak>$/);
    }

    checkSessionStatus(response: ResponseEnvelope, shouldEndSession: boolean): void {
        let r = response.response;
        expect(r).to.have.property("shouldEndSession");
        if (shouldEndSession) {
            expect(r.shouldEndSession).to.be.true;
        } else {
            expect(r.shouldEndSession).to.be.false;
        }
    }

    checkStandardCard(response: ResponseEnvelope): void {
        let r = response.response;
        expect(r).to.have.property("card");
        expect(r.card.type).to.equal('Standard');
        expect((<ui.StandardCard>r.card).text).to.not.be.equal('');
        expect((<ui.StandardCard>r.card).title).to.not.be.equal('');
    }

    checkReprompt(response: ResponseEnvelope): void {
        expect(response).to.have.property("response");
        let r = response.response;

        expect(r).to.have.property("reprompt");
        expect(r.reprompt).to.have.property("outputSpeech");
        expect(r.reprompt.outputSpeech).to.have.property("type");
        expect(r.reprompt.outputSpeech.type).to.equal('SSML');
        expect(r.reprompt.outputSpeech).to.have.property("ssml");
        let os = <ui.SsmlOutputSpeech>r.reprompt.outputSpeech;
        expect(os.ssml).to.match(/^<speak>/);
        expect(os.ssml).to.match(/<\/speak>$/);

    }

    checkNoReprompt(response: ResponseEnvelope): void {
        expect(response).to.have.property("response");
        let r = response.response;
        expect(r).to.not.have.property("reprompt");
    }
};