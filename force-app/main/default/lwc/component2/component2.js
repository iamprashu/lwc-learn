import { LightningElement,api } from 'lwc';

export default class Component2 extends LightningElement {
    @api lol = 0;

    @api update(){
        this.lol++;
        this.message2 = `Count is ${this.lol}`
    }
    message2 = `Count is ${this.lol}`


}