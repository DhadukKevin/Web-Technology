import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function DetailFaculty(){
    const navigate =useNavigate();
    const param = useParams();
    const apiUrl = "https://630ee9663792563418834e75.mockapi.io/faculty";
    const [data,setData] = useState({});

    useEffect(()=>{
        fetch(apiUrl+"/"+param.id)
        .then(res=>res.json())
        .then(res=>setData(res));
    },[]);

    return(
        <>
        <div class="card" style={{width: '18rem'}}>
            <img src={data.avatar} class="card-img-top" alt="..." />
            <div class="card-body">
                <h6 class="card-title">FacultyName : {data.facultyname}</h6>
                <p class="card-text">Salary : {data.facultysalary}</p>
                <p class="card-text">id : {data.id}</p>
                <button class="btn btn-danger" onClick={()=>{
                fetch(apiUrl+"/"+param.id,{method:"DELETE"})
                .then(()=>{
                navigate('/faculty');
                });
                }}>Delete</button>
                <br/>
                <br/>
                <button class="btn btn-success" onClick={()=>{
                    navigate('../faculty/edit/'+param.id);
                }}>Edit</button>
                <br/>
                <br/>
                <button value="Back" class="btn btn-primary" onClick={()=>{
                    navigate('/faculty');
                }}>Back</button>
                {/* // <input type="button" value="Back" class="btn btn-primary" onClick={()=>{
                //     navigate('/faculty');
                // }}></input> */}
            </div>
        </div>
        
             
        </>
    )
}