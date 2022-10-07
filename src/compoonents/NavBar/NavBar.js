import { useState, useEffect } from 'react'
import logo from '../../Assets/images/reip.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'


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
                        {/* <a href="">Home</a>
                        <a href="">Dash</a>
                        <a href="">News</a> */}
                    </div>
                    <div className="RightSideNavBar">
                        <div className={isActive ? "FontAwesomeIcon" : 'FontAwesomeIcon FontAwesomeIconActive'} onClick={handleHamburger}>
                            <FontAwesomeIcon icon={faBars} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default NavBar