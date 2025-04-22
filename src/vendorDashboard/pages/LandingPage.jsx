import React, { useState } from 'react'
import NavBar from '../components/NavBar'
import SideBar from '../components/SideBar'
import Login from '../components/forms/Login'
import Register from '../components/forms/Register'
import AddFirm from '../components/forms/AddFirm'
import AddProduct from '../components/forms/AddProduct'
import Welcome from '../components/Welcome'

const LandingPage = () => {
  const [showLogin, setShowLogin] = useState(false)
  const [showRegister, setShowRegister] = useState(false)
  const [showAddFirm, setShowAddFirm] = useState(false)
  const [showAddProduct, setShowAddProduct] = useState(false)
  const [showWelcome, setShowWelcome] = useState(false)
  const showAddProductHandler=()=>{setShowAddProduct(true);
    setShowLogin(false);
    setShowRegister(false);
    setShowAddFirm(false);
    setShowWelcome(false);
  }
  const showWelcomeHandler=()=>{setShowAddProduct(false);
    setShowWelcome(true);
    setShowLogin(false);
    setShowRegister(false);
    setShowAddFirm(false);
  }

  const showAddFirmHandler=()=>{setShowAddFirm(true);
    setShowLogin(false);
    setShowRegister(false);
    setShowAddProduct(false);
    setShowWelcome(false);
  }
  const showRegisterHandler=()=>{setShowRegister(true);
    setShowLogin(false);
    setShowAddFirm(false);
    setShowAddProduct(false);
    setShowWelcome(false);
  }
  const showLoginHandler=()=>{setShowLogin(true);
    setShowRegister(false);
    setShowAddFirm(false);
    setShowAddProduct(false);
    setShowWelcome(false);
  }
  return (
    <>
      <section className="landingSection">
        <NavBar showLoginHandler={showLoginHandler} showRegisterHandler={showRegisterHandler}/>
        <div className="collectionSection">
         <SideBar  showAddFirmHandler={showAddFirmHandler} showAddProductHandler={showAddProductHandler}/>
          {showLogin && <Login showWelcomeHandler={showWelcomeHandler}/>}
          {showRegister && <Register showLoginHandler={showLoginHandler}/>}
          {showAddFirm && <AddFirm />}
          {showAddProduct && <AddProduct />}
          {showWelcome && <Welcome />}
        </div>

        
      </section>
    </>
  )
}

export default LandingPage
