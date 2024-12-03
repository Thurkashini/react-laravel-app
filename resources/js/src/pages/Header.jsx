// import { Bars3Icon } from '@heroicons/react/24/solid'
import { useState } from 'react';
const Header = () => {
    const [showMenu, setShowMenu] = useState(false)
    // console.log(showMenu)
    return (

        <>

            <nav className='navbar bg-primary navbar-expand-lg'>

                <div className='container-fluid'>
                    <div>
                        <button type='button' className='btn' onClick={() => setShowMenu(!showMenu)}>
                            <span className='navbar-toggler-icon'></span>
                        </button>
                    </div>
                    <h2>React & Laravel</h2>
                </div>

            </nav>
            {showMenu &&
                <ul style={{ top: '50px', width: '7%' }} className='position-absolute nav flex-column'>
                    <li className='nav-item text-bg-secondary'><a className='nav-link text-light' href="/">Home</a></li>
                    <li className='nav-item text-bg-secondary' ><a className='nav-link text-light' href="#/Add">Register</a></li>
                    <li className='nav-item text-bg-secondary'><a className='nav-link text-light' href="#/Show">Data</a></li>
                    {/* <li className='nav-item text-bg-secondary'><a className='nav-link text-light' href="#">Update</a></li> */}
                    {/* <li className='nav-item text-bg-secondary'><a className='nav-link text-light' href="#">delete</a></li> */}
                </ul>
            }
        </>
    )
}
export default Header;