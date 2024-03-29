import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";

export default function FacultyDetail(){
        const navigate = useNavigate();
        const apiUrl = "https://630ee9663792563418834e75.mockapi.io/faculty";
        const [data,setData] = useState([]);

        useEffect(()=>{
         fetch(apiUrl)
        .then(res=>res.json())
        .then(res=>setData(res));
      },[]);

      const formatedData=data.map((fac)=>{
        return (
          <>
            <div class="card" style={{width: '15rem',margin: '20px',marginLeft:'100px'}}>
              <img src={fac.avatar} class="card-img-top" alt="..."/>
              <div class="card-body">
                <p class="card-text" onClick={()=>{
                    navigate('/faculty/'+fac.id);
                  }}>{fac.facultyname}</p>
              </div>
            </div>
                  {/* <h5 onClick={()=>{
                    navigate('/faculty/'+fac.id);
                  }}>{fac.facultyname}</h5> */}
          </>
          
        )
      })

      return(
        <>
          <div className="row">
            
              <div class="row">{formatedData}</div>
            
          </div>
          
        </>
      )
}