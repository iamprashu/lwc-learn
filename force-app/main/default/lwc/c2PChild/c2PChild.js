import { LightningElement,api } from 'lwc';

export default class C2PChild extends LightningElement {
    @api num = 0;
    @api runChange(){
        this.num++;
    }

}