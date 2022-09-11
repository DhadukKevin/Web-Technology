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
                    <label for="formGroupExampleInput" class="form-label">Faculty Name</label>
                    <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Example input placeholder" value={data.facultyname} onChange={(e)=>{
                        setData({...data,facultyname:e.target.value});
                    }}/>
                </div>
                <div class="mb-3">
                    <label for="formGroupExampleInput2" class="form-label">Faculty Image</label>
                    <input class="form-control" id="formGroupExampleInput2" placeholder="Another input placeholder" type="text" value={data.avatar} onChange={(e)=>{
                        setData({...data,avatar:e.target.value});
                    }}/>
                </div>
                <div class="mb-3">
                    <label for="formGroupExampleInput2" class="form-label">Faculty Salary</label>
                    <input type="text" class="form-control" id="formGroupExampleInput2" placeholder={'Another input placeholder'} value={data.facultysalary} onChange={(e)=>{
                        setData({...data,facultysalary:e.target.value});
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