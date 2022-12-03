import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { getTopStories } from '../lib/api'
import Link from 'next/link'
import { ReactElement, JSXElementConstructor, ReactFragment, ReactPortal } from 'react'

export async function getStaticProps() {
  const stories = await getTopStories();

  return {
    props: {
      stories,
  },
};
}

export default function Home( {stories}): JSX.Element {
  return (
    <div className={styles.container}>
      <Head>
        <title>HN Top Stories</title>
        <meta name="description" content="Top HN Stories" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          hacker news
        </h1>
        <table class="table-auto">
          <tbody>
          {stories.map((story: { id: any; title: any }) => (
            <tr>
              <td><Link href={`/stories/${story.id}`}>
                {story.title}
              </Link>
              </td>
            </tr>
          ))}
          </tbody>
      </table>

        <div className={styles.grid}>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}
