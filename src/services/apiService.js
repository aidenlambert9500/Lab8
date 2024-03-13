import axios from 'axios';

const BASE_URL = 'https://dummyjson.com/products';

// Fetches a list of all products
export const fetchProducts = async () => {
    try {
        const response = await axios.get(BASE_URL);
        return response.data;
    } catch (error) {
        throw error; // Rethrow to allow caller to handle
    }
};

// Fetches details for a single product by its ID
export const getProductDetails = async (id) => {
    try {
        const response = await fetch(`${BASE_URL}/${id}`);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const product = await response.json();
        return product;
    } catch (error) {
        console.error(`Fetch error: ${error}`);
        throw error;
    }
};

// Deletes a product by its ID
export const removeProduct = async (id) => {
    try {
        const response = await axios.delete(`${BASE_URL}/${id}`);
        return response.data;
    } catch (error) {
        throw error; // Rethrow to allow caller to handle
    }
};

// Adds a new product to the database
export const addProduct = (product) => {
    return axios.post(`${BASE_URL}/add`, JSON.stringify(product));
};

// Edits an existing product by ID
export const editProduct = async (id, product) => {
    try {
        const response = await axios.put(`https://your-api-url/products/${id}`, product);
        return response.data;
    } catch (error) {
        console.error(`Axios put error: ${error}`);
        throw error;
    }
};
