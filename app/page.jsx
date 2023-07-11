import '/styles/global.css';
import WalletAddress from '/components/WalletAddress';

export default async function Page() {
    const forecast = await getWeather()
  return (
    <>
        <div>
            <h1>Our Site</h1>
        </div>
        <div>
            <h2>Welcome to our homepage.</h2>
            <WalletAddress/>
            <p>This is the best home page in the world. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum aspernatur illum architecto cumque recusandae fuga sequi necessitatibus deleniti repellat harum nobis, dolor veniam vero deserunt. Voluptatibus, ducimus deserunt. Recusandae, dolore.</p>
            <p>The weather: {forecast}</p>
        </div>
    </>
  )
}

async function getWeather() {
    const response = await fetch("https://api.weather.gov/gridpoints/MFL/109,49/forecast")
    const data = await response.json()
  
    return data.properties.periods[0].detailedForecast
  }
