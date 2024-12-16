/**
 * Новость
 * @param newsItem
 * @constructor
 */
function NewsItem({newsItem}) {
  return (
    <div>
      <img src={newsItem.image} alt="" />
      <h1>{newsItem.title}</h1>
    </div>
  )
}

export default NewsItem
