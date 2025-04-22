import React from 'react'

const AddProduct = () => {
  return (
    <div className="firmSection">
        <h2 className='heading'>Add Product</h2>
        <form className='tableForm'>   
        <label>Product Name</label><br/>
            <input type='text' placeholder='Enter Firm Name'/><br/>
            <label>Price</label><br/>
            <input type='text' /><br/>
            <label>Category</label><br/>
            <input type='text' /><br/>
            <label>BestSeller</label><br/>
            <input type='text' /><br/>
            <label>Description</label><br/>
            <input type='text' /><br/>
            <label>Firm Image</label><br/>
            <input type='file' /><br/>
            <button className='btnSubmit'>Add Firm</button>
        </form>
            
        
    </div>
  )
}

export default AddProduct
