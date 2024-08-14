// src/components/AppHeader.jsx
import { useState } from 'react';
import { Container, Group } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import classes from './AppHeader.module.css'; // Ensure this path is correct
import { useNavigate } from 'react-router-dom';

const links = [
  { link: '/', label: 'Home' },
  { link: '/login', label: 'Login' },
  { link: '/register', label: 'Register' },
  { link: '/add-recipe', label: 'Add Recipe' },
];

const AppHeader = () => {
  const [opened, { toggle }] = useDisclosure(false);
  const [active, setActive] = useState(links[0].link);
  const navigate = useNavigate();

  const items = links.map((link) => (
    <a
      key={link.label}
      href={link.link}
      className={classes.link}
      data-active={active === link.link || undefined}
      onClick={(event) => {
        event.preventDefault();
        setActive(link.link);
        navigate(link.link)
      }}
    >
      {link.label}
    </a>
  ));

  return (
    <header className={classes.header}>
      <Container size="md" className={classes.inner}>
        <Group gap={5}>
          {items}
        </Group>
      </Container>
    </header>
  );
}

export default AppHeader;