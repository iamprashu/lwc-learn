import { LightningElement } from 'lwc';
import getOpportunities from '@salesforce/apex/PubSub.getOpportunities';
import { registerListener, unregisterListener } from 'c/pubsub';

export default class SubsOpp extends LightningElement {
    loading;

    opportunities;

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
               setTimeout(()=>{
                 this.opportunities = result;
                 this.loading = false;
               },5000)
            }).catch((error)=>{
                this.loading = false;
            });
    }
}