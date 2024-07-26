const getRandomPrice = () => {
    return Math.floor(Math.random() * (1000 - 500 + 1)) + 500;
};

function applyDiscount(price, discountPercentage) {
    return (price - (price * (discountPercentage / 100))).toFixed(2);
}

const fetchProducts = async () => {
    try {
        const response = await fetch('http://127.0.0.1:5000/api/products');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching products:', error);
        return []; // Return an empty array in case of error
    }
};

// Export the functions
export { getRandomPrice, applyDiscount, fetchProducts };
