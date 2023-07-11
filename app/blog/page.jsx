import Link from "next/link"
import WalletAddress from '/components/WalletAddress';

export default async function Blog() {
    const posts = await getPosts()
  return (
    <>
      <h2>The Blog</h2>
      <WalletAddress/>
      {posts.map((post, index) => {
        return (
          <div key={index}>
            <h3>
              <Link href={`/blog/${post.slug}`}>{post.title}</Link>
            </h3>
            <p>{post.content}</p>
            <hr />
          </div>
        )
      })}
    </>
  )
}

async function getPosts() {
  const response = await fetch("https://learnwebcode.github.io/json-example/posts.json")
  const data = await response.json()

  return data.posts
}
