'use strict';

import { ResponseEnvelope, Response, ui } from 'ask-sdk-model'
import { expect } from 'chai';

export default class AssertHelper {
    getResponseFromResponseEnvelope(responseEnvelope: ResponseEnvelope): Response {
        return responseEnvelope.response;
    }

    getSsmlOutputSpeechFromResponse(response: Response): ui.SsmlOutputSpeech {
        return <ui.SsmlOutputSpeech>response.outputSpeech;
    }

    getSsmlTextFromSsmlOutputSpeech(ssmlOutputSpeech: ui.SsmlOutputSpeech): string {
        return ssmlOutputSpeech.ssml;
    }

    getSessionStatus(response: Response): boolean {
        return response.shouldEndSession;
    }

    getStandardCard(response: Response): ui.StandardCard {
       let card: ui.StandardCard;

       if(response.card.type === 'Standard') {
           card = <ui.StandardCard>response.card;
       }

       return card;
    }


    // private checkResponseStructureAndGetResponse(responseEnvelope: ResponseEnvelope): Response {
    //     expect(responseEnvelope).to.have.property("version");
    //     expect(responseEnvelope.version).to.be.equal("1.0");
    //     expect(responseEnvelope).to.have.property("response");

    //     return responseEnvelope.response;
    // }

    // private checkOutputSpeechAndGetSsmlOutputSpeech(response: Response): ui.SsmlOutputSpeech {
    //     expect(response).to.have.property("outputSpeech");
    //     expect(response.outputSpeech).to.have.property("type");
    //     expect(response.outputSpeech.type).to.equal('SSML');
    //     expect(response.outputSpeech).to.have.property("ssml");

    //     let ssmlOutputSpeech = <ui.SsmlOutputSpeech>response.outputSpeech;

    //     expect(ssmlOutputSpeech.ssml).to.match(/^<speak>/);
    //     expect(ssmlOutputSpeech.ssml).to.match(/<\/speak>$/);

    //     return <ui.SsmlOutputSpeech>ssmlOutputSpeech;
    // }

    checkOutputSpeechSsmlStructure(response: ResponseEnvelope): void {
        this.checkSsmlOutputSpeech(response);

        let os = <ui.SsmlOutputSpeech>r.outputSpeech;

        expect(os.ssml).to.match(/^<speak>/);
        expect(os.ssml).to.match(/<\/speak>$/);
    }

    checkOutputSpeechContains(response: ResponseEnvelope, text: string): void {

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

    checkOutputSpeechDoesNotContains(response: ResponseEnvelope, text: string): void {

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