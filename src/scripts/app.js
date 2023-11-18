import '../styles/main.scss'
import API from './services/api';
import Modale from './components/modale';
import BeerItem from './components/beer-item';

class App {
    constructor() {
        this.beerApiService = new API()
        this.modale = new Modale()
        this.beerInstances = []

        this.DOM = {}
        this.DOM.root = document.querySelector('#app')
        this.DOM.beerNode = []

        this.getBeers()
    }

    async getBeers() {
        this.beers = await this.beerApiService.getAllBeers()
        this.generateHTMLContent()
    }

    async generateHTMLContent() {
        this.beers.forEach(element => {
            this.createBeer(element)
        })

        this.addEventListeners()
    }

    createBeer(data) {
        const beerItem = new BeerItem(data)
        const htmlElement = beerItem.generateHtmlNode()

        this.beerInstances.push(beerItem)
        this.DOM.root.appendChild(htmlElement)
        this.DOM.beerNode.push(htmlElement)

    }

    addEventListeners() {
        this.DOM.beerNode.forEach((element) => {
            element.querySelector('button').addEventListener('click', () => {
                const currentID = element.getAttribute('data-id')
                const currentData = this.beerInstances[currentID-1].data
                // console.log(currentID);
                // console.log(currentData);
                this.modale.open(currentData)
            })
        })
    }
}

new App()
