import Header from "../header/Header"
import Tours from "../tours/Tours"
import Footer from "../footer/Footer"
// import dataf from "../../data/db.json"

export default function Home(props) {
    return(
    <div>
        <Header />{/*this to render header element inside the home*/ }
        <Tours d1={props.dataJson2}/>{/*this to give properity called dataJson with the value dataf to tours element*/ }
        <Footer />
    </div>

    )
}