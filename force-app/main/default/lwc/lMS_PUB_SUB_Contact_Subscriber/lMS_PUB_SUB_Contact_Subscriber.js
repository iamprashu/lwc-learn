import { LightningElement, wire } from 'lwc';
import getContacts from '@salesforce/apex/PubSub.getContacts';

import { subscribe, unsubscribe, MessageContext, APPLICATION_SCOPE } from 'lightning/messageService';
import LMS_CHANNEL from '@salesforce/messageChannel/LMS_Pub_Sub_Channel__c';

export default class LMS_PUB_SUB_Contact_Subscriber extends LightningElement {

    contacts;
    loading;
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
        getContacts({ accountId })
            .then(result => {
                setTimeout(() => {
                    this.contacts = result;
                    this.loading = false;
                }, 5000);
            })
            .catch(() => {
                this.loading = false;
            });
    }

    get hasContacts() {
        return this.contacts && this.contacts.length > 0;
    }

    get noContacts() {
        return !this.loading && (!this.contacts || this.contacts.length === 0);
    }
}