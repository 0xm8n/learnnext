import Link from "next/link"
import styles from "/styles/post.module.css"
import WalletAddress from '/components/WalletAddress';

export default async function Post({ params }) {
  const post = await getPost(params.slug)
  return (
    <>
      <p>
        <Link href="/blog">
          <small>&laquo; back to all blog posts</small>
        </Link>
      </p>
      <WalletAddress/>
      <h2 className={styles.title}>{post.title}</h2>
      <p>{post.content}</p>
    </>
  )
}

async function getPost(slug) {
  const response = await fetch("https://learnwebcode.github.io/json-example/posts.json")
  const data = await response.json()
  const thePost = data.posts.filter(post => post.slug === slug)[0]

  return thePost
}
