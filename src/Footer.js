import React from 'react'
import './Footer.css'

function Footer() {
    return (
        <div className='footer'>
            <div className="footer_container">
                <div className="footer_row">
                    <div className="footer_rowHeader">
                        Get to Know Us
                    </div>
                    <ul>
                        <li>About Us</li>
                        <li>Carrers</li>
                        <li>Press Releases</li>
                        <li>Amazon Cares</li>
                        <li>Gift a Smile</li>
                    </ul>
                </div>

                <div className="footer_row">
                    <div className="footer_rowHeader">
                        Connect with Us
                    </div>
                    <ul>
                        <li>Facebook</li>
                        <li>Twitter</li>
                        <li>Instagram</li>
                    </ul>
                </div>

                <div className="footer_row">
                    <div className="footer_rowHeader">
                        Make Money with Us
                    </div>
                    <ul>
                        <li>Sell on Amazon</li>
                        <li>Sell under Amazon Accelerator</li>
                        <li>Become an Affiliate</li>
                        <li>Fulfilment by Amazon</li>
                        <li>Advertise Your Products</li>
                        <li>Amazon Pay on Merchants</li>
                    </ul>
                </div>

                <div className="footer_row">
                    <div className="footer_rowHeader">
                        Let Us Help You
                    </div>
                    <ul>
                        <li>COVID-19 and Amazon</li>
                        <li>Your Account</li>
                        <li>Returns Centre</li>
                        <li>100% Purchase Protection</li>
                        <li>Amazon App Download</li>
                        <li>Amazon Assistant Download</li>
                        <li>Help</li>
                    </ul>
                </div>
            </div>

            <div className="credit">Made with Love by 
            <a href="https://www.linkedin.com/in/prashh/"> Prashant Singh</a> @2021</div>
        </div>
    )
}

export default Footer
