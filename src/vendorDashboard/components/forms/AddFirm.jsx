import React, { useState } from 'react'
import { API_URL } from '../../data/apiPath';
const AddFirm = () => {
  const [firmName,setFirmName]=useState('');
  const [area,setArea]=useState('');
  const [offer,setOffer]=useState('');
  const [category,setCategory]=useState([]);
  const [region,setRegion]=useState([]);
  const [file,setfile]=useState(null);
  const handleCategoryChange=(e)=>{
    const value=e.target.value;
    if(category.includes(value)){
      setCategory(category.filter((item)=>item!==value));
    }else{
      setCategory([...category,value]);
    }
  }

const handleRegionChange=(e)=>{
  const value=e.target.value;
  if(region.includes(value)){
    setRegion(region.filter((item)=>item!==value));
  }else{
    setRegion([...region,value]);
  }
}
const handleImageUpload=(e)=>{
  const selectedImage=e.target.files[0];
  setfile(selectedImage);
}

  const handleFirmSubmit=async(e)=>{
    e.preventDefault();
    try {
      const loginToken=localStorage.getItem('vendorToken');
      if(!loginToken){
        console.error("user not authenticated");
      }
      const formData=new FormData();
      formData.append('firmName',firmName);
      formData.append('area',area);
      formData.append('offer',offer);
      formData.append('image',file);
      category.forEach((value)=>{
        formData.append('category',value);
      });
      region.forEach((value)=>{
        formData.append('region',value);
      })
      const response=await fetch(`${API_URL}firm/add-firm`,{
        method:'POST',
        headers: { 'Token': loginToken},
        body:formData
      });
      const data=await response.json();
      if(response.status===200){
        console.log(data);
        alert("Firm added successfully");
        setFirmName('');setArea('');setOffer('');setfile(null);setCategory([]);setRegion([]);
      }
    } catch (error) {
      console.error("firm add failed",error);
      alert("Firm add failed");
    }
  }
  return (
    <div className="firmSection">
        
        <form className='tableForm' onSubmit={handleFirmSubmit}>
        <h2 >Add Firm</h2>
        <label>Firm Name</label><br/>
            <input type='text' name='firmName' value={firmName} onChange={(e)=>setFirmName(e.target.value)} placeholder='Enter Firm Name'/><br/>
            <label>Area</label><br/>
            <input type='text' value={area} onChange={(e)=>setArea(e.target.value)} name='area'  /><br/>
            {/* <label>Category</label><br/>
            <input type='text' /><br/> */}
            <div className="checkInp">
              <label>Category</label>
              <div className="inputsContainer">
              <div className="checboxContainer">
                
                <label>Veg</label>
                <input type="checkbox" checked={category.includes('veg')} onChange={handleCategoryChange} value="veg"/>
              </div>
              <div className="checboxContainer">
                
                <label>Non-Veg</label>
                <input type="checkbox" checked={category.includes('nonveg')} onChange={handleCategoryChange} value="nonveg"/>
              </div>
              </div>
              
            </div>
            <div className="checkInp">
              <label>Region</label>
              <div className="inputsContainer">
              <div className="regBoxContainer">
                
                <label>South Indian</label>
                <input type="checkbox" checked={region.includes('south-indian')} onChange={handleRegionChange} value="south-indian"/>
              </div>
              <div className="checboxContainer">
                
                <label>North Indian</label>
                <input type="checkbox" checked={region.includes('north-indian')} onChange={handleRegionChange} value="north-indian"/>
              </div>
              <div className="checboxContainer">
                
                <label>Chinese</label>
                <input type="checkbox" checked={region.includes('chinese')} onChange={handleRegionChange} value="chinese"/>
              </div>
              <div className="checboxContainer">
                
                <label>Bakery</label>
                <input type="checkbox" checked={region.includes('bakery')} onChange={handleRegionChange} value="bakery"/>
              </div>
              </div>
              
            </div>
            {/* <label>Region</label><br/>
            <input type='text' /><br/> */}
            <label>Offer</label><br/>
            <input name='offer' value={offer} onChange={(e)=>setOffer(e.target.value)} type='text' /><br/>
            <label>Firm Image</label><br/>
            <input onChange={handleImageUpload} name='image' type='file' /><br/>
            <button type='submit' className='btnSubmit'>Add Firm</button>
        </form>
            
        
    </div>
  )
}

export default AddFirm
