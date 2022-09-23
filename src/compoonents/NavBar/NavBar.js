import { useState, useEffect } from 'react'
import logo from '../../Assets/images/reip.png'


function NavBar() {
    // function Clock() {
    //     setInterval(() => {
    //         const date = new Date();
    //         setClock(date.toLocaleTimeString())
    //     }, 1000)
    // }

    // useEffect(() => {
    //     Clock()
    // }, [])

    return (
        <>
            <div className="NavBar">
                <div className="LeftSideNavBar">
                    <div className='Title'>
                        <div className='DashBoardTitle'>
                            <img src={logo} alt="" />
                        </div>
                        {/* <p className='DashBoardTitleSmall'>Realestate Dashboard</p> */}
                    </div>
                    <div className="CenterNavBar">
                        <a href="">Home</a>
                        <a href="">Dash</a>
                        <a href="">News</a>
                    </div>
                    <div className="RightSideNavBar">
                    </div>
                </div>
            </div>
        </>
    )
}

export default NavBar