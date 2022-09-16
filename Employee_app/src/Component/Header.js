import { Link } from "react-router-dom";

export default function Header(){
    return (
        <>
        <nav class="navbar navbar-dark bg-dark">
        <ul class="nav nav-tabs">
                <li class="nav-item">
                    <Link to="/home" class="nav-link" aria-current="page">Home</Link>
                </li>
                <li class="nav-item">
                    <Link to="/faculty" class="nav-link">Display all Employee</Link>
                </li>
                <li class="nav-item">
                    <Link to="/faculty/add" class="nav-link">Add Employee</Link>
                </li>
            </ul>
        </nav>
            
        </>
    );
}