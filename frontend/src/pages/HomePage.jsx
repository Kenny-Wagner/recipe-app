import { useState, useEffect } from 'react';
import { Container, SimpleGrid } from '@mantine/core';
import RecipeCard from '../components/RecipeCard';
import SearchBar from '../components/SearchBar';
import { getAllRecipes } from '../services/recipeService';

const HomePage = () => {
  const [recipes, setRecipes] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    getAllRecipes().then((data) => setRecipes(data));
  }, []);

  const filteredRecipes = recipes.filter((recipe) =>
    recipe.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Container>
      <SearchBar onSearch={setSearchTerm} />
      <SimpleGrid cols={3} spacing="lg">
        {filteredRecipes.map((recipe) => (
          <RecipeCard key={recipe.id} recipe={recipe} />
        ))}
      </SimpleGrid>
    </Container>
  );
};

export default HomePage;
