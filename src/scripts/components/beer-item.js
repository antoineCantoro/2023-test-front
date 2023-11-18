export default class BeerItem {
    constructor (data) {
        this.data = data
        this.node = null
    }

    /**
     * Generate beer HTML element for the ".beers-grid" element
     */
    generateHtmlNode() {

        // Root
        const nodeElement = document.createElement('div')
        nodeElement.classList.add('beer-item')
        nodeElement.setAttribute('data-id', this.data.id)

        // // Visual Wrapper
        // const visualWrapperNode = document.createElement('div')
        // visualWrapperNode.classList.add('beer-item_visual-wrapper')
        // nodeElement.appendChild(visualWrapperNode)

        // Visual
        const imageNode = document.createElement('img')
        imageNode.classList.add('beer-item_visual')
        imageNode.setAttribute('src', '/assets/images/bottle-placeholder.png')
        imageNode.setAttribute('src', this.data.image_url)
        nodeElement.appendChild(imageNode)

        // // Visual Overlay
        // const imageOverlayNode = document.createElement('img')
        // imageOverlayNode.classList.add('beer-item_visual-overlay')
        // imageOverlayNode.setAttribute('src', this.data.image_url)
        // visualWrapperNode.appendChild(imageOverlayNode)

        // Information Wrapper
        const wrapperNode = document.createElement('div')
        wrapperNode.classList.add('beer-item_wrapper')
        nodeElement.appendChild(wrapperNode)

        // Name
        const nameNode = document.createElement('div')
        nameNode.classList.add('beer-item_name')
        nameNode.innerText = this.data.name
        wrapperNode.appendChild(nameNode)

        // Tagline
        const taglineNode = document.createElement('div')
        taglineNode.classList.add('beer-item_tagline')
        taglineNode.innerText = this.data.tagline
        wrapperNode.appendChild(taglineNode)

        // Button
        const buttonNode = document.createElement('button')
        buttonNode.classList.add('button')
        buttonNode.innerText = `SEE MORE`

        wrapperNode.appendChild(buttonNode)

        this.node = nodeElement

        return this.node
    }
}
