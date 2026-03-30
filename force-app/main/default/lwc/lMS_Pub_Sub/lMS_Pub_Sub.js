import { LightningElement, wire } from 'lwc';
import { publish, subscribe, unsubscribe, MessageContext, APPLICATION_SCOPE } from 'lightning/messageService';
import LMS_CHANNEL from '@salesforce/messageChannel/LMS_Pub_Sub_Channel__c';

export default class LMS_Pub_Sub extends LightningElement {
    @wire(MessageContext)
    messageContext;

    subscription = null;
    receivedMessage = '';

    subscribeToMessageChannel() {
        if (!this.subscription) {
            this.subscription = subscribe(
                this.messageContext,
                LMS_CHANNEL,
                (message) => this.handleMessage(message),
                { scope: APPLICATION_SCOPE }
            );
        }
    }

    publishEvent() {
        publish(this.messageContext, LMS_CHANNEL, {
            eventName: 'testEvent',
            payload: {
                message: 'Hello LMS'
            }
        });
    }

    handleMessage(message) {
        if (message.eventName === 'testEvent') {
            this.receivedMessage = message.payload.message;
            console.log('Received:', this.receivedMessage);
        }
    }

    connectedCallback() {
        this.subscribeToMessageChannel();
    }

    disconnectedCallback() {
        unsubscribe(this.subscription);
        this.subscription = null;
    }
}