import Link from 'next/link'
import Image from 'next/image'

const Navbar = () => {
	return (
		<nav>
			<div className="logo">
				<Image width={64} height={64} src='/logo.png'/>
			</div>
			<Link href="/"><a >Home</a></Link>
			<Link href="/about"><a >About</a></Link>
			<Link href="/practice"><a >Practice Listing</a></Link>
		</nav>
	 );
}

export default Navbar;