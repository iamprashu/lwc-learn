import { LightningElement } from 'lwc';
import Toast from 'lightning/toast';
import ToastContainer from "lightning/toastContainer";

export default class SheetComponent5Toast extends LightningElement {

    connectedCallback() {
        const toastContainer = ToastContainer.instance();
        toastContainer.maxToasts = 5;
        toastContainer.toastPosition = "top-right";
    }

    handleClick() {
        Toast.show({
            label: 'Hello This is My First Toast',
            
            message: 'My Name Is Prashant Joshi',
            
            mode: 'sticky',
            variant: 'info'
        }, this);
    }
}