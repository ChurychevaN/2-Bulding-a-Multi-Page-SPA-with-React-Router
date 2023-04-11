import { Link } from 'react-router-dom';

const PRODUCTS = [
	{ id: 'p-1', title: 'Product 1' },
	{ id: 'p-2', title: 'Product 2' },
	{ id: 'p-3', title: 'Product 3' },
];

function ProductsPage() {
	return (
		<>
			<h1>The products page</h1>
			<ul>
				{ PRODUCTS.map(( prod ) =>
					<li key={ prod.id }>
						<Link to={ prod.id }>
							{ prod.title }
						</Link></li>,
				) }
			</ul>
		</>
	);
}

export default ProductsPage;