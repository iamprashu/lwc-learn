import { LightningElement,wire } from 'lwc';
import getContactMethod from '@salesforce/apex/AuraContacts.getContacts'

const columns = [{label :"Id",fieldName:"Id"},{label:"Last Name",fieldName:"LastName"},{label:"Email",fieldName:"Email"}]
export default class ContactTable extends LightningElement {
    columns = columns;
    connData = [];

    @wire(getContactMethod)
    func({data,error}){
        if(!error){
            this.connData = data;
        }else{
            console.log(error);a
        }
    }
}