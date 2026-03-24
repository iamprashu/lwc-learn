import { LightningElement } from 'lwc';

export default class Product extends LightningElement {

    products = [];
    selected = null;
    showModal = false;
    allProducts = [];

    connectedCallback() {
        this.fetchProducts();
    }

    async fetchProducts() {
        try {
            const response = await fetch('https://api.escuelajs.co/api/v1/products?offset=3&limit=5');
            const data = await response.json();
            this.products = data;
            this.allProducts = data;
        } catch (error) {
            console.error('Error fetching products:', error);
        }
    }

    handleClick(event) {
        const id = event.currentTarget.dataset.id;
        this.selected = this.products.find(p => p.id == id);
        this.showModal = true;
    }

    closeModal() {
        this.showModal = false;
        this.selected = null;
    }
}