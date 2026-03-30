import { LightningElement, track } from 'lwc';
import getAllAccount from '@salesforce/apex/LwcSheet7Helper.getAllAccount';
const columnscont = [
    {label:"Id",fieldName:"Id"},
    {label:"Name",fieldName:"Name"},
    {label:"Phone",fieldName:"Phone"}

]
export default class SheetComponent7 extends LightningElement {
    col = columnscont;
    loading = false;
    @track allAccounts = []
    error;
    connectedCallback(){
        this.loading = true;
        getAllAccount().then((data)=>{
            setTimeout(()=>{
                this.allAccounts = data;
            this.loading = false;

            
            },5000);
        }).catch((error)=>{
            error = error;
            this.loading = false;

        })
    }

    get hasAccounts(){
        return this.allAccounts.length >0 && !this.error;
    }
}