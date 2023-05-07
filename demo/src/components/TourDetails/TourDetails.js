import './TourDetails.css'
import { useParams } from "react-router-dom";
import { useState } from 'react';
import Header from '../header/Header'

export default function TourDetails (props) {   

   let {id} = useParams();
   console.log(id);
   let newArr=props.dataJson2.find((city)=> city.id === id );
   console.log(newArr);

   const [isReadMore,setIsReadMore]=useState(true);
   
   function seetext(){
    setIsReadMore(!isReadMore)
   };
    return(
        <div>
    <Header></Header>
     <div className='div3'>
         
         <h2>{newArr.name}</h2>
         <p className='p2'>
         Info:
         {isReadMore ? newArr.info.slice(0, 150) : newArr.info}
         <button className='b1' onClick={seetext}>
         {isReadMore ? "...see more" : " see less"}  
          </button> 
          </p>
         
         {/* <p>Travell price:{newArr.price}$</p> */}
         
         {/* <img src={newArr.image} alt={newArr.name} /> */}


     </div>
     </div>
    )
}



