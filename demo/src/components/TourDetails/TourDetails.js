// export default function TourDetails (props) {
//     <div>
//         iuhiiggu
//     </div>
// }

import { useParams } from "react-router-dom";
import { useState } from 'react';

export default function TourDetails (props) {   

   let {id} = useParams();
   console.log(id);
   let newArr=props.d``.find((element)=> element.id === id );
   console.log(newArr);

   const [isReadMore,setIsReadMore]=useState(true);
   
   function seetext(){
    setIsReadMore(!isReadMore)
   };
    return(
     
     <div>
         
         <h1>{newArr[0].name}</h1>
         <p>
         <h3>Info:</h3>
         {isReadMore ? newArr[0].info.slice(0, 150) : newArr[0].info}
         <button onClick={seetext}>
         {isReadMore ? "...see more" : " see less"}  
          </button> 
          </p>
         
         <p><h3>Travell price:</h3>{newArr[0].price}$</p>
         
         <img src={newArr[0].image} alt={newArr[0].name} />


     </div>

    )
}



