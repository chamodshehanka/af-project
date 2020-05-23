import React, { useState, useEffect } from 'react';
import Axios from 'axios';

function StoreManagerList(){

    const[storeManager, setStoreManager] =  useState([]);
    
    useEffect(() => {
        Axios.get('http://localhost:4000/api/storeManager/list')
    .then((res) => {
      console.log(res);
      setStoreManager(res.data)
    })
    .catch((err) =>{
         console.error(err)
    })
    
    
    })
    return(
        <div>
            <ul>
            {storeManager.map(storeManager => (
            <li key={storeManager.storeManagerId}>{storeManager.name}</li>
            ))}
            </ul>
        </div>
    )
}

export default StoreManagerList;
