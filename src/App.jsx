import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import Header from "./components/Header"
import Landing from "./pages/Landing"
import Products from "./pages/Products"
import Cart from "./pages/Cart"

const App = () => {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path='/' element={<Landing />}/>
                <Route path='/products' element={<Products />}/>
                <Route path='/cart' element={<Cart />}/>
            </Routes>
        </Router>
    )
}

export default App