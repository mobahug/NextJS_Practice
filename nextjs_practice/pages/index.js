import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Home() {
	return (
		<>
			<Head>
				<title>Practice list | Home</title>
				<meta name="keywords" content="practices" />
			</Head>
			<div>
				<h1 className={styles.title}>Homepage</h1>
				<p className={styles.text}>asdafllasmdfölasödfmasödlfmöasf</p>
				<Link href="/practice">
					<a className={styles.btn}>See Practice Listing</a>
				</Link>
			</div>
		</>
	);
}
