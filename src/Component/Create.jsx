import React, { useContext,useState } from 'react'
import { contextprovider } from '../context/CreateContext';
import { useNavigate } from 'react-router-dom';

function Create() {
  const {addDetails}=useContext(contextprovider)
  const navigate=useNavigate();
  const [name, setName] = useState("");
    const [batch, setBatch] = useState("");
    const [age, setAge] = useState(0);
  const {}=useContext(contextprovider);
  const handleSubmit=(e)=>{
    e.preventDefault();
    addDetails(name,age,batch)
    navigate('/')
    
  }
  return (
    <div>

      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input required value={name} onChange={(e)=>setName(e.target.value)}/>
        <label>Batch:</label>
        <input required value={batch} onChange={(e)=>setBatch(e.target.value)}/>
        <label>Age:</label>
        <input required type='number' value={age} onChange={(e)=>setAge(e.target.value)}/>
        <button type='submit'>submit</button>
      </form>
    </div>
  )
}

export default Create
