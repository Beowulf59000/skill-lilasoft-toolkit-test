    'use strict';

import { ResponseEnvelope, Response, ui } from 'ask-sdk-model'

export default class OutputSpeechHelper {

    getSsmlTextFromSsmlOutputSpeech(ssmlOutputSpeech: ui.SsmlOutputSpeech): string {
        return ssmlOutputSpeech.ssml;
    }
};