import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
      <h1>Homepage</h1>
      <p>asdafllasmdfölasödfmasödlfmöasf</p>
      <Link href="/practice">
        <a>See Practice Listing</a>
      </Link>
    </div>
  )
}
