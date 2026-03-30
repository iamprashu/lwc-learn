import { LightningElement, wire } from 'lwc';
import getOpportunities from '@salesforce/apex/PubSub.getOpportunities';

import { subscribe, unsubscribe, MessageContext, APPLICATION_SCOPE } from 'lightning/messageService';
import LMS_CHANNEL from '@salesforce/messageChannel/LMS_Pub_Sub_Channel__c';

const COLUMNS = [
    { label: 'Name', fieldName: 'Name', type: 'text' },
    { label: 'Stage', fieldName: 'StageName', type: 'text' },
    {
        label: 'Amount',
        fieldName: 'Amount',
        type: 'currency',
        typeAttributes: {
            currencyCode: 'INR'
        }
    }
];

export default class LMS_PUB_SUB_Opportunity_Subscriber extends LightningElement {

    loading = false;
    data;
    columns = COLUMNS;
    error;
    subscription = null;

    @wire(MessageContext)
    messageContext;

    connectedCallback() {
        this.subscribeToMessageChannel();
    }

    disconnectedCallback() {
        this.unsubscribeFromMessageChannel();
    }

    subscribeToMessageChannel() {
        if (!this.subscription) {
            this.subscription = subscribe(
                this.messageContext,
                LMS_CHANNEL,
                (message) => {
                    if (message.eventName === 'accountSelected') {
                        this.handleAccount(message.payload.accountId);
                    }
                },
                { scope: APPLICATION_SCOPE }
            );
        }
    }

    unsubscribeFromMessageChannel() {
        if (this.subscription) {
            unsubscribe(this.subscription);
            this.subscription = null;
        }
    }

    handleAccount(accountId) {
        this.loading = true;

        getOpportunities({ accountId })
            .then(result => {
                setTimeout(() => {
                    this.data = result;
                    this.error = undefined;
                    this.loading = false;
                }, 5000);
            })
            .catch(error => {
                this.error = error;
                this.data = undefined;
                this.loading = false;
            });
    }

    get hasOpps() {
        return this.data && this.data.length > 0;
    }

    get noOpps() {
        return !this.loading && (!this.data || this.data.length === 0);
    }
}