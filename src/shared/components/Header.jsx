import { Route, Routes } from 'react-router-dom'
import Homepage from '../../pages/Homepage'
import Celebritypage from '../../pages/Celebritypage'
import Productpage from '../../pages/Productpage'
import Allproduct from '../../pages/Allproduct'

const Header = () => {
  return (
    <Routes>
        <Route path='/' element={<Homepage/>}/>
        <Route path='/celebrity' element={<Celebritypage/>}/>
        <Route path='/kurti-stylum' element={<Productpage/>}/>
        <Route path='/black-kurti' element={<Allproduct/>}/>
    </Routes>
  )
}

export default Header