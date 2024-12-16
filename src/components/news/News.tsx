import NewsTabsButton from "./NewsTabsButton.tsx";
import NewsList from "./NewsList.tsx";
import ExchangeRate from "./ExchangeRate.tsx";

/**
 * Показывает текущие новости
 * @param news
 * @constructor
 */
function News({news}: { news: any[] }) {
  const onClick = () => {
    console.log('Tab')
  }
  return (
    <>
      <div>
        <div>
          <NewsTabsButton handler={onClick}>Сейчас в СМИ</NewsTabsButton>
          <NewsTabsButton handler={onClick}>В Германии</NewsTabsButton>
          <NewsTabsButton handler={onClick}>Сейчас в СМИ</NewsTabsButton>
        </div>
        <div className='currentDate'>31 июля, среда 02 32</div>
      </div>
      <NewsList news={news} />
      <div>
        <ExchangeRate />
        <ExchangeRate />
        <ExchangeRate />
      </div>
    </>
  )
}

export default News
