import { LightningElement,wire,api } from 'lwc';
import methodName from '@salesforce/apex/FirstAura.methodName';

export default class WireDemo extends LightningElement {
    @api name = [];

    @wire(methodName)
    meraMethod({error,data}){
        if(data){
            this.name = data;
        }
        else if(error){
            console.log(error);
        }
    }

    column = [
        {label:'Name',fieldName:'Name'},
        {label:'Id',fieldName:'Id'},        
        {label:'Rating',fieldName:'Rating'},
    ]

}