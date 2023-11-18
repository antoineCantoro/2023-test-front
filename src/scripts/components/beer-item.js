export default class BeerItem {
    constructor (data) {
        this.data = data
        this.node = null

        // console.log(this.data);

        // this.addEventListeners()
    }

    generateHtmlNode() {

        // Root
        const nodeElement = document.createElement('div')
        nodeElement.classList.add('beer-item')
        nodeElement.setAttribute('data-id', this.data.id)

        // Visual
        const imageNode = document.createElement('img')
        imageNode.classList.add('beer-item_visual')
        imageNode.setAttribute('src', this.data.image_url)
        nodeElement.appendChild(imageNode)

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
        buttonNode.innerText = `SEE MORE +`

        wrapperNode.appendChild(buttonNode)

        this.node = nodeElement
        // this.addEventListeners()

        return nodeElement
    }

    // addEventListeners() {
    //     this.node.addEventListener('click', () => {
    //         console.log("ok");
    //     })
    // }
}
