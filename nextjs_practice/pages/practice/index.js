import styles from "../../styles/Practice.module.css";
import Link from "next/link";

export const getStaticProps = async () => {
	const response = await fetch("https://jsonplaceholder.typicode.com/users");
	const data = await response.json();

	return {
		props: { practices: data },
	};
};

const Practice = ({ practices }) => {
	return (
		<div>
			<h1>All about test</h1>
			{practices.map((practice) => (
				<Link href={'/practice/' + practice.id} key={practice.id}>
					<a className={styles.single}>
						<h3>{practice.name}</h3>
					</a>
				</Link>
			))}
		</div>
	);
};

export default Practice;
