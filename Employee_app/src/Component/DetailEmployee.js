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
            <div class="card" style={{width: '19rem'}}>
                <img src={data.EmployeeImage} class="card-img-left" alt="..." />
                <div class="card-body">
                    <p class="card-text">id : {data.id}</p>
                    <h5 class="card-title">Name : {data.EmployeeName}</h5>
                    <p class="card-text">Salary : {data.EmployeeSalary}</p>
                    <p class="card-text">Email : {data.EmployeeEmail}</p>
                    <p class="card-text">Mobile : {data.EmployeeMobile}</p>
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
                    
                    
                </div>
            </div>     
        </>
    )
}