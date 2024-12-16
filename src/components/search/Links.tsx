/**
 * Ссылки над поиском
 * @constructor
 */
function Links({links}) {
  return (
    <div>
      {links && links.map(link => (
        <a href="">{link}</a>
      ))}
    </div>
  )
}

export default Links
