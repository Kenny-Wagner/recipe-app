'use strict';
const bcrypt = require('bcrypt');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    // Hash passwords
    const hashedPassword = await bcrypt.hash('password123', 10);

    // Insert users
    const users = await queryInterface.bulkInsert('Users', [
      { username: 'chef1', email: 'chef1@example.com', password: hashedPassword, createdAt: new Date(), updatedAt: new Date() },
      { username: 'chef2', email: 'chef2@example.com', password: hashedPassword, createdAt: new Date(), updatedAt: new Date() },
      { username: 'chef3', email: 'chef3@example.com', password: hashedPassword, createdAt: new Date(), updatedAt: new Date() },
      { username: 'chef4', email: 'chef4@example.com', password: hashedPassword, createdAt: new Date(), updatedAt: new Date() },
      { username: 'chef5', email: 'chef5@example.com', password: hashedPassword, createdAt: new Date(), updatedAt: new Date() },
    ], { returning: true });

    // Insert recipes
    return queryInterface.bulkInsert('Recipes', [
      {
        title: 'Spaghetti Carbonara',
        ingredients: JSON.stringify([
          '200g spaghetti',
          '100g pancetta',
          '2 large eggs',
          '50g pecorino cheese',
          '50g parmesan cheese',
          '2 cloves of garlic',
          'Salt and pepper to taste',
        ]),
        instructions: JSON.stringify([
          'Cook the spaghetti in salted boiling water until al dente.',
          'While the pasta is cooking, fry the pancetta with the garlic until crispy.',
          'Beat the eggs in a bowl, then mix with the grated pecorino and parmesan.',
          'Drain the pasta and mix with the pancetta, then remove from heat.',
          'Quickly add the egg and cheese mixture to the pasta, stirring until creamy.',
          'Season with salt and pepper, then serve immediately.',
        ]),
        category: 'Italian',
        preparationTime: 20,
        difficulty: 'Medium',
        userId: users[0].id, // Chef 1
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Chicken Tikka Masala',
        ingredients: JSON.stringify([
          '500g chicken breast, cubed',
          '200ml yogurt',
          '2 tbsp tikka masala paste',
          '1 onion, chopped',
          '2 cloves garlic, minced',
          '1 tbsp ginger, minced',
          '400g canned tomatoes',
          '200ml cream',
          '1 tsp cumin',
          '1 tsp turmeric',
          '1 tsp paprika',
          'Salt and pepper to taste',
        ]),
        instructions: JSON.stringify([
          'Marinate the chicken in yogurt and tikka masala paste for at least 1 hour.',
          'Fry the onion, garlic, and ginger until soft, then add the spices.',
          'Add the marinated chicken and cook until browned.',
          'Pour in the tomatoes and simmer for 20 minutes.',
          'Stir in the cream and cook for another 10 minutes.',
          'Serve hot with rice or naan bread.',
        ]),
        category: 'Indian',
        preparationTime: 40,
        difficulty: 'Medium',
        userId: users[0].id, // Chef 1
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Chocolate Chip Cookies',
        ingredients: JSON.stringify([
          '200g unsalted butter, softened',
          '200g brown sugar',
          '100g white sugar',
          '2 large eggs',
          '1 tsp vanilla extract',
          '300g all-purpose flour',
          '1 tsp baking soda',
          '1/2 tsp baking powder',
          '200g chocolate chips',
          'Pinch of salt',
        ]),
        instructions: JSON.stringify([
          'Preheat the oven to 180°C (350°F).',
          'Cream together the butter and sugars until light and fluffy.',
          'Beat in the eggs one at a time, then stir in the vanilla.',
          'Combine the flour, baking soda, baking powder, and salt; gradually stir into the creamed mixture.',
          'Fold in the chocolate chips.',
          'Drop by rounded spoonfuls onto ungreased baking sheets.',
          'Bake for 10 to 12 minutes, or until edges are golden brown.',
          'Allow cookies to cool on the baking sheet for 5 minutes before removing to a wire rack to cool completely.',
        ]),
        category: 'Dessert',
        preparationTime: 25,
        difficulty: 'Easy',
        userId: users[1].id, // Chef 2
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      // Add more recipes here, assigned to different users...
      {
        title: 'Beef Wellington',
        ingredients: JSON.stringify([
          '1kg beef fillet',
          '250g mushrooms, finely chopped',
          '100g prosciutto',
          '250g puff pastry',
          '2 tbsp Dijon mustard',
          '1 egg, beaten',
          'Salt and pepper to taste',
        ]),
        instructions: JSON.stringify([
          'Preheat the oven to 200°C (390°F).',
          'Season the beef fillet with salt and pepper, then sear on all sides.',
          'Spread mustard over the beef.',
          'Lay out the prosciutto on cling film, spread mushrooms over it, and place the beef on top.',
          'Wrap the beef in prosciutto and mushrooms, then roll it in puff pastry.',
          'Brush with beaten egg and bake for 30-35 minutes.',
          'Allow to rest before slicing and serving.',
        ]),
        category: 'British',
        preparationTime: 60,
        difficulty: 'Hard',
        userId: users[2].id, // Chef 3
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Sushi Rolls',
        ingredients: JSON.stringify([
          '2 cups sushi rice',
          '3 cups water',
          '1/2 cup rice vinegar',
          '1 tbsp sugar',
          '1 tsp salt',
          'Nori sheets',
          '200g fresh salmon or tuna, sliced thinly',
          '1 avocado, sliced',
          'Soy sauce for dipping',
        ]),
        instructions: JSON.stringify([
          'Rinse the sushi rice until water runs clear.',
          'Cook rice with water, then mix with rice vinegar, sugar, and salt.',
          'Place a nori sheet on a bamboo mat, spread a thin layer of rice over it.',
          'Add fish and avocado slices, then roll tightly.',
          'Slice into pieces and serve with soy sauce.',
        ]),
        category: 'Japanese',
        preparationTime: 45,
        difficulty: 'Medium',
        userId: users[2].id, // Chef 3
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Guacamole',
        ingredients: JSON.stringify([
          '3 ripe avocados',
          '1 lime, juiced',
          '1 tsp salt',
          '1/2 cup diced onion',
          '2 roma (plum) tomatoes, diced',
          '2 cloves garlic, minced',
          '1 pinch ground cumin',
          '1 jalapeño pepper, seeded and minced (optional)',
        ]),
        instructions: JSON.stringify([
          'In a medium bowl, mash together the avocados, lime juice, and salt.',
          'Mix in the onion, tomatoes, garlic, and cumin.',
          'Stir in the jalapeño pepper.',
          'Refrigerate 1 hour for best flavor, or serve immediately.',
        ]),
        category: 'Mexican',
        preparationTime: 15,
        difficulty: 'Easy',
        userId: users[3].id, // Chef 4
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Classic French Toast',
        ingredients: JSON.stringify([
          '4 large eggs',
          '1 cup milk',
          '1 tsp vanilla extract',
          '1/2 tsp cinnamon',
          '8 slices of bread',
          'Butter for frying',
          'Maple syrup and powdered sugar for serving',
        ]),
        instructions: JSON.stringify([
          'In a bowl, whisk together eggs, milk, vanilla extract, and cinnamon.',
          'Heat a skillet over medium heat and melt a little butter.',
          'Dip bread slices into the egg mixture, then place on the skillet.',
          'Cook until golden brown on both sides.',
          'Serve with maple syrup and powdered sugar.',
        ]),
        category: 'Breakfast',
        preparationTime: 15,
        difficulty: 'Easy',
        userId: users[3].id, // Chef 4
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Pancakes',
        ingredients: JSON.stringify([
          '1 cup all-purpose flour',
          '2 tbsp sugar',
          '2 tsp baking powder',
          '1/2 tsp baking soda',
          '1/4 tsp salt',
          '1 cup buttermilk',
          '1 large egg',
          '2 tbsp melted butter',
        ]),
        instructions: JSON.stringify([
          'In a bowl, whisk together flour, sugar, baking powder, baking soda, and salt.',
          'In another bowl, mix buttermilk, egg, and melted butter.',
          'Pour the wet ingredients into the dry ingredients and stir until combined.',
          'Heat a griddle or skillet over medium heat and lightly grease.',
          'Pour batter onto the griddle and cook until bubbles form on the surface, then flip and cook until golden brown.',
        ]),
        category: 'Breakfast',
        preparationTime: 20,
        difficulty: 'Easy',
        userId: users[4].id, // Chef 5
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Chicken Caesar Salad',
        ingredients: JSON.stringify([
          '2 chicken breasts, grilled and sliced',
          '4 cups Romaine lettuce, chopped',
          '1/2 cup Caesar dressing',
          '1/4 cup grated Parmesan cheese',
          'Croutons',
        ]),
        instructions: JSON.stringify([
          'In a large bowl, toss the lettuce with Caesar dressing.',
          'Top with sliced grilled chicken, Parmesan cheese, and croutons.',
          'Serve immediately.',
        ]),
        category: 'Salad',
        preparationTime: 15,
        difficulty: 'Easy',
        userId: users[4].id, // Chef 5
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Vegetable Stir-Fry',
        ingredients: JSON.stringify([
          '2 cups mixed vegetables (bell peppers, broccoli, carrots, etc.)',
          '2 tbsp soy sauce',
          '1 tbsp hoisin sauce',
          '1 tbsp sesame oil',
          '1 clove garlic, minced',
          '1 tsp ginger, minced',
          '1 tbsp vegetable oil',
          'Cooked rice for serving',
        ]),
        instructions: JSON.stringify([
          'Heat oil in a pan over medium-high heat.',
          'Add garlic and ginger, and stir-fry for 1 minute.',
          'Add mixed vegetables and stir-fry until tender-crisp.',
          'Stir in soy sauce and hoisin sauce.',
          'Serve over cooked rice.',
        ]),
        category: 'Asian',
        preparationTime: 20,
        difficulty: 'Easy',
        userId: users[4].id, // Chef 5
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    // Optionally, you can include code to remove seeded data here
    return queryInterface.bulkDelete('Recipes', null, {});
  },
};
