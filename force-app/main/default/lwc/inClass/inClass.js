import { LightningElement } from 'lwc';

export default class InClass extends LightningElement {
   btnData = false;

   handleClick() {
       this.btnData = !this.btnData;
   }
}