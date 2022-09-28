import { motion, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

const Section = () => {
    // const myRef=useRef(null)
    // const isInView=useInView(myRef)
    // useEffect(() => {
    //     console.log("Element is in view: ", isInView)
    //   }, [isInView])
    const logo={
      initial:{
        x:-100
      },
      animate:{
        x:0,
        transition:{
          type:"spring",
          stiffness:100
        }
      }
    }
    return ( 
        <motion.div className=" p-2">
           
                <motion.div className="text-white text-xl font-semibold" 
                animate="animate"
                initial="initial"
                variants={logo}
                >Icarus</motion.div>
      <div className="flex justify-center items-center p-4">
      <motion.div  className="sun w-[950px] h-[950px]  rounded-[50%]">

      </motion.div>
      </div>
        </motion.div>
       
     );
}
 
export default Section;