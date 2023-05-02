
import Tour from "../tours/tour/Tour";

export default function Tours(props) {
    return(
        <div>
     {props.d1.map(item =>{
    
    return ( 
        <div key = {item.id}>
      <Tour name={item.name} image ={item.image} id = {item.id}/>
      </div>
    )
    
    })}
    </div>
    )};