'use strict';

import { ResponseEnvelope, Response, ui } from 'ask-sdk-model'
import OutputSpeechHelper from "./OutputSpeechHelper";

export default class ResponseHelper {
    outputSpeechHelper: OutputSpeechHelper;

    constructor() {
        this.outputSpeechHelper = new OutputSpeechHelper();
    }
    
    getSsmlOutputSpeechFromResponse(response: Response): ui.SsmlOutputSpeech {
        return <ui.SsmlOutputSpeech>response.outputSpeech;
    }

    getSsmlTextFromResponse(response: Response): string {
        const ssmlOutputSpeech = this.getSsmlOutputSpeechFromResponse(response);
        return this.outputSpeechHelper.getSsmlTextFromSsmlOutputSpeech(ssmlOutputSpeech);
    }

    getSessionStatusFromResponse(response: Response): boolean {
        return response.shouldEndSession;
    }

    getStandardCardFromResponse(response: Response): ui.StandardCard {
       let card: ui.StandardCard;

       if(response.card.type === 'Standard') {
           card = <ui.StandardCard>response.card;
       }

       return card;
    }
};