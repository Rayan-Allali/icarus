import { useState } from "react";
import {motion} from 'framer-motion'
import Section1 from "./sections/Section1";
import Section2 from "./sections/Section2";
import Section3 from "./sections/Section3";
import img11 from "./../images/img11.png"
import img12 from "./../images/img12.png"
import img21 from "./../images/img21.png"
import img22 from "./../images/img22.png"
import img31 from "./../images/img31.png"
import img32 from "./../images/img32.png"
const Sections = ({visibl}) => {
    const [attributes,setAttributes]=useState([{
        id:1,
        text:[
        "Parker Solar Probe is built to withstand the harsh conditions and temperature fluctuations of the mission. The key lies in its custom heat shield and an autonomous independent system that helps protect the mission from the Sun’s intense light emission.Parker Solar Probe makes use of a heat shield known as the Thermal Protection System, or TPS.The TPS was built at Carbon-Carbon Advanced Technologies, using a carbon composite foam sandwiched between two carbon plates.",
        "This lightweight insulation will be accompanied by a white ceramic coating finish on the sun-facing panel, to reflect as much heat as possible..But not all of the Solar Parker Probe instruments will be behind the TPS.",
       "The Solar Probe Cup is one of two instruments on Parker Solar Probe that will not be protected by the heat shield. This instrument is what’s known as a Faraday cup, a sensor designed to measure the ion and electron fluxes and flow angles from the solar wind. Due to the intensity of the solar atmosphere, unique technologies had to be engineered to make sure that not only can the instrument survive, but also the electronics aboard can send back accurate readings.The cup itself is made from sheets of Titanium-Zirconium-Molybdenum, an alloy of molybdenum.The grids that produce an electric field for the Solar Probe Cup are made from tungsten, a metal with the highest known melting point of 6,192 F (3,422 C). Normally lasers are used to etch the gridlines in these grids — however due to the high melting point acid had to be used instead.Another challenge came in the form of the electronic wiring —most cables would melt from exposure to heat radiation at such close proximity to the Sun"
    ],
        title:"Creation",
        img:[img11,img12],
        visibillity:true,
        lastElement:false
    },{ id:2,
        text:[
        `from Cape Canaveral Air Force Station, Florida in a  Delta IV-Heavy with Upper Stage.After launch, Parker Solar Probe detect the position of the Sun, align the thermal protection shield to face it and continue its journey, embracing the heat of the Sun and protecting itself from the cold vacuum of space.the spacecraft will make 24 orbits of our star using Venus’ gravity during seven flybys over nearly seven years to gradually bring its orbit closer to the Sun.`,
        "to our star’s surface closer than any spacecraft has come before"],
        title:"Launch",
        img:[img21,img22],
        visibillity:false,
        lastElement:false
    },{ id:3,
        text:[
        "On April 28, 2021, during its eighth flyby of the Sun, Parker Solar Probe encountered the specific magnetic and particle conditions at 18.8 solar radii (around 8.1 million miles) above the solar surface that told scientists it had crossed the Alfvén critical surface for the first time and ",
        " finally entered the solar atmosphere. For the first time, the spacecraft found itself in a region where the magnetic fields were strong enough to dominate the movement of particles there. These conditions were the definitive proof the spacecraft had passed the Alfvén critical surface and entered the solar atmosphere. ",
        "During the flyby, Parker Solar Probe passed into and out of the corona several times and at one point, as Parker Solar Probe dipped to just beneath 15 solar radii (around 6.5 million miles) from the Sun’s surface, it transited a feature in the corona called a:pseudo streamer. Pseudo Streamers are massive structures that rise above the Sun’s surface and can be seen from Earth during solar eclipses. Passing through the pseudostreamer was like flying into the eye of a storm. Inside the pseudostreamer, the conditions quieted, particles slowed, and number of switchbacks dropped (a dramatic change from the busy barrage of particles the spacecraft usually encounters in the solar wind)"
    ],
        title:"The main event",
        img:[img31,img32],
        visibillity:false,
        lastElement:true
    }
])
    let newArr = [...attributes];
    const updateState =(el)=>{
        newArr[el].visibillity = true
        setAttributes(newArr)
        if(el === 2){visibl()}
    }
    return ( 
        <div >
                <Section1 attribute={attributes[0]} updateState={updateState} />
                <Section2 attribute={attributes[1]} updateState={updateState} />
                <Section3 attribute={attributes[2]} updateState={updateState} />
        </div>
     );
}
 
export default Sections;