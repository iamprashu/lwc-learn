import { LightningElement, track } from 'lwc';

export default class TodoApp extends LightningElement {
    num = 1;
    @track tasks = [];

    connectedCallback() {
        const storedTasks = localStorage.getItem('tasks');
        this.tasks = storedTasks ? JSON.parse(storedTasks) : [];
    }

    addTask() {
        const inputElement = this.template.querySelector('.taskInput');
        const data = inputElement.value;

        if (data) {
            this.tasks = [
                ...this.tasks,
                { id: num+1, name: data }
            ];

            inputElement.value = '';

            localStorage.setItem('tasks', JSON.stringify(this.tasks));
        }
    }

    removeTask(event) {
        const rm = Number(event.currentTarget.dataset.id);

        this.tasks = this.tasks.filter(
            eachElement => eachElement.id !== rm
        );

        localStorage.setItem('tasks', JSON.stringify(this.tasks));
    }
}