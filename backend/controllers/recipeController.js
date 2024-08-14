const { Recipe, User } = require('../models');

const getAllRecipes = async (req, res) => {
    try {
        const recipes = await Recipe.findAll({ include: User });
        res.json(recipes);
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
};

const createRecipe = async (req, res) => {
    const { title, ingredients, instructions, category } = req.body;
    try {
        const recipe = await Recipe.create({ title, ingredients, instructions, category, UserId: req.user.id });
        res.status(201).json(recipe);
    } catch (error) {
        res.status(400).json({ error: 'Bad request' });
    }
};

module.exports = { getAllRecipes, createRecipe };
