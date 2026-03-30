import { LightningElement, wire } from 'lwc';
import getAccounts from '@salesforce/apex/PubSub.getAccounts';

import { publish, MessageContext } from 'lightning/messageService';
import LMS_CHANNEL from '@salesforce/messageChannel/LMS_Pub_Sub_Channel__c';

export default class LMS_PUB_SUB_Publisher extends LightningElement {

    @wire(MessageContext)
    messageContext;

    @wire(getAccounts)
    accounts;

    handleClick(event) {
        const accountId = event.target.dataset.id;

        publish(this.messageContext, LMS_CHANNEL, {
            eventName: 'accountSelected',
            payload: {
                accountId: accountId
            }
        });
    }
}