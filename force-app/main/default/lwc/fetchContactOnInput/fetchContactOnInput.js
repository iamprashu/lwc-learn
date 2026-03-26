import { LightningElement,track } from 'lwc';
import getContact from '@salesforce/apex/getContactByData.getContact';

const cols = [
    {label:'Id', fieldName : 'Id'},
    {label:'LastName', fieldName : 'LastName'},
    {label:'Email', fieldName : 'Email'},
]

export default class FetchContactOnInput extends LightningElement {
    cols = cols;
    loading = false;
    @track allCons = []

    getData() {
        this.loading=true;
        const data = this.template.querySelector('.query').value;

        getContact({ s: data })
            .then(result => {
                console.log('Result:', result);  
                this.allCons = result;
                this.loading = false;
                
            })
            .catch(error => {
                console.error(error);
            });
    }
}