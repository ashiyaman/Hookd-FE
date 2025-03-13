import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'

import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import Header from "./components/Header"
import Landing from "./pages/landing/Landing"
import Products from "./pages/Products"
import Accessories from './features/accessories/Accessories'
import Cart from "./pages/Cart"

const App = () => {
    return (
        <div className='bg-dark text-light' style={{minHeight: '100vh'}}>
        <Router>
            <Header />
            <Routes>
                <Route path='/' element={<Landing />}/>
                <Route path='/categoryAccessories' element={<Accessories />}/>
                <Route path='/accessories' element={<Accessories />}/>
                <Route path='/cart' element={<Cart />}/>
            </Routes>
        </Router>
        </div>
    )
}

export default App