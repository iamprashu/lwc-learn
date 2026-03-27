import { LightningElement } from 'lwc';

export default class SheetComponent2 extends LightningElement {
    para = '';
    
    handleClick(){
        const firstname = this.template.querySelector('.firstName').value;
        const lastname = this.template.querySelector('.lastName').value;
        const email = this.template.querySelector('.email').value;
        const phone = this.template.querySelector('.phone').value;
        const title = this.template.querySelector('.title').value;

        this.para = `${firstname} ${lastname}, ${email} ${phone} ${title} `
    }
    
}