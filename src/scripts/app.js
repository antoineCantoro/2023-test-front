import "../styles/main.scss";
import beerAPI from "./services/beer-api";
import Modale from "./components/modale";
import BeerItem from "./components/beer-item";

import LocomotiveScroll from "locomotive-scroll";
import imagesLoaded from "imagesloaded";
import { gsap } from "gsap";

class App {
    constructor() {
        this.beerApiService = new beerAPI();
        this.modale = new Modale();
        this.beerInstances = [];

        this.DOM = {};
        this.DOM.root = document.querySelector("#app");
        this.DOM.header = document.querySelector(".js-header");
        this.DOM.footer = document.querySelector(".js-footer");
        this.DOM.loader = document.querySelector(".js-loader");
        this.DOM.beerNode = [];

        this.getFixedLayoutHeight();
        this.createObserver();
        this.getBeers();
    }

    /**
     * Get datas from API
     */
    async getBeers() {
        this.beers = await this.beerApiService.getAllBeers();
        this.generateHTMLContent();
    }


    /**
     * Create beer instance from each entries of api response data
     */
    async generateHTMLContent() {
        this.beers.forEach(element => {
            this.createBeer(element);
        });

        this.preloading();
        this.addEventListeners();
    }

    /**
     * Hide loader when all beer images are loaded
     */
    preloading() {
        imagesLoaded( document.querySelector("#app"), () => {
            gsap.timeline()
                .to(this.DOM.loader.querySelector(".loader_text"), { yPercent: 100, delay: 1, duration: 1, ease: "expo.inOut" })
                .to(this.DOM.loader, { scaleY: 0, transformOrigin: "bottom", duration: 2, ease: "expo.out" });
        });
    }

    /**
     * Create Observer
     */
    createObserver() {
        const options = {
            threshold: 0.5
        };

        this.observer = new IntersectionObserver(this.oberserving, options);
    }

    /**
     * Show entry when visible
     */
    oberserving(entries, observer) {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("--visible");
                observer.unobserve(entry.target);
            }
        })
    }

    /**
     * Create beer instance and html element
     */
    createBeer(data) {
        const beerItem = new BeerItem(data);
        const htmlElement = beerItem.generateHtmlNode();

        this.beerInstances.push(beerItem);
        this.DOM.root.appendChild(htmlElement);
        this.DOM.beerNode.push(htmlElement);

        this.observer.observe(htmlElement);
    }

    /**
     * Get fixed layout element height
     */
    getFixedLayoutHeight() {
        const headerHeight = Math.round(this.DOM.header.getBoundingClientRect().height);
        const footerHeight = Math.round(this.DOM.footer.getBoundingClientRect().height);

        const root = document.querySelector(":root");
        root.style.setProperty("--header-height", headerHeight + "px");
        root.style.setProperty("--footer-height", footerHeight + "px");
    }

    /**
     * Create and add event listeners
     */
    addEventListeners() {
        // Create new instance of locomotive scroll
        this.locomotiveScrollInstance = new LocomotiveScroll();

        // Add listener for each button of beer element and display modale
        this.DOM.beerNode.forEach((element) => {
            element.querySelector("button").addEventListener("click", () => {
                const currentID = element.getAttribute("data-id");
                const currentData = this.beerInstances[currentID-1].data;
                this.modale.open(currentData);
            });
        });
    }
}

new App()
