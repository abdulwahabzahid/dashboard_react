import React from 'react';
import { Input } from '@chakra-ui/react';

const SearchBar = ({ query, onQueryChange }) => {
  return (
    <Input
      placeholder="Search for products..."
      value={query}
      onChange={(e) => onQueryChange(e.target.value)}
      width="300px"
      mb={4}
    />
  );
};

export default SearchBar;
