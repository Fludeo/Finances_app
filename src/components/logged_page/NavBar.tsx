import React from "react";
import '../styles/logged_page/nav_bar.css'
import { RiDatabase2Fill } from 'react-icons/ri'
import {MdLogout} from 'react-icons/md'
import {useNavigate } from "react-router-dom";


type props = {

    setAccessToken: (payload:string)=>any
    token:string
}


const NavBar = ({setAccessToken,token}:props) => {
const navigate = useNavigate()

const resetToken =() =>{
    setAccessToken('')
    navigate('/')
}
const logout=(e: React.MouseEvent<HTMLElement, MouseEvent>)=>{
    e.preventDefault()
    fetch('/auth/session', {method:'POST',
    headers:{
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
    },
    body: JSON.stringify({logout:true})

}).then(()=>{setTimeout(resetToken,200)}).catch(err => console.log(err))
    
}
 
    return (
    <div className="nav-bar">
        <div className="logo">
            <p className="logo__text">Alke</p>
            <span className="logo__span">My</span>
            <RiDatabase2Fill className="logo__icon"></RiDatabase2Fill>
            <span className="logo__span">Finances</span>
        </div>
        <div className="links" >
                <div onClick={()=>navigate('/logged/home')} className="links__link links__link--hover"> <p className="links__text" >Home</p></div>
                 <div onClick={()=>navigate('/logged/crud')} className="links__link links__link--hover"><p className="links__text" >Crud</p></div>
                 <div onClick={(e)=>logout(e)} className="links__logout"><button  className="links__logout-button">Log out</button><MdLogout className="links__logout-icon"></MdLogout></div>
        </div>
     
    </div>)
}


export default NavBar;