import { Link } from "react-router-dom";
import './Tour.css';
export default function Tour(props) {
        return(
           <Link to = {`/city/${props.id}`}>
           <div className= 'div1' key ={props.id}>
           <p className="p1">{props.name}</p>
           <img className='img1' src = {props.image} alt={props.name}/>
           </div>
           </Link>
        )
};
