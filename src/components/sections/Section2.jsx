import { motion } from 'framer-motion'
import {FcNext} from 'react-icons/fc'
const Section = ({attribute , updateState}) => {
   return(
    <div>
      {    <div id={attribute.id} className={`relative pt-[10vh] md:pt-[50vh] text-white ${!attribute.visibillity && "hidden"}`}>
                    {attribute.visibillity &&  <div className="section2 px-[40px] " key={attribute.id}>
                    <svg className='hidden md:block absolute left-[-20px] top-[-10vh] ' width="60" height="104%" viewBox="0 0 50 100%" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <motion.path d="M24.9358 29.9841L24.9358 5043.02" stroke="#105BD8" stroke-width="3"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{duration:1 }}
                        />
                        <circle cx="25.5" cy="68vh" r="12.5" fill="#105BD8"/>
                     </svg>

                    <div className="section mb-5">
                    <div className="text1 order-2 md:max-w-[60%] self-center justify-self-end">
                    <p className='text-p'>Parker Solar Probe launched on <span className='text-[#105BD8]'>Aug. 12, 2018</span> {attribute.text[0]}</p>
                    </div>
                    <div className='md:max-w-[40%]' >
                    <h1 className="section-title mb-5 md:pt-5" >{attribute.title}</h1>
                    <div className="w-full img1  ">
                    <motion.img className='w-full' src={attribute.img[0]} alt="img" />
                    </div>
                    </div>
                    </div>
                    <div className='section21 flex gap-3 mb-5 '>
                     <div className=''>
                        <p className='text-p'>The spacecraft will fly through the Sun’s atmosphere as close as <span className='text-[#105BD8]'>3.8 million miles</span> {attribute.text[1]}</p>
                     </div>
                     <div className="img12 order-2">
                     <motion.img src={attribute.img[1]} alt="img" />
                     </div>
                    </div>
                    <button className="border justify-center  items-middle flex gap-2 text-xl md:text-[30px]  border-[#105BD8] font-bold rounded-md py-2 px-4 hover:bg-[#105BD8] hover:duration-700"   onClick={()=>{
                            updateState(attribute.id)
                            }}><a href={`#${attribute.id + 1}`}>Next</a> <FcNext className='self-center'/> </button>
                    
                    
                  </div>}
                </div>
                
             }
    </div>
   );
}
 
export default Section;