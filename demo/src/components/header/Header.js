import './Header.css';

import { Link } from "react-router-dom";
export default function Header(props) {
    return(
    <div className='header1'>
        <h1>Travells</h1>
        <Link to = {"/"}>Home</Link>

    </div>


    )
}