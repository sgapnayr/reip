import { useState, useEffect } from 'react'
import logo from '../../Assets/images/reip.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faPlus } from '@fortawesome/free-solid-svg-icons'


function NavBar() {
    const [isActive, setIsActive] = useState(false)

    const handleHamburger = () => {
        setIsActive(!isActive)
        console.log(isActive)
    }

    return (
        <>
            <div className="NavBar">
                <div className="LeftSideNavBar">
                    <div className='Title'>
                        <div className='DashBoardTitle'>
                            <img src={logo} alt="" />
                        </div>
                    </div>
                    <div className="CenterNavBar">
                    </div>
                    <div className="RightSideNavBar">
                        <div className={isActive ? "FontAwesomeIcon FontAwesomeIconActive" : 'FontAwesomeIcon'} onClick={handleHamburger}>
                            <FontAwesomeIcon icon={faBars} />
                        </div>
                    </div>
                </div>
            </div>

            <div className={isActive ? "HamburgerMenu HamburgerMenuActive" : 'HamburgerMenu'}>
                <a href="">Home</a>
                <a href="">Dash</a>
                <a href="">News</a>
            </div>
        </>
    )
}

export default NavBar