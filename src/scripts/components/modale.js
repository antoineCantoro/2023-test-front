import { gsap } from "gsap"
import { disablePageScroll, enablePageScroll } from 'scroll-lock';

export default class Modale {
    constructor () {
        this.DOM = {};
        this.DOM.root = document.querySelector('.js-modale');
        this.DOM.closeBtn = document.querySelector('.js-close-modale');
        this.DOM.name = document.querySelector('.js-modale-name');
        this.DOM.tagline = document.querySelector('.js-modale-tagline');
        this.DOM.description = document.querySelector('.js-modale-description');
        this.DOM.image = document.querySelector('.js-modale-image');
        this.DOM.decoration = document.querySelector('.js-modale-decoration');
        this.DOM.listItems = document.querySelectorAll('.js-modale-list-item');
        this.DOM.listItemsElements = document.querySelectorAll('.js-modale li');

        this.initTimeline();
        this.addEventListeners();
    }

    /**
     * Create modale timeline animation
     */
    initTimeline() {
        this.timeline = gsap.timeline({ paused: true })
            .to(this.DOM.root, { yPercent: -100 })
            .fromTo([
                this.DOM.name,
                this.DOM.tagline,
                this.DOM.description,
                this.DOM.listItemsElements
            ], { opacity: 0 }, { opacity: 1, duration: 3, ease: "power4.out", stagger: 0.05 })
    }

    /**
     * Open Modale
     */
    open (id) {
        this.updateHtmlContent(id);
        this.DOM.closeBtn.classList.toggle('--active');

        this.isModaleOpen = true;
        this.timeline.play();
        disablePageScroll(this.DOM.root);
    }

    /**
     * Close Modale
     */
    close () {
        this.DOM.closeBtn.classList.remove('--active');
        this.timeline.timeScale(3).reverse();
        setTimeout(() => {
            enablePageScroll(this.DOM.root);
        }, 2000);
    }

    /**
     * Add Events listeners
     */
    addEventListeners() {
        this.DOM.closeBtn.addEventListener('click', () => {
            this.close();
        });
    }

    /**
     * Update modale list datas
     */
    updateItem(element, data) {

        // Common keys
        const key = element.getAttribute('data-key');
        element.innerText = data[key];

        // Specific keys

            // If EBC-SRM key, concat both of the datas
            if (key === "ebc-srm") {
                element.innerText = `${data["ebc"]}/${data["srm"]}`;
            }

            // If yeast item, get data deeper from ingredient
            if (key === "yeast") {
                element.innerText = data.ingredients.yeast;
            }

            // If key is an array, concat values into a single string
            if (key === "malt" || key === "hops") {
                let listIngredients = "";

                data.ingredients[key].forEach((ingredient)  => {
                    listIngredients += `${ingredient.name}<br/>`;
                })

                element.innerHTML = listIngredients;
            }
    }

    /**
     * Update modale data
     */
    updateHtmlContent(data) {
        // Replace data
        this.DOM.name.innerText = data.name;
        this.DOM.tagline.innerText = data.tagline;
        this.DOM.description.innerText = data.description;
        this.DOM.image.setAttribute("src", data.image_url);
        this.DOM.decoration.innerText = data.name;

        // Update List data
        this.DOM.listItems.forEach(element => {
            this.updateItem(element, data);
        })
    }
}
