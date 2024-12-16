/**
 * Посещаемое
 * @param recent
 * @constructor
 */
function Recent({recent}) {
  return (
    <div>
      <div>Посещаемое</div>
      {recent && recent.map(el => (
        <div>
          <div>{el.title}</div>
          <div>{el.text}</div>
        </div>
      ))}
    </div>
  )
}

export default Recent

