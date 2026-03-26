import { LightningElement, track } from 'lwc';

export default class TodoApp extends LightningElement {
    @track tasks = [];

    addTask() {
    const inputElement = this.template.querySelector('.taskInput');
    const data = inputElement.value;

        if (data) {
            this.tasks = [
                ...this.tasks,
                { id: Date.now(), name: data }
            ];
            inputElement.value = '';
        }
    }
}