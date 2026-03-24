import { LightningElement } from 'lwc';

async function getData(url) {
    const res = await fetch(url);
    const data = await res.json();
    return res.status=='ok' ? data : null;
}

export default class News extends LightningElement {
    apiKey = '15f8ce4160cf4436b66566cce700e7ce';
    //https://newsapi.org/v2/everything?q=salesforce&apiKey=15f8ce4160cf4436b66566cce700e7ce
   
    process(event) {
        let query = this.template.querySelector('.query').value;

        if(!query){
            alert('Please enter a query')
            return;
        }
        
        url = `https://newsapi.org/v2/everything?q=${query}&apiKey=${this.apiKey}`;

        let response = null;

        getData(url).then(data => {
            response = data.articles;
        });
    }
}