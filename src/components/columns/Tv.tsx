/**
 * Телепрограмма
 * @param programs
 * @constructor
 */
function Tv({programs}) {
  return (
    <div>
      <div>Телепрограмма</div>
      <div>
        {programs && programs.map(el => (
          <>
            <span>el.time</span>
            <span>el.title</span>
            <span>el.channel</span>
          </>
        ))}
      </div>
    </div>
  )
}

export default Tv
