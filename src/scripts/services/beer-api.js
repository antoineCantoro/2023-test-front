export default class API {
    constructor () {
        this.rootEndpoint = "http://localhost:8000/endpoint.php";
    }

    /**
     * Get beers data
     */
    async getAllBeers () {
        const response = await fetch(this.rootEndpoint);
        const data = await response.json();
        return data;
    }
}
