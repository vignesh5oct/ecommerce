import './App.css'
import Category from './components/Category'
import { FooterComponent } from './components/FooterComponent'
import { HeaderComponent } from './components/HeaderComponent'
import Hero from './components/Hero'
import SidePanel from './components/SidePanel'

function App() {

  return (
    <>
    <HeaderComponent/>

    <Hero/>
    <Category/>

    {/* <SidePanel/> */}

    

    <FooterComponent/>

    </>
  )
}

export default App
