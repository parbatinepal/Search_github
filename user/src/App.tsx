
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Card from './Component/card'
import Github from './Component/Github'


const App = () => {
  return (
    <BrowserRouter>
       {/* <Card/> */}
       <Routes>
        <Route path='/' element={<Card />}/>
        <Route path='/user' element={<Github />}/>
       </Routes>
    </BrowserRouter>
  )
}

export default App