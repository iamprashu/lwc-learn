

import { LightningElement } from 'lwc';
import getOpportunities from '@salesforce/apex/PubSub.getOpportunities';
import { registerListener, unregisterListener } from 'c/pubsub';

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

export default class SubsOpp extends LightningElement {

    loading = false;
    data;
    columns = COLUMNS;
    error;

    connectedCallback() {
        registerListener('accountSelected', this.handleAccount);
    }

    disconnectedCallback() {
        unregisterListener('accountSelected', this.handleAccount);
    }

    handleAccount = (accountId) => {
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