import { LightningElement } from 'lwc';

export default class PtocParent extends LightningElement {
    lol = '';
    updateName(event){
        const val = event.target.value;
        this.lol = val;
    }
}