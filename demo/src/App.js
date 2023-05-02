import './App.css';
import Home from "./components/home/Home";
import dataf2 from "../src/data/db.json";
import TourDetails from './components/TourDetails/TourDetails';
import { Route, Routes } from 'react-router-dom';
// import Header from './components/header/Header';

function App() {
  return (
  <div>
    {/* <Header/> */}
 <Routes>
  <Route path='/' element={<Home dataJson2={dataf2} />}  > </Route>
  <Route path='/city/:id' element={<TourDetails dataJson2={dataf2} />}  > </Route>
</Routes> 

</div>
    );
}

export default App;

