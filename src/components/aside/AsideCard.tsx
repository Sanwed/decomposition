/**
 * Карточка с правой стороны сайта
 * @constructor
 */
function AsideCard({icon, title, text}) {
  return (
    <div>
      <img src={icon} alt="" />
      <div>{title}</div>
      <p>{text}</p>
    </div>
  )
}

export default AsideCard
