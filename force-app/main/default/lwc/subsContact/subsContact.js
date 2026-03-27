import { LightningElement } from 'lwc';
import getContacts from '@salesforce/apex/PubSub.getContacts';
import { registerListener, unregisterListener } from 'c/pubsub';

export default class SubsContact extends LightningElement {

    contacts;
    loading;

    connectedCallback() {
        registerListener('accountSelected', this.handleAccount);
    }

    disconnectedCallback() {
        unregisterListener('accountSelected', this.handleAccount);
    }

    handleAccount = (accountId) => {
        this.loading = true;
        getContacts({ accountId })
            .then(result => {
                setTimeout(()=>{
                    this.contacts = result;
                    this.loading = false;
                },5000)
            }).catch(()=>{
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