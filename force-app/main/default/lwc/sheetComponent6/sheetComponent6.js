import { LightningElement,wire,track } from 'lwc';
import getAllAccount from '@salesforce/apex/Lwc6Helper.getAllAccount';
import getContactsByAccountId from '@salesforce/apex/Lwc6Helper.getContactsByAccountId';
const tcols = [
    {label : 'Id',fieldName :'Id'},
    {label: 'LastName',fieldName:'LastName'}
];

export default class SheetComponent6 extends LightningElement {
        cols = tcols;
        data = [];
        @track allAccounts = [];
        gotError = null;
        @track allContacts= [];
        conError = false;
        accountsError = false;
        loading = false;

        connectedCallback(){
            getAllAccount().then((data)=>{
                this.allAccounts = data;
            }).catch((err)=>{
                this.gotError = err;
                console.log(err);
            })
        }

        get accountOptions() {
            return this.allAccounts.map(acc => {
                return {
                    label: acc.Name,
                    value: acc.Id
                };
            });
        }

        accountSelected(event){
            const acId = event.detail.value;
            console.log(acId);
            this.loading = true;
            getContactsByAccountId({ AccountId: acId }).then((data)=>{
               setTimeout(() => {
                console.log(data);
                this.allContacts = data;
                this.loading =false;
               }, 5000);
            }).catch((err)=>{
                this.gotError = err;
            })
        }

        get contactError(){
            return this.conError = this.allContacts.length >= 1 && !this.gotError;
        }

        get accountError(){
            return this.accountsError = this.allAccounts.length >=1 && !this.gotError;
        }
}