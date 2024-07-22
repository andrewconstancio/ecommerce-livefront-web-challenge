
/**
 * Navigation items for the application's menu.
 *
 * @constant {Object[]}
 * @property {number} id - The unique identifier for the navigation item.
 * @property {string} title - The title of the navigation item.
 * @property {string} path - The URL path for the navigation item.
 * @property {string} [groupTitle] - The title for the group of sub-navigation items (optional).
 * @property {Object[]} [children] - The sub-navigation items (optional).
 * @property {number} children.id - The unique identifier for the sub-navigation item.
 * @property {string} children.title - The title of the sub-navigation item.
 * @property {string} children.path - The URL path for the sub-navigation item.
 */
export const navItems = [{
		id: 1,
		title: "Catagories",
		path: "/",
		groupTitle: "All catagories",
		children: [{
				id: 1,
				title: "Electronics",
				path: '/category/electronics'
			},
			{
				id: 2,
				title: "Jewelery",
				path: '/category/jewelery',
			},
			{
				id: 3,
				title: "Men's Clothing",
				path: "/category/men's clothing"
			},
			{
				id: 4,
				title: "Women's Clothing",
				path: "/category/women's clothing"
			},
		  ]
	},
	{
		id: 2,
		title: "Deals",
		path: "/deals"
	},
	{
		id: 3,
		title: "New & Featured",
		path: "/newfeatured"
	},
	{
		id: 4,
		title: "Pickup & Delivery",
		path: "/pickupdelivery"
	}
];