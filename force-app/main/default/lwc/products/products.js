import { LightningElement } from 'lwc';

export default class Product extends LightningElement {

    products = [];
    selected = null;
    showModal = false;
    allProducts = [];

    page = 0;
    limit = 5;

    connectedCallback() {
        this.fetchProducts();
    }

    async fetchProducts() {
        try {
            const response = await fetch(`https://api.escuelajs.co/api/v1/products`);
            const data = await response.json();

            this.allProducts = data;
            this.maxPro = this.allProducts.length;
            this.updateProducts(); 

        } catch (error) {
            console.error('Error fetching products:', error);
        }
    }

    updateProducts() {
        const start = this.page * this.limit;
        const end = start + this.limit;
        this.products = this.allProducts.slice(start, end);
    }

    getNextItems() {
        if ((this.page + 1) * this.limit < this.allProducts.length) {
            this.page += 1;
            this.updateProducts();
        }
    }

    getPreviousItems() {
        if (this.page > 0) {
            this.page -= 1;
            this.updateProducts();
        }
    }

    handleClick(event) {
        const id = event.currentTarget.dataset.id;
        this.selected = this.allProducts.find(p => p.id == id);
        this.showModal = true;
    }

    closeModal() {
        this.showModal = false;
        this.selected = null;
    }
}