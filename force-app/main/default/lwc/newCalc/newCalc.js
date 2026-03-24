import { LightningElement } from 'lwc';

export default class NewCalc extends LightningElement {
    buttons = ['1','2','3','4','5','6','7','8','9','0','+','-','*','/','=','C'];
    
        num1 = '';
    num2 = '';
    operator = '';
    result = null;
    error = '';

    get displayValue() {
        if (this.result !== null) return this.result;
        if (this.operator) return this.num2 || 0;
        return this.num1 || 0;
    }

    handleClick(event) {
        const btn = event.target.label;
        if (btn === 'C') {
            this.num1 = '';
            this.num2 = '';
            this.operator = '';
            this.result = null;
            this.error = '';
            return;
        }

        if (!isNaN(btn)) {
            if (!this.operator) {
                this.num1 += btn;
            } else {
                this.num2 += btn;
            }
            return;
        }

        if (btn === '+' || btn === '-' || btn === '*' || btn === '/') {
            if (!this.operator) {
                this.operator = btn;
            } else {
                this.operator = btn;
                this.num2 = '';
            }
            return;
        }
        

        if (btn === '=') {
            const n1 = parseFloat(this.num1);
            const n2 = parseFloat(this.num2);

            if (isNaN(n1) || isNaN(n2)) {
                this.error = 'Invalid input';
                return;
            }

            switch (this.operator) {
                case '+':
                    this.result = n1 + n2;
                    break;
                case '-':
                    this.result = n1 - n2;
                    break;
                case '*':
                    this.result = n1 * n2;
                    break;
                case '/':
                    if (n2 === 0) {
                        this.error = 'Cannot divide by zero';
                        return;
                    }
                    this.result = n1 / n2;
                    break;
                default:
                    return;
            }

            this.num1 = this.result.toString();
            this.num2 = '';
            this.operator = '';
        }
    }

  
}