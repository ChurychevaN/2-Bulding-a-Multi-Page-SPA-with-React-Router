import { Link, useParams } from 'react-router-dom';

function ProductDetailPage() {
	const params = useParams();

	return (
		<>
			<h1>Detail</h1>
			<p>{ params.id }</p>
			<p><Link to="..">Back</Link></p>
		</>
	);
}

export default ProductDetailPage;