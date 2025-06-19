import React from 'react'

const Footer = () => {
  return (
    <div>
        <div className='1stcolumn'>
            <img src="" alt="" />
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut sapiente blanditiis illo quas ab quod fuga?</p>
            <div>
                <button>FaceBook</button>
                <button>Twitter</button>
                <button>Instagram</button>
                <button>LinkedIn</button>
            </div>
        </div>

        <div className='SecondColumn'>
            <h6>Quick Links</h6>

            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Service</li>
                <li>Testimotional</li>
                <li>Contact</li>
            </ul>
        </div>


        <div>
            <h6>Services</h6>

            <ul>
                <li>Web Design</li>
                <li>Web Development</li>
                <li>Seo Optimization</li>
                <li>Blog Writing</li>
            </ul>
        </div>

        <div>
            <h6>Help & Support</h6>

            <ul>
                <li>Support Center</li>
                <li>Live Chat</li>
                <li>FAQ</li>
                <li>Terms & conditions</li>
            </ul>
        </div>

        <hr />
        <p>@Design and Developed by Arshil</p>
    </div>
  )
}

export default Footer