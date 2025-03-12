import { Link } from "react-router-dom"

const Header = () => {
    return (
        <nav className='navbar navbar-dark navbar-expand-lg mb-4 border-bottom border-danger'>
            <div className='container'>
                <a href='/' className='navbar-brand text-light'><img src='..\images\hookd_logo.jpg' className='img-thumbnail shadow-lg' style={{height: '60px'}}/></a>
                <button className='navbar-toggler' data-bs-toggle='collapse' data-bs-target='#collapsibleElement'>
                    <span className='navbar-toggler-icon'></span>
                </button>
                <div className='navbar-collapse collapse' id='collapsibleElement'>
                    <ul className='navbar-nav'>
                        <li className='nav-item'>
                            <Link to='/' className='nav-link'>Home</Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/products' className='nav-link'>Products</Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/cart' className='nav-link'>Cart</Link>
                        </li>
                    </ul>
                </div>                
            </div>
        </nav>
    )
}

export default Header