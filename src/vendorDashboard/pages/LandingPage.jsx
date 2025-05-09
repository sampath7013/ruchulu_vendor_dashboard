import React, { useState, useEffect } from 'react'
import NavBar from '../components/NavBar'
import SideBar from '../components/SideBar'
import Login from '../components/forms/Login'
import Register from '../components/forms/Register'
import AddFirm from '../components/forms/AddFirm'
import AddProduct from '../components/forms/AddProduct'
import Welcome from '../components/Welcome'
import AllProducts from '../components/AllProducts'

const LandingPage = () => {
  const [showLogin, setShowLogin] = useState(false)
  const [showRegister, setShowRegister] = useState(false)
  const [showAddFirm, setShowAddFirm] = useState(false)
  const [showAddProduct, setShowAddProduct] = useState(false)
  const [showWelcome, setShowWelcome] = useState(false)
  const [showAllProducts, setShowAllProducts] = useState(false)
  const [showLogout, setShowLogout] = useState(false)
  const [showFirmTitle, setShowFirmTitle] = useState(true)

  useEffect(() => {
    const loginToken = localStorage.getItem('vendorToken');
    if (loginToken) {
      setShowLogout(true);
      setShowWelcome(true);
    }
  }, [])

  useEffect(() => {
    const firmName = localStorage.getItem('firmName');
    const firmId = localStorage.getItem('firmId');
    if (firmName || firmId) {
      setShowFirmTitle(false);
      setShowWelcome(true);
    }
  }, [])

  const showLogoutHandler=()=>{
    confirm("are you sure you want to logout?");
    localStorage.removeItem('vendorToken');
    localStorage.removeItem('firmId');
    localStorage.removeItem('firmName');
    setShowLogout(false);
    setShowFirmTitle(true);
    setShowWelcome(false);
  }

  const showAddProductHandler=()=>{
    if(showLogout){
      setShowAddProduct(true);
    setShowLogin(false);
    setShowRegister(false);
    setShowAddFirm(false);
    setShowWelcome(false);
    setShowAllProducts(false);
    }
    else{
      alert("please Login First")
      setShowLogin(true);
    }

  }
  const showWelcomeHandler=()=>{
      setShowWelcome(false);
    setShowLogin(false);
    setShowRegister(false);
    setShowAddFirm(false);
    setShowAddProduct(false);
    setShowAllProducts(false);
    

  }

  const showAddFirmHandler=()=>{
    if(showLogout){
      setShowAddFirm(true);
    setShowLogin(false);
    setShowRegister(false);
    setShowAddProduct(false);
    setShowWelcome(false);
    setShowAllProducts(false);
    }else{
      alert("Please Login first");
      setShowLogin(true);
    }
    

  }
  const showRegisterHandler=()=>{setShowRegister(true);
    setShowLogin(false);
    setShowAddFirm(false);
    setShowAddProduct(false);
    setShowWelcome(false);
    setShowAllProducts(false);
  }
  const showLoginHandler=()=>{setShowLogin(true);
    setShowRegister(false);
    setShowAddFirm(false);
    setShowAddProduct(false);
    setShowWelcome(false);
    setShowAllProducts(false);
  }
  const showAllProductsHandler=()=>{
    if(showLogout){
      setShowLogin(false);
    setShowRegister(false);
    setShowAddFirm(false);
    setShowAddProduct(false);
    setShowWelcome(false);
    setShowAllProducts(true);
    }
    else{
      alert("please Login First")
      setShowLogin(true);
    }
    
  }
  return (
    <>
      <section className="landingSection">
        <NavBar showLogoutHandler={showLogoutHandler} showLogout={showLogout} showLoginHandler={showLoginHandler} showRegisterHandler={showRegisterHandler}/>
        <div className="collectionSection">
         <SideBar showFirmTitle={showFirmTitle} showAllProductsHandler={showAllProductsHandler}  showAddFirmHandler={showAddFirmHandler} showAddProductHandler={showAddProductHandler}/>
          {showLogin && <Login showWelcomeHandler={showWelcomeHandler}/>}
          {showRegister && <Register showLoginHandler={showLoginHandler}/>}
          {showAddFirm  && showLogout &&<AddFirm />}
          {showAddProduct  && showLogout &&<AddProduct />}
          {showWelcome && <Welcome />}
          {showAllProducts && showLogout && <AllProducts />}
        </div>

        
      </section>
    </>
  )
}

export default LandingPage
