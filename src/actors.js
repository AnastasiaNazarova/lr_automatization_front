import axios from 'axios';

export default class Actors {
    static http = axios;

    static async getProducts() {
        return await Actors.http.get('/product');
    }

    static async addProduct(obj) {
        return await Actors.http.post('/product/add', obj)
    }

    static async deleteProduct(id) {
        return await Actors.http.get('/product/delete/' + id)
    }
}
