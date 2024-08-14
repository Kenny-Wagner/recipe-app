import { TextInput } from '@mantine/core';

const SearchBar = ({ onSearch }) => {
  return (
    <TextInput
      placeholder="Search for recipes..."
      onChange={(event) => onSearch(event.currentTarget.value)}
    />
  );
};

export default SearchBar;
