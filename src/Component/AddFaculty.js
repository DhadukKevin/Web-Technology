import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AddFaculty(){
    const navigate = useNavigate();
    const apiUrl = "https://630ee9663792563418834e75.mockapi.io/faculty";

    const [data,setData] = useState({FacultyNme:""});
    return (
        <>
            <div class="row" style={{margin: '40px'}}>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Faculty Name</label>
                    <input type="text" class="form-control" onChange={(e)=>{
                        setData({...data,facultyname:e.target.value});
                    }}/>
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Faculty Image</label>
                    <input type="text" class="form-control" onChange={(e)=>{
                        setData({...data,avatar:e.target.value});
                    }}/>
                </div>
                <div class="mb-3">
                <label class="form-check-label" for="exampleCheck1">Salary</label>
                    <input type="text" class="form-control" onChange={(e)=>{
                        setData({...data,facultysalary:e.target.value});
                    }}/>
                </div>
                <input type="button" class="btn btn-primary" value="Add Faculty" onClick={()=>{
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