/**
 * Курсы валют под новостями
 * @constructor
 */
function ExchangeRate({currency, rate, change}) {
  return (
    <div>
      <b>{currency} {rate}</b> <span>{change}</span>
    </div>
  )
}

export default ExchangeRate
