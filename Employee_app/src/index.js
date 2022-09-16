import ReactDOM from 'react-dom/client';
import DisplayEmployee from './Component/DisplayEmployee';
import Layout from './Component/Layout';
import DetailEmployee from './Component/DetailEmployee';
import Home from "./Component/Home";
import AddEmployee from './Component/AddEmployee';
import './index.css';
import EditEmployee from './Component/EditEmployee';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout/>}>
                    
                    <Route path="/home" element={<Home/>}/>
                    <Route path="/faculty" element={<DisplayEmployee/>} />
                    <Route path="/faculty/:id" element={<DetailEmployee/>} />
                    <Route path="/faculty/add" element={<AddEmployee />} />
                    <Route path="/faculty/edit/:id" element={<EditEmployee />} />
                </Route> 
            </Routes>
        </BrowserRouter>
    </>
    
)

