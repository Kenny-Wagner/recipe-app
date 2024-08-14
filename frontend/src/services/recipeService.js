import axios from 'axios';

const API_URL = 'http://localhost:5000/api';

export const getAllRecipes = async () => {
    const response = await axios.get(`${API_URL}/recipes`);
    return response.data;
};

export const getRecipeById = async (id) => {
    const response = await axios.get(`${API_URL}/recipes/${id}`);
    return response.data;
};

export const createRecipe = async (recipeData) => {
    const token = localStorage.getItem('token');
    const response = await axios.post(`${API_URL}/recipes`, recipeData, {
        headers: {
            Authorization: token,
        },
    });
    return response.data;
};
