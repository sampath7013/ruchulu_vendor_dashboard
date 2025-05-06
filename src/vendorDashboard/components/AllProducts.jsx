import React, { useState,useEffect } from 'react'
import { API_URL } from '../data/apiPath';

const AllProducts = () => {
    const [products,setProducts]=useState([]);
    const productHandler=async()=>{
        const firmId=localStorage.getItem('firmId');
        try {
            const response=await fetch(`${API_URL}product/${firmId}/products`);
            const newProductsData=await response.json();
            setProducts(newProductsData.products);
            console.log(newProductsData);
        } catch (error) {
            console.error("Failed to fetch products",error);
            alert("Failed to fetch products");
        }
    }

    useEffect(()=>{
        productHandler();
        console.log("This is UseEffect");
    },[])

    const deleteProductById=async(productId)=>{
            try{
                const response=await fetch(`${API_URL}product/${productId}`,{
                    method:"DELETE"
                });
                if(response.ok){
                    setProducts(products.filter((product)=>product._id!==productId));
                    confirm("Are you sure you want to delete this product?");
                    alert("Product deleted successfully");
                }
            }
            catch(error){
                console.error("Failed to delete product",error);
                alert("Failed to delete product");
            }
    }
  return (

    <div>
      {!products?<h2>No products found</h2>:
      <table className='product-table'>
        <thead>
          <tr>
            <th>Product Name</th>
            <th>Price</th>
            
            <th>Image</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {products.map((item,index)=>{
            return(
              <tr key={item._id}>
                <td>{item.name}</td>
                <td>{item.price}</td>
                <td>{item.image && (<img src={`${API_URL}uploads/${item.image}`} style={{width:"50px",height:"50px"}} alt={item.productName} />)}</td>
                <td><button onClick={()=>deleteProductById(item._id)}>Delete</button></td>
              </tr>
            )
          })}
        </tbody>
        </table>}
    </div>
  )
}

export default AllProducts
