import { LightningElement } from 'lwc';

export default class C2PParent extends LightningElement {
    handleClick(){
      this.template.querySelector('c-c2-p-child').num += 10;
     
    }
}