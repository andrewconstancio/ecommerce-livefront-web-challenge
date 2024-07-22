/**
 * The base URL for the fake store API. https://fakestoreapi.com".
 *
 * @constant {string}
 */
const FAKE_STORE_URL = "https://fakestoreapi.com";

/**
 * Fetches all products from the fake store API.
 *
 * @async
 * @function getAllProducts
 * @returns {Object[]} Array of product objects.
 * @throws {Error} If the network response is not ok or if fetching the products fails.
 */
export async function getAllProducts() {
	try {
		const response = await fetch(`${FAKE_STORE_URL}/products`);

		if (!response.ok) {
      throw new Error('Network response was not ok');
    }

		const data = await response.json();
		return data;
	} catch (error) {
		throw new Error('Failed to fetch the products.');
	}
}

/**
 * Fetches product by ID from the fake store API.
 *
 * @async
 * @function getProductById
 * @returns {Object} Product object.
 * @throws {Error} If the network response is not ok or if fetching the products fails.
 */
export async function getProductById(id) {
	try {
		const response = await fetch(`${FAKE_STORE_URL}/products/${id}`);
		
		if (!response.ok) {
      throw new Error('Network response was not ok');
    }

		const data = await response.json();
		return data;
	} catch(error) {
		throw new Error('Failed to fetch the product.');
	}
}

/**
 * Fetches products by category name from the fake store API.
 *
 * @async
 * @function getProductsByCategoryName
 * @returns {Object[]} Array of product objects.
 * @throws {Error} If the network response is not ok or if fetching the products fails.
 */
export async function getProductsByCategoryName(name) {
	try {
		const response = await fetch(`${FAKE_STORE_URL}/products/category/${name}`);
		
		if (!response.ok) {
      throw new Error('Network response was not ok');
    }

		const data = await response.json();
		return data;
	} catch(error) {
		throw new Error('Failed to fetch the product.');
	}
}