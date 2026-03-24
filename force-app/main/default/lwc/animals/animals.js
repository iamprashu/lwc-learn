import { LightningElement } from 'lwc';

async function getAnimals() {
    const res = await fetch('https://api.thecatapi.com/v1/images/search?limit=20');
    const data = await res.json();
    return data;
}


export default class Animals extends LightningElement {
    animals = [];
    error = '';

    async connectedCallback() {
        try {
            this.animals = await getAnimals();
        } catch (error) {
            this.error = error.message;
        }
    }
    
}