import React from 'react';
import logo from '../Images/photoshooto_logo.png';


function Header(){
    return(
<>
    <img class="logo" src={logo} alt=""/>
        <p className="photoshooto">photoshooto</p>
        <p className="line">“Your Memories, Our Promise”</p>
        


</>
    )
}
export default Header