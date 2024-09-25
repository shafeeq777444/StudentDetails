import React from 'react'
import { useContext } from 'react'
import { contextprovider } from '../context/CreateContext'
import { useNavigate, useParams } from 'react-router-dom'

function Display() {
  const navigate=useNavigate()
  const {id}=useParams();
    const {details}=useContext(contextprovider)
    const a=details.find((x,ind)=>ind+1==id)
    console.log(a);
  return (<div className='body'>
   <h1>Name: {a.name}</h1>
   <h2>Batch: {a.batch}</h2>
   <h2>age: {a.age}</h2>
  <button onClick={()=>navigate(-1)}>goBack</button>
  </div>
  )
}

export default Display
