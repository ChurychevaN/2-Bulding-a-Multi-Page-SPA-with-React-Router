import MainNavigation from '../components/MainNavigation';

function ErrorPage() {
	return (
		<>
			<MainNavigation />
			<main>
				<h1>
					Error Page 404
				</h1>
				<p>Could not find this page!</p>
			</main>
		</>
	);
}

export default ErrorPage;