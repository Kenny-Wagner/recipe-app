const express = require('express');
const { getAllRecipes, createRecipe } = require('../controllers/recipeController');
const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();

router.get('/recipes', getAllRecipes);
router.post('/recipes', authMiddleware, createRecipe);

module.exports = router;
