import React from 'react';
import { Select } from '@chakra-ui/react';

const BrandSelector = ({ brands, onSelect }) => {
    const handleBrandChange = (event) => {
        const selectedBrand = event.target.value;
        onSelect(selectedBrand);
    };

    return (
        <Select placeholder="Select a brand" width="200px" variant="filled" onChange={handleBrandChange}>
            {brands.map((brand, index) => (
                <option key={index} value={brand}>
                    {brand}
                </option>
            ))}
        </Select>
    );
};

export default BrandSelector;
