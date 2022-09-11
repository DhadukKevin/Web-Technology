import { Link } from "react-router-dom";

export default function Header(){
    return (
        <>
            <ul class="nav nav-tabs">
                <li class="nav-item">
                    <Link to="/" class="nav-link active" aria-current="page">Home</Link>
                </li>
                <li class="nav-item">
                    <Link to="/faculty" class="nav-link">Display all faculty</Link>
                </li>
                <li class="nav-item">
                    <Link to="/faculty/add" class="nav-link">Add Faculty</Link>
                </li>
            </ul>
        </>
    );
}