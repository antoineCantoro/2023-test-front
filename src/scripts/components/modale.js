import { gsap } from "gsap"
import { disablePageScroll, enablePageScroll } from 'scroll-lock';

export default class Modale {
    constructor () {
        this.DOM = {}
        this.DOM.root = document.querySelector('.js-modale')
        this.DOM.closeBtn = document.querySelector('.js-close-modale')

        this.DOM.name = document.querySelector('.js-modale-name')
        this.DOM.tagline = document.querySelector('.js-modale-tagline')
        this.DOM.description = document.querySelector('.js-modale-description')

        this.DOM.image = document.querySelector('.js-modale-image')
        this.DOM.decoration = document.querySelector('.js-modale-decoration')
        this.DOM.listItems = document.querySelectorAll('.js-modale-list-item')
        //js-modale-name

        console.log("modale ready");

        this.isModaleOpen = false

        this.initTimeline()
        this.addEventListeners()
    }

    initTimeline() {
        this.timeline = gsap.timeline({paused: true})
            .set(this.DOM.root.querySelectorAll('li'), { opacity: 0 })
            .set(this.DOM.root.querySelectorAll('img'), { yPercent: 50 })
            .to(this.DOM.root, {yPercent: -100})
            .to(this.DOM.root.querySelectorAll('img'), { yPercent: 0 }, "<")
            .to(this.DOM.root.querySelectorAll('li'), { opacity: 1, stagger: 0.02, duration: 2 })
    }

    open (id) {
        console.log('open ' + id);
        this.updateHtmlContent(id)


        this.DOM.closeBtn.classList.toggle('--active')

        this.isModaleOpen = true
        this.timeline.play()
        disablePageScroll();
    }

    close () {
        this.DOM.closeBtn.classList.remove('--active')
        this.timeline.reverse()
        enablePageScroll();
    }

    addEventListeners() {
        // Debug
        // document.querySelector('header').addEventListener('click', () => {
        //     document.querySelector('header').classList.toggle('--active')
        //     this.DOM.root.classList.toggle('--active')
        // })

        this.DOM.closeBtn.addEventListener('click', () => {
            this.close()
        })
    }

    updateItem(element, data) {
        const key = element.getAttribute('data-key')
        element.innerText = data[key]

        if (key === "ebc-srm") {
            element.innerText = `${data["ebc"]}/${data["srm"]}`
        }

        if (key === "yeast") {
            element.innerText = data.ingredients.yeast
        }
        // console.log(data.ingredients);

        if (key === "malt" || key === "hops") {
            let listIngredients = ""
            console.log(data.ingredients.malt);

            data.ingredients.malt.forEach((ingredient)  => {
                listIngredients += `${ingredient.name}<br/>`
            })

            element.innerHTML = listIngredients

        }
    }

    updateHtmlContent(data) {
        console.log(data);

        // Replace data
        this.DOM.name.innerText = data.name
        this.DOM.tagline.innerText = data.tagline
        this.DOM.description.innerText = data.description
        this.DOM.image.setAttribute("src", data.image_url)
        this.DOM.decoration.innerText = data.name

        // Update
        this.DOM.listItems.forEach(element => {
            this.updateItem(element, data)
        })
    }
}
