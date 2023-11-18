export default class API {
    constructor () {
        // this.rootEndpoint = "https://api.punkapi.com/v2/"
        this.rootEndpoint = "http://localhost:8000/public/endpoint.php"
        // this.testPHP()
    }


    async getAllBeers () {
        const response = await fetch(`http://localhost:8000/public/endpoint.php`)
        const data = await response.json();
        return data;
    }


    async getBeer (id) {
        const reponse = await fetch(`http://localhost:8000/public/endpoint.php?beer=${id}`)
        .then(response => {
            if (!response.ok) {
              throw new Error('La requête a échoué : ' + response.status);
            }
            return response.json();
          })
        .then(data => {
            console.log(data)
        })
        .catch(error => {
            console.error('Erreur de Fetch :', error);
        });
    }


    // async testPHP() {
    //     const reponse = await fetch(`http://localhost:8000/public/endpoint.php?beer=15`)
    //     .then(response => {
    //         if (!response.ok) {
    //           throw new Error('La requête a échoué : ' + response.status);
    //         }
    //         return response.json();
    //       })
    //       .then(data => {
    //         console.log(data)
    //       })
    //       .catch(error => {
    //         console.error('Erreur de Fetch :', error);
    //       });
    // }
}
