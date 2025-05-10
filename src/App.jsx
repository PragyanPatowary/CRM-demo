import { useState } from 'react'
import './App.css'
import { BrowserRouter  , Route, Routes} from 'react-router-dom';
import Abc from './Abc';
import Test from './test';



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    
    <BrowserRouter>

        <Routes>

          <Route path='/Abc' element={<Abc></Abc>} />
          <Route path='/Test' element={<Test/>} />
        </Routes>
    </BrowserRouter>
    </>
  )
  
}

export default App
