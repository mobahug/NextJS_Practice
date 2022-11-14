export const getStaticPaths = async () => {
	const res = await fetch("https://jsonplaceholder.typicode.com/users");

	const data = await res.json();

	const paths = data.map((practice) => {
		return {
			params: { id: practice.id.toString() },
		};
	});
	return {
		paths,
		fallback: false
	};
}

export const getStaticProps = async (context) => {
	const id = context.params.id;
	const res = await fetch("https://jsonplaceholder.typicode.com/users/" + id);
	const data = await res.json();

	return {
		props: { practice: data },
	}
}

const Details = ({practice}) => {
	return (
		<div>
			<h1>{practice.name}</h1>
			<p>{practice.email}</p>
			<p>{practice.website}</p>
			<p>{practice.address.city}</p>
		</div>
	 );
}

export default Details;
