
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Card from './Component/card'


const App = () => {
  return (
    <BrowserRouter>
       {/* <Card/> */}
       <Routes>
        <Route path='/' element={<Card />}/>
       </Routes>
    </BrowserRouter>
  )
}

export default App