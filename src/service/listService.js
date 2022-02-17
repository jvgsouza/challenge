import axios from 'axios';

const listProductsService = async () => {
    return axios.get('https://corebiz-test.herokuapp.com/api/v1/products')
};

export default listProductsService;