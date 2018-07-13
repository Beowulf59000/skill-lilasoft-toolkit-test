'use strict';

import { ResponseEnvelope, Response, ui } from 'ask-sdk-model'
import { ResponseHelper } from "../index";
import OutputSpeechHelper from "./OutputSpeechHelper";

export default class ResponseEnvelopeHelper {
    responseHelper: ResponseHelper;
    outputSpeechHelper: OutputSpeechHelper;
    
    constructor() {
        this.responseHelper = new ResponseHelper();
        this.outputSpeechHelper = new OutputSpeechHelper();
    }
    
    getResponseFromResponseEnvelope(responseEnvelope: ResponseEnvelope): Response {
        return (responseEnvelope.version === "1.0") ? responseEnvelope.response : undefined;
    }

    getSsmlOutputSpeechFromResponseEnvelope (responseEnvelope: ResponseEnvelope): ui.SsmlOutputSpeech {
        /* istanbul ignore next */ const response = this.getResponseFromResponseEnvelope(responseEnvelope);
        return <ui.SsmlOutputSpeech>response.outputSpeech;
    }

    getSsmlTextFromResponseEnvelope (responseEnvelope: ResponseEnvelope): string {
        /* istanbul ignore next */ const ssmlOutputSpeech = this.getSsmlOutputSpeechFromResponseEnvelope(responseEnvelope);
        return this.outputSpeechHelper.getSsmlTextFromSsmlOutputSpeech(ssmlOutputSpeech);
    }

    getSessionStatusFromResponseEnvelope (responseEnvelope: ResponseEnvelope): boolean {
        /* istanbul ignore next */ const response = this.getResponseFromResponseEnvelope(responseEnvelope);
        return this.responseHelper.getSessionStatusFromResponse(response);
    }
   
    getStandardCardFromResponseEnvelope (responseEnvelope: ResponseEnvelope): ui.StandardCard {
       /* istanbul ignore next */ const response = this.getResponseFromResponseEnvelope(responseEnvelope);
       return this.responseHelper.getStandardCardFromResponse(response);
    }
};