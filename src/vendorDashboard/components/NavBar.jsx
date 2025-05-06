import React from 'react'

const NavBar = ({showLoginHandler,showRegisterHandler,showLogout,showLogoutHandler}) => {
  const firmName=localStorage.getItem('firmName');
  return (
    <div className="navSection">
      <div className="company">
        vendor dashboard
      </div>
      <div className="firmName"><h4>firmName: {firmName}</h4></div>
      <div className="userAuth">
        {!showLogout ? <>
        <span onClick={showLoginHandler}>Login/</span>
        <span onClick={showRegisterHandler}>Register</span>
        </> : <span onClick={showLogoutHandler} >Logout</span>}
        
        
        
      </div>
    </div>
  )
}

export default NavBar
