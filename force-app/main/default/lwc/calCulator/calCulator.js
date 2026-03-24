import { LightningElement } from 'lwc';

export default class Calculator extends LightningElement {
    num1 = '';
    num2 = '';
    operator = '';
    result = null;
    error = '';
    options = [
        { label: 'Add (+)', value: '+' },
        { label: 'Subtract (-)', value: '-' },
        { label: 'Multiply (*)', value: '*' },
        { label: 'Devide (/)', value: '/' }
    ];
    handleNum1(event) {
        this.num1 = parseFloat(event.target.value);
    }
    handleNum2(event) {
        this.num2 = parseFloat(event.target.value);
    }

    handleOperator(event) {
        this.operator = event.detail.value;
    }

    handleCalculate() {
        this.error = '';
        this.result = null;

        if (this.num1 === '' || this.num2 === '' || !this.operator) {
            this.error = 'Please enter all values';
            return;
        }
        switch (this.operator) {
            case '+':
                this.result = this.num1 + this.num2;
                break;
            case '-':
                this.result = this.num1 - this.num2;
                break;
            case '*':
                this.result = this.num1 * this.num2;
                break;
            case '/':
                    this.result = this.num1 / this.num2;
                break;
            default:
                this.error = 'Invalid operator';
        }
    }
}