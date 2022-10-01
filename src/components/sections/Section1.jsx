import {FcNext} from 'react-icons/fc'
const Section = ({attribute , updateState}) => {
   return(
    <div>
      {    <div id={attribute.id} className={`relative pt-10 text-white ${!attribute.visibillity && "hidden"}`}>
                    {attribute.visibillity &&  <div className="section1 px-[40px] " key={attribute.id}>
                    <svg className='hidden md:inline absolute left-[-20px] top-[2vh] ' width="60" height="99%" viewBox="0 0 50 100%" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path  d="M24.9358 29.9841L24.9358 5043.02" stroke="#105BD8" stroke-width="3"/>
                        <circle cx="25" cy="25" r="25" fill="#105BD8"/>
                        <circle cx="25" cy="25" r="12" fill="#212121"/>
                     </svg>
                           <div>
                           <h1  className="section-title md:pt-5 mb-5">{attribute.title}</h1>
                           <div className="section mb-20 md:mb-0">
                    <div className="text1 md:max-w-[50%]">
                    <p className='text-p'>{attribute.text[0]}</p>
                    </div>
                    <div className="md:w-[40%] w-full img1">
                    <img className='w-full' src={attribute.img[0]} alt="img" />
                    </div>
                    </div>
                           </div>
                    <div className='section mb-20 md:mb-0'>
                     <div className='md:order-2 md:max-w-[50%]'>
                        <p className='text-p'>{attribute.text[1]}</p>
                     </div>
                     <div className="img12 md:w-[40%]">
                     <img className='w-full' src={attribute.img[1]} alt="img" />
                     </div>
                    </div>
                    <div className='section13 '>
                     <div className='text pb-14'>
                        <p className='text-p'>{attribute.text[2]}</p>
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