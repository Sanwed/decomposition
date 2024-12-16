/**
 * Погода
 * @param temp
 * @param icon
 * @constructor
 */
function Weather({temp, icon}) {
  return (
    <div>
      <a href="">Погода</a>
      <div>
        <img src={icon} alt="" />
        <b>{temp}</b>
      </div>
    </div>
  )
}

export default Weather
