export default function Sun() {
  // this is the landing page part
  return (
    <div className="landing-page">
      <div className='headline'>
        <h1 className='title'>Parker Solar Probe Story</h1> 
        <h3 className="quote">wonderful journey to the sun</h3> 
      </div>

      <div className='sun'>
        <h3 className='read-more'>Scroll To Read</h3>
        <img className='scroll' src="images/scrl.png" alt=""/>
        <div className="rotating-sat">
          <img className='sat' src="images/sat.png"  alt=""/>
        </div>
        <div className='introduction'>
          <p className="intro-title">When reaching the sun was a methodology</p> 
          <p className='intro'>The myth of Icarus is a tragic story of hubris and complacency. Icarus, the son of master craftsman Daedalus, attempted to escape from the Island of Crete by means
          of wings his father had constructed from feathers and wax. Daedalus warned his son not to fly too close to the sun, as the heat would melt the wax holding the feathers in place.
          However, Icarus became complacent and flew too close to the sun, causing his wings to melt and he to fall into the sea and drown</p> 
        </div>
      </div> 
      <div class="bg"></div>

      <div class="star-field">
        <div class="layer"></div>
        <div class="layer"></div>
        <div class="layer"></div>
      </div> 
    </div>
  )
}
