import WalletAddress from '/components/WalletAddress';

export default async function About() {
    const repoCount = await getRepoCount()
    return (
      <>
        <h2>About Us</h2>
        <WalletAddress/>
        <p>Welcome to this amazing about page. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro dolore officiis atque voluptas, quas, repellendus cum, magnam a alias unde reiciendis voluptates aliquam maxime laborum? Quae omnis eius impedit et?</p>
        <p>I have {repoCount} public repos on GitHub.</p>
      </>
    )
  }
  
async function getRepoCount() {
    const response = await fetch("https://api.github.com/users/learnwebcode")
    const data = await response.json()
    return data.public_repos
  }
