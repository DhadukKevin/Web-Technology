import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function EditFaculty(){
    const navigate = useNavigate();
    const param = useParams();
    const apiUrl = "https://630ee9663792563418834e75.mockapi.io/faculty";
    const [data,setData] = useState({});
    useEffect(()=>{
        fetch(apiUrl+"/"+param.id,{method:"GET"})
        .then(res=>res.json())
        .then(res=>setData(res));
    },[]);

    return(
        <>
            <div class="row" style={{margin: '40px'}}>
                <div class="mb-3">
                    <label for="formGroupExampleInput" class="form-label">Employee Name</label>
                    <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Example input placeholder" value={data.EmployeeName} onChange={(e)=>{
                        setData({...data,EmployeeName:e.target.value});
                    }}/>
                </div>
                <div class="mb-3">
                    <label for="formGroupExampleInput2" class="form-label">Employee Image</label>
                    <input class="form-control" id="formGroupExampleInput2" placeholder="Another input placeholder" type="text" value={data.EmployeeImage} onChange={(e)=>{
                        setData({...data,EmployeeImage:e.target.value});
                    }}/>
                </div>
                <div class="mb-3">
                    <label for="formGroupExampleInput2" class="form-label">Employee Salary</label>
                    <input type="text" class="form-control" id="formGroupExampleInput2" placeholder={'Another input placeholder'} value={data.EmployeeSalary} onChange={(e)=>{
                        setData({...data,EmployeeSalary:e.target.value});
                    }}/>
                </div>
                <div class="mb-3">
                    <label for="formGroupExampleInput2" class="form-label">Employee Email</label>
                    <input type="text" class="form-control" id="formGroupExampleInput2" placeholder={'Another input placeholder'} value={data.EmployeeEmail} onChange={(e)=>{
                        setData({...data,EmployeeEmail:e.target.value});
                    }}/>
                </div>
                <div class="mb-3">
                    <label for="formGroupExampleInput2" class="form-label">Employee Mobile</label>
                    <input type="text" class="form-control" id="formGroupExampleInput2" placeholder={'Another input placeholder'} value={data.EmployeeMobile} onChange={(e)=>{
                        setData({...data,EmployeeMobile:e.target.value});
                    }}/>
                </div>

                <input type="button" value="Edit" class="btn btn-primary" onClick={()=>{
                    fetch(apiUrl+"/"+param.id,{
                        method:"PUT",
                        body:JSON.stringify(data),
                        headers:{
                        "Content-Type":"application/json"
                        }
                    })
                    .then((res)=>{
                        navigate('/faculty');
                    })
                }}/>
            </div>
            <button value="Back" style={{margin: '40px'}} class="btn btn-primary" onClick={()=>{
                    navigate('/faculty');
                }}>Back</button>  
        </>
    )
}