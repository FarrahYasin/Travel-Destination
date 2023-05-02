import { Link } from "react-router-dom";

export default function Tour(props) {
        return(
           <Link to = {`/city/:${props.id}`}>
           <div key ={props.id}>
           <p>{props.name}</p>
           <img src = {props.image} alt={props.name}/>
           </div>
           </Link>
        )
};
