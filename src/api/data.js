const FAKE_STORE_URL = "https://fakestoreapi.com";

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