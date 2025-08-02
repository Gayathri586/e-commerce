// This function fetches product data from a public API.
// It is an example of the skills you learned in Task 3.
async function fetchProducts() {
    const apiUrl = 'https://fakestoreapi.com/products?limit=6';
    
    try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error(HTTP error! status: ${response.status});
        }
        const products = await response.json();
        return products;
    } catch (error) {
        console.error("Could not fetch products:", error);
        return [];
    }
}

// This function takes a product object and creates the HTML for a product card.
function createProductCard(product) {
    const card = document.createElement('div');
    card.classList.add('product-card');
    
    card.innerHTML = `
        <img src="${product.image}" alt="${product.title}">
        <div class="product-info">
            <h3 class="product-title">${product.title}</h3>
            <p class="product-price">$${product.price.toFixed(2)}</p>
            <button class="add-to-cart-btn">Add to Cart</button>
        </div>
    `;
    
    return card;
}

// This function renders all the products to the page.
async function renderProducts() {
    const productListElement = document.getElementById('product-list');
    
    // Clear the "Loading" message.
    productListElement.innerHTML = '';
    
    const products = await fetchProducts();
    
    if (products.length > 0) {
        products.forEach(product => {
            const card = createProductCard(product);
            productListElement.appendChild(card);
        });
    } else {
        productListElement.innerHTML = '<p>No products found. Please try again later.</p>';
    }
}

// Run the render function when the page is loaded.
document.addEventListener('DOMContentLoaded', renderProducts);