import React from 'react'
import { Nav } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

const Header = () => {
  const navi = useNavigate()
  return (
    <div className='container'>
      <Nav variant='tabs'>
        <Nav.Item onClick={()=>navi(-1)} style={{display:"inline-block",marginLeft:"auto"}}><Nav.Link>Deneme</Nav.Link></Nav.Item>
        <Nav.Item style={{display:"inline-block",marginLeft:"6%"}}><Nav.Link>Deneme</Nav.Link></Nav.Item>
      </Nav>
    </div>
    
  )
}

export default Header