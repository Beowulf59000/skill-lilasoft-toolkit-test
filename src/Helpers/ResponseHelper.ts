'use strict';

import { ResponseEnvelope, Response, ui } from 'ask-sdk-model'

export default class ResponseHelper {
    getResponseFromResponseEnvelope(responseEnvelope: ResponseEnvelope): Response {
        return (responseEnvelope.version === "1.0") ?
            responseEnvelope.response
            : undefined;
    }

    getSsmlOutputSpeechFromResponse(response: Response): ui.SsmlOutputSpeech {
        return <ui.SsmlOutputSpeech>response.outputSpeech;
    }

    getSsmlOutputSpeechFromResponseEnvelope(responseEnvelope: ResponseEnvelope): ui.SsmlOutputSpeech {
        const response = this.getResponseFromResponseEnvelope(responseEnvelope);
        return this.getSsmlOutputSpeechFromResponse(response);
    }

    getSsmlTextFromSsmlOutputSpeech(ssmlOutputSpeech: ui.SsmlOutputSpeech): string {
        return ssmlOutputSpeech.ssml;
    }

    getSsmlTextFromResponse(response: Response): string {
        const ssmlOutputSpeech = this.getSsmlOutputSpeechFromResponse(response);
        return this.getSsmlTextFromSsmlOutputSpeech(ssmlOutputSpeech);
    }

    getSsmlTextFromResponseEnvelope(responseEnvelope: ResponseEnvelope): string {
        const ssmlOutputSpeech = this.getSsmlOutputSpeechFromResponseEnvelope(responseEnvelope);
        return this.getSsmlTextFromSsmlOutputSpeech(ssmlOutputSpeech);
    }

    getSessionStatusFromResponse(response: Response): boolean {
        return response.shouldEndSession;
    }

    getSessionStatusFromResponseEnvelope(responseEnvelope: ResponseEnvelope): boolean {
        const response = this.getResponseFromResponseEnvelope(responseEnvelope);
        return this.getSessionStatusFromResponse(response);
    }

    getStandardCardFromResponse(response: Response): ui.StandardCard {
       let card: ui.StandardCard;

       if(response.card.type === 'Standard') {
           card = <ui.StandardCard>response.card;
       }

       return card;
    }

    getStandardCardFromResponseEnvelope(responseEnvelope: ResponseEnvelope): ui.StandardCard {
       const response = this.getResponseFromResponseEnvelope(responseEnvelope);
       return this.getStandardCardFromResponse(response);
    }
};