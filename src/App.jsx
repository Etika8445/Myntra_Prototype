import './App.css'
import { BrowserRouter } from 'react-router-dom';
import Navbar from './shared/components/Navbar'
import Header from './shared/components/Header';
import Footer from './shared/components/Footer';

function App() {

  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Header/>
    <Footer/>     
    </BrowserRouter>
    </>
  )
}

export default App
