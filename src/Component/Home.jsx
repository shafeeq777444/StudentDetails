import { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { contextprovider } from "../context/CreateContext";

function Home() {
  const { details,setDetails } = useContext(contextprovider);
    const naviagate = useNavigate();
    const handleDelete=(b)=>{
     const a=details.filter((x,ind)=>b!=ind+1)
      setDetails(a);
    }
    const handle = () => {
        naviagate("/create");
    };
    return (
        <div >
            <div className="btn"></div>
            <div className="body">
            <button onClick={handle}>+</button>
                <h1>STUDENTS</h1>
                {details.map((x,ind) => (<li key={ind+1}><NavLink to={`/${details.length}`} >
                        {x.name}
                    </NavLink>
                    <button onClick={()=>handleDelete(ind+1)}>delete</button>
                    </li>
                    
                ))}
            </div>
        </div>
    );
}

export default Home;
