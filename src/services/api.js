const URL = 'https://fakestoreapi.com';


export default {
 getProducts: async () => {
        const req = await fetch(`${URL}/products`);
        const json = req.json();
        return json;
    }
}