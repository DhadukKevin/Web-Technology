import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import FacultyDetail from './Component/FacultyDetail';
import Layout from './Component/Layout';
import AddFaculty from './Component/AddFaculty';
import DetailFaculty from './Component/DetailFaculty';
import EditFaculty from './Component/EditFaculty';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Layout/>}>
                <Route path="/faculty" element={<FacultyDetail/>} />
                <Route path="/faculty/:id" element={<DetailFaculty/>} />
                <Route path="/faculty/add" element={<AddFaculty />} />
                <Route path="/faculty/edit/:id" element={<EditFaculty />} />
            </Route> 
        </Routes>
    </BrowserRouter>
);

