/**
 * Эфир
 * @param lives
 * @constructor
 */
function Live({lives}) {
  return (
    <div>
      <div>Телепрограмма</div>
      <div>
        {lives && lives.map(el => (
          <>
            <img src="" alt="" />
            <span>el.title</span>
            <span>el.channel</span>
          </>
        ))}
      </div>
    </div>
  )
}

export default Live
