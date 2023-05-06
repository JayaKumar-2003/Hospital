import React from 'react';
import plus from "../Images/plus.png";
import '../NavBar/Navbar.css';
const Navbar = () => {
  return (
    <div className='NavBar'>
      <div className='First_layer'>
        <div className='Left'>
            <div className='Home-content'>
            <a href={plus}><img src={plus} alt='not-found'></img></a>
           <span>Home</span> 
            </div>
            <div className='Blog'>
              <a href={plus}><img src={plus} alt='not-found'></img></a>
              <span>WellnessBlog</span>
            </div>
        </div>
        <div className='Right'>
          <div className='s-button'>Hospital Near Me</div>
          <div className='s-button'>eCLINIC-Telemedicine</div>
          <div className='s-button'>Call Us</div>
          <div className='s-button'>Emergency no : 1968</div>
          <div className='s-button'>Investor Relations</div>
          <div className='s-button'>Covid 19</div>
        </div>
      </div>
      <div className='Second_layer'>
          <div className='brand'>
         <span>Image</span>
          </div>
          <div className='brand-content'>
          <div className='s-button'>Find A Doctor</div>
          <div className='s-button'>Treatments</div>
          <div className='s-button'>Specialities</div>
          <div className='s-button'>International Patients</div>
          <div className='s-button'>Facilities & Services</div>
          <div className='s-button'>About Us</div>
          <div className='s-button'>Contact Us</div>
          </div>
      </div>
      <div></div>
    </div>
  )
}

export default Navbar