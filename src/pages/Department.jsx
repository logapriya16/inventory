import React from 'react'
import Sidenav from '../Utils/Sidenav'
import Card from '../Utils/Card'
import { useNavigate } from 'react-router-dom'

export default function Department() {
  const navigate = useNavigate()
  return (
    <div className='main-div'>
      <Sidenav/>
      < div onClick={()=>navigate('/products')} >
      <Card item="Kitchen" />
      <Card item="Clothing"/>
      <Card item="Toys"/>
      </div>
    </div>
  )
}
