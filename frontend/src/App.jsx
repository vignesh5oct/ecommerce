import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Body from './components/Body'
import { FooterComponent } from './components/FooterComponent'
import { HeaderComponent } from './components/HeaderComponent'
import SignIn from './pages/auth/SignIn'
import Register from './pages/auth/Register'
import { Store } from './pages/store/Store'

function App() {
  return (
    <>
    <BrowserRouter basename='/'>
      <Routes>
        <Route path="/" element={<Body />}>
          <Route index={true} path="/" element={<Store />} />
          <Route path="/signin" element={<SignIn/>} />
          <Route path="/register" element={<Register/>} />
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
