import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import "@mantine/core/styles.css"; //Do not remove
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import RecipePage from './pages/RecipePage';
import AddRecipePage from './pages/AddRecipePage';
import AppHeader from './components/AppHeader';
import { MantineProvider } from '@mantine/core';

const App = () => {
  return (
    <MantineProvider>

    <Router>
      <AppHeader />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/recipe/:id" element={<RecipePage />} />
        <Route path="/add-recipe" element={<AddRecipePage />} />
      </Routes>
    </Router>
    </MantineProvider>
  );
};

export default App;
