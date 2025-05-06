import React, { useState } from 'react'
import { API_URL } from '../../data/apiPath';
const AddProduct = () => {
  const [productName,setProductName]=useState('');
  const [price,setPrice]=useState('');
  const [category,setCategory]=useState([]);
  const [bestSeller,setBestSeller]=useState(false);
  const [description,setDescription]=useState('');
  const [image,setImage]=useState(null);

  const handleCategoryChange=(e)=>{
    const value=e.target.value;
    if(category.includes(value)){
      setCategory(category.filter((item)=>item!==value));
    }else{
      setCategory([...category,value]);
    }
  }

  const handleBestSellerChange=(e)=>{
    const value=e.target.value;
    if(value==="true"){
      setBestSeller(true);
    }else{
      setBestSeller(false);
    }

  }
   const handleImageUpload=(e)=>{
     const selectedImage=e.target.files[0];
     setImage(selectedImage);
   }
  const handleAddProduct=async(e)=>{
    e.preventDefault();
    try {
      const loginToken=localStorage.getItem('vendorToken');
      const firmId=localStorage.getItem('firmId');
      if(!loginToken || !firmId){
        console.error("user not authenticated");
        return;
      }
      const formData=new FormData();
      
      formData.append('name',productName);
      formData.append('price',price);
     
     formData.append('image',image);
      formData.append('description',description);
      category.forEach((value)=>{
        formData.append('category',value);
      })
      
      const response=await fetch(`${API_URL}product/add-product/${firmId}`,{
        method:'POST',
        body:formData
      });
      const data=await response.json();
      if(response.status===200){
        console.log(data);
        alert("Product added successfully");
      }
    } catch (error) {
      console.error(data.message);
      alert("Add product failed");
    }
  }
  return (
    <div className="firmSection">
        <form onSubmit={handleAddProduct} className='tableForm'>
          <h2>Add Product</h2>
          <label>Product Name</label>
          <input name='productName'  value={productName} onChange={(e)=>setProductName(e.target.value)} type='text'/>
          <label>Price</label>
          <input value={price} name='price' onChange={(e)=>setPrice(e.target.value)} type='text'/>
          <div className="checkInp">
            <label>Category</label>
            <div className="inputsContainer">
              <div className="checkboxContainer">
                <label>Veg</label>
                <input type="checkbox" checked={category.includes('veg')} name="category" onChange={handleCategoryChange} value="veg" />

              </div>
              <div className="checkboxContainer">
                <label>Non-veg</label>
                <input onChange={handleCategoryChange} checked={category.includes('nonveg')} name="category" type="checkbox" value="nonveg" />
            </div>
          </div>
          </div>
        <div className="checkInp">
          <label>Best Seller</label>
          <div className="inputsContainer">
            <div className="checkboxContainer">
              <label>Yes</label>
              <input onChange={handleBestSellerChange} checked={bestSeller===true} name="bestSeller" type='radio' value="true" />
            </div>
            <div className="checkboxContainer">
              <label>No</label>
              <input onChange={handleBestSellerChange} checked={bestSeller===false} name="bestSeller" type='radio' value="false" />
            </div>
          </div>
        </div>
        <label>Description</label>
        <input name='description' value={description} onChange={(e)=>setDescription(e.target.value)} type='text'/>
        <label>Firm Image</label>
        <input name='image' onChange={handleImageUpload} type='file'/>
        <br/>
        <div className="btnSubmit">
          <button type='submit'>Submit</button>
        </div>
        </form>
    </div>
  )
}

export default AddProduct
