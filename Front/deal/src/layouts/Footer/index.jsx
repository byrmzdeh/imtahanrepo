import React from 'react'
import './style.scss'

const Footer = () => {
  return (
    <div className='footer'>
      <div className="footers">
        <div className="about">
          <h1>About Us</h1>
          <p>Lorem ipsum dolor sit <br /> amet, consectetur adipisicing <br /> elit. Quae nisi quos at <br /> illum ipsa cumque!</p>
          <div className="sub">
            <h1>Subscribe</h1>
            <input type="text" placeholder='Search' />
          </div>
        </div>

        <div className="about">
          <h1>Quick Links</h1>
          <ul>
            <li>Lorem, ipsum.</li>
            <li>Lorem, ipsum.</li>
            <li>Lorem, ipsum.</li>
            <li>Lorem, ipsum.</li>
            <li>Lorem, ipsum.</li>
          </ul>
        </div>

        <div className="about">
          <ul>
            <li>Lorem, ipsum.</li>
            <li>Lorem, ipsum.</li>
            <li>Lorem, ipsum.</li>
            <li>Lorem, ipsum.</li>
            <li>Lorem, ipsum.</li>
          </ul>
        </div>

        <div className="about">
          <ul>
            <li>Lorem, ipsum.</li>
            <li>Lorem, ipsum.</li>
            <li>Lorem, ipsum.</li>
            <li>Lorem, ipsum.</li>
            <li>Lorem, ipsum.</li>
          </ul>
        </div>


        <div className="about">
          <h1>Contact Info</h1>
          <div className='icon'>
            <i class="fa-solid fa-location-dot"></i>
            <h3>203 Fake St. Mountain View,</h3>
          </div>
          <div className='icon'>
            <i class="fa-solid fa-phone"></i>
            <h3>+2 392 3929 210</h3>
          </div>
          <div className='icon'>
            <i class="fa-regular fa-envelope"></i>
            <h3>emailaddress@domain.com</h3>
          </div>
        </div>

      </div>

      <hr />
      <div className='all'>
      <hr />
        <p>Copyright ©2024 All rights reserved | This template is made with  by Colorlib</p>
      </div>

    </div>
  )
}

export default Footer