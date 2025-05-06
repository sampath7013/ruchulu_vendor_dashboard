import React from 'react'
import {Link} from 'react-router-dom';

const  NotFound = () => {
  return (
    <>
    
            <div className="errorSection">
            <Link to='/' style={{color:'black',width:'fit-content',fontSize:'small'}}><p>back to home</p></Link>
        <h1>404</h1>
        <div>page not found</div>
    </div>
    </>
    
  )
}

export default  NotFound
