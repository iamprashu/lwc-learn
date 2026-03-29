import { LightningElement } from 'lwc';

export default class Conditional extends LightningElement {
    clicked = false;

    handleClick(){
        this.clicked = !this.clicked;
        const btn = this.template.querySelector('.btn');
        btn.variant = this.clicked ? 'Brand' : 'Success';
        btn.label = this.clicked ? 'I am Clicked' : 'Click Me';
    }
}