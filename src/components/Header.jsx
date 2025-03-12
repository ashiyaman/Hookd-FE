import { Link } from "react-router-dom"

const Header = () => {
    return (
        <header className='navbar navbar-expand-lg'>
            <div className='container'>
                <a className='navbar-brand'>Hookd</a>
                <button className='navbar-toggler' data-bs-toggle='collapse' data-bs-target='#collapsibleElement'>
                    <span className='navbar-toggler-icon'></span>
                    <div className='navbar-collapse collapse' id='collapsibleElement'>
                        <nav className='navbar-nav'>
                            <li className='nav-item'>
                                <Link to='/' className='nav-link'>Home</Link>
                            </li>
                            <li className='nav-item'>
                                <Link to='/products' className='nav-link'>Products</Link>
                            </li>
                            <li className='nav-item'>
                                <Link to='/cart' className='nav-link'>Cart</Link>
                            </li>
                        </nav>
                    </div>
                </button>
            </div>
        </header>
    )
}

export default Header