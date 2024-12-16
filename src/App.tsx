import News from "./components/news/News.tsx";
import AsideCard from "./components/aside/AsideCard.tsx";
import Logo from "./components/ui/Logo.tsx";
import Search from "./components/search/Search.tsx";
import Ad from "./components/ads/Ad.tsx";
import Weather from "./components/columns/Weather.tsx";
import Recent from "./components/columns/Recent.tsx";
import Map from "./components/columns/Map.tsx";
import Tv from "./components/columns/Tv.tsx";
import Live from "./components/columns/Live.tsx";

const newsData = []


function App() {
  return (
    <>
      <div>
        <News news={newsData} />
        <AsideCard />
      </div>
      <div>
        <Logo />
        <Search />
      </div>
      <Ad />
      <div>
        <div>
          <Weather />
          <Recent />
        </div>
        <div>
          <Map />
          <Tv />
        </div>
        <div>
          <Live />
        </div>
      </div>
    </>
  )
}

export default App
