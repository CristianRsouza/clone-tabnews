import './header.css'
import React, {useState} from 'react'
const Header = () => {
  
    const [tabcoins, setTabCoins] = useState(12)
    const [tabcash, setTabCash] = useState(11)
  
    return(
        <div className='Header'>
            <div className='Header-Left'>
                <h1>CloneNews</h1>
                <a href="">Relevantes</a>
                <a href="">Recentes</a>
            </div>
            <div className='Header-Right'>
                <p>{tabcoins}</p>
                <p>{tabcash}</p>
                    <span className='Header-Profile'></span>
            </div>
        </div>
    )
}

export default Header