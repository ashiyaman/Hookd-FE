import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'

import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import Header from "./components/Header"
import Landing from "./pages/landing/Landing"
import Products from "./pages/Products"
import Cart from "./pages/Cart"

const App = () => {
    return (
        <div className='bg-dark text-light' style={{minHeight: '100vh'}}>
        <Router>
            <Header />
            <Routes>
                <Route path='/' element={<Landing />}/>
                <Route path='/products' element={<Products />}/>
                <Route path='/cart' element={<Cart />}/>
            </Routes>
        </Router>
        </div>
    )
}

export default App