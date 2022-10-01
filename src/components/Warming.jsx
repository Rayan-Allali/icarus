
const Section = () => {
    return ( 
        // this is  the before main story part
        <div className="warming-page">
          <p className="transition">The myth gave rise to the idiom:
            <span className="quote-two"> "Don't fly too close to the sun" </span>
            This was back then when no human-made object could touch the sun
          </p>
          <p className="transition-two">
            but today we say:
            <span className="quote-three">"Make it towards the sun"</span>
          </p> 
          <div className="sat-sun">
            <img className="sat-icon" src="images/sat.png" alt="" />
            <img className="line first-line" src="images/dashed-line.png"  alt=""/>
            <img className="line" src="images/dashed-line.png" alt="" />
            <img className="line" src="images/dashed-line.png" alt="" />
            <img className="line last-line" src="images/dashed-line.png" alt="" />
            <div className="sun-two"></div>
          </div>  
        </div>
     );
}
 
export default Section;