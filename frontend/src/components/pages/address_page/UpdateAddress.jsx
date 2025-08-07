import React, { useEffect } from 'react'
import axios from 'axios';

const UpdateAddress = () => {

console.log('cheching.....');


    const getAddress = async() =>{
     
        try {
            
            const response = await axios.get('http://localhost:5000/api/get_address')

            if(response){
                console.log('get new address..' , response);
                
            }

        } catch (error) {
            console.log(error);
            
            
        }


    }

 useEffect(() =>{
    getAddress()
 }) 


  return (
    <div>UpdateAddress</div>
  )
}

export default UpdateAddress