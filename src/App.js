
import './App.css';

import Sections from './components/Sections';
import Achivement from './components/Achivement';
import { useState } from 'react';
import Warming from './components/Warming';
import Landing from './components/Landing';
import Footer from './components/Footer';
function App() {
const [visible , setVisible]=useState(false)

const visibl=()=>{
  setVisible(true)
}
  return (


    <div className="bg-black lg:px-20 sm:px-5 md:px-10  py-5"> 
    
 < Sections visibl={visibl}/> 
 {visible && <Achivement />}
 < Landing/>
      < Warming /> 
      < Footer />
</div>

  );
}

export default App;
