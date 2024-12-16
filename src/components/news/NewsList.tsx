// Список новостей
import NewsItem from "./NewsItem.tsx";

function NewsList({news}: { news: any[] }) {
  return (
    <ul>
      {news && news.map((el) => (
        <NewsItem newsItem={el} />
      ))}
    </ul>
  )
}

export default NewsList
