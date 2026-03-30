import { LightningElement ,track} from 'lwc';
import getAllAccountsList from '@salesforce/apex/lwcSheet11Helper.getAllAccountsList';
import { fireEvent } from 'c/pubsub';

export default class LwcQ11PublisherAccountComponent extends LightningElement {
    @track allAccounts = [];

    connectedCallback(){
        getAllAccountsList().then((data)=>{
            this.allAccounts = data;
        }).catch((error)=>{
            console.log(error);
        })
    }

    changeHandler(event){
        const acId = event.detail.value;
        fireEvent('accountSelected', acId);   
    }

    get options(){
        return this.allAccounts.map((acc)=>{
            return {
                    label: acc.Name,
                    value: acc.Id
                };
    })

   

    }
}