import { motion } from 'framer-motion'
const Section = ({attribute , updateState}) => {
   return(
    <div>
      {    <div id={attribute.id} className={`relative pt-[10vh] md:pt-[50vh] text-white ${!attribute.visibillity && "hidden"}`}>
                    {attribute.visibillity &&  <div className="section3 px-[40px]" key={attribute.id}>
                    <svg className='hidden md:block absolute left-[-20px] top-[-10vh] ' width="60" height="70vh" viewBox="0 0 50 70vh" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M24.9358 29.9841L24.9358 5043.02" stroke="#105BD8" stroke-width="3"/>
                        <circle cx="25.5" cy="68vh" r="12.5" fill="#105BD8"/>
                     </svg>
                    <motion.div  className="section pb-10" >
                    <div className="text1 md:max-w-[60%] order-2 self-center justify-self-end">
                    <p className='text-p'>on <span className='text-[#FF9D1E]'>April 28, 2021</span> {attribute.text[0]}</p>
                    </div>
                    <div className="md:w-[40%] img1">
                    <h1 className="section-title mb-5 md:pt-5">{attribute.title}</h1>
                    <motion.img src={attribute.img[0]} alt="img"  />
                    </div>
                    </motion.div>
                    <div className='section'>
                     <div className='text'>
                        <p className='text-p'>{attribute.text[1]}</p>
                     </div>
                    </div>
                    <motion.div   className='section'>
                     <div className="md:max-w-[60%]">
                        <p className='text-p'>{attribute.text[2]}</p>
                     </div>
                     <div className="md:w-[40%]">
                     <motion.img className="w-full" src={attribute.img[1]} alt="img" />
                     </div>
                    </motion.div>
                    
                  </div>}
                </div>
                
             }
    </div>
   );
}
 
export default Section;