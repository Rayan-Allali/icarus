import { motion ,useAnimation ,useInView } from 'framer-motion'
import { useRef ,useEffect,useState } from 'react'


export default function Sun() {
  const el=useRef(null)
  const isInView = useInView(el)
  console.log(isInView)
  // const [visibile, setVisible] = useState()
  // console.log(visibile)
  // useEffect(() => {
  //   const observer=new IntersectionObserver(entries=>{
  //     const entry=entries[0]
  //     setVisible(entry.isIntersecting)
      
  //   })
  //  observer.observe(el.current)
  // }, [])
  
  
    const box={
      animate:{
        x:0,
        transition:{
          delay:0.5,
          when:"beforeChildren",
          staggerChildren:0.2
        }
      },
      initial:{
        x:"-100vw"
      }
    }
const listes={
  initial:{
    x:-10,
    opacity:0
  },
  animate:{
    x:0,
    opacity:1
  }
}

  return (
    <div className='p-5'>
      {[1,2,3,4,5,6,7,8,9].map(el=>{
        return(
          <div className='w-60 h-60 bg-red-500'>
            Holla {el}
          </div>
        )
      })}
        <motion.div ref={el} className='flex  flex-col justify-around items-center w-40 h-40 bg-red-500 border rounded-md relative'
        animate="animate"
        initial="initial"
        variants={box}
        >
    {[1,2,3].map(el=>{
      return <motion.li variants={listes} className='w-10 h-10 bg-slate-600 rounded-md list-none'></motion.li>
    })}
    </motion.div>
    </div>
  )
}
