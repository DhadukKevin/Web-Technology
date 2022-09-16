import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AddEmployee(){
    const navigate = useNavigate();
    const apiUrl = "https://630ee9663792563418834e75.mockapi.io/faculty";

    const [data,setData] = useState({EmployeeNme:""});
    return (
        <>
            <div class="row" style={{margin: '40px'}}>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Employee Name</label>
                    <input type="text" class="form-control" onChange={(e)=>{
                        setData({...data,EmployeeName:e.target.value});
                    }}/>
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Employee Image</label>
                    <input type="text" class="form-control" onChange={(e)=>{
                        setData({...data,EmployeeImage:e.target.value});
                    }}/>
                </div>
                <div class="mb-3">
                <label class="form-check-label" for="exampleCheck1">Employee Salary</label>
                    <input type="text" class="form-control" onChange={(e)=>{
                        setData({...data,EmployeeSalary:e.target.value});
                    }}/>
                </div>
                <div class="mb-3">
                <label class="form-check-label" for="exampleCheck1">Employee Email</label>
                    <input type="text" class="form-control" onChange={(e)=>{
                        setData({...data,EmployeeEmail:e.target.value});
                    }}/>
                </div>
                <div class="mb-3">
                <label class="form-check-label" for="exampleCheck1">Employee Mobile</label>
                    <input type="text" class="form-control" onChange={(e)=>{
                        setData({...data,EmployeeMobile:e.target.value});
                    }}/>
                </div>
                <input type="button" class="btn btn-primary" value="Add Employee" onClick={()=>{
                    fetch(apiUrl,{
                        method:"POST",
                        body:JSON.stringify(data),
                        headers:{
                          "Content-Type":"application/json"
                        }
                      })
                      .then((res)=>{
                        //console.log(res);
                        navigate('/faculty');
                      })
                }} />
            </div>
        </>
    )
}