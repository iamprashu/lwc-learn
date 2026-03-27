import { LightningElement, wire, api, track } from 'lwc';
import getContacts from '@salesforce/apex/getContactByData.getContacts';
const contactColumn = [
    { label: 'Last Name', fieldName: 'LastName' },
    { label: 'Email', fieldName: 'Email' }
];

export default class ContactSBasedOnRating extends LightningElement {
    @api recordId;

    @track contacts = [];
    columns = contactColumn;

    @wire(getContacts, { accId: '$recordId' })
    wiredContacts({ data, error }) {
        if (data) {
            this.contacts = data;
        } else if (error) {
            console.log(error);
        }
    }

    get hasContacts() {
        return this.contacts.length > 0;
    }
}