import { motion ,useAnimation ,useInView } from 'framer-motion'
import { useRef ,useEffect,useState } from 'react'

export default function Sun() {
  // this is the footer part
  return(
    <div className="footer"> 
      <p className='the-end'>The end</p>
      <p className='rights'>All right reserved</p>
      <img className='sat-three' src="images/sat.png" alt="" />
    </div>
  )
}