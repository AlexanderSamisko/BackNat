export default class API {
    constructor(url) {
        this.url = url;
        this.contentTypeHeader = {'Content-Type': 'application/json'};
    }; 
    
    
    pull(id) {
        return fetch(`${this.url}/?id=${id}` , {
            method: 'GET',
            headers: this.contentTypeHeader,
        });
    }

    push(user) {
        return fetch(`${this.url}/users`, {
            body: JSON.stringify(user),
            method: 'POST',
            headers: this.contentTypeHeader,
        });
    };

}