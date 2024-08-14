import { useState } from 'react';
import { Container, TextInput, Textarea, Button } from '@mantine/core';
import { createRecipe } from '../services/recipeService';

const AddRecipePage = () => {
  const [title, setTitle] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [instructions, setInstructions] = useState('');
  const [category, setCategory] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await createRecipe({ title, ingredients, instructions, category });
      window.location.href = '/';
    } catch (error) {
      console.error('Failed to add recipe');
    }
  };

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <TextInput
          label="Recipe Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Recipe Title"
          required
        />
        <Textarea
          label="Ingredients"
          value={ingredients}
          onChange={(e) => setIngredients(e.target.value)}
          placeholder="Ingredients"
          required
        />
        <Textarea
          label="Instructions"
          value={instructions}
          onChange={(e) => setInstructions(e.target.value)}
          placeholder="Instructions"
          required
        />
        <TextInput
          label="Category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          placeholder="Category"
        />
        <Button type="submit" mt="sm">Add Recipe</Button>
      </form>
    </Container>
  );
};

export default AddRecipePage;
