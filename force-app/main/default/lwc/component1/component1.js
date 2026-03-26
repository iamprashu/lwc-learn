import { LightningElement } from 'lwc';

export default class Component1 extends LightningElement {
    message = 'Prashu 1'

    rupper(){
        this.template.querySelector('c-component2').update();
    }
}