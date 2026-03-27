import { LightningElement, wire } from 'lwc';
import getAccounts from '@salesforce/apex/PubSub.getAccounts';
import { fireEvent } from 'c/pubsub';

export default class PublisherComponent extends LightningElement {

    @wire(getAccounts)
    accounts;

    handleClick(event) {
        const accountId = event.target.dataset.id;
        fireEvent('accountSelected', accountId);
    }
}