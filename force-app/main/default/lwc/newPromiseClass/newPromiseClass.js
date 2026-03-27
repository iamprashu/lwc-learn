import { LightningElement, track } from 'lwc';
import getContact from '@salesforce/apex/getContactByData.getContact';

const tcolumns = [
    {label:"Id",fieldName : Id},
    {label:"Name",fieldName : Name},
]

export default class NewPromiseClass extends LightningElement {
    columns = tcolumns
        @track allData = []

    handleClick(){
        getContact().then((data)=>{
            this.allData = data;
        }).catch((error)=>{
            console.log(error);
        })
    }
}